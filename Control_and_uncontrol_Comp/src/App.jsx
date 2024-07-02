import { useState } from "react";
import ControlledForm from "./components/ControlledForm";
import ControlledModal from "./components/ControlledModal";
import UncontrolledForm from "./components/UncontrolledForm";
import UncontrolledFlow from "./components/UncontrolledFlow";
import ControlledFlow from "./components/ControlledFlow";

const StepOne = ({ goNext }) => {
  return (
    <>
      <h1> Step One: Enter your Name</h1>
      <button onClick={() => goNext({ name: "My Name" })}>Next</button>
    </>
  );
};
const StepTwo = ({ goNext }) => {
  return (
    <>
      <h1> step two: Enter your age</h1>
      <button onClick={() => goNext({ age: 19 })}>next</button>
    </>
  );
};
const StepThree = ({ goNext }) => {
  return (
    <>
      <h1> congratulations, you're qualified for the gift</h1>
      <button onClick={() => goNext({ country: "India" })}>next</button>
    </>
  );
};

function App() {
  const [shouldDisplay, setShouldDisplay] = useState(false);
  const [data, setData] = useState({});
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const goNext = (dataFromStep) => {
    setData({ ...data, ...dataFromStep });
    setCurrentStepIndex(currentStepIndex + 1);
  };

  return (
    <>
      <ControlledForm />
      <UncontrolledForm />
      <ControlledModal
        shouldDisplay={shouldDisplay}
        onClose={() => setShouldDisplay(false)}
      >
        <h1> I am the body of the Modal</h1>
      </ControlledModal>
      <button onClick={() => setShouldDisplay(!shouldDisplay)}>
        {shouldDisplay ? "Hide Modal" : "Display Modal"}
      </button>

      {/* uncontrolled Flow */}
      <UncontrolledFlow
        onDone={(data) => {
          console.log(data);
          alert("ayey ,you made it to final step");
        }}
      >
        <StepOne />
        <StepTwo />
        <StepThree />
      </UncontrolledFlow>

      {/* Controlled Flow */}
      <ControlledFlow
        currentIndex={currentStepIndex}
        onNext={goNext}
        onDone={(data) => {
          console.log(data);
          alert("yo, you made it to final step");
        }}
      >
        <StepOne />
        <StepTwo />
        {data.age > 20 && <StepThree />}
      </ControlledFlow>
    </>
  );
}

export default App;
