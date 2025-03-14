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

  colaborators_list: ICollaborator[] = [
    {
      id: 1,
      name: 'YOHARA DANIEL MEJIA ALBARRACIN',
      image_url:
        'https://imgs.search.brave.com/fuJ1S3nOrhPiLrGJP1JRhmbizoA1SHjLRxPoXA2lABM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjE3/Mjk4OTkwNy9waG90/by9tYWRyaWQtc3Bh/aW4taWxpYS10b3B1/cmlhLWF0dGVuZHMt/dGhlLXByZW1pZXJl/LW9mLXRvcHVyaWEt/YXQtY2luZXMtY2Fs/bGFvLW9uLXNlcHRl/bWJlci0xOC5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9RDMz/bXRKLUhVUEpOTW1q/R0VUek5jUlhpYnBU/NkQzTWRUZUtHTE5P/Tl9EST0',
      group: 'ACI UPC',
      description:
        'Me uní a AECODE por la oportunidad de transformar la industria AEC, acceder a herramientas innovadoras y aprender sobre IA y Machine Learning. Además, conectar con profesionales comprometidos con la modernización del sector fue clave para mi decisión de ser embajador.',
    },
    {
      id: 2,
      name: 'RODRIGO ENMANUEL BOZA ROMERO',
      image_url: '',
      group: 'CEIE UPC',
      description:
        'Unirme a AECODE me permitirá crecer como estudiante e ingeniero civil, formando parte de una comunidad enfocada en innovación y optimización en construcción. Me atrajo su enfoque en cursos con programación y la oportunidad de contribuir al desarrollo de estudiantes y profesionales al expandir este proyecto',
    },
    {
      id: 3,
      name: 'SERGIO GERARDO RODRIGUEZ LLANQUE',
      image_url:
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fgrupos_estudiantiles%2FADEIC%20PUCP.webp?alt=media&token=1084f791-7803-45f6-979a-b70e82ac6260',
      group: 'ESVIAL UNMSM',
      description:
        'Me uní a AECODE principalmente porque representa una propuesta innovadora que mira hacia el futuro, integrando nuevas tecnologías y aprovechando la inteligencia artificial como herramienta principal en el sector de la ingeniería.',
    },
    {
      id: 4,
      name: 'RODRIGO ELIAS ALVAREZ ALANOCCA',
      image_url:
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fgrupos_estudiantiles%2FALEIC.webp?alt=media&token=e9f356a8-46d1-403e-adbf-bfd3dda85502',
      group: '',
      description: '',
    },
    {
      id: 5,
      name: 'REINER ANTONIO LAGOS BARRETO',
      image_url:
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fgrupos_estudiantiles%2FANEIC%20ARGENTINA.webp?alt=media&token=0ee8ab53-0503-4405-8ef9-db35cdf97611',
      group: 'ACI PUCP Y GEMRA',
      description:
        'Me uní a AECODE porque sé que las nuevas tecnologías transformarán el sector AEC. Como profesional, es clave mantenerse al día con la innovación para adaptarse a los cambios, optimizar procesos y seguir siendo competitivo en la industria.',
    },
    {
      id: 6,
      name: 'PATRICK MORRIS GUEVARA CASTILLO',
      image_url:
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fgrupos_estudiantiles%2FANEIC%20EL%20SALVADOR.webp?alt=media&token=71879117-0fbe-4bb4-92bf-92516a602596',
      group: 'CONYGER UNMSM',
      description:
        'Me uní a AECODE porque enseñan herramientas vinculadas a la automatización e IA. Su enfoque práctico va más allá de la teoría,  dando posibilidad de aplicar todo lo aprendido en mis futuros proyectos.',
    },
    {
      id: 7,
      name: 'MIGUEL ANGEL DELGADO VALLE',
      image_url: '',
      group: 'ESVIAL UNMSM',
      description:
        'Son los diversos cursos que ofrecían que me interesaron al instante, dentro de ello el enfoque de usar tecnologías actuales como la inteligencia artificial, machine learning, uso de la programación y combinarlas con las aplicaciones en el área de la ingeniería civil.',
    },
    {
      id: 8,
      name: 'KAROL MILAGROS VALDEZ CHOQUE',
      image_url: '',
      group: 'ANEIC PERU',
      description:
        'Lo que me animó a unirme a AECODE es la posibilidad de formar parte de un grupo que impulsa la transformación de la industria AEC. Me motiva ser parte de un espacio donde puedo conectar con profesionales, compartir conocimientos y descubrir herramientas innovadoras que potencien el desarrollo del sector.',
    },
    {
      id: 9,
      name: 'MARIZZA YACASI YACASI',
      image_url:
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fgrupos_estudiantiles%2FCE%20LEAN%20UPC.webp?alt=media&token=c46a1102-c01b-4c8d-a018-f3d2f35951cc',
      group: 'EERI UNSA',
      description:
        'Me uní a AECODE porque creo que la digitalización y la innovación pueden transformar la ingeniería civil. Quiero aprender, compartir ideas y ser parte de una comunidad que impulse el cambio en el sector.',
    },
    {
      id: 10,
      name: 'KAREN LORENA FLORES ACHULLI',
      image_url:
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fgrupos_estudiantiles%2FCIVIAL%20UTEC.webp?alt=media&token=3d02f213-039c-4648-8900-832ba47dd26b',
      group: 'PROYECTA UNI',
      description:
        'Me uní a AECODE por los conocimientos en tecnología que comparten. Me parece innovador como aprovechan el desarrollo de la tecnología y aplicarlo al sector construcción.',
    },
    // {
    //   id: 11,
    //   name: 'JOSEP JESUS ABREGU GONZALES',
    //   image_url:
    //     'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fgrupos_estudiantiles%2FCIVIAL%20UTEC.webp?alt=media&token=3d02f213-039c-4648-8900-832ba47dd26b',
    //   group: 'GIT Y PROYECTA UNI',
    //   description: '',
    // },
    // {
    //   id: 12,
    //   name: 'JAIRSINHO SEBASTIAN HUISA VILLAVICENCIO',
    //   image_url:
    //     'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fgrupos_estudiantiles%2FCIVIAL%20UTEC.webp?alt=media&token=3d02f213-039c-4648-8900-832ba47dd26b',
    //   group: 'ESTRUCTURAS UNMSM',
    //   description:
    //     'Descubrí AECODE en el CONEIC 2024 y me impresionó su visión innovadora para transformar el sector AEC con nuevas tecnologías. Su capacidad para difundir conocimiento y motivar el desarrollo tecnológico despertó mi interés. Unirme es una gran oportunidad para aprender, contribuir y crecer profesionalmente.',
    // },
    // {
    //   id: 13,
    //   name: 'EVA LUCERO AREVALO SANCHEZ',
    //   image_url:
    //     'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fgrupos_estudiantiles%2FCIVIAL%20UTEC.webp?alt=media&token=3d02f213-039c-4648-8900-832ba47dd26b',
    //   group: 'ACI UTEC',
    //   description:
    //     'Siempre me ha interesado aprender cosas nuevas, y AECODE combina perfectamente innovación, tecnología y el sector AEC, que es mi área de estudio. Quise ser parte de este espacio para crecer y también ayudar a que otros descubran todo lo que este centro tiene para ofrecer.',
    // },
    // {
    //   id: 14,
    //   name: 'CRISTHIAN IVAN ESCOBAR GARAVITO',
    //   image_url:
    //     'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fgrupos_estudiantiles%2FCIVIAL%20UTEC.webp?alt=media&token=3d02f213-039c-4648-8900-832ba47dd26b',
    //   group: '',
    //   description:
    //     'Me uní a AECODE por su visión de futuro sobre IA y automatización en proyectos, algo que aún no se ve en clases pero pronto será esencial. La mejor forma de afrontar este cambio es prepararnos desde ahora, y esta comunidad ofrece el espacio ideal para aprender y adaptarnos.',
    // },
    // {
    //   id: 15,
    //   name: 'ERIKA PAMELA DELGADO',
    //   image_url:
    //     'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fgrupos_estudiantiles%2FCIVIAL%20UTEC.webp?alt=media&token=3d02f213-039c-4648-8900-832ba47dd26b',
    //   group: 'ANEIC PERÚ',
    //   description:
    //     'Me uní a AECODE para estar a la vanguardia en tecnología e IA aplicadas a la construcción. Quiero aprender, investigar y desarrollar soluciones que optimicen procesos y promuevan la sostenibilidad. Esta comunidad me permite conectar con mentes innovadoras y contribuir al futuro del sector.',
    // },
    // {
    //   id: 16,
    //   name: 'EULER MENDOZA ENRIQUEZ',
    //   image_url:
    //     'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fgrupos_estudiantiles%2FCIVIAL%20UTEC.webp?alt=media&token=3d02f213-039c-4648-8900-832ba47dd26b',
    //   group: 'GEOPUCP',
    //   description:
    //     'La visión y compromiso que encuentro en la empresa para implementar y mejorar la ingeniería civil en el país con las tecnologías más recientes. Además del cercano contacto y buena enseñanza en sus clases.',
    // },
    // {
    //   id: 17,
    //   name: 'CAROL FABIOLA OCAÑA JARA',
    //   image_url:
    //     'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fgrupos_estudiantiles%2FCIVIAL%20UTEC.webp?alt=media&token=3d02f213-039c-4648-8900-832ba47dd26b',
    //   group: 'ESTRUCTURAS UNMSM',
    //   description:
    //     'Me uní a AECODE por sus cursos innovadores y su comunidad de apoyo. Soy Carol Ocaña, estudiante de Ingeniería Civil, apasionada por diseñar soluciones y aprender sobre tecnologías que transforman el sector. Disfruto los retos y creo en el valor de las comunidades colaborativas para el crecimiento profesional.',
    // },
    // {
    //   id: 18,
    //   name: 'CAMILA NICOLE MONTERREY PALACIOS',
    //   image_url:
    //     'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fgrupos_estudiantiles%2FCIVIAL%20UTEC.webp?alt=media&token=3d02f213-039c-4648-8900-832ba47dd26b',
    //   group: 'EERI PUCP',
    //   description:
    //     'Me uní a AECODE por su enfoque innovador en Ingeniería Civil y el impacto de la automatización en el diseño estructural. Busco optimizar procesos, hacer soluciones más eficientes y aprender junto a profesionales que comparten esta visión. Es una gran oportunidad de crecimiento y colaboración.',
    // },
  ];

  embajadores_list: IEmbajador[] = [
    {
      id: 1,
      name: 'Antony Campos Vega',
      image_url:
        'https://imgs.search.brave.com/Vk0XLJmnwDROcM0KTiryXYLUcx5KHJhwB9GmEDl7q4w/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cHVibGluZXdzLmd0/L3Jlc2l6ZXIvdjIv/Q1dFRERVRkhCRkZJ/QkxSVzZQRUxEUEFE/M0UuanBnP3NtYXJ0/PXRydWUmYXV0aD03/ZjgwYjViNWQzMGQ1/OTIwNmRkMTZjYTc4/ODY4MjQ4YTM1NmVm/NTcxZjdhYjk1NmEy/N2U5YjBiZmJkOTk5/NmVhJndpZHRoPTEx/NTAmaGVpZ2h0PTY0/Ng',
      tag_list: ['Innovación-tecnología BIM UNI', 'PMP®', 'Director PMI Lima'],
    },
    {
      id: 2,
      name: 'Alexis Vera',
      image_url:
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fgrupos_estudiantiles%2FACI%20UTEC.webp?alt=media&token=51dc3607-d40f-4f29-beb8-92b66d828521',
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
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fgrupos_estudiantiles%2FADEIC%20PUCP.webp?alt=media&token=1084f791-7803-45f6-979a-b70e82ac6260',
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
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fgrupos_estudiantiles%2FALEIC.webp?alt=media&token=e9f356a8-46d1-403e-adbf-bfd3dda85502',
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
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fgrupos_estudiantiles%2FANEIC%20ARGENTINA.webp?alt=media&token=0ee8ab53-0503-4405-8ef9-db35cdf97611',
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
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fgrupos_estudiantiles%2FANEIC%20EL%20SALVADOR.webp?alt=media&token=71879117-0fbe-4bb4-92bf-92516a602596',
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
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fgrupos_estudiantiles%2FANEIC%20UNSA%20(1).webp?alt=media&token=0360e06a-7c89-44b6-9c10-ffa0feb4f9ec',
      tag_list: ['Ingeniero Civil ', ' Diseñador Estructural'],
    },
    {
      id: 8,
      name: 'Vladimir Mario Huaman Espillco',
      image_url:
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fgrupos_estudiantiles%2FASCEIC%20BOLIVIA.webp?alt=media&token=a6b7f1ea-e67f-4431-9881-a2c5c4206529',
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
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fgrupos_estudiantiles%2FCE%20LEAN%20UPC.webp?alt=media&token=c46a1102-c01b-4c8d-a018-f3d2f35951cc',
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
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fgrupos_estudiantiles%2FCIVIAL%20UTEC.webp?alt=media&token=3d02f213-039c-4648-8900-832ba47dd26b',
      tag_list: [
        'Civil Engineer ',
        ' BIM Automation ',
        ' Generative Design ',
        ' Revit API ',
        ' Optimization ',
        ' Sustainability',
      ],
    },
    // {
    //   id: 11,
    //   name: 'José Franco Gutiérrez Manrique',
    //   image_url:
    //     'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fgrupos_estudiantiles%2FCIVIAL%20UTEC.webp?alt=media&token=3d02f213-039c-4648-8900-832ba47dd26b',
    //   tag_list: ['B.S. Civil Engineering','Structural Engineering','Seismic Vulnerability'],
    // },
    // {
    //   id: 12,
    //   name: 'Josue Julianz Noha Valdivia',
    //   image_url:
    //     'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fgrupos_estudiantiles%2FCIVIAL%20UTEC.webp?alt=media&token=3d02f213-039c-4648-8900-832ba47dd26b',
    //   tag_list: [
    //     'Programador de Algoritmos de Automatización y Optimización Estructural',
    //   ],
    // },
    // {
    //   id: 13,
    //   name: 'Renzo Giancarlo Rios Rugel',
    //   image_url:
    //     'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fgrupos_estudiantiles%2FCIVIAL%20UTEC.webp?alt=media&token=3d02f213-039c-4648-8900-832ba47dd26b',
    //   tag_list: [
    //     'Founder of Lambda ',
    //     ' Senior AEC Software Developer ',
    //     ' Autodesk Platform Services',
    //   ],
    // },
    // {
    //   id: 14,
    //   name: 'Rodrigo Reyes Jara',
    //   image_url:
    //     'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fgrupos_estudiantiles%2FCIVIAL%20UTEC.webp?alt=media&token=3d02f213-039c-4648-8900-832ba47dd26b',
    //   tag_list: [
    //     'MIT Learning Facilitator GenAI ',
    //     ' Founder K-chAI ',
    //     ' CEO Durability ',
    //     ' AI Professor ',
    //     ' Innovation and Industry 4.0 Professor PUC',
    //   ],
    // },
    // {
    //   id: 15,
    //   name: 'Juan David Cano López',
    //   image_url:
    //     'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fgrupos_estudiantiles%2FCIVIAL%20UTEC.webp?alt=media&token=3d02f213-039c-4648-8900-832ba47dd26b',
    //   tag_list: [
    //     'CEO Kronos GMT ',
    //     ' Ingeniero Civil ',
    //     ' Gestión de Proyectos de Construcción e Infraestructura ',
    //     ' Sistemas de Información Geográfica ',
    //     ' Residential Outdoor Living Design ',
    //     ' Renderizado 3D Realista',
    //   ],
    // },
    // {
    //   id: 16,
    //   name: 'Oscar Rojas Alania',
    //   image_url:
    //     'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fgrupos_estudiantiles%2FCIVIAL%20UTEC.webp?alt=media&token=3d02f213-039c-4648-8900-832ba47dd26b',
    //   tag_list: [
    //     'Ingeniero Civil',
    //     ' PMP®',
    //     ' Master. Gestor de proyectos en infraestructura y APPs',
    //   ],
    // },
    // {
    //   id: 17,
    //   name: 'José Fabrizio Inga Díaz',
    //   image_url:
    //     'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fgrupos_estudiantiles%2FCIVIAL%20UTEC.webp?alt=media&token=3d02f213-039c-4648-8900-832ba47dd26b',
    //   tag_list: [
    //     'Structural Engineer ',
    //     ' Computational Design ',
    //     ' Artificial Intelligence ',
    //     ' R & D',
    //   ],
    // },
    // {
    //   id: 18,
    //   name: 'Roner Rocha Moreno',
    //   image_url:
    //     'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fgrupos_estudiantiles%2FCIVIAL%20UTEC.webp?alt=media&token=3d02f213-039c-4648-8900-832ba47dd26b',
    //   tag_list: [
    //     'BIM Manager ',
    //     ' Diseño Parametrico Computacional ',
    //     ' Especialista en Estructuras',
    //   ],
    // },
    // {
    //   id: 19,
    //   name: 'Lohanna Castro Huarcaya',
    //   image_url:
    //     'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fgrupos_estudiantiles%2FCIVIAL%20UTEC.webp?alt=media&token=3d02f213-039c-4648-8900-832ba47dd26b',
    //   tag_list: [
    //     'Architect  ',
    //     'Coordinador BIM',
    //     ' Managment ',
    //     ' VDC',
    //     'Design &Construction',
    //   ],
    // },
    // {
    //   id: 20,
    //   name: 'Facundo Leguizamón Pfeffer ',
    //   image_url:
    //     'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fgrupos_estudiantiles%2FCIVIAL%20UTEC.webp?alt=media&token=3d02f213-039c-4648-8900-832ba47dd26b',
    //   tag_list: [
    //     'Civil Structural Engineer ',
    //     ' Python Engineering Manager (EM) at Connectist ',
    //     ' Fulbright Alumni',
    //   ],
    // },
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

  colaborators_list_2: ICollaborator[] = [
    {
      id: 11,
      name: 'JOSEP JESUS ABREGU GONZALES',
      image_url:
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fgrupos_estudiantiles%2FCIVIAL%20UTEC.webp?alt=media&token=3d02f213-039c-4648-8900-832ba47dd26b',
      group: 'GIT Y PROYECTA UNI',
      description: '',
    },
    {
      id: 12,
      name: 'JAIRSINHO SEBASTIAN HUISA VILLAVICENCIO',
      image_url:
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fgrupos_estudiantiles%2FCIVIAL%20UTEC.webp?alt=media&token=3d02f213-039c-4648-8900-832ba47dd26b',
      group: 'ESTRUCTURAS UNMSM',
      description:
        'Descubrí AECODE en el CONEIC 2024 y me impresionó su visión innovadora para transformar el sector AEC con nuevas tecnologías. Su capacidad para difundir conocimiento y motivar el desarrollo tecnológico despertó mi interés. Unirme es una gran oportunidad para aprender, contribuir y crecer profesionalmente.',
    },
    {
      id: 13,
      name: 'EVA LUCERO AREVALO SANCHEZ',
      image_url:
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fgrupos_estudiantiles%2FCIVIAL%20UTEC.webp?alt=media&token=3d02f213-039c-4648-8900-832ba47dd26b',
      group: 'ACI UTEC',
      description:
        'Siempre me ha interesado aprender cosas nuevas, y AECODE combina perfectamente innovación, tecnología y el sector AEC, que es mi área de estudio. Quise ser parte de este espacio para crecer y también ayudar a que otros descubran todo lo que este centro tiene para ofrecer.',
    },
    {
      id: 14,
      name: 'CRISTHIAN IVAN ESCOBAR GARAVITO',
      image_url:
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fgrupos_estudiantiles%2FCIVIAL%20UTEC.webp?alt=media&token=3d02f213-039c-4648-8900-832ba47dd26b',
      group: '',
      description:
        'Me uní a AECODE por su visión de futuro sobre IA y automatización en proyectos, algo que aún no se ve en universidad pero pronto será esencial. La mejor forma de afrontar este cambio es prepararnos desde ahora, y esta comunidad ofrece el espacio ideal para aprender y adaptarnos.',
    },
    {
      id: 15,
      name: 'ERIKA PAMELA DELGADO',
      image_url:
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fgrupos_estudiantiles%2FCIVIAL%20UTEC.webp?alt=media&token=3d02f213-039c-4648-8900-832ba47dd26b',
      group: 'ANEIC PERÚ',
      description:
        'Me uní a AECODE para estar a la vanguardia en tecnología e IA aplicadas a la construcción. Quiero aprender, investigar y desarrollar soluciones que optimicen procesos y promuevan la sostenibilidad. Esta comunidad me permite conectar con mentes innovadoras y contribuir al futuro del sector.',
    },
    {
      id: 16,
      name: 'EULER MENDOZA ENRIQUEZ',
      image_url:
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fgrupos_estudiantiles%2FCIVIAL%20UTEC.webp?alt=media&token=3d02f213-039c-4648-8900-832ba47dd26b',
      group: 'GEOPUCP',
      description:
        'La visión y compromiso que encuentro en la empresa para implementar y mejorar la ingeniería civil en el país con las tecnologías más recientes. Además del cercano contacto y buena enseñanza en sus clases.',
    },
    {
      id: 17,
      name: 'CAROL FABIOLA OCAÑA JARA',
      image_url:
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fgrupos_estudiantiles%2FCIVIAL%20UTEC.webp?alt=media&token=3d02f213-039c-4648-8900-832ba47dd26b',
      group: 'ESTRUCTURAS UNMSM',
      description:
        'Me uní a AECODE por sus cursos innovadores y su comunidad de apoyo. Soy Carol Ocaña, estudiante de Ingeniería Civil, apasionada por diseñar soluciones y aprender sobre tecnologías que transforman el sector. Disfruto los retos y creo en el valor de las comunidades colaborativas para el crecimiento profesional.',
    },
    {
      id: 18,
      name: 'CAMILA NICOLE MONTERREY PALACIOS',
      image_url:
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fgrupos_estudiantiles%2FCIVIAL%20UTEC.webp?alt=media&token=3d02f213-039c-4648-8900-832ba47dd26b',
      group: 'EERI PUCP',
      description:
        'Me uní a AECODE por su enfoque innovador en Ingeniería Civil y el impacto de la automatización en el diseño estructural. Busco optimizar procesos, hacer soluciones más eficientes y aprender junto a profesionales que comparten esta visión. Es una gran oportunidad de crecimiento y colaboración.',
    },
    {
      id: 19,
      name: ' ',
      image_url:
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fgrupos_estudiantiles%2FCIVIAL%20UTEC.webp?alt=media&token=3d02f213-039c-4648-8900-832ba47dd26b',
      group: 'EERI PUCP',
      description: ' ',
    },
    {
      id: 20,
      name: ' ',
      image_url:
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fgrupos_estudiantiles%2FCIVIAL%20UTEC.webp?alt=media&token=3d02f213-039c-4648-8900-832ba47dd26b',
      group: 'EERI PUCP',
      description: ' ',
    },
  ];

  embajadores_list_2: IEmbajador[] = [
    {
      id: 11,
      name: 'José Franco Gutiérrez Manrique',
      image_url:
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fgrupos_estudiantiles%2FCIVIAL%20UTEC.webp?alt=media&token=3d02f213-039c-4648-8900-832ba47dd26b',
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
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fgrupos_estudiantiles%2FCIVIAL%20UTEC.webp?alt=media&token=3d02f213-039c-4648-8900-832ba47dd26b',
      tag_list: [
        'Programador de Algoritmos de Automatización y Optimización Estructural',
      ],
    },
    {
      id: 13,
      name: 'Renzo Giancarlo Rios Rugel',
      image_url:
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fgrupos_estudiantiles%2FCIVIAL%20UTEC.webp?alt=media&token=3d02f213-039c-4648-8900-832ba47dd26b',
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
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fgrupos_estudiantiles%2FCIVIAL%20UTEC.webp?alt=media&token=3d02f213-039c-4648-8900-832ba47dd26b',
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
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fgrupos_estudiantiles%2FCIVIAL%20UTEC.webp?alt=media&token=3d02f213-039c-4648-8900-832ba47dd26b',
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
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fgrupos_estudiantiles%2FCIVIAL%20UTEC.webp?alt=media&token=3d02f213-039c-4648-8900-832ba47dd26b',
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
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fgrupos_estudiantiles%2FCIVIAL%20UTEC.webp?alt=media&token=3d02f213-039c-4648-8900-832ba47dd26b',
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
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fgrupos_estudiantiles%2FCIVIAL%20UTEC.webp?alt=media&token=3d02f213-039c-4648-8900-832ba47dd26b',
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
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fgrupos_estudiantiles%2FCIVIAL%20UTEC.webp?alt=media&token=3d02f213-039c-4648-8900-832ba47dd26b',
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
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fgrupos_estudiantiles%2FCIVIAL%20UTEC.webp?alt=media&token=3d02f213-039c-4648-8900-832ba47dd26b',
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
