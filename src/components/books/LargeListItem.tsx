const LargeListItem = ({ data }: any) => {
  const { name, price, title, pages } = data;
  return (
    <>
      <h2>{name}</h2>
      <p>{price}</p>
      <h2>Title: </h2>
      <p>{title}</p>
      <p>No. of pages : {pages}</p>
    </>
  );
};

export default LargeListItem;
