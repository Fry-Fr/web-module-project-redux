export const DELETE_MOVIE = "DELETE_MOVIE";
export const ADD_MOVIE = "ADD_MOVIE";
export const TOGGLE_FAVS = "TOGGLE_FAVS";
export const ADD_FAV = "ADD_FAV";

export const deleteMovie = (id)=>{
    return({type: DELETE_MOVIE, payload:id});
}
export const addMovie = (data)=>{
    return({type: ADD_MOVIE, payload: data})
}
export const toggleFavs = ()=>{
    return({type: TOGGLE_FAVS})
}
export const addFav = (data)=>{
    return({type: ADD_FAV, payload: data})
}