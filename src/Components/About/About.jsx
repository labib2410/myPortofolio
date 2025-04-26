import React from 'react';
import aboutImage from '../../assets/about-sec.png';
export default function About() {
    return (
        <section id="about" className="py-5 bg-light">
            <div className="container">
                <h2 className="text-center mb-5 fw-bold display-5 animate__animated animate__fadeInUp">
                    About Me
                </h2>

                <div className="row align-items-center g-5">
                    {/* Image and Skills Column */}
                    <div className="col-md-5 animate__animated animate__fadeInLeft">
                        {/* Image */}
                        <div className="mb-4">
                            <img
                                src={aboutImage}
                                alt="About"
                                className="img-fluid rounded-4  shadow "
                                style={{ maxHeight: '400px', objectFit: 'contain', width: '100%' }}
                            />
                        </div>

                        {/* Skills */}
                        <div className="bg-white p-3 rounded shadow-sm">
                            <h5 className="fw-bold mb-3 " id='SkillsHead'>Skills</h5>
                            <div className="d-flex flex-wrap gap-2">
                                {[
                                    "Java",
                                    "OOP",
                                    "Data Structure",
                                    "HTML",
                                    "CSS",
                                    "TypeScript",
                                    "JavaScript",
                                    "Bootstrap",
                                    "React",
                                    "ReactLibraries",
                                    "Next js",
                                    "Redux"
                                ].map((skill, index) => (
                                    <span id='spanSkills'
                                        key={skill}
                                        className={`badge  px-3 py-2 fs-6 animate__animated animate__fadeInUp animate__delay-${index + 1}s`}
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* About Me Text Column */}
                    <div className="col-md-6 animate__animated animate__fadeInRight">
                        <p className="lead">
                            <span className='text-danger fw-bolder fs-3'>I'm </span>a <strong>Computer and Communications Engineering</strong> student at <strong>Alexandria University</strong>, and a passionate <strong>Front-End Developer</strong> who loves building beautiful, responsive, and intuitive user interfaces.
                        </p>
                        <p>
                            With experience in <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>, <strong>React</strong>, and <strong>Bootstrap</strong>, I enjoy turning creative ideas into interactive web experiences that users love.
                        </p>
                        <p>
                            I'm also dedicated to learning new technologies, improving performance, and writing clean, maintainable code.
                        </p>

                        {/* Buttons */}
                        <div className="mt-4 d-flex gap-3 flex-wrap">
                            <a href="/Omar_Mohamed_Labib_CV.pdf" className="btn btn-outline-primary" download>
                                📄 Download My CV
                            </a>
                            <a href="/Certificate.pdf" className="btn btn-outline-danger" download>
                                📄 Download My Certificate
                            </a>

                            <a href="#contact" className="btn btn-outline-warning">
                                📬 Contact Me
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

