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
