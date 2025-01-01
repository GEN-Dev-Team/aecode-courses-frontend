export interface ICoureAccess {
  accessId: number;
  userId: number;
  courseId: number;
}

export interface IProgressSession {
  progressId: number;
  userId: number;
  sessionId: number;
  completed: boolean;
}

export interface IProgressRW {
  progressId: number;
  userId: number;
  workId: number;
  completed: boolean;
}

export interface IModuleAccess {
  accessId: number;
  userId: number;
  moduleId: number;
}
