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
			deleteContact: (index) => {
                const store = getStore();
                const updatedContactList = store.contactList.filter((_, i) => i !== index);
                setStore({ ...store, contactList: updatedContactList });
            },
		}
	};
};


export default getState;
