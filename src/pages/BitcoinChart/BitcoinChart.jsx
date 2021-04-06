
import { Component } from 'react'
import './BitcoinChart.scss'
import React from 'react';
import { Sparklines, SparklinesLine,SparklinesBars,SparklinesSpots } from 'react-sparklines';


export class BitcoinChart extends Component {

    render() {
        return (
            <div className="bitcoin-chart">
                  {/* <Sparklines className="test11" data={[5, 10, 5, 20, 8, 15]} limit={5} width={100} height={20} margin={5}></Sparklines> */}

                <div className="bar">
                        <Sparklines data={[5, 10, 5, 20]}>
                            <SparklinesBars />
                        </Sparklines>
                </div>
               <div className="line">
                    <Sparklines  data={[5, 10, 5, 20]}>
                        <SparklinesLine color="red" />
                    </Sparklines>
                </div>
                {/* <div>
                <Sparklines data={sampleData}>
                    <SparklinesLine style={{ fill: "none" }} />
                    <SparklinesSpots />
                </Sparklines>
                </div> */}


            </div>

        )
    }
}
