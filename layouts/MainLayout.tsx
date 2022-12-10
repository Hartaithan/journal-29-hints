import { FC, PropsWithChildren } from "react";

const MainLayout: FC<PropsWithChildren> = (props) => {
  const { children } = props;
  return (
    <>
      <header>MainLayout Header</header>
      <main>{children}</main>
    </>
  );
};

export default MainLayout;
