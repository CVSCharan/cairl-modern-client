export interface Webinar {
  id: string;
  title: string;
  topic: string;
  date: string;
  description: string;
  imageUrl: string;
  type: string;
  location: string;
  videoUrl?: string;
  speaker?: {
    name: string;
    title: string;
    imageUrl: string;
  };
  highlights?: string[];
  aboutWebinar: string;
}
