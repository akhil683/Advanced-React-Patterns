import axios from "axios";
import { useCurrentUser } from "./currentUserHook";
import { useResource } from "./hooks/resourceHook";
import { useCallback } from "react";

const fetchData = (resourceUrl) => async () => {
  const res = await axios.get(resourceUrl);
  return res.data;
};
const getFromLocalStorage = (key) => () => {
  return localStorage.getItem(key);
};

export const UserInfo = ({ userId }) => {
  //const user = useCurrentUser({userId})
  const fetchUser = useCallback(fetchData(`/users/${userId}`), [userId]); // to prevent infinite re-render bcuz of creation of new instance of fetchData function
  const user = useResource(fetchUser);
  const message = useResource(getFromLocalStorage("msg"));
  const { name, age, country, books } = user || {};

  return user ? (
    <>
      <h2>{name}</h2>
      <p>Age: {age} years</p>
      <p>country: {country}</p>
      <h2>Boooks</h2>
      <ul>
        {books.map((book) => (
          <li key={book}>{book}</li>
        ))}
      </ul>
    </>
  ) : (
    <h2>Loading...</h2>
  );
};
