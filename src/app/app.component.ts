import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public content = '';
  public color = 'red';
  public displayButton = true;

  public users: Array<{ nom: string }> = [
    {
      nom: 'hamid',
    },
    {
      nom: 'mouad',
    },
    {
      nom: 'test',
    },
    {
      nom: 'ls -h',
    },
    {
      nom: 'cat file >>file1',
    },
  ];
}
