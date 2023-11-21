const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contactList:[]
		},
		actions: {
			addContact: (contact) => {
				const store = getStore();
				const contactList = [...store.contactList, contact];
				setStore ({...store, contactList});
			},
			actContactList: (contactList) => {
				const store = getStore();
				
				setStore ({...store, contactList});

			},
			deleteContact: (id) => {
                const store = getStore();
                const contactList = store.contactList.filter(contact => contact.id !== id);
                setStore({ ...store, contactList});
            }
			
		}
	};
};


export default getState;
