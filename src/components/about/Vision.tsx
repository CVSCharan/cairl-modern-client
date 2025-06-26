const Vision = () => {
  return (
    <section
      id="vision"
      className="relative bg-transparent text-center flex flex-col items-center mb-12 pt-10"
    >
      {/* Top wavy border */}
      <div className="absolute top-0 left-0 right-0 w-full h-12 overflow-hidden">
        <img
          src="https://res.cloudinary.com/dnyouhvwj/image/upload/v1750247127/wavy-top-gray_rkk6ly.png"
          alt="Wavy top border"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="text-center flex flex-col items-center my-12 mt-24 px-4 z-10 w-full max-w-4xl">
        {/* Vision Header */}
        <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
          Our Vision
        </div>

        {/* Vision Title */}
        <h1 className="text-4xl font-bold text-foreground mb-6">
          A World Empowered by AI
        </h1>

        {/* Vision Description */}
        <p className="text-lg text-muted-foreground mb-12 max-w-3xl">
          Our vision is to create a future where AI is seamlessly integrated
          into every aspect of life, improving human welfare, enabling
          sustainable development, and empowering communities around the world.
          At CAiRL, we aim to be a leader in the global AI ecosystem, driving
          responsible AI innovation that benefits humanity.
        </p>
      </div>
    </section>
  );
};

export default Vision;
