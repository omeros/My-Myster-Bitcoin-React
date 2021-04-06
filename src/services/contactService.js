export default {
    getContacts,
    getById
  }
  
   function getContacts(){
          return gContacts
   }

   function getById(id){
         var selectedContact =  gContacts.filter((contact)=>{ return (contact._id===id)} )
        //  var theContact = [...selectedContact][0]
         return selectedContact[0]
   }
  
        var gContacts = [
            {     
                "_id": "5a56640269f443a5d64b32ca", 
                "name": "Baba King",
                "email": "ochoahyde@renovize.com", 
                "phone": "+1 (968) 593-3824",
                "image" : ""
            },
            {     
                "_id": "5a56640269f443a5d64b42ca", 
                "name": "Baba j",
                "email": "babaj@gmail.com", 
                "phone": "+1 (968) 548-2245",
                "image" : ""
            },
            {     
                "_id": "5a56640269f443a5d64b52ca", 
                "name": "Popo Chipopo",
                "email": "ochoahyde@renovize.com", 
                "phone": "+1 (968) 593-3824",
                "image" : "https://thispersondoesnotexist.com/image"
            },
            {     
                "_id": "5a56640269f443a5d64b62ca", 
                "name": "Baba Laba",
                "email": "ochoahyde@renovize.com", 
                "phone": "+1 (968) 593-3824",
                "image" : "https://thispersondoesnotexist.com/image"
            },
            {     
                "_id": "5a56640269f443a5d64b72ca", 
                "name": "YamTov Doshan",
                "email": "ochoahyde@renovize.com", 
                "phone": "+1 (968) 593-3824",
                "image" : "https://thispersondoesnotexist.com/image"
            },
            {     
                "_id": "5a56640269f443a5d64b82ca", 
                "name": "Keri Vanerik",
                "email": "ochoahyde@renovize.com", 
                "phone": "+1 (968) 593-3824",
                "image" : "https://thispersondoesnotexist.com/image"
            },
            {     
                "_id": "5a56640269f443a5d64b92ca", 
                "name": "David Sinclair",
                "email": "ochoahyde@renovize.com", 
                "phone": "+1 (968) 593-3824",
                "image" : "https://thispersondoesnotexist.com/image"
            },
            {     
                "_id": "5a56640269f443a5d64b02ca", 
                "name": "Amit Amal",
                "email": "ochoahyde@renovize.com", 
                "phone": "+1 (968) 593-3824",
                "image" : "https://thispersondoesnotexist.com/image"
            },
            {     
                "_id": "5a56640269f443a5d64b33ca", 
                "name": "Beni Sela",
                "email": "ochoahyde@renovize.com", 
                "phone": "+1 (968) 593-3824",
                "image" : "https://thispersondoesnotexist.com/image"
            },
            {     
                "_id": "5a56640269f443a5d64b34ca", 
                "name": "Entsik Lopedia",
                "email": "ochoahyde@renovize.com", 
                "phone": "+1 (968) 593-3824",
                "image" : "https://thispersondoesnotexist.com/image"
            },
            {     
                "_id": "5a56640269f443a5d64b35ca", 
                "name": "Itsik Spensiv",
                "email": "ochoahyde@renovize.com", 
                "phone": "+1 (968) 593-3824",
                "image" : "https://thispersondoesnotexist.com/image"
            },
        ]