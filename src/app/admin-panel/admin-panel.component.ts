import { Component } from '@angular/core';
import { AdminSideBarComponent } from './admin-side-bar/admin-side-bar.component';
import { AdminTableComponent } from './admin-table/admin-table.component';
import { ButtonComponent } from '../shared/components/button/button.component';
import { FilterIconComponent } from './icons/filter-icon/filter-icon.component';
import { AddIconComponent } from './icons/add-icon/add-icon.component';
import { SearchIconComponent } from './icons/search-icon/search-icon.component';

@Component({
  selector: 'app-admin-panel',
  standalone: true,
  imports: [
    AdminSideBarComponent,
    AdminTableComponent,
    ButtonComponent,
    FilterIconComponent,
    AddIconComponent,
    SearchIconComponent,
  ],
  templateUrl: './admin-panel.component.html',
  styleUrl: './admin-panel.component.css',
})
export class AdminPanelComponent {}
