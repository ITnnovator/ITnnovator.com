export const ESTIMATOR_CONFIG = {
    PROJECT_TYPES: [
        { id: "website", label: "Business Website", baseScore: 30, basePrice: 50000 },
        { id: "ecommerce", label: "E-commerce Store", baseScore: 60, basePrice: 120000 },
        { id: "webapp", label: "Web App / Dashboard", baseScore: 80, basePrice: 200000 },
        { id: "mobileapp", label: "Mobile App", baseScore: 90, basePrice: 300000 },
        { id: "uiux", label: "UI/UX Design Only", baseScore: 25, basePrice: 40000 },
        { id: "seo", label: "SEO / Marketing", baseScore: 20, basePrice: 30000 },
        { id: "maintenance", label: "Maintenance / Speed", baseScore: 15, basePrice: 20000 },
        { id: "automation", label: "n8n / AI Automation", baseScore: 40, basePrice: 80000 },
    ],

    FEATURE_GROUPS: {
        website: [
            { id: "cms", label: "CMS (Content Management)", score: 10, price: 20000 },
            { id: "contact_forms", label: "Contact Forms", score: 5, price: 5000 },
            { id: "blog", label: "Blog Section", score: 10, price: 15000 },
            { id: "multilang", label: "Multi-language", score: 10, price: 20000 },
            { id: "analytics", label: "Analytics / Tracking", score: 5, price: 5000 },
            { id: "speed_opt", label: "Speed Optimization", score: 5, price: 10000 },
            { id: "chat", label: "WhatsApp / Chat Integration", score: 5, price: 5000 },
        ],
        ecommerce: [
            { id: "inventory", label: "Products / Inventory", score: 15, price: 25000 },
            { id: "payments", label: "Payments / Checkout", score: 20, price: 30000 },
            { id: "shipping", label: "Shipping / Tax Rules", score: 15, price: 20000 },
            { id: "coupons", label: "Coupons / Discounts", score: 5, price: 10000 },
            { id: "order_mgmt", label: "Order Management", score: 10, price: 15000 },
            { id: "customer_accounts", label: "Customer Accounts", score: 10, price: 20000 },
            { id: "analytics", label: "Sales Analytics", score: 5, price: 10000 },
        ],
        webapp: [
            { id: "auth", label: "Auth / Login", score: 15, price: 20000 },
            { id: "roles", label: "Roles & Permissions", score: 15, price: 25000 },
            { id: "admin", label: "Admin Panel", score: 20, price: 35000 },
            { id: "api", label: "API Integration", score: 20, price: 30000 },
            { id: "notifications", label: "Notifications (Email/Push)", score: 10, price: 15000 },
            { id: "reporting", label: "Reporting / Analytics", score: 15, price: 25000 },
            { id: "payments", label: "Payments (Optional)", score: 15, price: 30000 },
        ],
        mobileapp: [
            { id: "auth", label: "Auth / Login", score: 15, price: 20000 },
            { id: "push", label: "Push Notifications", score: 10, price: 15000 },
            { id: "api", label: "API Integration", score: 20, price: 35000 },
            { id: "payments", label: "In-App Payments", score: 20, price: 35000 },
            { id: "admin", label: "Admin Panel (Web)", score: 20, price: 35000 },
            { id: "offline", label: "Offline Mode", score: 15, price: 25000 },
        ],
        uiux: [
            { id: "wireframes", label: "Wireframes", score: 10, price: 15000 },
            { id: "ui_design", label: "High-fidelity UI", score: 20, price: 30000 },
            { id: "design_system", label: "Design System / UI Kit", score: 15, price: 25000 },
            { id: "ux_research", label: "UX Research", score: 15, price: 20000 },
            { id: "prototyping", label: "Prototyping", score: 10, price: 10000 },
            { id: "responsive", label: "Responsive Layouts", score: 5, price: 10000 },
            { id: "handoff", label: "Dev Handoff File", score: 5, price: 5000 },
        ],
        seo: [
            { id: "audit", label: "SEO Audit", score: 10, price: 10000 },
            { id: "keyword_research", label: "Keyword Research", score: 10, price: 10000 },
            { id: "onpage", label: "On-page SEO", score: 15, price: 15000 },
            { id: "technical", label: "Technical SEO", score: 15, price: 15000 },
            { id: "local_seo", label: "Local SEO", score: 10, price: 10000 },
            { id: "content_plan", label: "Content Strategy Plan", score: 10, price: 15000 },
            { id: "tracking", label: "GA4 / Tracking Setup", score: 5, price: 5000 },
        ],
        maintenance: [
            { id: "perf_opt", label: "Performance Optimization", score: 10, price: 15000 },
            { id: "bug_fixes", label: "Bug Fixes", score: 10, price: 10000 },
            { id: "security", label: "Security Updates", score: 10, price: 15000 },
            { id: "hosting", label: "Hosting / Deployment", score: 5, price: 5000 },
            { id: "monitoring", label: "Uptime Monitoring", score: 5, price: 5000 },
            { id: "monthly_plan", label: "Monthly Retainer", score: 20, price: 30000 },
        ],
        automation: [
            { id: "workflow", label: "Workflow Automation", score: 15, price: 25000 },
            { id: "api_integ", label: "API Integrations", score: 15, price: 25000 },
            { id: "webhooks", label: "Webhooks", score: 10, price: 15000 },
            { id: "data_sync", label: "Data Sync", score: 10, price: 15000 },
            { id: "ai_bot", label: "AI Agent / Chatbot", score: 25, price: 40000 },
            { id: "maint_plan", label: "Maintenance Plan", score: 10, price: 15000 },
        ],
    },

    // Dynamic Step 3 Configuration
    STEP3_CONFIG: {
        uiux: {
            title: "Design Details",
            questions: [
                { id: "has_brand", label: "Do you already have brand guidelines?", type: "yesno", scoreYes: 0, scoreNo: 15, priceNo: 30000 }, // No means need branding
                {
                    id: "screens", label: "How many screens?", type: "select", options: [
                        { value: "1-5", label: "1-5 Screens", score: 5, price: 10000 },
                        { value: "6-15", label: "6-15 Screens", score: 10, price: 25000 },
                        { value: "15+", label: "15+ Screens", score: 20, price: 50000 },
                    ]
                },
            ]
        },
        seo: {
            title: "Marketing Details",
            questions: [
                { id: "website_exists", label: "Website already exists?", type: "yesno", scoreYes: 0, scoreNo: 0 },
                {
                    id: "goal", label: "Primary Goal?", type: "select", options: [
                        { value: "traffic", label: "Traffic" },
                        { value: "leads", label: "Leads" },
                        { value: "sales", label: "Sales" },
                        { value: "local", label: "Local Visibility" },
                    ]
                },
                { id: "need_content", label: "Do you need content writing?", type: "yesno", scoreYes: 10, priceYes: 20000, scoreNo: 0 },
            ]
        },
        website: {
            title: "Design & Content",
            questions: [
                { id: "need_design", label: "Do you need UI/UX design?", type: "yesno", labelYes: "Need Design", labelNo: "Have Design", scoreYes: 20, priceYes: 50000 },
                { id: "need_content", label: "Do you have content ready?", type: "yesno", labelYes: "Yes, Ready", labelNo: "No, Need Help", scoreYes: 0, scoreNo: 10, priceNo: 20000 }, // No means need content
                { id: "need_branding", label: "Do you have key branding?", type: "yesno", labelYes: "Yes", labelNo: "No, Need Branding", scoreYes: 0, scoreNo: 15, priceNo: 30000 },
                {
                    id: "pages", label: "How many pages?", type: "select", options: [
                        { value: "1-5", label: "1-5 Pages", score: 5, price: 15000 },
                        { value: "6-10", label: "6-10 Pages", score: 10, price: 30000 },
                        { value: "10+", label: "10+ Pages", score: 20, price: 50000 },
                    ]
                },
            ]
        },
        ecommerce: {
            title: "Store Details",
            questions: [
                { id: "need_design", label: "Do you need UI/UX design?", type: "yesno", labelYes: "Need Design", labelNo: "Have Design", scoreYes: 20, priceYes: 50000 },
                { id: "has_products", label: "Do you have product data?", type: "yesno", labelYes: "Yes", labelNo: "No", scoreYes: 0, scoreNo: 5, priceNo: 10000 }, // No might imply data entry work
                { id: "need_copy", label: "Do you need copywriting?", type: "yesno", scoreYes: 10, priceYes: 20000 },
                { id: "need_branding", label: "Do you have branding?", type: "yesno", labelYes: "Yes", labelNo: "Need Branding", scoreYes: 0, scoreNo: 15, priceNo: 30000 },
            ]
        },
        webapp: {
            title: "Project Requirements",
            questions: [
                { id: "need_design", label: "Do you need UI/UX design?", type: "yesno", labelYes: "Need Design", labelNo: "Have Design", scoreYes: 20, priceYes: 50000 },
                { id: "has_docs", label: "Are requirements documented?", type: "yesno", scoreYes: 0, scoreNo: 5 }, // No docs = more discovery time
                { id: "prototype", label: "Need clickable prototype?", type: "yesno", scoreYes: 10, priceYes: 15000 },
            ]
        },
        mobileapp: {
            title: "App Requirements",
            questions: [
                { id: "need_design", label: "Do you need UI/UX design?", type: "yesno", labelYes: "Need Design", labelNo: "Have Design", scoreYes: 20, priceYes: 50000 },
                { id: "prototype", label: "Need prototyping?", type: "yesno", scoreYes: 10, priceYes: 15000 },
                { id: "need_branding", label: "Do you need branding?", type: "yesno", scoreYes: 15, priceYes: 30000 },
                {
                    id: "screens", label: "Approx. number of screens?", type: "select", options: [
                        { value: "small", label: "Small (~10)", score: 10, price: 50000 },
                        { value: "medium", label: "Medium (~25)", score: 25, price: 100000 },
                        { value: "large", label: "Large (50+)", score: 50, price: 200000 },
                    ]
                },
            ]
        },
        maintenance: {
            title: "Maintenance Details",
            questions: [
                {
                    id: "platform", label: "What platform are you on?", type: "select", options: [
                        { value: "wordpress", label: "WordPress" },
                        { value: "shopify", label: "Shopify" },
                        { value: "custom", label: "Custom Code" },
                        { value: "other", label: "Other" },
                    ]
                },
            ]
        },
        automation: {
            title: "Automation Details",
            questions: [
                { id: "has_workflows", label: "Do you reference workflows?", type: "yesno", scoreYes: 0, scoreNo: 5 }, // Helper text: "If no, we design them"
                { id: "need_maint", label: "Need ongoing monitoring?", type: "yesno", scoreYes: 10, priceYes: 15000 },
            ]
        }
    },

    TIMELINE_OPTIONS: [
        { id: "asap", label: "ASAP (2–4 weeks)", multiplier: 1.3 },
        { id: "standard", label: "Standard (1–2 months)", multiplier: 1.0 },
        { id: "flexible", label: "Flexible (2+ months)", multiplier: 0.9 },
    ],
    BUDGET_RANGES: [
        { id: "under_100", label: "Under 100k PKR" },
        { id: "100_300", label: "100k – 300k PKR" },
        { id: "300_700", label: "300k – 700k PKR" },
        { id: "700_1500", label: "700k – 1.5M PKR" },
        { id: "1500_plus", label: "1.5M+ PKR" },
    ],
    COMPLEXITY_THRESHOLDS: {
        low: 50,
        medium: 100,
        high: 150, // Anything above 100 is High
    },

    CURRENCY_CONFIG: {
        PKR: { code: 'PKR', symbol: 'Rs', rate: 1, locale: 'en-PK' }, // Base
        USD: { code: 'USD', symbol: '$', rate: 0.0036, locale: 'en-US' }, // 1 PKR = 0.0036 USD (Approx 1/278)
        GBP: { code: 'GBP', symbol: '£', rate: 0.0028, locale: 'en-GB' },
        EUR: { code: 'EUR', symbol: '€', rate: 0.0033, locale: 'en-IE' },
        AED: { code: 'AED', symbol: 'AED', rate: 0.0132, locale: 'en-AE' },
    }
};

// Helper: Convert Price
export function convertPrice(pkrAmount, targetCurrency = 'PKR') {
    const config = ESTIMATOR_CONFIG.CURRENCY_CONFIG[targetCurrency] || ESTIMATOR_CONFIG.CURRENCY_CONFIG['PKR'];
    const converted = Math.round(pkrAmount * config.rate);

    // Rounding for cleaner numbers
    // If USD/GBP/EUR, round to nearest 50
    // If PKR, round to nearest 5000
    let rounded = converted;
    if (targetCurrency === 'PKR') {
        rounded = Math.round(converted / 5000) * 5000;
    } else {
        rounded = Math.round(converted / 50) * 50;
    }

    return {
        value: rounded,
        formatted: new Intl.NumberFormat(config.locale, { style: 'currency', currency: config.code, maximumFractionDigits: 0 }).format(rounded)
    };
}

// Helper: Get Human Readable Label
export function getLabel(key, type = null) {
    if (!key) return "";

    // 1. Check Project Types
    const typeObj = ESTIMATOR_CONFIG.PROJECT_TYPES.find(t => t.id === key);
    if (typeObj) return typeObj.label;

    // 2. Check Budget Ranges
    const budgetObj = ESTIMATOR_CONFIG.BUDGET_RANGES.find(b => b.id === key);
    if (budgetObj) return budgetObj.label;

    // 3. Check Timeline Options
    const timelineObj = ESTIMATOR_CONFIG.TIMELINE_OPTIONS.find(t => t.id === key);
    if (timelineObj) return timelineObj.label;

    // 4. Check Feature Groups (Scan all or specific type)
    if (type && ESTIMATOR_CONFIG.FEATURE_GROUPS[type]) {
        const feat = ESTIMATOR_CONFIG.FEATURE_GROUPS[type].find(f => f.id === key);
        if (feat) return feat.label;
    } else {
        // Scan all groups
        for (const group of Object.values(ESTIMATOR_CONFIG.FEATURE_GROUPS)) {
            const feat = group.find(f => f.id === key);
            if (feat) return feat.label;
        }
    }

    // 5. Check Step 3 Configs (Questions & Options)
    // This is trickier as keys might be answer values ('1-5', 'yes') or question IDs
    // For now, rely on direct strings or simple fallbacks
    return key.replace(/_/g, " ").replace(/\b\w/g, l => l.toUpperCase());
}


export function calculateEstimate(selections, currency = 'PKR') {
    if (!selections.projectType) {
        return { score: 0, costRange: "0", timelineRange: "N/A", complexity: "N/A", baseCostRange: "0" };
    }

    let totalScore = 0;
    let totalPrice = 0;

    // 1. Base Project Type
    const typeConfig = ESTIMATOR_CONFIG.PROJECT_TYPES.find(
        (t) => t.id === selections.projectType
    );
    if (typeConfig) {
        totalScore += typeConfig.baseScore;
        totalPrice += typeConfig.basePrice;
    }

    // 2. Features (Context-Aware)
    const availableFeatures = ESTIMATOR_CONFIG.FEATURE_GROUPS[selections.projectType] || [];
    selections.features.forEach((featId) => {
        const featConfig = availableFeatures.find((f) => f.id === featId);
        if (featConfig) {
            totalScore += featConfig.score;
            totalPrice += featConfig.price;
        }
    });

    // 3. Dynamic Step 3 Logic
    const step3Config = ESTIMATOR_CONFIG.STEP3_CONFIG[selections.projectType];
    if (step3Config && selections.step3) {
        step3Config.questions.forEach(q => {
            const answer = selections.step3[q.id];
            if (answer !== undefined && answer !== "") {
                if (q.type === 'yesno') {
                    if (answer === true || answer === 'true' || answer === 'yes') {
                        totalScore += q.scoreYes || 0;
                        totalPrice += q.priceYes || 0;
                    } else {
                        totalScore += q.scoreNo || 0;
                        totalPrice += q.priceNo || 0;
                    }
                } else if (q.type === 'select') {
                    const option = q.options.find(o => o.value === answer);
                    if (option) {
                        totalScore += option.score || 0;
                        totalPrice += option.price || 0;
                    }
                }
            }
        });
    }

    // 4. Timeline Multiplier
    const timelineConfig = ESTIMATOR_CONFIG.TIMELINE_OPTIONS.find(
        (t) => t.id === selections.timeline
    );
    if (timelineConfig) {
        totalPrice = totalPrice * timelineConfig.multiplier;
    }

    // Complexity Mapping
    let complexity = "Low";
    if (totalScore > ESTIMATOR_CONFIG.COMPLEXITY_THRESHOLDS.low) complexity = "Medium";
    if (totalScore > ESTIMATOR_CONFIG.COMPLEXITY_THRESHOLDS.medium) complexity = "High";

    // Formatting Cost Range (PKR Base)
    const minPricePKR = Math.round((totalPrice * 0.9));
    const maxPricePKR = Math.round((totalPrice * 1.25));

    // Convert to Target Currency
    const minConverted = convertPrice(minPricePKR, currency);
    const maxConverted = convertPrice(maxPricePKR, currency);

    // Also keep base for record
    const minBase = convertPrice(minPricePKR, 'PKR');
    const maxBase = convertPrice(maxPricePKR, 'PKR');

    const costRange = `${minConverted.formatted} - ${maxConverted.formatted}`;
    const baseCostRange = `${minBase.formatted} - ${maxBase.formatted}`;

    // Timeline Range Logic
    let timelineRange = "2-4 weeks";
    if (totalScore > 80) timelineRange = "1-2 months";
    if (totalScore > 130) timelineRange = "3-4 months";
    if (totalScore > 180) timelineRange = "4+ months";

    if (timelineConfig) {
        if (complexity === 'High' && selections.timeline === 'asap') {
            timelineRange = "1-2 months (Rush)";
        } else {
            timelineRange = timelineConfig.label.split('(')[1]?.replace(')', '') || timelineRange;
        }
    }

    return {
        score: totalScore,
        costRange,      // Localized
        baseCostRange,  // Always PKR
        timelineRange,
        complexity,
    };
}
