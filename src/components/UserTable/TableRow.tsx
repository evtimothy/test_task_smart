import { FC } from "react";
import styles from "./UserTable.module.scss";

interface ITableRowProps {
  name: string;
  username: string;
  email: string;
  phone: string;
}

const TableRow: FC<ITableRowProps> = ({ name, username, email, phone }) => {
  return (
    <>
      <div className={styles.table_row}>
        <div>{name}</div>
        <div>{username}</div>
        <div>{email}</div>
        <div>{phone}</div>
      </div>
    </>
  );
};

export default TableRow;
