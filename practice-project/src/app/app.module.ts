import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { BasicHighlightDirective } from './directives/basic-highlight.directive';
import { BasicColorDirective } from './directives/basic-color.directive';

@NgModule({
  declarations: [AppComponent, BasicHighlightDirective, BasicColorDirective],
  bootstrap: [AppComponent],
  imports: [BrowserModule],
})
export class AppModule {}
