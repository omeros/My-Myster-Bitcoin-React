import React from 'react';
// import axios from '../lib/axios.js';
 import axios from 'axios';

export default {
    query,
    getCoin
}

var gCoin = [
    {
        coins: 300,

    },
]

function getCoin() {

    return gCoin
}    

// function query() {

// }

function query() {
    return axios.get("https://blockchain.info/tobtc?currency=USD&value=1")
        .then(res => {
            console.log('Service Got Res:', res);
            return res.data;
        })
        .catch(err => {
            console.log('Service got Error:', err);
        })
}

// function askVerbose(onSuccess) {
//     const prmRes = axios.get('https://yesno.wtf/api');
//     console.log(prmRes)
//     prmRes.then(res => {
//         console.log('Service Got Res:', res);
//         onSuccess(res.data);
//     });
//     prmRes.catch(err => {
//         console.log('Service got Error:', err);
//     })
    
// }