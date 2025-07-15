const stats = [
  {
    number: "10+",
    label: "años de experiencia"
  },
  {
    number: "80+", 
    label: "proyectos exitosos"
  },
  {
    number: "50+",
    label: "clientes satisfechos"
  },
  {
    number: "15+",
    label: "países alcanzados"
  },
  {
    number: "95%",
    label: "tasa de éxito"
  }
];

const StatsSection = () => {
  return (
    <section id="stats" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center bg-card p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-4xl md:text-5xl font-bold text-accent mb-4">
                {stat.number}
              </div>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;