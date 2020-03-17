import React, { useRef } from "react";
import { Separator, SeparatorBox } from "./Separator";
import { Example as Composed } from "./Composed";

import "./styles.css";

// function Inter(props) {
//   return <Title {...props} />;
// }

export default function App() {
  const ref = useRef(null);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <Separator />
      <SeparatorBox orientation="vertical" />
      <Composed orientation />
      {/* <Inter as="h1" ref={ref}>
        Yo
      </Inter> */}
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
