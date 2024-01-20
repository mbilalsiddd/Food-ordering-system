import React from 'react';
import './Inventory.css';
import {collection, addDoc} from 'firebase/firestore';
import { db } from '../Components/firebase';
const Inventory = () => {
  // Sample data for the table
  const tableData = [
    { id: 1, column1: 'Chicken', column2: 'Aslam', column3: 'On demand', column4: '+92345678910',column5: 'ON' },
    { id: 2, column1: 'Beef', column2: 'Ishaaq', column3: 'On demand', column4: '+92345678910',column5: 'ON'  },
    { id: 3, column1: 'Ketchup/Mayoniesse', column2: 'Jibran', column3: 'On demand', column4: '+92345678910',column5: 'ON'  },
    { id: 4, column1: 'Bun/Bread', column2: 'Nasir', column3: 'On demand', column4: '+92345678910',column5: 'ON'  },
    // Add more data as needed
  ];

    const Inventory = async ()=>{

      try {
        const Inventory_obj={
             id:"1",
             ITEM:"Chicken",
             Name:"Aslam",
             Weekly:"On Demand",
             Number:"+92345678910",
             Status:"ON",
        
        
             id:"2",
             ITEM:"Beef",
             Name:"ishaaq",
             Weekly:"On Demand",
             Number:"+92345678910",
             Status:"ON",

             id:"3",
             ITEM:"Ketchup/Mayoniesse",
             Name:"jibran",
             Weekly:"On Demand",
             Number:"+92345678910",
             Status:"ON",

             id:"4",
             ITEM:"Bun/Bread",
             Name:"Nasir",
             Weekly:"On Demand",
             Number:"+92345678910",
             Status:"ON",



        }


        const docRef = await addDoc(collection(db, "Inventory"), Inventory_obj);
        console.log("docRef", docRef)

      } catch (error) {
        console.log("error", error)
      }
    }

  return (
    <>
      <h1>Inventory</h1>
      <div>
        <table border="1" style={{ borderCollapse: 'collapse', width: '100%' }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>ITEMS</th>
              <th>Suppliers</th>
              <th>Weekly</th>
              <th>phoneNumber</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row) => (
              <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.column1}</td>
                <td>{row.column2}</td>
                <td>{row.column3}</td>
                <td>{row.column4}</td>
                <td>{row.column5}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button onClick={Inventory}>SUBMIT</button>
    </>
  );
};

export default Inventory;
