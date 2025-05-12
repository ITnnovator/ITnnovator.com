export const services = [
    {
        id: "01",
        slug: "web-development",
        type: "main_service",
        tags: "Web Development, Responsive Websites, Business Website Design",
        title: "Website Development",
        img: "webImages/Services/service-1.jpg",
        description: "Professional website development services delivering fast, mobile-responsive, and SEO-optimized websites tailored for growth.",
        details: "Our website development service covers end-to-end custom web solutions—ranging from responsive designs to robust backend development. We build SEO-friendly, mobile-optimized websites using platforms like WordPress, Shopify, and custom stacks. Whether you're launching a corporate site, e-commerce store, or a startup landing page, we ensure your website is secure, scalable, and conversion-focused."
    },
    {
        id: "02",
        slug: "app-development",
        type: "main_service",
        tags: "Mobile App Development, Android, iOS, Cross-Platform Apps",
        title: "App Development",
        img: "webImages/Services/service-2.jpg",
        description: "Custom mobile app development services for Android, iOS, and cross-platform solutions that enhance user engagement and business growth.",
        details: "We develop high-performance mobile applications using Flutter, React Native, Kotlin, and Swift. Our process includes discovery, UI/UX design, development, testing, and post-launch support. Whether you need an MVP or a full-scale enterprise app, we deliver intuitive and scalable mobile experiences aligned with your business goals."
    },
    {
        id: "03",
        slug: "graphics-design",
        type: "main_service",
        tags: "Graphic Design, Logo Design, Brand Visuals",
        title: "Graphics Designing",
        img: "webImages/Services/service-3.jpg",
        description: "Creative graphic design services to build a strong brand identity across digital and print media.",
        details: "From striking logos to cohesive brand visuals, our designers craft impactful graphics that leave a lasting impression. Using tools like Adobe Illustrator and Photoshop, we create designs for business cards, flyers, packaging, banners, and social media tailored to your brand strategy."
    },
    {
        id: "04",
        slug: "ui-ux-design",
        type: "main_service",
        tags: "UI/UX Design, Product Design, App Interface",
        title: "UI/UX Design",
        img: "webImages/Services/service-4.jpg",
        description: "Human-centered UI/UX design focused on intuitive user interfaces and smooth digital interactions.",
        details: "Our UI/UX team crafts engaging experiences by conducting in-depth user research, wireframes, prototypes, and usability testing. We design interfaces for websites, mobile apps, SaaS platforms, and dashboards using tools like Figma and Adobe XD."
    },
    {
        id: "05",
        slug: "seo-services",
        type: "main_service",
        tags: "SEO Services, Search Engine Optimization, Organic Traffic",
        title: "SEO Services",
        img: "webImages/Services/service-5.jpg",
        description: "Boost your Google rankings and drive qualified traffic with our comprehensive SEO strategies.",
        details: "We provide complete SEO solutions including on-page optimization, technical audits, off-page link building, and content strategy. Our approach is data-driven, Google-compliant, and focused on long-term organic visibility and traffic growth."
    },
    {
        id: "06",
        slug: "digital-marketing",
        type: "main_service",
        tags: "Digital Marketing, Online Advertising, Lead Generation",
        title: "Digital Marketing",
        img: "webImages/Services/service-6.jpg",
        description: "Data-driven digital marketing services designed to grow your online presence and maximize ROI.",
        details: "We offer PPC campaigns, social media ads, email marketing, and conversion optimization across platforms like Google Ads, Meta, and LinkedIn. Our team uses real-time analytics, split testing, and campaign refinement to ensure every marketing dollar counts."
    },
    {
        id: "07",
        slug: "social-media-management",
        type: "main_service",
        tags: "Social Media Management, Engagement Strategy, Content Scheduling",
        title: "Social Media Management",
        img: "webImages/Services/service-7.jpg",
        description: "End-to-end social media management to enhance brand engagement and digital reach.",
        details: "From strategy planning to content design and scheduling, we manage your entire social media presence. Our team creates tailored calendars, community engagement plans, and performance reports for platforms like Facebook, Instagram, Twitter, and LinkedIn."
    },
    {
        id: "08",
        slug: "ecommerce-solutions",
        type: "main_service",
        tags: "E-commerce Development, Online Store Setup, Shopify, WooCommerce",
        title: "E-commerce Solutions",
        img: "webImages/Services/service-8.jpg",
        description: "Custom e-commerce solutions that boost online sales with secure, scalable, and user-friendly platforms.",
        details: "We build online stores using Shopify, WooCommerce, Magento, and headless CMS technologies. Our services cover everything from product catalog setup and payment gateway integration to inventory and shipping systems. Designed for performance and seamless user experience."
    },
    {
        id: "09",
        slug: "branding-identity",
        type: "main_service",
        tags: "Brand Identity, Logo Design, Corporate Branding",
        title: "Branding & Identity",
        img: "webImages/Services/service-9.jpg",
        description: "Strategic branding services to shape a consistent and memorable brand presence across all platforms.",
        details: "We define your brand's tone, values, and visual system—delivering logos, brand guidelines, color schemes, typography, and assets that align with your market. Our designs are built to foster recognition, trust, and customer loyalty."
    },
    {
        id: "10",
        slug: "custom-software-development",
        type: "main_service",
        tags: "Software Development, Custom Applications, CRM & ERP",
        title: "Software Development",
        img: "webImages/Services/service-10.jpg",
        description: "Custom software solutions to automate workflows, improve operations, and drive digital transformation.",
        details: "We develop tailored CRMs, ERPs, cloud apps, and automation tools using modern tech stacks (Node.js, Python, .NET). Our end-to-end process includes planning, development, testing, and cloud deployment—delivering secure and scalable enterprise solutions."
    },
    {
        id: "11",
        slug: "it-consulting",
        type: "main_service",
        tags: "IT Consulting, Tech Strategy, Digital Advisory",
        title: "IT Consulting",
        img: "webImages/Services/service-11.jpg",
        description: "Expert IT consulting services focused on digital transformation, cloud strategy, and cybersecurity to help you scale confidently.",
        details: "We guide businesses through their digital journey by assessing current IT infrastructure and aligning it with modern technology trends. Our IT consulting services include cloud migration planning, cybersecurity audits, compliance advisory, and enterprise IT modernization. We help you make smart, scalable, and secure tech decisions that fuel long-term business growth."
    },
    //Sub-Services Start Here

    // Web Development Sub-Services (typeof: "01")
    {
        id: "12",
        slug: "static-dynamic-websites",
        type: "sub_service",
        typeof: "01",
        tags: "Web Design, Static Website, Dynamic Website",
        title: "Static & Dynamic Websites",
        img: "webImages/Services/service-1.jpg",
        description: "Custom-designed static and dynamic websites optimized for performance, functionality, and business goals.",
        details: "We develop fast-loading static websites for portfolios and business presence, and dynamic websites with real-time user interaction and database integration. Whether it's a simple landing page or a complex content-driven platform, we ensure responsiveness, speed, and user engagement across devices."
    },
    {
        id: "13",
        slug: "cms-development",
        type: "sub_service",
        typeof: "01",
        tags: "CMS Development, WordPress, Shopify, Webflow",
        title: "CMS-Based Development",
        img: "webImages/Services/service-1.jpg",
        description: "Flexible CMS-based websites that are easy to manage, scale, and optimize for your evolving business needs.",
        details: "We create intuitive websites powered by leading CMS platforms like WordPress, Shopify, and Webflow. These solutions allow clients to easily update content, manage blogs, and scale e-commerce or service pages without technical complexity. Ideal for small businesses, content creators, and growing brands."
    },
    {
        id: "14",
        slug: "ecommerce-development",
        type: "sub_service",
        typeof: "01",
        tags: "E-commerce Development, Online Store, WooCommerce",
        title: "E-commerce Development",
        img: "webImages/Services/service-1.jpg",
        description: "Custom-built online stores with seamless UX, secure payments, and integrated inventory management.",
        details: "We design and develop end-to-end e-commerce websites using Shopify, WooCommerce, or custom stacks. Features include product management, cart systems, payment gateways, and mobile-friendly layouts. Our stores are optimized for speed, security, and sales conversion."
    },
    {
        id: "15",
        slug: "landing-pages",
        type: "sub_service",
        typeof: "01",
        tags: "Landing Pages, Conversion Optimization, Marketing Pages",
        title: "Landing Pages",
        img: "webImages/Services/service-1.jpg",
        description: "High-impact landing pages crafted for lead generation, product launches, and ad campaigns.",
        details: "Our landing pages are built with a focus on conversions—incorporating compelling visuals, persuasive copy, and responsive design. Whether for Google Ads, Meta campaigns, or email marketing, each page is SEO-friendly and analytics-ready to measure performance."
    },
    {
        id: "16",
        slug: "website-maintenance",
        type: "sub_service",
        typeof: "01",
        tags: "Website Maintenance, Web Support, Site Updates",
        title: "Website Maintenance & Support",
        img: "webImages/Services/service-1.jpg",
        description: "Ongoing website support services to ensure security, speed, and uptime around the clock.",
        details: "We provide proactive website maintenance including software updates, backups, security patches, malware scans, and content updates. Our team monitors performance and ensures everything runs smoothly, so you can focus on your business without worrying about downtime."
    },
    // Mobile App Development Sub-Services (typeof: "02")
    {
        id: "17",
        slug: "android-app-development",
        type: "sub_service",
        typeof: "02",
        tags: "Android App Development, Kotlin, Java Apps",
        title: "Android App Development",
        img: "webImages/Services/service-2.jpg",
        description: "Custom Android app development solutions optimized for usability, scalability, and performance.",
        details: "We build native Android applications using Kotlin and Java, tailored to business needs ranging from e-commerce to internal automation tools. Our apps are user-centric, compatible with the latest OS versions, and designed to scale as your business grows."
    },
    {
        id: "18",
        slug: "ios-app-development",
        type: "sub_service",
        typeof: "02",
        tags: "iOS App Development, Swift, Apple Store Apps",
        title: "iOS App Development",
        img: "webImages/Services/service-2.jpg",
        description: "High-quality iOS app development for businesses seeking premium Apple-compatible applications.",
        details: "Our team develops native iOS apps using Swift and Objective-C, ensuring performance, stability, and App Store compliance. From wireframes to UI design and backend integration, we build apps that offer seamless user experience across iPhones and iPads."
    },
    {
        id: "19",
        slug: "cross-platform-apps",
        type: "sub_service",
        typeof: "02",
        tags: "Cross-Platform Apps, Flutter, React Native",
        title: "Cross-Platform Apps",
        img: "webImages/Services/service-2.jpg",
        description: "Efficient cross-platform app development for consistent performance across Android and iOS.",
        details: "We develop cross-platform mobile apps using Flutter and React Native to ensure cost-effective, high-quality performance across both ecosystems. Ideal for startups and businesses wanting to launch quickly with one unified codebase."
    },
    {
        id: "20",
        slug: "app-ui-ux-design",
        type: "sub_service",
        typeof: "02",
        tags: "App Design, Mobile UI/UX, App Interface",
        title: "UI/UX for Mobile Apps",
        img: "webImages/Services/service-2.jpg",
        description: "User-centered mobile app designs that enhance engagement and improve usability.",
        details: "We craft intuitive, visually engaging interfaces through prototyping, wireframing, and user testing. Our UI/UX approach is grounded in user behavior research and ensures every touchpoint supports seamless navigation and higher retention."
    },
    {
        id: "21",
        slug: "app-deployment-support",
        type: "sub_service",
        typeof: "02",
        tags: "App Deployment, Post-Launch Support, Mobile Maintenance",
        title: "App Deployment & Support",
        img: "webImages/Services/service-2.jpg",
        description: "End-to-end mobile app deployment and ongoing support to ensure your application performs flawlessly post-launch.",
        details: "We manage app store submissions for Google Play and Apple App Store, handle version control, and implement real-time bug fixes. Our post-launch support includes performance monitoring, crash analytics, feature rollouts, and updates—ensuring your app stays functional, competitive, and optimized."
    },
    // Graphics Designing Sub-Services (typeof: "03")
    {
        id: "22",
        slug: "logo-designing",
        type: "sub_service",
        typeof: "03",
        tags: "Logo Design, Brand Identity, Visual Branding",
        title: "Logo Designing",
        img: "webImages/Services/service-3.jpg",
        description: "Original and memorable logo designs that define your brand personality and values.",
        details: "We craft impactful logos that visually represent your brand’s mission and appeal to your target audience. Whether you need a minimalist symbol, a bold emblem, or a modern wordmark, our designs are scalable, recognizable, and aligned with your brand tone."
    },
    {
        id: "23",
        slug: "stationery-design",
        type: "sub_service",
        typeof: "03",
        tags: "Business Card Design, Stationery Design, Corporate Branding",
        title: "Business Card & Stationery Design",
        img: "webImages/Services/service-3.jpg",
        description: "Professional stationery that adds credibility and coherence to your brand across print materials.",
        details: "We design high-quality business cards, letterheads, envelopes, and other stationery items that reflect your brand identity. Our goal is to ensure visual consistency across all touchpoints, leaving a lasting impression on clients and stakeholders."
    },
    {
        id: "24",
        slug: "social-media-design",
        type: "sub_service",
        typeof: "03",
        tags: "Social Media Graphics, Instagram Posts, Facebook Design",
        title: "Social Media Post Design",
        img: "webImages/Services/service-3.jpg",
        description: "Custom social media designs optimized for engagement, brand consistency, and audience interaction.",
        details: "We create branded visuals for platforms like Instagram, Facebook, Twitter, and LinkedIn. Each design is tailored to your audience, optimized for platform dimensions, and built to align with your campaign goals or content themes."
    },
    {
        id: "25",
        slug: "brochures-flyers",
        type: "sub_service",
        typeof: "03",
        tags: "Brochure Design, Flyer Design, Marketing Material",
        title: "Brochures & Flyers",
        img: "webImages/Services/service-3.jpg",
        description: "Visually impactful brochures and flyers designed to promote, inform, and convert your audience.",
        details: "We design marketing materials that combine compelling copy with striking visuals—perfect for events, promotions, or service highlights. Each piece is crafted to reflect your brand and convey your message clearly and persuasively."
    },
    {
        id: "26",
        slug: "product-packaging",
        type: "sub_service",
        typeof: "03",
        tags: "Product Packaging, Label Design, Branding",
        title: "Product Packaging Design",
        img: "webImages/Services/service-3.jpg",
        description: "Attractive and functional packaging that enhances shelf appeal and communicates brand quality.",
        details: "We design packaging for retail, cosmetics, food, and more—balancing creativity with practicality. From labels to box layouts, our packaging reflects your brand identity while ensuring compliance, clarity, and consumer impact."
    },
    // UI/UX Design Sub-Services (typeof: "04")
    {
        id: "27",
        slug: "wireframing-prototyping",
        type: "sub_service",
        typeof: "04",
        tags: "Wireframing, UI Prototyping, UX Design",
        title: "Wireframing & Prototyping",
        img: "webImages/Services/service-4.jpg",
        description: "Blueprints and interactive models that bring your digital product ideas to life before development begins.",
        details: "We create low- and high-fidelity wireframes and clickable prototypes using tools like Figma and Adobe XD. These help validate design ideas early, improve collaboration, and reduce development rework by visualizing structure and flow upfront."
    },
    {
        id: "28",
        slug: "mobile-web-ui",
        type: "sub_service",
        typeof: "04",
        tags: "UI Design, App Interface, Web UI",
        title: "Mobile & Web UI Design",
        img: "webImages/Services/service-4.jpg",
        description: "User-friendly interface designs for mobile apps and websites that prioritize clarity and performance.",
        details: "We design intuitive, accessible, and visually appealing UIs that enhance usability and branding. Whether for native apps or responsive websites, our UI design balances aesthetic appeal with real user needs for a consistent digital experience."
    },
    {
        id: "29",
        slug: "dashboard-interface-design",
        type: "sub_service",
        typeof: "04",
        tags: "Dashboard UI, Admin Panel Design, UX",
        title: "Dashboard Interface Design",
        img: "webImages/Services/service-4.jpg",
        description: "Custom dashboard UI designs that simplify data interaction and improve decision-making workflows.",
        details: "We build structured, clean interfaces for dashboards, CRMs, ERPs, and admin tools. Each design emphasizes usability, visual hierarchy, and real-time data clarity—supporting efficient management for business and operations teams."
    },
    {
        id: "30",
        slug: "user-flow-optimization",
        type: "sub_service",
        typeof: "04",
        tags: "User Journey Design, UX Flow, Interaction Design",
        title: "User Flow Optimization",
        img: "webImages/Services/service-4.jpg",
        description: "Streamlined user flows designed to improve navigation, engagement, and conversion rates.",
        details: "We analyze user journeys to identify bottlenecks and enhance navigation paths. Our optimization process includes interaction mapping, task simplification, and A/B testing to ensure users complete actions with minimal friction."
    },
    {
        id: "31",
        slug: "usability-testing",
        type: "sub_service",
        typeof: "04",
        tags: "Usability Testing, UX Evaluation, User Testing",
        title: "Usability Testing",
        img: "webImages/Services/service-4.jpg",
        description: "Comprehensive usability testing to uncover pain points and improve digital product experiences.",
        details: "We conduct structured usability tests using real users to identify friction points in your website or app. Our insights help improve navigation, accessibility, and satisfaction, ensuring your interface meets both business goals and user expectations."
    },
    // SEO Services Sub-Services (typeof: "05")
    {
        id: "32",
        slug: "on-page-seo",
        type: "sub_service",
        typeof: "05",
        tags: "On-Page SEO, Website Optimization, SEO Strategy",
        title: "On-Page SEO",
        img: "webImages/Services/service-5.jpg",
        description: "Optimize your site content, structure, and tags to boost organic visibility and rankings.",
        details: "We optimize page titles, meta descriptions, headers, internal linking, and content structure to ensure your site is aligned with search engine algorithms. On-page SEO is critical to boosting relevance, improving indexing, and increasing engagement."
    },
    {
        id: "33",
        slug: "off-page-seo",
        type: "sub_service",
        typeof: "05",
        tags: "Off-Page SEO, Link Building, Authority Signals",
        title: "Off-Page SEO",
        img: "webImages/Services/service-5.jpg",
        description: "Strengthen your site’s authority and trust with strategic link building and reputation enhancement.",
        details: "We build high-quality backlinks, manage brand mentions, and engage in influencer outreach to improve your domain authority. Our ethical off-page SEO strategies help boost rankings and build long-term credibility online."
    },
    {
        id: "34",
        slug: "technical-seo",
        type: "sub_service",
        typeof: "05",
        tags: "Technical SEO, Site Speed, Crawlability",
        title: "Technical SEO",
        img: "webImages/Services/service-5.jpg",
        description: "Enhance website structure, speed, and crawlability to support better search engine indexing.",
        details: "We conduct technical audits to fix site speed issues, mobile usability problems, broken links, crawl errors, and indexation blocks. Our enhancements ensure search engines can effectively crawl and rank your website."
    },
    {
        id: "35",
        slug: "keyword-research",
        type: "sub_service",
        typeof: "05",
        tags: "Keyword Research, SEO Strategy, Market Analysis",
        title: "Keyword Research",
        img: "webImages/Services/service-5.jpg",
        description: "Discover profitable and relevant keywords that align with your audience and business goals.",
        details: "We identify high-volume, low-competition keywords using advanced tools and competitor insights. Our keyword research helps target the right audience, structure your content strategy, and drive qualified traffic to your website."
    },
    {
        id: "36",
        slug: "competitor-analysis",
        type: "sub_service",
        typeof: "05",
        tags: "Competitor SEO, Market Intelligence, SEO Audit",
        title: "Competitor Analysis",
        img: "webImages/Services/service-5.jpg",
        description: "Analyze your competitors’ SEO strategy to uncover growth opportunities and outrank them.",
        details: "We review backlink profiles, keyword targets, content gaps, and performance metrics from top competitors. This insight helps us craft an informed SEO roadmap that gives your brand a competitive advantage in search results."
    },
    {
        id: "37",
        slug: "local-seo",
        type: "sub_service",
        typeof: "05",
        tags: "Local SEO, Google Maps, Local Ranking",
        title: "Local SEO",
        img: "webImages/Services/service-5.jpg",
        description: "Improve visibility in local search and attract nearby customers through geo-targeted optimization.",
        details: "We optimize your Google Business Profile, create localized content, and manage online reviews. Our local SEO strategies increase your visibility in maps, local packs, and city-based searches, driving real traffic from your service areas."
    },
    // Digital Marketing Sub-Services (typeof: "06")
    {
        id: "38",
        slug: "ppc-advertising",
        type: "sub_service",
        typeof: "06",
        tags: "PPC Advertising, Google Ads, Paid Search",
        title: "PPC Advertising",
        img: "webImages/Services/service-6.jpg",
        description: "Drive instant leads and conversions with expertly managed pay-per-click advertising campaigns.",
        details: "We create and manage high-ROI Google Ads and Bing Ads campaigns focused on keyword targeting, ad copywriting, bidding strategies, and A/B testing. Our goal is to maximize every dollar spent and deliver measurable results fast."
    },
    {
        id: "39",
        slug: "social-media-ads",
        type: "sub_service",
        typeof: "06",
        tags: "Social Media Advertising, Meta Ads, Paid Campaigns",
        title: "Social Media Ads",
        img: "webImages/Services/service-6.jpg",
        description: "Engage your audience and boost conversions through targeted advertising on social platforms.",
        details: "We run strategic ad campaigns across Meta (Facebook & Instagram), LinkedIn, and Twitter. Our services include audience segmentation, creative development, and real-time analytics to ensure effective delivery and engagement."
    },
    {
        id: "40",
        slug: "email-marketing",
        type: "sub_service",
        typeof: "06",
        tags: "Email Campaigns, Lead Nurturing, Email Automation",
        title: "Email Marketing",
        img: "webImages/Services/service-6.jpg",
        description: "Build customer relationships and drive conversions with personalized email marketing strategies.",
        details: "We create tailored email campaigns with engaging copy, visuals, and CTAs to drive engagement. Our process includes segmentation, automation setup, and performance tracking for improved retention, reactivation, and revenue generation."
    },
    {
        id: "41",
        slug: "conversion-rate-optimization",
        type: "sub_service",
        typeof: "06",
        tags: "Conversion Optimization, CRO, UX Enhancements",
        title: "Conversion Rate Optimization",
        img: "webImages/Services/service-6.jpg",
        description: "Enhance website performance and turn more visitors into customers through strategic optimization techniques.",
        details: "We analyze user behavior, funnel performance, and landing page design to identify conversion barriers. Our CRO strategy involves A/B testing, heatmaps, call-to-action refinements, and content adjustments to increase conversions and maximize ROI."
    },
    {
        id: "42",
        slug: "retargeting-campaigns",
        type: "sub_service",
        typeof: "06",
        tags: "Retargeting Ads, Remarketing, Ad Campaigns",
        title: "Retargeting Campaigns",
        img: "webImages/Services/service-6.jpg",
        description: "Bring back lost visitors and increase sales with data-driven retargeting campaigns.",
        details: "We create tailored ad campaigns that follow users across digital platforms after their initial visit. Using pixel tracking and segmentation, we re-engage potential customers with relevant offers and content to boost return visits and conversions."
    },
    // Social Media Management Sub-Services (typeof: "07")
    {
        id: "43",
        slug: "account-setup-optimization",
        type: "sub_service",
        typeof: "07",
        tags: "Social Profile Setup, Page Optimization, Brand Presence",
        title: "Account Setup & Optimization",
        img: "webImages/Services/service-7.jpg",
        description: "Set up and optimize your social media profiles for maximum visibility and professionalism.",
        details: "We handle the full setup of your social accounts including bios, banners, links, and keyword-rich descriptions. Our optimization ensures your brand looks credible and aligns with platform-specific algorithms to increase organic reach."
    },
    {
        id: "44",
        slug: "content-creation-scheduling",
        type: "sub_service",
        typeof: "07",
        tags: "Social Media Content, Post Scheduling, Brand Messaging",
        title: "Content Creation & Scheduling",
        img: "webImages/Services/service-7.jpg",
        description: "Consistent, high-quality content crafted and scheduled to engage and grow your audience.",
        details: "We produce branded visuals, captions, and post designs tailored for each platform. Our scheduling strategy ensures your posts go live at optimal times to reach your audience, maintain consistency, and build engagement over time."
    },
    {
        id: "45",
        slug: "monthly-strategy",
        type: "sub_service",
        typeof: "07",
        tags: "Social Strategy, Content Planning, Monthly Calendar",
        title: "Monthly Calendars & Strategy",
        img: "webImages/Services/service-7.jpg",
        description: "Structured monthly plans to align your social content with goals, campaigns, and audience trends.",
        details: "We create detailed content calendars that guide your monthly social efforts—outlining post types, themes, promotions, and holidays. Each strategy is data-driven to keep your content timely, relevant, and effective."
    },
    {
        id: "46",
        slug: "hashtag-research",
        type: "sub_service",
        typeof: "07",
        tags: "Hashtag Strategy, Social Visibility, Content Reach",
        title: "Hashtag Research",
        img: "webImages/Services/service-7.jpg",
        description: "Find trending and high-performing hashtags to expand your content’s organic reach.",
        details: "We research and curate hashtag sets based on industry, audience behavior, and performance metrics. Our goal is to improve content discoverability, categorize your posts effectively, and attract a broader yet targeted audience."
    },
    {
        id: "47",
        slug: "page-insights-reporting",
        type: "sub_service",
        typeof: "07",
        tags: "Social Analytics, Insights, Reporting",
        title: "Page Insights & Reporting",
        img: "webImages/Services/service-7.jpg",
        description: "Track engagement, growth, and ROI through custom monthly reports and analytics dashboards.",
        details: "We deliver monthly reports that cover reach, engagement, audience behavior, top content, and more. Our data-driven insights help refine your strategy and make informed decisions for better content performance."
    },
    // E-commerce Solutions Sub-Services (typeof: "08")
    {
        id: "48",
        slug: "shopify-woocommerce-setup",
        type: "sub_service",
        typeof: "08",
        tags: "Shopify Setup, WooCommerce Development, E-commerce Launch",
        title: "Shopify & WooCommerce Setup",
        img: "webImages/Services/service-8.jpg",
        description: "Launch your online store with professional setup and customization of Shopify or WooCommerce platforms.",
        details: "We configure your store structure, payment settings, shipping rules, and essential integrations. Our team ensures your e-commerce platform is visually appealing, mobile-optimized, and ready to start selling smoothly."
    },
    {
        id: "49",
        slug: "product-upload-management",
        type: "sub_service",
        typeof: "08",
        tags: "Product Upload, Catalog Management, Inventory Setup",
        title: "Product Upload & Catalog Management",
        img: "webImages/Services/service-8.jpg",
        description: "Organize and manage your product listings for easy browsing and improved customer experience.",
        details: "We upload product images, descriptions, pricing, categories, and filters while ensuring consistency and SEO optimization. Our catalog management service makes navigation easier and boosts search visibility within your store."
    },
    {
        id: "50",
        slug: "payment-gateway-integration",
        type: "sub_service",
        typeof: "08",
        tags: "Payment Integration, Secure Checkout, Online Transactions",
        title: "Payment Gateway Integration",
        img: "webImages/Services/service-8.jpg",
        description: "Enable smooth and secure transactions with professional integration of trusted payment gateways.",
        details: "We integrate payment providers like Stripe, PayPal, and local gateways to support seamless checkouts. Our integration ensures encrypted processing, compliance with PCI standards, and multi-currency options if needed."
    },
    {
        id: "51",
        slug: "custom-features-plugins",
        type: "sub_service",
        typeof: "08",
        tags: "Custom Plugins, Feature Development, E-commerce Extensions",
        title: "Custom Features & Plugins",
        img: "webImages/Services/service-8.jpg",
        description: "Enhance your e-commerce store with tailored features and plugin development to meet unique business needs.",
        details: "We develop and integrate custom plugins and advanced features to extend your online store’s capabilities. Whether it's custom checkout processes, user dashboards, loyalty programs, or unique product functionality—we deliver seamless integrations that elevate user experience."
    },
    {
        id: "52",
        slug: "inventory-management-systems",
        type: "sub_service",
        typeof: "08",
        tags: "Inventory Tracking, Stock Management, Retail Automation",
        title: "Inventory Management Systems",
        img: "webImages/Services/service-8.jpg",
        description: "Automate stock control and streamline inventory operations with intelligent tracking systems.",
        details: "We design and implement custom inventory management systems that track stock levels, automate alerts, manage vendors, and sync with your e-commerce platform. Ideal for retailers, wholesalers, and manufacturers needing real-time visibility and operational efficiency."
    },
    // Branding & Identity Sub-Services (typeof: "09")
    {
        id: "53",
        slug: "brand-strategy",
        type: "sub_service",
        typeof: "09",
        tags: "Brand Positioning, Messaging Framework, Audience Research",
        title: "Brand Strategy",
        img: "webImages/Services/service-9.jpg",
        description: "Develop a cohesive brand strategy that reflects your values, resonates with your audience, and fuels business growth.",
        details: "We help define your brand vision, mission, values, target persona, and competitive position. Our strategy combines research, storytelling, and visual direction to ensure your brand has clarity, consistency, and emotional impact across every touchpoint."
    },
    {
        id: "54",
        slug: "logo-visual-identity",
        type: "sub_service",
        typeof: "09",
        tags: "Logo Design, Visual Identity, Brand Recognition",
        title: "Logo & Visual Identity",
        img: "webImages/Services/service-9.jpg",
        description: "Create iconic logos and cohesive visuals that strengthen your brand identity and recognition.",
        details: "We craft logos and supporting visual elements that express your brand’s essence through color, typography, and symbolism. From concept sketches to final vector files, we ensure scalability and impact across digital and print channels."
    },
    {
        id: "55",
        slug: "color-palette-typography",
        type: "sub_service",
        typeof: "09",
        tags: "Brand Colors, Typography Design, Style Consistency",
        title: "Color Palette & Typography",
        img: "webImages/Services/service-9.jpg",
        description: "Establish a consistent brand tone with curated color palettes and typographic hierarchy.",
        details: "We define strategic color schemes and typography rules that reinforce your brand’s voice, mood, and readability. Our selections ensure visual harmony and versatility across all mediums—from websites to packaging and presentations."
    },
    {
        id: "56",
        slug: "brand-guidelines",
        type: "sub_service",
        typeof: "09",
        tags: "Brand Guide, Visual Rules, Brand Standards",
        title: "Brand Guidelines",
        img: "webImages/Services/service-9.jpg",
        description: "A comprehensive document that defines how your brand should be presented across all channels.",
        details: "Our brand guideline manuals cover logo usage, color codes, typography, tone of voice, spacing, and imagery rules. This ensures consistent implementation of your brand identity across teams, platforms, and future marketing materials."
    },
    {
        id: "57",
        slug: "rebranding-services",
        type: "sub_service",
        typeof: "09",
        tags: "Brand Refresh, Identity Update, Repositioning",
        title: "Rebranding Services",
        img: "webImages/Services/service-9.jpg",
        description: "Reinvent your brand to stay relevant, capture new markets, or reflect growth in your business journey.",
        details: "We lead end-to-end rebranding—from strategic brand audits to complete visual overhauls. Whether you're repositioning or modernizing your identity, we help you create a refreshed brand experience that connects with today's audience."
    },
    // Software Development Sub-Services (typeof: "10")
    {
        id: "58",
        slug: "business-automation-tools",
        type: "sub_service",
        typeof: "10",
        tags: "Workflow Automation, Task Management, Digital Efficiency",
        title: "Business Automation Tools",
        img: "webImages/Services/service-10.jpg",
        description: "Eliminate repetitive tasks and improve productivity with tailored automation tools for your business.",
        details: "We build custom tools to automate lead capturing, employee workflows, notifications, approvals, and reporting. These solutions streamline operations, reduce manual errors, and free up your team to focus on strategic initiatives."
    },
    {
        id: "59",
        slug: "crm-erp-systems",
        type: "sub_service",
        typeof: "10",
        tags: "CRM Solutions, ERP Development, Business Management",
        title: "CRM & ERP Systems",
        img: "webImages/Services/service-10.jpg",
        description: "Streamline business processes and customer relationships with intelligent CRM and ERP systems.",
        details: "We develop scalable CRM and ERP solutions tailored to your workflows—covering sales, HR, finance, operations, and client management. Our systems centralize data, improve team collaboration, and support data-driven decision-making."
    },
    {
        id: "60",
        slug: "inventory-management-software",
        type: "sub_service",
        typeof: "10",
        tags: "Inventory Control, Warehouse Software, Stock Tracking",
        title: "Inventory Management Software",
        img: "webImages/Services/service-10.jpg",
        description: "Monitor inventory in real-time, reduce stockouts, and optimize warehouse performance with custom software.",
        details: "Our inventory software includes barcode scanning, order sync, stock alerts, and warehouse reports. Built for retail, manufacturing, and logistics, it integrates with your ERP or e-commerce backend for end-to-end inventory visibility."
    },
    {
        id: "61",
        slug: "cloud-applications",
        type: "sub_service",
        typeof: "10",
        tags: "Cloud Software, SaaS Applications, Remote Access",
        title: "Cloud-Based Applications",
        img: "webImages/Services/service-10.jpg",
        description: "Develop secure and scalable cloud-based applications to enhance agility, performance, and global access.",
        details: "We design and deploy cloud-native apps tailored to your business processes—enabling real-time collaboration, remote access, and seamless scaling. Built using AWS, Azure, or GCP, our solutions reduce infrastructure costs and improve operational efficiency."
    },
    {
        id: "62",
        slug: "api-development-integration",
        type: "sub_service",
        typeof: "10",
        tags: "API Integration, Custom APIs, System Connectivity",
        title: "API Development & Integration",
        img: "webImages/Services/service-10.jpg",
        description: "Build robust APIs and connect your platforms for seamless, secure data communication across systems.",
        details: "We design RESTful and GraphQL APIs to streamline communication between software, apps, and third-party services. From custom API creation to integration with CRMs, ERPs, or payment gateways—we ensure stability, scalability, and security."
    },
    // IT Consulting Sub-Services (typeof: "11")
    {
        id: "63",
        slug: "digital-strategy",
        type: "sub_service",
        typeof: "11",
        tags: "Digital Strategy, Transformation Roadmap, Tech Advisory",
        title: "Digital Transformation Strategy",
        img: "webImages/Services/service-11.jpg",
        description: "Align your business goals with modern technology through a results-focused digital strategy plan.",
        details: "We assess your current digital landscape and outline a transformation roadmap covering platforms, processes, and technologies. From automation to modernization, we build future-ready strategies that improve efficiency and foster innovation."
    },
    {
        id: "64",
        slug: "tech-stack-recommendations",
        type: "sub_service",
        typeof: "11",
        tags: "Technology Stack, Software Architecture, Framework Selection",
        title: "Tech Stack Recommendations",
        img: "webImages/Services/service-11.jpg",
        description: "Select the best tools, platforms, and frameworks to match your project requirements and business vision.",
        details: "We help you choose front-end, back-end, and cloud technologies that support your app’s performance, scalability, and timeline. Whether it's MERN, LAMP, or serverless architecture, our advice is grounded in industry best practices."
    },
    {
        id: "65",
        slug: "infrastructure-security-audit",
        type: "sub_service",
        typeof: "11",
        tags: "IT Infrastructure, Security Audit, Risk Assessment",
        title: "Infrastructure & Security Audit",
        img: "webImages/Services/service-11.jpg",
        description: "Identify vulnerabilities and enhance your IT infrastructure with a detailed security and performance audit.",
        details: "We perform thorough audits of servers, networks, applications, and policies—highlighting risks and compliance gaps. Our team delivers actionable insights and hardening strategies to fortify your digital ecosystem against cyber threats."
    },
    {
        id: "66",
        slug: "project-planning-roadmapping",
        type: "sub_service",
        typeof: "11",
        tags: "Project Planning, Roadmapping, IT Project Management",
        title: "Project Planning & Roadmapping",
        img: "webImages/Services/service-11.jpg",
        description: "Define clear milestones and execution strategies for your IT project’s successful delivery.",
        details: "We help you break down complex initiatives into manageable phases with detailed timelines, resource allocation, and deliverables. Our strategic project roadmaps improve stakeholder visibility, alignment, and delivery confidence."
    }
];
