import React from "react";
import { Box } from "reakit";

function Title(props) {
  console.log(props.ref);
  return <Box as="p" {...props} />;
}

export { Title };
