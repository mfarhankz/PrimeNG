import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
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
import { SplitterComponent } from './components/splitter/splitter.component';
import { SplitterLeftComponent } from './components/splitter-left/splitter-left.component';
import { SplitterRightComponent } from './components/splitter-right/splitter-right.component';
import { MenuSearchFormComponent } from './components/menu-search-form/menu-search-form.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    SplitterComponent,
    SplitterLeftComponent,
    SplitterRightComponent,
    MenuSearchFormComponent
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
