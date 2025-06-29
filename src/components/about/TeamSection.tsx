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

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10 px-4 md:px-6 items-stretch justify-center">
        {members.map((member, index) => (
          <div
            key={index}
            className="bg-card rounded-xl overflow-hidden shadow-md border border-border flex flex-col transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px]"
          >
            {/* Image container with aspect ratio */}
            <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden bg-muted flex-shrink-0">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Text content with centered alignment and fixed minimum height */}
            <div className="p-6 flex-grow flex flex-col items-center justify-center text-center min-h-[100px]">
              <h3 className="text-xl font-bold text-foreground mb-2">
                {member.name}
              </h3>
              <p className="text-muted-foreground text-sm font-medium tracking-wide uppercase line-clamp-2 h-10 flex-none">
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
