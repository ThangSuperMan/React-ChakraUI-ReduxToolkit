import React from "react";

interface Props {
  children: React.ReactElement;
}

const Main: React.FC<Props> = ({ children }) => {
  return <div>{children}</div>;
};

export default Main;
