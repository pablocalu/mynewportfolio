import { configureStore } from "@reduxjs/toolkit";

const initialState = {
    language: 'es'
}

const reducer = (state = initialState, action) => {
    switch (action.type){
        case 'en':
            return {
                language: 'en'
            };
        case 'es':
            return {
                language: 'es'
            };
        default:
            return state
    }
}

const store = configureStore({
    reducer: { languages: reducer}
})

export default store;