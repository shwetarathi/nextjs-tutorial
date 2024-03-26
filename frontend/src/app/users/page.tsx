import React from "react";
import getAllUsers from "../../../lib/getAllUsers";
import Link from "next/link";

const Users = async () => {
    const users = await getAllUsers()
    return (
        <>
            {users.map(((user: any) => {
                return (
                    <>
                        <Link href={`/users/${user.id}`}>
                            {user.name}
                        </Link>
                        <br/>
                    </>
                )
            }))}</>
    )
}

export default Users;