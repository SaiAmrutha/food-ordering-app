import { useRouteError } from "../../node_modules/react-router-dom/dist/index";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <h1>OOPS!!!!!!!</h1>
      <h2>Something is terriblyyyy wronggg</h2>
      <h3>
        {err.status}:{err.statusText}
      </h3>
    </div>
  );
};

export default Error;
