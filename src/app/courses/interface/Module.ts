import { ITest } from './Test';
import { IUnit } from './Unit';

export interface IModule {
  moduleId: number;
  courseId: number;
  title: string;
  videoUrl: string;
  orderNumber: number;
  units: IUnit[];
  relatedworks: ITest;
}
