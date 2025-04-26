import React from 'react';
import { useFormik } from 'formik';
import emailjs from 'emailjs-com';
import * as Yup from 'yup';
import toast from 'react-hot-toast';

export default function Contact() {
    // Formik hook for handling form submission
    const formik = useFormik({
        initialValues: {
            email: '',
            message: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email address').required('Email is required'),
            message: Yup.string().required('Message is required'),
        }),
        onSubmit: (values, { setSubmitting, resetForm }) => {
            setSubmitting(true);


            // EmailJS configuration
            emailjs
                .send(
                    'service_yc0c9x9',
                    "template_xds9aor",
                    values,
                    'RN6fgl-ansBrLA_I_' // Replace with your User ID
                )
                .then(
                    () => {
                        toast.success('Message sent successfully!');
                    },
                    () => {
                        toast.error('Failed to send message, please try again.');
                    }
                )
                .finally(() => {
                    setSubmitting(false);
                    resetForm();
                });
        },
    });

    return (
        <section id="contact" className="py-5" style={{ background: '#f8f9fa' }}>
            <div className="container">
                <h2 className="text-center fw-bold display-4 mb-3 animate__animated animate__fadeInDown">
                    Contact Me
                </h2>
                <p className="lead text-center text-muted mb-5 animate__animated animate__fadeInUp animate__delay-1s">
                    Let's Convert Your Dreams Into Reality
                </p>

                <div className="row justify-content-center">
                    <div className="col-md-8 col-lg-6">
                        <div className="card shadow-lg p-4 border-0 rounded-4 animate__animated animate__fadeInUp animate__delay-2s" style={{ backgroundColor: '#ffffff' }}>
                            <form onSubmit={formik.handleSubmit}>
                                <div className="mb-4">
                                    <label htmlFor="email" className="form-label fw-semibold">Email Address</label>
                                    <input
                                        type="email"
                                        className="form-control rounded-3"
                                        id="email"
                                        placeholder="Enter your email"
                                        value={formik.values.email}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                    {formik.touched.email && formik.errors.email ? (
                                        <div className="text-danger mt-2 small">{formik.errors.email}</div>
                                    ) : null}
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="message" className="form-label fw-semibold">Your Message</label>
                                    <textarea
                                        className="form-control rounded-3"
                                        id="message"
                                        rows="5"
                                        placeholder="Write your message"
                                        value={formik.values.message}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    ></textarea>
                                    {formik.touched.message && formik.errors.message ? (
                                        <div className="text-danger mt-2 small">{formik.errors.message}</div>
                                    ) : null}
                                </div>

                                <button
                                    type="submit"
                                    className="btn btn-outline-dark w-100 py-2 rounded-3"
                                    style={{ letterSpacing: '1px', fontWeight: '600', fontSize: '1.1rem' }}
                                    disabled={formik.isSubmitting}
                                >
                                    {formik.isSubmitting ? 'Sending...' : 'Send Message'}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );

}
