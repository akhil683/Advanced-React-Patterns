import React, { useState } from "react";

// Flow of mutliple steps one after the other at onDone function at last step
const ControlledFlow = ({ children, onDone, onNext, currentIndex }) => {
  const goNext = (dataFromStep) => {
    onNext(dataFromStep);
  };
  const currentChild = React.Children.toArray(children)[currentIndex]; // [<StepOne />, <StepTwo />, <StepThree />]

  if (React.isValidElement(currentChild)) {
    return React.cloneElement(currentChild, { goNext });
  }
  return currentChild;
};

export default ControlledFlow;
