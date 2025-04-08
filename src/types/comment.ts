export type CommentData = {
  id: string;
  date: Date;
  author: string;
  content: string;
  replies?: {
    id: string;
    date: Date;
    author: string;
    content: string;
  }[];
};
