"use client"

import { LogOut } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";

const LogoutCompo = () => {
  return (
      <Button
        variant="destructive"
        className="w-full justify-start gap-2 cursor-pointer"
        onClick={() => {
          console.log("Logout clicked");
        }}
      >
        <LogOut className="h-4 w-4" />
        Logout
      </Button>
  );
};

export default LogoutCompo;
