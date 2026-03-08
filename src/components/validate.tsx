import { FC, useState } from "react";

export interface ValidateProps {
  setValidate: any;
}

const Validate: FC<ValidateProps> = ({ setValidate }) => {
  const [values, setValeus] = useState({
    username: "",
    password: "",
  });

  const onSubmit = (e: any) => {
    e.preventDefault();
    if (
      values.username === process.env.REACT_APP_USERNAME &&
      values.password === process.env.REACT_APP_PASS
    ) {
      setValidate(true);
    } else {
      alert("Pass/username incorrecto");
      setValidate(false);
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="username">User</label>
        <input
          value={values.username}
          onChange={(e) => {
            setValeus({ ...values, username: e.target.value });
          }}
          className="input input-sm w-100 focus:outline-none focus:ring-2 transition-all placeholder:text-gray-100 pr-10"
          id="username"
          name="username"
          type="text"
        />
        <label htmlFor="password">Pass</label>
        <input
          value={values.password}
          className="input input-sm w-100 focus:outline-none focus:ring-2 transition-all placeholder:text-gray-100 pr-10"
          onChange={(e) => {
            setValeus({ ...values, password: e.target.value });
          }}
          id="password"
          name="password"
          type="password"
        />
        <button className="btn mt-3 btn-gradient btn-primary" type="submit">
          Enter/Entrar
        </button>
      </form>
    </div>
  );
};

export default Validate;
