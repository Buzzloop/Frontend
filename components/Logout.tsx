"use client";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";

export function Logout() {
  const { data: session } = useSession();

  if (session) {
    return (
      <button
        onClick={() => signOut()}
        className="fixed top-4 right-4 bg-indigo-500 text-white px-4 py-2 rounded-md"
      >
        Logout
      </button>
    );
  }
  return (
    <button
      onClick={() => signIn()}
      className="fixed top-4 right-4 bg-indigo-500 text-white px-4 py-2 rounded-md"
    >
      Login
    </button>
  );
}
