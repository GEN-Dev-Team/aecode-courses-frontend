export interface ICollaborator {
  id: number;
  name: string;
  description: string;
  image_url: string;
  facebook_url: string;
  youtube_url: string;
  instragram_url: string;
  linkedin_url: string;
}

export const defaultCollaborator: ICollaborator = {
  id: 0,
  name: '',
  image_url: '',
  description: '',
  facebook_url: '',
  youtube_url: '',
  instragram_url: '',
  linkedin_url: '',
};
