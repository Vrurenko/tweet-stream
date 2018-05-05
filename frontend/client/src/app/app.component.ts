import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Response} from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  private bikesUrl = 'api/hi';
  title = 'app';

  constructor(private http: HttpClient) {
    this.getUsers();
  }

  getUsers(): any {
    return this.http.get(this.bikesUrl).subscribe((info: Response) => {
        console.log(info);
        this.title = info[0];
      }
    )
  }

}
