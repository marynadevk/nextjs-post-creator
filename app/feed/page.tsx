import { Posts } from '@/components/posts';
import { getPosts } from '@/lib/posts-db';

const FeedPage = async () => {
  const posts: any = await getPosts();
  return (
    <>
      <h1>All posts by all users</h1>
      <Posts posts={posts} />
    </>
  );
};

export default FeedPage;