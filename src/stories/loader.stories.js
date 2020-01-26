import React from "react";
import Loader from "../loader/index";

export default {
  title: "Loader",
  component: Loader
};

export const Loading = () => <Loader />;

export const LoadingColored = () => <Loader color="red" />;

