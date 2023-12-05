import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const ContactDetail = () => {
    const { contactid } = useParams();
    const { store, actions } = useContext(Context);
    const [contact, updateContact] = useState({ id: null, fullname: '', newphone: '', newaddress: '', newemail: '' });
    const [fullname, setFullname] = useState('');
    const [newphone, setNewPhone] = useState('');
    const [newaddress, setNewAddress] = useState('');
    const [newemail, setNewEmail] = useState('');


    useEffect(() => {
        const [contactFiltered] = store.contactList.filter(contact => `${contact.id}` === contactid)
        updateContact(contactFiltered);
    }, [])

    const updateList = () => {
        const contactList = store.contactList.map(contactItem => {
            if (`${contactItem.id}` === contactid) {
                return { id: contactItem.id,
                     fullname: fullname == "" ? contact.fullname : fullname, 
                     newphone: newphone == "" ? contact.newphone : newphone, 
                     newaddress: newaddress == "" ? contact.newaddress: newaddress, 
                     newemail: newemail == "" ? contact.newemail: newemail }
            }
            return contactItem;
        });
        actions.actContactList(contactList);

    }

    return (<>
        <h1>{contact.fullname}</h1>
        <input type="text" placeholder="Name" value={fullname} onChange={(e) => setFullname(e.target.value)} />
        <h1>{contact.newphone}</h1>
        <input type="number" placeholder="Phone" value={newphone} onChange={(e) => setNewPhone(e.target.value)} />
        <h1>{contact.newaddress}</h1>
        <input type="text" placeholder="Address" value={newaddress} onChange={(e) => setNewAddress(e.target.value)} />
        <h1>{contact.newemail}</h1>
        <input type="email" placeholder="E-Mail" value={newemail} onChange={(e) => setNewEmail(e.target.value)} />

        <button className="addcontact-button btn-primary" onClick={() => updateList()}>Act</button>

        <Link to="/">
            <span className="btn btn-primary btn-lg" href="#" role="button">
                Back to List
            </span>
        </Link>
    </>)
};

export default ContactDetail;