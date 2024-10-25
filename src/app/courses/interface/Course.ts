import { IModule } from './Module';

export interface ICourse {
  courseId: number;
  title: string;
  modules: IModule[];
}
