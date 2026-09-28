"use server";

import { redirect } from "next/navigation";

export async function loginAction(formData: FormData) {
  const email = formData.get("email");
  const password = formData.get("password");

  const correctEmail = "admin@test.com";
  const correctPassword = "123456";

  if (email === correctEmail && password === correctPassword) {
    redirect("/recipes");
  }

  redirect("/login?error=invalid");
}