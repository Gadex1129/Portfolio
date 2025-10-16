import { Code2, Blocks, Zap } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: Code2,
      title: 'Full-Stack Development',
      description: 'Expert in building end-to-end web applications with modern frameworks and best practices.',
    },
    {
      icon: Blocks,
      title: 'Web3 Solutions',
      description: 'Experienced in blockchain technology and decentralized application development.',
    },
    {
      icon: Zap,
      title: 'Performance Focused',
      description: 'Committed to delivering fast, scalable, and optimized solutions for production environments.',
    },
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-400 to-teal-400 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-lg text-slate-300 leading-relaxed">
              I'm a passionate Full-Stack and Web3 Engineer with extensive experience in building
              robust, scalable applications. My journey in software development has equipped me with
              a comprehensive skill set spanning frontend, backend, and blockchain technologies.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              I thrive on solving complex problems and transforming innovative ideas into reality.
              Whether it's crafting intuitive user interfaces or architecting efficient backend systems,
              I bring dedication and expertise to every project.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              With a strong foundation in modern web technologies and emerging blockchain solutions,
              I'm constantly exploring new ways to push the boundaries of what's possible in the digital space.
            </p>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-slate-700 to-slate-800 p-8 shadow-xl border border-slate-700">
              <div className="w-full h-full rounded-xl bg-gradient-to-br from-emerald-600 to-teal-600 flex items-center justify-center">
                <Code2 size={120} className="text-white opacity-80" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-slate-700/50 border-2 border-slate-700 hover:border-emerald-500 hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
