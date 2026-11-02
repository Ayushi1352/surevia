export interface ThemeFonts {
  primary: string;
  heading: string;
}

export interface ThemeData {
  fonts: ThemeFonts;
}

export interface SiteMetadataData {
  title: string;
  description: string;
  icon: string;
  lang: string;
}

export interface GlobalUIData {
  breadcrumbLabel: string;
  previousLabel: string;
  nextLabel: string;
}

export interface BreadcrumbPath {
  id: string;
  label: string;
  url: string;
}

export interface BreadcrumbData {
  title: string;
  bgImage: string;
  bgImageAlt: string;
  paths: BreadcrumbPath[];
}

export interface NotFoundData {
  code: string;
  title: string;
  description: string;
  buttonText: string;
  buttonUrl: string;
}

export interface FooterSocialLink {
  id: string;
  icon: string;
  label: string;
  url: string;
}

export interface FooterContactItem {
  id: string;
  icon: string;
  lines: string[];
  url: string;
}

export interface FooterData {
  logo: string;
  logoAlt: string;
  logoUrl: string;
  description: string;
  socialLinks: FooterSocialLink[];
  quickLinksTitle: string;
  quickLinks: BreadcrumbPath[];
  planLinksTitle: string;
  planLinks: BreadcrumbPath[];
  contactTitle: string;
  contactItems: FooterContactItem[];
  copyrightText: string;
  bottomLinks: BreadcrumbPath[];
  backToTopLabel: string;
}

export interface HeaderNavLink {
  id: string;
  label: string;
  url: string;
  hasDropdown?: boolean;
}

export interface HeaderData {
  logo: string;
  logoAlt: string;
  logoUrl: string;
  address: string;
  email: string;
  emailUrl: string;
  phoneLabel: string;
  phoneValue: string;
  phoneUrl: string;
  socialLinks: FooterSocialLink[];
  navLinks: HeaderNavLink[];
  dropdownLinks: BreadcrumbPath[];
  buttonText: string;
  buttonUrl: string;
  openMenuLabel: string;
  closeMenuLabel: string;
  toggleDropdownLabel: string;
}

export interface HeroSlide {
  id: string;
  eyebrow: string;
  title: string[];
  description: string;
  image: string;
  imageAlt: string;
}

export interface HeroData {
  slides: HeroSlide[];
  goToSlideLabel: string;
  previousSlideLabel: string;
  nextSlideLabel: string;
}

export interface HighlightsItem {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface HighlightsData {
  items: HighlightsItem[];
}

export interface AboutUsExperience {
  value: string;
  label: string[];
}

export interface AboutUsData {
  eyebrow: string;
  title: string;
  titleHighlight: string;
  mainImage: string;
  mainImageAlt: string;
  familyImage: string;
  familyImageAlt: string;
  homeText: string;
  experience: AboutUsExperience;
  points: HighlightsItem[];
  buttonText: string;
  buttonUrl: string;
  pageParagraphs: string[];
}

export interface WhyChooseUsItem {
  id: string;
  icon: string;
  title: string[];
  description: string[];
}

export interface WhyChooseUsData {
  eyebrow: string;
  title: string;
  titleLine2: string;
  titleHighlight: string;
  description: string;
  image: string;
  imageAlt: string;
  items: WhyChooseUsItem[];
}

export interface PlanItem {
  id: string;
  title: string;
  url: string;
  icon: string;
  homeIcon: string;
  description: string;
  lines: string[];
  homeText: string[];
  image: string;
  homeImage: string;
  detailImage?: string;
  relatedText: string[];
  overview: string[];
  imageAlt: string;
  thumb?: string;
}

export interface PlansData {
  eyebrow: string;
  title: string;
  titleHighlight: string;
  description: string;
  buttonText: string;
  items: PlanItem[];
}

export interface PlanDetailFeature {
  id: string;
  icon: string;
  title: string;
  description: string[];
}

export interface PlanDetailData {
  overviewEyebrow: string;
  overviewTitle: string;
  overviewTitleSuffix: string;
  featuresEyebrow: string;
  featuresTitle: string;
  featuresSuffix: string;
  features: PlanDetailFeature[];
  whyEyebrow: string;
  whyTitle: string;
  whySuffix: string;
  why: HighlightsItem[];
  formTitle: string;
  formDescription: string;
  relatedTitle: string;
}

export interface ProcessData {
  eyebrow: string;
  title: string;
  titleHighlight: string;
  description: string;
  buttonText: string;
  buttonUrl: string;
  steps: PlanDetailFeature[];
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

export interface TestimonialsItem {
  id: string;
  name: string;
  city: string;
  rating: number;
  image: string;
  quote: string;
  imageAlt: string;
}

export interface TestimonialsData {
  eyebrow: string;
  title: string;
  titleHighlight: string;
  description: string;
  items: TestimonialsItem[];
  ratingLabel: string;
}

export interface CtaData {
  eyebrow: string;
  title: string[];
  description: string;
  image: string;
  buttonText: string;
  buttonUrl: string;
  imageAlt: string;
}

export interface BlogsPostDetailSection {
  id: string;
  title: string;
  titleHighlight: string;
  description: string;
}

export interface BlogsPostDetailTip {
  title: string;
  description: string;
}

export interface BlogsPostDetail {
  image: string;
  imageAlt: string;
  comments: number;
  intro: string;
  sections: BlogsPostDetailSection[];
  tip: BlogsPostDetailTip;
}

export interface BlogPost {
  id: string;
  category: string;
  date: string;
  title: string;
  url: string;
  titleLines: string[];
  description: string;
  image: string;
  detail: BlogsPostDetail;
  dateLong: string;
  imageAlt: string;
}

export interface BlogsData {
  eyebrow: string;
  title: string;
  titleHighlight: string;
  description: string;
  buttonText: string;
  homeCount: number;
  categoryLabel: string;
  allPostsLabel: string;
  posts: BlogPost[];
}

export interface BlogDetailData {
  author: string;
  commentsLabel: string;
  latestTitle: string;
  categoriesTitle: string;
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
  message: string;
  submit: string;
  note: string;
  redirectUrl: string;
  planOptions: EnquiryFormPlanOption[];
}

export interface EnquirePageData {
  eyebrow: string;
  title: string[];
  titleHighlight: string;
  description: string;
  points: PlanDetailFeature[];
  formTitle: string;
  formHighlight: string;
  formDescription: string;
}

export interface ContactCard {
  id: string;
  icon: string;
  title: string;
  lines: string[];
}

export interface ContactLocationMapCard {
  title: string;
  lines: string[];
}

export interface ContactLocation {
  address: string;
  mapUrl: string;
  mapTitle: string;
  mapCard: ContactLocationMapCard;
}

export interface ContactData {
  eyebrow: string;
  title: string[];
  titleHighlight: string;
  description: string;
  cards: ContactCard[];
  formTitle: string;
  formHighlight: string;
  formDescription: string;
  location: ContactLocation;
}

export interface ThankYouPageData {
  pageTitle: string;
  title: string;
  titleHighlight: string;
  subtitle: string;
  description: string[];
  primaryButtonText: string;
  primaryButtonUrl: string;
  secondaryButtonText: string;
  secondaryButtonUrl: string;
  points: PlanDetailFeature[];
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface FaqData {
  pageTitle: string;
  intro: string;
  items: FaqItem[];
  contactPrompt: string;
  contactEmail: string;
  contactEmailUrl: string;
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
  contactEmail: string;
  contactEmailUrl: string;
}

export interface PolicyPagesData {
  privacy?: PolicyPageData;
  terms?: PolicyPageData;
  cookies?: PolicyPageData;
}

export interface SitemapPageData {
  pagesTitle: string;
  plansTitle: string;
  policiesTitle: string;
  pageLinks: BreadcrumbPath[];
  planLinks: BreadcrumbPath[];
  policyLinks: BreadcrumbPath[];
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

export interface InsuranceTemplateData {
  common: CommonData;
  categories: {
    Insurance: {
      sections: {
        Header?: { variants?: { InsuranceHeader1?: HeaderData } };
        Hero?: { variants?: { InsuranceHero1?: HeroData } };
        Highlights?: { variants?: { InsuranceHighlights1?: HighlightsData } };
        AboutUs?: { variants?: { InsuranceAboutUs1?: AboutUsData } };
        WhyChooseUs?: { variants?: { InsuranceWhyChooseUs1?: WhyChooseUsData } };
        Plans?: { variants?: { InsurancePlans1?: PlansData } };
        PlanDetail?: { variants?: { InsurancePlanDetail1?: PlanDetailData } };
        Process?: { variants?: { InsuranceProcess1?: ProcessData } };
        Stats?: { variants?: { InsuranceStats1?: StatsData } };
        Testimonials?: { variants?: { InsuranceTestimonials1?: TestimonialsData } };
        Cta?: { variants?: { InsuranceCta1?: CtaData } };
        Blogs?: { variants?: { InsuranceBlogs1?: BlogsData } };
        BlogDetail?: { variants?: { InsuranceBlogDetail1?: BlogDetailData } };
        EnquiryForm?: { variants?: { InsuranceEnquiryForm1?: EnquiryFormData } };
        EnquirePage?: { variants?: { InsuranceEnquirePage1?: EnquirePageData } };
        Contact?: { variants?: { InsuranceContact1?: ContactData } };
        ThankYouPage?: { variants?: { InsuranceThankYouPage1?: ThankYouPageData } };
        Faq?: { variants?: { InsuranceFaq1?: FaqData } };
        PolicyPages?: { variants?: { InsurancePolicyPages1?: PolicyPagesData } };
        SitemapPage?: { variants?: { InsuranceSitemapPage1?: SitemapPageData } };
      };
      templateComponents?: TemplateComponentsData;
    };
  };
}
