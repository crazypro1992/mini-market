import { connect } from "react-redux";
import ModalBtn from "./Btn/Btn";
import InputNumber from "./Inputs/InputNumber";
import InputName from "./Inputs/InputName";
import './Modal.css';

const Modal = props => {

    let regForInputName = /^[a-zа-яё]+$/i;
    let regForInputNumber = /[^\d]/g;
    let regCountForInputNumber = /(?=(^([^\d]*?\d){12}$))/;

    const isValidInputName = () => {
        if(regForInputName.test(props.orderFormInfo.inputName.value)) {
            props.validateInputName()
        }
    }

    const isValidInputNumber = () => {
        if(!regForInputNumber.test(props.orderFormInfo.inputNumber.value) && regCountForInputNumber.test(props.orderFormInfo.inputNumber.value)) {
            props.validateInputNumber()
        }
    }

    const getResult = (event) => {
        event.preventDefault()
        if(props.orderFormInfo.inputName.isValidate && props.orderFormInfo.inputNumber.isValidate) {
            console.log(props.purchaseCard)
        }
    }

    return(
        <div className="fixed-overlay">
             <div className="modal">
                <div className="modal__close" onClick={props.disabledModalWindow}>&#10006;</div> 
                <div className="modal__product-category">
                    {props.purchaseCard.category}
                </div>
                <h2 className="modal__product-name">
                    {props.purchaseCard.name}
                </h2>

                <div className="modal__product-price">
                    <span>$</span>{props.purchaseCard.price}
                </div>


                <form className="form">
                    <InputName
                        regForInputName={regForInputName}
                        orderFormInfo={props.orderFormInfo}
                        setInputNameValue={props.setInputNameValue}
                        blurInputName={props.blurInputName}
                        isValidInputName={isValidInputName}
                    />
                    <InputNumber
                        regForInputNumber={regForInputNumber}
                        regCountForInputNumber={regCountForInputNumber}
                        orderFormInfo={props.orderFormInfo}
                        setInputNumberValue={props.setInputNumberValue}
                        blurInputNumber={props.blurInputNumber}
                        isValidInputNumber={isValidInputNumber}
                    />

                    <ModalBtn
                        name='Order'
                        getResult={getResult}
                    />
                </form>    
            </div>
        </div>
       
    )
}

const mapStateToProps = state => {
    return {
        purchaseCard: state.purchaseCard,
        orderFormInfo: state.orderForm
    }
}

const mapDispatchToProps = dispatch => {
    return {
        disabledModalWindow: ()=> dispatch({type: 'DISABLED_MODAL'}),

        setInputNameValue: (value)=> dispatch({type: 'SET_INPUT_NAME_VALUE', value: value}),
        blurInputName: ()=> dispatch({type: 'ISBLUR_INPUT_NAME'}),
        validateInputName: ()=> dispatch({type: 'VALIDATE_INPUT_NAME'}),

        setInputNumberValue: (value)=> dispatch({type: 'SET_INPUT_NUMBER_VALUE', value: value}),
        blurInputNumber: ()=> dispatch({type: 'ISBLUR_INPUT_NUMBER'}),
        validateInputNumber: ()=> dispatch({type: 'VALIDATE_INPUT_NUMBER'})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);