
import { NextAuthProvider } from "./Providers";
import "./globals.css"
import Auth from "@/components/Auth";

export default function Home() {
  return (  
   <NextAuthProvider>
   <Auth/>
   </NextAuthProvider>
   
  );
}
