import Link from "next/link";

export default function Footer() {
    return (
        <>

            {/* // < !-- ======= Footer ======= --> */}
            <footer id='footer' className='footer'>
                <div className='copyright'>
                    &copy; Copyright <strong><span>Tim Dapodik SMAN 3 Slawi</span></strong>. All Rights Reserved
                </div>
                <div className='credits'>
                    Made with love &hearts;
                </div>
            </footer >
            <Link href="#"><a className="back-to-top d-flex align-items-center justify-content-center"><i
                className="bi bi-arrow-up-short"></i></a></Link>

        </>
    )
}
