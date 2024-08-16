"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useFormState } from "react-dom";

import { login } from "@/app/actions/auth";
import FormSubmit from "./_components/FormSubmit";

export default function RegisterPage() {
  const router = useRouter();

  // For React 18 -> useFormState
  // For React 19 -> useActionState
  const [state, formAction] = useFormState(login, { message: "" });

  useEffect(() => {
    // Prefetching is not enabled in development, only in production.
    // Prefetch the posts page
    router.prefetch("/posts");
  }, [router]);

  return (
    <div className="flex justify-center items-center mt-5">
      <form
        action={formAction}
        className="bg-white dark:bg-slate-600 p-4 rounded shadow-md w-2/3 md:w-1/2 md:max-w-[520px]"
      >
        <h2 className="text-2xl font-bold mb-4">Register</h2>
        <div className="mb-4">
          <label className="block  text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            name="name"
            type="text"
          />
        </div>
        <div className="mb-4">
          <label className="block  text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            name="email"
            type="email"
          />
        </div>
        <div className="mb-4">
          <label className="block  text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            name="password"
            type="password"
          />
        </div>
        <p aria-live="polite" className="py-1 text-rose-600 text-sm">
          {state?.message}
        </p>

        <FormSubmit />
      </form>
    </div>
  );
}
