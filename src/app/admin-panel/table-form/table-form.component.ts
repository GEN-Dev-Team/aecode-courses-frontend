import { Component, EventEmitter, inject, Output } from '@angular/core';
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
  @Output() isClosed = new EventEmitter<boolean>();

  adminService: AdminService = inject(AdminService);
  fb: FormBuilder = inject(FormBuilder);
  form: FormGroup = this.fb.group({});

  headerList: any[] = [];

  ngOnInit(): void {
    this.adminService.dataList$.subscribe((res) => {
      this.headerList = Object.keys(res[0]);
      this.createForm(); // Crear el formulario solo después de tener las claves
    });
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

    this.adminService.createItem(filteredFormValue);

    this.form.reset();
  }

  closeForm() {
    this.form.reset;
    this.isClosed.emit(false);
  }
}
