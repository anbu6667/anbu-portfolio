export default function About() {
	return (
		<main className="page-center">
			<div className="page-content">
				<h1 className="page-title">About Me</h1>

				{/* Photo below heading */}
				<img
					src="/pro.jpg"
					alt="My Photo"
					className="about-photo"
					style={{
						width: "180px",
						borderRadius: "12px",
						marginTop: "20px",
						marginBottom: "20px"
					}}
				/>

				<p className="home-subtitle" style={{ marginTop: "15px" }}>
I'm a creative and detail‑oriented developer with a passion for building
beautiful, functional, and user‑friendly digital experiences.
</p>    <p className="home-subtitle">
My skills include Web Designing, Graphic Designing, UI/UX Design,
and crafting modern responsive interfaces.
</p>


<p className="home-subtitle">
I enjoy transforming ideas into clean, efficient code and visually
appealing layouts that enhance user engagement.
</p>
			</div>
		</main>
	);
}
