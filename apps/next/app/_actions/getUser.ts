"use server";

import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

export async function getUser() {
  const session = getServerSession(authOptions);
  return session;
}
