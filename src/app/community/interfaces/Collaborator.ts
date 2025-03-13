export interface ICollaborator {
  id: number;
  name: string;
  image_url: string;
  description: string;
  group: string;
}

export const defaultCollaborator: ICollaborator = {
  id: 0,
  name: '',
  image_url: '',
  description: '',
  group: '',
};
