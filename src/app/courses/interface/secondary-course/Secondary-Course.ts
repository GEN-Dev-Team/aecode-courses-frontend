import { IFAQ } from './FAQ';
import { IStudyPlan } from './StudyPlan';
import { ITool } from './Tool';

export interface ISecondaryCourse {
  seccourseId: number;
  title: string;
  principalimage: string;
  description: string;
  priceAcademy: number;
  priceRegular: number;
  toolIds: number[];
  freqquestIds: number[];
  studyplans: IStudyPlan[];
  tools: ITool[];
  freqquests: IFAQ[];
  level: string;
  mode: string;
  hours: number;
  benefits: string[];
  schedule: string;
  achievement: string;
  exterallink: string;
  videoUrl: string;
}

export const defaultSecondaryCourse: ISecondaryCourse = {
  seccourseId: 0,
  title: '',
  principalimage: '',
  description: '',
  priceAcademy: 0,
  priceRegular: 0,
  toolIds: [],
  freqquestIds: [],
  studyplans: [],
  tools: [],
  freqquests: [],
  level: '',
  mode: '',
  hours: 0,
  benefits: [],
  schedule: '',
  achievement: '',
  exterallink: '',
  videoUrl: '',
};
