"use client";
import React, { useState } from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import emailjs from 'emailjs-com';

const EmailSection = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();

    const serverId = 'service_aar4kv5'
    const templateId = 'template_xjczf8h'
    const publicKey = 'OlvXpRhzN0mp_r2d0'

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Wendy Kong",
      message: message
    }

    emailjs.send(serverId, templateId, templateParams, publicKey)
    .then((response) => {
      console.log("Email sent successfully", response)
      setName('')
      setEmail('')
      setMessage('')
    })
    .catch((error) => {
      console.error('Error sending email:', error)
    })
  }
  
  return (
<section
  id="contact"
  className="emailForm grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
>
  <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
  <div className="z-10">
    <h5 className="text-xl font-bold text-white my-2">
      Let`s Connect
    </h5>
    <p className="text-[#ADB7BE] mb-4 max-w-md">
      {" "}
      I&apos;m currently looking for new opportunities, my inbox is always
      open. Whether you have a question or just want to say hi, Ill
      try my best to get back to you!
    </p>
    <div className="socials grid grid-cols-1 gap-4">
      <div className="flex items-center space-x-2">
        <PhoneIcon className="text-primary-500 h-7 w-7 animate-pulse"/>
        <p className="text-lg text-[#ADB7BE]">778-952-7522</p>
      </div>
      <div className="flex items-center space-x-2">
        <MapPinIcon className="text-primary-500 h-7 w-7 animate-pulse"/>
        <p className="text-lg text-[#ADB7BE]">Coquitlam</p>
      </div>
      <div className="flex items-center space-x-2">
        <EnvelopeIcon className="text-primary-500 h-7 w-7 animate-pulse"/>
        <p className="text-lg text-[#ADB7BE]">eoeomj97@gmail.com</p>
      </div>
    </div>
  </div>
  <div>
   
      <form onSubmit={handleSubmit} className="emailForm flex flex-col">
        <div className="mb-6">
          <label
            htmlFor="email"
            className="text-white block mb-2 text-sm font-medium"
          >
            Your email
          </label>
          <input
            name="email"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            placeholder="example@gmail.com"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="subject"
            className="text-white block text-sm mb-2 font-medium"
          >
            Name
          </label>
          <input
            name="name"
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            placeholder="John Doe"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="message"
            className="text-white block text-sm mb-2 font-medium"
          >
            Message
          </label>
          <textarea
            name="message"
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            placeholder="Let's talk about..."
          />
        </div>
        <button
          type="submit"
          className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
        >
          Send Message
        </button>
      </form>
    
  </div>
</section>
)
}

export default EmailSection;