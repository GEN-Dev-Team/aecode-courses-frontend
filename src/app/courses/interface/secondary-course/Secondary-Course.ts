import { ICoupon } from '../../../shopping-cart/interfaces/Coupon';
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
  startDate: Date;
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
  orderNumber: number;
  schedules: string[];
  benefits: string[];
  tools: ITool[];
  studyplans: IStudyPlan[];
  coupons: ICoupon[];
  freqquests: IFAQ[];
  requirements: string[];
  mode: string;
  isSelectedinCart: boolean;
}

export interface ISecondaryCourseSummary {
  seccourseId: number;
  title: string;
  programTitle: string;
  description: string;
  module: string;
  startDate: Date;
  certificateHours: string;
  priceRegular: number;
  discountPercentage: number;
  promptPaymentPrice: number;
  isOnSale: boolean;
  principalimage: string;
  orderNumber: number;
  mode: string;
  isSelectedinCart: boolean;
}

export const defaultSecondaryCourse: ISecondaryCourse = {
  seccourseId: 0,
  title: '',
  programTitle: '',
  description: '',
  module: '',
  brochureUrl: '',
  whatsappGroupLink: '',
  startDate: new Date(),
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
  orderNumber: -1,
  schedules: [],
  benefits: [],
  tools: [],
  studyplans: [],
  coupons: [],
  freqquests: [],
  requirements: [],
  mode: '',
  isSelectedinCart: false,
};

export const defaultSecondaryCourseSummary: ISecondaryCourseSummary = {
  seccourseId: 0,
  title: '',
  programTitle: '',
  description: '',
  module: '',
  startDate: new Date(),
  certificateHours: '',
  priceRegular: 0,
  discountPercentage: 0,
  promptPaymentPrice: 0,
  isOnSale: false,
  principalimage: '',
  orderNumber: -1,
  mode: '',
  isSelectedinCart: false,
};
