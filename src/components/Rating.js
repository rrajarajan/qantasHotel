import React from 'react'

const Rating = (rating) => {
    const ratingValue = rating.ratingValue

    return (
        <span className='rating'>
            <span>
                <i style={{color: '#f8e825'}} className={ratingValue >= 1 ? 'fas fa-star' : ratingValue >= 0.5 ?'fas fa-star-half-alt' : 'far fa-star'} />
            </span>
            <span>
                <i style={{color: '#f8e825'}} className={ratingValue >= 2 ? 'fas fa-star' : ratingValue >= 1.5 ?'fas fa-star-half-alt' : 'far fa-star'} />
            </span>
            <span>
                <i style={{color: '#f8e825'}} className={ratingValue >= 3 ? 'fas fa-star' : ratingValue >= 2.5 ?'fas fa-star-half-alt' : 'far fa-star'} />
            </span>
            <span>
                <i style={{color: '#f8e825'}} className={ratingValue >= 4 ? 'fas fa-star' : ratingValue >= 3.5 ?'fas fa-star-half-alt' : 'far fa-star'} />
            </span>                                            
            <span>
                <i style={{color: '#f8e825'}} className={ratingValue >= 5 ? 'fas fa-star' : ratingValue >= 4.5 ?'fas fa-star-half-alt' : 'far fa-star'} />
            </span>                                            
        </span>
    )
}

export default Rating
