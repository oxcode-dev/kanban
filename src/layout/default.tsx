'use client'
import Header from "@/components/layouts/Header";

const DefaultLayout = ({ children }: {children: React.ReactNode}) => {
    return (
      <html lang="en">
        <body>
          <Header />
          <main>{children}</main>
        </body>
      </html>
    )
}

export default DefaultLayout;




