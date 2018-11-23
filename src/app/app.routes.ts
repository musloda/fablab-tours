import { Route } from '@angular/router';
import { HeaderComponent } from './header/header.component'


const ROUTES: Route[] = [
{
	path: 'accueil',
	component: HeaderComponent,
},
{ path: '',
    redirectTo: '/accueil',
    pathMatch: 'full' 
},

];

export { ROUTES };
