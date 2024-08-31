import styles from "./Spinner.module.scss"

const Spinner = () => {
  return (
    <>
    <div className={styles.container}>
      <div className={styles.loader} />
      </div>
    </>
  );
};

export default Spinner;
