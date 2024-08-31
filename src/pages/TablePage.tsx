import FilterForm from "../components/FilterForm/FilterForm";
import TableView from "../components/UserTable/TableView";
import styles from "./TablePage.module.scss";

const TablePage = () => {
  return (
    <>
      <div className={styles.container}>
        <FilterForm />
        <TableView />
      </div>
    </>
  );
};

export default TablePage;
