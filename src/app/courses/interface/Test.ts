import { IAnswer } from './Answer';

export interface ITest {
  workId: number;
  moduleId: number;
  formUrl: string;
  title: string;
}

export interface ISessionTest {
  testId: number;
  sessionId: number;
  questionText: string;
  sessionanswers: IAnswer[];
}
