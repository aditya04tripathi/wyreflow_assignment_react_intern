import type React from "react"
import Footer from "../shared/Footer"
import Loader from "../features/Loader"
import Navbar from "../shared/Navbar"

const Layout = (
    { children }: { children: React.ReactNode }
) => {
    return (
        <div>
            <Loader />
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}

export default Layout