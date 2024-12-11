import { inject, Injectable } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { ProgressSessionService } from '../../courses/services/course-progress.service';
import { ISession } from '../../courses/interface/Session';
import { CourseSessionService } from '../../courses/services/course-session.service';
import { SessionTestService } from '../../courses/course-detail/class-question/session-test.service';
import { Subject } from 'rxjs/internal/Subject';
import { Observable } from 'rxjs/internal/Observable';
import { BehaviorSubject } from 'rxjs';
import { IProgressSession } from '../../courses/interface/CourseProgress';
import { BrowserService } from './browser.service';

declare var YT: any;

declare global {
  interface Window {
    onYouTubeIframeAPIReady: () => void;
  }
}

@Injectable({
  providedIn: 'root',
})
export class YoutubeService {
  private player: any;
  private videoDuration: number = 0;
  private fiveSecondsToFinishSubject = new BehaviorSubject<boolean>(false);

  browserService: BrowserService = inject(BrowserService);
  sanitizer: DomSanitizer = inject(DomSanitizer);
  progressSessionService: ProgressSessionService = inject(
    ProgressSessionService
  );
  courseSessionProgressService: CourseSessionService =
    inject(CourseSessionService);
  sessionTestService: SessionTestService = inject(SessionTestService);

  courseSessionObject!: ISession;
  userId: number = JSON.parse(localStorage.getItem('user') || '{}').userId;
  questionAnswered = false;

  fiveSecondsToFinish$: Observable<boolean> =
    this.fiveSecondsToFinishSubject.asObservable();

  initializePlayer(videoId: string): void {
    // Cargar la API de YouTube
    if (this.browserService.isBrowser()) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);

      // Esperar a que la API esté lista
      window['onYouTubeIframeAPIReady'] = () => {
        this.player = new YT.Player('videoIframe', {
          videoId: videoId, // ID del video
          events: {
            onReady: (event: any) => this.onPlayerReady(event),
            onStateChange: (event: any) => this.onPlayerStateChange(event),
          },
        });
      };

      this.courseSessionProgressService.courseSession$?.subscribe((session) => {
        this.courseSessionObject = session;
      });
    }
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
    // Revisa cada segundo el estado de progreso del video
    setInterval(() => {
      if (
        this.player &&
        !this.fiveSecondsToFinishSubject.getValue() &&
        this.player.getPlayerState() === YT.PlayerState.PLAYING
      ) {
        const currentTime = this.player.getCurrentTime();
        const timeRemaining = this.videoDuration - currentTime;

        if (
          timeRemaining <= 5 &&
          !this.questionAnswered &&
          this.userId &&
          this.courseSessionObject.sessionId
        ) {
          console.log('El video está a punto de terminar en 5 segundos.');
          this.player.pauseVideo();
          this.questionAnswered = true;
          this.setVideoGoingToFinish(true);

          // Guardar el progreso del video
          const progressItem: IProgressSession = {
            progressId: 0,
            userId: this.userId,
            sessionId: this.courseSessionObject.sessionId,
            completed: true,
          };

          // console.log('Progreso del video:', progressItem);
          this.progressSessionService
            .createSessionProgress(progressItem)
            .subscribe((response) => {
              console.log('Progreso del video guardado:', response);
            });
        }
      }
    }, 1000); // Revisa cada segundo
  }

  onPlayerStateChange(event: any): void {
    // Estado 0 significa que el video terminó
    if (event.data === YT.PlayerState.ENDED) {
      console.log('El video ha terminado.');
    }
  }

  getSafeUrl(videoUrl: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      videoUrl + '?enablejsapi=1'
    );
  }

  extractVideoId(url: string): string | null {
    const regExp =
      /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:embed\/|v\/|watch\?v=|.*\/)|youtu\.be\/)([^&?\/\s]{11})/;
    const match = url.match(regExp);
    return match ? match[1] : null;
  }

  setVideoGoingToFinish(state: boolean) {
    this.fiveSecondsToFinishSubject.next(state);
  }
}
