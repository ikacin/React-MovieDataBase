import Footer from "./footer";
import React from "react";
import Header from "./header";
import "./layout.css"


const Layout = ({children}) => {
        return(
        <>
            <Header/>
            <main className={"container"}>{children}
            </main>
            <Footer/>
        </>
        )


}

export default Layout