import { IQuestion } from './Question';

export interface ISession {
  sessionId: number;
  unitId: number;
  title: string;
  videoUrl: string;
  description: string;
  resourceText: string;
  resourceDocument: string;
  orderNumber: number;
  taskName: string;
  taskUrl: string;
  htmlContent: string;
  classquestions: IQuestion[];
}
