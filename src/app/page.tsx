import React from "react";
import Post from "@/components/Post";
import prisma from "@/lib/prisma";
import { auth } from "../../auth";
import SignOutBtn from "@/components/SignOutBtn";
import Link from "next/link";

async function getPosts() {
  const allPosts = await prisma.post.findMany({
    where: { published: true },
    include: {
      author: {
        select: { name: true },
      },
    },
  });

  console.log(
    "Full post data with authors:",
    JSON.stringify(allPosts, null, 2)
  );

  return allPosts;
}

export default async function home() {
  const allPosts = await getPosts();
  const session = await auth();
  console.log({ session });

  return (
    <div>
      {session?.user?.name && <h2>hello {session?.user?.name}</h2>}
      {allPosts.map((item) => (
        <Post
          key={item.id}
          author={item.author?.name}
          title={item.title}
          content={item.content}
          id={item.id}
        ></Post>
      ))}
      {session ? (
        <SignOutBtn></SignOutBtn>
      ) : (
        <Link href="/sign-in">Sign In</Link>
      )}
    </div>
  );
}
