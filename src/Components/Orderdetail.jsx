import { useState } from 'react'
import React, { useEffect } from 'react';
import { addDoc, collection, getDocs,updateDoc,doc,deleteDoc} from 'firebase/firestore';
import { db } from "./firebase";
import "./Orderdetail.css"





const Orderdetail = () => {
  const [refresh , setrefresh] = useState(false);
  const [ffitem, setffitem] = useState("");
  const [bbqitem, setbbqitem] = useState("");
  const [userdata, setuserdata] = useState([]);

  useEffect(() => {
    getdata();
   },[refresh])

  const getdata = async () => {
   try {
     const arr = [];
     const docSnap = await getDocs(collection(db, "manage"))
     console.log(docSnap);

     docSnap.forEach((doc) => {
       // console.log("doc",doc.data())
       arr.push({
         ...doc.data(),
         id :doc.id,
       })
     })

     // console.log("arr",arr);

     setuserdata([...arr]);
   } catch (error) {
     console.log("error",error)
   }
  }

  console.log("userdata",userdata);

   const editdata = async (id) => {
   console.log("editData", id);
   const editValue = prompt("Enter BBQ item...... ");
   const editValue1 = prompt("Enter ff item...... ");

   const userObj = {
     bbqitem: editValue,
     ffitem: editValue1,
   };

   await updateDoc(doc(db, "manage", id), userObj);
   setrefresh(!refresh);
 };

 const deletedata = async (id) => {
   console.log("deletedata", id);


   await deleteDoc(doc(db,"manage",id))
   setrefresh(!refresh);
   
 }

    return (
        <>
        <h1>ORDER DETAILS</h1>
             <div>
        {
        userdata.map((manage,index) =>{
           return(  
           
           <li key={index}>
            {manage.bbqitem}{""}
      
            <button className='ed-btn' onClick={() => editdata(manage.id)}>EDIT</button>{" "}
          <button className='ed-btn' onClick={() => deletedata(manage.id)}>Delete</button>{" "}
           </li>


           )
        })
      }
      </div>
      <div>
        {
        userdata.map((manage,index) =>{
           return(  
           
           <li className='li-style' key={index}>
            {manage.ffitem}{""}
      
            <button className='ed-btn' onClick={() => editdata(manage.id)}>EDIT</button>{" "}
            <button className='ed-btn' onClick={() => editdata(manage.id)}>Delete</button>{" "}
           </li>


           )
        })
      }
      </div>

      
            
        </>
    )
}

export default Orderdetail;
