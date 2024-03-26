import React from "react";
import getUserData from "../../../../lib/getUserData";
import getAllUsers from "../../../../lib/getAllUsers";

export async function generateStaticParams() {
    const users = await getAllUsers()
    return users.map((user:any)=>({
        userId: user.id.toString()
    }))
}

const User = async({params}:any) => {
    const userData =  await getUserData(params.userid)
    const {name, username, email, website, phone} = userData
    return(
        <div className="flex justify-center mt-10">
            Name: {name}
            <br/>
            UserName: {username}
            <br/>
            Email: {email} 
            <br/>
            Website: {website}
            <br/>
            Phone number: {phone}
        </div>
    )
}

export default User