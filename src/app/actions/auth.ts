"use server";

import { redirect } from "next/navigation";

export async function login(prevState: any, formData: FormData) {
  const res = await new Promise((resolve) => {
    if (!formData.get("email") || !formData.get("password")) {
      setTimeout(() => resolve({ ok: false }), 2000);
    } else {
      setTimeout(() => resolve({ ok: true }), 1000);
    }
  });

  if (!res.ok) {
    return { message: "Please enter valid details" };
  }

  redirect("/posts");
}
