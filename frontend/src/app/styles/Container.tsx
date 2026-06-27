import { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full mx-auto sm:max-w-167.5 px-5 sm:px-0">{children}</div>
  );
};

export default Container;
