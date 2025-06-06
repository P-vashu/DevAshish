"use client"

import Link from "next/link"
const Topbar = () => {
    return (
        <div id="top-bar" className="tw-top-bar tw-top-bar-angle bg-offwhite">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 text-left">

                        <div className="top-contact-info">
                            <span><i className="icon icon-phone3"></i>+91 73837 45995</span>
                            <span><i className="icon icon-envelope"></i>contact@dhanlaxmiinternational.com</span>
                        </div>
                    </div>{/* Top info end */}

                    <div className="col-md-4 col-xs-12 text-right">
                        <div className="top-social-links">
                            <span>Follow us: </span>
                            <Link target="_blank" title="Facebook" href="https://www.facebook.com/dhanlaxmiexport">
                                <span className="social-icon"><i className="fa fa-facebook"></i></span>
                            </Link>
                            <Link target="_blank" title="linkedin" href="https://www.linkedin.com/company/dhanlaxmi-intern">
                                <span className="social-icon"><i className="fa fa-linkedin"></i></span>
                            </Link>
                            <Link target="_blank" title="whatsapp" href="https://wa.me/917383745995">
                                <span className="social-icon"><i className="fa fa-whatsapp"></i></span>
                            </Link>
                            <Link target="_blank" title="Youtube" href="https://www.youtube.com/channel/UC9bU_Y98NGy8h_oVqBqcoZA">
                                <span className="social-icon"><i className="fa fa-youtube"></i></span>
                            </Link>
                        </div>
                    </div>{/* Top social end */}

                </div>

            </div>{/* Container end */}
        </div>
    )
}

export default Topbar