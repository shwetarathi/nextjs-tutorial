import { NextResponse } from "next/server"
import { users } from "../../../../../../lib/db"

export const GET = async (req, res) => {
    try {
        const id = req.url.split('/user/')[1]
        const userData = users.filter((user)=>user.id.toString() === id)
        if(userData.length===0){
            return NextResponse.json({message:"user data not found"})
        }
        return NextResponse.json({ userData }, { status: 200 })
    } catch (err) {
        return NextResponse.json({ Message: "Error", err }, { status: 400 })
    }
}

export const DELETE = async (req, res) => {
    try {
        const id = req.url.split('/user/')[1]
        const userIndex = users.findIndex((user)=>user.id.toString() === id)
        if(userIndex === -1){
            return NextResponse.json({message:"user data not found"})
        }
        users.splice(userIndex, 1)
        return NextResponse.json({ users }, { status: 200 })
    } catch (err) {
        return NextResponse.json({ Message: "Error", err }, { status: 400 })
    }
}

export const PUT = async (req, res) => {
    try {
        const id = req.url.split('/user/')[1]
        const userData = users.find((user)=>user.id.toString() === id)
        const {name} = await req.json()
        userData.name = name;
        return NextResponse.json({ users }, { status: 200 })
    } catch (err) {
        return NextResponse.json({ Message: "Error", err }, { status: 400 })
    }
}
