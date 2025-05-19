export type CommentData = {
  id: string;
  date: Date;
  author: string;
  content: string;
  replies?: CommentData[];
};
