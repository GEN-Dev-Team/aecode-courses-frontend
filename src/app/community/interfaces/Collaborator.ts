export interface ICollaborator {
  id: number;
  name: string;
  image_url: string;
  description: string;
  group: string;
}

export const defaultCollaborator: ICollaborator = {
  id: 1,
  name: 'YOHARA MEJIA ALBARRACIN',
  image_url:
    'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fembajadores%2FYOHARA_DANIEL_MEJIA_ALBARRACIN.webp?alt=media&token=e78a2dea-8cb4-4aa7-8f97-15e3691de99e',
  group: 'ACI UPC',
  description:
    'Me uní a AECODE por la oportunidad de transformar la industria AEC, acceder a herramientas innovadoras y aprender sobre IA y Machine Learning. Además, conectar con profesionales comprometidos con la modernización del sector fue clave para mi decisión de ser embajador.',
};
