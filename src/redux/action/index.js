// for add item to cart
export const addCart = (product) => {
    return{
        type: "ADDITEM",
        payload: product,
    }
}

// for detail item from cart
export const deleteCart = (product) => {
    return{
        type: "DELETEITEM",
        payload: product,
    }
}

// for reset items from cart after click button order
export const resetCart = (product) => {
    return{
        type: "RESETITEM",

    }
}
