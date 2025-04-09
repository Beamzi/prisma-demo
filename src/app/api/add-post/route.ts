import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { auth } from "../../../../auth";


export async function POST(request: Request) {
    const result = await request.json()
    const session = await auth()

    const { title, content } = result
    console.log({result}, 'blahblahblahc<3')

    const res = await prisma.post.create({
        data: {
            published: true,
            title: title,
            content: content,
            author: {
                connect: {id: session?.user?.id}
            }
        }
    })

    return NextResponse.json({res})

}