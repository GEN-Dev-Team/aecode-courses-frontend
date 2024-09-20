import { IQuestion } from './Question';

export interface ITest {
  testId: number;
  moduleId: number;
  title: string;
  description: string;
  totalQuestions: number;
  passingScore: number;
  questions: IQuestion[];
}
