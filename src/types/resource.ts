import { Activity } from "./activity";
import { CommentData } from "./comment";

export type Resource = {
  id: string;
  title: string;
  categoryId: string;
  category: string;
  description: string;
  grade: string;
  gradeId: string;
  phase?: string;
  phaseId: string;
  wakeletcode?: string;
  date: Date;
  activities?: Activity[];
};
