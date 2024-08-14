'use client';

import { FC } from 'react';
import { useFormState } from 'react-dom';
import { FormSubmit } from '@/components/form-submit';

type FormState = {
  errors?: string[];
};

type PostFormProps = {
  action: (
    state: FormState,
    formData: FormData
  ) => FormState | Promise<FormState>;
};

export const PostForm: FC<PostFormProps> = ({ action }) => {
  const [state, formAction] = useFormState(action, {});

  return (
    <>
      <h1>Create a new post</h1>
      <form action={formAction}>
        <p className="form-control">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title" />
        </p>
        <p className="form-control">
          <label htmlFor="image">Image</label>
          <input
            type="file"
            accept="image/png, image/jpeg"
            id="image"
            name="image"
          />
        </p>
        <p className="form-control">
          <label htmlFor="content">Content</label>
          <textarea id="content" name="content" rows="5" />
        </p>
        <p className="form-actions">
          <FormSubmit />
        </p>
        {state.errors && (
          <ul className="form-errors">
            {state.errors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        )}
      </form>
    </>
  );
};
