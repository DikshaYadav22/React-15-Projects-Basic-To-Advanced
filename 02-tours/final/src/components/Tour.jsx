import React, { memo } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
const Tour = memo(({ tour, removeTour }) => {
  return (
    <Card>
      <CardImg
        top
        src={tour.image}
        width="250"
        height="100"
        alt="Card image cap"
      />
      <CardBody>
        <CardTitle>
          <h5>{tour.name}</h5>
        </CardTitle>
        <CardSubtitle>
          <h6>{tour.info}</h6>
        </CardSubtitle>
        <CardText>
          <h6>Rs. {tour.price}</h6>
        </CardText>
        <Button onClick={() => removeTour(tour.id)}>Not Interested</Button>
      </CardBody>
    </Card>
  );
});

export default Tour;
