import { Component, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';

/* NgRx */
import { Store } from '@ngrx/store';
import { AppActions } from './state/actions';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ToDoApp';

  constructor(private responsive: BreakpointObserver, private store: Store) {

  }

  ngOnInit() {

    // Detecting screen layout changes
    this.responsive.observe([
            '(min-width: 960px)'
        ])
        .subscribe(result => {
            this.store.dispatch(AppActions.toggleDeviceType({ isMobile: true }));

            // Check if screen layout matches with a web layout
            if (result.matches) {
                this.store.dispatch(AppActions.toggleDeviceType({ isMobile: false }));
            }

        });

    }


}
