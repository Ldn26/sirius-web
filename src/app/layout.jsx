import localFont from "next/font/local";
import "./globals.css";
import { ClerkLoaded, ClerkLoading, ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton, UserProfile } from '@clerk/nextjs'
import { redirect } from "next/navigation";
import Loader from "../components/Loader"
// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className=" ">
        <ClerkLoading>
          <div className="flex items-center justify-center h-screen w-full">
          <Loader/>
          </div>
        </ClerkLoading>
        <ClerkLoaded>
{/* <SignedIn>

    {redirect("./wlcm")}
</SignedIn>
<SignedOut>
  
  <h1>sign out </h1>
</SignedOut> */}
      {/* {children} */}
     {/* {redirect("./sign-in")} */}
        </ClerkLoaded>
  
    {children}
      
      </body>
    </html>
  </ClerkProvider>
  );
}
