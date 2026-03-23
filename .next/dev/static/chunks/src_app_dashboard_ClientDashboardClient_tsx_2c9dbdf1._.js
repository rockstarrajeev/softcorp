(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/dashboard/ClientDashboardClient.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ClientDashboardClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/react.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fi/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
/* ─── Constants ─── */ const tabs = [
    {
        id: "overview",
        label: "Overview",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiHome"]
    },
    {
        id: "services",
        label: "Services",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiGrid"]
    },
    {
        id: "orders",
        label: "My Orders",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiPackage"]
    },
    {
        id: "profile",
        label: "Profile",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiUser"]
    }
];
const categoryLabels = {
    "social-media": "Social Media",
    platform: "Platform",
    "web-tech": "Web & Tech",
    creative: "Creative"
};
const categoryColors = {
    "social-media": "from-blue-500 to-cyan-400",
    platform: "from-purple-500 to-pink-400",
    "web-tech": "from-emerald-500 to-teal-400",
    creative: "from-orange-500 to-amber-400"
};
const statusSteps = [
    "pending",
    "confirmed",
    "in_progress",
    "completed"
];
const statusLabels = {
    pending: "Pending",
    confirmed: "Confirmed",
    in_progress: "In Progress",
    completed: "Completed",
    cancelled: "Cancelled"
};
const statusColors = {
    pending: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
    confirmed: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    in_progress: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    completed: "bg-green-500/10 text-green-400 border-green-500/20",
    cancelled: "bg-red-500/10 text-red-400 border-red-500/20"
};
const pricingLabels = {
    fixed: "One-time",
    hourly: "/hr",
    monthly: "/mo"
};
function ClientDashboardClient({ userName, userEmail, userImage, orders, services }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("overview");
    const [categoryFilter, setCategoryFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    const [toast, setToast] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [expandedOrder, setExpandedOrder] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const totalSpent = orders.filter((o)=>o.paymentStatus === "succeeded" || o.status !== "cancelled").reduce((sum, o)=>sum + o.totalAmount, 0);
    const filteredServices = categoryFilter === "all" ? services : services.filter((s)=>s.category === categoryFilter);
    const categories = [
        ...new Set(services.map((s)=>s.category))
    ];
    function goToCheckout(serviceId) {
        router.push(`/checkout/${serviceId}`);
    }
    /* ─── Render ─── */ return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen pt-20 pb-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: toast && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: -20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    exit: {
                        opacity: 0,
                        y: -20
                    },
                    className: "fixed top-24 left-1/2 -translate-x-1/2 z-50 px-6 py-3 glass rounded-lg text-white text-sm font-medium shadow-xl border border-brand-500/20",
                    children: toast
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboard/ClientDashboardClient.tsx",
                    lineNumber: 138,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/ClientDashboardClient.tsx",
                lineNumber: 136,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto max-w-7xl px-4 lg:px-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col lg:flex-row gap-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                            className: "lg:w-64 flex-shrink-0",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "glass rounded-2xl p-5 lg:sticky lg:top-24",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3 mb-6 pb-5 border-b border-white/5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-11 h-11 rounded-full bg-gradient-to-br from-brand-500 to-accent-500 flex items-center justify-center text-white font-bold text-lg overflow-hidden",
                                                children: userImage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: userImage,
                                                    alt: "",
                                                    className: "w-full h-full object-cover"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/ClientDashboardClient.tsx",
                                                    lineNumber: 158,
                                                    columnNumber: 41
                                                }, this) : userName.charAt(0).toUpperCase()
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/ClientDashboardClient.tsx",
                                                lineNumber: 156,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "min-w-0",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-white font-semibold text-sm truncate",
                                                        children: userName
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/ClientDashboardClient.tsx",
                                                        lineNumber: 168,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-slate-500 text-xs truncate",
                                                        children: userEmail
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/ClientDashboardClient.tsx",
                                                        lineNumber: 171,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/dashboard/ClientDashboardClient.tsx",
                                                lineNumber: 167,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/ClientDashboardClient.tsx",
                                        lineNumber: 155,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                        className: "space-y-1",
                                        children: tabs.map((tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setActiveTab(tab.id),
                                                className: `w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${activeTab === tab.id ? "bg-brand-600/15 text-brand-400 shadow-sm" : "text-slate-400 hover:text-white hover:bg-white/5"}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(tab.icon, {
                                                        size: 16
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/ClientDashboardClient.tsx",
                                                        lineNumber: 186,
                                                        columnNumber: 41
                                                    }, this),
                                                    tab.label,
                                                    tab.id === "orders" && orders.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "ml-auto text-xs bg-white/10 px-2 py-0.5 rounded-full",
                                                        children: orders.length
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/ClientDashboardClient.tsx",
                                                        lineNumber: 189,
                                                        columnNumber: 45
                                                    }, this)
                                                ]
                                            }, tab.id, true, {
                                                fileName: "[project]/src/app/dashboard/ClientDashboardClient.tsx",
                                                lineNumber: 178,
                                                columnNumber: 37
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/ClientDashboardClient.tsx",
                                        lineNumber: 176,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-6 pt-5 border-t border-white/5",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signOut"])({
                                                    callbackUrl: "/"
                                                }),
                                            className: "w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm text-slate-500 hover:text-red-400 hover:bg-red-500/5 transition-all",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiLogOut"], {
                                                    size: 16
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/ClientDashboardClient.tsx",
                                                    lineNumber: 202,
                                                    columnNumber: 37
                                                }, this),
                                                "Sign Out"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/dashboard/ClientDashboardClient.tsx",
                                            lineNumber: 198,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/ClientDashboardClient.tsx",
                                        lineNumber: 197,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/ClientDashboardClient.tsx",
                                lineNumber: 153,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard/ClientDashboardClient.tsx",
                            lineNumber: 152,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                            className: "flex-1 min-w-0",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                mode: "wait",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        opacity: 0,
                                        x: 12
                                    },
                                    animate: {
                                        opacity: 1,
                                        x: 0
                                    },
                                    exit: {
                                        opacity: 0,
                                        x: -12
                                    },
                                    transition: {
                                        duration: 0.2
                                    },
                                    children: [
                                        activeTab === "overview" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(OverviewTab, {
                                            userName: userName,
                                            orders: orders,
                                            totalSpent: totalSpent,
                                            onViewOrders: ()=>setActiveTab("orders"),
                                            onViewServices: ()=>setActiveTab("services")
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/ClientDashboardClient.tsx",
                                            lineNumber: 220,
                                            columnNumber: 37
                                        }, this),
                                        activeTab === "services" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ServicesTab, {
                                            services: filteredServices,
                                            categories: categories,
                                            categoryFilter: categoryFilter,
                                            setCategoryFilter: setCategoryFilter,
                                            onRequest: (s)=>goToCheckout(s.id)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/ClientDashboardClient.tsx",
                                            lineNumber: 229,
                                            columnNumber: 37
                                        }, this),
                                        activeTab === "orders" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(OrdersTab, {
                                            orders: orders,
                                            expandedOrder: expandedOrder,
                                            setExpandedOrder: setExpandedOrder,
                                            onBrowse: ()=>setActiveTab("services")
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/ClientDashboardClient.tsx",
                                            lineNumber: 238,
                                            columnNumber: 37
                                        }, this),
                                        activeTab === "profile" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProfileTab, {
                                            userName: userName,
                                            userEmail: userEmail,
                                            userImage: userImage,
                                            ordersCount: orders.length,
                                            totalSpent: totalSpent
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/ClientDashboardClient.tsx",
                                            lineNumber: 246,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, activeTab, true, {
                                    fileName: "[project]/src/app/dashboard/ClientDashboardClient.tsx",
                                    lineNumber: 212,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/ClientDashboardClient.tsx",
                                lineNumber: 211,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard/ClientDashboardClient.tsx",
                            lineNumber: 210,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/dashboard/ClientDashboardClient.tsx",
                    lineNumber: 150,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/ClientDashboardClient.tsx",
                lineNumber: 149,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/dashboard/ClientDashboardClient.tsx",
        lineNumber: 134,
        columnNumber: 9
    }, this);
}
_s(ClientDashboardClient, "qngekbPjY1InmiU62ykHi9CxIF4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = ClientDashboardClient;
/* ═══════════════════════════════════════════════════════════
   TAB: Overview
   ═══════════════════════════════════════════════════════════ */ function OverviewTab({ userName, orders, totalSpent, onViewOrders, onViewServices }) {
    const stats = [
        {
            label: "Total Orders",
            value: orders.length,
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiPackage"],
            color: "from-blue-500 to-cyan-400"
        },
        {
            label: "In Progress",
            value: orders.filter((o)=>o.status === "in_progress").length,
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiClock"],
            color: "from-purple-500 to-pink-400"
        },
        {
            label: "Completed",
            value: orders.filter((o)=>o.status === "completed").length,
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiCheckCircle"],
            color: "from-emerald-500 to-teal-400"
        },
        {
            label: "Total Spent",
            value: `$${totalSpent.toLocaleString()}`,
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiDollarSign"],
            color: "from-orange-500 to-amber-400"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "glass rounded-2xl p-6 relative overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-brand-600/10 to-accent-500/5 rounded-full -translate-y-12 translate-x-12 blur-2xl"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/ClientDashboardClient.tsx",
                        lineNumber: 312,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-2xl font-bold text-white relative",
                        children: [
                            "Welcome back,",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "gradient-text",
                                children: userName.split(" ")[0]
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/ClientDashboardClient.tsx",
                                lineNumber: 315,
                                columnNumber: 21
                            }, this),
                            " 👋"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/dashboard/ClientDashboardClient.tsx",
                        lineNumber: 313,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-slate-400 mt-1 text-sm relative",
                        children: "Here's what's happening with your projects"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/ClientDashboardClient.tsx",
                        lineNumber: 317,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-3 mt-4 relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onViewServices,
                                className: "px-4 py-2 text-sm font-medium gradient-brand text-white rounded-lg hover:opacity-90 transition-opacity",
                                children: "Browse Services"
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/ClientDashboardClient.tsx",
                                lineNumber: 321,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onViewOrders,
                                className: "px-4 py-2 text-sm font-medium text-slate-300 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-all",
                                children: "View Orders"
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/ClientDashboardClient.tsx",
                                lineNumber: 327,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/dashboard/ClientDashboardClient.tsx",
                        lineNumber: 320,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard/ClientDashboardClient.tsx",
                lineNumber: 311,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-4",
                children: stats.map((stat, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 16
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            delay: i * 0.08
                        },
                        className: "glass rounded-xl p-5",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between items-start",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-slate-400 text-xs mb-1",
                                            children: stat.label
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/ClientDashboardClient.tsx",
                                            lineNumber: 348,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xl font-bold text-white",
                                            children: stat.value
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/ClientDashboardClient.tsx",
                                            lineNumber: 349,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/dashboard/ClientDashboardClient.tsx",
                                    lineNumber: 347,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `w-9 h-9 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(stat.icon, {
                                        size: 16,
                                        className: "text-white"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/ClientDashboardClient.tsx",
                                        lineNumber: 354,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/ClientDashboardClient.tsx",
                                    lineNumber: 351,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/dashboard/ClientDashboardClient.tsx",
                            lineNumber: 346,
                            columnNumber: 25
                        }, this)
                    }, stat.label, false, {
                        fileName: "[project]/src/app/dashboard/ClientDashboardClient.tsx",
                        lineNumber: 339,
                        columnNumber: 21
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/ClientDashboardClient.tsx",
                lineNumber: 337,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "glass rounded-xl p-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-lg font-semibold text-white mb-4 flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiTrendingUp"], {
                                className: "text-brand-400",
                                size: 18
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/ClientDashboardClient.tsx",
                                lineNumber: 364,
                                columnNumber: 21
                            }, this),
                            "Recent Activity"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/dashboard/ClientDashboardClient.tsx",
                        lineNumber: 363,
                        columnNumber: 17
                    }, this),
                    orders.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center py-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-slate-500 text-sm",
                                children: "No activity yet"
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/ClientDashboardClient.tsx",
                                lineNumber: 369,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onViewServices,
                                className: "text-brand-400 hover:text-brand-300 text-sm font-medium mt-2 inline-block",
                                children: "Browse services to get started →"
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/ClientDashboardClient.tsx",
                                lineNumber: 370,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/dashboard/ClientDashboardClient.tsx",
                        lineNumber: 368,
                        columnNumber: 21
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-3",
                        children: orders.slice(0, 5).map((order)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between gap-3 p-3 rounded-lg bg-white/[0.02] border border-white/5 group hover:bg-white/[0.04] transition-colors",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3 min-w-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `w-2 h-2 rounded-full ${order.status === "completed" ? "bg-green-400" : order.status === "in_progress" ? "bg-purple-400" : order.status === "cancelled" ? "bg-red-400" : "bg-yellow-400"}`
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/ClientDashboardClient.tsx",
                                                lineNumber: 385,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "min-w-0",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-white text-sm font-medium truncate",
                                                        children: order.serviceName
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/ClientDashboardClient.tsx",
                                                        lineNumber: 396,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-slate-500 text-xs",
                                                        children: new Date(order.createdAt).toLocaleDateString("en-US", {
                                                            month: "short",
                                                            day: "numeric"
                                                        })
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/ClientDashboardClient.tsx",
                                                        lineNumber: 399,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/dashboard/ClientDashboardClient.tsx",
                                                lineNumber: 395,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/ClientDashboardClient.tsx",
                                        lineNumber: 384,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `px-2 py-0.5 rounded-md text-xs font-medium border shrink-0 ${statusColors[order.status] || statusColors.pending}`,
                                        children: statusLabels[order.status] || order.status
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/ClientDashboardClient.tsx",
                                        lineNumber: 407,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, order.id, true, {
                                fileName: "[project]/src/app/dashboard/ClientDashboardClient.tsx",
                                lineNumber: 380,
                                columnNumber: 29
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/ClientDashboardClient.tsx",
                        lineNumber: 378,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard/ClientDashboardClient.tsx",
                lineNumber: 362,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/dashboard/ClientDashboardClient.tsx",
        lineNumber: 309,
        columnNumber: 9
    }, this);
}
_c1 = OverviewTab;
/* ═══════════════════════════════════════════════════════════
   TAB: Services
   ═══════════════════════════════════════════════════════════ */ function ServicesTab({ services, categories, categoryFilter, setCategoryFilter, onRequest }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-2xl font-bold text-white",
                        children: "Service Catalog"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/ClientDashboardClient.tsx",
                        lineNumber: 440,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-slate-400 text-sm mt-1",
                        children: "Browse and request from our full range of services"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/ClientDashboardClient.tsx",
                        lineNumber: 441,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard/ClientDashboardClient.tsx",
                lineNumber: 439,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setCategoryFilter("all"),
                        className: `px-4 py-2 rounded-lg text-sm font-medium transition-all ${categoryFilter === "all" ? "gradient-brand text-white shadow-lg shadow-brand-600/20" : "bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 border border-white/5"}`,
                        children: "All Services"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/ClientDashboardClient.tsx",
                        lineNumber: 448,
                        columnNumber: 17
                    }, this),
                    categories.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setCategoryFilter(cat),
                            className: `px-4 py-2 rounded-lg text-sm font-medium transition-all ${categoryFilter === cat ? "gradient-brand text-white shadow-lg shadow-brand-600/20" : "bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 border border-white/5"}`,
                            children: categoryLabels[cat] || cat
                        }, cat, false, {
                            fileName: "[project]/src/app/dashboard/ClientDashboardClient.tsx",
                            lineNumber: 458,
                            columnNumber: 21
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard/ClientDashboardClient.tsx",
                lineNumber: 447,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-4",
                children: services.map((service, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 16
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            delay: i * 0.04
                        },
                        className: "glass rounded-xl p-5 group hover:border-brand-500/20 transition-all border border-transparent",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between mb-3",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `px-2.5 py-1 rounded-md text-xs font-medium bg-gradient-to-r ${categoryColors[service.category] || "from-slate-500 to-slate-400"} text-white`,
                                    children: categoryLabels[service.category] || service.category
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/ClientDashboardClient.tsx",
                                    lineNumber: 483,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/ClientDashboardClient.tsx",
                                lineNumber: 482,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-white font-semibold mb-2 group-hover:text-brand-300 transition-colors",
                                children: service.name
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/ClientDashboardClient.tsx",
                                lineNumber: 491,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-slate-500 text-sm leading-relaxed mb-4 line-clamp-2",
                                children: service.description
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/ClientDashboardClient.tsx",
                                lineNumber: 494,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-end justify-between pt-3 border-t border-white/5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-2xl font-bold text-white",
                                                children: [
                                                    "$",
                                                    service.price
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/dashboard/ClientDashboardClient.tsx",
                                                lineNumber: 501,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-slate-500 text-sm ml-1",
                                                children: pricingLabels[service.pricingModel]
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/ClientDashboardClient.tsx",
                                                lineNumber: 504,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/ClientDashboardClient.tsx",
                                        lineNumber: 500,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>onRequest(service),
                                        className: "px-3 py-2 text-xs font-semibold text-brand-400 bg-brand-600/10 border border-brand-500/20 rounded-lg hover:bg-brand-600/20 hover:text-brand-300 transition-all flex items-center gap-1.5",
                                        children: [
                                            "Request ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiChevronRight"], {
                                                size: 12
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/ClientDashboardClient.tsx",
                                                lineNumber: 512,
                                                columnNumber: 41
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/ClientDashboardClient.tsx",
                                        lineNumber: 508,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/ClientDashboardClient.tsx",
                                lineNumber: 499,
                                columnNumber: 25
                            }, this)
                        ]
                    }, service.id, true, {
                        fileName: "[project]/src/app/dashboard/ClientDashboardClient.tsx",
                        lineNumber: 474,
                        columnNumber: 21
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/ClientDashboardClient.tsx",
                lineNumber: 472,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/dashboard/ClientDashboardClient.tsx",
        lineNumber: 438,
        columnNumber: 9
    }, this);
}
_c2 = ServicesTab;
/* ═══════════════════════════════════════════════════════════
   TAB: Orders
   ═══════════════════════════════════════════════════════════ */ function OrdersTab({ orders, expandedOrder, setExpandedOrder, onBrowse }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-2xl font-bold text-white",
                        children: "My Orders"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/ClientDashboardClient.tsx",
                        lineNumber: 539,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-slate-400 text-sm mt-1",
                        children: "Track the progress of your projects"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/ClientDashboardClient.tsx",
                        lineNumber: 540,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard/ClientDashboardClient.tsx",
                lineNumber: 538,
                columnNumber: 13
            }, this),
            orders.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "glass rounded-xl p-12 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiPackage"], {
                        className: "mx-auto text-slate-600 mb-3",
                        size: 48
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/ClientDashboardClient.tsx",
                        lineNumber: 547,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-slate-400 text-lg font-medium mb-1",
                        children: "No orders yet"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/ClientDashboardClient.tsx",
                        lineNumber: 548,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-slate-500 text-sm mb-4",
                        children: "Browse our services and place your first order"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/ClientDashboardClient.tsx",
                        lineNumber: 551,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onBrowse,
                        className: "px-5 py-2.5 gradient-brand text-white font-semibold rounded-lg hover:opacity-90 transition-opacity text-sm",
                        children: "Browse Services"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/ClientDashboardClient.tsx",
                        lineNumber: 554,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard/ClientDashboardClient.tsx",
                lineNumber: 546,
                columnNumber: 17
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: orders.map((order, i)=>{
                    const isExpanded = expandedOrder === order.id;
                    const currentStep = statusSteps.indexOf(order.status);
                    const isCancelled = order.status === "cancelled";
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 12
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            delay: i * 0.05
                        },
                        className: "glass rounded-xl overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setExpandedOrder(isExpanded ? null : order.id),
                                className: "w-full p-5 flex items-center justify-between gap-4 hover:bg-white/[0.02] transition-colors text-left",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-4 min-w-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `w-10 h-10 rounded-lg flex items-center justify-center ${isCancelled ? "bg-red-500/10" : order.status === "completed" ? "bg-green-500/10" : "bg-brand-600/10"}`,
                                                children: isCancelled ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiAlertCircle"], {
                                                    className: "text-red-400",
                                                    size: 18
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/ClientDashboardClient.tsx",
                                                    lineNumber: 593,
                                                    columnNumber: 49
                                                }, this) : order.status === "completed" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiCheckCircle"], {
                                                    className: "text-green-400",
                                                    size: 18
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/ClientDashboardClient.tsx",
                                                    lineNumber: 595,
                                                    columnNumber: 49
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiPackage"], {
                                                    className: "text-brand-400",
                                                    size: 18
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/ClientDashboardClient.tsx",
                                                    lineNumber: 597,
                                                    columnNumber: 49
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/ClientDashboardClient.tsx",
                                                lineNumber: 584,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "min-w-0",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-white font-semibold text-sm truncate",
                                                        children: order.serviceName
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/ClientDashboardClient.tsx",
                                                        lineNumber: 601,
                                                        columnNumber: 45
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-slate-500 text-xs",
                                                        children: [
                                                            "Ordered",
                                                            " ",
                                                            new Date(order.createdAt).toLocaleDateString("en-US", {
                                                                month: "short",
                                                                day: "numeric",
                                                                year: "numeric"
                                                            })
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/dashboard/ClientDashboardClient.tsx",
                                                        lineNumber: 604,
                                                        columnNumber: 45
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/dashboard/ClientDashboardClient.tsx",
                                                lineNumber: 600,
                                                columnNumber: 41
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/ClientDashboardClient.tsx",
                                        lineNumber: 583,
                                        columnNumber: 37
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-4 shrink-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-white font-semibold text-sm",
                                                children: [
                                                    "$",
                                                    order.totalAmount
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/dashboard/ClientDashboardClient.tsx",
                                                lineNumber: 616,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `px-2.5 py-1 rounded-md text-xs font-medium border ${statusColors[order.status] || statusColors.pending}`,
                                                children: statusLabels[order.status] || order.status
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/ClientDashboardClient.tsx",
                                                lineNumber: 619,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                animate: {
                                                    rotate: isExpanded ? 90 : 0
                                                },
                                                transition: {
                                                    duration: 0.2
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiChevronRight"], {
                                                    className: "text-slate-500",
                                                    size: 16
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/ClientDashboardClient.tsx",
                                                    lineNumber: 628,
                                                    columnNumber: 45
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/ClientDashboardClient.tsx",
                                                lineNumber: 624,
                                                columnNumber: 41
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/ClientDashboardClient.tsx",
                                        lineNumber: 615,
                                        columnNumber: 37
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/ClientDashboardClient.tsx",
                                lineNumber: 577,
                                columnNumber: 33
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                children: isExpanded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        height: 0,
                                        opacity: 0
                                    },
                                    animate: {
                                        height: "auto",
                                        opacity: 1
                                    },
                                    exit: {
                                        height: 0,
                                        opacity: 0
                                    },
                                    transition: {
                                        duration: 0.25
                                    },
                                    className: "overflow-hidden",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "px-5 pb-5 pt-0 border-t border-white/5",
                                        children: [
                                            !isCancelled && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "py-5",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between",
                                                    children: statusSteps.map((step, idx)=>{
                                                        const isActive = idx <= currentStep;
                                                        const isCurrent = idx === currentStep;
                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center flex-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex flex-col items-center",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: `w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${isCurrent ? "bg-brand-500 text-white ring-4 ring-brand-500/20" : isActive ? "bg-green-500 text-white" : "bg-white/10 text-slate-500"}`,
                                                                            children: isActive && idx < currentStep ? "✓" : idx + 1
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/dashboard/ClientDashboardClient.tsx",
                                                                            lineNumber: 657,
                                                                            columnNumber: 77
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: `text-xs mt-1.5 text-center ${isActive ? "text-white" : "text-slate-600"}`,
                                                                            children: statusLabels[step]
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/dashboard/ClientDashboardClient.tsx",
                                                                            lineNumber: 669,
                                                                            columnNumber: 77
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/dashboard/ClientDashboardClient.tsx",
                                                                    lineNumber: 656,
                                                                    columnNumber: 73
                                                                }, this),
                                                                idx < statusSteps.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: `flex-1 h-0.5 mx-2 mt-[-16px] rounded-full ${idx < currentStep ? "bg-green-500" : "bg-white/10"}`
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/dashboard/ClientDashboardClient.tsx",
                                                                    lineNumber: 679,
                                                                    columnNumber: 77
                                                                }, this)
                                                            ]
                                                        }, step, true, {
                                                            fileName: "[project]/src/app/dashboard/ClientDashboardClient.tsx",
                                                            lineNumber: 652,
                                                            columnNumber: 69
                                                        }, this);
                                                    })
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/ClientDashboardClient.tsx",
                                                    lineNumber: 647,
                                                    columnNumber: 57
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/ClientDashboardClient.tsx",
                                                lineNumber: 646,
                                                columnNumber: 53
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid sm:grid-cols-2 gap-4 mt-2",
                                                children: [
                                                    order.requirements && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "sm:col-span-2 bg-white/[0.02] rounded-lg p-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-slate-500 text-xs mb-1",
                                                                children: "Requirements"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/ClientDashboardClient.tsx",
                                                                lineNumber: 697,
                                                                columnNumber: 61
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-slate-300 text-sm",
                                                                children: order.requirements
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/ClientDashboardClient.tsx",
                                                                lineNumber: 700,
                                                                columnNumber: 61
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/dashboard/ClientDashboardClient.tsx",
                                                        lineNumber: 696,
                                                        columnNumber: 57
                                                    }, this),
                                                    order.notes && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "sm:col-span-2 bg-brand-600/5 border border-brand-500/10 rounded-lg p-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-brand-400 text-xs mb-1",
                                                                children: "Admin Notes"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/ClientDashboardClient.tsx",
                                                                lineNumber: 707,
                                                                columnNumber: 61
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-slate-300 text-sm",
                                                                children: order.notes
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/ClientDashboardClient.tsx",
                                                                lineNumber: 710,
                                                                columnNumber: 61
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/dashboard/ClientDashboardClient.tsx",
                                                        lineNumber: 706,
                                                        columnNumber: 57
                                                    }, this),
                                                    order.deadline && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "bg-white/[0.02] rounded-lg p-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-slate-500 text-xs mb-1",
                                                                children: "Deadline"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/ClientDashboardClient.tsx",
                                                                lineNumber: 717,
                                                                columnNumber: 61
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-white text-sm font-medium",
                                                                children: new Date(order.deadline).toLocaleDateString("en-US", {
                                                                    month: "long",
                                                                    day: "numeric",
                                                                    year: "numeric"
                                                                })
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/ClientDashboardClient.tsx",
                                                                lineNumber: 720,
                                                                columnNumber: 61
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/dashboard/ClientDashboardClient.tsx",
                                                        lineNumber: 716,
                                                        columnNumber: 57
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "bg-white/[0.02] rounded-lg p-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-slate-500 text-xs mb-1",
                                                                children: "Payment"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/ClientDashboardClient.tsx",
                                                                lineNumber: 733,
                                                                columnNumber: 57
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: `text-sm font-medium ${order.paymentStatus === "succeeded" ? "text-green-400" : "text-yellow-400"}`,
                                                                children: order.paymentStatus === "succeeded" ? "Paid" : "Pending"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/ClientDashboardClient.tsx",
                                                                lineNumber: 736,
                                                                columnNumber: 57
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/dashboard/ClientDashboardClient.tsx",
                                                        lineNumber: 732,
                                                        columnNumber: 53
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/dashboard/ClientDashboardClient.tsx",
                                                lineNumber: 694,
                                                columnNumber: 49
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/ClientDashboardClient.tsx",
                                        lineNumber: 643,
                                        columnNumber: 45
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/ClientDashboardClient.tsx",
                                    lineNumber: 636,
                                    columnNumber: 41
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/ClientDashboardClient.tsx",
                                lineNumber: 634,
                                columnNumber: 33
                            }, this)
                        ]
                    }, order.id, true, {
                        fileName: "[project]/src/app/dashboard/ClientDashboardClient.tsx",
                        lineNumber: 569,
                        columnNumber: 29
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/ClientDashboardClient.tsx",
                lineNumber: 562,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/dashboard/ClientDashboardClient.tsx",
        lineNumber: 537,
        columnNumber: 9
    }, this);
}
_c3 = OrdersTab;
/* ═══════════════════════════════════════════════════════════
   TAB: Profile
   ═══════════════════════════════════════════════════════════ */ function ProfileTab({ userName, userEmail, userImage, ordersCount, totalSpent }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-2xl font-bold text-white",
                        children: "Profile"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/ClientDashboardClient.tsx",
                        lineNumber: 780,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-slate-400 text-sm mt-1",
                        children: "Your account details"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/ClientDashboardClient.tsx",
                        lineNumber: 781,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard/ClientDashboardClient.tsx",
                lineNumber: 779,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "glass rounded-2xl p-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col sm:flex-row items-center gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-24 h-24 rounded-full bg-gradient-to-br from-brand-500 to-accent-500 flex items-center justify-center text-white font-bold text-4xl overflow-hidden ring-4 ring-brand-500/20",
                                children: userImage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: userImage,
                                    alt: "",
                                    className: "w-full h-full object-cover"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/ClientDashboardClient.tsx",
                                    lineNumber: 788,
                                    columnNumber: 29
                                }, this) : userName.charAt(0).toUpperCase()
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/ClientDashboardClient.tsx",
                                lineNumber: 786,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center sm:text-left",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-2xl font-bold text-white",
                                        children: userName
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/ClientDashboardClient.tsx",
                                        lineNumber: 798,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-slate-400",
                                        children: userEmail
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/ClientDashboardClient.tsx",
                                        lineNumber: 799,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "inline-block mt-2 px-3 py-1 rounded-full text-xs font-medium bg-brand-600/10 text-brand-400 border border-brand-500/20",
                                        children: "Client"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/ClientDashboardClient.tsx",
                                        lineNumber: 800,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/ClientDashboardClient.tsx",
                                lineNumber: 797,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/dashboard/ClientDashboardClient.tsx",
                        lineNumber: 785,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid sm:grid-cols-2 gap-4 mt-8 pt-6 border-t border-white/5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white/[0.03] rounded-xl p-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-slate-500 text-sm",
                                        children: "Total Orders"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/ClientDashboardClient.tsx",
                                        lineNumber: 808,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-3xl font-bold text-white mt-1",
                                        children: ordersCount
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/ClientDashboardClient.tsx",
                                        lineNumber: 809,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/ClientDashboardClient.tsx",
                                lineNumber: 807,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white/[0.03] rounded-xl p-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-slate-500 text-sm",
                                        children: "Total Spent"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/ClientDashboardClient.tsx",
                                        lineNumber: 812,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-3xl font-bold text-white mt-1",
                                        children: [
                                            "$",
                                            totalSpent.toLocaleString()
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/ClientDashboardClient.tsx",
                                        lineNumber: 813,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/ClientDashboardClient.tsx",
                                lineNumber: 811,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/dashboard/ClientDashboardClient.tsx",
                        lineNumber: 806,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard/ClientDashboardClient.tsx",
                lineNumber: 784,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/dashboard/ClientDashboardClient.tsx",
        lineNumber: 778,
        columnNumber: 9
    }, this);
}
_c4 = ProfileTab;
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "ClientDashboardClient");
__turbopack_context__.k.register(_c1, "OverviewTab");
__turbopack_context__.k.register(_c2, "ServicesTab");
__turbopack_context__.k.register(_c3, "OrdersTab");
__turbopack_context__.k.register(_c4, "ProfileTab");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_dashboard_ClientDashboardClient_tsx_2c9dbdf1._.js.map