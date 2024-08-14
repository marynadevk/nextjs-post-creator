import { FC } from 'react';
import { formatDate } from '@/lib/date-formatter';
import { LikeButton } from './like-icon';
import { IPost } from '@/interfaces/IPost';

type PostProps = {
  post: IPost;
  action: (postId: string) => void;
};

export const Post: FC<PostProps> = ({ post, action }) => {
  return (
    <article className="post">
      <div className="post-image">
        <img src={post.image} alt={post.title} />
      </div>
      <div className="post-content">
        <header>
          <div>
            <h2>{post.title}</h2>
            <p>
              Shared by {post.userFirstName} on{' '}
              <time dateTime={post.createdAt}>
                {formatDate(post.createdAt)}
              </time>
            </p>
          </div>
          <div>
            <form
              action={action.bind(null, post.id)}
              className={post.isLiked ? 'liked' : ''}
            >
              <LikeButton />
            </form>
          </div>
        </header>
        <p>{post.content}</p>
      </div>
    </article>
  );
};
