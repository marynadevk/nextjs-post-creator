import { FC } from 'react';
import { formatDate } from '@/lib/date-formatter';
import { LikeButton } from './like-icon';
import { IPost } from '@/interfaces/IPost';

type PostProps = {
  post: IPost;
};

export const Post: FC<PostProps> = ({ post }) => {
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
            <LikeButton />
          </div>
        </header>
        <p>{post.content}</p>
      </div>
    </article>
  );
};
