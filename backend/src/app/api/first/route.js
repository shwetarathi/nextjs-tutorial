import { NextResponse } from "next/server";

export async function GET (){
    return NextResponse.json({"message":"first route"}, {status:200})
}