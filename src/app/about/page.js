"use client"
import { useEffect } from "react";
import { gtmPageView } from "@/lib/gtm";
// import { usePathname } from 'next/navigation';
export default function About({params}) {
  console.log("path");
  useEffect(()=>{
    const props = {
      page_title: "about"
    }
  },[])
  return (
    <div>
      <h1>About in Tasahel</h1>
    </div>
  );
}