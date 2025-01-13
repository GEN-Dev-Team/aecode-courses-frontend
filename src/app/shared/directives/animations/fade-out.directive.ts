import { AnimationBuilder, animate, style } from '@angular/animations';
import { Directive, ElementRef, inject, OnInit } from '@angular/core';

@Directive({
  selector: '[FadeOut]',
  standalone: true,
})
export class FadeOutDirective implements OnInit {
  elementRef: ElementRef = inject(ElementRef);
  builder: AnimationBuilder = inject(AnimationBuilder);

  private player = this.builder
    .build([
      style({ opacity: 1 }),
      animate('0.5s ease-out', style({ opacity: 0 })),
    ])
    .create(this.elementRef.nativeElement);

  ngOnInit(): void {
    setTimeout(() => {
      this.player.reset();
      this.player.play();
    }, 1500);
  }
}
