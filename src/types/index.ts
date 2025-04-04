export interface Tour {
  id: string;
  title: string;
  destination: string;
  duration: number;
  price: number;
  rating: number;
  image: string;
  description: string;
  highlights: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  avatar: string;
  role: string;
  content: string;
  rating: number;
}