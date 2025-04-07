export interface ICourseTag {
  courseTagId: number;
  courseTagName: string;
  isSelected?: boolean;
}

export const defaultCourseTag: ICourseTag = {
  courseTagId: 0,
  courseTagName: '',
  isSelected: false,
};
