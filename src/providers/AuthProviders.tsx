"use client"// ekane use client use korte hobe, but eta entire application er server compo k effect felbena

import { SessionProvider } from "next-auth/react";
import React from "react";

const AuthProviders = ({ children }: { children: React.ReactNode }) => {
  return <SessionProvider>{children}</SessionProvider>;
  {/* AuthProviders er kaj holo jate entire application e use client ortat client component theke user er information/provider access korte pari tar jonno entire application ta ei authprovider/sessionProvider diye wrap kora holo */}
};

export default AuthProviders;
