import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {ListsPage} from '../pages/lists/lists';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListsPage
  ],
  providers: []
})
export class AppModule {}
