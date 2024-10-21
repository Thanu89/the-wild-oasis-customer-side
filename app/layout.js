import { Josefin_Sans } from "next/font/google";
const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

import "@/app/_styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { AuthProvider } from "./_components/AuthContext";
import Header from "./_components/Header";
import { ReservationProvider } from "./_components/ReservationContext";

export const metadata = {
  title: {
    template: "%s | The Wild Oasis",
    default: "The Wild Oasis",
  },
  description:
    "Luxurious cabin hotel, located in the heart of the Italian Dolomites, surrounded by beautiful mountians and dark forests",
};

export default function RootLayout({ children }) {
  return (
    <SessionProvider>
      <AuthProvider>
        <html lang="en">
          <body
            className={`${josefin.className} bg-primary-950 text-primary-100 min-h-screen flex flex-col antialiased `}
          >
            <Header />
            <div className="flex-1 px-8 py-12 grid ">
              <main className="max-w-7xl mx-auto w-full">
                <ReservationProvider>{children}</ReservationProvider>
              </main>
            </div>
          </body>
        </html>
      </AuthProvider>
    </SessionProvider>
  );
}
