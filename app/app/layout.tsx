import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import ReactQueryProvider from "./components/QueryClientProvider";
import { inter } from "./font";
import PostArticleModal from "./components/modal/PostArticleModal";
import NotSignIn from "./components/modal/NotSignIn";

const metadata: Metadata = {
  title: "Trade Bay",
  description: "The truly free market place",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <ReactQueryProvider>
          <Toaster />
          <PostArticleModal/>
          <NotSignIn/>
          {children}
        </ReactQueryProvider>
      </body>
    </html>
  );
}
