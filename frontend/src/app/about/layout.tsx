export default function AboutLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return(
        <>
            <h1>About Header</h1>
            {children}
        </>
    )
  }