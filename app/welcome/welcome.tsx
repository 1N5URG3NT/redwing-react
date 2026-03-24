export function Welcome() {
	return (
		<main className="min-h-screen bg-[#050505] text-white">
			<div className="mx-auto max-w-7xl px-6 py-10">

				{/* HEADER */}
				<header className="flex items-center justify-between border-b border-white/10 pb-6">
					<div className="flex items-center gap-4">
						<div className="h-10 w-10 rounded-lg bg-red-700/20 border border-red-700/40 flex items-center justify-center text-red-400 font-bold">
							RW
						</div>
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
						<a href="#halo" className="hover:text-white">Project HALO</a>
						<a href="#capabilities" className="hover:text-white">Capabilities</a>
						<a href="#support" className="hover:text-white">Support</a>
						<a href="#contact" className="hover:text-white">Contact</a>
					</nav>
				</header>

				{/* HERO */}
				<section className="py-20">
					<p className="text-xs uppercase tracking-[0.3em] text-red-400 mb-6">
						A blade for the defenseless
					</p>

					<h1 className="text-5xl md:text-6xl font-semibold max-w-4xl leading-tight">
						Defensive systems built to identify, disrupt, and report CSAM online.
					</h1>

					<p className="mt-8 max-w-2xl text-lg text-white/70">
						Redwing Labs is a mission-driven cybersecurity initiative focused on
						detection, evidence preservation, and operational tooling that supports
						action against exploitative networks.
					</p>

					<div className="mt-10 flex gap-4">
						<a
							href="#halo"
							className="px-6 py-3 bg-red-700 rounded-xl font-semibold hover:bg-red-600"
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
				</section>

				{/* MISSION */}
				<section id="mission" className="border-t border-white/10 py-16">
					<h2 className="text-3xl font-semibold mb-6">Mission</h2>
					<p className="max-w-3xl text-white/70 leading-8">
						We develop focused technical capability to detect harmful material,
						preserve actionable evidence, and streamline reporting workflows that
						support responsible escalation. The objective is simple: reduce friction
						between discovery and action.
					</p>
				</section>

				{/* HALO */}
				<section id="halo" className="border-t border-white/10 py-16">
					<h2 className="text-3xl font-semibold mb-6">Project HALO</h2>

					<div className="grid md:grid-cols-2 gap-6">
						<div className="border border-white/10 rounded-2xl p-6 bg-white/[0.03]">
							<h3 className="font-semibold text-lg">Detection Engine</h3>
							<p className="text-sm text-white/70 mt-3">
								Perceptual hashing and matching systems designed to identify known harmful material efficiently.
							</p>
						</div>

						<div className="border border-white/10 rounded-2xl p-6 bg-white/[0.03]">
							<h3 className="font-semibold text-lg">Secure Logging</h3>
							<p className="text-sm text-white/70 mt-3">
								Evidence-aware logging pipelines built for traceability and integrity.
							</p>
						</div>

						<div className="border border-white/10 rounded-2xl p-6 bg-white/[0.03]">
							<h3 className="font-semibold text-lg">Automation</h3>
							<p className="text-sm text-white/70 mt-3">
								Workflow automation for reporting, documentation, and escalation support.
							</p>
						</div>

						<div className="border border-white/10 rounded-2xl p-6 bg-white/[0.03]">
							<h3 className="font-semibold text-lg">Intelligence Support</h3>
							<p className="text-sm text-white/70 mt-3">
								Research and analysis supporting defensive investigations into harmful ecosystems.
							</p>
						</div>
					</div>
				</section>

				{/* CAPABILITIES */}
				<section id="capabilities" className="border-t border-white/10 py-16">
					<h2 className="text-3xl font-semibold mb-6">Capabilities</h2>

					<ul className="grid md:grid-cols-2 gap-4 text-white/70">
						<li>• Detection tooling and matching systems</li>
						<li>• Secure data handling and logging</li>
						<li>• Automated reporting pipelines</li>
						<li>• OSINT and investigative support</li>
					</ul>
				</section>

				{/* SUPPORT */}
				<section id="support" className="border-t border-white/10 py-16">
					<h2 className="text-3xl font-semibold mb-6">Support</h2>

					<p className="text-white/70 max-w-2xl mb-6">
						This initiative operates without traditional funding. Equipment, infrastructure,
						and development are supported through donations and community backing.
					</p>

					<div className="border border-white/10 rounded-2xl p-6 bg-white/[0.03]">
						<p className="text-sm text-white/50 mb-2">Current Supporter</p>
						<p className="text-lg font-semibold">Substation 33</p>
					</div>
				</section>

				{/* CONTACT */}
				<section id="contact" className="border-t border-white/10 py-16">
					<h2 className="text-3xl font-semibold mb-6">Contact</h2>

					<p className="text-white/70 mb-6">
						For collaboration, support, or operational contact:
					</p>

					<a
						href="mailto:k.sspalmer@proton.me"
						className="inline-block px-6 py-4 bg-red-700 rounded-xl font-semibold hover:bg-red-600"
					>
						k.sspalmer@proton.me
					</a>
				</section>

				{/* FOOTER */}
				<footer className="border-t border-white/10 pt-6 text-xs text-white/40">
					Redwing Labs — Defensive Cyber Operations
				</footer>

			</div>
		</main>
	);
}
