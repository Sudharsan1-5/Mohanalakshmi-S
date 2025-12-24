export function About() {
  return (
    <section id="about" className="py-12 md:py-24 px-4 bg-muted/30">
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight">Profile</h2>
          <div className="h-1 w-10 bg-primary mx-auto rounded-full mt-2" />
        </div>

        {/* Content Container */}
        <div className="relative">
          {/* Decorative side accent for desktop, subtle border for mobile */}
          <div className="hidden md:block absolute -left-6 top-0 bottom-0 w-1 bg-primary/20 rounded-full" />
          
          <div className="space-y-5 md:space-y-6 text-sm md:text-lg leading-relaxed text-foreground/90">
            <p className="border-l-2 border-primary/30 pl-4 md:border-none md:pl-0">
              <span className="font-semibold text-primary">Entry-level Data Scientist</span> with hands-on 
              experience in machine learning, statistical modeling, and data analysis using real-world 
              datasets. Proficient in <span className="text-foreground font-medium">Python, SQL, Power BI, and scikit-learn</span> to 
              build end-to-end data solutions.
            </p>

            <p className="border-l-2 border-primary/30 pl-4 md:border-none md:pl-0">
              Experienced in production IT environments through <span className="italic">L1.5 support roles</span>, 
              offering strong exposure to data validation, incident analysis, and cross-team collaboration. 
              Adept at translating technical findings into <span className="font-medium text-foreground">clear, business-relevant insights.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
