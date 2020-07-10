import {
  Component,
  ChangeDetectorRef,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { AuthService } from '../auth/shared/services/auth.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../auth/shared/models/user.model';
@Component({
  selector: 'mb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnDestroy {
  mobileQuery: MediaQueryList;
  lang: string;
  // tslint:disable-next-line: variable-name
  private _mobileQueryListener: () => void;
  @ViewChild('snav', { static: true }) snav: any;

  loggedInUser$: Observable<User> = this.authService.authState.pipe(
    map(firebaseUser => {
      let user: User;
      if (firebaseUser) {
        user = {
          uid: firebaseUser.uid,
          email: firebaseUser.email,
          authenticated: true,
        };
      } else {
        user = {
          uid: '',
          email: '',
          authenticated: false,
        };
      }
      return user;
    })
  );

  constructor(
    private authService: AuthService,
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private router: Router
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 731px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    // tslint:disable-next-line: deprecation
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    // tslint:disable-next-line: deprecation
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  searchMovie(term: string) {
    term === ''
      ? this.router.navigate(['/movies/all'])
      : this.router.navigate(['/movies/search', { term }]);
  }

  onLogOut() {
    this.authService.logoutUser();
    this.router.navigate(['/auth/login']);
  }

  closeSidenav() {
    if (this.mobileQuery.matches !== false) {
      this.snav.close();
    }
  }
}
