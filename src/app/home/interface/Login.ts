import { ICourse } from '../../courses/interface/Course';
import { IProgressSession } from '../../courses/interface/ProgressSession';

export interface ILogin {
  userId: number;
  fullname: string;
  email: string;
  passwordHash: string;
  userprogresssessions?: IProgressSession[];
  usercourseaccess?: ICourse[];
}
