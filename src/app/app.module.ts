import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReviewSelectedComponent } from './review-selected/review-selected.component';
import { FormsModule } from "@angular/forms";
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { SplitterModule } from 'primeng/splitter';
import { TableModule } from 'primeng/table';
import { TabMenuModule } from 'primeng/tabmenu';
import { TabViewModule } from 'primeng/tabview';
import { DividerModule } from 'primeng/divider';
import { MenuComponent } from './components/menu/menu.component';
import { DropdownModule } from 'primeng/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from "primeng/ripple";
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CardModule } from 'primeng/card';
import { SplitterLeftComponent } from './components/splitter-left/splitter-left.component';
import { SplitterRightComponent } from './components/splitter-right/splitter-right.component';
import { MenuSearchFormComponent } from './components/menu-search-form/menu-search-form.component';
import { ReviewHomeComponent } from './review-home/review-home.component';


@NgModule({
  declarations: [
    AppComponent,
    ReviewSelectedComponent,
    MenuComponent,
    SplitterLeftComponent,
    SplitterRightComponent,
    MenuSearchFormComponent,
    ReviewHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ButtonModule,
    RippleModule,
    FormsModule,
    InputTextModule,
    MenubarModule,
    SplitterModule,
    TableModule,
    TabMenuModule,
    TabViewModule,
    DividerModule,
    DropdownModule,
    InputTextareaModule,
    CardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
