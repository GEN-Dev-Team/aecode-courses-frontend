import {
  Component,
  inject,
  signal,
  CUSTOM_ELEMENTS_SCHEMA,
} from '@angular/core';
import { SwiperContainer } from 'swiper/element';
import { SwiperOptions } from 'swiper/types';
import { BrowserService } from '../../../../core/services/browser.service';
import { IEmbajador } from '../../../interfaces/Embajador';
import { AngleLeftIconComponent } from '../../../../courses/icons/angle-left-icon/angle-left-icon.component';
import { AngleRightIconComponent } from '../../../../courses/icons/angle-right-icon/angle-right-icon.component';

@Component({
  selector: 'app-collabs-swiper',
  standalone: true,
  imports: [AngleLeftIconComponent, AngleRightIconComponent],
  templateUrl: './collabs-swiper.component.html',
  styleUrl: './collabs-swiper.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CollabsSwiperComponent {
  swiperElement = signal<SwiperContainer | null>(null);
  browserService: BrowserService = inject(BrowserService);

  colaborators_list: IEmbajador[] = [
    {
      id: 1,
      name: 'Antony Campos Vega',
      image_url:
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fcolaboradores%2FANTONY_VEGA.webp?alt=media&token=405668dd-cf44-48c8-98ac-b50fe9dc6273',
      tag_list: ['Innovación-tecnología BIM UNI', 'PMP®', 'Director PMI Lima'],
    },
    {
      id: 2,
      name: 'Alexis Vera',
      image_url:
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fcolaboradores%2FALEXIS_VERA.webp?alt=media&token=58795d0d-c664-419d-8375-04e328532b57',
      tag_list: [
        'BIM Consulting & Coordinator',
        'PowerBI+Revit',
        'API Revit',
        'Creador de contenido',
      ],
    },
    {
      id: 3,
      name: 'Daniella Galvez Ramírez',
      image_url:
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fcolaboradores%2FDaniella_Galvez.webp?alt=media&token=162cb47d-f02b-4a19-ae38-23f95b5c4aff',
      tag_list: [
        'Ingeniería Civil',
        'BIM ',
        'Gestión de Proyectos',
        'Automatización',
        'Lean Construction',
        'Sostenibilidad',
        'Gestión Comercial',
      ],
    },
    {
      id: 4,
      name: 'Silvert Quispe Pacompia',
      image_url:
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fcolaboradores%2FSilvert_Quispe.webp?alt=media&token=74270436-d8f7-4f93-88d7-92aca7212637',
      tag_list: [
        'Civil Engineer',
        'BIM Analyst',
        'Gestión de Información',
        'BIM',
        'Programador',
        'Python',
        'Dynamo',
        'PowerBi',
        'LEAN',
        'VDC',
      ],
    },
    {
      id: 5,
      name: 'Sebastian Meneses Flores',
      image_url:
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fcolaboradores%2FSEBASTIAN_FLORES.webp?alt=media&token=b5d1dce8-064b-4578-8ae0-69e01cf2ec55',
      tag_list: [
        'Structural Engineering',
        'Computational Design',
        'Structural Optimization',
        'BIM',
        'Genetic Algorithms',
        'R & D',
      ],
    },
    {
      id: 6,
      name: 'Rosmil Huamaccto Canchari',
      image_url:
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fcolaboradores%2FRosmil_Huamaccto.webp?alt=media&token=6f5ea974-05ed-4809-a8c2-05fc57b386d9',
      tag_list: [
        'Autodesk Certified Professional Revit',
        'Ingeniero Agrícola',
        'Implementador BIM',
        'Infraestructuras Hidráulicas',
        'Obras de Arte',
      ],
    },
    {
      id: 7,
      name: 'Sergio Ortiz Rios',
      image_url:
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fcolaboradores%2FSergio_Ortiz.webp?alt=media&token=ee6e1314-bd67-479b-912c-3ea9e070ef31',
      tag_list: ['Ingeniero Civil', 'Diseñador Estructural'],
    },
    {
      id: 8,
      name: 'Vladimir Huaman Espillco',
      image_url:
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fcolaboradores%2FVladimir_Huaman.webp?alt=media&token=18b8531b-dae9-4f62-abe0-f522383ccb0a',
      tag_list: [
        'Civil Engineering',
        'BIM Automation',
        'Artificial Intelligence',
        'Project Management',
      ],
    },
    {
      id: 9,
      name: 'Adrián Gutiérrez Alvarez',
      image_url:
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fcolaboradores%2FADRIAN_GUTIERREZ.webp?alt=media&token=6c06abe2-4581-4ef5-8d74-706082ac7740',
      tag_list: [
        'Project Control Engineer - Costa del Sol S.A.',
        'VDC Stanford Certificate',
        'CAPM®',
        'Ingeniero Civil de PUCP',
      ],
    },
    {
      id: 10,
      name: 'Julie Palero Vega',
      image_url:
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fcolaboradores%2FJulie_Palero.webp?alt=media&token=26a664bc-73a1-4aaf-8d75-aa32607d6958',
      tag_list: [
        'Civil Engineer',
        'BIM Automation',
        'Generative Design',
        'Revit API',
        'Optimization',
        'Sustainability',
      ],
    },
    {
      id: 11,
      name: 'José Gutiérrez Manrique',
      image_url:
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fcolaboradores%2FJos%C3%A9_Guti%C3%A9rrez.webp?alt=media&token=13d72d13-ee49-49bd-beeb-6ee34019dbaf',
      tag_list: [
        'B.S. Civil Engineering',
        'Structural Engineering',
        'Seismic Vulnerability',
      ],
    },
    {
      id: 12,
      name: 'Josue Noha Valdivia',
      image_url:
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fcolaboradores%2FJosue_Noha.webp?alt=media&token=1019bb78-041d-40fa-b612-886c4d90425e',
      tag_list: [
        'Algorithm programmer',
        'Structural automation',
        'Structural optimization',
      ],
    },
    {
      id: 13,
      name: 'Renzo Rios Rugel',
      image_url:
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fcolaboradores%2FRENZO_RIOS.webp?alt=media&token=fda0ee4a-a6ac-477f-8366-d8e63e2965da',
      tag_list: [
        'Founder of Lambda',
        'Autodesk Platform Services',
        'Senior AEC Software Developer',
      ],
    },
    {
      id: 14,
      name: 'Rodrigo Reyes Jara',
      image_url:
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fcolaboradores%2FRodrigo_Reyes.webp?alt=media&token=5c50e6ce-695e-43a1-bff0-fd5778033eba',
      tag_list: [
        'MIT Learning Facilitator GenAI',
        'Founder K-chAI',
        'CEO Durability',
        'AI Professor ',
        'Innovation and Industry 4.0 Professor PUC',
      ],
    },
    {
      id: 15,
      name: 'Juan Cano López',
      image_url:
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fcolaboradores%2FJuan_David.webp?alt=media&token=59041746-a747-4c5d-8eff-4d0fcf0a84dc',
      tag_list: [
        'Gestión de Proyectos de Construcción e Infraestructura',
        'CEO Kronos GMT',
        'Ingeniero Civil',
        'Sistemas de Información Geográfica',
        'Residential Outdoor Living Design',
        'Renderizado 3D Realista',
      ],
    },
    {
      id: 16,
      name: 'Oscar Rojas Alania',
      image_url:
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fcolaboradores%2FOscar_Rojas.webp?alt=media&token=36546935-d04b-4f70-b5db-9f19dc2799ee',
      tag_list: [
        'Master. Gestor de proyectos en infraestructura y APPs',
        'Ingeniero Civil',
        'PMP®',
      ],
    },
    {
      id: 17,
      name: 'José Inga Díaz',
      image_url:
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fcolaboradores%2FJose_Fabrizio.webp?alt=media&token=9b3c015f-2ce5-4e24-9c60-fc0125e7c3c0',
      tag_list: [
        'Structural Engineer',
        'Computational Design',
        'Artificial Intelligence',
        'R & D',
      ],
    },
    {
      id: 18,
      name: 'Roner Rocha Moreno',
      image_url:
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fcolaboradores%2FRoner_Rocha.webp?alt=media&token=5e751a66-4f50-4d73-b2a1-772e070dcebf',
      tag_list: [
        'BIM Manager',
        'Diseño Parametrico Computacional',
        'Especialista en Estructuras',
      ],
    },
    {
      id: 19,
      name: 'Lohanna Castro Huarcaya',
      image_url:
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fcolaboradores%2FLohanna_Castro.webp?alt=media&token=9b1d5256-2226-416e-a349-dfc27313f3e0',
      tag_list: [
        'Architect',
        'Coordinador BIM',
        'Managment',
        'VDC',
        'Design &Construction',
      ],
    },
    {
      id: 20,
      name: 'Facundo Leguizamón Pfeffer ',
      image_url:
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fcolaboradores%2FFacundo_Pfeffer.webp?alt=media&token=7d35d6b1-4867-400a-9d2c-5d2b68f09d4f',
      tag_list: [
        'Python Engineering Manager (EM) at Connectist',
        'Civil Structural Engineer',
        'Fulbright Alumni',
      ],
    },
  ];

  ngAfterViewInit(): void {
    if (this.browserService.isBrowser()) {
      const swiperElemConstructor = document.getElementById(
        'collaborators-swiper'
      );
      const swiperOptions: SwiperOptions = {
        loop: true,
        navigation: {
          enabled: true,
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        slidesPerView: 1,
        slidesPerGroup: 1,
      };

      Object.assign(swiperElemConstructor!, swiperOptions);
      this.swiperElement.set(swiperElemConstructor as SwiperContainer);
      this.swiperElement()?.initialize();
    }
  }
}
