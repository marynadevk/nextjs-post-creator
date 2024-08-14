import Posts from '@/components/posts';
import { getPosts } from '@/lib/posts';

export const FeedPage = async () => {
  const posts = await getPosts();
  return (
    <>
      <h1>All posts by all users</h1>
      <Posts posts={posts} />
    </>
  );
};
