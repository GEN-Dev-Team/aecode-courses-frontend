import { Component } from '@angular/core';
import { AdminSideBarComponent } from './admin-side-bar/admin-side-bar.component';
import { AdminTableComponent } from './admin-table/admin-table.component';
import { FilterIconComponent } from './icons/filter-icon/filter-icon.component';
import { AddIconComponent } from './icons/add-icon/add-icon.component';
import { SearchIconComponent } from './icons/search-icon/search-icon.component';
import { ModalComponent } from '../shared/components/modal/modal.component';
import { TableFormComponent } from './table-form/table-form.component';

@Component({
  selector: 'app-admin-panel',
  standalone: true,
  imports: [
    AdminSideBarComponent,
    AdminTableComponent,
    FilterIconComponent,
    AddIconComponent,
    SearchIconComponent,
    ModalComponent,
    TableFormComponent,
  ],
  templateUrl: './admin-panel.component.html',
  styleUrl: './admin-panel.component.css',
})
export class AdminPanelComponent {
  showModalForm: boolean = false;

  createItem() {
    this.showModalForm = true;
  }
}
