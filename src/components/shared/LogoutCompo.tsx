"use client";

import { LogOut } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import { signOut, useSession } from "next-auth/react";

const LogoutCompo = () => {
  const session = useSession();
  console.log(session);

  return (
    <div>
     {session?.status ==="authenticated" && <Button
        variant="destructive"
        className="w-full justify-start gap-2 cursor-pointer"
        onClick={() => signOut()}
      >
        <LogOut className="h-4 w-4" />
        Logout
      </Button>}
    </div>
  );
};

export default LogoutCompo;
