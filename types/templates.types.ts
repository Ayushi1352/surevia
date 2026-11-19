import type { CSSProperties } from "react";

export interface ThemeFonts {
  primary: string;
  heading: string;
}

export interface ThemeData {
  fonts: ThemeFonts;
}

export type ThemeFontVariables = CSSProperties & {
  "--font-primary": string;
  "--font-heading": string;
};

export interface SeoData {
  title: string;
  description: string;
}

export interface SiteMetadataData {
  title: string;
  siteName: string;
  description: string;
  icon: string;
  lang: string;
}

export interface GlobalUIData {
  breadcrumbLabel: string;
}

export interface LinkItem {
  id: string;
  label: string;
  url: string;
}

export interface LinkGroup {
  title: string;
  links: LinkItem[];
}

export interface SocialLink extends LinkItem {
  icon: string;
}

/** Logo shown by the header and the footer. */
export interface BrandData {
  logo: string;
  logoAlt: string;
  logoUrl: string;
  logoWidth: number;
  logoHeight: number;
}

/** Address, phone, email or opening hours line; "\n" in `text` starts a new line. Items with a url are links. */
export interface ContactItem {
  id: string;
  icon: string;
  text: string;
  url?: string;
}

/** Labels and icons of a slider's previous / next arrows. */
export interface SliderControls {
  previousLabel: string;
  previousIcon: string;
  nextLabel: string;
  nextIcon: string;
}

export interface BreadcrumbData {
  title: string;
  seo?: SeoData;
  bgImage: string;
  bgImageAlt: string;
  paths: LinkItem[];
}

export interface BreadcrumbProps {
  data?: BreadcrumbData;
  ui?: GlobalUIData;
}

export interface NotFoundData {
  seo: SeoData;
  code: string;
  title: string;
  description: string;
  buttonText: string;
  buttonUrl: string;
  buttonIcon: string;
}

export interface NotFoundProps {
  data?: NotFoundData;
}

export interface FooterData extends BrandData {
  description: string;
  socialLinks: SocialLink[];
  quickLinks: LinkGroup;
  planLinks: LinkGroup;
  linkIcon: string;
  contactTitle: string;
  contactItems: ContactItem[];
  /** "{year}" is the current year */
  copyrightText: string;
  bottomLinks: LinkItem[];
  backToTopLabel: string;
  backToTopIcon: string;
}

export interface FooterProps {
  data?: FooterData;
}

export interface HeaderNavLink extends LinkItem {
  hasDropdown?: boolean;
}

export interface HeaderData extends BrandData {
  /** Top bar: address, email and phone */
  contactItems: ContactItem[];
  socialLinks: SocialLink[];
  phoneLabel: string;
  phone: string;
  phoneUrl: string;
  phoneIcon: string;
  navLinks: HeaderNavLink[];
  dropdownLinks: LinkItem[];
  dropdownIcon: string;
  toggleDropdownLabel: string;
  buttonText: string;
  buttonUrl: string;
  buttonIcon: string;
  openMenuLabel: string;
  openMenuIcon: string;
  closeMenuLabel: string;
  closeMenuIcon: string;
}

export interface HeaderProps {
  data?: HeaderData;
}

export interface HeroSlide {
  id: string;
  eyebrow: string;
  /** "\n" starts a new line (from lg up) */
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

export interface HeroData {
  slides: HeroSlide[];
  autoplayMs: number;
  /** "{n}" is the slide number */
  goToSlideLabel: string;
  previousSlideLabel: string;
  previousSlideIcon: string;
  nextSlideLabel: string;
  nextSlideIcon: string;
}

export interface HeroSectionProps {
  data?: HeroData;
}

/** Icon, title and a short text: used by many sections. "\n" in `description` starts a new line. */
export interface FeatureItem {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface HighlightsData {
  items: FeatureItem[];
}

export interface HighlightsProps {
  data?: HighlightsData;
}

export interface AboutUsExperience {
  value: string;
  /** "\n" starts a new line */
  label: string;
}

export interface AboutUsData {
  eyebrow: string;
  title: string;
  titleHighlight: string;
  /** Text of the home page section */
  homeText: string;
  /** About Us page: one paragraph per "\n"-separated line */
  pageDescription: string;
  mainImage: string;
  mainImageAlt: string;
  familyImage: string;
  familyImageAlt: string;
  badgeIcon: string;
  experience: AboutUsExperience;
  points: FeatureItem[];
  buttonText: string;
  buttonUrl: string;
  buttonIcon: string;
}

export interface AboutUsProps {
  data?: AboutUsData;
  /** "page" on the About Us page: the paragraphs instead of the experience, points and button */
  variant?: "home" | "page";
}

export interface WhyChooseUsData {
  eyebrow: string;
  /** "\n" starts a new line (from sm up) */
  title: string;
  titleHighlight: string;
  description: string;
  image: string;
  imageAlt: string;
  /** "\n" in an item's title and description starts a new line */
  items: FeatureItem[];
}

export interface WhyChooseUsProps {
  data?: WhyChooseUsData;
}

export interface PlanItem {
  id: string;
  title: string;
  url: string;
  icon: string;
  homeIcon: string;
  description: string;
  /** Text of the card on the Insurance Plans page; "\n" starts a new line (from xl up) */
  cardText: string;
  /** Text of the card on the home page; "\n" starts a new line */
  homeText: string;
  /** Text in the "related plans" list; "\n" starts a new line */
  relatedText: string;
  /** One paragraph per "\n"-separated line */
  overview: string;
  image: string;
  homeImage: string;
  detailImage?: string;
  thumb?: string;
  imageAlt: string;
}

export interface PlansData extends SliderControls {
  eyebrow: string;
  title: string;
  titleHighlight: string;
  description: string;
  buttonText: string;
  buttonIcon: string;
  /** The plan the common detail page shows */
  detailPlanId: string;
  /** Plans in the detail page's "related plans" list */
  relatedPlanIds: string[];
  items: PlanItem[];
}

export interface PlansProps {
  data?: PlansData;
  /** true on the Insurance Plans page: every plan in a grid instead of the home slider */
  showAll?: boolean;
}

export interface PlanCardProps {
  plan: PlanItem;
  buttonText: string;
  buttonIcon: string;
  variant?: "home" | "grid";
}

export interface PlanDetailData {
  overviewEyebrow: string;
  overviewTitle: string;
  overviewTitleSuffix: string;
  featuresEyebrow: string;
  featuresTitle: string;
  featuresSuffix: string;
  features: FeatureItem[];
  whyEyebrow: string;
  whyTitle: string;
  whySuffix: string;
  why: FeatureItem[];
  formTitle: string;
  /** "{plan}" is the plan name */
  formDescription: string;
  relatedTitle: string;
  relatedIcon: string;
}

export interface PlanDetailProps {
  data?: PlanDetailData;
  plans?: PlansData;
  form?: EnquiryFormData;
}

export interface ProcessData {
  eyebrow: string;
  title: string;
  titleHighlight: string;
  description: string;
  buttonText: string;
  buttonUrl: string;
  buttonIcon: string;
  stepArrowIcon: string;
  steps: FeatureItem[];
}

export interface ProcessProps {
  data?: ProcessData;
}

export interface StatsItem {
  id: string;
  icon: string;
  value: string;
  label: string;
}

export interface StatsData {
  items: StatsItem[];
}

export interface StatsProps {
  data?: StatsData;
}

export interface TestimonialsItem {
  id: string;
  name: string;
  city: string;
  rating: number;
  image: string;
  imageAlt: string;
  quote: string;
}

export interface TestimonialsData extends SliderControls {
  eyebrow: string;
  title: string;
  titleHighlight: string;
  description: string;
  /** "{rating}" is the number of stars */
  ratingLabel: string;
  starIcon: string;
  quoteMark: string;
  autoplayMs: number;
  items: TestimonialsItem[];
}

export interface TestimonialsProps {
  data?: TestimonialsData;
}

export interface CtaData {
  eyebrow: string;
  title: string;
  titleHighlight: string;
  description: string;
  image: string;
  imageAlt: string;
  buttonText: string;
  buttonUrl: string;
  buttonIcon: string;
}

export interface CtaProps {
  data?: CtaData;
}

export interface BlogPostDetailSection {
  id: string;
  title: string;
  titleHighlight: string;
  description: string;
}

export interface BlogPostDetailTip {
  title: string;
  description: string;
}

export interface BlogPostDetail {
  image: string;
  imageAlt: string;
  comments: number;
  intro: string;
  sections: BlogPostDetailSection[];
  tip: BlogPostDetailTip;
}

export interface BlogPost {
  id: string;
  category: string;
  date: string;
  dateLong: string;
  /** "\n" starts a new line on the cards */
  title: string;
  url: string;
  description: string;
  image: string;
  imageAlt: string;
  detail: BlogPostDetail;
}

/** Labels and icons of the blog detail page. */
export interface BlogDetailLabels {
  author: string;
  authorIcon: string;
  dateIcon: string;
  /** "{count}" is the number of comments */
  commentsLabel: string;
  commentsIcon: string;
  tipIcon: string;
  latestTitle: string;
  categoriesTitle: string;
}

export interface BlogsData {
  eyebrow: string;
  title: string;
  titleHighlight: string;
  description: string;
  buttonText: string;
  buttonIcon: string;
  dateIcon: string;
  /** Posts on the home page */
  homePostIds: string[];
  /** Posts on the Blogs page */
  listingPostIds: string[];
  /** The post the common detail page shows */
  detailPostId: string;
  /** Posts in the detail page's "latest blogs" list */
  recentPostIds: string[];
  categoryLabel: string;
  /** "{category}" is the category name */
  categoryUrl: string;
  allPostsLabel: string;
  allPostsUrl: string;
  detail: BlogDetailLabels;
  posts: BlogPost[];
}

export interface BlogsProps {
  data?: BlogsData;
  /** true on the Blogs page: the listingPostIds posts instead of the homePostIds */
  showAll?: boolean;
  /** Only the posts in this category */
  category?: string;
}

export interface BlogCardProps {
  post: BlogPost;
  buttonText: string;
  buttonIcon: string;
  dateIcon: string;
}

export interface BlogDetailProps {
  data?: BlogsData;
  postId?: string;
}

export interface EnquiryFormPlanOption {
  id: string;
  label: string;
}

export interface EnquiryFormData {
  name: string;
  email: string;
  phone: string;
  plan: string;
  planShort: string;
  selectIcon: string;
  message: string;
  buttonText: string;
  buttonIcon: string;
  note: string;
  noteIcon: string;
  redirectUrl: string;
  planOptions: EnquiryFormPlanOption[];
}

export interface EnquiryFormProps {
  data?: EnquiryFormData;
  /** "grid": two-column fields (contact), "stack": one field per row (enquire), "compact": sidebar */
  layout?: "grid" | "stack" | "compact";
  defaultPlan?: string;
}

export interface EnquireData {
  eyebrow: string;
  /** "\n" starts a new line (from sm up) */
  title: string;
  titleHighlight: string;
  description: string;
  points: FeatureItem[];
  formTitle: string;
  formHighlight: string;
  formDescription: string;
}

export interface EnquireProps {
  data?: EnquireData;
  form?: EnquiryFormData;
}

export interface ContactCard {
  id: string;
  icon: string;
  title: string;
  /** "\n" starts a new line */
  text: string;
}

export interface ContactMapCard {
  title: string;
  icon: string;
  /** "\n" starts a new line */
  text: string;
}

export interface ContactLocation {
  mapTitle: string;
  mapEmbedUrl: string;
  mapCard: ContactMapCard;
}

export interface ContactData {
  eyebrow: string;
  /** "\n" starts a new line (from sm up) */
  title: string;
  titleHighlight: string;
  description: string;
  cards: ContactCard[];
  formTitle: string;
  formHighlight: string;
  formDescription: string;
  location: ContactLocation;
}

export interface ContactProps {
  data?: ContactData;
  form?: EnquiryFormData;
}

export interface ThankYouData {
  seo?: SeoData;
  title: string;
  titleHighlight: string;
  subtitle: string;
  /** "\n" starts a new line (from md up) */
  description: string;
  primaryButtonText: string;
  primaryButtonUrl: string;
  primaryButtonIcon: string;
  secondaryButtonText: string;
  secondaryButtonUrl: string;
  secondaryButtonIcon: string;
  points: FeatureItem[];
}

export interface ThankYouProps {
  data?: ThankYouData;
}

export interface PolicySectionData {
  id: string;
  title: string;
  description: string;
}

export interface PolicyPageData {
  intro: string;
  sections: PolicySectionData[];
  contactPrompt: string;
  email: string;
  emailUrl: string;
}

export interface FaqData extends PolicyPageData {
  accordionIcon: string;
}

export interface PolicyPagesData {
  privacy?: PolicyPageData;
  terms?: PolicyPageData;
  cookies?: PolicyPageData;
}

export interface PolicyPageProps {
  data?: PolicyPageData;
  /** Collapses each section behind its title (FAQ), with this icon; one stays open at a time. */
  accordionIcon?: string;
}

export interface SitemapGroup extends LinkGroup {
  id: string;
}

export interface SitemapData {
  groups: SitemapGroup[];
}

export interface SitemapProps {
  data?: SitemapData;
}

export interface TemplateComponentsData {
  shared: { Header: string; Footer: string };
  pages: Record<string, { components: { key: string; component: string }[] }>;
}

export interface CommonData {
  theme: ThemeData;
  metadata: SiteMetadataData;
  globalUI: GlobalUIData;
  aboutBreadcrumb?: BreadcrumbData;
  contactBreadcrumb?: BreadcrumbData;
  enquireBreadcrumb?: BreadcrumbData;
  plansBreadcrumb?: BreadcrumbData;
  planDetailBreadcrumb?: BreadcrumbData;
  blogsBreadcrumb?: BreadcrumbData;
  blogDetailBreadcrumb?: BreadcrumbData;
  faqsBreadcrumb?: BreadcrumbData;
  privacyBreadcrumb?: BreadcrumbData;
  termsBreadcrumb?: BreadcrumbData;
  cookieBreadcrumb?: BreadcrumbData;
  sitemapBreadcrumb?: BreadcrumbData;
  notFound?: NotFoundData;
  Footer?: FooterData;
}

type Section<Variant extends string, Data> = { variants?: { [K in Variant]?: Data } };

export interface InsuranceSections {
  Header?: Section<"InsuranceHeader1", HeaderData>;
  Hero?: Section<"InsuranceHero1", HeroData>;
  Highlights?: Section<"InsuranceHighlights1", HighlightsData>;
  AboutUs?: Section<"InsuranceAboutUs1", AboutUsData>;
  WhyChooseUs?: Section<"InsuranceWhyChooseUs1", WhyChooseUsData>;
  Plans?: Section<"InsurancePlans1", PlansData>;
  PlanDetail?: Section<"InsurancePlanDetail1", PlanDetailData>;
  Process?: Section<"InsuranceProcess1", ProcessData>;
  Stats?: Section<"InsuranceStats1", StatsData>;
  Testimonials?: Section<"InsuranceTestimonials1", TestimonialsData>;
  Cta?: Section<"InsuranceCta1", CtaData>;
  Blogs?: Section<"InsuranceBlogs1", BlogsData>;
  EnquiryForm?: Section<"InsuranceEnquiryForm1", EnquiryFormData>;
  Enquire?: Section<"InsuranceEnquire1", EnquireData>;
  Contact?: Section<"InsuranceContact1", ContactData>;
  ThankYou?: Section<"InsuranceThankYou1", ThankYouData>;
  Faq?: Section<"InsuranceFaq1", FaqData>;
  PolicyPages?: Section<"InsurancePolicyPages1", PolicyPagesData>;
  Sitemap?: Section<"InsuranceSitemap1", SitemapData>;
}

export interface InsuranceTemplateData {
  common: CommonData;
  categories: {
    Insurance: {
      sections: InsuranceSections;
      templateComponents?: TemplateComponentsData;
    };
  };
}
