import TableRow from "./TableRow";
import { useAppSelector } from "../../store/hooks";
import { useFetchUsers } from "../../hooks/useFetchUsers";
import { selectFilteredUsers } from "../../store/selectors/userSelectors";

const TableView = () => {
  useFetchUsers();

  const userList = useAppSelector(selectFilteredUsers);

  return (
    <>
      {userList.map((item) => (
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
