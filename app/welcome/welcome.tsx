export function Welcome() {
	return (
		<main className="relative min-h-screen bg-black text-white overflow-hidden">
			<div className="scan-lines pointer-events-none" />
			<div className="scan-sweep opacity-40 pointer-events-none" />

			<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,0,0,0.16),transparent_38%)] pointer-events-none" />

			{/* RADAR BACKGROUND */}
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

			{/* GRID */}
			<div className="pointer-events-none absolute inset-0 overflow-hidden">
				<div className="absolute inset-[-20%] animated-grid opacity-[0.04]" />
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,rgba(0,0,0,0.55)_100%)]" />
				<div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(0,0,0,0.72))]" />
			</div>

			<div className="relative z-10 mx-auto max-w-7xl px-6 py-10">

				{/* HEADER */}
				<header className="flex items-center justify-between border-b border-white/10 pb-6">
					<div className="flex items-center gap-4">
						<img src="/redwing.png" className="h-10 w-10 rounded-md object-cover" />
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
						<a href="#mission" className="hover:text-white">Mission</a>
						<a href="#halo" className="hover:text-white">HALO</a>
						<a href="#support" className="hover:text-white">Support</a>
						<a href="#contact" className="hover:text-white">Contact</a>
					</nav>
				</header>

				{/* HERO */}
				<section className="grid lg:grid-cols-[1.05fr_0.95fr] gap-16 py-20 items-center">
					<div>
						<p className="text-xs uppercase tracking-[0.32em] text-red-500 mb-6">
							ACTIVE DEFENSIVE INITIATIVE
						</p>

						<h1 className="text-5xl md:text-6xl font-semibold leading-tight">
							Detect. Disrupt. Report.
						</h1>

						<p className="mt-6 text-lg text-white/70 max-w-xl">
							We build operational tooling to identify and act against child exploitation
							networks, focusing on detection workflows, evidence integrity, and escalation.
						</p>

						<div className="mt-10 flex gap-4">
							<a href="#halo" className="px-6 py-3 bg-red-700 rounded-xl font-semibold hover:bg-red-600">
								Project HALO
							</a>
							<a href="#contact" className="px-6 py-3 border border-white/20 rounded-xl hover:bg-white hover:text-black">
								Contact
							</a>
						</div>

						<div className="mt-10 grid gap-4 sm:grid-cols-2">
							<div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
								<p className="text-xs uppercase text-red-400">Operational Focus</p>
								<p className="text-sm text-white/70 mt-3">
									Detection systems, secure evidence handling, and reporting automation.
								</p>
							</div>

							<div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
								<p className="text-xs uppercase text-red-400">Posture</p>
								<p className="text-sm text-white/70 mt-3">
									Mission-led, unfunded, and built for real defensive action.
								</p>
							</div>
						</div>
					</div>

					{/* LOGO PANEL */}
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

				{/* MISSION */}
				<section id="mission" className="border-t border-white/10 py-16">
					<h2 className="text-3xl font-semibold mb-4">A blade for the defenseless.</h2>
					<p className="text-white/70 max-w-3xl">
						Redwing Labs develops focused systems for detection, documentation, and reporting
						of exploitative content, reducing the gap between discovery and action.
					</p>
				</section>

				{/* HALO */}
				<section id="halo" className="border-t border-white/10 py-16">
					<h2 className="text-3xl font-semibold mb-6">Project HALO</h2>

					<div className="grid md:grid-cols-3 gap-6">
						{["Detection Engine", "Secure Logging", "Automated Reporting"].map((t) => (
							<div key={t} className="rounded-2xl border border-white/10 p-6">
								<h3 className="font-semibold">{t}</h3>
							</div>
						))}
					</div>
				</section>

				{/* SUPPORT */}
				<section id="support" className="border-t border-white/10 py-16">
					<h2 className="text-3xl font-semibold mb-4">Support</h2>
					<div className="flex items-center gap-4">
						<img src="/substation33.png" className="h-14 bg-white p-2 rounded" />
						<p className="text-white/70">Substation 33</p>
					</div>
				</section>

				{/* CONTACT */}
				<section id="contact" className="border-t border-white/10 py-16">
					<a href="mailto:k.sspalmer@proton.me" className="px-6 py-3 bg-red-700 rounded-xl">
						k.sspalmer@proton.me
					</a>
				</section>

			</div>
		</main>
	);
}
