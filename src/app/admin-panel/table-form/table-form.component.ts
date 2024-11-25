import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { SaveIconComponent } from '../icons/save-icon/save-icon.component';
import { CancelIconComponent } from '../icons/cancel-icon/cancel-icon.component';
import { AdminService } from '../services/admin.service';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-table-form',
  standalone: true,
  imports: [SaveIconComponent, CancelIconComponent, ReactiveFormsModule],
  templateUrl: './table-form.component.html',
  styleUrl: './table-form.component.css',
})
export class TableFormComponent {
  @Input() updateForm: boolean = false;
  @Input() itemId: number = -1;
  @Output() isClosed = new EventEmitter<boolean>();

  adminService: AdminService = inject(AdminService);
  fb: FormBuilder = inject(FormBuilder);
  form: FormGroup = this.fb.group({});

  headerList: any[] = [];

  ngOnInit(): void {
    this.setFormData();
  }

  ngOnChanges(): void {
    if (this.updateForm && this.itemId !== -1) {
      this.adminService.getItemById(this.itemId).subscribe((itemData) => {
        this.form.patchValue(itemData); // Llenar el formulario con los datos recibidos
        console.log('nuevo form:', itemData);
      });
    }
  }

  createForm() {
    const formControls = this.headerList.reduce((controls, header) => {
      controls[header] = ['']; // Valor inicial vacío, puedes agregar validaciones aquí
      return controls;
    }, {});

    this.form = this.fb.group(formControls);
  }

  sendForm() {
    const filteredFormValue = Object.fromEntries(
      Object.entries(this.form.value).filter(([_, value]) => {
        // Remover valores vacíos (null, undefined, string vacío o arreglo vacío)
        return (
          value !== null &&
          value !== undefined &&
          value !== '' &&
          !(Array.isArray(value) && value.length === 0)
        );
      })
    );

    console.log('se envia:', filteredFormValue);

    if (this.updateForm) {
      this.adminService.updateItem(filteredFormValue, this.itemId);
    } else {
      this.adminService.createItem(filteredFormValue);
    }

    this.closeForm();
  }

  closeForm() {
    this.form.reset;
    this.isClosed.emit(false);
  }

  setFormData() {
    this.adminService.dataList$.subscribe((value) => {
      if (value && value.length > 0) {
        this.headerList = Object.keys(value[0]).filter(
          (key) => typeof value[0][key] !== 'object'
        );
        this.headerList.shift();
      }

      this.createForm(); // Crear el formulario solo después de tener las claves
    });
  }
}
