import { useNavigate } from "react-router-dom";
import { Home, ArrowLeft, HelpCircle, Mail } from "lucide-react";
import SEOMetadata from "../components/seo/SEOMetadata";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-background flex items-center justify-center p-4">
      <SEOMetadata
        title="404 - Page Not Found | CAiRL"
        description="The page you are looking for does not exist or has been moved. Please return to the homepage or contact support."
        keywords="404, not found, page not found, CAiRL"
        ogTitle="404 - Page Not Found | CAiRL"
        ogDescription="The page you are looking for does not exist or has been moved. Please return to the homepage or contact support."
        ogUrl={window.location.href}
        twitterTitle="404 - Page Not Found | CAiRL"
        twitterDescription="The page you are looking for does not exist or has been moved. Please return to the homepage or contact support."
      />
      <div className="relative z-10 max-w-2xl w-full text-center">
        <div className="mb-6 md:mb-8">
          <h1 className="text-7xl sm:text-8xl md:text-9xl font-bold text-primary opacity-10">404</h1>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground -mt-16 sm:-mt-20 mb-3 md:mb-4">
            Oops! Page Not Found
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-8 md:mb-12">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center justify-center px-5 py-2 md:px-6 md:py-3 bg-secondary text-secondary-foreground rounded-md font-medium hover:bg-secondary/80 transition-colors text-sm md:text-base"
          >
            <ArrowLeft className="w-4 h-4 md:w-5 md:h-5 mr-2" />
            Go Back
          </button>
          <button
            onClick={() => navigate("/")}
            className="inline-flex items-center justify-center px-5 py-2 md:px-6 md:py-3 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition-colors text-sm md:text-base"
          >
            <Home className="w-4 h-4 md:w-5 md:h-5 mr-2" />
            Return Home
          </button>
        </div>

        <div className="p-4 md:p-6 bg-card rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-card-foreground mb-3">
            Need more help?
          </h3>
          <p className="text-sm md:text-base text-muted-foreground mb-4">
            Contact our support team or browse our frequently asked questions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4">
            <button
              onClick={() => navigate("/contact")}
              className="inline-flex items-center justify-center px-5 py-2 md:px-6 text-primary border border-primary rounded-md hover:bg-accent transition-colors text-sm md:text-base"
            >
              <Mail className="w-4 h-4 md:w-5 md:h-5 mr-2" />
              Contact Support
            </button>
            <button
              onClick={() => navigate("/faq")}
              className="inline-flex items-center justify-center px-5 py-2 md:px-6 text-primary border border-primary rounded-md hover:bg-accent transition-colors text-sm md:text-base"
            >
              <HelpCircle className="w-4 h-4 md:w-5 md:h-5 mr-2" />
              Visit FAQ
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
