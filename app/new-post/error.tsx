'use client';

import { FC } from 'react';

type NewPostErrorProps = {
  error: Error;
};

export const NewPostError: FC<NewPostErrorProps> = ({ error }) => {
  return (
    <>
      <h2>An error occurred!</h2>
      <p>Unfortunately, something went wrong.</p>
      <p>{error.message}</p>
    </>
  );
};
