import ContactForm from "./components/contactForm";
import React from 'react'
import { useState } from "react"
import Link from 'next/link'
import Head from 'next/head'
import Script from 'next/script'
export default function Contact() {
  return (
    <div>
      
        <h1>FILL IN THE FIELDS</h1>
       <ContactForm/>
    </div>
    
  )
}
