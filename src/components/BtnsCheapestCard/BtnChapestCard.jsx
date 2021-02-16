import './BtnsCheapestCard.css'

const BtnCheapestCard = props => {
    return (
        <button className="btn-cheapest-card" onClick={()=> {
            props.getCheapestCard();
            props.activeModalWindow();
          }}>Buy cheapest</button>
    )
}

export default BtnCheapestCard;