import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div  className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Page Not Found</h1>
      <Link href="/">Return Home</Link>
    </div>
    
  )
}