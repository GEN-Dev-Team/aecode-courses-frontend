import { ICourse } from '../../courses/interface/Course';
import {
  IProgressRW,
  IProgressSession,
} from '../../courses/interface/CourseProgress';

export interface ILogin {
  userId: number;
  fullname: string;
  email: string;
  rol: string;
  status: string;
  passwordHash: string;
  userprogresssessions?: IProgressSession[];
  usercourseaccess?: ICourse[];
  userprogressrw?: IProgressRW[];
}
