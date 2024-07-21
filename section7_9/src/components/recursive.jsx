const Recursive = ({ data }) => {
  const isObject = (data) => typeof data === "object" && data !== null;
  if (!isObject(data)) {
    return <li>{data}</li>;
  }

  const pairs = Object.entries(data); // return array contain key-value  pairs of data object
  return (
    <>
      {pairs.map(([key, value]) => (
        <li>
          {key}:
          <ul>
            <Recursive data={value} />
          </ul>
        </li>
      ))}
    </>
  );
};

export default Recursive;
