"use server"; //server action func e convert kora holo,jate browser e log er kisui deka na jai, colse e deka jabe ,server er

import { FieldValues } from "react-hook-form";

export const UserRegisterServerActionFunc = async (data: FieldValues) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/user/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const response = await res.json();

    if (!res.ok) {
      console.error("User Registration failed!", response);
      return {
        success: false,
        message: response.message || "Registration failed",
      };
    }

    console.log("User Registration success:", response);
    return response;
  } catch (error: any) {
    console.error("User Registration failed! Unexpected error:", error);
    return { success: false, message: error.message || "Unexpected error" };
  }
};

// -------------user login server action func ----------

export const UserLoginServerActionFunc = async (data: FieldValues) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const response = await res.json();

    if (!res.ok) {
      console.error("User Login failed!", response);
      return { success: false, message: response.message || "Login failed" };
    }

    console.log("User Login success :", response);
    return response;
  } catch (error: any) {
    console.error("User Login failed! Unexpected error:", error);
    return { success: false, message: error.message || "Unexpected error" };
  }
};
