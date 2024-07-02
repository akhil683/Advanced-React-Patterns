import React, { useState } from "react";

// Flow of mutliple steps one after the other at onDone function at last step
const UncontrolledFlow = ({ children, onDone }) => {
  const [data, setData] = useState({});
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const goNext = (dataFromStep) => {
    const nextStepIndex = currentStepIndex + 1;
    const newData = {
      ...data,
      ...dataFromStep,
    };
    setData(newData);

    console.log(newData);
    if (nextStepIndex < children.length) {
      setCurrentStepIndex(nextStepIndex);
    } else {
      onDone(newData);
    }
  };

  const currentChild = React.Children.toArray(children)[currentStepIndex]; // [<StepOne />, <StepTwo />, <StepThree />]

  if (React.isValidElement(currentChild)) {
    return React.cloneElement(currentChild, { goNext });
  }
  return currentChild;
};

export default UncontrolledFlow;
