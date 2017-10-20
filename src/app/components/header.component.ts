import { Component } from '@angular/core';

declare var ga: Function;

@Component({
  selector: 'header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  private title: string = 'TEMPLATE';
};
