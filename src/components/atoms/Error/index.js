import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  return (
    <>
      <h2>{error.data}</h2>
      <h3>
        {error.status} : {error.statusText}
      </h3>
    </>
  );
};

export default Error;
