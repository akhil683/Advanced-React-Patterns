const RegularList = ({ items, ItemComponent }: any) => {
  return (
    <>
      {items.map((item: any) => (
        <ItemComponent key={item.name} data={item} />
      ))}
    </>
  );
};

export default RegularList;
