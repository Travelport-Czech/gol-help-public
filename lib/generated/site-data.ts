/* Generated from content/ markdown by scripts/generate-site-data.mjs — do not edit. */

export const HOME = {
  heroTitle: "Hi, how can we help you?",
  heroSub: "Search the GOL IBE knowledge base or browse by topic below.",
  searchChips: [
    "Users",
    "Service fee",
    "Working hours",
    "Email templates",
    "Cancel booking",
    "Flush caches"
  ],
  youtubeUrl: "https://www.youtube.com/@ceetravelsystems",
  youtubeTitle: "Video tutorials",
  youtubeSub: "Watch step-by-step guides on our YouTube channel →",
  mostVisited: [
    "/portal/agency/detail",
    "/portal/agency/working-hours",
    "/portal/agency/working-hours-exception",
    "/portal/agency/private-fare",
    "/portal/agency/contact-billing"
  ],
  walkthroughs: [
    {
      title: "Set up your agency from scratch",
      desc: "Configure profile, email, payment methods and first users",
      steps: 6,
      category: "Agency",
      href: "/portal/agency"
    },
    {
      title: "Handle incoming bookings",
      desc: "Review new bookings, verify clients, manage payment and cancel overdue cases",
      steps: 4,
      category: "Reservations",
      href: "/portal/reservations"
    },
    {
      title: "Configure markup and service fees",
      desc: "Add markup rules, service fees and promo codes",
      steps: 4,
      category: "Prices & Markup",
      href: "/portal/prices"
    },
    {
      title: "Set up email notifications",
      desc: "Edit templates, test sends and manage delivery logs",
      steps: 4,
      category: "Notifications",
      href: "/portal/notifications"
    },
    {
      title: "Connect a GDS source",
      desc: "Enter credentials, test connectivity and verify live results",
      steps: 3,
      category: "Advanced Settings",
      href: "/portal/advanced-settings"
    }
  ],
  appTabs: [
    {
      label: "GOL IBE Help",
      href: "/portal",
      isActive: true
    },
    {
      label: "Admin Console",
      href: "https://bo.golibe.com/",
      isActive: false
    },
    {
      label: "My Travelport",
      href: "https://auth.travelport.com/",
      isActive: false
    }
  ],
  externalLinks: [
    {
      label: "GOL IBE pricelist",
      href: "https://www.cee-systems.com/solutions/gol-ibe"
    },
    {
      label: "CEE product web",
      href: "https://www.cee-systems.com/"
    }
  ],
  partnerForms: [
    {
      title: "GOL IBE implementation",
      desc: "Order a new GOL IBE booking engine for a travel agency.",
      href: "https://form.jotform.com/222273605035347"
    },
    {
      title: "Tripgate implementation",
      desc: "Order a new Tripgate setup for a travel agency.",
      href: "https://form.jotform.com/251812309188358"
    },
    {
      title: "New dealer on Tripgate",
      desc: "Add a new dealer to an existing Tripgate agency.",
      href: "https://form.jotform.com/252361279585062"
    }
  ]
};

export const CATEGORIES = [
  {
    icon: "🏢",
    name: "Agency",
    desc: "Profile, e-mail settings, payment fees",
    href: "/portal/agency",
    articles: [
      {
        title: "Agency detail",
        href: "/portal/agency/detail"
      },
      {
        title: "Set up working hours",
        href: "/portal/agency/working-hours"
      },
      {
        title: "Working hours exception",
        href: "/portal/agency/working-hours-exception"
      },
      {
        title: "Private fare account code",
        href: "/portal/agency/private-fare"
      },
      {
        title: "Contact info and billing details",
        href: "/portal/agency/contact-billing"
      },
      {
        title: "Payment due date",
        href: "/portal/agency/payment-due-date"
      },
      {
        title: "Manage payment methods appearance",
        href: "/portal/agency/payment-methods"
      },
      {
        title: "Add fee for payment method",
        href: "/portal/agency/payment-fee"
      },
      {
        title: "Email notifications settings",
        href: "/portal/agency/email-notifications"
      },
      {
        title: "PNR queue number",
        href: "/portal/agency/pnr-queue"
      },
      {
        title: "GTID printers for auto e-ticketing",
        href: "/portal/agency/gtid-printers"
      }
    ]
  },
  {
    icon: "🤝",
    name: "Dealers",
    desc: "Dealer accounts, commissions, multi-currency",
    href: "/portal/dealers",
    articles: [
      {
        title: "Create a Dealer Account",
        href: "/portal/dealers/create"
      },
      {
        title: "Dealer Commission",
        href: "/portal/dealers/commission"
      },
      {
        title: "Content management",
        href: "/portal/dealers/content-management"
      },
      {
        title: "Multi-currency setup",
        href: "/portal/dealers/multi-currency"
      },
      {
        title: "Default departure city",
        href: "/portal/dealers/default-departure"
      },
      {
        title: "Modify departure / arrival dates",
        href: "/portal/dealers/modify-dates"
      },
      {
        title: "Calendar management",
        href: "/portal/dealers/calendar"
      },
      {
        title: "Company billing details",
        href: "/portal/dealers/billing"
      },
      {
        title: "Change agency logo",
        href: "/portal/dealers/logo"
      },
      {
        title: "Change front-end title",
        href: "/portal/dealers/frontend-title"
      },
      {
        title: "Insert favicon",
        href: "/portal/dealers/favicon"
      },
      {
        title: "SEO text",
        href: "/portal/dealers/seo"
      },
      {
        title: "Wait page",
        href: "/portal/dealers/wait-page"
      },
      {
        title: "Download HTML package",
        href: "/portal/dealers/html-package"
      },
      {
        title: "Agency URL under logo",
        href: "/portal/dealers/agency-url"
      },
      {
        title: "Manage header",
        href: "/portal/dealers/header"
      },
      {
        title: "Customize your domain",
        href: "/portal/dealers/custom-domain"
      },
      {
        title: "Basic front-end customization",
        href: "/portal/dealers/frontend-basic"
      },
      {
        title: "Change background on front-end",
        href: "/portal/dealers/background"
      }
    ]
  },
  {
    icon: "👤",
    name: "Customers",
    desc: "Passenger profiles, travel documents, customer database",
    href: "/portal/customers",
    articles: [
      {
        title: "Customers overview",
        href: "/portal/customers/customers"
      },
      {
        title: "Create customer database",
        href: "/portal/customers/create-database"
      },
      {
        title: "Benefits for your clients",
        href: "/portal/customers/benefits-clients"
      },
      {
        title: "Benefits for your agency",
        href: "/portal/customers/benefits-agency"
      },
      {
        title: "Manage travel documents",
        href: "/portal/customers/travel-documents"
      },
      {
        title: "Handle bookings with clients",
        href: "/portal/customers/bookings-with-clients"
      }
    ]
  },
  {
    icon: "🎫",
    name: "Reservations",
    desc: "View, cancel and export bookings; handle clients; block fake bookings",
    href: "/portal/reservations",
    articles: [
      {
        title: "Handle bookings",
        href: "/portal/reservations/handle"
      },
      {
        title: "How bookings are created",
        href: "/portal/reservations/create"
      },
      {
        title: "Edit a booking (payment status, remarks)",
        href: "/portal/reservations/edit"
      },
      {
        title: "Cancel a Booking",
        href: "/portal/reservations/cancel"
      },
      {
        title: "Ticketing in GOL IBE",
        href: "/portal/reservations/ticketing"
      },
      {
        title: "Handle bookings with clients",
        href: "/portal/reservations/clients"
      },
      {
        title: "Export list of bookings",
        href: "/portal/reservations/export"
      },
      {
        title: "Stop fake bookings",
        href: "/portal/reservations/stop-fake"
      }
    ]
  },
  {
    icon: "💰",
    name: "Prices & Markup",
    desc: "Service fees, discounts, promo codes, special offers",
    href: "/portal/prices",
    articles: [
      {
        title: "Markup rules and service fees",
        href: "/portal/prices/markup-rules"
      },
      {
        title: "Service Fees",
        href: "/portal/prices/service-fees"
      },
      {
        title: "Service fees for 2OWs",
        href: "/portal/prices/service-fees-2ow"
      },
      {
        title: "Manage promo codes",
        href: "/portal/prices/promo-codes"
      },
      {
        title: "Commissions and discounts",
        href: "/portal/prices/commissions"
      },
      {
        title: "Handle special offers",
        href: "/portal/prices/special-offers"
      },
      {
        title: "Discount for carrier / flight",
        href: "/portal/prices/carrier-discount"
      }
    ]
  },
  {
    icon: "📋",
    name: "Code Lists",
    desc: "Carriers, destination filters, flush caches",
    href: "/portal/code-lists",
    articles: [
      {
        title: "Carriers",
        href: "/portal/code-lists/carriers"
      },
      {
        title: "Hide a carrier on search form",
        href: "/portal/code-lists/hide-carrier"
      },
      {
        title: "Destination filters",
        href: "/portal/code-lists/destination-filters"
      },
      {
        title: "Blocked emails",
        href: "/portal/code-lists/blocked-emails"
      },
      {
        title: "Flush caches",
        href: "/portal/code-lists/flush-caches"
      },
      {
        title: "Flush HTML caches",
        href: "/portal/code-lists/flush-html-caches"
      }
    ]
  },
  {
    icon: "👥",
    name: "Users",
    desc: "Staff accounts, rights, account management",
    href: "/portal/users",
    articles: [
      {
        title: "Create a new user access",
        href: "/portal/users/add"
      },
      {
        title: "User Rights and Permissions",
        href: "/portal/users/roles"
      },
      {
        title: "Manage your own account",
        href: "/portal/users/reset-password"
      },
      {
        title: "Manage user accounts",
        href: "/portal/users/deactivate"
      }
    ]
  },
  {
    icon: "🔔",
    name: "Notifications",
    desc: "Email templates and sent notifications",
    href: "/portal/notifications",
    articles: [
      {
        title: "Notification templates",
        href: "/portal/notifications/templates"
      },
      {
        title: "Most used notifications",
        href: "/portal/notifications/most-used"
      },
      {
        title: "Booking Confirmation Notifications",
        href: "/portal/notifications/booking-confirmation"
      },
      {
        title: "Customise Notification Templates",
        href: "/portal/notifications/custom-templates"
      },
      {
        title: "Sent notifications",
        href: "/portal/notifications/sent"
      },
      {
        title: "Customize from-email section",
        href: "/portal/notifications/from-email"
      }
    ]
  },
  {
    icon: "📄",
    name: "Supporting Texts",
    desc: "Terms, footer, menu, ticket template, CSS",
    href: "/portal/supporting-texts",
    articles: [
      {
        title: "Terms and Conditions",
        href: "/portal/supporting-texts/terms"
      },
      {
        title: "Supporting Texts (footer, menu, content)",
        href: "/portal/supporting-texts/custom-blocks"
      },
      {
        title: "CSS customization",
        href: "/portal/supporting-texts/css"
      },
      {
        title: "Create a footer",
        href: "/portal/supporting-texts/footer"
      },
      {
        title: "Create menu on front-end",
        href: "/portal/supporting-texts/menu"
      },
      {
        title: "Edit ticket itinerary template",
        href: "/portal/supporting-texts/ticket-template"
      }
    ]
  },
  {
    icon: "📈",
    name: "Statistics",
    desc: "Booking data, CSV/Excel export",
    href: "/portal/statistics",
    articles: [
      {
        title: "Statistics and sales data",
        href: "/portal/statistics/sales-report"
      }
    ]
  },
  {
    icon: "💡",
    name: "Tips & Tricks",
    desc: "Video tutorials, colour tools, useful links and resources",
    href: "/portal/tips",
    articles: [
      {
        title: "Tips & Tricks overview",
        href: "/portal/tips/tips"
      }
    ]
  },
  {
    icon: "⚙️",
    name: "Basic Settings",
    desc: "Design, working hours, service fee, notifications",
    href: "/portal/basic-settings",
    articles: [
      {
        title: "Auto-ticketing Setup",
        href: "/portal/basic-settings/auto-ticketing"
      },
      {
        title: "Design your GOL IBE site",
        href: "/portal/basic-settings/design"
      },
      {
        title: "Set up working hours",
        href: "/portal/basic-settings/working-hours"
      },
      {
        title: "Set up service fee",
        href: "/portal/basic-settings/service-fee"
      },
      {
        title: "Customize notifications",
        href: "/portal/basic-settings/notifications"
      },
      {
        title: "Implement air ticket search form",
        href: "/portal/basic-settings/search-form"
      }
    ]
  },
  {
    icon: "🔬",
    name: "Advanced Settings",
    desc: "GDS connectors, multi-PCC, parallel queries, MIR",
    href: "/portal/advanced-settings",
    articles: [
      {
        title: "GDS Connectors",
        href: "/portal/advanced-settings/connectors"
      },
      {
        title: "API and integrations",
        href: "/portal/advanced-settings/api"
      },
      {
        title: "MIR connector",
        href: "/portal/advanced-settings/mir"
      },
      {
        title: "Multi-PCC queries",
        href: "/portal/advanced-settings/multi-pcc"
      },
      {
        title: "Parallel queries",
        href: "/portal/advanced-settings/parallel-queries"
      },
      {
        title: "Service fee from airline commission",
        href: "/portal/advanced-settings/airline-commission-fee"
      }
    ]
  }
];

export const WALKTHROUGHS = HOME.walkthroughs;

export const APP_TABS = HOME.appTabs;

export const EXTERNAL_LINKS = HOME.externalLinks;

export const ARTICLE_VIDEOS = {
  "/portal/agency/working-hours": [
    {
      label: "Working hours in GOL IBE",
      youtubeId: "8WDPaH_ZJOk"
    }
  ],
  "/portal/agency/payment-due-date": [
    {
      label: "Where to find the last ticketing date on front-end",
      youtubeId: "Egry5hvKT9w"
    }
  ],
  "/portal/agency/pnr-queue": [
    {
      label: "How to change Queue number",
      youtubeId: "XWVYB9n33l8"
    }
  ],
  "/portal/customers/travel-documents": [
    {
      label: "How to handle travel documents?",
      youtubeId: "wDfbjfCaj34"
    },
    {
      label: "Mandatory travel documents on front-end",
      youtubeId: "KWKcr1DCjC4"
    }
  ],
  "/portal/code-lists/destination-filters": [
    {
      label: "How to apply destination filters",
      youtubeId: "oJg9WNhkZK0"
    }
  ],
  "/portal/notifications/from-email": [
    {
      label: "How to set up the notification sender",
      youtubeId: "Z2I0WfBKx4Q"
    }
  ]
};
