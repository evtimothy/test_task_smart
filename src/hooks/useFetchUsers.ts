import { useEffect } from "react";
import { useAppDispatch } from "../store/hooks";
import { fetchUsers } from "../store/actions/userActions";

export const useFetchUsers = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
};
