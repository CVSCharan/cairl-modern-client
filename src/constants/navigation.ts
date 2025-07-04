
import { Users, Briefcase, Handshake, Book, Mic, FileText, Database, Cpu } from "lucide-react";
import AboutDropdown from "../components/header/AboutDropdown";
import ServicesDropdown from "../components/header/ServicesDropdown";
import ResearchDropdown from "../components/header/ResearchDropdown";
import HappeningsDropdown from "../components/header/HappeningsDropdown";
import FocusGroupsDropdown from "../components/header/FocusGroupsDropdown";
import ResourcesDropdown from "../components/header/ResourcesDropdown";

export const aboutUs = {
  label: "About us",
  route: "/about-us",
  component: AboutDropdown,
  links: [
    {
      title: "Who We Are",
      links: [
        { name: "Our Mission", href: "/about-us#mission" },
        { name: "Our Vision", href: "/about-us#vision" },
        { name: "Objectives", href: "/about-us#objectives" },
        { name: "Goals", href: "/about-us#goals" },
      ],
    },
    {
      title: "Advisory Team",
      links: [
        { name: "Strategic Advisor", href: "/about-us#strategic-advisors" },
        { name: "Academic Advisor", href: "/about-us#academic-advisors" },
        { name: "Industry Advisor", href: "/about-us#industry-advisors" },
        { name: "Technology Advisor", href: "/about-us#technology-advisors" },
      ],
    },
    {
      title: "Our Team",
      links: [
        {
          name: "Board Members & Management Team",
          href: "/about-us#board-members",
        },
      ],
    },
    {
      title: "MOUs & Strategic Partnerships",
      links: [{ name: "View All Partnerships", href: "/about-us#mou" }],
    },
    {
      title: "FAQs",
      links: [{ name: "Frequently Asked Questions", href: "/about-us#faqs" }],
    },
  ],
};

export const services = {
  label: "Services",
  route: "/services",
  component: ServicesDropdown,
  links: [
    {
      title: "Capacity Building & Knowledge Empowerment",
      links: [
        { name: "AI Bootcamps", href: "/services#knowledge-empowerment" },
        { name: "Workshops", href: "/services#knowledge-empowerment" },
        {
          name: "Center of Excellence",
          href: "/services#knowledge-empowerment",
        },
        {
          name: "AI Tech Conference & Summits",
          href: "/services#knowledge-empowerment",
        },
      ],
    },
    {
      title: "Innovation & Startup Support",
      links: [
        {
          name: "Hackathons & Innovation Challenges",
          href: "/services#innovation",
        },
        {
          name: "Startup Incubators & Innovation Hubs",
          href: "/services#innovation",
        },
        { name: "Joint Research Collaborations", href: "/services#innovation" },
      ],
    },
    {
      title: "Ecosystem Building & Social Impact",
      links: [
        {
          name: "AI for Social Good & Rural Outreach",
          href: "/services#eco-system",
        },
        { name: "Liaising & Policy Engagement", href: "/services#eco-system" },
      ],
    },
  ],
};

export const researchAndInnovation = {
  label: "Research & Innovation",
  route: "/research-and-innovation",
  component: ResearchDropdown,
  links: [
    {
      title: "Research & Innovation",
      links: [
        {
          name: "AI Research & Thought Leadership",
          href: "/research-and-innovation#leadership",
        },
        {
          name: "AI Education & Skill Development",
          href: "/research-and-innovation#skill-development",
        },
        {
          name: "AI Ecosystem Building & Partnerships",
          href: "/research-and-innovation#partnerships",
        },
      ],
    },
    {
      title: "Challenges & Support",
      links: [
        {
          name: "AI Hackathons & Innovation Challenges",
          href: "/research-and-innovation#hackathons",
        },
        {
          name: "AI for Social Good & Sustainability",
          href: "/research-and-innovation#sustainability",
        },
        {
          name: "AI Mentorship & Startup Support",
          href: "/research-and-innovation#mentorship",
        },
      ],
    },
  ],
};

export const happenings = {
  label: "Happenings",
  route: "/happenings",
  component: HappeningsDropdown,
  links: [
    {
      title: "Happenings",
      links: [
        { name: "Events", href: "/happenings#events" },
        { name: "Webinars", href: "/happenings#webinars" },
        { name: "Visual Journey", href: "/happenings#visual-journey" },
      ],
    },
  ],
};



export const focusGroups = {
  label: "Focus Groups",
  route: "/focus-groups",
  component: FocusGroupsDropdown,
  links: [
    {
      title: "Focus Groups",
      links: [
        {
          name: "Enterprise AI Adoption",
          href: "/focus-groups#enterprise-ai-adoption",
          icon: Briefcase,
        },
        {
          name: "Capacity Building & Knowledge Management",
          href: "/focus-groups#capacity-building",
          icon: Users,
        },
        {
          name: "Partner with CAiRL",
          href: "/focus-groups#partner",
          icon: Handshake,
        },
      ],
    },
  ],
};



export const resources = {
  label: "Resources",
  route: "/resources",
  component: ResourcesDropdown,
  links: [
    {
      title: "Knowledge Hub",
      links: [
        { name: "Blog", href: "/blogs", icon: Book },
        { name: "Podcast", href: "/podcasts", icon: Mic },
        { name: "Whitepaper", href: "/white-papers", icon: FileText },
      ],
    },
    {
      title: "AI Use Cases & Implementation",
      links: [
        {
          name: "Datasets for Innovation",
          href: "/resources#datasets",
          icon: Database,
        },
        {
          name: "Affordable AI Computing",
          href: "/resources#computing",
          icon: Cpu,
        },
      ],
    },
  ],
};

export const navigationData = [
  aboutUs,
  services,
  researchAndInnovation,
  happenings,
  focusGroups,
  resources,
];
