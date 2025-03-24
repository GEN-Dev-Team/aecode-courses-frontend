import { Component, EventEmitter, Output } from '@angular/core';
import { ShopCartItemComponent } from './shop-cart-item/shop-cart-item.component';
import { CaretUpIconLightComponent } from '../../shared/icons/caret-up-icon-light/caret-up-icon-light.component';
import { CaretDownIconLightComponent } from '../../shared/icons/caret-down-icon-light/caret-down-icon-light.component';
import { ISecondaryCourseSummary } from '../../courses/interface/secondary-course/Secondary-Course';

@Component({
  selector: 'app-shop-cart-products',
  standalone: true,
  imports: [
    ShopCartItemComponent,
    CaretUpIconLightComponent,
    CaretDownIconLightComponent,
  ],
  templateUrl: './shop-cart-products.component.html',
  styleUrl: './shop-cart-products.component.scss',
})
export class ShopCartProductsComponent {
  @Output() emitItem = new EventEmitter<ISecondaryCourseSummary>();

  dropdown: boolean = true;

  itemList: any[] = [
    {
      certificateHours: '10',
      description:
        'Aprenderás a gestionar proyectos con herramientas de inteligencia artificial que optimizan la asignación de recursos, el seguimiento de tareas y la toma de decisiones. Implementarás soluciones automatizadas para mejorar la organización y monitoreo, aumentando la eficiencia y reduciendo errores. Desarrollarás habilidades para comparar el impacto de la IA frente a métodos tradicionales, identificando oportunidades de mejora. Esto te permitirá optimizar la gestión y tomar decisiones más estratégicas.',
      discountPercentage: 0,
      isOnSale: false,
      mode: 'EN_VIVO',
      module: 'Módulo 1',
      orderNumber: 1,
      priceRegular: 100,
      principalimage:
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fprogramas%2F1_gestion_de_proyectos_y_productividad_con_inteligencia_artificial%2F1.webp?alt=media&token=e92e54b1-2af6-4c25-a8ca-b2f66a47266c',
      programTitle:
        'Gestión de Proyectos y Productividad con Inteligencia Artificial',
      promptPaymentPrice: 80,
      seccourseId: 1,
      startDate: '2025-03-24',
      title: 'Gestión de Proyecto﻿s con Inteligencia Artificial',
    },
    {
      certificateHours: '10',
      description:
        'Aprenderás a gestionar proyectos con herramientas de inteligencia artificial que optimizan la asignación de recursos, el seguimiento de tareas y la toma de decisiones. Implementarás soluciones automatizadas para mejorar la organización y monitoreo, aumentando la eficiencia y reduciendo errores. Desarrollarás habilidades para comparar el impacto de la IA frente a métodos tradicionales, identificando oportunidades de mejora. Esto te permitirá optimizar la gestión y tomar decisiones más estratégicas.',
      discountPercentage: 0,
      isOnSale: false,
      mode: 'ASINCRONO',
      module: 'Módulo 1',
      orderNumber: 1,
      priceRegular: 75,
      principalimage:
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fprogramas%2F1_gestion_de_proyectos_y_productividad_con_inteligencia_artificial%2F1.webp?alt=media&token=e92e54b1-2af6-4c25-a8ca-b2f66a47266c',
      programTitle:
        'Gestión de Proyectos y Productividad con Inteligencia Artificial',
      promptPaymentPrice: 50,
      seccourseId: 2,
      startDate: '2025-03-24',
      title: 'Gestión de Proyecto﻿s con Inteligencia Artificial',
    },
  ];

  addItemToList(item: any) {
    this.emitItem.emit(item);
  }
}
