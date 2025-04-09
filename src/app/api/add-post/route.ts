import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const result = await request.json()

    const { title, content} = result
    console.log({result}, 'blahblahblahc<3')

    const res = await prisma.post.create({
        data: {
            published: true,
            title: title,
            content: content,
            author: {
                create: {name: 'sally'}
            }
        }
    })

    return NextResponse.json({res})

}