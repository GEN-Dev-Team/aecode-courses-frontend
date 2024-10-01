import { IAnswer } from './Answer';

export interface IQuestion {
  questionId: number;
  testId: number;
  questionText: string;
  answers: IAnswer[];
}
