import { ChangeDetectorRef, Component, inject, Input } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';
import { YoutubeService } from '../../../core/services/youtube.service';
import { ClassQuestionComponent } from '../class-question/class-question.component';
import { Observable } from 'rxjs';
import { ISession } from '../../interface/Session';
import { CourseSessionService } from '../../services/course-session.service';

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
  @Input() courseIntroVideo: string = '';
  @Input() session_id: number = -1;

  youtubePlayerService: YoutubeService = inject(YoutubeService);
  cdRef: ChangeDetectorRef = inject(ChangeDetectorRef);
  courseSessionService: CourseSessionService = inject(CourseSessionService);

  courseSessionObject$: Observable<ISession> =
    this.courseSessionService.courseSession$;
  safeUrl: SafeResourceUrl = this.youtubePlayerService.getSafeUrl('');
  videoId: string | null = null;
  showTest: boolean = false;

  ngOnInit(): void {
    this.youtubePlayerService.fiveSecondsToFinish$.subscribe((value) => {
      this.showTest = value;
      this.cdRef.detectChanges(); // Forzar la detección de cambios cuando se cambie el valor de showTest
    });
  }
  ngAfterViewInit(): void {
    this.courseSessionObject$.subscribe((session) => {
      if (session.sessiontests) {
        this.initializeYoutubePlayer();
      } else {
        console.log('Seccion sin test');
      }
    });
  }

  ngOnChanges(): void {
    if (this.unit_url_video) {
      this.safeUrl = this.youtubePlayerService.getSafeUrl(this.unit_url_video);

      // console.log(
      //   'Video url sended to player from ngOnChanges:',
      //   this.unit_url_video
      // );
    } else console.log('Video no encontrado.');
  }

  initializeYoutubePlayer() {
    const courseIntroVideo = this.courseIntroVideo;

    this.safeUrl = this.youtubePlayerService.getSafeUrl(courseIntroVideo);
    this.videoId = this.youtubePlayerService.extractVideoId(
      courseIntroVideo
    ) as string;

    // console.log(
    //   'Video ID sended to player from ngAfterViewInit:',
    //   this.videoId
    // );

    this.youtubePlayerService.initializePlayer(this.videoId);
  }
}
