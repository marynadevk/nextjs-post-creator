'use server';

import { redirect } from 'next/navigation';
import { storePost } from '@/lib/posts-db';

export async function createPost(prevState: any, formData: any) {
  const title: string = formData.get('title');
  const image: Set<unknown> = formData.get('image');
  const content: string = formData.get('content');

  let errors = [];

  if (!title || title.trim().length === 0) {
    errors.push('Title is required.');
  }

  if (!content || content.trim().length === 0) {
    errors.push('Content is required.');
  }

  if (!image || image.size === 0) {
    errors.push('Image is required.');
  }

  if (errors.length > 0) {
    return { errors };
  }

  await storePost({
    imageUrl: '',
    title,
    content,
    userId: '1',
  });

  redirect('/feed');
}
