const SmallAuthorItem = ({ data }: any) => {
  const { name, age } = data;

  return (
    <p>
      Name: {name}, Age: {age}
    </p>
  );
};

export default SmallAuthorItem;
