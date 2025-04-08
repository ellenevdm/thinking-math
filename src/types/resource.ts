import { Activity } from "./activity";
import { CommentData } from "./comment";

export type Resource = {
  id: string;
  title: string;
  category: string;
  categoryId: string;
  description: string;
  grade: string;
  gradeId: string;
  phase?: string;
  phaseId: string;
  date: Date;
  wakeletcode?: string;
  activities?: Activity[];
  comments?: CommentData[];
};
