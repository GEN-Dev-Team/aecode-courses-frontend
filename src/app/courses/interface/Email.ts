export interface IEmail {
  toEmail: string;
  subject: string;
  body: string;
}

export const defaultEmail: IEmail = {
  toEmail: '',
  subject: '',
  body: '',
};
