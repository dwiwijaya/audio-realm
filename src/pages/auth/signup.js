import Container from "@/components/layout/Container";
import SignupForm from "@/components/view/auth/SignupForm";
import WithUnprotected from "@/hoc/withUnprotected";
import React from "react";

const signup = () => {
  return <SignupForm />;
};

export default WithUnprotected(signup);
