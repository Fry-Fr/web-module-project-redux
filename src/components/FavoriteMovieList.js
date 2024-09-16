import React from 'react';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeFav } from '../actions/movieActions';


const FavoriteMovieList = (props) => {
    const favorites = props.favorites;
    
    return (<div className="col-xs savedContainer">
        <h5>Favorite Movies</h5>
        {
            favorites.map(movie=>{
                return <div key={movie.id}>
                    <Link className="btn btn-light savedButton" to={`/movies/${movie.id}`}>
                        {movie.title}
                        <span onClick={()=> props.removeFav(movie.id)}><span class="material-icons">remove_circle</span></span>
                    </Link> 
                </div>
            })
        }
    </div>);
}

const mapToProps = (state)=>{
    return {
        favorites: state.favorites.favorites
    }
}
export default connect(mapToProps,{removeFav})(FavoriteMovieList);