import { storageService } from './storageService.js'
import { makeId } from './utilService.js'

const STORAGE_KEY = 'contacts'

export default {
    getContacts,
    getContactById,
    remove,
    save,
    getEmptyContact
}

var gDefaultContacts = [
    {
        "_id": "5a56640269f443a5d64b32ca",
        "fullname": "Simcha Riff",
        "email": "ochoahyde@renovize.com",
        "phone": "+1 (968) 593-3824",
        "image": "https://res.cloudinary.com/omerphoto/image/upload/v1617913624/Faces/image_4_rewpnx.jpg"
    },

    {
        "_id": "5a56640269f443a5d64b35ca",
        "fullname": "Itsik Spensiv",
        "email": "ochoahyde@renovize.com",
        "phone": "+1 (968) 593-3824",
        "image": "https://res.cloudinary.com/omerphoto/image/upload/v1617906128/Faces/image_2_c1wjed.jpg"
    },


    {
        "_id": "5a56640269f443a5d64b52ca",
        "fullname": "Reuma Matsati",
        "email": "ochoahyde@renovize.com",
        "phone": "+1 (968) 593-3824",
        "image": "https://res.cloudinary.com/omerphoto/image/upload/v1617905569/Faces/victoria2_gpuc9s.jpg"
    },
    {
        "_id": "5a56640269f443a5d64b62ca",
        "fullname": "Mati Shtoo",
        "email": "ochoahyde@renovize.com",
        "phone": "+1 (968) 593-3824",
        "image": "https://res.cloudinary.com/omerphoto/image/upload/v1617905572/Faces/face8_c2to2c.jpg"
    },
    {
        "_id": "5a56640269f443a5d64b72ca",
        "fullname": "Natan Lodoch",
        "email": "ochoahyde@renovize.com",
        "phone": "+1 (968) 593-3824",
        "image": "https://res.cloudinary.com/omerphoto/image/upload/v1617905578/Faces/image_qqzmyn.jpg"
    },
    {
        "_id": "5a56640269f443a5d64b82ca",
        "fullname": "Micha Faflo",
        "email": "ochoahyde@renovize.com",
        "phone": "+1 (968) 593-3824",
        "image": "https://res.cloudinary.com/omerphoto/image/upload/v1617905597/Faces/123_uv7mg7.jpg"
    },
    {
        "_id": "5a56640269f443a5d64b92ca",
        "fullname": "Eli Kopter",
        "email": "ochoahyde@renovize.com",
        "phone": "+1 (968) 593-3824",
        "image": "https://res.cloudinary.com/omerphoto/image/upload/v1616845142/Faces/charles_ed8c5v.jpg"
    },
    {
        "_id": "5a56640269f443a5d64b02ca",
        "fullname": "Maya Gidu",
        "email": "ochoahyde@renovize.com",
        "phone": "+1 (968) 593-3824",
        "image": "https://res.cloudinary.com/omerphoto/image/upload/v1617906017/Faces/image_1_jkfzd5.jpg"
    },
    {
        "_id": "5a56640269f443a5d64b33ca",
        "fullname": "Moti Luchim",
        "email": "ochoahyde@renovize.com",
        "phone": "+1 (968) 593-3824",
        "image": "https://res.cloudinary.com/omerphoto/image/upload/v1617714042/Faces/person1_mknafc.jpg"
    },
    {
        "_id": "5a56640269f443a5d64b34ca",
        "fullname": "Tsila chalon",
        "email": "ochoahyde@renovize.com",
        "phone": "+1 (968) 593-3824",
        "image": "https://res.cloudinary.com/omerphoto/image/upload/v1616846141/Faces/victoria1_ngn4hn.jpg"
    },
    {
        "_id": "5a56640269f443a5d64b42ca",
        "fullname": "Miki Bataor",
        "email": "babaj@gmail.com",
        "phone": "+1 (968) 548-2245",
        "image": "https://res.cloudinary.com/omerphoto/image/upload/v1617905565/Faces/malisa_noc1ph.jpg"
    },

    {
        "_id": "5a56630269f443a5d64b35ca",
        "fullname": "karlo Batusik",
        "email": "ochoahyde@renovize.com",
        "phone": "+1 (968) 593-3824",
        "image": "https://res.cloudinary.com/omerphoto/image/upload/v1617908308/Faces/image_3_udlsxk.jpg"
    },
]


var gContacts = _loadContacts()


function getContacts() {
    return gContacts
}


function save(contactToSave) {
    if (contactToSave._id) {
        const idx = gContacts.findIndex(contact => contact._id === contactToSave._id)
        gContacts.splice(idx, 1, contactToSave)
    } else {
        contactToSave._id = makeId()
        gContacts.push(contactToSave)
    }
    storageService.store(STORAGE_KEY, gContacts)
    return Promise.resolve(contactToSave);
}

function getContactById(id) {
    var selectedContact = gContacts.filter((contact) => { return (contact._id === id) })
    //  var theContact = [...selectedContact][0]
    return selectedContact[0]
}


function remove(id) {
    console.log('remove contact on service')
    const idx = gContacts.findIndex(contact => contact._id === id)
    gContacts.splice(idx, 1)
    if (!gContacts.length) gContacts = gDefaultContacts.slice()
    storageService.store(STORAGE_KEY, gContacts)
    return Promise.resolve()
}



function _loadContacts() {
    let contacts = storageService.load(STORAGE_KEY)
    if (!contacts || !contacts.length) contacts = gDefaultContacts
    console.log('ccccccccccccccc',contacts)
    storageService.store(STORAGE_KEY, gDefaultContacts)
    return contacts
}


function getEmptyContact() {
    return {
        _id : makeId(),
        name: '',
        email: 'myEmail@coolemail.com',
        phone : "+1 (942) 532-4563",
        image : null
    }
}


