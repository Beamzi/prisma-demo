"use client";
import { useRouter } from "next/navigation";

export function RemovePostBtn({ id }: { id: string }) {
  const router = useRouter();
  async function remove() {
    try {
      await fetch("/api/delete-post", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });
      router.refresh();
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <button onClick={remove} className="bg-red-900">
      remove
    </button>
  );
}
