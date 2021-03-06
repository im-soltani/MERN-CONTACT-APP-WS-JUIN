import React,{useEffect}from 'react'
import {useDispatch, useSelector} from "react-redux"
import { getContacts } from '../redux/actions/contactActions'
import ContactCard from './ContactCard'

function ContactList() {
const dispatch=useDispatch()
useEffect(()=>{
dispatch(getContacts())
},[])
const contacts=useSelector((state)=>state.contacts.contacts)
console.log(contacts,"heloooo")

  return (
    <div style={{display:"flex",flexWrap:"wrap",margin:"20px"}}>
        {
           contacts && contacts.map((contact,i)=>(
                <ContactCard contact={contact} key={contact._id}/>
            ))
        }

    </div>
  )
}

export default ContactList