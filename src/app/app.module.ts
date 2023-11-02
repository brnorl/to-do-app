import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './components/nav/nav.component';
import { CdkDrag, CdkDropList } from '@angular/cdk/drag-drop';
import { ListsComponent } from './components/lists/lists.component';
import { DetailDialogComponent } from './components/detail-dialog/detail-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ModalService } from './services/modal.service';
import { ToDoService } from './services/to-do.service';
import { HttpClientModule } from '@angular/common/http';
import { CreateDialogComponent } from './components/create-dialog/create-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateDialogComponent } from './components/update-dialog/update-dialog.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { FooterComponent } from './components/footer/footer.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import * as fromApp from './store/app.reducer';
import { CardComponent } from './components/card/card.component';
import { TodoButtonComponent } from './components/todoButton/todoButton.component';
import { TodoInputComponent } from './components/todoInput/todoInput.component';
import { TodoCalendarComponent } from './components/todoCalendar/todoCalendar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    ListsComponent,
    DetailDialogComponent,
    CreateDialogComponent,
    UpdateDialogComponent,
    CardComponent,
    TodoButtonComponent,
    TodoInputComponent,
    TodoCalendarComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatIconModule,
    CdkDrag,
    CdkDropList,
    MatDialogModule,
    NgxChartsModule,
    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    EffectsModule.forRoot([]),
    StoreModule.forFeature(fromApp.appFeatureKey, fromApp.itemReducer),
  ],
  providers: [ModalService, ToDoService],
  bootstrap: [AppComponent],
})
export class AppModule {}
