import { IClass } from './Class';
import { ITest } from './Test';

export interface IModule {
  moduleId: number;
  courseId: number;
  title: string;
  description: string;
  orderNumber: number;
  classes: IClass[];
  test: ITest;
}
