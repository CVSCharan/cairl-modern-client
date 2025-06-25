import { useNavigate } from "react-router-dom";
import { Home, ArrowLeft, HelpCircle, Mail } from "lucide-react";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="relative z-10 max-w-2xl w-full text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-primary opacity-10">404</h1>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground -mt-20 mb-4">
            Oops! Page Not Found
          </h2>
          <p className="text-lg text-muted-foreground max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center justify-center px-6 py-3 bg-secondary text-secondary-foreground rounded-md font-medium hover:bg-secondary/80 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Go Back
          </button>
          <button
            onClick={() => navigate("/")}
            className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition-colors"
          >
            <Home className="w-5 h-5 mr-2" />
            Return Home
          </button>
        </div>

        <div className="p-6 bg-card rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-card-foreground mb-3">
            Need more help?
          </h3>
          <p className="text-muted-foreground mb-4">
            Contact our support team or browse our frequently asked questions.
          </p>
          <div className="flex justify-center gap-4">
            <button
              onClick={() => navigate("/contact")}
              className="inline-flex items-center justify-center px-6 py-2 text-primary border border-primary rounded-md hover:bg-accent transition-colors"
            >
              <Mail className="w-5 h-5 mr-2" />
              Contact Support
            </button>
            <button
              onClick={() => navigate("/faq")}
              className="inline-flex items-center justify-center px-6 py-2 text-primary border border-primary rounded-md hover:bg-accent transition-colors"
            >
              <HelpCircle className="w-5 h-5 mr-2" />
              Visit FAQ
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
