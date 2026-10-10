export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "rahul-mehta",
    quote:
      "Manav Canvassers made sourcing cattle feed ingredients effortless. Their brokerage network is unmatched — we get the best prices without the hassle of dealing with multiple suppliers.",
    name: "Rahul Mehta",
    role: "Director, Mehta Agro Exports",
  },
  {
    id: "ankit-shah",
    quote:
      "As a feed mill operator, finding reliable raw material suppliers was our biggest challenge. Manav Canvassers bridges that gap perfectly — consistent quality, transparent pricing.",
    name: "Ankit Shah",
    role: "Operations Head, Global Feed Solutions",
  },
  {
    id: "priya-patel",
    quote:
      "Their deep understanding of the cattle feed market and their ability to negotiate competitive deals has saved us both time and money. A truly dependable B2B partner.",
    name: "Priya Patel",
    role: "Procurement Manager, Patel Organics",
  },
  {
    id: "sanjay-verma",
    quote:
      "We have been working with Manav Canvassers for over five years. Their prompt communication and vast network of trusted suppliers give us immense confidence in our supply chain.",
    name: "Sanjay Verma",
    role: "Founder, Verma Dairy Feeds",
  },
  {
    id: "neha-singh",
    quote:
      "Professional, efficient, and always looking out for their clients' best interests. Their market insights on grain pricing have been invaluable for our seasonal purchasing strategy.",
    name: "Neha Singh",
    role: "Head of Sourcing, Singh & Sons Agro",
  },
];
