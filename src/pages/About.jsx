import { Link } from "react-router-dom";

export default function About() {
	return (
		<main className="about-page">
			<div className="about-layout">
				<section className="about-intro">
					<p className="about-kicker">A little about me</p>
					<h1 className="about-title">I turn thoughtful ideas into useful digital experiences.</h1>
					<p className="about-lead">
						I am Anbu Selvam N, a Computer Science student and aspiring full stack developer
						who enjoys bringing design and technology together.
					</p>
					<p className="about-copy">
						My work sits between clean interfaces and dependable code. I care about making
						websites easy to understand, comfortable to use, and responsive on every screen.
					</p>
					<div className="about-actions">
						<Link to="/projects" className="about-primary-action">Explore Projects <span aria-hidden="true">-&gt;</span></Link>
					</div>
				</section>

				<aside className="about-profile" aria-label="Profile summary">
					<img src="/pro.jpg" alt="Anbu Selvam N" className="about-photo" />
					<div className="about-profile-copy">
						<p className="about-profile-label">Currently learning</p>
						<h2>Full stack development</h2>
						<p>Building stronger skills in React, Node.js, databases, and modern UI design.</p>
					</div>
					<div className="about-details">
						<div><span>Education</span><strong>BE Computer Science</strong></div>
						<div><span>College</span><strong>Kongu Engineering College</strong></div>
						<div><span>Strengths</span><strong>Design, code, problem solving</strong></div>
					</div>
				</aside>
			</div>
		</main>
	);
}
