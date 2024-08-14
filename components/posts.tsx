import { FC } from 'react';
import { IPost } from '@/interfaces/IPost';
import { Post } from './post';

type PostsProps = {
  posts: IPost[];
};

export const Posts: FC<PostsProps> = ({ posts }) => {
  if (!posts || posts.length === 0) {
    return <p>There are no posts yet. Maybe start sharing some?</p>;
  }

  return (
    <ul className="posts">
      {posts.map((post) => (
        <li key={post.id}>
          <Post post={post} />
        </li>
      ))}
    </ul>
  );
};
