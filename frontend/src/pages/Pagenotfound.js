import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "./../components/Layout/Layout";

const Pagenotfound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to the menu page after 3 seconds
    const timer = setTimeout(() => {
      navigate("/menu"); // Change "/menu" to the desired path
    }, 3000);

    // Cleanup the timer on component unmount
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <Layout>
      <div>
        <h1>Page Not Found</h1>
        <p>Redirecting to the menu page...</p>
      </div>
    </Layout>
  );
};

export default Pagenotfound;
