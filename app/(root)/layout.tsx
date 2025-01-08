


import SessionProvider from "@/app/providers/SessionProvider"
import Navbar  from "@/app/components/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>

        <SessionProvider>
            <Navbar />
          {children}
        </SessionProvider>
      </body>
    </html>
  )
}

