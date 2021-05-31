import React from "react";

const PinsList = (props) => {
  const { title, image } = props;
  console.log(props);
  return (
    <div>
      <img src={image} alt={title} />
      <p>{title}</p>
    </div>
  );
};

export default PinsList;
