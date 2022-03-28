import Layout from '../components/Layout';
import Script from 'next/script';

export default function Blog() {
    return (
        <>
            <Layout pgTitle='Blog Pages'>
                <div className='pagetitle'>
                    <h1>Blog Page Tags</h1>
                    <nav>
                        <ol className='breadcrumb'>
                            <li className='breadcrumb-item'>Home</li>
                            <li className='breadcrumb-item active'>Blog</li>
                        </ol>
                    </nav>
                </div>
                <section className='section dashboard'>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <div className='row'>
                                <div className='col-xxl-4 col-xl-12'>
                                    <div className='card info-card customers-card'>
                                        <div className='filter'>
                                            <a className='icon' href='#' data-bs-toggle='dropdown'><i className='bi bi-ui-checks'></i> Aksi</a>
                                            <ul className='dropdown-menu dropdown-menu-end dropdown-menu-arrow'>
                                                <li className='dropdown-header text-start'>
                                                    <h6>Aksi</h6>
                                                </li>
                                                <li><a className='dropdown-item' href='#'>Tambah Data</a></li>
                                                <li><a className='dropdown-item' href='#'>Export Excel</a></li>
                                            </ul>
                                        </div>

                                        <div className='card-body'>
                                            <h5 className='card-title'>Data Blog</h5>



                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>

                    </div>
                </section>

            </Layout >
        </>
    );
}
