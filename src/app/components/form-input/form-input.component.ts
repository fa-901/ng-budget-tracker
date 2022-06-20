import { Component } from '@angular/core';
import { ItemServiceService } from 'src/app/services/item-service.service';
import { IItem } from 'src/app/types/common';

@Component({
	selector: 'app-form-input',
	templateUrl: './form-input.component.html',
	styleUrls: ['./form-input.component.scss'],
})
export class FormInputComponent {
	name = '';
	value = '';
	isFocused = false;
	constructor(private itemService: ItemServiceService) {}

	submitForm() {
		const { name, value } = this;
		const result: IItem = {
			name: name,
			value: Number(value),
			id: new Date().getTime(),
		};
		this.itemService.addItem = result;
		this.name = '';
		this.value = '';
	}

	toggleFocus() {
		this.isFocused = !this.isFocused;
	}
}
