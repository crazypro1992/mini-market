import Error from "./Error";

const InputNumber = props => {
   
    return (
        <div className='form__element'>
            {props.orderFormInfo.inputNumber.value == '' && props.orderFormInfo.inputNumber.isBlur ||
            props.regForInputNumber.test(props.orderFormInfo.inputNumber.value) && props.orderFormInfo.inputNumber.isBlur ||
            !props.regCountForInputNumber.test(props.orderFormInfo.inputNumber.value) && props.orderFormInfo.inputNumber.isBlur? 
                <Error/>
            : null}
        
            <input 
                style={props.orderFormInfo.inputNumber.value == '' && props.orderFormInfo.inputNumber.isBlur ||
                props.regForInputNumber.test(props.orderFormInfo.inputNumber.value) && props.orderFormInfo.inputNumber.isBlur ||
                !props.regCountForInputNumber.test(props.orderFormInfo.inputNumber.value) && props.orderFormInfo.inputNumber.isBlur ? {border: '1px solid #E43F3F'}: null}
                type="text"
                placeholder='Number'
                value={props.orderFormInfo.inputNumber.value} 
                onChange={(event)=> {
                    props.setInputNumberValue(event.target.value);

                }}
                onBlur={()=>{
                    props.blurInputNumber();
                    props.isValidInputNumber()
                }}
                className="form__input"
                />
            <div className="form__input-error-info">
                {props.orderFormInfo.inputNumber.value == '' && props.orderFormInfo.inputNumber.isBlur ? 'This field in required' :
                props.regForInputNumber.test(props.orderFormInfo.inputNumber.value) && props.orderFormInfo.inputNumber.isBlur ? 'Only letters allowed' :
                !props.regCountForInputNumber.test(props.orderFormInfo.inputNumber.value) && props.orderFormInfo.inputNumber.isBlur? 'Should contain 12 characters': null}
            </div>
        </div>
    )
}

export default InputNumber;