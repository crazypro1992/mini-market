import logo from './logo.svg';
import './App.css';
import Card from './components/Card/Card';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { getTotalCardsThunk } from './redux/mainReduser';
import Loader from './components/Loader/Loader';
import Modal from './components/Modal/Modal';
import BtnCheapestCard from './components/BtnsCheapestCard/BtnChapestCard';

const App = props => {

  useEffect( ()=> {
    props.getTotalCardsThunk();

  },[])

  const getCheapestCard = () => {
    let cheapestCardCost = props.totalCards[0].price;
    let index = 0;

    props.totalCards.forEach( (item, i) => {
      if(item.price < cheapestCardCost) {
        cheapestCardCost = item.price
        index = i
      }
    })

    let cheapestCard = props.totalCards.filter((item, i)=> {
      return i == index;
    })

    props.addPurchaseCard(cheapestCard[0])

  }

  
  let totalCards = props.totalCards && props.totalCards.map( (card, index) => {
    return (
      <Card
        totalInfo={card}
        name={card.name}
        category={card.category}
        price={card.price}
        key={index}      
      />
    )
  })

  return (
    <div className="App">
     {props.isActiveModalWindow ? <Modal/> : null}
      <div className="container">
        <div className="cards">
          {props.isLoading ? <Loader/> : null}

          {totalCards}

        </div>
        {props.isLoading == false ? <BtnCheapestCard
          getCheapestCard={getCheapestCard}
          activeModalWindow={props.activeModalWindow}
        /> : null} 
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    totalCards: state.totalCards,
    isLoading: state.isLoading,
    isActiveModalWindow: state.activeModalWindow,
    purchaseCard: state.purchaseCard
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getTotalCardsThunk: ()=> dispatch(getTotalCardsThunk()),
    activeModalWindow: ()=> dispatch({type: 'ACTIVE_MODAL'}),
    disabledModalWindow: ()=> dispatch({type: 'DISABLED_MODAL'}),
    addPurchaseCard: card => dispatch({type: 'ADD_PURCHASE_CARD', purchaseCard: card}),
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(App);
