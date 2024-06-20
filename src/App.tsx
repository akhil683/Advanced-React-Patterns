import RegularList from "./components/Lists/RegularList.tsx";
import SplitScreen from "./components/SplitScreen.tsx";
import LargeAuthorItem from "./components/authors/LargeListItem.tsx";
import SmallAuthorItem from "./components/authors/SmallListItem.tsx";
import LargeListItem from "./components/books/LargeListItem.tsx";
import SmallListItem from "./components/books/SmallListItem.jsx";

import { authors } from "./data/author.ts";
import { books } from "./data/books.ts";

const LeftSide = ({ title }: any) => {
  return <h2 className="bg-red-400">{title}</h2>;
};

const RightSide = ({ title }: any) => {
  return <h2 className="bg-green-400">{title}</h2>;
};

const App = () => {
  return (
    <>
      <SplitScreen LeftWidth={"none"} RightWidth={1}>
        <LeftSide title="Left" />
        <RightSide title="Right" />
      </SplitScreen>

      <p className="mt-6"> Author List</p>
      <RegularList items={authors} ItemComponent={SmallAuthorItem} />
      <RegularList items={authors} ItemComponent={LargeAuthorItem} />

      <p className="mt-6">Books List</p>
      <RegularList items={books} ItemComponent={LargeListItem} />
      <RegularList items={books} ItemComponent={SmallListItem} />
    </>
  );
};

export default App;
