const NewsLetters = () => {
  return (
    <div className="bg-secondary py-24 flex flex-col justify-center items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-primary mb-4">Stay Connected</h2>
        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
          Subscribe to our newsletter to stay ahead in AI.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your Email"
            className="flex-grow px-4 py-3 rounded-lg border border-input focus:outline-none focus:ring-2 focus:ring-ring"
          />
          <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors whitespace-nowrap">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetters;
