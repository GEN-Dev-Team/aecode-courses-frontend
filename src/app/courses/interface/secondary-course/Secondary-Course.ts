import { IFAQ } from './FAQ';
import { IStudyPlan } from './StudyPlan';
import { ITool } from './Tool';

export interface ISecondaryCourse {
  seccourseId: Number;
  title: String;
  coverimage: String;
  principalimage: String;
  description: String;
  price: Number;
  toolIds: Number[];
  freqquestIds: Number[];
  studyplans: IStudyPlan[];
  tools: ITool[];
  freqquests: IFAQ[];
  level: String;
  mode: String;
  benefits: String[];
  schedule: String;
  achievement: String;
  exterallink: String;
  videoUrl: String;
}
