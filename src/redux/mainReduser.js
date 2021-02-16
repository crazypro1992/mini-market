const inisialState = {
    isLoading: false,
    totalCards: [],
    purchaseCard: {},
    activeModalWindow: false,
    orderForm: {
        inputName: {
            value: '',
            isBlur: false,
            isValidate: false
        },
        inputNumber: {
            value: '',
            isBlur: false,
            isValidate: false
        }
    }
}

export const mainReducer = (state = inisialState, action) => {
    switch(action.type) {
        case 'START_REQUEST':
            return {
                ...state,
                isLoading: true
            }
        case 'FINISH_REQUEST':
            return {
                ...state,
                isLoading: false
            }
        case 'ADD_CARDS':
            return {
                ...state,
                totalCards: action.cards
            }
        case 'ADD_PURCHASE_CARD': {
            return {
                ...state,
                purchaseCard: action.purchaseCard
            }
        }
        case 'ACTIVE_MODAL' : {
            return {
                ...state,
                activeModalWindow: true
            }
        }
        case 'DISABLED_MODAL' : {
            return {
                ...state,
                activeModalWindow: false
            }
        }



        case 'SET_INPUT_NAME_VALUE':
            return {
                ...state,
                orderForm: {
                    ...state.orderForm,
                    inputName: {
                        ...state.orderForm.inputName,
                        value: action.value,
                        isBlur: false,
                        isValidate: false
                    }
                }
            }
        case 'ISBLUR_INPUT_NAME':
            return {
                ...state,
                orderForm: {
                    ...state.orderForm,
                    inputName: {
                        ...state.orderForm.inputName,
                        isBlur: true
                    }
                }
            }
        case 'VALIDATE_INPUT_NAME':
            return {
                ...state,
                orderForm: {
                    ...state.orderForm,
                    inputName: {
                        ...state.orderForm.inputName,
                        isValidate: true
                    }
                }
            }



        case 'SET_INPUT_NUMBER_VALUE':
            return {
                ...state,
                orderForm: {
                    ...state.orderForm,
                    inputNumber: {
                        ...state.orderForm.inputNumber,
                        value: action.value,
                        isBlur: false,
                        isValidate: false
                    }
                }
            }
        case 'ISBLUR_INPUT_NUMBER':
            return {
                ...state,
                orderForm: {
                    ...state.orderForm,
                    inputNumber: {
                        ...state.orderForm.inputNumber,
                        isBlur: true
                    }
                }
            }
        case 'VALIDATE_INPUT_NUMBER':
            return {
                ...state,
                orderForm: {
                    ...state.orderForm,
                    inputNumber: {
                        ...state.orderForm.inputNumber,
                        isValidate: true
                    }
                }
            }
                
        default: 
            return state;
    }
}



export const getTotalCardsThunk = () => dispatch => {
    let url = 'https://run.mocky.io/v3/b7d36eea-0b3f-414a-ba44-711b5f5e528e';
    dispatch({type: 'START_REQUEST'})

    fetch(url)
        .then(data => data.json())
        .then(cards => {
            dispatch({type: 'ADD_CARDS', cards: cards})
            dispatch({type: 'FINISH_REQUEST'})
        })
                
}





