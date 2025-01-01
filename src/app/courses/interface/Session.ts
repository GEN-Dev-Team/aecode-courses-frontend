import { ISessionTest } from './Test';

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
  sessiontests: ISessionTest[];
}

export const defaultSession: ISession = {
  sessionId: 0,
  unitId: 0,
  title: '',
  videoUrl: '',
  description: '',
  resourceText: '',
  resourceDocument: '',
  orderNumber: 0,
  taskName: '',
  taskUrl: '',
  htmlContent: '',
  sessiontests: [],
};
