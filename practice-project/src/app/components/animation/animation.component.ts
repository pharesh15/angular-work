import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrl: './animation.component.css',
  animations: [
    trigger('divState', [
      state(
        'normal',
        style({
          backgroundColor: 'red',
          transform: 'translateX(0)',
        })
      ),
      state(
        'highlighted',
        style({
          backgroundColor: 'blue',
          transform: 'translateX(100px)',
        })
      ),
      transition('normal => highlighted', animate(1000)),
      transition('highlighted => normal', animate(2000)),
    ]),

    trigger('divStrink', [
      state(
        'normal',
        style({
          backgroundColor: 'red',
          transform: 'translateX(0) scale(1)',
        })
      ),
      state(
        'highlighted',
        style({
          backgroundColor: 'blue',
          transform: 'translateX(100px) scale(1)',
        })
      ),
      state(
        'strunken',
        style({
          backgroundColor: 'green',
          transform: 'translateX(100px) scale(0.5)',
        })
      ),
      transition('normal => highlighted', animate(1000)),
      transition('highlighted => normal', animate(2000)),
      transition('strunken <=> *', animate(1000)),
    ]),
  ],
})
export class AnimationComponent {
  state = 'normal';
  strinkState = 'normal';

  onAnimate() {
    this.state = this.state === 'normal' ? 'highlighted' : 'normal';
    this.strinkState = this.state === 'normal' ? 'highlighted' : 'normal';
  }

  onStrink() {
    this.strinkState = 'strunken';
  }
}
