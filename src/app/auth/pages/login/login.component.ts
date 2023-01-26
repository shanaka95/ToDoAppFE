import { Component , OnInit, ViewEncapsulation } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

    // True if device is a mobile or tablet device
    isMobile = true;

    constructor(private responsive: BreakpointObserver) {

    }

    ngOnInit() {

        // Detecting screen layout changes
        this.responsive.observe([
                Breakpoints.Web,
                Breakpoints.WebLandscape,
                Breakpoints.WebPortrait,
                Breakpoints.Medium,
                Breakpoints.Large,
                Breakpoints.XLarge
            ])
            .subscribe(result => {

                this.isMobile = true;

                // Check if screen layout matches with a web layout
                if (result.matches) {
                    this.isMobile = false;
                }

            });

    }
}
