import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { ButtonGroupComponent } from './components/button-group/button-group.component';
import { FormInputComponent } from './components/form-input/form-input.component';
import { ListGroupComponent } from './components/list-group/list-group.component';
import { FormsModule } from '@angular/forms';

@NgModule({
	declarations: [
		AppComponent,
		FormInputComponent,
		ListGroupComponent,
		ButtonGroupComponent,
	],
	imports: [BrowserModule, CommonModule, FormsModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
