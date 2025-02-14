import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ISheetItem } from './interfaces/Sheet-Item';

@Injectable({
  providedIn: 'root',
})
export class GoogleSheetService {
  http: HttpClient = inject(HttpClient);
  api_url: string =
    'https://api.sheetbest.com/sheets/3637610a-1b92-4470-a817-baadb5a228cb';

  createSheetItem(nombre_completo: string, email: string, consulta: string) {
    let sheetObject: ISheetItem = {
      ID: '',
      NOMBRE_COMPLETO: nombre_completo,
      CORREO: email,
      CONSULTA: consulta,
      FECHA: new Date().toLocaleDateString('es-ES'),
    };

    this.http.post<ISheetItem>(this.api_url, sheetObject).subscribe({
      next: (res) => {
        console.info('Item creado: ', res);
      },
      error: (err) => console.error('Error al crear el item:', err),
    });
  }
}
