import { IModule } from './Module';

export interface ICourse {
  courseId: number;
  title: string;
  videoUrl: string;
  modules: IModule[];
}
