import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setFavorites, deleteFavorite } from '../actions';

import PropTypes from 'prop-types';

import '../assets/styles/components/CarouselItem.css';

const CarouselItem = ( props ) => {
    const {id, cover, title, year, contentRating, duration, isList  } = props;
    const handleSetFavorite = () => [
        props.setFavorites(
            {
                id, cover, title, year, contentRating, duration 
            }
        )

    ]
    const handleDeleteFavorite = (itemId) => {
        props.deleteFavorite(itemId)
    }
    return (
        <div className="carousel-item">
            <img className="carousel-item__img" src={cover}  alt={title} />
            <div className="carousel-item__details">
                <div>
                    <Link to={`/player/${id}`}>
                        <img src="../IMG/icons8-play-64.png" alt="play" />
                    </Link>
                    {isList 
                    ?<img onClick={() => handleDeleteFavorite(id)} src="../IMG/icons8-play-64.png" alt="delate"  /> 
                    :<img onClick={handleSetFavorite} src="../IMG/plus-icon.png" alt="Plus" /> 
                    }
                </div>
                <p className="carousel-item__details--title">{title}</p>
                <p className="carousel-item__details--subtitle">
                    {`${year} ${contentRating} ${duration}`}
                </p>
            </div>
        </div>
    );
}
    CarouselItem.propTypes = {
        cover: PropTypes.string,
        title: PropTypes.string,
        year: PropTypes.number,
        contentRating: PropTypes.string,
        duration: PropTypes.number,
    };

// export default CarouselItem

const mapDispatchToProps = {
    setFavorites,
    deleteFavorite,
}

export default connect(null, mapDispatchToProps)(CarouselItem)