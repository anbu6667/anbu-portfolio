export default function Resume() {
  return (
    <main className="resume-page">
      <div className="resume-container">
        <h1 className="page-title">Resume</h1>

        {/* Embed Resume PDF */}
        <div className="resume-viewer">
          <iframe
            src="/res.pdf%20(1).pdf"
            title="Resume"
            width="100%"
            height="100%"
            style={{ border: 'none' }}
          ></iframe>
        </div>

        {/* Download button */}
        <a
          href="/res.pdf%20(1).pdf"
          download
          className="resume-download-btn"
        >
          Download Resume
        </a>
      </div>
    </main>
  );
}
