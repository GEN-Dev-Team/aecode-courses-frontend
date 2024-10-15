import {
  animate,
  AnimationBuilder,
  AnimationPlayer,
  style,
  transition,
} from '@angular/animations';
import { Directive, ElementRef, HostListener, inject } from '@angular/core';

@Directive({
  selector: '[ZoomIn]',
  standalone: true,
})
export class ZoomInDirective {
  elementRef: ElementRef = inject(ElementRef);
  builder: AnimationBuilder = inject(AnimationBuilder);
  player!: AnimationPlayer;

  private playAnimation(scaleValue: number, duration: string) {
    this.player = this.builder
      .build([
        animate(
          duration,
          style({
            transform: `scale(${scaleValue})`,
          })
        ),
      ])
      .create(this.elementRef.nativeElement);

    this.player.play();
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.playAnimation(1.05, '100ms');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.playAnimation(1, '100ms');
  }
}
