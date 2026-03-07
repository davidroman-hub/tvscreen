import { FC } from "react";

export interface HeaderProps {
  title: string;
}

const Header: FC<HeaderProps> = ({ title }) => {
  return (
    <div className="header-container">
      <input type="text" placeholder="Type here" className="input" />
    </div>
  );
};

export default Header;
