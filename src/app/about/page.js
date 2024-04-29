"use client"
import Template from "@/app/Template";
import { useEffect } from "react";
import { gtmPageView } from "@/lib/gtm";
import { usePathname } from 'next/navigation';
export default function About({params}) {
  const pathName = usePathname()
  console.log(pathName);
  useEffect(()=>{
    const props = {
      page_title: "about"
    }
  },[pathName])
  return (
    <div>
      <h1>About in Tasahel</h1>
    </div>
  );
}