import { IModule } from './Module';

export interface ICourse {
  courseId: number;
  title: string;
  videoUrl: string;
  modules: IModule[];
}

export const defaultCourse: ICourse = {
  courseId: 0,
  title: '',
  videoUrl: '',
  modules: [],
};
