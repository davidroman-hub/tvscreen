import { FC } from "react";

export interface HeaderProps {
  title: string;
}

const Header: FC<HeaderProps> = ({ title }) => {
  return (
    <header className="mb-10 flex justify-center flex-col items-center">
      <h1 className="text-3xl mb-5">{title}</h1>
      <div className="flex">
        <input
          type="text"
          placeholder="Search movies..."
          className="input input-sm w-64 bg-white/90 hover:bg-white focus:bg-white focus:outline-none focus:ring-2 focus:ring-white/50 transition-all placeholder:text-gray-500 pr-10"
        />
       
      </div>
    </header>
  );
};

export default Header;
