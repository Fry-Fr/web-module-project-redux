import { TOGGLE_FAVS, ADD_FAV, REMOVE_FAV } from '../actions/movieActions'

const initialState = {
    favorites: [],
    displayFavorites: true
}

const reducer = (state=initialState, action)=>{
    switch(action.type){
        case TOGGLE_FAVS:
            return({
                ...state,
                displayFavorites: !state.displayFavorites
            });
        case ADD_FAV:
            return({
                ...state,
                favorites: [...state.favorites, action.payload]
            });
        case REMOVE_FAV:
            return({
                ...state,
                favorites: state.favorites.filter(item=> (action.payload !== item.id))
            })
        default:
            return state;
    }
}
export default reducer;