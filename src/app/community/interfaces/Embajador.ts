export interface IEmbajador {
  id: number;
  name: string;
  image_url: string;
  tag_list: string[];
}

export const defaultCollaborator: IEmbajador = {
  id: 0,
  name: '',
  image_url: '',
  tag_list: [],
};
