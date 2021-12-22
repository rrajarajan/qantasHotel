import React from 'react'
import { ListGroup} from 'react-bootstrap';
import styled from 'styled-components';
import "./HotelDetails.scss";
import Rating from './Rating';



const Hotel = ({item}) => {
    return (
        <div class="box">
            <div class="property">
              <h3> { item.property.title } -
                    <Rating ratingValue={item.property.rating.ratingValue} />
              </h3>
              <h4> { item.property.address } </h4>
              <p> { item.offer.name } </p>
            </div>
            <div class="offer">                 
              <h5> { item.offer.cancellationOption.cancellationType } </h5>
            </div>
            <div class="price">                            
               <p class="currency"> 1 night total ({ item.offer.displayPrice.currency }) </p>
               <p class="amount">${ item.offer.displayPrice.amount } </p>
               <p class="save"> </p>     
            </div>
        </div>
    )
}

export default Hotel;
