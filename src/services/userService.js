import axios from 'axios';
import { storageService } from './storageService.js'
import { makeId } from './utilService.js'



const STORAGE_KEY = 'user'

export default {
      getUser,
      login,
      getLogedInUser,
      addMove
      //   queryNewImage
}

function getUser() {
      //  setTimeout(()=>{
      //        var x =  "https://thispersondoesnotexist.com/image"
      //        gUser.image = x
      //  },1000)
      return gUser
}
function getMoves() {
      return gUser.moves
}

var mymove =
{
      toId: "d99e3u2ih329",
      to: "Moshiko",
      at: 2652712571,
      amount: 2
}

var gDefaultUser = [
      {
            _id: 123,
            fullname: "Eitan Mich ",
            coins: 100,
            moves: [
                  {
                        toId: "d88e3u2ih329",
                        to: "bobo",
                        at: 2652712572,
                        amount: 1
                  },
                  {
                        toId: "d88e3u2ih129",
                        to: "koko",
                        at: 3652712572,
                        amount: 3
                  },
                  {
                        toId: "d88e3u2ih429",
                        to: "lolo",
                        at: 4652712572,
                        amount: 5
                  },
                  {
                        toId: "d88e3u2ih529",
                        to: "chipopo",
                        at: 5652712572,
                        amount: 7
                  },
            ],
            image: "https://res.cloudinary.com/omerphoto/image/upload/v1617974616/Faces/image_5_blsfey.jpg",
            // image : "https://thispersondoesnotexist.com/image",
            // image : "",
            coinImg: "https://image.shutterstock.com/image-photo/golden-coins-bitcoin-symbol-on-600w-1698227716.jpg"


      }
]

var gUser = _loadUser()

function _loadUser() {
      let user = storageService.load(STORAGE_KEY)
      if (!user || !user.length) user = gDefaultUser
      // console.log('user in user service', user)
      storageService.store(STORAGE_KEY, gDefaultUser)
      return user
}


function login(user) {
      var newUser = getEmptyUser()
      newUser.fullname = user.fullname
      gUser[0] = newUser
      storageService.store(STORAGE_KEY,gUser)
      return newUser
}

function getLogedInUser() {
      return storageService.load(STORAGE_KEY)
}

function getEmptyUser() {
      return {
            _id: makeId(),
            fullname: '',
            coins: 100,
            moves: [
                  {
                        toId: "d88e3u2ih329",
                        to: "popo",
                        at: 2652712572,
                        amount: 1
                  },
                  {
                        toId: "d88e3u2ih129",
                        to: "lopo",
                        at: 3652712572,
                        amount: 3
                  },
                  {
                        toId: "d88e3u2ih429",
                        to: "chipopo",
                        at: 4652712572,
                        amount: 5
                  },
                  {
                        toId: "d88e3u2ih529",
                        to: "koko",
                        at: 5652712572,
                        amount: 7
                  },
            ],
            image: "https://res.cloudinary.com/omerphoto/image/upload/v1617974616/Faces/image_5_blsfey.jpg",
            coinImg: "https://image.shutterstock.com/image-photo/golden-coins-bitcoin-symbol-on-600w-1698227716.jpg"

      }
}


function addMove(transaction) {
      var obj = JSON.parse(JSON.stringify(transaction))
      console.log('addmove in service', obj)
      obj.toId = makeId()
      //console.log(' gUser.coins befor transaction', gUser[0].coins)
      gUser[0].coins -= obj.amount
     // console.log(' gUser.coins after transaction', gUser[0].coins)
      gUser[0].moves.push(obj)
      storageService.store(STORAGE_KEY, gUser)
}

      // function queryNewImage() {
      //       return axios.get("https://thispersondoesnotexist.com/image")
      //           .then(res => {
      //               console.log('Service Got Res:', res);
      //               return res.data;
      //           })
      //           .catch(err => {
      //               console.log('Service got Error:', err);
      //           })
      //   }