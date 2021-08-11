import React from "react";
import DividerContainer from "./index.style";

interface BasicInputInterface {
  description: string;
}
const Divider = ({ description }: BasicInputInterface): JSX.Element => {
  return <DividerContainer>{description}</DividerContainer>;
};

export default Divider;
