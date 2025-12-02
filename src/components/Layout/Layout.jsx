import { Outlet, useLocation } from "react-router-dom"
import Footer from "./Footer"
import Header from "./Header"
import ErrorBoundary from "../ErrorBoundary"

const Layout = () => {
    const location = useLocation();
    return (
        <>
            <Header />
            <main>
                <ErrorBoundary key={location.pathname}>
                    <Outlet />
                </ErrorBoundary>
            </main>
            <Footer />
        </>
    )
}

export default Layout