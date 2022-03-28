import Head from "next/head";
import { ReactNode } from "react";
import Footer from "../Footer";
import Header from "../Header";
import Sidebar from "../Sidebar";
import Script from "next/script";

interface LayoutProps {
    children: ReactNode;
    pgTitle: string;
}
export default function Layout(props: LayoutProps) {
    const { children, pgTitle } = props;
    return (
        <>
            <Head>
                <title>Berkarisma | {pgTitle}</title>
                <meta name="description" content="SMAN 3 Slawi Berkarisma" />
            </Head>
            <Header />
            <Sidebar />
            <main id="main" className="main dark">
                <div>
                    {children}
                </div>
            </main>
            <Footer />
            {/* VendorJs */}

            <script type="text/javascript" src="./assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
            <script type="text/javascript" src="./assets/vendor/simple-datatables/simple-datatables.js"></script>
            <script type="text/javascript" src="./assets/vendor/tinymce/tinymce.min.js"></script>
            <script type="text/javascript" src="./assets/vendor/php-email-form/validate.js"></script>




        </>
    );
}
