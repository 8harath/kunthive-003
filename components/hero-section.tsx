import { ParticleTextEffect } from "./particle-text-effect"

export function HeroSection() {
  return (
    <section className="py-20 px-4 relative overflow-hidden min-h-screen flex flex-col justify-between">
      <div className="flex-1 flex items-start justify-center pt-20">
        <ParticleTextEffect words={["Kunthive", "Digital"]} />
      </div>

      <div className="container mx-auto text-center relative z-10 pb-8">
        <div className="max-w-4xl mx-auto">
          <div className="mt-16 mb-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-balance">
                Transform Your Business with <span className="text-gray-300">Digital Excellence</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                Web applications, SEO optimization, social media management, business digitization, and AI-powered workflows
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
