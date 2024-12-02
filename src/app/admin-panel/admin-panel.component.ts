import { Component, inject } from '@angular/core';
import {
  AdminSideBarComponent,
  IEndpointItem,
} from './admin-side-bar/admin-side-bar.component';
import { AdminTableComponent } from './admin-table/admin-table.component';
import { FilterIconComponent } from './icons/filter-icon/filter-icon.component';
import { AddIconComponent } from './icons/add-icon/add-icon.component';
import { SearchIconComponent } from './icons/search-icon/search-icon.component';
import { ModalComponent } from '../shared/components/modal/modal.component';
import { TableFormComponent } from './table-form/table-form.component';
import { AdminService } from './services/admin.service';
import { CancelIconComponent } from './icons/cancel-icon/cancel-icon.component';
import { SaveIconComponent } from './icons/save-icon/save-icon.component';
import { CaretDownIconComponent } from '../shared/icons/caret-down-icon/caret-down-icon.component';
import { CaretUpIconComponent } from '../shared/icons/caret-up-icon/caret-up-icon.component';
import { defaultLogInData, ILogin } from '../home/interface/Login';
import { UserService } from '../home/user.service';

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
    CancelIconComponent,
    SaveIconComponent,
    CaretDownIconComponent,
    CaretUpIconComponent,
  ],
  templateUrl: './admin-panel.component.html',
  styleUrl: './admin-panel.component.css',
})
export class AdminPanelComponent {
  adminService: AdminService = inject(AdminService);
  userService: UserService = inject(UserService);

  showModalForm: boolean = false;
  showUserDropdown: boolean = false;
  showRoleDropdown: boolean = false;
  userData: ILogin = defaultLogInData;

  endpoinItem: IEndpointItem = {
    name: '',
    getEndpoint: '',
    postEndpoint: '',
    endpoint: '',
  };

  users!: ILogin[];

  searchResult!: ILogin[];

  ngOnInit(): void {
    this.adminService.endpointItem$.subscribe(
      (item) => (this.endpoinItem = item)
    );
  }

  createItem() {
    this.showModalForm = true;

    if (this.endpoinItem.name === 'Administradores') {
      this.userService.getUsers().subscribe((response) => {
        this.users = this.searchResult = response;
      });
    }
  }

  onSearch(event: Event) {
    const searchTerm = (
      event.target as HTMLInputElement
    ).value.toLocaleLowerCase();

    this.searchResult = this.users.filter((user) =>
      user.fullname.toLowerCase().includes(searchTerm)
    );
  }

  openRoleDropdown() {
    this.showRoleDropdown = !this.showRoleDropdown;
    this.showUserDropdown = false;
  }

  openUserDropdown() {
    this.showUserDropdown = !this.showUserDropdown;
    this.showRoleDropdown = false;
  }

  setUserRole(role: string) {
    this.userData.rol = role;
    this.showRoleDropdown = false;
  }

  setUser(user: ILogin) {
    this.userData = user;
    this.showUserDropdown = false;
  }

  closeForm() {
    this.showModalForm = false;
    this.userData = defaultLogInData;
  }

  sendForm() {
    this.showModalForm = false;

    this.userService.updateUser(this.userData).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        this.adminService.getDataList();
      }
    );
  }
}
