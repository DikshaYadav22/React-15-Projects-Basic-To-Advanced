import React, { memo } from "react";
import Tour from "./Tour";

const Tours = memo(({ toursLists, removeTour }) => {
  return (
    <div className="row">
      <div className="col-md-4">
        {toursLists.map((tour, id) => {
          return <Tour tour={tour} removeTour={(id) => removeTour(id)} />;
        })}
      </div>
    </div>
  );
});

export default Tours;
