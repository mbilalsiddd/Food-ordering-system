import React, { useEffect } from 'react';
import { useState } from 'react';
import { addDoc, collection, getDocs,updateDoc,doc,deleteDoc} from 'firebase/firestore';
import { db } from "./firebase";
import { Link } from 'react-router-dom';





const Managingstore = () => {
  const [refresh , setrefresh] = useState(false);
  const [ffitem, setffitem] = useState("");
  const [bbqitem, setbbqitem] = useState("");
  const [deal, setdeal] = useState("");
  const [Coldrink, setcoldrink] = useState("");
  const [txtarea, settxtarea] = useState("");
  const [userdata, setuserdata] = useState([]);




  const handSubmit = async (ele) => {
    try {
      ele.preventDefault();
      //console.log("handSubmit");

      const userObj2 = {
        ffitem,
        bbqitem,
        deal,
        Coldrink,
        txtarea,
      }
      console.log("handSubmit", userObj2);

      const docRef = await addDoc(collection(db, "manage"), userObj2);
      console.log("docRef", docRef)
    } catch (error) {
      console.log(error, 'error')
    }
  }
  
  // useEffect(() => {
  //    getdata();
  //   },[refresh])

  //  const getdata = async () => {
  //   try {
  //     const arr = [];
  //     const docSnap = await getDocs(collection(db, "manage"))
  //     console.log(docSnap);

  //     docSnap.forEach((doc) => {
  //       // console.log("doc",doc.data())
  //       arr.push({
  //         ...doc.data(),
  //         id :doc.id,
  //       })
  //     })

  //     // console.log("arr",arr);

  //     setuserdata([...arr]);
  //   } catch (error) {
  //     console.log("error",error)
  //   }
  //  }

  //  console.log("userdata",userdata);

  //   const editdata = async (id) => {
  //   console.log("editData", id);
  //   const editValue = prompt("Enter BBQ item...... ");
  //   const editValue1 = prompt("Enter ff item...... ");

  //   const userObj = {
  //     bbqitem: editValue,
  //     ffitem: editValue1,
  //   };

  //   await updateDoc(doc(db, "manage", id), userObj);
  //   setrefresh(!refresh);
  // };
 
  // const deletedata = async (id) => {
  //   console.log("deletedata", id);


  //   await deleteDoc(doc(db,"manage",id))
  //   setrefresh(!refresh);
    
  // }

  
  return (


    <>
      <form onSubmit={handSubmit}>
        <div className="store-container">
          <h1>MANAGING STORE</h1>
          <br />
          <div className="main">
            <input
              onChange={(e) => { setffitem(e.target.value) }}
              type="text"
              placeholder='Fast Food Item'
            />
          </div>
          <br />
          <div className="main">
            <input
              onChange={(e) => { setbbqitem(e.target.value) }}
              type="text"
              placeholder='BBQ Item'
            />
          </div>
          <br />
          <select
            onChange={(e) => { setdeal(e.target.value) }}
            className="dropdown">
            <option value="" hidden>

              <label>
                Select a deal
              </label>
            </option>
            <option value="deal1">Deal 1</option>
            <option value="deal2">Deal 2</option>
            <option value="deal3">Deal 3</option>
            <option value="deal4">Deal 4</option>
          </select>
          <br />
          <br />
          <select
            onChange={(e) => { setcoldrink(e.target.value) }}
            className="dropdown">
            <option value="" hidden>

              <label>
                Select a Coldrink
              </label>
            </option>
            <option value="Pakola">Pakola</option>
            <option value="Cola next">Cola next</option>
            <option value="Sting">Sting</option>
            <option value="Marinda">Marinda</option>
          </select>
          <br />
          <br />
          <div className="textarea">
            <textarea
              onChange={(e) => { settxtarea(e.target.value) }}
              className="custom-textarea"
              placeholder="Enter your demand...."
            />
          </div>
          <button className='btn'>Place order</button>
          <br />
          <div className='Funcbtns'>
            <button className='dss'><Link to='/Orderdetail'>Order Details</Link></button>
            <button className='dss'><Link to='/Inventory'>Inventory</Link></button>
            <button className='dss'><Link to='/Profit'>Profit</Link></button>
            <button className='dss'>Print</button>
          </div>
        </div>
      </form>

      {/* <div>
        {
        userdata.map((manage,index) =>{
           return(  
           
           <li key={index}>
            {manage.bbqitem}{""}
      
            <button onClick={() => editdata(manage.id)}>EDIT</button>{" "}
          <button onClick={() => deletedata(manage.id)}>Delete</button>{" "}
           </li>


           )
        })
      }
      </div>
      <div>
        {
        userdata.map((manage,index) =>{
           return(  
           
           <li key={index}>
            {manage.ffitem}{""}
      
            <button onClick={() => editdata(manage.id)}>EDIT</button>{" "}
            <button onClick={() => editdata(manage.id)}>Delete</button>{" "}
           </li>


           )
        })
      }
      </div> */}


    </>
  )
}

export default Managingstore
