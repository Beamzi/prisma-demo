"use client";

import React from "react";

import { signOut } from "next-auth/react";
function SignOutBtn() {
  return <button onClick={() => signOut()}>SignOutBtn</button>;
}

export default SignOutBtn;
