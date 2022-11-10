import React from "react";
interface IPROPS {
  name: string;
}
const Child: React.FC<IPROPS> = ({ name }) => {
  return (
    <div>
      <p>`Name ${name}`</p>
    </div>
  );
};

export default Child;
