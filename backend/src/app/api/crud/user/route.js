import { NextResponse } from "next/server"
import { users } from "../../../../../lib/db"

export const GET = async (req, res) => {
    try {
        return NextResponse.json(users)
    }
    catch (err) {
        return NextResponse.json({ Message: "Error", err }, { status: 400 })
    }
}

export const POST = async (req, res) => {
    try {
        const { name } = await req.json()
        const newData = { id: users.length + 1, name }
        users.push(newData)
        return NextResponse.json({ users }, { status: 200 })

    } catch (err) {
        return NextResponse.json({ Message: "Error", err }, { status: 400 })
    }
}