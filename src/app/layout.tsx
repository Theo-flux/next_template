import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const satoshi = localFont({
  src: [
    {
      path: './WEB/Satoshi-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './WEB/Satoshi-Medium.woff2',
      weight: '500',
      style: 'medium',
    },
    {
      path: './WEB/Satoshi-Bold.woff2',
      weight: '600',
      style: 'bold',
    },
  ],
  variable: '--font-satoshi',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Hexpress',
  description: 'Haulage & Logistics company.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${satoshi.variable} antialiased`}>{children}</body>
    </html>
  );
}
