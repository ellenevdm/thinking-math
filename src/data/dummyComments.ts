import { CommentData } from "../types/comment";

export const dummyComments: CommentData[] = [
  {
    id: "1",
    date: new Date(),
    author: "User1",
    content: "This is the first comment.",
    replies: [
      {
        id: "3",
        date: new Date(),
        author: "User2",
        content: "This is a reply to the first comment.",
      },
    ],
  },
  {
    id: "2",
    date: new Date(),
    author: "User3",
    content: "This is the second comment.",
    replies: [],
  },
];
