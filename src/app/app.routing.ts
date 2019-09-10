import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ModalPopupComponent } from './modal-popup/modal-popup.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderFooterComponent } from './header-footer/header-footer.component';

const appRoutes: Routes=[
    {path:'home', component: HomeComponent},
    {path:'about', component: AboutComponent},
    {path:'contact', component: ContactComponent},
    {path:'', redirectTo:'home', pathMatch:'full'}
];

export const routing= RouterModule.forRoot(appRoutes)