import { ITest } from './Test';
import { IUnit } from './Unit';

export interface IModule {
  moduleId: number;
  courseId: number;
  title: string;
  videoUrl: string;
  hours: number;
  percentage: number;
  price: number;
  orderNumber: number;
  units: IUnit[];
  relatedworks: ITest;
}

export const defaultModule: IModule = {
  moduleId: 0,
  courseId: 0,
  title: '',
  videoUrl: '',
  hours: 0,
  percentage: 0,
  price: 0,
  orderNumber: 0,
  units: [],
  relatedworks: {} as ITest,
};
