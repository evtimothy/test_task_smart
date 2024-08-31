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
      <li className={styles.table_row}>
        <div className={styles.col} data-label="Name">
          {name}
        </div>
        <div className={styles.col} data-label="Username">
          {username}
        </div>
        <div className={styles.col} data-label="Email">
          {email}
        </div>
        <div className={styles.col} data-label="Phone">
          {phone}
        </div>
      </li>
    </>
  );
};

export default TableRow;
