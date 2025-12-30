import { ParticleTextEffect } from "./particle-text-effect"

export function HeroSection() {
  return (
    <section className="py-8 md:py-20 px-4 relative overflow-hidden min-h-screen flex flex-col justify-between">
      <div className="flex-1 flex items-center justify-center pt-8 md:pt-20 pb-8 md:pb-0 relative w-full h-full">
        <div className="relative z-20 w-full h-full min-h-[400px] md:min-h-[600px]">
          <ParticleTextEffect words={["Kunthive", "Digital"]} />
        </div>
      </div>

      <div className="container mx-auto text-center relative z-30 pb-8 md:pb-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="mt-8 md:mt-16 mb-4 md:mb-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-4 md:mb-6 text-balance">
                Transform Your Business with <span className="text-gray-300">Digital Excellence</span>
              </h2>
              <p className="text-sm md:text-lg lg:text-xl text-gray-400 mb-4 md:mb-8 max-w-2xl mx-auto px-2">
                Web applications, SEO optimization, social media management, business digitization, and AI-powered workflows
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
