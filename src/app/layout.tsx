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
      <head>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
          defer
        ></script>
      </head>

      <body className='text-white'>
        <Navbar />
        <main className="container mt-5">{children}</main>
      </body>
    </html>
  );
}
