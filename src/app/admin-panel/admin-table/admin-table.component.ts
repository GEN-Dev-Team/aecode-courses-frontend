import {
  Component,
  ElementRef,
  HostListener,
  inject,
  ViewChild,
} from '@angular/core';
import { OptionsIconComponent } from '../icons/options-icon/options-icon.component';
import { AdminService } from '../services/admin.service';
import { ModalComponent } from '../../shared/components/modal/modal.component';
import { TableFormComponent } from '../table-form/table-form.component';

@Component({
  selector: 'app-admin-table',
  standalone: true,
  imports: [OptionsIconComponent, ModalComponent, TableFormComponent],
  templateUrl: './admin-table.component.html',
  styleUrl: './admin-table.component.css',
})
export class AdminTableComponent {
  adminService: AdminService = inject(AdminService);
  elRef: ElementRef = inject(ElementRef);

  dataList: any[] = [];
  dataHeaders: any[] = [];
  showOptions: boolean = false;
  showModal: boolean = false;
  showModalForm: boolean = false;
  idField: string = '';
  formRequest: string = '';
  itemId: number = -1;
  updateForm: boolean = false;

  showOptionsMap: { [key: string]: boolean } = {};

  ngOnInit(): void {
    this.setDataTable();
  }

  objectKeys(obj: any): string[] {
    return Object.keys(obj).filter((key) => typeof obj[key] !== 'object');
  }

  getItem(item: any) {
    return item[this.idField];
  }

  openOptions(itemId: string, event: Event) {
    event.stopPropagation();
    for (let id in this.showOptionsMap) {
      this.showOptionsMap[id] = false;
    }
    this.showOptionsMap[itemId] = true;
  }

  @HostListener('document:click', ['$event.target'])
  onDocumentClick(targetElement: HTMLElement) {
    const isClickInsideOption = targetElement.closest('.option-dropdown');

    if (!isClickInsideOption) {
      // Cierra todos los dropdowns si se hace clic fuera
      for (let id in this.showOptionsMap) {
        this.showOptionsMap[id] = false;
      }
    }
  }

  editItem(itemId: number) {
    this.showModalForm = true;
    this.updateForm = true;
    this.itemId = itemId;
  }

  deleteItem(itemId: number) {
    this.adminService.deleteItem(itemId);
    console.log(itemId);
  }

  setDataTable() {
    this.adminService.dataList$.subscribe((value) => {
      if (value && value.length > 0) {
        this.dataList = value;
        this.dataHeaders = Object.keys(value[0]);
        this.idField = this.dataHeaders[0];

        this.dataHeaders = Object.keys(value[0]).filter(
          (key) => typeof value[0][key] !== 'object'
        );
      }
    });
  }
}
