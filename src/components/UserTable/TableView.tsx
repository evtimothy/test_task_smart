import TableRow from "./TableRow";
import { useAppSelector } from "../../store/hooks";
import { useFetchUsers } from "../../hooks/useFetchUsers";
import { selectFilteredUsers } from "../../store/selectors/userSelectors";
import styles from "./UserTable.module.scss";
import Spinner from "../ui/Spinner/Spinner";

const TableView = () => {
  useFetchUsers();

  const userList = useAppSelector(selectFilteredUsers);
  const { isLoading } = useAppSelector((store) => store.user);

  return (
    <>
      <ul className={styles.table}>
        <li className={styles.table_header}>
          <div className={styles.col}>Name</div>
          <div className={styles.col}>Username</div>
          <div className={styles.col}>Email</div>
          <div className={styles.col}>Phone</div>
        </li>
        {isLoading ? (
          <Spinner />
        ) : (
          userList.map((item) => (
            <TableRow
              key={item.id}
              name={item.name}
              username={item.username}
              email={item.email}
              phone={item.phone}
            />
          ))
        )}
      </ul>
    </>
  );
};

export default TableView;
