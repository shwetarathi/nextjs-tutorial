export default async function getUserData(userid: number){
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userid}`, {next: {revalidate:60} })
    if(!res.ok) throw new Error("Invalid")
    
    return res.json()
}