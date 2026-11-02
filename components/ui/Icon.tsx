import type { IconType } from "react-icons";
import {
  FaArrowLeft,
  FaArrowRight,
  FaArrowUp,
  FaBars,
  FaBriefcase,
  FaBriefcaseMedical,
  FaCar,
  FaChevronDown,
  FaChevronRight,
  FaClock,
  FaCoins,
  FaEnvelope,
  FaFacebookF,
  FaFileAlt,
  FaFileSignature,
  FaHandHoldingUsd,
  FaHeadset,
  FaHeartbeat,
  FaHome,
  FaInstagram,
  FaLinkedinIn,
  FaLock,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaPlane,
  FaRegCalendarAlt,
  FaRegClock,
  FaRegCommentDots,
  FaRegStar,
  FaRegUser,
  FaSearch,
  FaShieldAlt,
  FaStar,
  FaTimes,
  FaUserEdit,
  FaUsers,
  FaYoutube,
  FaRegCircle,
} from "react-icons/fa";

// Every icon the site can use, by the name templates.json stores. A new icon is added here once.
const icons: Record<string, IconType> = {
  FaArrowLeft,
  FaArrowRight,
  FaArrowUp,
  FaBars,
  FaBriefcase,
  FaBriefcaseMedical,
  FaCar,
  FaChevronDown,
  FaChevronRight,
  FaClock,
  FaCoins,
  FaEnvelope,
  FaFacebookF,
  FaFileAlt,
  FaFileSignature,
  FaHandHoldingUsd,
  FaHeadset,
  FaHeartbeat,
  FaHome,
  FaInstagram,
  FaLinkedinIn,
  FaLock,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaPlane,
  FaRegCalendarAlt,
  FaRegClock,
  FaRegCommentDots,
  FaRegStar,
  FaRegUser,
  FaSearch,
  FaShieldAlt,
  FaStar,
  FaTimes,
  FaUserEdit,
  FaUsers,
  FaYoutube,
};

type Props = {
  name: string;
  className?: string;
};

export const Icon = ({ name, className }: Props) => {
  const Glyph = icons[name];
  if (!Glyph) {
    if (process.env.NODE_ENV !== "production") console.warn(`Icon "${name}" is not in components/ui/Icon.tsx`);
    return <FaRegCircle aria-hidden="true" className={className} />;
  }
  return <Glyph aria-hidden="true" className={className} />;
};
