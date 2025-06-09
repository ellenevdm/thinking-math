import { FC, useState } from "react";

import { SubmitHandler, useForm } from "react-hook-form";
import { CommentData } from "../../types/comment";

import Comment from "./Comment";

interface CommentSectionProps {
  comments: CommentData[];
  setComments: (comments: CommentData[]) => void;
  editMode?: boolean;
}

interface CommentFormInputs {
  author: string;
  content: string;
}

const CommentSection: FC<CommentSectionProps> = ({
  comments,
  setComments,
  editMode,
}) => {
  const [commentList, setCommentList] = useState(comments);
  const [replyingTo, setReplyingTo] = useState<string | null>(null);
  const { register, handleSubmit, reset } = useForm<CommentFormInputs>();

  const onSubmit: SubmitHandler<CommentFormInputs> = ({ author, content }) => {
    if (content.trim()) {
      setComments([
        ...comments,
        {
          id: Date.now().toString(),
          date: new Date(),
          author: author || "Anonymous",
          content: content,
          replies: [],
        },
      ]);
      reset();
    }
  };

  const handleReplySubmit: SubmitHandler<CommentFormInputs> = ({
    author,
    content,
  }) => {
    if (content.trim() && replyingTo) {
      setComments(
        comments.map((comment) =>
          comment.id === replyingTo
            ? {
                ...comment,
                replies: [
                  ...(comment.replies || []),
                  {
                    id: Date.now().toString(),
                    date: new Date(),
                    author: author || "Anonymous",
                    content,
                  },
                ],
              }
            : comment
        )
      );
      setReplyingTo(null); // Close the reply form
      reset();
    }
  };

  const handleDeleteComment = (id: string, parentId?: string) => {
    if (!parentId) {
      // Delete top-level comment
      setComments(comments.filter((c) => c.id !== id));
    } else {
      // Delete reply
      setComments(
        comments.map((comment) =>
          comment.id === parentId
            ? {
                ...comment,
                replies: comment.replies?.filter((r) => r.id !== id) || [],
              }
            : comment
        )
      );
    }
  };

  const renderComments = (
    comments: CommentData[],
    depth = 0,
    parentId?: string
  ) => {
    return (
      <div className="comment-list space-y-4">
        {comments.map((comment) => (
          <div key={comment.id} className="space-y-2">
            <Comment
              comment={comment}
              depth={depth}
              onReply={(parentId) => setReplyingTo(parentId)}
              onDelete={handleDeleteComment}
              editMode={editMode}
              parentId={parentId}
            />
            {/* <button
              onClick={() => setReplyingTo(comment.id)}
              className="text-primary text-sm hover:underline"
            >
              Reply
            </button> */}
            {replyingTo === comment.id && (
              <form
                onSubmit={handleSubmit(handleReplySubmit)}
                className="reply-form flex flex-col space-y-2 mt-2"
              >
                <input
                  type="text"
                  {...register("author")}
                  placeholder="Your name (optional)"
                  className="border border-gray-300 rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <input
                  type="text"
                  {...register("content", { required: true })}
                  placeholder="Your reply..."
                  className="border border-gray-300 rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button
                  type="submit"
                  className="bg-primary text-white px-4 py-2 rounded-lg text-sm hover:bg-primary-dark"
                >
                  Post Reply
                </button>
              </form>
            )}
            {comment.replies &&
              renderComments(comment.replies, depth + 1, comment.id)}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="comment-section p-6 rounded-lg">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="comment-input flex flex-col space-y-3 mb-6"
      >
        <input
          type="text"
          {...register("author")}
          placeholder="Your name (optional)"
          className="border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <input
          type="text"
          {...register("content", { required: true })}
          placeholder="Add a comment..."
          className="border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <button
          type="submit"
          className="bg-primary text-white px-5 py-2 rounded-lg text-sm hover:bg-primary-dark"
        >
          Post
        </button>
      </form>
      {renderComments(comments)}
    </div>
  );
};

export default CommentSection;
