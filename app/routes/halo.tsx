import { Link } from "react-router";

export default function HaloPage() {
	return (
		<main className="relative min-h-screen bg-black text-white overflow-hidden">
			<div className="scan-lines pointer-events-none" />
			<div className="scan-sweep opacity-30 pointer-events-none" />

			<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,0,0,0.14),transparent_35%)] pointer-events-none" />

			<div className="pointer-events-none absolute inset-0 overflow-hidden">
				<div className="radar-bg">
					<div className="radar-ring radar-ring-1" />
					<div className="radar-ring radar-ring-2" />
					<div className="radar-ring radar-ring-3" />
					<div className="radar-ring radar-ring-4" />
					<div className="radar-cross radar-cross-h" />
					<div className="radar-cross radar-cross-v" />
					<div className="radar-sweep" />
					<div className="radar-glow" />
				</div>
			</div>

			<div className="pointer-events-none absolute inset-0 overflow-hidden">
				<div className="absolute inset-[-20%] animated-grid opacity-[0.04]" />
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,rgba(0,0,0,0.55)_100%)]" />
				<div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(0,0,0,0.75))]" />
			</div>

			<div className="relative z-10 mx-auto max-w-6xl px-6 py-10">
				<header className="flex items-center justify-between border-b border-white/10 pb-6">
					<Link to="/" className="flex items-center gap-4">
						<img
							src="/redwing.png"
							className="h-10 w-10 rounded-md object-cover"
							alt="Redwing Labs logo"
						/>
						<div>
							<p className="text-xs uppercase tracking-[0.3em] text-red-400">
								Redwing Labs
							</p>
							<p className="text-xs text-white/50">
								Defensive Cyber Operations
							</p>
						</div>
					</Link>

					<nav className="hidden md:flex gap-6 text-sm text-white/70">
						<Link to="/" className="hover:text-white transition">
							Home
						</Link>
						<Link to="/halo" className="text-white transition">
							Project HALO
						</Link>
						<a href="mailto:contact@redwinglabs.net" className="hover:text-white transition">
							Contact
						</a>
					</nav>
				</header>

				<section className="py-16 md:py-20">
					<p className="mb-5 text-xs uppercase tracking-[0.32em] text-red-500">
						Project HALO
					</p>

					<h1 className="max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">
						A child safety initiative built to reduce human exposure to exploitative material.
					</h1>

					<p className="mt-8 max-w-3xl text-lg leading-8 text-white/70">
						Project HALO is being developed as a technical capability to support the detection,
						documentation, and responsible reporting of Child Sexual Abuse Material online, while
						minimising or removing the need for human operators to directly view harmful content.
					</p>
				</section>

				<section className="grid gap-6 border-t border-white/10 py-14 md:grid-cols-3">
					<div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
						<p className="text-xs uppercase tracking-[0.24em] text-red-400">
							Core Principle
						</p>
						<p className="mt-4 text-sm leading-7 text-white/75">
							Protect children online while also protecting investigators, analysts, and operators
							from repeated exposure to traumatic material.
						</p>
					</div>

					<div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
						<p className="text-xs uppercase tracking-[0.24em] text-red-400">
							System Intent
						</p>
						<p className="mt-4 text-sm leading-7 text-white/75">
							Reduce friction between detection, documentation, and lawful reporting through
							structured, automated workflows.
						</p>
					</div>

					<div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
						<p className="text-xs uppercase tracking-[0.24em] text-red-400">
							Safety Posture
						</p>
						<p className="mt-4 text-sm leading-7 text-white/75">
							The system is designed around hashing, metadata, and structured outputs rather than
							raw media retention or direct viewing.
						</p>
					</div>
				</section>

				<section className="border-t border-white/10 py-14">
					<div className="max-w-4xl">
						<p className="text-xs uppercase tracking-[0.3em] text-red-400">
							Why it exists
						</p>
						<h2 className="mt-4 text-3xl font-semibold">
							The challenge is both technical and human.
						</h2>
						<p className="mt-6 text-base leading-8 text-white/75">
							Current CSAM response workflows are often fragmented, slow, and heavily dependent on
							human review. That creates two failures at once: operational delay, and psychological
							harm to the people working to confront this problem. Project HALO is being built to
							address both.
						</p>
					</div>

					<div className="mt-10 grid gap-6 md:grid-cols-2">
						<div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
							<h3 className="text-xl font-semibold">Child protection</h3>
							<p className="mt-4 text-sm leading-7 text-white/75">
								The system aims to support faster, more structured identification and escalation of
								harmful material, reducing the gap between discovery and action.
							</p>
						</div>

						<div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
							<h3 className="text-xl font-semibold">Operator protection</h3>
							<p className="mt-4 text-sm leading-7 text-white/75">
								A core design goal is reducing or removing the need for law enforcement, analysts,
								and independent child-safety operators to directly see harmful material.
							</p>
						</div>
					</div>
				</section>

				<section className="border-t border-white/10 py-14">
					<div className="max-w-4xl">
						<p className="text-xs uppercase tracking-[0.3em] text-red-400">
							How it works
						</p>
						<h2 className="mt-4 text-3xl font-semibold">
							Detection without direct viewing.
						</h2>
						<p className="mt-6 text-base leading-8 text-white/75">
							Project HALO is being designed around perceptual hashing, metadata-driven logging,
							and structured reporting workflows. The intention is to identify known harmful
							material and generate actionable records without creating a workflow that depends on
							raw visual review.
						</p>
					</div>

					<div className="mt-10 grid gap-6 md:grid-cols-3">
						{[
							{
								title: "Perceptual Hashing",
								text: "Use of hash-based detection techniques to identify known harmful material without requiring visual inspection by the operator.",
							},
							{
								title: "Structured Logging",
								text: "Capture of relevant metadata and system events in a traceable logging pipeline designed for review and escalation.",
							},
							{
								title: "Automated Reporting",
								text: "Preparation of structured outputs that reduce manual handling and support lawful downstream reporting pathways.",
							},
						].map((item) => (
							<div
								key={item.title}
								className="group rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-red-600/40 hover:bg-red-950/10"
							>
								<div className="mb-4 h-[2px] w-12 bg-red-500/70 transition group-hover:w-20" />
								<h3 className="text-lg font-semibold">{item.title}</h3>
								<p className="mt-4 text-sm leading-7 text-white/75">{item.text}</p>
							</div>
						))}
					</div>
				</section>

				<section className="border-t border-white/10 py-14">
					<div className="max-w-4xl">
						<p className="text-xs uppercase tracking-[0.3em] text-red-400">
							Handling model
						</p>
						<h2 className="mt-4 text-3xl font-semibold">
							No direct viewing. No long-term storage.
						</h2>
					</div>

					<div className="mt-10 grid gap-4 md:grid-cols-2">
						{[
							"No direct human viewing is intended within the normal system workflow.",
							"No long-term storage or archival of harmful material is part of the intended model.",
							"Outputs are designed to be structured logs, metadata, and reporting artefacts rather than media files.",
							"The project is being developed with legal, ethical, and operational restraint in mind.",
						].map((line) => (
							<div
								key={line}
								className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm leading-7 text-white/75"
							>
								{line}
							</div>
						))}
					</div>
				</section>

				<section className="border-t border-white/10 py-14">
					<div className="max-w-4xl">
						<p className="text-xs uppercase tracking-[0.3em] text-red-400">
							Current status
						</p>
						<h2 className="mt-4 text-3xl font-semibold">
							Early-stage, structured, and ready for support.
						</h2>
						<p className="mt-6 text-base leading-8 text-white/75">
							Project HALO is currently in the early development phase. While not yet deployed, the
							architecture, direction, and operational concept are defined. The current focus is on
							building the foundational system, infrastructure, and public-facing credibility needed
							to move from concept into functional capability.
						</p>
					</div>

					<div className="mt-10 grid gap-6 md:grid-cols-2">
						<div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
							<h3 className="text-xl font-semibold">Current infrastructure</h3>
							<ul className="mt-4 space-y-3 text-sm text-white/75">
								<li>Dell PowerEdge R740 — 32GB RAM</li>
								<li>Dell R360 — 32GB DDR5</li>
								<li>Dell T440 — pending memory upgrade</li>
								<li>Workstation — Intel i9-14900K / RTX 4080 Super</li>
							</ul>
						</div>

						<div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
							<h3 className="text-xl font-semibold">Support focus</h3>
							<ul className="mt-4 space-y-3 text-sm text-white/75">
								<li>Memory and storage expansion</li>
								<li>Additional compute capability</li>
								<li>Infrastructure and hosting support</li>
								<li>Strategic and operational guidance</li>
							</ul>
						</div>
					</div>
				</section>

				<section className="border-t border-white/10 py-14">
					<div className="max-w-4xl">
						<p className="text-xs uppercase tracking-[0.3em] text-red-400">
							Contact
						</p>
						<h2 className="mt-4 text-3xl font-semibold">
							Support, partnership, or direct contact.
						</h2>
						<p className="mt-6 text-base leading-8 text-white/75">
							For sponsorship, infrastructure support, or mission-aligned collaboration, contact
							Redwing Labs directly.
						</p>

						<div className="mt-8 flex flex-wrap gap-4">
							<a
								href="mailto:contact@redwinglabs.net"
								className="rounded-xl bg-red-700 px-6 py-3 font-semibold transition hover:bg-red-600"
							>
								contact@redwinglabs.net
							</a>

							<Link
								to="/"
								className="rounded-xl border border-white/20 px-6 py-3 font-semibold transition hover:bg-white hover:text-black"
							>
								Back to Home
							</Link>
						</div>
					</div>
				</section>

				<footer className="border-t border-white/10 pt-6 text-xs text-white/35 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
					<p>Redwing Labs — Defensive Cyber Operations</p>
					<p>Child safety. Operator protection. Responsible escalation.</p>
				</footer>
			</div>
		</main>
	);
}
