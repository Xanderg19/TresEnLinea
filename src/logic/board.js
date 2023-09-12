import { WINNER_COMBOS } from "../constants"
export const checkWinnerFrom = (boardTocheck) =>{
    //revisamos todas las combinaciones ganadoras
    //para ver so x u O gano
    for(const combo of WINNER_COMBOS){
      const [a,b,c] = combo
      if(
        boardTocheck[a]&&
        boardTocheck[a]== boardTocheck[b] &&
        boardTocheck[a]== boardTocheck[c]
      ){
        return boardTocheck[a]
      }
    }
    return null
  }