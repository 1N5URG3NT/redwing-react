export function Welcome() {
	return (
		<main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
			<div className="max-w-3xl text-center">
				<h1 className="text-5xl font-bold tracking-tight mb-6">
					Redwing Labs
				</h1>

				<p className="text-xl text-gray-300 mb-4">
					Cybersecurity, research, and technical development.
				</p>

				<p className="text-base text-gray-400 mb-8">
					Building practical systems, defensive capability, and mission-focused tools.
				</p>

				<div className="flex flex-col sm:flex-row gap-4 justify-center">
					<a
						href="#"
						className="rounded-xl bg-white text-black px-6 py-3 font-semibold hover:opacity-90"
					>
						Learn More
					</a>

					<a
						href="#"
						className="rounded-xl border border-gray-600 px-6 py-3 font-semibold hover:bg-white hover:text-black transition"
					>
						Contact
					</a>
				</div>
			</div>
		</main>
	);
}
