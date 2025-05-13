import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[customCourseButton]',
  standalone: true,
})
export class CustomCourseButtonDirective {
  @Input() mode!: string;
  @Input() courseId!: number;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.removeClasses();
    this.updateClasses();
  }

  ngOnChanges(): void {
    this.removeClasses();
    this.updateClasses();
  }

  private updateClasses() {
    const element = this.el.nativeElement;

    if (this.mode === 'ASINCRONO') element.classList.add('async-course-button');
    if (this.mode === 'EN_VIVO') element.classList.add('in-live-button');
    if (this.mode === 'SINCRONO')
      element.classList.add('coming-soon-course-button');
  }

  private removeClasses() {
    const element = this.el.nativeElement;
    element.classList.remove('async-course-button');
    element.classList.remove('in-live-button');
    element.classList.remove('coming-soon-course-button');
  }
}
