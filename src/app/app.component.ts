import { Component, viewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DialogComponent } from './components/dialog/dialog.component';
import { DialogAuthActionsComponent } from './components/dialog-auth-actions/dialog-auth-actions.component';
import { AppNumbersOnlyDirective } from './directives/app-numbers-only.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DialogComponent, AppNumbersOnlyDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ng-content-reproj';
  dialog = viewChild.required(DialogComponent);
}
