import { FC, useState } from "react";
import { CommentData } from "../../types/comment";
import Comment from "./Comment";

interface CommentSectionProps {
  comments: CommentData[];
}

const CommentSection: FC<CommentSectionProps> = ({ comments }) => {
  const [commentList, setCommentList] = useState(comments);
  const [newComment, setNewComment] = useState("");

  const handlePost = () => {
    if (newComment.trim()) {
      setCommentList([
        ...commentList,
        {
          id: Date.now().toString(),
          date: new Date(),
          author: "Anonymous",
          content: newComment,
          replies: [],
        },
      ]);
      setNewComment("");
    }
  };

  const handleReply = (parentId: string) => {
    const replyText = prompt("Enter your reply:");
    if (replyText?.trim()) {
      setCommentList(
        commentList.map((comment) =>
          comment.id === parentId
            ? {
                ...comment,
                replies: [
                  ...(comment.replies || []),
                  {
                    id: Date.now().toString(),
                    date: new Date(),
                    author: "Anonymous",
                    content: replyText,
                  },
                ],
              }
            : comment
        )
      );
    }
  };

  const renderComments = (comments: CommentData[], depth = 0) => {
    return (
      <div className="comment-list space-y-4">
        {comments.map((comment) => (
          <div key={comment.id}>
            <Comment comment={comment} depth={depth} onReply={handleReply} />
            {comment.replies && renderComments(comment.replies, depth + 1)}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="comment-section p-6 rounded-lg ">
      <div className="comment-input flex items-center space-x-3 mb-6">
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment..."
          className="flex-1 border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <button
          onClick={handlePost}
          className="bg-primary text-white px-5 py-2 rounded-lg text-sm hover:bg-primary-dark"
        >
          Post
        </button>
      </div>
      {renderComments(commentList)}
    </div>
  );
};

export default CommentSection;
