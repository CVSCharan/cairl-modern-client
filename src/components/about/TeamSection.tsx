const TeamSection = ({
  title,
  members,
}: {
  title: string;
  members: { name: string; role: string; image: string }[];
}) => {
  return (
    <div className="mb-16">
      <h2 className="text-2xl font-bold text-foreground mb-12 text-center">
        {title}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {members.map((member, index) => (
          <div
            key={index}
            className="bg-card rounded-xl overflow-hidden shadow-sm border border-border flex flex-col h-full"
          >
            {/* Image container with fixed aspect ratio */}
            <div className="aspect-w-4 aspect-h-3 w-full overflow-hidden">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text content with centered alignment */}
            <div className="p-6 flex-grow flex flex-col items-center text-center">
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {member.name}
              </h3>
              <p className="text-primary text-base">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
