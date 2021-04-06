import axios from 'axios';


export default {
  getUser,
//   queryNewImage
}

 function getUser(){
      //  setTimeout(()=>{
      //        var x =  "https://thispersondoesnotexist.com/image"
      //        gUser.image = x
      //  },1000)
      return gUser
 }

      var gUser = [
            {     
                  id: 123,
                  name: "Bill Gates ",
                  coins: 300, 
                  moves: [1,2,3],
                  image : "https://res.cloudinary.com/omerphoto/image/upload/v1617714042/Faces/person1_mknafc.jpg",
                  // image : "https://thispersondoesnotexist.com/image",
                  // image : "",
                  coinImg : "https://image.shutterstock.com/image-photo/golden-coins-bitcoin-symbol-on-600w-1698227716.jpg"

                  
                

            }
      ]


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