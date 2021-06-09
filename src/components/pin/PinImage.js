import React from "react";

const PinImage = (props) => {
  const { image, title } = props;
  return (
    <>
      <img src={image} alt={title} />
    </>
  );
};
export default PinImage;
