import {
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  BriefcaseBusiness,
  BriefcaseMedical,
  CalendarDays,
  CarFront,
  ChevronDown,
  ChevronRight,
  Clock,
  Coins,
  FileCheck,
  FileSearch,
  FileText,
  FileUser,
  HandCoins,
  Headset,
  HeartPulse,
  House,
  Menu,
  PhoneCall,
  MessageSquare,
  Plane,
  Shield,
  ShieldCheck,
  Star,
  User,
  Users,
  X,
  type LucideIcon,
} from "lucide-react";

const line: Record<string, LucideIcon> = {
  "arrow-left": ArrowLeft,
  "arrow-right": ArrowRight,
  "arrow-up": ArrowUp,
  briefcase: BriefcaseBusiness,
  "briefcase-medical": BriefcaseMedical,
  calendar: CalendarDays,
  car: CarFront,
  "chevron-down": ChevronDown,
  "chevron-right": ChevronRight,
  clock: Clock,
  coins: Coins,
  "file-check": FileCheck,
  "file-search": FileSearch,
  "file-text": FileText,
  "file-user": FileUser,
  "hand-coins": HandCoins,
  headset: Headset,
  "heart-pulse": HeartPulse,
  home: House,
  menu: Menu,
  "phone-call": PhoneCall,
  message: MessageSquare,
  plane: Plane,
  shield: Shield,
  "shield-check": ShieldCheck,
  star: Star,
  user: User,
  users: Users,
  close: X,
};

// Outline glyphs that lucide does not ship, drawn on the same 24px grid.
const outline: Record<string, string[]> = {
  "users-three": [
    "M12 11.2a3.1 3.1 0 1 0 0-6.2 3.1 3.1 0 0 0 0 6.2z",
    "M6.6 19.5v-1.2a5.4 5.4 0 0 1 10.8 0v1.2z",
    "M5.2 12a2.3 2.3 0 1 0 0-4.6 2.3 2.3 0 0 0 0 4.6z",
    "M4.3 18.6H1.6v-1a3.6 3.6 0 0 1 4.3-3.5",
    "M18.8 12a2.3 2.3 0 1 0 0-4.6 2.3 2.3 0 0 0 0 4.6z",
    "M19.7 18.6h2.7v-1a3.6 3.6 0 0 0-4.3-3.5",
  ],
  "shield-badge": [
    "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
    "M12 9l2.6 1.5v3L12 15l-2.6-1.5v-3z",
  ],
};

// Filled glyphs that lucide does not ship (solid contact icons and brand marks).
const solid: Record<string, string> = {
  "phone-solid":
    "M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z",
  "mail-solid":
    "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z",
  "pin-solid":
    "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z",
  "clock-solid":
    "M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4.2 14.2L11 13V7h1.5v5.2l4.5 2.7-.8 1.3z",
  "lock-solid":
    "M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z",
  "star-solid":
    "M12 2.5l2.94 5.96 6.56.95-4.75 4.63 1.12 6.54L12 17.5l-5.87 3.08 1.12-6.54L2.5 9.41l6.56-.95L12 2.5z",
  facebook:
    "M13.5 22v-8h2.7l.4-3.2h-3.1V8.8c0-.9.3-1.6 1.6-1.6h1.7V4.3c-.3 0-1.3-.1-2.4-.1-2.4 0-4.1 1.5-4.1 4.2v2.4H7.6V14h2.7v8h3.2z",
  instagram:
    "M12 2.2c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.15 3.22-1.66 4.77-4.92 4.92-1.27.06-1.64.07-4.85.07s-3.58-.01-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85C2.38 3.92 3.9 2.38 7.15 2.23 8.42 2.17 8.8 2.2 12 2.2zm0 1.8c-3.15 0-3.5.01-4.74.07-2.3.1-3.2 1.02-3.3 3.3C3.9 8.6 3.9 8.96 3.9 12s.01 3.4.06 4.63c.1 2.28 1 3.2 3.3 3.3 1.24.06 1.6.07 4.74.07s3.5-.01 4.74-.07c2.3-.1 3.2-1.02 3.3-3.3.06-1.24.07-1.6.07-4.63s-.01-3.4-.07-4.63c-.1-2.28-1-3.2-3.3-3.3C15.5 4.01 15.15 4 12 4zm0 2.9a5.1 5.1 0 1 1 0 10.2 5.1 5.1 0 0 1 0-10.2zm0 1.8a3.3 3.3 0 1 0 0 6.6 3.3 3.3 0 0 0 0-6.6zm5.3-3.2a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4z",
  linkedin:
    "M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z",
  youtube:
    "M21.6 7.2a2.5 2.5 0 0 0-1.76-1.77C18.25 5 12 5 12 5s-6.25 0-7.84.43A2.5 2.5 0 0 0 2.4 7.2 26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.76 1.77C5.75 19 12 19 12 19s6.25 0 7.84-.43a2.5 2.5 0 0 0 1.76-1.77A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.8zM10 15V9l5.2 3-5.2 3z",
};

type Props = {
  name: string;
  className?: string;
  strokeWidth?: number;
};

export default function Icon({ name, className, strokeWidth = 1.75 }: Props) {
  if (solid[name]) {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
        <path d={solid[name]} />
      </svg>
    );
  }
  if (outline[name]) {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className={className}
      >
        {outline[name].map((d) => (
          <path key={d} d={d} />
        ))}
      </svg>
    );
  }
  const Line = line[name];
  if (!Line) return null;
  return <Line aria-hidden="true" className={className} strokeWidth={strokeWidth} />;
}
