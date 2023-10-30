import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
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
import { MatDividerModule } from '@angular/material/divider';
import { CreateDialogComponent } from './components/create-dialog/create-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { UpdateDialogComponent } from './components/update-dialog/update-dialog.component';
import { MatNativeDateModule } from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { NgxChartsModule } from "@swimlane/ngx-charts";

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ListsComponent,
    DetailDialogComponent,
    CreateDialogComponent,
    UpdateDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    CdkDrag,
    CdkDropList,
    MatDialogModule,
    MatButtonModule,
    MatDividerModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgxChartsModule
  ],
  providers: [ModalService, ToDoService],
  bootstrap: [AppComponent],
})
export class AppModule {}
