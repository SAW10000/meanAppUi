import { Routes } from '@angular/router';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { MapComponent } from './pages/map/map.component';

export const routes: Routes = [
  {path:'contact',component:ContactComponent},
  {path:'home',component:HomeComponent},
  {path:'experience',component:ExperienceComponent},
  {path:'map',component:MapComponent},
  {path:'',redirectTo:'home',pathMatch:'full'}
];
