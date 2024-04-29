"use client"
import { useEffect, useState } from "react";
import { gtmPageView } from "@/lib/gtm";
import { usePathname } from 'next/navigation';
import Link from "next/link";
import { sendGTMEvent } from '@next/third-parties/google'

export default function About({params}) {
  const pathName = usePathname();
  console.log("path",pathName);
  useEffect(()=>{
    const props = {
      page_title: "contact"
    }
    gtmPageView(props)
  },[pathName])
  const [inputValue,setInputValue] = useState("")
  return (
    <div>
      <h1>contact</h1>
      <form>
        <input type="text" onChange={(e)=>{
            setInputValue(e.target.value)
        }}/>
        <button type="submit" onClick={(e)=>{
          e.preventDefault()
          sendGTMEvent({ event: 'buttonClicked', value:  inputValue})
        }}>send</button>
      </form>
      <Link href="/" style={{color:"blue"}}>Back</Link>
    </div>
  );
}