import { IAnswer } from './Answer';

export interface IQuestion {
  testId: number;
  sessionId: number;
  questionText: string;
  sessionanswers: IAnswer[];
}
