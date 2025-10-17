import { Code, Database, Server, Palette, GitBranch, Award, TrendingUp } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  icon: string;
  description: string;
  yearsOfExperience: number;
  projects: number;
}

interface SkillCategory {
  title: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  skills: Skill[];
}

export default function Skills() {
  const skillCategories: SkillCategory[] = [
    {
      title: 'Frontend Development',
      icon: Code,
      skills: [
        { name: 'React', level: 95, icon: '⚛️', description: 'Advanced hooks, context, and state management', yearsOfExperience: 5, projects: 45 },
        { name: 'HTML', level: 98, icon: '📄', description: 'Semantic HTML5 and accessibility standards', yearsOfExperience: 7, projects: 80 },
        { name: 'CSS', level: 95, icon: '🎨', description: 'Modern CSS, animations, and responsive design', yearsOfExperience: 7, projects: 75 },
        { name: 'Tailwind CSS', level: 95, icon: '🌊', description: 'Custom configurations and design systems', yearsOfExperience: 3, projects: 50 },
      ],
    },
    {
      title: 'Backend Development',
      icon: Server,
      skills: [
        { name: 'Node.js', level: 90, icon: '🟢', description: 'Express, NestJS, and microservices architecture', yearsOfExperience: 5, projects: 40 },
        { name: 'Python', level: 85, icon: '🐍', description: 'Django, Flask, and data processing', yearsOfExperience: 4, projects: 28 },
        { name: 'PHP', level: 88, icon: '🐘', description: 'Modern PHP 8+ and RESTful API development', yearsOfExperience: 5, projects: 35 },
        { name: 'Laravel', level: 87, icon: '🔺', description: 'Full-stack Laravel applications and Eloquent ORM', yearsOfExperience: 4, projects: 30 },
      ],
    },
    {
      title: 'Database Management',
      icon: Database,
      skills: [
        { name: 'PostgreSQL', level: 90, icon: '🐘', description: 'Complex queries, optimization, and replication', yearsOfExperience: 5, projects: 38 },
        { name: 'MySQL', level: 92, icon: '🐬', description: 'Database design, indexing, and performance tuning', yearsOfExperience: 6, projects: 42 },
        { name: 'MongoDB', level: 88, icon: '🍃', description: 'NoSQL design patterns and aggregation pipelines', yearsOfExperience: 4, projects: 35 },
      ],
    },
    {
      title: 'Design Tools',
      icon: Palette,
      skills: [
        { name: 'Figma', level: 85, icon: '🎨', description: 'UI/UX design, prototyping, and design systems', yearsOfExperience: 3, projects: 25 },
        { name: 'Adobe XD', level: 82, icon: '✨', description: 'Interactive prototypes and wireframing', yearsOfExperience: 3, projects: 20 },
      ],
    },
    {
      title: 'Version Control',
      icon: GitBranch,
      skills: [
        { name: 'Git', level: 95, icon: '📦', description: 'Advanced branching, rebasing, and collaboration', yearsOfExperience: 7, projects: 100 },
      ],
    },
  ];

  const getProgressColor = (level: number) => {
    if (level >= 90) return 'from-emerald-500 to-teal-500';
    if (level >= 80) return 'from-teal-500 to-cyan-500';
    return 'from-cyan-500 to-blue-500';
  };

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-400 to-teal-400 mx-auto rounded-full mb-4" />
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Comprehensive expertise across the full technology stack
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const CategoryIcon = category.icon;
            return (
              <div
                key={categoryIndex}
                className="bg-slate-800/50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-slate-700"
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-600 flex items-center justify-center">
                    <CategoryIcon size={24} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="group bg-slate-700/50 rounded-xl p-6 border border-slate-600 hover:border-emerald-500 transition-all duration-300">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <span className="text-3xl">{skill.icon}</span>
                          <div>
                            <h4 className="font-bold text-white text-xl">{skill.name}</h4>
                            <p className="text-sm text-slate-400 mt-1">{skill.description}</p>
                          </div>
                        </div>
                        <span className="text-sm font-bold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                          {skill.level}%
                        </span>
                      </div>

                      <div className="relative h-3 bg-slate-600 rounded-full overflow-hidden mb-4">
                        <div
                          className={`absolute left-0 top-0 h-full bg-gradient-to-r ${getProgressColor(
                            skill.level
                          )} rounded-full transition-all duration-1000 ease-out group-hover:shadow-lg`}
                          style={{
                            width: `${skill.level}%`,
                            animation: 'progressBar 1.5s ease-out',
                          }}
                        >
                          <div className="absolute inset-0 bg-white/20 animate-pulse" />
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2 text-slate-400">
                          <TrendingUp size={16} className="text-emerald-400" />
                          <span>{skill.yearsOfExperience} years exp</span>
                        </div>
                        <div className="flex items-center gap-2 text-slate-400">
                          <Award size={16} className="text-teal-400" />
                          <span>{skill.projects}+ projects</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block bg-slate-800/50 rounded-2xl p-8 shadow-lg border border-slate-700">
            <h3 className="text-xl font-bold text-white mb-4">Skill Proficiency Legend</h3>
            <div className="flex flex-wrap items-center justify-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-8 h-3 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500" />
                <span className="text-sm text-slate-300">Expert (90-100%)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-3 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500" />
                <span className="text-sm text-slate-300">Advanced (80-89%)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500" />
                <span className="text-sm text-slate-300">Proficient (70-79%)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes progressBar {
          from {
            width: 0%;
            opacity: 0.5;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
}
