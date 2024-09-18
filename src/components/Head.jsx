import React from "react";
const Head = () => {
  console.log("Heaerder rendered");
  return <div>Head</div>;
};

export default React.memo(Head);
