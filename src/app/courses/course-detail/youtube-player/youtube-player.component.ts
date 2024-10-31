import { Component, inject, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ClassQuestionComponent } from '../class-question/class-question.component';
import { ProgressSessionService } from '../../services/progress-session.service';
import { IProgressSession } from '../../interface/ProgressSession';

declare var YT: any;

declare global {
  interface Window {
    onYouTubeIframeAPIReady: () => void;
  }
}

@Component({
  selector: 'app-youtube-player',
  standalone: true,
  imports: [ClassQuestionComponent],
  templateUrl: './youtube-player.component.html',
  styleUrls: ['./youtube-player.component.css'],
})
export class YoutubePlayerComponent {
  @Input() unit_url_video: string = '';
  @Input() session_id: number = -1;
  @Input() course_intro_video: string = '';

  sanitizer: DomSanitizer = inject(DomSanitizer);
  route: ActivatedRoute = inject(ActivatedRoute);
  progressSessionService: ProgressSessionService = inject(
    ProgressSessionService
  );

  userId: number = -1;
  showQuestionModal = false;
  progressSession!: IProgressSession;
  public safeUrl: SafeResourceUrl | undefined;
  private player: any;
  private videoDuration: number = 0;
  private hasReached50Percent: boolean = false;
  private hasReached90Percent: boolean = false;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    this.userId = JSON.parse(localStorage.getItem('user') || '{}').userId;

    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      this.course_intro_video
    );
  }

  ngOnChanges(): void {
    // Cada vez que cambie el unit_url_video, actualiza la URL segura
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      this.unit_url_video + '?enablejsapi=1'
    );
  }

  ngAfterViewInit(): void {
    // Cargar la API de YouTube
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);

    // Esperar a que la API esté lista
    window['onYouTubeIframeAPIReady'] = () => {
      const videoId = this.extractVideoId(this.unit_url_video);
      this.player = new YT.Player('videoIframe', {
        videoId: videoId,
        events: {
          onReady: (event: any) => this.onPlayerReady(event),
          onStateChange: (event: any) => this.onPlayerStateChange(event),
        },
      });
    };
  }

  extractVideoId(url: string): string {
    const regExp =
      /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regExp);
    return match ? match[1] : '';
  }

  onPlayerReady(event: any): void {
    // Obtener la duración total del video
    this.videoDuration = this.player.getDuration();
    console.log(
      'El video está listo. Duración total:',
      this.videoDuration,
      'segundos.'
    );
    // Iniciar el seguimiento del progreso del video
    this.trackVideoProgress();
  }

  trackVideoProgress(): void {
    setInterval(() => {
      if (
        this.player &&
        this.player.getPlayerState() === YT.PlayerState.PLAYING
      ) {
        const currentTime = this.player.getCurrentTime();
        const percentage = (currentTime / this.videoDuration) * 100;

        if (percentage >= 50 && !this.hasReached50Percent) {
          console.log('El video ha alcanzado el 50%');
          this.hasReached50Percent = true;
        }

        if (
          currentTime >= this.videoDuration - 5 &&
          !this.hasReached90Percent
        ) {
          console.log('El video terminara en 5 segundos.');
          console.log(this.progressSession);
          this.postProgressSession(this.session_id, this.userId);
          this.hasReached90Percent = true;
          this.showQuestionModal = true;
        }
      }
    }, 1000);
  }

  onPlayerStateChange(event: any): void {
    // Estado 0 significa que el video terminó
    if (event.data === YT.PlayerState.ENDED) {
      console.log('El video ha terminado.');
    }
  }

  postProgressSession(sessionId: number, userId: number) {
    this.progressSession = {
      progressId: -1,
      userId: userId,
      sessionId: sessionId,
      completed: true,
    };

    this.progressSessionService.post(this.progressSession).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
