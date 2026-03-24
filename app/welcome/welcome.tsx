export function Welcome() {
	return (
		<main className="min-h-screen bg-black text-white overflow-hidden">
			<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,0,0,0.16),transparent_38%)] pointer-events-none" />
			<div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
			<div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(0,0,0,0.65))] pointer-events-none" />

			<div className="relative z-10 mx-auto max-w-7xl px-6 py-10">
				<header className="flex items-center justify-between border-b border-white/10 pb-6">
					<div className="flex items-center gap-4">
						<img src="/redwing.png" className="h-10 w-10 rounded-md object-cover" alt="Redwing Labs logo" />
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
						<a href="#mission" className="hover:text-white transition">Mission</a>
						<a href="#halo" className="hover:text-white transition">HALO</a>
						<a href="#support" className="hover:text-white transition">Support</a>
						<a href="#contact" className="hover:text-white transition">Contact</a>
					</nav>
				</header>

				<section className="grid lg:grid-cols-[1.05fr_0.95fr] gap-16 py-20 items-center">
					<div>
						<p className="text-xs uppercase tracking-[0.32em] text-red-500 mb-6">
							Active Defensive Initiative
						</p>

						<h1 className="text-5xl md:text-6xl font-semibold leading-[1.02] tracking-tight max-w-3xl">
							Detect. Disrupt. Report.
						</h1>

						<p className="mt-6 text-lg text-white/70 max-w-2xl leading-8">
							We build operational tooling to identify and act against child exploitation networks,
							with emphasis on detection workflows, evidence integrity, and responsible escalation.
						</p>

						<div className="mt-10 flex flex-wrap gap-4">
							<a
								href="#halo"
								className="px-6 py-3 bg-red-700 rounded-xl font-semibold hover:bg-red-600 transition"
							>
								Project HALO
							</a>

							<a
								href="#contact"
								className="px-6 py-3 border border-white/20 rounded-xl hover:bg-white hover:text-black transition"
							>
								Contact
							</a>
						</div>

						<div className="mt-10 grid gap-4 sm:grid-cols-2">
							<div className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur p-5">
								<p className="text-[11px] uppercase tracking-[0.22em] text-red-400">
									Operational Focus
								</p>
								<p className="mt-3 text-sm text-white/70 leading-7">
									Detection systems, secure evidence handling, and reporting workflow automation.
								</p>
							</div>

							<div className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur p-5">
								<p className="text-[11px] uppercase tracking-[0.22em] text-red-400">
									Posture
								</p>
								<p className="mt-3 text-sm text-white/70 leading-7">
									Mission-led, unfunded, and built to support real defensive action.
								</p>
							</div>
						</div>
					</div>

					<div className="relative">
						<div className="absolute -inset-8 bg-red-700/10 blur-3xl rounded-full" />
						<div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] backdrop-blur">
							<div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(to_bottom,transparent,transparent_50%,rgba(255,255,255,0.18)_50%,transparent_51%)] bg-[length:100%_6px] pointer-events-none" />
							<img
								src="/redwing.png"
								className="relative z-10 w-full object-cover"
								alt="Redwing Labs"
							/>
						</div>
					</div>
				</section>

				<section id="mission" className="border-t border-white/10 py-16">
					<div className="max-w-4xl">
						<p className="text-xs uppercase tracking-[0.3em] text-red-400 mb-4">
							Mission
						</p>
						<h2 className="text-3xl font-semibold mb-5">
							A blade for the defenseless.
						</h2>
						<p className="text-white/70 leading-8 text-lg">
							Redwing Labs exists to build focused technical capability for the identification,
							documentation, and reporting of exploitative content online. The objective is to
							reduce the distance between discovery and action while preserving discipline,
							traceability, and operational clarity.
						</p>
					</div>
				</section>

				<section id="halo" className="border-t border-white/10 py-16">
					<div className="max-w-3xl">
						<p className="text-xs uppercase tracking-[0.3em] text-red-400 mb-4">
							Project HALO
						</p>
						<h2 className="text-3xl font-semibold mb-4">
							System architecture for detection and escalation.
						</h2>
						<p className="text-white/70 mb-10 leading-8">
							A mission system designed to reduce friction between detection, logging,
							review, and automated reporting.
						</p>
					</div>

					<div className="grid md:grid-cols-3 gap-6">
						{[
							{
								title: "Detection Engine",
								text: "Perceptual hashing and matching workflows for identifying known harmful material.",
							},
							{
								title: "Secure Logging",
								text: "Structured evidence-aware logging designed for integrity, retention, and review.",
							},
							{
								title: "Automated Reporting",
								text: "Escalation pipelines that support documentation, triage, and action.",
							},
						].map((item) => (
							<div
								key={item.title}
								className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-red-600/40 hover:bg-red-950/10"
							>
								<div className="mb-4 h-[2px] w-12 bg-red-500/70 transition group-hover:w-20" />
								<h3 className="font-semibold text-lg">{item.title}</h3>
								<p className="mt-3 text-sm text-white/65 leading-7">{item.text}</p>
							</div>
						))}
					</div>
				</section>

				<section id="support" className="border-t border-white/10 py-16">
					<p className="text-xs uppercase tracking-[0.3em] text-red-400 mb-4">
						Support
					</p>
					<h2 className="text-3xl font-semibold mb-4">
						Built with backing from people who believe the mission matters.
					</h2>
					<p className="text-white/70 mb-8 max-w-2xl leading-8">
						This initiative is being developed without traditional funding, supported through
						community help, donated infrastructure, and partner backing.
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

				<section id="contact" className="border-t border-white/10 py-16">
					<p className="text-xs uppercase tracking-[0.3em] text-red-400 mb-4">
						Contact
					</p>
					<h2 className="text-3xl font-semibold mb-4">
						Make contact.
					</h2>
					<p className="text-white/70 mb-8 max-w-2xl leading-8">
						For collaboration, support, mission alignment, or direct communication.
					</p>

					<a
						href="mailto:k.sspalmer@proton.me"
						className="inline-block px-6 py-4 bg-red-700 rounded-xl font-semibold hover:bg-red-600 transition"
					>
						k.sspalmer@proton.me
					</a>
				</section>

				<footer className="border-t border-white/10 pt-6 text-xs text-white/35 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
					<p>Redwing Labs — Defensive Cyber Operations</p>
					<p>Mission-led. Unfunded. Building anyway.</p>
				</footer>
			</div>
		</main>
	);
}
