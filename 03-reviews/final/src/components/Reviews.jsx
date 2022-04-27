import React, { memo, useState } from "react";
import { Card, CardHeader, CardBody, CardText, Button } from "reactstrap";
import Person from "./Data";

const Reviews = memo(() => {
  const [index, setIndex] = useState(0);
  const [person, setPerson] = useState(Person[index]);
  return (
    <div className="container mx-auto">
      <Card className="text-center">
        <CardHeader>
          <h3>Our Reviews</h3>
        </CardHeader>
        <CardBody>
          <img src={person.image} width="300" height="250" />
          <h5>{person.name}</h5>
          <span>{person.job}</span>
          <CardText>{person.text}</CardText>
        </CardBody>
      </Card>
    </div>
  );
});

export default Reviews;
