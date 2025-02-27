import { IModule } from './Module';
import { ITool } from './secondary-course/Tool';

export interface ICourse {
  courseId: number;
  title: string;
  subtitle: string;
  description: string;
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
  courseOrder: number;
}

export const defaultCourse: ICourse = {
  courseId: 0,
  title: '',
  subtitle: '',
  description: '',
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
  courseOrder: 0,
};
