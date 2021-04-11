// import React from 'react';
// import axios from '../lib/axios.js';
 import axios from 'axios';

export default {
    getRate,
    getCoin,
    getMarketPrice
}

var gCoin = [
    {
        coins: 300,

    },
]

function getCoin() {
    return gCoin
}    


function getMarketPrice() {
    // return axios.get("https://api.blockchain.info/charts/trade-volume?timespan=5months&format=json&cors=true")
    // return axios.get("https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true")
    return axios.get("https://api.blockchain.info/charts/avg-block-size?timespan=5months&format=json&cors=true")
        .then(res => {
            console.log('Service Got getMarketPrice :', res);
            return res.data;
        })
        .catch(err => {
            console.log('Service got Error:', err);
        })
}


function getRate() {
    return axios.get("https://blockchain.info/tobtc?currency=USD&value=1")
    .then(res => {
        console.log('Service Got getRate:', res);
            return res.data;
        })
        .catch(err => {
            console.log('Service got Error:', err);
        })
    }





