const SplitScreen = ({ children, LeftWidth = "1", RightWidth = "1" }: any) => {
  const [Left, Right] = children;

  return (
    <div className="flex">
      <div className={`flex-${LeftWidth}`}>{Left}</div>
      <div className={`flex-${RightWidth}`}>{Right}</div>
    </div>
  );
};
export default SplitScreen;
