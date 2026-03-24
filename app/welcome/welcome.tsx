export function Welcome() {
	return (
		<main className="min-h-screen bg-black text-white overflow-hidden">

			{/* BACKGROUND GRID + GLOW */}
			<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,0,0,0.15),transparent_40%)] pointer-events-none" />
			<div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:40px_40px]" />

			<div className="relative z-10 mx-auto max-w-7xl px-6 py-10">

				{/* HEADER */}
				<header className="flex items-center justify-between border-b border-white/10 pb-6">
					<div className="flex items-center gap-4">
						<img src="/redwing.png" className="h-10" />
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
						<a href="#mission">Mission</a>
						<a href="#halo">HALO</a>
						<a href="#support">Support</a>
						<a href="#contact">Contact</a>
					</nav>
				</header>

				{/* HERO */}
				<section className="grid lg:grid-cols-2 gap-16 py-20 items-center">

					<div>
						<p className="text-xs uppercase tracking-[0.3em] text-red-500 mb-6">
							ACTIVE DEFENSIVE INITIATIVE
						</p>

						<h1 className="text-5xl md:text-6xl font-semibold leading-tight">
							Detect. Disrupt. Report.
						</h1>

						<p className="mt-6 text-lg text-white/70 max-w-xl">
							We build operational tooling to identify and act against CSAM networks.
							Focused on detection, evidence integrity, and real-world escalation.
						</p>

						<div className="mt-10 flex gap-4">
							<a className="px-6 py-3 bg-red-700 rounded-xl font-semibold hover:bg-red-600">
								Project HALO
							</a>

							<a
								href="#contact"
								className="px-6 py-3 border border-white/20 rounded-xl hover:bg-white hover:text-black transition"
							>
								Contact
							</a>
						</div>
					</div>

					{/* HERO IMAGE */}
					<div className="relative">
						<img
							src="/redwing.png"
							className="opacity-80 mix-blend-lighten"
						/>
						<div className="absolute inset-0 bg-red-600/20 blur-3xl" />
					</div>

				</section>

				{/* HALO */}
				<section id="halo" className="border-t border-white/10 py-16">
					<h2 className="text-3xl font-semibold mb-6">Project HALO</h2>

					<p className="max-w-2xl text-white/70 mb-10">
						A system designed to reduce the gap between detection and action.
						Built around hashing, logging, and automated reporting pipelines.
					</p>

					<div className="grid md:grid-cols-3 gap-6">
						{[
							"Detection Engine",
							"Secure Logging",
							"Automated Reporting"
						].map((item) => (
							<div
								key={item}
								className="border border-white/10 rounded-2xl p-6 bg-white/[0.03] hover:border-red-600/40 transition"
							>
								<h3 className="font-semibold">{item}</h3>
							</div>
						))}
					</div>
				</section>

				{/* SUPPORT */}
				<section id="support" className="border-t border-white/10 py-16">
					<h2 className="text-3xl font-semibold mb-6">Support</h2>

					<p className="text-white/70 mb-6">
						This operation is supported by community and external partners.
					</p>

					<div className="flex items-center gap-6">
						<img src="/substation33.png" className="h-16 bg-white p-2 rounded" />
						<div>
							<p className="font-semibold">Substation 33</p>
							<p className="text-sm text-white/50">Equipment and infrastructure support</p>
						</div>
					</div>
				</section>

				{/* CONTACT */}
				<section id="contact" className="border-t border-white/10 py-16">
					<h2 className="text-3xl font-semibold mb-6">Contact</h2>

					<a
						href="mailto:k.sspalmer@proton.me"
						className="px-6 py-4 bg-red-700 rounded-xl font-semibold hover:bg-red-600"
					>
						k.sspalmer@proton.me
					</a>
				</section>

			</div>
		</main>
	);
}
