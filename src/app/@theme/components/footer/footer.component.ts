import { Component, OnInit } from '@angular/core';
import { UserData } from '../../../@core/data/users';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">
    Created with ♥ by <a href="https://buiminhvu.com" target="_blank">
    <b>Vu Bui</b></a> base on awesome project <a href="https://akveo.com" target="_blank">Akveo</a> 2019
    </span>
    <div class="socials">
      <a href="{{user.github}}" target="_blank" class="ion ion-social-github"></a>
      <a href="{{user.facebook}}" target="_blank" class="ion ion-social-facebook"></a>
      <a href="{{user.instagram}}" target="_blank" class="ion ion-social-instagram"></a>
      <a href="{{user.twitter}}" target="_blank" class="ion ion-social-twitter"></a>
      <a href="{{user.linkedin}}" target="_blank" class="ion ion-social-linkedin"></a>
    </div>
  `,
})
export class FooterComponent implements OnInit {
  user: any;
  constructor(
    private _userService: UserData,
  ) {}

  ngOnInit() {
    this._userService.getUsers()
    .subscribe((users: any) => this.user = users.vu);
  }
}
