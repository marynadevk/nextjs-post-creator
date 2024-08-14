import { Header } from '@/components/header';
import './globals.css';
import { FC, ReactNode } from 'react';

export const metadata = {
  title: 'NextPosts',
  description: 'Browse and share amazing posts.',
};

type RootLayoutProps = {
  children: ReactNode;
};

export const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
};
