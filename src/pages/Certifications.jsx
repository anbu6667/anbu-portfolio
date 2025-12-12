import React from "react";

export default function Certifications() {
  const certifications = [
    { title: "MongoDB Associate Developer", issuer: "MongoDB", certificate: "/mongodb (1).pdf" },
    { title: "Java SE17", issuer: "Oracle", certificate: "/java.pdf" },
  ];

  return (
    <main className="page-center">
      <div className="page-content">
        <h1 className="page-title">Certifications</h1>
        <div className="certifications-grid">
          {certifications.map((c) => (
            <div key={c.title} className="cert-card">
              <h2 className="cert-title">{c.title}</h2>
              <p className="cert-issuer">{c.issuer}</p>
              <a
                href={c.certificate}
                target="_blank"
                rel="noopener noreferrer"
                className="cert-link"
              >
                View Certificate
              </a>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}