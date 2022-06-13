import { Component, OnInit } from '@angular/core';
import { ItemServiceService } from 'src/app/services/item-service.service';
import { IItem } from 'src/app/types/common';

@Component({
	selector: 'app-list-group',
	templateUrl: './list-group.component.html',
	styleUrls: ['./list-group.component.scss'],
})
export class ListGroupComponent implements OnInit {
	search = '';
	filteredList: IItem[] = [];

	constructor(private itemService: ItemServiceService) {}

	get fullList() {
		return this.itemService.itemList;
	}

	//TODO
	deleteItem() {}

	searchItem() {
		const { itemList } = this.itemService;
		if (!this.search) {
			this.filteredList = itemList;
		} else {
			this.filteredList = itemList.filter((item) => {
				const reg = new RegExp(this.search, 'i');
				return reg.test(item.name);
			});
		}
	}

	ngOnInit(): void {
		this.itemService.listUpdated.subscribe(this.searchItem.bind(this));
	}
}
