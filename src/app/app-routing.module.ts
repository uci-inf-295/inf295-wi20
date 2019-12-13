import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ProjectComponent } from './project/project.component';

const routes: Routes = [
	{ path: '', component: HomepageComponent},
	{ path: 'project', component: ProjectComponent},
	{ path: 'calendar', component: CalendarComponent},
];

const routerOptions: ExtraOptions = {
  useHash: false,
  anchorScrolling: 'enabled',
  onSameUrlNavigation: 'reload'
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
