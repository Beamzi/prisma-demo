"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddPost() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  async function sendPost(event) {
    event.preventDefault();

    try {
      await fetch("/api/add-post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title: title, content: content }),
      });
      router.refresh();
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <form onSubmit={sendPost}>
      <label>
        title
        <input
          onChange={(event) => setTitle(event.target.value)}
          value={title}
          className="border-2"
          type="text"
        ></input>
      </label>
      <label>
        content
        <input
          onChange={(event) => setContent(event.target.value)}
          value={content}
          className="border-2"
          type="text"
        ></input>
      </label>
      <button className="border-2" type="submit">
        submit
      </button>
    </form>
  );
}
