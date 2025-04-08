import { FC } from "react";
import { CommentData } from "../../types/comment";

interface CommentProps {
  comment: CommentData;
  depth: number;
  onReply: (parentId: string) => void;
}

const Comment: FC<CommentProps> = ({ comment, depth, onReply }) => {
  return (
    <div
      className={`comment-item  p-3 flex justify-between items-center ${
        depth > 0 ? "ml-10 border-gray-200 pl-4" : ""
      }`}
    >
      <div className="flex items-center gap-2 mb-2">
        <div className="p-4 bg-gray-800 rounded-full w-5 h-5"></div>
        <p className="text-sm font-medium text-gray-900">{comment.author}</p>
        <p className="text-sm text-gray-800 mt-1">{comment.content}</p>
      </div>
      <div className="flex gap-2 items-center">
        {" "}
        {depth === 0 && (
          <button
            className="reply-button text-primary text-sm underline mt-2 hover:underline"
            onClick={() => onReply(comment.id)}
          >
            Reply
          </button>
        )}
      </div>
    </div>
  );
};

export default Comment;
