import { Component } from '@angular/core';
import {
  filter,
  interval,
  map,
  Observable,
  Observer,
  Subscription,
} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  // interval: any;
  dailyOrders: number = 0;
  customObservable: Subscription | undefined = undefined;
  observableInterval: Subscription | undefined = undefined;
  // ngOnInit(): void {
  // this.interval = setInterval(() => {
  //   this.dailyOrders++;
  //   console.log('Orders in home : ' + this.dailyOrders);
  // }, 1000);
  // }

  // ngOnDestroy(): void {
  //   clearInterval(this.interval);
  // }

  ngOnInit() {
    // custom observable
    const customObservableInterval = Observable.create(
      (observer: Observer<number>) => {
        let count = 0;
        setInterval(() => {
          observer.next(count);
          count++;

          if (count > 20) {
            observer.complete();
          }

          if (count > 20) {
            observer.error(new Error('Number reached greater than 3!'));
          }
        }, 1000);
      }
    );

    this.customObservable = customObservableInterval
      .pipe(
        filter((result: number) => {
          return result > 0 && result % 2 === 0;
        }),
        map((result: number) => {
          return 'Even rounds : ' + result;
        })
      )
      .subscribe(
        (result: number) => {
          console.log(result);
        },
        (error: Error) => {
          console.log(error);
        },
        () => {
          console.log(
            'This is execute only if the observable completes the operation succesfully without exception or error'
          );
        }
      );
  }

  ngOnDestroy(): void {
    if (this.customObservable) {
      this.customObservable.unsubscribe();
    }
  }
}
