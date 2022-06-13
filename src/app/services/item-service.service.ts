import { EventEmitter, Injectable } from '@angular/core';
import { IItem } from '../types/common';

@Injectable({
	providedIn: 'root',
})
export class ItemServiceService {
	budget = 100;
	itemList: IItem[] = [];

	constructor() {}

	set setAmount(value: number) {
		this.budget = value;
	}

	set addItem(item: IItem) {
		this.itemList.push(item);
		this.listUpdated.emit(this.itemList);
	}

	listUpdated = new EventEmitter();
}
