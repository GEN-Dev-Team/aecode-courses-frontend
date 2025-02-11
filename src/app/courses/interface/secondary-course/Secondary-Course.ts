import { ICoupon } from '../../../payment/interfaces/Coupon';
import { IFAQ } from './FAQ';
import { IStudyPlan } from './StudyPlan';
import { ITool } from './Tool';

export interface ISecondaryCourse {
  seccourseId: number;
  title: string;
  programTitle: string;
  description: string;
  module: string;
  brochureUrl: string;
  whatsappGroupLink: string;
  startDate: string;
  certificateHours: string;
  priceRegular: number;
  discountPercentage: number;
  promptPaymentPrice: number;
  isOnSale: boolean;
  achievement: string;
  videoUrl: string;
  principalimage: string;
  totalHours: number;
  numberOfSessions: number;
  numberOfUnits: number;
  schedules: string[];
  benefits: string[];
  tools: ITool[];
  studyplans: IStudyPlan[];
  coupons: ICoupon[];
  freqquests: IFAQ[];
  requirements: string[];
  mode: string;
}

export const defaultSecondaryCourse: ISecondaryCourse = {
  seccourseId: 0,
  title: '',
  programTitle: '',
  description: '',
  module: '',
  brochureUrl: '',
  whatsappGroupLink: '',
  startDate: '',
  certificateHours: '',
  priceRegular: 0,
  discountPercentage: 0,
  promptPaymentPrice: 0,
  isOnSale: false,
  achievement: '',
  videoUrl: '',
  principalimage: '',
  totalHours: 0,
  numberOfSessions: 0,
  numberOfUnits: 0,
  schedules: [],
  benefits: [],
  tools: [],
  studyplans: [],
  coupons: [],
  freqquests: [],
  requirements: [],
  mode: '',
};
