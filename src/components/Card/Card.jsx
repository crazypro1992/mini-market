import { connect } from "react-redux";
import './Card.css'

const Card = props => {
    return (
        <div className="card">
            <div className="card__category">{props.category}</div>
            <h2 className="card__name">{props.name}</h2>
            <div className="card__price-section">
                <div className="card__price">
                    <span>$</span>{props.price}
                </div>
                <button className="card__btn" onClick={()=> {
                    props.addPurchaseCard(props.totalInfo)
                    props.activeModalWindow()
                } }>Buy</button>
            </div>
        </div>
    )
}
const mapStateToProps = state => {
    return {
        state
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addPurchaseCard: card => dispatch({type: 'ADD_PURCHASE_CARD', purchaseCard: card}),
        activeModalWindow: ()=> dispatch({type: 'ACTIVE_MODAL'}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);