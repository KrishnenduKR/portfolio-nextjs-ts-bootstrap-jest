import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import Navbar from '../components/Navbar';

export const metadata = {
  title: 'My Portfolio',
  description: 'Portfolio of a Full Stack Developer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className='text-white'>
        <Navbar />
        <main className="container mt-5">{children}</main>
      </body>
    </html>
  );
}
