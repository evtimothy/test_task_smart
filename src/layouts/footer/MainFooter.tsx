import styles from "./MainFooter.module.scss";

const MainFooter = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div>
          <hr />
          <p>Was developed by Evtushok Timothy for "SMART business"</p>
          <hr />
          <p>EMAIL: ev.timothy1@gmail.com</p>
        </div>
      </footer>
    </>
  );
};

export default MainFooter;
