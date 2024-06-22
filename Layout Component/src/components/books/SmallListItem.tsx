const SmallListItem = ({ data }: any) => {
  const { name, price } = data;
  return (
    <h2>
      {name}, {price}
    </h2>
  );
};

export default SmallListItem;
