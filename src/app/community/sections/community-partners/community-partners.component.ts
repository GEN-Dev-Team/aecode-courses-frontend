import { Component } from '@angular/core';
import { PartnerItemComponent } from './partner-item/partner-item.component';
import { IPartner } from '../../interfaces/Partner';
import { LoaderComponent } from '../../../shared/components/loader/loader.component';

@Component({
  selector: 'app-community-partners',
  standalone: true,
  imports: [PartnerItemComponent, LoaderComponent],
  templateUrl: './community-partners.component.html',
  styleUrl: './community-partners.component.scss',
})
export class CommunityPartnersComponent {
  companyButtonSelected: boolean = false;

  student_groups: IPartner[] = [
    {
      id: 1,
      name: 'ACI PUCP',
      image_url:
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fgrupos_estudiantiles%2FACI%20PUCP.webp?alt=media&token=250da474-b95e-4672-bbe6-8cd69364884b',
    },
    {
      id: 2,
      name: 'ACI UTEC',
      image_url:
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fgrupos_estudiantiles%2FACI%20UTEC.webp?alt=media&token=51dc3607-d40f-4f29-beb8-92b66d828521',
    },
    {
      id: 3,
      name: 'ADEIC PUCP',
      image_url:
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fgrupos_estudiantiles%2FADEIC%20PUCP.webp?alt=media&token=1084f791-7803-45f6-979a-b70e82ac6260',
    },
    {
      id: 4,
      name: 'ALEIC',
      image_url:
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fgrupos_estudiantiles%2FALEIC.webp?alt=media&token=e9f356a8-46d1-403e-adbf-bfd3dda85502',
    },
    {
      id: 5,
      name: 'ANEIC ARGENTINA',
      image_url:
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fgrupos_estudiantiles%2FANEIC%20ARGENTINA.webp?alt=media&token=0ee8ab53-0503-4405-8ef9-db35cdf97611',
    },
    {
      id: 6,
      name: 'ANEIC EL SALVADOR',
      image_url:
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fgrupos_estudiantiles%2FANEIC%20EL%20SALVADOR.webp?alt=media&token=71879117-0fbe-4bb4-92bf-92516a602596',
    },
    {
      id: 7,
      name: 'ANEIC UNSA',
      image_url:
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fgrupos_estudiantiles%2FANEIC%20UNSA%20(1).webp?alt=media&token=0360e06a-7c89-44b6-9c10-ffa0feb4f9ec',
    },
    {
      id: 8,
      name: 'ASCEIC BOLIVIA',
      image_url:
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fgrupos_estudiantiles%2FASCEIC%20BOLIVIA.webp?alt=media&token=a6b7f1ea-e67f-4431-9881-a2c5c4206529',
    },
    {
      id: 9,
      name: 'CE LEAN UP',
      image_url:
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fgrupos_estudiantiles%2FCE%20LEAN%20UPC.webp?alt=media&token=c46a1102-c01b-4c8d-a018-f3d2f35951cc',
    },
    {
      id: 10,
      name: 'CIVIAL UTEC',
      image_url:
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fgrupos_estudiantiles%2FCIVIAL%20UTEC.webp?alt=media&token=3d02f213-039c-4648-8900-832ba47dd26b',
    },
    {
      id: 11,
      name: 'CONYGER',
      image_url:
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fgrupos_estudiantiles%2FCONYGER%20(1).webp?alt=media&token=d695a25f-8cf9-43dd-bb21-6719d118f8df',
    },
    {
      id: 12,
      name: 'EERI PUCP',
      image_url:
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fgrupos_estudiantiles%2FEERI%20PUCP.webp?alt=media&token=15d75995-080f-4511-afb8-1b1e7fc03cf0',
    },
    {
      id: 13,
      name: 'EERI UNSA',
      image_url:
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fgrupos_estudiantiles%2FEERI%20UNSA%20(1).webp?alt=media&token=45a4b690-cf0c-404b-b560-a6fc1425c689',
    },
    {
      id: 14,
      name: 'ESTRUCTURAS - UNMSM',
      image_url:
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fgrupos_estudiantiles%2FESTRUCTURAS%20-%20%20UNMSM.jpeg%20(1).webp?alt=media&token=7c81b19f-451c-45ce-b3a2-8e99a3711ef3',
    },
    {
      id: 15,
      name: 'GEOPUCP',
      image_url:
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fgrupos_estudiantiles%2FGEOPUCP.webp?alt=media&token=bd072ad5-efd0-41db-9b36-4ff873dc4c19',
    },
    {
      id: 16,
      name: 'GIT',
      image_url:
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fgrupos_estudiantiles%2FGITSINFONDO2.webp?alt=media&token=eee76e46-e4d8-478c-aa04-e2bbeedfcad8',
    },
    {
      id: 17,
      name: 'ESVIAL - UNMSM',
      image_url:
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fgrupos_estudiantiles%2FLOGO%20PLOMO%202024%20(1).webp?alt=media&token=3ef48c82-c9d1-4de3-a5a2-227f7bd9ee6c',
    },
    {
      id: 18,
      name: 'TIVIAL UPN',
      image_url:
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fgrupos_estudiantiles%2FTIVIAL%20UPN.webp?alt=media&token=1cc413a1-d9d2-4214-a990-2daff73020d8',
    },
  ];

  companies: IPartner[] = [
    {
      id: 1,
      name: 'ACI PUCP',
      image_url:
        'v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fgrupos_estudiantiles%2FACI%20PUCP.webp?alt=media&token=250da474-b95e-4672-bbe6-8cd69364884b',
    },
    {
      id: 2,
      name: 'ACI UTEC',
      image_url:
        'v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fgrupos_estudiantiles%2FACI%20UTEC.webp?alt=media&token=51dc3607-d40f-4f29-beb8-92b66d828521',
    },
    {
      id: 3,
      name: 'ADEIC PUCP',
      image_url:
        'v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fgrupos_estudiantiles%2FADEIC%20PUCP.webp?alt=media&token=1084f791-7803-45f6-979a-b70e82ac6260',
    },
    {
      id: 4,
      name: 'ALEIC',
      image_url:
        'v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fgrupos_estudiantiles%2FALEIC.webp?alt=media&token=e9f356a8-46d1-403e-adbf-bfd3dda85502',
    },
    {
      id: 5,
      name: 'ANEIC ARGENTINA',
      image_url:
        'v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fgrupos_estudiantiles%2FANEIC%20ARGENTINA.webp?alt=media&token=0ee8ab53-0503-4405-8ef9-db35cdf97611',
    },
    {
      id: 6,
      name: 'ANEIC EL SALVADOR',
      image_url:
        'v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fgrupos_estudiantiles%2FANEIC%20EL%20SALVADOR.webp?alt=media&token=71879117-0fbe-4bb4-92bf-92516a602596',
    },
    {
      id: 7,
      name: 'ANEIC UNSA',
      image_url:
        'v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fgrupos_estudiantiles%2FANEIC%20UNSA%20(1).webp?alt=media&token=0360e06a-7c89-44b6-9c10-ffa0feb4f9ec',
    },
    {
      id: 8,
      name: 'ASCEIC BOLIVIA',
      image_url:
        'v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fgrupos_estudiantiles%2FASCEIC%20BOLIVIA.webp?alt=media&token=a6b7f1ea-e67f-4431-9881-a2c5c4206529',
    },
    {
      id: 9,
      name: 'CE LEAN UP',
      image_url:
        'v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fgrupos_estudiantiles%2FCE%20LEAN%20UPC.webp?alt=media&token=c46a1102-c01b-4c8d-a018-f3d2f35951cc',
    },
    {
      id: 10,
      name: 'CIVIAL UTEC',
      image_url:
        'v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fgrupos_estudiantiles%2FCIVIAL%20UTEC.webp?alt=media&token=3d02f213-039c-4648-8900-832ba47dd26b',
    },
    {
      id: 11,
      name: 'CONYGER',
      image_url:
        'v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fgrupos_estudiantiles%2FCONYGER%20(1).webp?alt=media&token=d695a25f-8cf9-43dd-bb21-6719d118f8df',
    },
    {
      id: 12,
      name: 'EERI PUCP',
      image_url:
        'v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fgrupos_estudiantiles%2FEERI%20PUCP.webp?alt=media&token=15d75995-080f-4511-afb8-1b1e7fc03cf0',
    },
    {
      id: 13,
      name: 'EERI UNSA',
      image_url:
        'v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fgrupos_estudiantiles%2FEERI%20UNSA%20(1).webp?alt=media&token=45a4b690-cf0c-404b-b560-a6fc1425c689',
    },
    {
      id: 14,
      name: 'ESTRUCTURAS - UNMSM',
      image_url:
        'v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fgrupos_estudiantiles%2FESTRUCTURAS%20-%20%20UNMSM.jpeg%20(1).webp?alt=media&token=7c81b19f-451c-45ce-b3a2-8e99a3711ef3',
    },
    {
      id: 15,
      name: 'GEOPUCP',
      image_url:
        'v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fgrupos_estudiantiles%2FGEOPUCP.webp?alt=media&token=bd072ad5-efd0-41db-9b36-4ff873dc4c19',
    },
    {
      id: 16,
      name: 'GIT',
      image_url:
        'v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fgrupos_estudiantiles%2FGITSINFONDO2.webp?alt=media&token=eee76e46-e4d8-478c-aa04-e2bbeedfcad8',
    },
    {
      id: 17,
      name: 'ESVIAL - UNMSM',
      image_url:
        '0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fgrupos_estudiantiles%2FLOGO%20PLOMO%202024%20(1).webp?alt=media&token=3ef48c82-c9d1-4de3-a5a2-227f7bd9ee6c',
    },
    {
      id: 18,
      name: 'TIVIAL UPN',
      image_url:
        '0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fgrupos_estudiantiles%2FTIVIAL%20UPN.webp?alt=media&token=1cc413a1-d9d2-4214-a990-2daff73020d8',
    },
  ];
}
