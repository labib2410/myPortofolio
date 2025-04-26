import React from 'react';

export default function Hero() {
    return (
        <section
            id="home"
            className="d-flex align-items-center justify-content-center text-center text-light
            container-fluid
            "
            style={{
                height: '100vh',
                background: 'linear-gradient(to right, #0f2027, #203a43, #2c5364)',
                padding: '0 1rem',
            }}
        >
            <div>
                <h1 className="display-3 fw-bold mb-3 animate__animated animate__fadeInDown">
                    Hey, I'm <span style={{ color: '#00d9ff' }}>Omar Labib</span>
                </h1>
                <p className="lead animate__animated animate__fadeInUp animate__delay-1s">
                    A passionate web developer crafting modern, responsive websites.
                </p>
                <a href="#projects" className="btn btn-outline-light btn-lg mt-4 animate__animated animate__fadeInUp animate__delay-2s">
                    See My Work
                </a>
            </div>
        </section>
    );
}
