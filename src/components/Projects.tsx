import { ExternalLink, Github, Wallet, ShoppingCart, BarChart3, Image as ImageIcon, Trello, MessageSquare } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  gradient: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  demoLink?: string;
  githubLink?: string;
}

export default function Projects() {
  const projects: Project[] = [
    {
      title: 'DeFi Trading Platform',
      description: 'A decentralized finance platform enabling secure cryptocurrency trading with real-time analytics and automated market making.',
      technologies: ['React', 'Node.js', 'Web3', 'PostgreSQL', 'Tailwind CSS'],
      gradient: 'from-emerald-500 to-teal-600',
      icon: Wallet,
      demoLink: '#',
      githubLink: '#',
    },
    {
      title: 'E-Commerce Solution',
      description: 'Full-featured online shopping platform with payment integration, inventory management, and real-time order tracking.',
      technologies: ['Vue', 'Laravel', 'MySQL', 'PHP', 'Tailwind CSS'],
      gradient: 'from-teal-500 to-cyan-600',
      icon: ShoppingCart,
      demoLink: '#',
      githubLink: '#',
    },
    {
      title: 'SaaS Dashboard',
      description: 'Modern analytics dashboard for business intelligence with customizable widgets and data visualization.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
      gradient: 'from-cyan-500 to-blue-600',
      icon: BarChart3,
      demoLink: '#',
      githubLink: '#',
    },
    {
      title: 'NFT Marketplace',
      description: 'Blockchain-based marketplace for creating, buying, and selling NFTs with smart contract integration.',
      technologies: ['React', 'Web3', 'Node.js', 'PostgreSQL'],
      gradient: 'from-blue-500 to-violet-600',
      icon: ImageIcon,
      demoLink: '#',
      githubLink: '#',
    },
    {
      title: 'Project Management Tool',
      description: 'Collaborative platform for team productivity with task management, time tracking, and reporting features.',
      technologies: ['Vue', 'Python', 'PostgreSQL', 'Tailwind CSS'],
      gradient: 'from-violet-500 to-purple-600',
      icon: Trello,
      demoLink: '#',
      githubLink: '#',
    },
    {
      title: 'Social Media Platform',
      description: 'Real-time social networking application with messaging, media sharing, and advanced user engagement features.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
      gradient: 'from-purple-500 to-pink-600',
      icon: MessageSquare,
      demoLink: '#',
      githubLink: '#',
    },
  ];

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-400 to-teal-400 mx-auto rounded-full mb-4" />
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            A showcase of my recent work across web development and blockchain technologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            console.log(project);
            const ProjectIcon = project.icon;
            return (
              <div
                key={index}
                className="group bg-slate-700/50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-600 hover:border-emerald-500 hover:-translate-y-2"
              >
                <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-all duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 border border-white/20">
                      <ProjectIcon size={48} className="text-white" />
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="w-16 h-16 rounded-full bg-white/5 backdrop-blur-sm border border-white/10" />
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10" />
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-xs font-medium bg-slate-600/50 text-slate-300 rounded-full border border-slate-500 group-hover:bg-emerald-500/10 group-hover:text-emerald-400 group-hover:border-emerald-500/30 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    {project.demoLink && (
                      <a
                        href={project.demoLink}
                        className="flex items-center gap-2 text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                    )}
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        className="flex items-center gap-2 text-sm font-semibold text-slate-400 hover:text-white transition-colors"
                      >
                        <Github size={16} />
                        Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
