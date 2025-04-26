import React, { useEffect, useState } from 'react';

export default function Projects() {
    let [projectsData, setProjectsData] = useState([]);
    let [load, setLoad] = useState(false);
    let [error, setError] = useState(null);

    async function getProjectsData() {
        setLoad(true);
        try {
            let res = await fetch('/projects.json');
            if (!res.ok) {
                throw new Error(`HTTP error! Status: ${res.status}`);
            }
            let data = await res.json();
            setProjectsData(data);
            setLoad(false);
        } catch (error) {
            setError(error.message || 'Something went wrong');
            setLoad(false);
            console.error("Error fetching projects data:", error);
        }
    }

    useEffect(() => {
        getProjectsData();
    }, []); // Only fetch once on mount

    if (load) {
        return <p>Loading Projects..... </p>;
    }

    if (error !== null) {
        return <p>Error: {error}</p>;
    }

    return (
        <section id="projects" className="py-5 bg-light">
        <div className="container">
            <h2 className="text-center mb-5 fw-bold display-5 animate__animated animate__fadeInUp">
                My Projects
            </h2>
    
            <div className="row align-items-stretch g-5">
                {projectsData.map((project, index) => {
                    return (
                        <div className="col-md-4 mb-4" key={index}>
                            <div className="project-card d-flex flex-column h-100">
                                <div className="project-content position-relative flex-grow-1">
                                    <img
                                        src={project.image}
                                        alt={index}
                                        className="img-fluid rounded-4 shadow-lg project-img"
                                        style={{ maxHeight: '400px', objectFit: 'cover', width: '100%' }}
                                    />
                                    <div className="project-overlay d-flex align-items-center justify-content-center">
                                        <a href={project.Link} className="btn btn-outline-light text-decoration-none px-4 py-2" target='_blank'>
                                            Live Demo
                                        </a>
                                    </div>
                                </div>
                                <div className="project-text mt-3">
                                    <h5 className="fw-bold">{project.Name}</h5>
                                    <p className="lead text-muted">{project.Description}</p>
                                    <div className="d-flex flex-wrap gap-2 my-3">
                                        {project.By.map((skill, index) => (
                                            <span
                                                id="spanSkills"
                                                key={skill}
                                                className={`badge px-3 py-2 fs-6 animate__animated animate__fadeInUp animate__delay-${index + 1}s`}
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    </section>
    
    );
}
