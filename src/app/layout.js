import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import { ThemeProvider } from './context/ThemeContext';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'Aneri Lohakane - Portfolio',
  description: 'Software Developer Portfolio showcasing skills and experience in web development and mobile applications',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>{/* suppressHydrationWarning is recommended for next-themes or similar client-side theme solutions */}<body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-900 text-gray-100 transition-colors duration-300`}
      >
        <ThemeProvider>
          <main> {/* Main content will be managed by page.js */}
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
