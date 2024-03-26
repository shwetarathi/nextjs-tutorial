import { NextResponse } from "next/server";
import { users } from "../../../../../lib/db";
2
export async function GET (request, par){
    const userIdParam = parseInt(par.params.id)
    const userData = users.filter((x)=>x.id === userIdParam)
    if(userData.length ===0){
        return NextResponse.json({"message":"Data not found"}, {status:400})
    }
    return NextResponse.json(userData)
}