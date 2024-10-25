import { ISession } from './Session';

export interface IUnit {
  unitId: number;
  moduleId: number;
  title: string;
  videoUrl: string;
  orderNumber: number;
  sessions: ISession[];
}
