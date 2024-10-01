import { IModule } from './Module';

export interface ICourse {
  courseId: number;
  title: string;
  description: string;
  instructor: string;
  image: string;
  modules: IModule[];
}
