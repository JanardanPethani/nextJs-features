"use client";
import { PropsWithChildren, useState } from "react";

export default function Template({ children }: PropsWithChildren) {
  const [feedback, setFeedback] = useState("");
  return (
    <>
      {children}

      {/* If below input added to Layout then enterd values won't reset on route change */}
      <div className="absolute bottom-0 flex items-center gap-2 h-9 p-2">
        <label htmlFor="feedback" className="w-max text-nowrap">
          Your UX Feedback
        </label>
        <input
          className="shadow appearance-none border rounded w-full px-3 leading-tight focus:outline-none focus:shadow-outline"
          id="feedback"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        />
      </div>
    </>
  );
}
