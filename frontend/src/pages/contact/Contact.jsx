import React from 'react'

const Contact = () => {
    return (
        <section className="contact">
            <div className="contact-wrapper">

                {/* Location */}
                <div className="contact-item">
                    <div className="contact-item-icon">
                        <i className="bi bi-geo-alt-fill"></i>
                        Location
                    </div>
                    <p className="contact-item-text">
                        Turkey <br />
                        (Originally from Deir ez-Zor, Syria)
                    </p>
                </div>

                {/* Email */}
                <div className="contact-item">
                    <div className="contact-item-icon">
                        <i className="bi bi-envelope-fill"></i>
                        Email
                    </div>
                    <p className="contact-item-text">
                        <a href="mailto:sahir.alzakaria@gmail.com">
                            sahir.alzakaria@gmail.com
                        </a>
                    </p>
                </div>

                {/* Portfolio */}
                <div className="contact-item">
                    <div className="contact-item-icon">
                        <i className="bi bi-globe"></i>
                        Portfolio
                    </div>
                    <p className="contact-item-text">
                        <a
                            href="https://sahiralzakaria.github.io/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            sahiralzakaria.github.io
                        </a>
                    </p>
                </div>

                {/* GitHub */}
                <div className="contact-item">
                    <div className="contact-item-icon">
                        <i className="bi bi-github"></i>
                        GitHub
                    </div>
                    <p className="contact-item-text">
                        <a
                            href="https://github.com/sahiralzakaria"
                            target="_blank"
                            rel="noreferrer"
                        >
                            github.com/sahiralzakaria
                        </a>
                    </p>
                </div>

                {/* LinkedIn */}
                <div className="contact-item">
                    <div className="contact-item-icon">
                        <i className="bi bi-linkedin"></i>
                        LinkedIn
                    </div>
                    <p className="contact-item-text">
                        <a
                            href="https://linkedin.com/in/sahir-zakaria"
                            target="_blank"
                            rel="noreferrer"
                        >
                            linkedin.com/in/sahir-zakaria
                        </a>
                    </p>
                </div>

            </div>

            {/* Contact Form */}
            <form onSubmit={e => e.preventDefault()} className="contact-form">
                <h2 className="contact-form-title">Get In Touch</h2>

                <div className="contact-input-wrapper">
                    <input type="text" placeholder="Your Name *" required />
                    <input type="text" placeholder="Subject *" required />
                    <input type="email" placeholder="Your Email *" required />
                </div>

                <textarea
                    placeholder="Your Message *"
                    className="contact-textarea"
                    rows="5"
                    required
                ></textarea>

                <button className="contact-btn">Send Message</button>
            </form>
        </section>

    )
}

export default Contact