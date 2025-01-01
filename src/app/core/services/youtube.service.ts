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
import { AuthService } from './auth.service';

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
  authService: AuthService = inject(AuthService);
  sanitizer: DomSanitizer = inject(DomSanitizer);
  progressSessionService: ProgressSessionService = inject(
    ProgressSessionService
  );
  courseSessionProgressService: CourseSessionService =
    inject(CourseSessionService);
  sessionTestService: SessionTestService = inject(SessionTestService);

  courseSessionObject!: ISession;
  userId: number = -1;
  questionAnswered = false;

  fiveSecondsToFinish$: Observable<boolean> =
    this.fiveSecondsToFinishSubject.asObservable();

  initializePlayer(videoId: string): void {
    // Cargar la API de YouTube
    if (this.browserService.isBrowser()) {
      this.userId = this.authService.getUserDetails().userId;

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
    // Verificar que los objetos requeridos estén inicializados antes de configurar el seguimiento
    if (!this.player || !this.userId || !this.courseSessionObject?.sessionId) {
      console.log(
        'Player, userId o sessionId no están inicializados. No se puede rastrear el progreso del video.'
      );
      return;
    }

    // Usar setInterval para revisar el estado de progreso del video cada segundo
    const intervalId = setInterval(() => {
      if (
        this.player &&
        !this.fiveSecondsToFinishSubject.getValue() &&
        this.player.getPlayerState() === YT.PlayerState.PLAYING
      ) {
        const currentTime = this.player.getCurrentTime();
        const timeRemaining = this.videoDuration - currentTime;

        // Verificar si el video está a 5 segundos de terminar
        if (timeRemaining <= 5 && !this.questionAnswered) {
          console.log('El video está a punto de terminar en 5 segundos.');

          // Pausar el video y actualizar el estado para evitar múltiples ejecuciones
          this.player.pauseVideo();
          this.questionAnswered = true;
          this.setVideoGoingToFinish(true);

          // Crear el progreso del video
          const progressItem: IProgressSession = {
            progressId: 0,
            userId: this.userId,
            sessionId: this.courseSessionObject.sessionId,
            completed: true,
          };

          // Guardar el progreso del video
          this.progressSessionService
            .createSessionProgress(progressItem)
            .subscribe({
              next: (response) => {
                console.log('Progreso del video guardado:', response);
              },
              error: (err) => {
                console.error('Error al guardar el progreso del video:', err);
              },
            });

          // Limpiar el intervalo después de completar la acción
          clearInterval(intervalId);
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
