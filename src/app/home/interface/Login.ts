import {
  ICoureAccess,
  IModuleAccess,
  IProgressRW,
  IProgressSession,
} from '../../courses/interface/CourseProgress';

export interface ILogin {
  userId: number;
  fullname: string;
  email: string;
  passwordHash: string;
  profilepicture: string;
  rol: string;
  status: string;
  birthdate: Date;
  phoneNumber: string;
  gender: string;
  country: string;
  profession: string;
  education: string;
  linkedin: string;
  userprogresssessions?: IProgressSession[];
  usercourseaccess?: ICoureAccess[];
  userprogressrw?: IProgressRW[];
  usermoduleaccess?: IModuleAccess[];
}

export interface IUserDetails {
  detailsId: number;
  userId: number;
  profilepicture: string;
}

export const defaultLogInData: ILogin = {
  userId: 0,
  fullname: '',
  email: '',
  passwordHash: '',
  profilepicture: '',
  rol: '',
  status: '',
  birthdate: new Date(),
  phoneNumber: '',
  gender: '',
  country: '',
  profession: '',
  education: '',
  linkedin: '',
  userprogresssessions: [],
  usercourseaccess: [],
  userprogressrw: [],
};
