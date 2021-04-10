

import './MovesList.scss'
import UserService from '../../services/userService.js'


export const MovesList = ({moves}) => {

    return (
 


        <div> 
                {moves&&<div className="last3move"> Your Last 3 Moves </div>}
            <div className="move-list-box">
                {moves&&<div>to : {moves[0].to}</div>}
                {moves&&<div>At :{moves[0].at}</div>}
                {moves&&<div>Amount : {moves[0].amount} Coins</div>}
            </div>
            <div className="move-list-box">
     
                {moves&&<div>to : {moves[1].to}</div>}
                {moves&&<div>At :{moves[1].at}</div>}
                {moves&&<div>Amount : {moves[1].amount} Coins</div>}
            </div>
            <div className="move-list-box">
              
                {moves&&<div>to : {moves[2].to}</div>}
                {moves&&<div>At :{moves[2].at}</div>}
                {moves&&<div>Amount : {moves[2].amount} Coins</div>}
            </div>
        </div>
    )
}

