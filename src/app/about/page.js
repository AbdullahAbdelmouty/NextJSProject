"use client"
import { useEffect } from "react";
import { gtmPageView } from "@/lib/gtm";
import { usePathname } from 'next/navigation';
import Link from "next/link";
import { useRouter } from 'next/router';


export default function About({params}) {
  const pathName = usePathname();
  console.log("path",pathName);
  useEffect(()=>{
    const props = {
      page_title: "about"
    }
    gtmPageView(props)
  },[pathName])
  const handleReload = () => {
    router.reload();
  };
  return (
    <div>
      <h1>About in Tasahel</h1>
      <Link href="/" style={{color:"blue"}} onClick={handleReload}>Back</Link>
    </div>
  );
}