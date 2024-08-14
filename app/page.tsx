import { Suspense } from 'react';
import { Posts } from '@/components/posts';
import { getPosts } from '@/lib/posts-db';

export const LatestPosts = async () => {
  const latestPosts: any = await getPosts(2);
  return <Posts posts={latestPosts} />;
};

export default async function Home() {
  return (
    <>
      <h1>Welcome back!</h1>
      <p>Here's what you might've missed.</p>
      <section id="latest-posts">
        <Suspense fallback={<p>Loading recent posts...</p>}>
          <LatestPosts />
        </Suspense>
      </section>
    </>
  );
};
