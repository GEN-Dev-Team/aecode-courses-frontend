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
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fgrupos_estudiantiles%2FACI%20PUCP%20(1).webp?alt=media&token=31b3245c-ecb7-4d65-8103-3d8f31e2aa9d',
    },
    {
      id: 2,
      name: 'ACI UTEC',
      image_url:
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fgrupos_estudiantiles%2FACI%20UTEC_.webp?alt=media&token=c4e96025-1d52-4949-9f2d-495a3131b48b',
    },
    {
      id: 3,
      name: 'ADEIC PUCP',
      image_url:
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fgrupos_estudiantiles%2FADEIC%20PUCP_.webp?alt=media&token=7c53e400-a8f7-41fb-b1e2-11a7d8ec9ccd',
    },
    {
      id: 4,
      name: 'ALEIC',
      image_url:
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fgrupos_estudiantiles%2FALEIC_.webp?alt=media&token=a7eecfc6-d5ab-4c4c-a1b5-2d196faed2e9',
    },
    {
      id: 5,
      name: 'ANEIC ARGENTINA',
      image_url:
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fgrupos_estudiantiles%2FANEIC%20ARGENTINA%20(1).webp?alt=media&token=5d7e5aa4-1220-4852-99b1-6d4e9456c04d',
    },
    {
      id: 6,
      name: 'ANEIC EL SALVADOR',
      image_url:
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fgrupos_estudiantiles%2FANEIC%20EL%20SALVADOR%20(1).webp?alt=media&token=9f60fe12-d3c7-422f-a5ce-e6b10eb2335e',
    },
    {
      id: 7,
      name: 'ANEIC UNSA',
      image_url:
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fgrupos_estudiantiles%2FANEIC%20UNSA.webp?alt=media&token=f7d4bf6d-1be3-4f1c-901b-39a395b54950',
    },
    {
      id: 8,
      name: 'ASCEIC BOLIVIA',
      image_url:
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fgrupos_estudiantiles%2FASCEIC%20BOLIVIA_.webp?alt=media&token=12cc0ca7-d762-4239-b269-2047d73a4a8d',
    },
    {
      id: 9,
      name: 'CE LEAN UP',
      image_url:
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fgrupos_estudiantiles%2FCE%20LEAN%20UPC_.webp?alt=media&token=cbfb2d2a-b3d1-430b-b92a-5064a4edd94f',
    },
    {
      id: 10,
      name: 'CIVIAL UTEC',
      image_url:
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fgrupos_estudiantiles%2FCIVIAL%20UTEC%20(1).webp?alt=media&token=e7426d97-70a5-410b-927d-d024d73800db',
    },
    {
      id: 11,
      name: 'CONYGER',
      image_url:
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fgrupos_estudiantiles%2FCONYGER_.webp?alt=media&token=70f06a84-4708-4979-a868-766be559e408',
    },
    {
      id: 12,
      name: 'EERI PUCP',
      image_url:
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fgrupos_estudiantiles%2FEERI%20PUCP_.webp?alt=media&token=78b40c22-9410-4d6a-8956-99ea4fdedd68',
    },
    {
      id: 13,
      name: 'EERI UNSA',
      image_url:
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fgrupos_estudiantiles%2F_EERI%20UNSA.webp?alt=media&token=863a8495-8af5-436e-8260-76bb45a0e3ad',
    },
    {
      id: 14,
      name: 'ESTRUCTURAS - UNMSM',
      image_url:
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fgrupos_estudiantiles%2FESTRUCTURAS_.webp?alt=media&token=249600af-51f1-4cac-9189-60f67f3c1905',
    },
    {
      id: 15,
      name: 'GEOPUCP',
      image_url:
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fgrupos_estudiantiles%2FGEOPUCP%20(1).webp?alt=media&token=76cffff2-50ce-4350-aeaa-3848fc298afb',
    },
    {
      id: 16,
      name: 'GIT',
      image_url:
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fgrupos_estudiantiles%2FGIT.webp?alt=media&token=0df4c2ff-5514-45f0-8d44-1b91abea3e74',
    },
    {
      id: 17,
      name: 'ESVIAL - UNMSM',
      image_url:
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fgrupos_estudiantiles%2FESVIAL.webp?alt=media&token=34a6ce35-48fe-466d-b4b4-f6335a9422ff',
    },
    {
      id: 18,
      name: 'TIVIAL UPN',
      image_url:
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fgrupos_estudiantiles%2FTRIVIAL_.webp?alt=media&token=7888469f-be96-4e37-9695-d3468ea31950',
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
