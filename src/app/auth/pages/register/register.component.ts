import { Component , OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';

// Services
import { AuthService } from '../../services/auth.service';

// NgRx
import { Store } from '@ngrx/store';

// Store
import { selectShowConfPassword, selectShowPassword } from '../../state/user.state';
import { UserActions } from '../../state/actions';
import { selectDeviceType } from '../../../state/app.state'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RegisterComponent implements OnInit {

    // True if device is a mobile or tablet device
    isMobile$: Observable<boolean>;
    showPassword$: Observable<boolean>;
    showConfPassword$: Observable<boolean>;

    constructor( private auth: AuthService, private store: Store) {

    }

    ngOnInit() {
        this.isMobile$ = this.store.select(selectDeviceType);

        this.showPassword$ = this.store.select(selectShowPassword);
        this.showConfPassword$ = this.store.select(selectShowConfPassword);
    }

    togglePassword(): void{
        this.store.dispatch(UserActions.togglePasswordVisibility());

    }

    toggleConfPassword(): void{
        this.store.dispatch(UserActions.toggleConfPasswordVisibility());

    }

}
