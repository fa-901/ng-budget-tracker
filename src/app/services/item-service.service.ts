import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class ItemServiceService {
	budget = 100;

	constructor() {}

	setAmount(value: number) {
		this.budget = value;
	}
}
