import contactService from "../../services/contactService"

// Thunk - Action Dispatcher
  export function loadContacts(){
    return  async dispatch =>{
        // const contacts = await contactService.query() 
        const contacts = await contactService.getContacts()
        const action = {
            type: 'SET_CONTACTS',
            contacts
        }
        dispatch(action)
    }
}


export function removeContact(contactId){
   return async dispatch  => {
      await contactService.remove(contactId)
      console.log('remove in actions ')
      dispatch({type :'REMOVE_CONTACT',contactId})
   }
}

export function getContactById(contactId) {
    return async dispatch => {
      const contact = await contactService.getContactById(contactId)
      console.log('contact on action after servie',contact)
      dispatch({ type: 'SET_CONTACT', contact })
    }
  }

  export function saveContact(contact) {
    return async dispatch => {
      const isAdd = !contact._id
      const updatedContact = await contactService.save(contact)
  
      if (isAdd) dispatch({ type: 'ADD_CONTACT', contact: updatedContact })
      else dispatch({ type: 'UPDATE_CONTACT', updatedContact })
    }
  }