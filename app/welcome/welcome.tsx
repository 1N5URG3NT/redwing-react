export function Welcome() {
	return (
		<main className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(120,0,0,0.18),transparent_35%),linear-gradient(to_bottom,#050505,#0b0b0b)] text-white">
			<div className="mx-auto flex min-h-screen max-w-7xl flex-col px-6 py-10 lg:px-10">
				<header className="flex items-center justify-between border-b border-white/10 pb-6">
					<div className="flex items-center gap-4">
						<div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-red-700/40 bg-red-900/20 text-lg font-bold tracking-widest text-red-400">
							RW
						</div>
						<div>
							<p className="text-xs uppercase tracking-[0.35em] text-red-400/80">
								Redwing Labs
							</p>
							<p className="text-sm text-white/50">
								Defensive Cyber Operations
							</p>
						</div>
					</div>

					<nav className="hidden gap-6 text-sm text-white/70 md:flex">
						<a href="#mission" className="transition hover:text-white">
							Mission
						</a>
						<a href="#capabilities" className="transition hover:text-white">
							Capabilities
						</a>
						<a href="#principles" className="transition hover:text-white">
							Principles
						</a>
						<a href="#contact" className="transition hover:text-white">
							Contact
						</a>
					</nav>
				</header>

				<section className="grid flex-1 items-center gap-16 py-16 lg:grid-cols-[1.3fr_0.7fr] lg:py-24">
					<div>
						<p className="mb-5 inline-flex rounded-full border border-red-800/40 bg-red-950/40 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-red-300">
							A blade for the defenseless
						</p>

						<h1 className="max-w-4xl text-5xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
							Building systems that help identify, disrupt, and report CSAM online.
						</h1>

						<p className="mt-8 max-w-2xl text-lg leading-8 text-white/70">
							Redwing Labs is a mission-focused cybersecurity and intelligence-driven
							initiative developing practical tooling for the detection of harmful
							content, evidence preservation, secure reporting workflows, and
							defensive online investigation support.
						</p>

						<div className="mt-10 flex flex-col gap-4 sm:flex-row">
							<a
								href="#mission"
								className="rounded-2xl border border-red-700/50 bg-red-700 px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-red-600"
							>
								View Mission
							</a>
							<a
								href="#contact"
								className="rounded-2xl border border-white/15 bg-white/5 px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-white hover:text-black"
							>
								Get In Touch
							</a>
						</div>

						<div className="mt-12 grid gap-4 sm:grid-cols-3">
							<div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
								<p className="text-xs uppercase tracking-[0.2em] text-red-300">
									Focus
								</p>
								<p className="mt-3 text-sm leading-6 text-white/75">
									CSAM detection, reporting pipelines, and defensive intelligence support.
								</p>
							</div>

							<div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
								<p className="text-xs uppercase tracking-[0.2em] text-red-300">
									Approach
								</p>
								<p className="mt-3 text-sm leading-6 text-white/75">
									Technical discipline, evidence-minded workflows, and operational clarity.
								</p>
							</div>

							<div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
								<p className="text-xs uppercase tracking-[0.2em] text-red-300">
									Intent
								</p>
								<p className="mt-3 text-sm leading-6 text-white/75">
									Protect the vulnerable and support action against exploitative networks.
								</p>
							</div>
						</div>
					</div>

					<div className="relative">
						<div className="absolute inset-0 rounded-[2rem] bg-red-700/10 blur-3xl" />
						<div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur">
							<div className="mb-6 flex items-center justify-between border-b border-white/10 pb-4">
								<div>
									<p className="text-xs uppercase tracking-[0.25em] text-red-300">
										Operational Posture
									</p>
									<p className="mt-2 text-lg font-medium text-white">
										Active Development
									</p>
								</div>
								<div className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300">
									Online
								</div>
							</div>

							<div className="space-y-4">
								<div className="rounded-2xl border border-white/10 bg-black/30 p-4">
									<p className="text-xs uppercase tracking-[0.2em] text-white/40">
										System Direction
									</p>
									<p className="mt-2 text-sm leading-6 text-white/75">
										Perceptual hashing, secure logging, workflow automation, and structured reporting.
									</p>
								</div>

								<div className="rounded-2xl border border-white/10 bg-black/30 p-4">
									<p className="text-xs uppercase tracking-[0.2em] text-white/40">
										Mission Standard
									</p>
									<p className="mt-2 text-sm leading-6 text-white/75">
										Build practical tools that reduce friction between discovery, triage, preservation, and escalation.
									</p>
								</div>

								<div className="rounded-2xl border border-white/10 bg-black/30 p-4">
									<p className="text-xs uppercase tracking-[0.2em] text-white/40">
										Core Ethos
									</p>
									<p className="mt-2 text-sm leading-6 text-white/75">
										Precision over noise. Action over theatre. Protection over passivity.
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section id="mission" className="grid gap-6 border-t border-white/10 py-14 lg:grid-cols-3">
					<div>
						<p className="text-xs uppercase tracking-[0.3em] text-red-300">Mission</p>
						<h2 className="mt-4 text-3xl font-semibold text-white">
							A defensive technology initiative aimed at online child protection.
						</h2>
					</div>

					<div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 lg:col-span-2">
						<p className="text-base leading-8 text-white/75">
							We are building focused technical capability around the detection of exploitative media,
							the preservation of actionable evidence, and the generation of reporting pathways that
							support responsible escalation. Redwing Labs exists to strengthen the ability to identify
							harm, reduce response friction, and help protect those who cannot protect themselves.
						</p>
					</div>
				</section>

				<section id="capabilities" className="border-t border-white/10 py-14">
					<div className="mb-8">
						<p className="text-xs uppercase tracking-[0.3em] text-red-300">Capabilities</p>
						<h2 className="mt-4 text-3xl font-semibold text-white">
							Focused development across detection, triage, and reporting workflows.
						</h2>
					</div>

					<div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
						{[
							{
								title: "Detection Systems",
								text: "Perceptual hashing, matching workflows, and tooling for identifying known harmful material.",
							},
							{
								title: "Secure Logging",
								text: "Structured logs and evidence-aware record handling designed for traceability and review.",
							},
							{
								title: "Automated Reporting",
								text: "Workflow automation that supports escalation, documentation, and downstream action.",
							},
							{
								title: "Operational Research",
								text: "Intelligence-informed analysis and technical investigation support around harmful online ecosystems.",
							},
						].map((item) => (
							<div
								key={item.title}
								className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-red-600/40 hover:bg-red-950/10"
							>
								<h3 className="text-lg font-semibold text-white">{item.title}</h3>
								<p className="mt-3 text-sm leading-7 text-white/70">{item.text}</p>
							</div>
						))}
					</div>
				</section>

				<section id="principles" className="border-t border-white/10 py-14">
					<div className="grid gap-6 lg:grid-cols-2">
						<div>
							<p className="text-xs uppercase tracking-[0.3em] text-red-300">Principles</p>
							<h2 className="mt-4 text-3xl font-semibold text-white">
								Serious work demands clarity, discipline, and restraint.
							</h2>
						</div>

						<div className="grid gap-4">
							{[
								"Protect victims and vulnerable children above all else.",
								"Build practical systems, not empty slogans.",
								"Preserve evidence integrity and support responsible reporting.",
								"Use technology in service of defense, accountability, and action.",
							].map((line) => (
								<div
									key={line}
									className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm text-white/75"
								>
									{line}
								</div>
							))}
						</div>
					</div>
				</section>

				<section
					id="contact"
					className="mb-6 mt-4 rounded-[2rem] border border-red-700/20 bg-gradient-to-r from-red-950/30 to-white/[0.03] p-8"
				>
					<div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
						<div>
							<p className="text-xs uppercase tracking-[0.3em] text-red-300">Contact</p>
							<h2 className="mt-4 text-3xl font-semibold text-white">
								Looking to support, collaborate, or make contact?
							</h2>
							<p className="mt-4 max-w-2xl text-base leading-8 text-white/70">
								Use this section for partnerships, vetted collaboration, equipment support,
								or direct contact regarding the mission.
							</p>
						</div>

						<div className="flex flex-col gap-3">
							<a
								href="mailto:contact@redwinglabs.org"
								className="rounded-2xl border border-red-700/40 bg-red-700 px-6 py-4 text-center text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-red-600"
							>
								contact@redwinglabs.org
							</a>
							<div className="rounded-2xl border border-white/10 bg-black/20 px-6 py-4 text-center text-sm text-white/50">
								Replace with your real contact channel
							</div>
						</div>
					</div>
				</section>
			</div>
		</main>
	);
}
