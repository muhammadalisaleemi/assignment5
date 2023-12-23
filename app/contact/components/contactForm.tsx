"use client"
import { useState } from "react"
import * as yup from "yup"
import Button from "./components/button/button"
import DisplayContact from "./displayContact"
import { contactTypes, onChangeEventType } from "@/types/commonTypes"
import 'app/style.css'
export default function ContactForm() {
  const [contactInfo, setContactInfo] = useState<contactTypes>({
    firstName: "",
    lastName: "",
    subject: "",
    country: "",
    address: "",
    message: "",
    gender: "",
    fatherName: "",
    email: "",
    phone: 0,
  })

  const [errors, setError ] = useState<string[]>([])

  const contactInfoSchema = yup.object().shape({
    firstName: yup.string().required().min(2).max(50),
    lastName: yup.string().required().min(2).max(50),
    subject: yup.string().required().min(2).max(100),
    country: yup.string().required().min(2).max(50),
    address: yup.string().required().min(5).max(100),
    message: yup.string().required().min(5).max(500),
    gender: yup.string().required().min(4).max(6),
    fatherName: yup.string().required().min(2).max(50),
    email: yup.string().email().required(),
    phone: yup.number().required(),
  })

  const [contactList, setContactList] = useState<contactTypes[]>([])

  const onChangeHandler = (e: onChangeEventType) => {
    let userDetails = {
      ...contactInfo,
      [e.target.name]: e.target.value
    }
    setContactInfo(userDetails)
  }

  const onClickHandler = async () => {
     try {
      const result = await contactInfoSchema.validate(contactInfo)
      console.log(result);
      
      if (!result) {
        return 
      }
      
      let newContactList:contactTypes[] = [...contactList, contactInfo]
      setContactList(newContactList)
  
      setError([])
      setContactInfo({
        firstName: "",
        lastName: "",
        subject: "",
        country: "",
        address: "",
        message: "",
        gender: "",
        fatherName: "",
        email: "",
        phone: 0,
      })
     } catch (err) {
      setError(err.errors)
      console.log("error",err.errors);
     }
  }

  return (
    <>
      {/* First Name field */}
      <div className="mb-4">
        <label htmlFor="firstName" className="block text-gray-700 text-sm font-bold mb-2">
          First Name
        </label>
        <input
          value={contactInfo.firstName}
          onChange={onChangeHandler}
          type="text"
          id="firstName"
          name="firstName"
          className="w-full px-3 py-2 border rounded-md"
          required
        />
      </div>
  
      {/* Last Name field */}
      <div className="mb-4">
        <label htmlFor="lastName" className="block text-gray-700 text-sm font-bold mb-2">
          Last Name
        </label>
        <input
          value={contactInfo.lastName}
          onChange={onChangeHandler}
          type="text"
          id="lastName"
          name="lastName"
          className="w-full px-3 py-2 border rounded-md"
          required
        />
      </div>
  
      {/* Subject field */}
      <div className="mb-4">
        <label htmlFor="subject" className="block text-gray-700 text-sm font-bold mb-2">
          Subject
        </label>
        <input
          value={contactInfo.subject}
          onChange={onChangeHandler}
          type="text"
          id="subject"
          name="subject"
          className="w-full px-3 py-2 border rounded-md"
          required
        />
      </div>
  
      {/* Country field */}
      <div className="mb-4">
        <label htmlFor="country" className="block text-gray-700 text-sm font-bold mb-2">
          Country
        </label>
        <input
          value={contactInfo.country}
          onChange={onChangeHandler}
          type="text"
          id="country"
          name="country"
          className="w-full px-3 py-2 border rounded-md"
          required
        />
      </div>
  
      {/* Address field */}
      <div className="mb-4">
        <label htmlFor="address" className="block text-gray-700 text-sm font-bold mb-2">
          Address
        </label>
        <input
          value={contactInfo.address}
          onChange={onChangeHandler}
          type="text"
          id="address"
          name="address"
          className="w-full px-3 py-2 border rounded-md"
          required
        />
      </div>
  
      {/* Message field */}
      <div className="mb-4">
        <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
          Message
        </label>
        <textarea
          value={contactInfo.message}
          onChange={onChangeHandler}
          id="message"
          name="message"
          className="w-full px-3 py-2 border rounded-md"
          required
        />
      </div>
  
      {/* Gender field */}
      <div className="mb-4">
        <label htmlFor="gender" className="block text-gray-700 text-sm font-bold mb-2">
          Gender
        </label>
        <input
          value={contactInfo.gender}
          onChange={onChangeHandler}
          type="text"
          id="gender"
          name="gender"
          className="w-full px-3 py-2 border rounded-md"
          required
        />
      </div>
  
      {/* Father's Name field */}
      <div className="mb-4">
        <label htmlFor="fatherName" className="block text-gray-700 text-sm font-bold mb-2">
          Father's Name
        </label>
        <input
          value={contactInfo.fatherName}
          onChange={onChangeHandler}
          type="text"
          id="fatherName"
          name="fatherName"
          className="w-full px-3 py-2 border rounded-md"
          required
        />
      </div>
  
      {/* Email field */}
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
          Email
        </label>
        <input
          value={contactInfo.email}
          onChange={onChangeHandler}
          type="email"
          id="email"
          name="email"
          className="w-full px-3 py-2 border rounded-md"
          required
        />
      </div>
  
      {/* Phone field */}
      <div className="mb-4">
        <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">
          Phone
        </label>
        <input
          value={contactInfo.phone}
          onChange={onChangeHandler}
          type="number"
          id="phone"
          name="phone"
          className="w-full px-3 py-2 border rounded-md"
          required
        />
        <div className="mb-6">
        <button
          onClick={onClickHandler}
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </div>
      </div>
      {/* </form> */}
      <DisplayContact contactData={contactList} />
    </>
  )
  
}
