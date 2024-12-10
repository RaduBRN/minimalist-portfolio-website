import Header from "@/components/Header";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Minimalist Portfolio",
  description: "Minimalist Portfolio project form Frontendmentor",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="body1">
        <Header />
        <main className="max-w-[311px] md:max-w-[689px] lg:max-w-[1110px] mx-auto">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
