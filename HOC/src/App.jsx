import { logProps } from "./components/check-props";
import { includeUser } from "./components/data-loading";
import { UserInfoForm } from "./components/user-form";
import { UserInfo } from "./components/user-info";

const UserInfoWrapper = logProps(UserInfo);
const UserInfoWithLoader = includeUser(UserInfo, "3");

function App() {
  return (
    <>
      <UserInfoWrapper test="test" b="I am b" />
      <UserInfoWithLoader />
      <UserInfoForm />
    </>
  );
}

export default App;
