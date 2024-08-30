import { FC } from "react";

interface ITableRowProps {
  name: string;
  username: string;
  email: string;
  phone: string;
}

const TableRow: FC<ITableRowProps> = ({ name, username, email, phone }) => {
  return (
    <>
      <div style={{ display: "flex", gap: "16px" }}>
        <div>{name}</div>
        <div>{username}</div>
        <div>{email}</div>
        <div>{phone}</div>
      </div>
    </>
  );
};

export default TableRow;
