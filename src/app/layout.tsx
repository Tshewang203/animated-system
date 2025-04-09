import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'College Website',
  description: 'A sample college site built with Next.js',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/department">Department</Link>
          <Link href="/staff">Staff</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}
