import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { AddcyclesComponent } from './addcycles/addcycles.component';
import { ExistingcyclesComponent } from './existingcycles/existingcycles.component';
import { SoldcyclesComponent } from './soldcycles/soldcycles.component';
import { AllcyclesComponent } from './allcycles/allcycles.component';
import { ContainerComponent } from './container/container.component';
import { AuthGuard } from './login/guards/auth.guard';

const routes: Routes = [
	{ path: '', component: ContainerComponent },
	{ path: 'login', component: LoginComponent },
	{ path: 'soldcycles', component: AddcyclesComponent, canActivate:[AuthGuard] },
	{ path: 'existingcycleslist', component: ExistingcyclesComponent, canActivate:[AuthGuard] },
	{ path: 'soldcycleslist', component: SoldcyclesComponent, canActivate:[AuthGuard]},
	{ path: 'allcycles', component: AllcyclesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
