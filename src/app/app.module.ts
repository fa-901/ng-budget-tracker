import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormInputComponent } from './components/form-input/form-input.component';
import { ListGroupComponent } from './components/list-group/list-group.component';
import { ButtonGroupComponent } from './components/button-group/button-group.component';

@NgModule({
	declarations: [
		AppComponent,
		FormInputComponent,
		ListGroupComponent,
		ButtonGroupComponent,
	],
	imports: [BrowserModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
