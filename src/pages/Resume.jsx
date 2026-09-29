const resumeUrl = `${import.meta.env.BASE_URL}anburesume.pdf`;

export default function Resume() {
  return (
    <main className="resume-page">
      <div className="resume-container">
        <header className="resume-header">
          <div>
            <p className="resume-kicker">Professional profile</p>
            <h1 className="resume-title">Resume</h1>
            <p className="resume-intro">
              A quick overview of my education, technical skills, and selected work.
            </p>
          </div>
          <a href={resumeUrl} download className="resume-download-btn">
            Download PDF <span aria-hidden="true">-&gt;</span>
          </a>
        </header>

        <div className="resume-document">
          <iframe
            src={resumeUrl}
            title="Anbu Selvam N resume"
          />
        </div>
      </div>
    </main>
  );
}
