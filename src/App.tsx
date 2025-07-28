import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Landing from "./pages/Landing";
import Layout from "./components/Layout";
import ChatBot from "./components/ChatBot";
import FAQButton from "./components/FAQButton";
import ScrollToTop from "./components/ui/ScrollToTop";
import About from "./pages/About";
import Happening from "./pages/Happening";
import BootcampDetails from "./pages/BootcampDetails";
import Bootcamps from "./pages/Bootcamps";
import Engage from "./pages/Engage";
import Services from "./pages/Services";
import ResearchAndInnovation from "./pages/ResearchAndInnovation";
import Webinars from "./pages/Webinar";
import FocusGroups from "./pages/FocusGroups";
import VisualJourney from "./pages/VisualJourney";
// import WhitePapers from "./pages/WhitePapers";
// import WhitePaperDetails from "./pages/WhitePaperDetails";
import Resources from "./pages/Resources";
import Podcasts from "./pages/Podcasts";
// import Blogs from "./pages/Blogs";
// import BlogDetails from "./pages/BlogDetails";
import UnderConstruction from "./pages/UnderConstruction";
import MOU from "./pages/MOU";
import WebinarDetails from "./pages/WebinarDetails";
import Courses from "./pages/Courses";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/engage-with-us" element={<Engage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/ai-bootcamps" element={<Bootcamps />} />
          <Route path="/ai-bootcamps/:id" element={<BootcampDetails />} />
          <Route path="/happenings" element={<Happening />} />
          <Route path="/webinar/:id" element={<WebinarDetails />} />
          <Route
            path="/research-and-innovation"
            element={<ResearchAndInnovation />}
          />
          <Route path="/webinars" element={<Webinars />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/mous" element={<MOU />} />
          <Route path="/blogs" element={<UnderConstruction />} />
          <Route path="/blogs/:id" element={<UnderConstruction />} />
          <Route path="/focus-groups" element={<FocusGroups />} />
          <Route path="/visual-journey" element={<VisualJourney />} />
          <Route path="/white-papers" element={<UnderConstruction />} />
          <Route path="/white-papers/:id" element={<UnderConstruction />} />
          <Route path="/podcasts" element={<Podcasts />} />
          <Route path="/services/courses" element={<Courses />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        {/* ChatBot component available on all pages */}
        <ChatBot />
        <FAQButton />
        <ScrollToTop />
      </Layout>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
