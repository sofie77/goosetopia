import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { GooseListComponent } from './geese/goose-list.component';

@NgModule({
  declarations: [
    AppComponent,
    GooseListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
