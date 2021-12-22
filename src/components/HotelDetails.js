import React, { useState } from "react";
import Data from "../data.json";
import { ListGroup, Row, Col, Button} from 'react-bootstrap';
import Hotel from "./Hotel";
import styled from 'styled-components';
import "./HotelDetails.scss";

function HotelDetails() {
  const [jsonData, setJsonData] = useState(Data[0].results);
  const sortByAcen = () => {
    setJsonData((jsonData) => {
      const dataToSort = [...jsonData];
      dataToSort.sort(
        (a, b) =>
          Number(a.offer.displayPrice.amount) -
          Number(b.offer.displayPrice.amount)
      );
      return dataToSort;
    });
  };
  const sortByDesc = () => {
    setJsonData((jsonData) => {
      const dataToSort = [...jsonData];
      dataToSort.sort(
        (b, a) =>
          Number(a.offer.displayPrice.amount) -
          Number(b.offer.displayPrice.amount)
      );
      return dataToSort;
    });
  };  

  const H2 = styled.h2`
      font-size: 1rem;
      margin-top: 2rem;
      margin-bottom: 2rem;
  `
  const hotelCount = Data[0].results.length;

  return (
    <div>
      <H2>{hotelCount} <span class="italics">hotels in</span> Sydney</H2>
      <div className="Details">
        Sort by:{" "}
        <Button variant="outline-primary" onClick={sortByAcen}>
          Price low-high
        </Button>
        <Button variant="outline-primary" onClick={sortByDesc}>
          Price low-high
        </Button>        
        {jsonData &&
          jsonData.map((item, index) => {
            return (
              <Row key={index}>
                <Col className="ListWrapper" sm={2}>
                    <div class="ImageWrapper">
                      <img class="ListWrapper" src={item.property.previewImage.url} alt={item.property.previewImage.caption} /> 
                      <p> {item.property.previewImage.imageType} </p>
                  </div>               
                </Col>
                <Col className="ListWrapper" sm={10}>
                  <Hotel item={item}/>
                </Col>                       
              </Row>
            );
          })}
      </div>
    </div>
  );
}

export default HotelDetails;
