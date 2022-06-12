import { Component } from '@angular/core';
import { ItemServiceService } from 'src/app/services/item-service.service';

@Component({
	selector: 'app-button-group',
	templateUrl: './button-group.component.html',
	styleUrls: ['./button-group.component.scss'],
})
export class ButtonGroupComponent {
	isEdit = false;

	constructor(private itemService: ItemServiceService) {}

	get remaining() {
		return this.itemService.budget;
	}
	get spent() {
		return this.itemService.budget;
	}
	get budget() {
		return this.itemService.budget;
	}

	toggleEdit() {
		this.isEdit = !this.isEdit;
	}

	onInputChange(event: Event) {
		const value = Number((event.target as HTMLInputElement).value);
		this.itemService.setAmount = value;
	}
}
