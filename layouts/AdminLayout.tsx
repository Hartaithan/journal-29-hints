import { FC, PropsWithChildren } from "react";

const AdminLayout: FC<PropsWithChildren> = (props) => {
  const { children } = props;
  return (
    <>
      <header>AdminLayout Header</header>
      {children}
    </>
  );
};

export default AdminLayout;
