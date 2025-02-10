import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[customCourseButton]',
  standalone: true,
})
export class CustomCourseButtonDirective {
  @Input() mode!: string;
  @Input() isMasive!: boolean;
  @Input() courseId!: number;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.updateClasses();
  }

  private updateClasses() {
    const element = this.el.nativeElement;

    if (this.mode === 'ASINCRONO') element.classList.add('async-course-button');
    if (this.mode === 'SINCRONO')
      element.classList.add('coming-soon-course-button');
    if (this.isMasive) {
      element.classList.add('masive-course-button');
      if (this.courseId === 2)
        element.classList.add('masive-course-button-progra');
    }
  }
}
