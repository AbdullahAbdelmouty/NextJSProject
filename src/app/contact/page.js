"use client"
import { useEffect, useState } from "react";
import { gtmPageView } from "@/lib/gtm";
import { usePathname } from 'next/navigation';
import Link from "next/link";
import { sendGTMEvent } from '@next/third-parties/google'
import { useRouter } from 'next/router';

export default function About({params}) {
  const pathName = usePathname();
  console.log("path",pathName);
  useEffect(()=>{
    const router = useRouter();
    router.reload()
  },[pathName])
  const [inputValue,setInputValue] = useState("")
  return (
    <div>
      <h1>contact</h1>
      <form>
        <input type="text"/>
        <button type="submit">send</button>
      </form>
      <Link href="/" style={{color:"blue"}}>Back</Link>
    </div>
  );
}