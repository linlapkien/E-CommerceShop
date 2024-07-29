import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import NavBar from './components/nav/NavBar';
import Footer from './components/footer/Footer';
import CartProvider from '@/providers/CartProvider';
import { Toaster } from 'react-hot-toast';

// Use poppins font
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: 'E-Shop',
  description: 'Ecommerce app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} text-slate-700`}>
        {/* React Hot Toast use to annouce success added product to cart */}
        <Toaster
          toastOptions={{
            style: {
              background: 'rgb(51 65 85)',
              color: '#FFFFFF',
            },
          }}
        />

        {/* Cart Context, wrap children with this provider */}
        <CartProvider>
          <div className="flex flex-col min-h-screen">
            <NavBar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
