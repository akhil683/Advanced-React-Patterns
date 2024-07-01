import { useState, useEffect } from "react";

const ControlledForm = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const [error, setError] = useState("");

  useEffect(() => {
    if (name.length < 1) {
      setError("name cannot be empty");
    } else {
      setError("");
    }
  }, [name]);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(name, age);
  };

  return (
    <form onSubmit={submitHandler}>
      {error && <p>{error}</p>}
      <input
        name=""
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        name="age"
        type="text"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ControlledForm;
