import React from 'react'
import { useDispatch } from 'react-redux'
import {Card,Button,CardTitle,CardText,CardImg,CardBody,CardSubtitle,CardGroup} from "reactstrap"
import { deleteContact } from '../redux/actions/contactActions'

function ContactCard({contact}) {
const dispatch=useDispatch()
    console.log(contact,"test")
    const delet=()=>{
        dispatch(deleteContact(contact._id))
    }
  return (
    <div  style={{margin:"10px"}}>
        
       
 <Card
 body
 

 >
   
   
      <CardTitle tag="h5">
      {contact.name}
      </CardTitle>
     
      <CardText>
       {contact.email}
      </CardText>
      <Button onClick={delet}>Delete</Button>
     
  
  </Card>

   </div>
  )
}

export default ContactCard
