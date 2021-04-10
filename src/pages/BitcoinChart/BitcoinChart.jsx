
import { Component } from 'react'
import './BitcoinChart.scss'
import React from 'react';
import BitcoinService  from '../../services/BitcoinService.js'
import { Sparklines, SparklinesLine,SparklinesBars,SparklinesSpots } from 'react-sparklines';


export class BitcoinChart extends Component {
    state={
        marketPrice : null,
    }
    async loadData() {
        const marketPrice = await BitcoinService.getMarketPrice()
      //  console.log('load coins in app',btc)
        this.setState({ marketPrice })
      }

    render() {
        return (
            <div className="bitcoin-chart">
                  {/* <Sparklines className="test11" data={[5, 10, 5, 20, 8, 15]} limit={5} width={100} height={20} margin={5}></Sparklines> */}

                <div className="bar">
                        <Sparklines data={[5, 10, 5, 20,4,66,4,99,33,48,27,49,73]}>
                            <SparklinesBars />
                        </Sparklines>
                </div>
               <div className="line">
                    <Sparklines  data={[5, 10,50, 5, 20,83,52,76,95,29,59,72]}>
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
