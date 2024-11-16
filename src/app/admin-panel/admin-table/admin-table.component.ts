import { Component, inject } from '@angular/core';
import { OptionsIconComponent } from '../icons/options-icon/options-icon.component';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-admin-table',
  standalone: true,
  imports: [OptionsIconComponent],
  templateUrl: './admin-table.component.html',
  styleUrl: './admin-table.component.css',
})
export class AdminTableComponent {
  adminService: AdminService = inject(AdminService);

  dataList: any[] = [];
  dataHeaders: any[] = [];
  showOptions: boolean = false;
  showModal: boolean = false;
  idField: string = '';

  showOptionsMap: { [key: string]: boolean } = {};

  ngOnInit(): void {
    this.adminService.dataList$.subscribe((value) => {
      this.dataList = value;
      this.dataHeaders = Object.keys(value[0]);
      this.idField = this.dataHeaders[0];
    });
  }

  objectKeys(obj: any): string[] {
    return Object.keys(obj);
  }

  getItem(item: any) {
    return item[this.idField];
  }

  openOptions(itemId: string) {
    if (this.showOptionsMap[itemId]) {
      this.showOptionsMap[itemId] = false;
    } else {
      for (let id in this.showOptionsMap) {
        this.showOptionsMap[id] = false;
      }
      this.showOptionsMap[itemId] = true;
    }
  }
}
