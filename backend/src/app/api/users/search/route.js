import { NextResponse } from "next/server";

//http://localhost:3000/api/users/search?name=john&age=22 -> Fixed query params
// export async function GET (req){ 
//     const {searchParams} = new URL(req.url)
//     const name = searchParams.get('name')
//     const age = searchParams.get('age')
//     if(name && age){
//         return NextResponse.json({name, age}, {status:200})
//     }
//     return NextResponse.json({"message":"Data not found"}, {status:400})
// }
//For dynamic quert params
export async function GET (req){ 
    const {searchParams} = new URL(req.url)
    const obj = Object.fromEntries(searchParams.entries())
    return NextResponse.json({obj}, {status:200})
}