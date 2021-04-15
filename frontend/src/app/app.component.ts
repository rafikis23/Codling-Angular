import { Component } from '@angular/core';
import { faUserPlus, faSignInAlt, faCheck, faTimes, faCode, faFileCode, faLaptopCode, faTerminal } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faWhatsapp, faTwitter, faInstagram} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  faUserPlus = faUserPlus;
  faSignInAlt = faSignInAlt;
  faCheck = faCheck;
  faTimes = faTimes;
  faCode = faCode;
  faFileCode = faFileCode;
  faLaptopCode = faLaptopCode;
  faFacebookF = faFacebookF;
  faWhatsapp = faWhatsapp;
  faTwitter = faTwitter;
  faInstagram = faInstagram;
  faTerminal = faTerminal;
}
