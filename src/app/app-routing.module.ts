import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'slalom',
    loadChildren: () => import('./games/slalom/slalom.module').then( m => m.SlalomPageModule)
  },
  {
    path: 'freestyle',
    loadChildren: () => import('./games/freestyle/freestyle.module').then( m => m.FreestylePageModule)
  },
  {
    path: 'jump',
    loadChildren: () => import('./games/jump/jump.module').then( m => m.JumpPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('./registration/registration.module').then( m => m.RegistrationPageModule)
  },
  {
    path: 'verify-email',
    loadChildren: () => import('./verify-email/verify-email.module').then( m => m.VerifyEmailPageModule)
  },
  {
    path: 'setup1',
    loadChildren: () => import('./setup1/setup1.module').then( m => m.Setup1PageModule)
  },
  {
    path: 'setup2',
    loadChildren: () => import('./setup2/setup2.module').then( m => m.Setup2PageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
