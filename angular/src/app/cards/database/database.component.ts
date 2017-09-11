import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MdPaginator, MdSort } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { DataSource } from '@angular/cdk/collections';
import { CardComponent } from '../_base/card.component';
import { SharedApp } from 'app/shared/services/shared-app.service';
import { ManifestService } from 'app/bungie/manifest/manifest.service';
import { ClassTypes, ItemTypes, TierTypes } from 'app/bungie/services/enums.interface';

import { PerkDefinition, DestinyInventoryItemDefinition } from "app/bungie/manifest/interfaces";

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'dd-database',
  templateUrl: './database.component.html',
  styleUrls: ['../_base/card.component.scss', './database.component.scss']
})
export class DatabaseComponent extends CardComponent {
  @ViewChild(MdPaginator) paginator: MdPaginator;
  @ViewChild(MdSort) sort: MdSort;

  CARD_DEFINITION_ID = 9;

  // Select list definitions
  itemTypes: Array<string> = ["All", "No Type", "Armor", "Aura", "Clan Banner", "Consumable", "Currency", "Emblem", "Engram", "Mod", "Quest", "Quest Step",
    "Package", "Redeemable", "Subclass", "Weapon"];

  classTypes: Array<any> = [{ value: -1, displayValue: "All" }, { value: ClassTypes.TITAN, displayValue: "Titan" },
  { value: ClassTypes.HUNTER, displayValue: "Hunter" }, { value: ClassTypes.WARLOCK, displayValue: "Warlock" }];

  tierTypes: Array<any> = [{ value: -1, displayValue: "All" },
  { value: TierTypes.CURRENCY, displayValue: "Currency" },
  { value: TierTypes.BASIC, displayValue: "Basic" },
  { value: TierTypes.COMMON, displayValue: "Common" },
  { value: TierTypes.RARE, displayValue: "Rare" },
  { value: TierTypes.LEGENDARY, displayValue: "Legendary" },
  { value: TierTypes.EXOTIC, displayValue: "Exotic" }];


  // Filtering
  searchText: string = "";
  searchTextForm = new FormControl();
  searchType: string = "All";
  searchClass: number = -1;
  searchTier: number = -1;

  // Data table
  displayedColumns = ['icon', 'name', 'type', 'class', 'tier'];
  dataSource: ItemDefinitionDataSource;

  // Paginator
  pageSize: number;

  manifestInventory = new Array<DestinyInventoryItemDefinition>();

  constructor(private changeDetectorRef: ChangeDetectorRef, public domSanitizer: DomSanitizer, private manifestService: ManifestService, public sharedApp: SharedApp) {
    super(sharedApp);
  }

  ngOnInit() {
    super.ngOnInit();

    var manifestInventoryMap: Map<number, DestinyInventoryItemDefinition> = this.manifestService.getTableMap("DestinyInventoryItemDefinition");
    manifestInventoryMap.forEach((itemDefinition, itemHash) => {
      itemDefinition.displayProperties.nameLower = itemDefinition.displayProperties.name.toLowerCase();
      // Set class name
      itemDefinition.className == "";
      if (itemDefinition.classType == ClassTypes.TITAN) itemDefinition.className = "Titan";
      else if (itemDefinition.classType == ClassTypes.HUNTER) itemDefinition.className = "Hunter";
      else if (itemDefinition.classType == ClassTypes.WARLOCK) itemDefinition.className = "Warlock";

      // Set tier name
      itemDefinition.tierName == "";
      if (itemDefinition.inventory.tierType == TierTypes.BASIC) itemDefinition.tierName = "Basic";
      else if (itemDefinition.inventory.tierType == TierTypes.CURRENCY) itemDefinition.tierName = "Currency";
      else if (itemDefinition.inventory.tierType == TierTypes.COMMON) itemDefinition.tierName = "Common";
      else if (itemDefinition.inventory.tierType == TierTypes.RARE) itemDefinition.tierName = "Rare";
      else if (itemDefinition.inventory.tierType == TierTypes.LEGENDARY) itemDefinition.tierName = "Legendary";
      else if (itemDefinition.inventory.tierType == TierTypes.EXOTIC) itemDefinition.tierName = "Exotic";

      // Set perks
      itemDefinition.perksData = new Array<PerkDefinition>();
      if (itemDefinition.perks != null) {
        itemDefinition.perks.forEach((perk) => {
          let perkDefinition = this.manifestService.getManifestEntry("DestinySandboxPerkDefinition", perk.perkHash);
          itemDefinition.perksData.push(perkDefinition);
        });
      }

      if (itemDefinition.displayProperties.name.trim().length > 0)
        this.manifestInventory.push(itemDefinition);
    });

    this.pageSize = this.getCardLocalStorage("pageSize", 15);

    this.dataSource = new ItemDefinitionDataSource(this.paginator, this.sort, this.manifestInventory);
    this.changeDetectorRef.detectChanges();

    this.searchTextForm.valueChanges.debounceTime(200).distinctUntilChanged().subscribe((newSearchText) => {
      this.searchText = newSearchText;
      this.applyFilter(false);
    });
  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }

  pageChanged() {
    this.setCardLocalStorage("pageSize", this.pageSize);
    this.applyFilter(true);
  }

  sortChanged() {
    this.applyFilter(false);
  }

  applyFilter(pageChange: boolean) {
    this.dataSource.filterChange.next({ class: this.searchClass, text: this.searchText.toLowerCase(), tier: this.searchTier, type: this.searchType, pageChange: pageChange });
  }

}

interface Filter {
  class: number,
  text: string,
  tier: number,
  type: string,
  pageChange: boolean
}

export class ItemDefinitionDataSource extends DataSource<any> {
  filterChange = new BehaviorSubject<Filter>({ class: -1, text: "", tier: -1, type: "", pageChange: false });
  filteredInventoryItems = new Array<DestinyInventoryItemDefinition>();

  constructor(private paginator: MdPaginator, private sort: MdSort, private inventoryItems: Array<DestinyInventoryItemDefinition>) {
    super();
  }

  connect(): Observable<DestinyInventoryItemDefinition[]> {
    return this.filterChange.map(() => {
      let filter = this.filterChange.value;

      // Don't recalculate inventory item filter if we're only changing page size
      if (!filter.pageChange) {
        this.filteredInventoryItems = this.inventoryItems.filter((item: DestinyInventoryItemDefinition) => {

          // Filter item type
          if (filter.type != "All" && filter.type != item.itemTypeDisplayName)
            return false;

          // Filter item class
          if (filter.class != -1 && filter.class != item.classType)
            return false;

          // Filter item tier
          if (filter.tier != -1 && filter.tier != item.inventory.tierType)
            return false;

          // Filter search text
          let matchesText: boolean = false;
          if (filter.text.length > 0) {
            if (item.displayProperties.nameLower.indexOf(filter.text) != -1) matchesText = true;
            //if (item.itemTypeAndTierDisplayName.toLowerCase().indexOf(filter.text) != -1) matchesText = true
            if (!matchesText) return false;
          }

          return true;
        });

        // Sort items
        if (this.sort.active == null) {
          this.sort.active = "name";
          this.sort.direction = "asc";
        }
        this.filteredInventoryItems.sort((a, b) => {
          let propertyA: string = "";
          let propertyB: string = "";

          switch (this.sort.active) {
            case 'name': [propertyA, propertyB] = [a.displayProperties.name, b.displayProperties.name]; break;
            case 'type': [propertyA, propertyB] = [a.itemTypeDisplayName, b.itemTypeDisplayName]; break;
            case 'class': [propertyA, propertyB] = [a.className, b.className]; break;
            case 'tier': [propertyA, propertyB] = [a.tierName, b.tierName]; break;
          }

          propertyA = propertyA == null ? "" : propertyA;
          propertyB = propertyB == null ? "" : propertyB;

          if (propertyA > propertyB)
            return this.sort.direction == 'asc' ? 1 : -1;
          else
            return this.sort.direction == 'asc' ? -1 : 1;

        });

      }

      let startIndex = this.paginator.pageIndex * this.paginator.pageSize;
      return this.filteredInventoryItems.slice(startIndex, startIndex + this.paginator.pageSize);
    });
  }

  disconnect() { }
}
