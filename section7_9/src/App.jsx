import { GreenSmallButton, RedButton } from "./components/composition";
import { RedButtonPartial, SmallRedButtonPartial } from "./components/partial";
import Recursive from "./components/recursive";

const myNestedObject = {
  key1: "value1",
  key2: {
    innerKey1: "innerValue1",
    innerKey2: {
      innerInnerKey1: "innerInnerValue1",
      innerIneerKey2: "innerInnerValue2",
    },
  },
  key3: "value3",
};

const App = () => {
  return (
    <>
      <Recursive data={myNestedObject} />

      {/* composition */}
      <RedButton text="I am red" />
      <GreenSmallButton text="I am small and green" />

      {/* partial component */}
      <RedButtonPartial text="I am red" />
      <SmallRedButtonPartial text="I am red and small" />
    </>
  );
};

export default App;
