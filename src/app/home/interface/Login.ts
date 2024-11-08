import { ICourse } from '../../courses/interface/Course';
import { IProgressSession } from '../../courses/interface/ProgressSession';

export interface ILogin {
  userId: number;
  fullname: string;
  email: string;
  rol: string;
  passwordHash: string;
  userprogresssessions?: IProgressSession[];
  usercourseaccess?: ICourse[];
}
