import { Component, EventEmitter, inject, Output } from '@angular/core';
import { SessionTestService } from './session-test.service';
import { ISession } from '../../interface/Session';
import { CourseSessionService } from '../../services/course-session.service';
import { Observable } from 'rxjs';
import { ISessionTest } from '../../interface/Test';
import { AsyncPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IAnswer } from '../../interface/Answer';
import { YoutubeService } from '../../../core/services/youtube.service';

@Component({
  selector: 'app-class-question',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './class-question.component.html',
  styleUrl: './class-question.component.css',
})
export class ClassQuestionComponent {
  sessionTestService: SessionTestService = inject(SessionTestService);
  courseSessionService: CourseSessionService = inject(CourseSessionService);
  youtubeService: YoutubeService = inject(YoutubeService);
  selectedQuestion: IAnswer | null = null;

  courseSessionObject$: Observable<ISession> =
    this.courseSessionService.courseSession$;

  courseSessionTestObject!: any;
  sessionId: number = 0;

  ngOnInit(): void {
    this.courseSessionObject$.subscribe((session) => {
      this.sessionId = session.sessionId;
      this.courseSessionTestObject = session.sessiontests;
    });
  }

  closeModal() {
    this.youtubeService.setVideoGoingToFinish(false);
  }

  submitAnswer() {
    if (this.selectedQuestion) {
      // Verificamos si la respuesta seleccionada es correcta
      if (this.selectedQuestion.correct) {
        console.log('Respuesta correcta:', this.selectedQuestion);
        alert('¡Respuesta correcta!');
        this.closeModal();
      } else {
        console.log('Respuesta incorrecta:', this.selectedQuestion);
        alert('Respuesta incorrecta');
      }
    } else {
      alert('Seleccione una respuesta');
    }
  }
}
