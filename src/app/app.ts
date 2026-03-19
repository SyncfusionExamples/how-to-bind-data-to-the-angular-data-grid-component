import { Component, signal, OnInit } from '@angular/core';
import { GridModule, PageService, PageSettingsModel, FilterService, SortService } from '@syncfusion/ej2-angular-grids';
import {DataManager, ODataV4Adaptor} from '@syncfusion/ej2-data'; 

@Component({
  selector: 'app-root',
  imports: [GridModule],
  providers: [PageService, FilterService, SortService],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('my-angular-app');
  public data?: DataManager;
  public pageSettings?: PageSettingsModel;
  ngOnInit(): void {
    this.data = new DataManager({
      url: 'https://services.odata.org/V4/Northwind/Northwind.svc/Orders',
      adaptor: new ODataV4Adaptor()
    });
    this.pageSettings = { pageSize: 5 }
  }
}