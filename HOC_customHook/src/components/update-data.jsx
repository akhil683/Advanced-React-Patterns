import { useEffect, useState } from "react";
import axios from "axios";

export const updateUser = (Component, userId) => {
  return (props) => {
    const [initialUser, setInitialUser] = useState(null);
    const [user, setUser] = useState(null);

    useEffect(() => {
      (async () => {
        const response = await axios.get(`/users/${userId}`);
        setInitialUser(response.data);
      })();
    });
    const onChangeUser = (updates) => {
      setUser({ ...user, ...updates });
    };
    const onPostUser = async () => {
      const response = await axiox.post(`/users/${userId}`, { user });
      initialUser(response.data);
      setUser(response.data);
    };
    const onResetUser = () => {
      setUser(initialUser);
    };

    return (
      <Component
        {...props}
        user={user}
        onChangeUser={onChangeUser}
        onPostUser={onPostUser}
        onResetUser={onResetUser}
      />
    );
  };
};
