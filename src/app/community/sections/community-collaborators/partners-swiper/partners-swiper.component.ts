import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  EventEmitter,
  inject,
  Output,
  signal,
} from '@angular/core';
import { ICollaborator } from '../../../interfaces/Collaborator';
import { SwiperContainer } from 'swiper/element';
import { BrowserService } from '../../../../core/services/browser.service';
import { SwiperOptions } from 'swiper/types';
import { CollabsLikeIconComponent } from '../../../icons/collabs-like-icon/collabs-like-icon.component';

@Component({
  selector: 'app-partners-swiper',
  standalone: true,
  imports: [CollabsLikeIconComponent],
  templateUrl: './partners-swiper.component.html',
  styleUrl: './partners-swiper.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PartnersSwiperComponent {
  embajadores_list: ICollaborator[] = [
    {
      id: 1,
      name: 'YOHARA MEJIA ALBARRACIN',
      image_url:
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fembajadores%2FYOHARA_DANIEL_MEJIA_ALBARRACIN.webp?alt=media&token=e78a2dea-8cb4-4aa7-8f97-15e3691de99e',
      group: 'ACI UPC',
      description:
        'Me uní a AECODE por la oportunidad de transformar la industria AEC, acceder a herramientas innovadoras y aprender sobre IA y Machine Learning. Además, conectar con profesionales comprometidos con la modernización del sector fue clave para mi decisión de ser embajador.',
    },
    {
      id: 2,
      name: 'RODRIGO BOZA ROMERO',
      image_url:
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fembajadores%2FRODRIGO_ENMANUEL_BOZA_ROMERO.webp?alt=media&token=1f2f8808-9850-4d95-895b-585ce8ba3afc',
      group: 'CEIE UPC',
      description:
        'Unirme a AECODE me permitirá crecer como estudiante e ingeniero civil, formando parte de una comunidad enfocada en innovación y optimización en construcción. Me atrajo su enfoque en cursos con programación y la oportunidad de contribuir al desarrollo de estudiantes y profesionales al expandir este proyecto',
    },
    {
      id: 3,
      name: 'SERGIO RODRIGUEZ LLANQUE',
      image_url:
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fembajadores%2FSERGIO_GERARDO_RODRIGUEZ_LLANQUE.webp?alt=media&token=497c6299-009f-47e4-bba8-613d9ad2e65b',
      group: 'ESVIAL UNMSM',
      description:
        'Me uní a AECODE principalmente porque representa una propuesta innovadora que mira hacia el futuro, integrando nuevas tecnologías y aprovechando la inteligencia artificial como herramienta principal en el sector de la ingeniería.',
    },
    {
      id: 4,
      name: 'RODRIGO ALVAREZ ALANOCCA',
      image_url:
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fembajadores%2FRODRIGO_ELIAS_ALVAREZ_ALANOCCA.webp?alt=media&token=d21c1b9a-8fa4-4bba-aee3-c519d3cace6e',
      group: 'ANEIC, CEIC Y EERI UNSA',
      description:
        'Me uní a AECODE porque creo en el valor de aprender y crecer en comunidad. Ser parte de un grupo con visión y compromiso me motiva a desarrollar habilidades, compartir ideas y aportar en proyectos con impacto. Además, me entusiasma conectar con personas que buscan generar cambios positivos.',
    },
    {
      id: 5,
      name: 'REINER LAGOS BARRETO',
      image_url:
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fembajadores%2FREINER_ANTONIO_LAGOS_BARRETO.webp?alt=media&token=08738052-c64f-441d-ae3e-3cbeff445e0e',
      group: 'ACI PUCP Y GEMRA',
      description:
        'Me uní a AECODE porque sé que las nuevas tecnologías transformarán el sector AEC. Como profesional, es clave mantenerse al día con la innovación para adaptarse a los cambios, optimizar procesos y seguir siendo competitivo en la industria.',
    },
    {
      id: 6,
      name: 'PATRICK GUEVARA CASTILLO',
      image_url:
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fembajadores%2FPATRICK_MORRIS_GUEVARA_CASTILLO.webp?alt=media&token=9046cdbe-6ed9-4380-92b1-191000dbf4ae',
      group: 'CONYGER UNMSM',
      description:
        'Me uní a AECODE porque enseñan herramientas vinculadas a la automatización e IA. Su enfoque práctico va más allá de la teoría,  dando posibilidad de aplicar todo lo aprendido en mis futuros proyectos.',
    },
    {
      id: 7,
      name: 'MIGUEL DELGADO VALLE',
      image_url:
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fembajadores%2FMIGUEL_ANGEL_DELGADO_VALLE.webp?alt=media&token=f54b35b0-2c7d-4707-9d94-84d4d983a2c3',
      group: 'ESVIAL UNMSM',
      description:
        'Son los diversos cursos que ofrecían que me interesaron al instante, dentro de ello el enfoque de usar tecnologías actuales como la inteligencia artificial, machine learning, uso de la programación y combinarlas con las aplicaciones en el área de la ingeniería civil.',
    },
    {
      id: 8,
      name: 'KAROL VALDEZ CHOQUE',
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
      name: 'KAREN FLORES ACHULLI',
      image_url:
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fembajadores%2FKAREN_LORENA_FLORES_ACHULLI.webp?alt=media&token=39933df8-5960-4fd2-9989-e62a82e8ac2d',
      group: 'PROYECTA UNI',
      description:
        'Me uní a AECODE por los conocimientos en tecnología que comparten. Me parece innovador como aprovechan el desarrollo de la tecnología y aplicarlo al sector construcción.',
    },
  ];
  embajadores_list_2: ICollaborator[] = [
    {
      id: 11,
      name: 'JOSEP ABREGU GONZALES',
      image_url:
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fembajadores%2FJOSEP_JESUS_ABREGU_GONZALES.webp?alt=media&token=08e8562b-7237-484c-bc50-e83f4ea9ee7a',
      group: 'GIT Y PROYECTA UNI',
      description:
        'Me uní a AECODE por las oportunidades que ofrece y la posibilidad de conectar con expertos en automatización, IA y gestión de procesos. Como gestor de proyectos, me interesa BIM 4.0 y herramientas como Make o N8N. Aquí seguiré aprendiendo y, en el futuro, espero contribuir como mentor en estos temas.',
    },
    {
      id: 12,
      name: 'JAIRSINHO HUISA VILLAVICENCIO',
      image_url:
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fembajadores%2FJAIRSINHO_SEBASTIAN_HUISA_VILLAVICENCIO.webp?alt=media&token=3c126653-c543-44d7-8f96-b4a1ca2342fa',
      group: 'ESTRUCTURAS UNMSM',
      description:
        'Descubrí AECODE en el CONEIC 2024 y me impresionó su visión innovadora para transformar el sector AEC con nuevas tecnologías. Su capacidad para difundir conocimiento y motivar el desarrollo tecnológico despertó mi interés. Unirme es una gran oportunidad para aprender, contribuir y crecer profesionalmente.',
    },
    {
      id: 13,
      name: 'EVA AREVALO SANCHEZ',
      image_url:
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fembajadores%2FEva_Lucero_Arevalo_Sanchez.webp?alt=media&token=40cb6c0d-c057-4c77-928c-83a4a5046f49',
      group: 'ACI UTEC',
      description:
        'Siempre me ha interesado aprender cosas nuevas, y AECODE combina perfectamente innovación, tecnología y el sector AEC, que es mi área de estudio. Quise ser parte de este espacio para crecer y también ayudar a que otros descubran todo lo que este centro tiene para ofrecer.',
    },
    {
      id: 14,
      name: 'CRISTHIAN ESCOBAR GARAVITO',
      image_url:
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fembajadores%2FCRISTHIAN_IVAN_ESCOBAR_GARAVITO.webp?alt=media&token=d89cb687-6416-4dd5-93dd-d5a5b34525cf',
      group: 'COMUNIDAD CIMIC',
      description:
        'Me uní a AECODE por su visión de futuro sobre IA y automatización en proyectos, algo que aún no se ve en la Universidad pero pronto será esencial. La mejor forma de afrontar este cambio es prepararnos desde ahora, y esta comunidad ofrece el espacio ideal para aprender y adaptarnos.',
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
      name: 'CAROL OCAÑA JARA',
      image_url:
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fembajadores%2FCAROL_FABIOLA_OCA%C3%91A_JARA.webp?alt=media&token=49258bbf-23ba-47b6-8c2b-d6d49215db84',
      group: 'ESTRUCTURAS UNMSM',
      description:
        'Me uní a AECODE por sus cursos innovadores y su comunidad de apoyo. Soy Carol Ocaña, estudiante de Ingeniería Civil, apasionada por diseñar soluciones y aprender sobre tecnologías que transforman el sector. Disfruto los retos y creo en el valor de las comunidades colaborativas para el crecimiento profesional.',
    },
    {
      id: 18,
      name: 'CAMILA MONTERREY PALACIOS',
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
      name: 'KAREN FLORES ACHULLI',
      image_url:
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fembajadores%2FKAREN_LORENA_FLORES_ACHULLI.webp?alt=media&token=39933df8-5960-4fd2-9989-e62a82e8ac2d',
      group: 'PROYECTA UNI',
      description:
        'Me uní a AECODE por los conocimientos en tecnología que comparten. Me parece innovador como aprovechan el desarrollo de la tecnología y aplicarlo al sector construcción.',
    },
  ];

  @Output() itemSelected = new EventEmitter<ICollaborator>();

  browserService: BrowserService = inject(BrowserService);

  swiperElement = signal<SwiperContainer | null>(null);

  itemDataSelected: ICollaborator = this.embajadores_list[0];

  itemIndexSelected = 0;

  ngAfterViewInit(): void {
    if (this.browserService.isBrowser()) {
      const swiperElemConstructor =
        document.getElementById('ambassador-swiper');
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

  selectItem(item: any, index: number) {
    this.itemDataSelected = item;
    this.itemIndexSelected = index;
    this.itemSelected.emit(item);
  }
}
