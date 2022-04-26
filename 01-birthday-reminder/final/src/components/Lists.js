import React, { memo } from "react";
import { Card, CardHeader, CardBody, CardTitle, Button } from "reactstrap";

const Lists = memo(({ inputLists, setLists }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          {" "}
          <h3 className="text-center">Birthday Reminder</h3>
          <h5>{inputLists.length} Birthday today</h5>
        </CardTitle>
      </CardHeader>
      <div className="row">
        {inputLists.map((input) => {
          return (
            <div className="col-md-4">
              <CardBody>
                <img src={input.image} width="450" height="250" />
                <h6>{input.name}</h6>
                <strong>{input.age}</strong>
              </CardBody>
            </div>
          );
        })}
      </div>
      <Button onClick={() => setLists([])}>Clear All</Button>
    </Card>
  );
});

export default Lists;
