import React from "react";
import Wrapper from "../assets/wrappers/ErrorPage";
import { Link, useRouteError } from "react-router-dom";
import img from "../assets/not-found.svg";

const Error = () => {
  const error = useRouteError();

  if (error.status === 404) {
    return (
      <Wrapper>
        <div>
          <img src={img} alt="not found" />
          <h3>ohh!</h3>
          <p>We can't seem to find page you are looking for</p>
          <Link to="/">Back Home</Link>
        </div>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <div>
        <img src={img} alt="not found" />
        <h3>ohh!</h3>
        <Link to="/">Back Home</Link>
      </div>
    </Wrapper>
  );
};

export default Error;
