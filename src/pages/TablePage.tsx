import TableView from "../components/UserTable/TableView";
import styles from "./TablePage.module.scss";

const TablePage = () => {
  return (
    <>
      <div className={styles.container}>
        <TableView />
      </div>
    </>
  );
};

export default TablePage;
