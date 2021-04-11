
import { Component } from 'react'
import './BitcoinChart.scss'
// import React from 'react';
import BitcoinService from '../../services/BitcoinService.js'
import { Sparklines, SparklinesLine, SparklinesBars, SparklinesSpots } from 'react-sparklines';


export class BitcoinChart extends Component {
    state = {
        marketPrice: ''
    }


    componentDidMount() {
        console.log('load charts ')
        this.loadData()
    }

    async loadData() {
        const z = await BitcoinService.getMarketPrice()
     //   console.log('load chart  in app from service', marketPrice.values[1])
        let marketPrice = z.values.map(x=>x.y )
        console.log('chrt array',marketPrice)
        this.setState({ marketPrice })
    }

    render() {
        console.log('loadinggg');
        return (
            <div className="bitcoin-chart">
                {/* <Sparklines className="test11" data={[5, 10, 5, 20, 8, 15]} limit={5} width={100} height={20} margin={5}></Sparklines> */}

                <div className="bar">
                    <Sparklines  limit={30}   data={this.state.marketPrice}>
                    {/* <Sparklines data={this.state.marketPrice}> */}

                    {/* <Sparklines data={this.state.marketPrice}> */}
                        <SparklinesBars />
                    </Sparklines>
                </div>
                <div className="line">
                    <Sparklines data={this.state.marketPrice}>
                        <SparklinesSpots />
                        <SparklinesLine color="red" />
                    </Sparklines>
                </div>
                <div>
                    {/* <Sparklines data={[5, 10, 5, 20]}>
                    <SparklinesLine style={{ fill: "none" }} />
                    <SparklinesSpots />
                </Sparklines> */}
                </div>


            </div>

        )
    }
}
