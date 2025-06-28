const TeamSection = ({
  title,
  members,
}: {
  title: string;
  members: { name: string; role: string; image: string }[];
}) => {
  return (
    <div className="mb-16">
      <h2 className="text-3xl font-bold text-foreground mb-12 text-center relative pb-8">
        {title}
        {/* Fancy underline */}
        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-2">
          <span className="h-1 w-10 bg-primary rounded-full"></span>
          <span className="h-1 w-6 bg-primary rounded-full"></span>
          <span className="h-1 w-4 bg-primary rounded-full"></span>
        </span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10 px-4 md:px-6">
        {members.map((member, index) => (
          <div
            key={index}
            className="bg-card rounded-xl overflow-hidden shadow-md border border-border flex flex-col h-full transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px]"
          >
            {/* Image container with fixed aspect ratio and consistent sizing */}
            <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden bg-muted">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Text content with centered alignment */}
            <div className="p-6 flex-grow flex flex-col items-center text-center">
              <h3 className="text-xl font-bold text-foreground mb-2">
                {member.name}
              </h3>
              <p className="text-muted-foreground text-sm font-medium tracking-wide uppercase">
                {member.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
