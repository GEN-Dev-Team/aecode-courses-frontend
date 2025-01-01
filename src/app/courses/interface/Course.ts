import { IModule } from './Module';
import { ITool } from './secondary-course/Tool';

export interface ICourse {
  courseId: number;
  title: string;
  subtitle: string;
  coverimage: string;
  moduleimage: string;
  gift: string;
  videoUrl: string;
  percentage: number;
  price: number;
  hours: number;
  modules: IModule[];
  tools: ITool[];
  urlkit: string;
}

export const defaultCourse: ICourse = {
  courseId: 0,
  title: '',
  subtitle: '',
  coverimage: '',
  moduleimage: '',
  gift: '',
  videoUrl: '',
  percentage: 0,
  price: 0,
  hours: 0,
  modules: [],
  tools: [],
  urlkit: '',
};
