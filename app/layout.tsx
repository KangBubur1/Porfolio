import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import ActiveSectionContextProvider from "@/context/ActiveSection";
import { Toaster } from "react-hot-toast";


const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});



export const metadata: Metadata = {
  title: "Portofolio",
  description: "This is my Portofolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className='!scroll-smooth'>
      <body className={`
            ${poppins.className}
            bg-black
            
            `
          }
            suppressHydrationWarning={true}>
          <ActiveSectionContextProvider>
            {children}
            <Toaster position='top-right'/>
          </ActiveSectionContextProvider>        
      </body>
    </html>
  );
}


