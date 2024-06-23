const BookInfo = ({ book }) => {
  const { name, price, title, pages } = book || {};

  return (
    <>
      <h3>{name}</h3>
      <p>{price}</p>
      <h3>Title: {title}</h3>
      <p>Number of Pages: {pages}</p>
    </>
  );
};

export default BookInfo;
