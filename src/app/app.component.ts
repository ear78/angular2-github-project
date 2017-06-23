import { Component } from '@angular/core';
import { GithubService } from './services/github.service';

@Component({
  selector: 'app-root',
  template: '<profile></profile>',
  styleUrls: ['./app.component.css'],
  providers: [GithubService]
})
export class AppComponent {}
