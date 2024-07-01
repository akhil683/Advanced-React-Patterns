import UserInfo from "./components/UserInfo";
import CurrentUserLoader from "./components/current-user-loader";
import ResourceLoader from "./components/resource-loader";
import UserLoader from "./components/user-loader";
import DataSource from "./components/data-source";
import DataSourceRenderProp from "./components/data-source-render-prop";

const getDataFromServer = async (url) => {
  const response = await axios.get(url);
  return response.data;
};

//it is not async function
const getDataFromLocalStorage = (key) => () => {
  return localStorage.getItem(key);
};

const Message = ({ msg }) => <h1>{msg}</h1>;

function App() {
  return (
    <>
      <ResourceLoader resourceUrl={"/users/2"} resourceName="users">
        <UserInfo />
      </ResourceLoader>
      <CurrentUserLoader>
        <UserInfo />
      </CurrentUserLoader>
      <UserLoader userId="1">
        <UserInfo />
      </UserLoader>
      <UserLoader userId="2">
        <UserInfo />
      </UserLoader>
      <UserLoader userId="3">
        <UserInfo />
      </UserLoader>

      <DataSourceRenderProp
        getData={() => getDataFromServer(url)}
        render={(resource) => <UserInfo user={resource} />}
      />

      <DataSource
        getData={() => getDataFromLocalStorage("key")}
        resource={"message"}
      >
        <Message />
      </DataSource>
    </>
  );
}

export default App;
