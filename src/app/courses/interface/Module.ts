import { ITest } from './Test';
import { IUnit } from './Unit';

export interface IModule {
  moduleId: number;
  courseId: number;
  title: string;
  orderNumber: number;
  units: IUnit[];
  relatedWork: ITest;
}
