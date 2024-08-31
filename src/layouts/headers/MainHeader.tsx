import styles from "./MainHeader.module.scss";

const MainHeader = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header_main}>
          <h1 className={styles.title}>TEST TASK FOR "SMART"</h1>
        </div>
      </header>
    </>
  );
};

export default MainHeader;
