"use client"
import { useEffect } from "react";
import { gtmPageView } from "@/lib/gtm";
import { usePathname } from 'next/navigation';
import Link from "next/link";

export default function About({params}) {
  const pathName = usePathname();
  console.log("path",pathName);
  useEffect(()=>{
    const props = {
      page_title: "about"
    }
    gtmPageView(props)
  },[pathName])
  return (
    <div>
      <h1>About in Tasahel</h1>
      <Link href="/" style={{color:"blue"}}>Back</Link>
    </div>
  );
}