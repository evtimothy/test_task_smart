import clsx from "clsx";
import { FC, InputHTMLAttributes } from "react";
import styles from "./DefaultInput.module.scss";

type DefaultInputProps = InputHTMLAttributes<HTMLInputElement>;

const DefaultInput: FC<DefaultInputProps> = ({ className, autoComplete, ...props }) => {
  return (
    <>
      <input {...props} type="text" className={clsx(styles.input, className)} />
    </>
  );
};

export default DefaultInput;
