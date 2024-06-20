const LargeAuthorItem = ({ data }: any) => {
  const { name, age, country, books } = data;

  return (
    <>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Country: {country}</p>
      <ul>
        {books.map((book: string) => (
          <li key={book}>{book}</li>
        ))}
      </ul>
    </>
  );
};

export default LargeAuthorItem;
