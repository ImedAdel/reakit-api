import React, { useState } from "react";
import { Box, useCheckboxState, useCheckbox, useBox } from "reakit";

function Example(props) {
  const options = useState();
  // Composing Checkbox and Button together
  console.log(useBox);
  const htmlProps = useBox(options, { orientation: "horizontal" });
  console.log(htmlProps);
  return (
    <Box as="h1" {...htmlProps}>
      {options.state ? "😄 Happy" : "😞 Sad"}
    </Box>
  );
}

export { Example };
