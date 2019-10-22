import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {RouterModule} from '@angular/router';
import {routes} from './app-routing.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { MenuComponent } from './core/menu/menu.component';
import {MatMenuModule, MatCardModule, MatButtonToggleModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
// import { SearchComponent } from './core/search/search.component';
// import { SampleResult } from './core/search/sample-result';
import { BoldPipe } from './core/search/bold.pipe';
import { PagesComponent } from './pages/pages.component';
import { AdditionalComponent } from './pages/additional/additional.component';
import { GamesComponent } from './pages/games/games.component';
import { GamescomSaleComponent } from './pages/gamescom-sale/gamescom-sale.component';
import { HomeComponent } from './pages/home/home.component';
import { MerchandiseComponent } from './pages/merchandise/merchandise.component';
import { UplayComponent } from './pages/uplay/uplay.component';
import {MatDialogModule} from '@angular/material';
import {AuthModule} from './auth/auth.module';
import { DialogSingInComponent } from './dialog/dialog-sing-in/dialog-sing-in.component';
import { DialogSingUpComponent } from './dialog/dialog-sing-up/dialog-sing-up.component';
import { ProductComponent } from './components/product/product.component';
import { ProductDetailsComponent } from './components/product/product-details/product-details.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    // SearchComponent,
    // SampleResult,
    BoldPipe,
    PagesComponent,
    AdditionalComponent,
    GamesComponent,
    GamescomSaleComponent,
    HomeComponent,
    MerchandiseComponent,
    UplayComponent,
    DialogSingInComponent,
    DialogSingUpComponent,
    ProductComponent,
    ProductDetailsComponent,
  ],
  entryComponents: [DialogSingInComponent, DialogSingUpComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FlexLayoutModule,
    MatButtonModule,
    MatCheckboxModule,

    RouterModule.forRoot(routes),
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatCardModule,
    MatButtonToggleModule,
    MatDialogModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
