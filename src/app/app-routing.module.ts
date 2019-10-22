import {Routes} from '@angular/router';

import {GamesComponent} from './pages/games/games.component';
import {AdditionalComponent} from './pages/additional/additional.component';
import {MerchandiseComponent} from './pages/merchandise/merchandise.component';
import {GamescomSaleComponent} from './pages/gamescom-sale/gamescom-sale.component';
import {UplayComponent} from './pages/uplay/uplay.component';
import {HomeComponent} from './pages/home/home.component';

export  const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'auth', loadChildren: './auth/auth.module#AuthModule'},
  {path: 'games', component: GamesComponent},
  {path: 'additional', component: AdditionalComponent},
  {path: 'merchandise', component: MerchandiseComponent},
  {path: 'gamescom-sale', component: GamescomSaleComponent},
  {path: 'uplay', component: UplayComponent}
];

