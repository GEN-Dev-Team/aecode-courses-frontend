import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  inject,
  Input,
  signal,
} from '@angular/core';
import { ICollaborator } from '../../interfaces/Collaborator';
import { SwiperContainer } from 'swiper/element';
import { SwiperOptions } from 'swiper/types';
import { CollabsLikeIconComponent } from '../../icons/collabs-like-icon/collabs-like-icon.component';
import { BrowserService } from '../../../core/services/browser.service';
import { IEmbajador } from '../../interfaces/Embajador';

@Component({
  selector: 'app-community-collaborators',
  standalone: true,
  imports: [CollabsLikeIconComponent],
  templateUrl: './community-collaborators.component.html',
  styleUrl: './community-collaborators.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CommunityCollaboratorsComponent {
  swiperElement = signal<SwiperContainer | null>(null);
  @Input() collabsButtonSelected: boolean = true;
  itemSelected: number = 0;
  browserService: BrowserService = inject(BrowserService);

  embajadores_list: ICollaborator[] = [
    {
      id: 1,
      name: 'YOHARA DANIEL MEJIA ALBARRACIN',
      image_url:
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fembajadores%2FYOHARA_DANIEL_MEJIA_ALBARRACIN.webp?alt=media&token=e78a2dea-8cb4-4aa7-8f97-15e3691de99e',
      group: 'ACI UPC',
      description:
        'Me uní a AECODE por la oportunidad de transformar la industria AEC, acceder a herramientas innovadoras y aprender sobre IA y Machine Learning. Además, conectar con profesionales comprometidos con la modernización del sector fue clave para mi decisión de ser embajador.',
    },
    {
      id: 2,
      name: 'RODRIGO ENMANUEL BOZA ROMERO',
      image_url:
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fembajadores%2FRODRIGO_ENMANUEL_BOZA_ROMERO.webp?alt=media&token=1f2f8808-9850-4d95-895b-585ce8ba3afc',
      group: 'CEIE UPC',
      description:
        'Unirme a AECODE me permitirá crecer como estudiante e ingeniero civil, formando parte de una comunidad enfocada en innovación y optimización en construcción. Me atrajo su enfoque en cursos con programación y la oportunidad de contribuir al desarrollo de estudiantes y profesionales al expandir este proyecto',
    },
    {
      id: 3,
      name: 'SERGIO GERARDO RODRIGUEZ LLANQUE',
      image_url:
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fembajadores%2FSERGIO_GERARDO_RODRIGUEZ_LLANQUE.webp?alt=media&token=497c6299-009f-47e4-bba8-613d9ad2e65b',
      group: 'ESVIAL UNMSM',
      description:
        'Me uní a AECODE principalmente porque representa una propuesta innovadora que mira hacia el futuro, integrando nuevas tecnologías y aprovechando la inteligencia artificial como herramienta principal en el sector de la ingeniería.',
    },
    {
      id: 4,
      name: 'RODRIGO ELIAS ALVAREZ ALANOCCA',
      image_url:
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fembajadores%2FRODRIGO_ELIAS_ALVAREZ_ALANOCCA.webp?alt=media&token=d21c1b9a-8fa4-4bba-aee3-c519d3cace6e',
      group: '',
      description: '',
    },
    {
      id: 5,
      name: 'REINER ANTONIO LAGOS BARRETO',
      image_url:
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fembajadores%2FREINER_ANTONIO_LAGOS_BARRETO.webp?alt=media&token=08738052-c64f-441d-ae3e-3cbeff445e0e',
      group: 'ACI PUCP Y GEMRA',
      description:
        'Me uní a AECODE porque sé que las nuevas tecnologías transformarán el sector AEC. Como profesional, es clave mantenerse al día con la innovación para adaptarse a los cambios, optimizar procesos y seguir siendo competitivo en la industria.',
    },
    {
      id: 6,
      name: 'PATRICK MORRIS GUEVARA CASTILLO',
      image_url:
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fembajadores%2FPATRICK_MORRIS_GUEVARA_CASTILLO.webp?alt=media&token=9046cdbe-6ed9-4380-92b1-191000dbf4ae',
      group: 'CONYGER UNMSM',
      description:
        'Me uní a AECODE porque enseñan herramientas vinculadas a la automatización e IA. Su enfoque práctico va más allá de la teoría,  dando posibilidad de aplicar todo lo aprendido en mis futuros proyectos.',
    },
    {
      id: 7,
      name: 'MIGUEL ANGEL DELGADO VALLE',
      image_url:
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fembajadores%2FMIGUEL_ANGEL_DELGADO_VALLE.webp?alt=media&token=f54b35b0-2c7d-4707-9d94-84d4d983a2c3',
      group: 'ESVIAL UNMSM',
      description:
        'Son los diversos cursos que ofrecían que me interesaron al instante, dentro de ello el enfoque de usar tecnologías actuales como la inteligencia artificial, machine learning, uso de la programación y combinarlas con las aplicaciones en el área de la ingeniería civil.',
    },
    {
      id: 8,
      name: 'KAROL MILAGROS VALDEZ CHOQUE',
      image_url:
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fembajadores%2FKAROL_MILAGROS_VALDEZ_CHOQUE.webp?alt=media&token=d185827f-1d27-4d02-b2a0-30bc7689342c',
      group: 'ANEIC PERU',
      description:
        'Lo que me animó a unirme a AECODE es la posibilidad de formar parte de un grupo que impulsa la transformación de la industria AEC. Me motiva ser parte de un espacio donde puedo conectar con profesionales, compartir conocimientos y descubrir herramientas innovadoras que potencien el desarrollo del sector.',
    },
    {
      id: 9,
      name: 'MARIZZA YACASI YACASI',
      image_url:
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fembajadores%2FMARIZZA_YACASI_YACASI.webp?alt=media&token=c0fb492b-601a-42dd-ad92-5e62ae50de8f',
      group: 'EERI UNSA',
      description:
        'Me uní a AECODE porque creo que la digitalización y la innovación pueden transformar la ingeniería civil. Quiero aprender, compartir ideas y ser parte de una comunidad que impulse el cambio en el sector.',
    },
    {
      id: 10,
      name: 'KAREN LORENA FLORES ACHULLI',
      image_url:
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fembajadores%2FKAREN_LORENA_FLORES_ACHULLI.webp?alt=media&token=39933df8-5960-4fd2-9989-e62a82e8ac2d',
      group: 'PROYECTA UNI',
      description:
        'Me uní a AECODE por los conocimientos en tecnología que comparten. Me parece innovador como aprovechan el desarrollo de la tecnología y aplicarlo al sector construcción.',
    },
  ];

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
        'BIM Consulting & Coordinator ',
        ' PowerBI+Revit ',
        ' API Revit ',
        ' Creador de contenido',
      ],
    },
    {
      id: 3,
      name: 'Daniella Victoria Galvez Ramírez',
      image_url:
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fcolaboradores%2FDaniella_Galvez.webp?alt=media&token=162cb47d-f02b-4a19-ae38-23f95b5c4aff',
      tag_list: [
        'Ingeniería Civil ',
        ' BIM ',
        ' Gestión de Proyectos ',
        ' Automatización ',
        ' Lean Construction ',
        ' Sostenibilidad ',
        ' Gestión Comercial',
      ],
    },
    {
      id: 4,
      name: 'Silvert Kevin Quispe Pacompia',
      image_url:
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fcolaboradores%2FSilvert_Quispe.webp?alt=media&token=74270436-d8f7-4f93-88d7-92aca7212637',
      tag_list: [
        'Civil Engineer ',
        ' BIM Analyst ',
        ' Gestión de Información ',
        ' BIM ',
        ' Programador ',
        ' Python ',
        ' Dynamo ',
        ' PowerBi ',
        ' LEAN ',
        ' VDC',
      ],
    },
    {
      id: 5,
      name: 'Sebastian Meneses Flores',
      image_url:
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fcolaboradores%2FSEBASTIAN_FLORES.webp?alt=media&token=b5d1dce8-064b-4578-8ae0-69e01cf2ec55',
      tag_list: [
        'Structural Engineering',
        ' Computational Design ',
        ' Structural Optimization ',
        'BIM ',
        ' Genetic Algorithms ',
        ' R & D',
      ],
    },
    {
      id: 6,
      name: 'Rosmil Jhordan Huamaccto Canchari',
      image_url:
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fcolaboradores%2FRosmil_Huamaccto.webp?alt=media&token=6f5ea974-05ed-4809-a8c2-05fc57b386d9',
      tag_list: [
        ' Autodesk Certified Professional Revit ',
        'Ingeniero Agrícola ',
        ' Implementador BIM ',
        ' Infraestructuras Hidráulicas ',
        ' Obras de Arte',
      ],
    },
    {
      id: 7,
      name: 'Sergio Ortiz Rios',
      image_url:
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fcolaboradores%2FSergio_Ortiz.webp?alt=media&token=ee6e1314-bd67-479b-912c-3ea9e070ef31',
      tag_list: ['Ingeniero Civil ', ' Diseñador Estructural'],
    },
    {
      id: 8,
      name: 'Vladimir Mario Huaman Espillco',
      image_url:
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fcolaboradores%2FVladimir_Huaman.webp?alt=media&token=18b8531b-dae9-4f62-abe0-f522383ccb0a',
      tag_list: [
        'Civil Engineering ',
        ' BIM Automation ',
        ' Artificial Intelligence ',
        ' Project Management',
      ],
    },
    {
      id: 9,
      name: 'Adrián Rafael Gutiérrez Alvarez',
      image_url:
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fcolaboradores%2FADRIAN_GUTIERREZ.webp?alt=media&token=6c06abe2-4581-4ef5-8d74-706082ac7740',
      tag_list: [
        'Project Control Engineer - Costa del Sol S.A. ',
        ' VDC Stanford Certificate ',
        ' CAPM®',
        ' Ingeniero Civil de PUCP',
      ],
    },
    {
      id: 10,
      name: 'Julie Kareli Palero Vega',
      image_url:
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fcolaboradores%2FJulie_Palero.webp?alt=media&token=26a664bc-73a1-4aaf-8d75-aa32607d6958',
      tag_list: [
        'Civil Engineer ',
        ' BIM Automation ',
        ' Generative Design ',
        ' Revit API ',
        ' Optimization ',
        ' Sustainability',
      ],
    },
  ];

  embajadores_list_2: ICollaborator[] = [
    {
      id: 11,
      name: 'JOSEP JESUS ABREGU GONZALES',
      image_url:
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fembajadores%2FJOSEP_JESUS_ABREGU_GONZALES.webp?alt=media&token=08e8562b-7237-484c-bc50-e83f4ea9ee7a',
      group: 'GIT Y PROYECTA UNI',
      description:
        'Me uní a AECODE por las oportunidades que ofrece y la posibilidad de conectar con expertos en automatización, IA y gestión de procesos. Como gestor de proyectos, me interesa BIM 4.0 y herramientas como Make o N8N. Aquí seguiré aprendiendo y, en el futuro, espero contribuir como mentor en estos temas.',
    },
    {
      id: 12,
      name: 'JAIRSINHO SEBASTIAN HUISA VILLAVICENCIO',
      image_url:
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fembajadores%2FJAIRSINHO_SEBASTIAN_HUISA_VILLAVICENCIO.webp?alt=media&token=3c126653-c543-44d7-8f96-b4a1ca2342fa',
      group: 'ESTRUCTURAS UNMSM',
      description:
        'Descubrí AECODE en el CONEIC 2024 y me impresionó su visión innovadora para transformar el sector AEC con nuevas tecnologías. Su capacidad para difundir conocimiento y motivar el desarrollo tecnológico despertó mi interés. Unirme es una gran oportunidad para aprender, contribuir y crecer profesionalmente.',
    },
    {
      id: 13,
      name: 'EVA LUCERO AREVALO SANCHEZ',
      image_url:
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fembajadores%2FEva_Lucero_Arevalo_Sanchez.webp?alt=media&token=40cb6c0d-c057-4c77-928c-83a4a5046f49',
      group: 'ACI UTEC',
      description:
        'Siempre me ha interesado aprender cosas nuevas, y AECODE combina perfectamente innovación, tecnología y el sector AEC, que es mi área de estudio. Quise ser parte de este espacio para crecer y también ayudar a que otros descubran todo lo que este centro tiene para ofrecer.',
    },
    {
      id: 14,
      name: 'CRISTHIAN IVAN ESCOBAR GARAVITO',
      image_url:
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fembajadores%2FCRISTHIAN_IVAN_ESCOBAR_GARAVITO.webp?alt=media&token=d89cb687-6416-4dd5-93dd-d5a5b34525cf',
      group: '',
      description:
        'Me uní a AECODE por su visión de futuro sobre IA y automatización en proyectos, algo que aún no se ve en la universidad pero pronto será esencial. La mejor forma de afrontar este cambio es prepararnos desde ahora, y esta comunidad ofrece el espacio ideal para aprender y adaptarnos.',
    },
    {
      id: 15,
      name: 'ERIKA PAMELA DELGADO',
      image_url:
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fembajadores%2FERIKA_PAMELA_DELGADO.webp?alt=media&token=71f24882-5cc8-4284-931a-a10c6184d414',
      group: 'ANEIC PERÚ',
      description:
        'Me uní a AECODE para estar a la vanguardia en tecnología e IA aplicadas a la construcción. Quiero aprender, investigar y desarrollar soluciones que optimicen procesos y promuevan la sostenibilidad. Esta comunidad me permite conectar con mentes innovadoras y contribuir al futuro del sector.',
    },
    {
      id: 16,
      name: 'EULER MENDOZA ENRIQUEZ',
      image_url:
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fembajadores%2FEULER_MENDOZA_ENRIQUEZ.webp?alt=media&token=e801a4bd-9239-4961-9de6-d714e888eb27',
      group: 'GEOPUCP',
      description:
        'La visión y compromiso que encuentro en la empresa para implementar y mejorar la ingeniería civil en el país con las tecnologías más recientes. Además del cercano contacto y buena enseñanza en sus clases.',
    },
    {
      id: 17,
      name: 'CAROL FABIOLA OCAÑA JARA',
      image_url:
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fembajadores%2FCAROL_FABIOLA_OCA%C3%91A_JARA.webp?alt=media&token=49258bbf-23ba-47b6-8c2b-d6d49215db84',
      group: 'ESTRUCTURAS UNMSM',
      description:
        'Me uní a AECODE por sus cursos innovadores y su comunidad de apoyo. Soy Carol Ocaña, estudiante de Ingeniería Civil, apasionada por diseñar soluciones y aprender sobre tecnologías que transforman el sector. Disfruto los retos y creo en el valor de las comunidades colaborativas para el crecimiento profesional.',
    },
    {
      id: 18,
      name: 'CAMILA NICOLE MONTERREY PALACIOS',
      image_url:
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fembajadores%2FCAMILA_NICOLE_MONTERREY_PALACIOS.webp?alt=media&token=363a3e77-a5cd-4a1b-a63b-4dd2049d7d31',
      group: 'EERI PUCP',
      description:
        'Me uní a AECODE por su enfoque innovador en Ingeniería Civil y el impacto de la automatización en el diseño estructural. Busco optimizar procesos, hacer soluciones más eficientes y aprender junto a profesionales que comparten esta visión. Es una gran oportunidad de crecimiento y colaboración.',
    },
    {
      id: 19,
      name: 'MARIZZA YACASI YACASI',
      image_url:
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fembajadores%2FMARIZZA_YACASI_YACASI.webp?alt=media&token=c0fb492b-601a-42dd-ad92-5e62ae50de8f',
      group: 'EERI UNSA',
      description:
        'Me uní a AECODE porque creo que la digitalización y la innovación pueden transformar la ingeniería civil. Quiero aprender, compartir ideas y ser parte de una comunidad que impulse el cambio en el sector.',
    },
    {
      id: 20,
      name: 'KAREN LORENA FLORES ACHULLI',
      image_url:
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fembajadores%2FKAREN_LORENA_FLORES_ACHULLI.webp?alt=media&token=39933df8-5960-4fd2-9989-e62a82e8ac2d',
      group: 'PROYECTA UNI',
      description:
        'Me uní a AECODE por los conocimientos en tecnología que comparten. Me parece innovador como aprovechan el desarrollo de la tecnología y aplicarlo al sector construcción.',
    },
  ];

  colaborators_list_2: IEmbajador[] = [
    {
      id: 11,
      name: 'José Franco Gutiérrez Manrique',
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
      name: 'Josue Julianz Noha Valdivia',
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
      name: 'Renzo Giancarlo Rios Rugel',
      image_url:
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fcolaboradores%2FRENZO_RIOS.webp?alt=media&token=fda0ee4a-a6ac-477f-8366-d8e63e2965da',
      tag_list: [
        'Founder of Lambda ',
        ' Senior AEC Software Developer ',
        ' Autodesk Platform Services',
      ],
    },
    {
      id: 14,
      name: 'Rodrigo Reyes Jara',
      image_url:
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fcolaboradores%2FRodrigo_Reyes.webp?alt=media&token=5c50e6ce-695e-43a1-bff0-fd5778033eba',
      tag_list: [
        'MIT Learning Facilitator GenAI ',
        ' Founder K-chAI ',
        ' CEO Durability ',
        ' AI Professor ',
        ' Innovation and Industry 4.0 Professor PUC',
      ],
    },
    {
      id: 15,
      name: 'Juan David Cano López',
      image_url:
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fcolaboradores%2FJuan_David.webp?alt=media&token=59041746-a747-4c5d-8eff-4d0fcf0a84dc',
      tag_list: [
        'CEO Kronos GMT ',
        ' Ingeniero Civil ',
        ' Gestión de Proyectos de Construcción e Infraestructura ',
        ' Sistemas de Información Geográfica ',
        ' Residential Outdoor Living Design ',
        ' Renderizado 3D Realista',
      ],
    },
    {
      id: 16,
      name: 'Oscar Rojas Alania',
      image_url:
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fcolaboradores%2FOscar_Rojas.webp?alt=media&token=36546935-d04b-4f70-b5db-9f19dc2799ee',
      tag_list: [
        'Ingeniero Civil',
        ' PMP®',
        ' Master. Gestor de proyectos en infraestructura y APPs',
      ],
    },
    {
      id: 17,
      name: 'José Fabrizio Inga Díaz',
      image_url:
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fcolaboradores%2FJose_Fabrizio.webp?alt=media&token=9b3c015f-2ce5-4e24-9c60-fc0125e7c3c0',
      tag_list: [
        'Structural Engineer ',
        ' Computational Design ',
        ' Artificial Intelligence ',
        ' R & D',
      ],
    },
    {
      id: 18,
      name: 'Roner Rocha Moreno',
      image_url:
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fcolaboradores%2FRoner_Rocha.webp?alt=media&token=5e751a66-4f50-4d73-b2a1-772e070dcebf',
      tag_list: [
        'BIM Manager ',
        ' Diseño Parametrico Computacional ',
        ' Especialista en Estructuras',
      ],
    },
    {
      id: 19,
      name: 'Lohanna Castro Huarcaya',
      image_url:
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fcolaboradores%2FLohanna_Castro.webp?alt=media&token=9b1d5256-2226-416e-a349-dfc27313f3e0',
      tag_list: [
        'Architect  ',
        'Coordinador BIM',
        ' Managment ',
        ' VDC',
        'Design &Construction',
      ],
    },
    {
      id: 20,
      name: 'Facundo Leguizamón Pfeffer ',
      image_url:
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fcolaboradores%2FFacundo_Pfeffer.webp?alt=media&token=7d35d6b1-4867-400a-9d2c-5d2b68f09d4f',
      tag_list: [
        'Civil Structural Engineer ',
        ' Python Engineering Manager (EM) at Connectist ',
        ' Fulbright Alumni',
      ],
    },
    // {
    //   id: 21,
    //   name: 'Howard Hans Flores Cortez',
    //   image_url:
    //     'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fgrupos_estudiantiles%2FCIVIAL%20UTEC.webp?alt=media&token=3d02f213-039c-4648-8900-832ba47dd26b',
    //   tag_list: [
    //     'Ingeniero Civil ',
    //     ' Especialista BIM/GIS ',
    //     ' Docente BIM ',
    //     ' Autodesk Certified Instructor',
    //   ],
    // },
    // {
    //   id: 22,
    //   name: 'Jens Anthony Cabrera Meza',
    //   image_url:
    //     'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fgrupos_estudiantiles%2FCIVIAL%20UTEC.webp?alt=media&token=3d02f213-039c-4648-8900-832ba47dd26b',
    //   tag_list: ['Structural Engineer ', ' ML - DG ', ' Python ', ' BIM'],
    // },
  ];

  itemDataSelected: any = this.colaborators_list[0];

  changeCollabsButton(value: boolean) {
    this.collabsButtonSelected = value;

    if (value) {
      this.itemDataSelected = this.colaborators_list[0];
    } else {
      this.itemDataSelected = this.embajadores_list[0];
    }
  }

  selectItem(item: any, index: number) {
    this.itemSelected = index;
    this.itemDataSelected = item;
  }

  ngAfterViewInit(): void {
    console.log(this.itemDataSelected);

    if (this.browserService.isBrowser()) {
      const swiperElemConstructor = document.getElementById(
        'collaborators-swiper'
      );
      const swiperOptions: SwiperOptions = {
        loop: true,
        navigation: true,
        slidesPerView: 1,
        slidesPerGroup: 1,
        speed: 1000,
      };

      Object.assign(swiperElemConstructor!, swiperOptions);
      this.swiperElement.set(swiperElemConstructor as SwiperContainer);
      this.swiperElement()?.initialize();
    }
  }
}
