import TableRow from "./TableRow";
import { useAppSelector } from "../../store/hooks";
import { useFetchUsers } from "../../hooks/useFetchUsers";

const TableView = () => {
  useFetchUsers();

  const { users, error } = useAppSelector((store) => store.user);

  return (
    <>
      {users.map((item) => (
        <TableRow
          key={item.id}
          name={item.name}
          username={item.username}
          email={item.email}
          phone={item.phone}
        />
      ))}
    </>
  );
};

export default TableView;
