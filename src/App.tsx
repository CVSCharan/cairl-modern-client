import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Landing from "./pages/Landing";
import Layout from "./components/Layout";
import ChatBot from "./components/ChatBot";
import ScrollToTop from "./components/ui/ScrollToTop";
import About from "./pages/About";
import Happening from "./pages/Happening";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/happenings" element={<Happening />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        {/* ChatBot component available on all pages */}
        <ChatBot />
        <ScrollToTop />
      </Layout>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
