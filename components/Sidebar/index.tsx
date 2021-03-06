
export default function Sidebar() {
    return (
        <>
            <aside id="sidebar" className="sidebar">
                <ul className="sidebar-nav" id="sidebar-nav">

                    <li className="nav-item">
                        <a href="/" className="nav-link">
                            <i className="bi bi-grid"></i>
                            <span>Dashboard</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/" className="nav-link collapsed">
                            <i className="bi bi-diagram-3"></i>
                            <span>Sinkronisasi</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse" href="#">
                            <i className="bi bi-menu-button-wide"></i><span>Master Data</span><i className="bi bi-chevron-down ms-auto"></i>
                        </a>
                        <ul id="components-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                            <li><a href="/blog"><i className="bi bi-circle"></i><span>Blog</span></a></li>
                        </ul>
                    </li>
                </ul>

            </aside>
        </>
    )
}
