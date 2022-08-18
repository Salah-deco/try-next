import Head from 'next/head';
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
    return (  
        <div className="content">
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            {children}
            <Footer />
        </div>
    );
}
 
export default Layout;