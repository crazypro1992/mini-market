import './Btn.css'

const Btn = props => {
    return (
        <button className="form__btn" onClick={(event)=> props.getResult(event)}>{props.name}</button>
    )
}

export default Btn;