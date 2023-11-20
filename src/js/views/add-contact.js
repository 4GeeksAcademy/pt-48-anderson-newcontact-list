import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from '../store/appContext';
import "../../styles/add-contact.css"

const AddContact = () => {
    
    const {store, actions} = useContext(Context);
    const [fullname, setFullname] = useState('');
    const [newphone, setNewPhone] = useState('');
    const [newaddress, setNewAddress] = useState('');
    const [newemail, setNewEmail] = useState('');

   
    const addContact = () => {
      const newContact= {
        fullname,
        newphone,
        newaddress,
        newemail
      };

      actions.addContact(newContact);
      setFullname('');
      setNewPhone('');
      setNewAddress('');
      setNewEmail('');
    }

    return(<>
    <div className="addcontact-container">
      <h1>Add a new Contact</h1>
      <label>Full Name</label>
      <input type="text" placeholder="Name" value={fullname} onChange={(e) => setFullname(e.target.value)} />
      <label>Phone</label>
			<input type="number" placeholder="Phone" value={newphone} onChange={(e) => setNewPhone(e.target.value)} />
      <label>Address</label>
			<input type="text" placeholder="Address" value={newaddress} onChange={(e) => setNewAddress(e.target.value)} />
      <label>Email</label>
			<input type="email" placeholder="E-Mail" value={newemail} onChange={(e) => setNewEmail(e.target.value)} />

       <button className="addcontact-button btn-primary" onClick={addContact}>Save</button>
       
       <Link to="/">
				<span className="span-contact" href="#" role="">
					Go to contacs
				</span>
			</Link>

          
       </div>
      </>
    )};

export default AddContact;