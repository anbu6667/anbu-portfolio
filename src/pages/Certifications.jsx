import { useState } from "react";

export default function Certifications() {
  const certifications = [
    {
      number: "01",
      title: "MongoDB Associate Developer",
      issuer: "MongoDB",
      description: "Demonstrates knowledge of MongoDB development, including document modeling, CRUD operations, and aggregation.",
      certificate: "/mongodb (1).pdf"
    },
    {
      number: "02",
      title: "Java SE 17",
      issuer: "Oracle",
      description: "Covers core Java programming concepts, object-oriented development, and the Java SE 17 platform.",
      certificate: "/java.pdf"
    },
  ];
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  return (
    <main className="certifications-page">
      <div className="certifications-content">
        <header className="certifications-header">
          <p className="certifications-kicker">Learning milestones</p>
          <h1 className="certifications-title">Proof of the skills I keep building.</h1>
          <p className="certifications-intro">
            These certifications reflect my interest in backend development, databases,
            and writing reliable software with modern tools.
          </p>
          <div className="certifications-summary" aria-label="Certification count">
            <strong>{String(certifications.length).padStart(2, "0")}</strong>
            <span>Certificates earned</span>
          </div>
        </header>

        <div className="certifications-grid">
          {certifications.map((certificate) => (
            <article key={certificate.title} className="cert-card">
              <div className="cert-card-top">
                <span className="cert-number">{certificate.number}</span>
                <span className="cert-type">Verified certificate</span>
              </div>
              <div className="cert-card-body">
                <p className="cert-label">Issued by {certificate.issuer}</p>
                <h2 className="cert-title">{certificate.title}</h2>
                <p className="cert-issuer">{certificate.description}</p>
              </div>
              <button
                type="button"
                className="cert-link"
                onClick={() => setSelectedCertificate(certificate)}
              >
                View certificate <span aria-hidden="true">-&gt;</span>
              </button>
            </article>
          ))}
        </div>
      </div>

      {selectedCertificate && (
        <div
          className="certificate-modal-backdrop"
          role="presentation"
          onClick={() => setSelectedCertificate(null)}
        >
          <section
            className="certificate-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="certificate-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="certificate-modal-close"
              aria-label="Close certificate dialog"
              onClick={() => setSelectedCertificate(null)}
            >
              X
            </button>
            <p className="certifications-kicker">Certificate ready</p>
            <h2 id="certificate-modal-title">{selectedCertificate.title}</h2>
            <p>Issued by {selectedCertificate.issuer}.</p>
            <iframe
              className="certificate-preview"
              src={selectedCertificate.certificate}
              title={`${selectedCertificate.title} certificate preview`}
            />
            <a
              href={selectedCertificate.certificate}
              download
              className="certificate-download"
            >
              Download certificate
            </a>
          </section>
        </div>
      )}
    </main>
  );
}