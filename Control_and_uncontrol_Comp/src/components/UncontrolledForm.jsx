import React from "react";

//uncontrolled component
const UncontrolledForm = () => {
  const nameInputRef = React.createRef();
  const ageInputRef = React.createRef();

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(nameInputRef.current.value);
    console.log(ageInputRef.current.value);
  };

  return (
    <form onSubmit={submitHandler}>
      <input name="name" type="text" placeholder="Name" ref={nameInputRef} />
      <input name="age" type="text" placeholder="Age" ref={ageInputRef} />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default UncontrolledForm;
