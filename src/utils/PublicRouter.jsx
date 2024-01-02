import React from "react";
import AppLayout from "../Layout/AppLayout";

const PublicRouter = (props) => {
  return (
    <>
      <AppLayout>{props.children}</AppLayout>
    </>
  );
};

export default PublicRouter;
