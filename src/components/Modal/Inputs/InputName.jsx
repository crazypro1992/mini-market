import Error from "./Error";

const InputName = props => {
    
    return (
        <div className='form__element'>
            {props.orderFormInfo.inputName.value == '' && props.orderFormInfo.inputName.isBlur || !props.regForInputName.test(props.orderFormInfo.inputName.value) && props.orderFormInfo.inputName.isBlur ? 
                <Error/>
            : null}
            
            <input 
                style={props.orderFormInfo.inputName.value == '' && props.orderFormInfo.inputName.isBlur || !props.regForInputName.test(props.orderFormInfo.inputName.value) && props.orderFormInfo.inputName.isBlur ? {border: '1px solid #E43F3F'}: null}
                type="text" placeholder='Name'
                value={props.orderFormInfo.inputName.value} 
                onChange={(event)=> {
                    props.setInputNameValue(event.target.value);

                }}
                onBlur={()=>{
                    props.blurInputName();
                    props.isValidInputName()
                }}
                className="form__input"
            />
            <div className="form__input-error-info">
                {props.orderFormInfo.inputName.value == '' && props.orderFormInfo.inputName.isBlur ? 'This field in required' :
                !props.regForInputName.test(props.orderFormInfo.inputName.value) && props.orderFormInfo.inputName.isBlur ? 'Only letters allowed' : null}
            </div>
        </div>
    )
}

export default InputName;