import axios from "axios";
import { useState, useEffect } from "react";

export const useCurrentUser = (userId) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    (async () => {
      const res = await axios.get(`/users/${userId}`);
      setUser(res.data);
    })();
  }, [userId]);

  return user;
};
