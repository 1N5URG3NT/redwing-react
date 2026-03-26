import { Link } from "react-router";

export function Welcome() {
	return (
		<main className="relative min-h-screen bg-black text-white overflow-hidden">
			<div className="scan-lines pointer-events-none" />
			<div className="scan-sweep opacity-40 pointer-events-none" />

			<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,0,0,0.16),transparent_38%)] pointer-events-none" />

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
				<div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(0,0,0,0.72))]" />
			</div>

			<div className="relative z-10 mx-auto max-w-7xl px-6 py-10">
				<header className="flex items-center justify-between border-b border-white/10 pb-6">
					<div className="flex items-center gap-4">
						<img
							src="/redwing.png"
							className="h-10 w-10 rounded-md object-cover"
							alt="Redwing Labs logo"
						/>
						<div>
							<p className="text-xs tracking-[0.3em] uppercase text-red-400">
								Redwing Labs
							</p>
							<p className="text-xs text-white/50">
								Defensive Cyber Operations
							</p>
						</div>
					</div>

					<nav className="hidden md:flex gap-6 text-sm text-white/70">
						<a href="#mission" className="hover:text-white transition">
							Mission
						</a>
						<Link to="/halo" className="hover:text-white transition">
							Project HALO
						</Link>
						<a href="#support" className="hover:text-white transition">
							Support
						</a>
						<a href="mailto:contact@redwinglabs.net" className="hover:text-white transition">
							Contact
						</a>
					</nav>
				</header>

				<section className="grid lg:grid-cols-[1.05fr_0.95fr] gap-16 py-20 items-center">
					<div>
						<p className="text-xs uppercase tracking-[0.32em] text-red-500 mb-6">
							ACTIVE CHILD SAFETY INITIATIVE
						</p>

						<h1 className="text-5xl md:text-6xl font-semibold leading-tight">
							Technology built to protect children and reduce operator harm.
						</h1>

						<p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
							Redwing Labs is developing Project HALO to support the detection, documentation,
							and responsible reporting of Child Sexual Abuse Material online, while minimising
							the need for humans to directly view harmful content.
						</p>

						<div className="mt-10 flex flex-wrap gap-4">
							<Link
								to="/halo"
								className="rounded-xl bg-red-700 px-6 py-3 font-semibold transition hover:bg-red-600"
							>
								View Project HALO
							</Link>

							<a
								href="mailto:contact@redwinglabs.net"
								className="rounded-xl border border-white/20 px-6 py-3 font-semibold transition hover:bg-white hover:text-black"
							>
								Contact
							</a>
						</div>

						<div className="mt-10 grid gap-4 sm:grid-cols-2">
							<div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
								<p className="text-xs uppercase tracking-[0.22em] text-red-400">
									Child Protection
								</p>
								<p className="mt-3 text-sm leading-7 text-white/70">
									Focused on improving structured detection and escalation capability in an area
									where technical gaps still exist.
								</p>
							</div>

							<div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
								<p className="text-xs uppercase tracking-[0.22em] text-red-400">
									Operator Protection
								</p>
								<p className="mt-3 text-sm leading-7 text-white/70">
									Designed to reduce or remove the need for investigators and analysts to directly
									view harmful material.
								</p>
							</div>
						</div>
					</div>

					<div className="relative flex justify-center">
						<div className="absolute -inset-10 rounded-full bg-red-700/10 blur-3xl" />

						<div className="relative inline-block rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur">
							<img
								src="/redwing.png"
								className="w-[420px] max-w-full object-contain"
								alt="Redwing Labs"
							/>
						</div>
					</div>
				</section>

				<section id="mission" className="border-t border-white/10 py-16">
					<div className="max-w-4xl">
						<p className="mb-4 text-xs uppercase tracking-[0.3em] text-red-400">
							Mission
						</p>
						<h2 className="mb-5 text-3xl font-semibold">
							A blade for the defenseless.
						</h2>
						<p className="text-lg leading-8 text-white/70">
							Redwing Labs exists to build focused technical capability that supports child safety
							online. Project HALO is intended to reduce the distance between detection and lawful
							reporting while also protecting the people doing this work from avoidable psychological harm.
						</p>
					</div>
				</section>

				<section className="border-t border-white/10 py-16">
					<div className="max-w-4xl">
						<p className="mb-4 text-xs uppercase tracking-[0.3em] text-red-400">
							Approach
						</p>
						<h2 className="mb-5 text-3xl font-semibold">
							Serious technology for a serious problem.
						</h2>
						<p className="text-base leading-8 text-white/75">
							The system is being designed around perceptual hashing, structured logging, and
							automated reporting workflows. The goal is to identify and escalate harmful material
							without normalising a workflow in which humans must repeatedly view it.
						</p>
					</div>

					<div className="mt-10 grid gap-6 md:grid-cols-3">
						{[
							{
								title: "Detection",
								text: "Hash-based identification workflows designed to support recognition of known harmful material.",
							},
							{
								title: "Documentation",
								text: "Structured logging and traceable system outputs designed for review and escalation.",
							},
							{
								title: "Escalation",
								text: "Automated reporting pathways intended to reduce manual handling and response friction.",
							},
						].map((item) => (
							<div
								key={item.title}
								className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-red-600/40 hover:bg-red-950/10"
							>
								<div className="mb-4 h-[2px] w-12 bg-red-500/70 transition group-hover:w-20" />
								<h3 className="text-lg font-semibold">{item.title}</h3>
								<p className="mt-3 text-sm leading-7 text-white/70">{item.text}</p>
							</div>
						))}
					</div>
				</section>

				<section className="border-t border-white/10 py-16">
					<div className="max-w-4xl">
						<p className="mb-4 text-xs uppercase tracking-[0.3em] text-red-400">
							Safety Design
						</p>
						<h2 className="mb-5 text-3xl font-semibold">
							No direct viewing. No long-term storage.
						</h2>
					</div>

					<div className="grid gap-4 md:grid-cols-2">
						{[
							"The project is intended to minimise or remove the need for direct human viewing of harmful material.",
							"The operating model is centered on hashes, metadata, and structured reporting rather than media retention.",
							"Harmful material is not intended to be stored long-term within the system workflow.",
							"The design prioritises legal compliance, ethical restraint, and operator wellbeing.",
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

				<section id="support" className="border-t border-white/10 py-16">
					<p className="mb-4 text-xs uppercase tracking-[0.3em] text-red-400">
						Support
					</p>
					<h2 className="mb-4 text-3xl font-semibold">
						Built with backing from people who believe the mission matters.
					</h2>
					<p className="mb-8 max-w-2xl text-white/70 leading-8">
						Redwing Labs is currently an unfunded initiative developing early-stage capability with
						the support of community backing, donated equipment, and mission-aligned assistance.
					</p>

					<div className="inline-flex items-center gap-5 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
						<img
							src="/substation33.png"
							className="h-16 rounded bg-white p-2"
							alt="Substation 33"
						/>
						<div>
							<p className="font-semibold">Substation 33</p>
							<p className="text-sm text-white/50">
								Equipment and infrastructure support
							</p>
						</div>
					</div>
				</section>

				<section className="border-t border-white/10 py-16">
					<p className="mb-4 text-xs uppercase tracking-[0.3em] text-red-400">
						Contact
					</p>
					<h2 className="mb-4 text-3xl font-semibold">
						Support, collaboration, or direct contact.
					</h2>
					<p className="mb-8 max-w-2xl text-white/70 leading-8">
						For sponsorship, partnership, or mission-aligned support, contact Redwing Labs directly.
					</p>

					<div className="flex flex-wrap gap-4">
						<a
							href="mailto:contact@redwinglabs.net"
							className="inline-block rounded-xl bg-red-700 px-6 py-4 font-semibold transition hover:bg-red-600"
						>
							contact@redwinglabs.net
						</a>

						<Link
							to="/halo"
							className="inline-block rounded-xl border border-white/20 px-6 py-4 font-semibold transition hover:bg-white hover:text-black"
						>
							Read Project HALO
						</Link>
					</div>
				</section>

				<footer className="flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/35 md:flex-row md:items-center md:justify-between">
					<p>Redwing Labs — Defensive Cyber Operations</p>
					<p>Child safety. Operator protection. Responsible escalation.</p>
				</footer>
			</div>
		</main>
	);
}
