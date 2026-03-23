(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/admin/AdminDashboardClient.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdminDashboardClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/react.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fi/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature();
"use client";
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
        id: "orders",
        label: "Orders",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiShoppingBag"]
    },
    {
        id: "services",
        label: "Services",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiGrid"]
    },
    {
        id: "messages",
        label: "Messages",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiMessageSquare"]
    },
    {
        id: "clients",
        label: "Clients",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiUsers"]
    }
];
const statusOptions = [
    {
        value: "pending",
        label: "Pending",
        color: "text-yellow-400"
    },
    {
        value: "confirmed",
        label: "Confirmed",
        color: "text-blue-400"
    },
    {
        value: "in_progress",
        label: "In Progress",
        color: "text-purple-400"
    },
    {
        value: "completed",
        label: "Completed",
        color: "text-green-400"
    },
    {
        value: "cancelled",
        label: "Cancelled",
        color: "text-red-400"
    }
];
const statusColors = {
    pending: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
    confirmed: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    in_progress: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    completed: "bg-green-500/10 text-green-400 border-green-500/20",
    cancelled: "bg-red-500/10 text-red-400 border-red-500/20"
};
const categoryLabels = {
    "social-media": "Social Media",
    platform: "Platform",
    "web-tech": "Web & Tech",
    creative: "Creative"
};
function AdminDashboardClient({ data }) {
    _s();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("overview");
    const [orders, setOrders] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(data.orders);
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(data.messages);
    const [toast, setToast] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const unreadCount = messages.filter((m)=>!m.isRead).length;
    function showToast(msg) {
        setToast(msg);
        setTimeout(()=>setToast(null), 3000);
    }
    async function updateOrderStatus(orderId, status) {
        try {
            const res = await fetch("/api/admin/orders", {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    orderId,
                    status
                })
            });
            const result = await res.json();
            if (result.success) {
                setOrders((prev)=>prev.map((o)=>o.id === orderId ? {
                            ...o,
                            status
                        } : o));
                showToast(`Order updated to "${status.replace("_", " ")}"`);
            }
        } catch  {
            showToast("Failed to update order");
        }
    }
    async function markMessageRead(messageId) {
        try {
            await fetch("/api/admin/messages", {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    messageId
                })
            });
            setMessages((prev)=>prev.map((m)=>m.id === messageId ? {
                        ...m,
                        isRead: true
                    } : m));
        } catch  {
        /* silent */ }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                    className: "fixed top-24 left-1/2 -translate-x-1/2 z-50 px-6 py-3 glass rounded-lg text-white text-sm font-medium shadow-xl border border-green-500/20",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiCheck"], {
                            className: "inline mr-2 text-green-400"
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                            lineNumber: 169,
                            columnNumber: 25
                        }, this),
                        toast
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                    lineNumber: 163,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                lineNumber: 161,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto max-w-7xl px-4 lg:px-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col lg:flex-row gap-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                            className: "lg:w-56 flex-shrink-0",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "glass rounded-2xl p-5 lg:sticky lg:top-24",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3 mb-6 pb-5 border-b border-white/5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-10 h-10 rounded-lg bg-gradient-to-br from-brand-500 to-accent-500 flex items-center justify-center",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiTrendingUp"], {
                                                    className: "text-white",
                                                    size: 18
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                                                    lineNumber: 182,
                                                    columnNumber: 37
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                                                lineNumber: 181,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-white font-semibold text-sm",
                                                        children: "Admin"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                                                        lineNumber: 185,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-slate-500 text-xs",
                                                        children: "Management"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                                                        lineNumber: 186,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                                                lineNumber: 184,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                                        lineNumber: 180,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                        className: "space-y-1",
                                        children: tabs.map((tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setActiveTab(tab.id),
                                                className: `w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${activeTab === tab.id ? "bg-brand-600/15 text-brand-400" : "text-slate-400 hover:text-white hover:bg-white/5"}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(tab.icon, {
                                                        size: 16
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                                                        lineNumber: 200,
                                                        columnNumber: 41
                                                    }, this),
                                                    tab.label,
                                                    tab.id === "messages" && unreadCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "ml-auto text-xs bg-brand-500/20 text-brand-400 px-2 py-0.5 rounded-full",
                                                        children: unreadCount
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                                                        lineNumber: 203,
                                                        columnNumber: 45
                                                    }, this),
                                                    tab.id === "orders" && orders.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "ml-auto text-xs bg-white/10 px-2 py-0.5 rounded-full",
                                                        children: orders.length
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                                                        lineNumber: 208,
                                                        columnNumber: 45
                                                    }, this)
                                                ]
                                            }, tab.id, true, {
                                                fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                                                lineNumber: 192,
                                                columnNumber: 37
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                                        lineNumber: 190,
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
                                                    fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                                                    lineNumber: 221,
                                                    columnNumber: 37
                                                }, this),
                                                "Sign Out"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                                            lineNumber: 217,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                                        lineNumber: 216,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                                lineNumber: 179,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                            lineNumber: 178,
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
                                            stats: data.stats,
                                            orders: orders,
                                            messages: messages,
                                            onNav: setActiveTab
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                                            lineNumber: 239,
                                            columnNumber: 37
                                        }, this),
                                        activeTab === "orders" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(OrdersTab, {
                                            orders: orders,
                                            onUpdateStatus: updateOrderStatus
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                                            lineNumber: 247,
                                            columnNumber: 37
                                        }, this),
                                        activeTab === "services" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ServicesTab, {
                                            services: data.services
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                                            lineNumber: 253,
                                            columnNumber: 37
                                        }, this),
                                        activeTab === "messages" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MessagesTab, {
                                            messages: messages,
                                            onMarkRead: markMessageRead
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                                            lineNumber: 256,
                                            columnNumber: 37
                                        }, this),
                                        activeTab === "clients" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ClientsTab, {
                                            clients: data.clients
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                                            lineNumber: 262,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, activeTab, true, {
                                    fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                                    lineNumber: 231,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                                lineNumber: 230,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                            lineNumber: 229,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                    lineNumber: 176,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                lineNumber: 175,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
        lineNumber: 159,
        columnNumber: 9
    }, this);
}
_s(AdminDashboardClient, "UNvwYyKi3jmJEYz5bgMgvcoMmKQ=");
_c = AdminDashboardClient;
/* ═══ Overview ═══ */ function OverviewTab({ stats, orders, messages, onNav }) {
    const statCards = [
        {
            label: "Total Clients",
            value: stats.totalClients,
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiUsers"],
            color: "from-blue-500 to-cyan-400"
        },
        {
            label: "Total Orders",
            value: stats.totalOrders,
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiShoppingBag"],
            color: "from-purple-500 to-pink-400"
        },
        {
            label: "Revenue",
            value: `$${stats.totalRevenue.toLocaleString()}`,
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiDollarSign"],
            color: "from-emerald-500 to-teal-400"
        },
        {
            label: "Messages",
            value: stats.totalMessages,
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiMessageSquare"],
            color: "from-orange-500 to-amber-400"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-2xl font-bold text-white flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiTrendingUp"], {
                                className: "text-brand-400"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                                lineNumber: 296,
                                columnNumber: 21
                            }, this),
                            " Admin Dashboard"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                        lineNumber: 295,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-slate-400 text-sm mt-1",
                        children: "Manage clients, orders, and track business performance"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                        lineNumber: 298,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                lineNumber: 294,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-4",
                children: statCards.map((stat, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                                            fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                                            lineNumber: 314,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xl font-bold text-white",
                                            children: stat.value
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                                            lineNumber: 315,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                                    lineNumber: 313,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `w-9 h-9 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(stat.icon, {
                                        size: 16,
                                        className: "text-white"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                                        lineNumber: 318,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                                    lineNumber: 317,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                            lineNumber: 312,
                            columnNumber: 25
                        }, this)
                    }, stat.label, false, {
                        fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                        lineNumber: 305,
                        columnNumber: 21
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                lineNumber: 303,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid lg:grid-cols-5 gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-3 glass rounded-xl p-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-lg font-semibold text-white",
                                        children: "Recent Orders"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                                        lineNumber: 328,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>onNav("orders"),
                                        className: "text-brand-400 text-xs hover:text-brand-300",
                                        children: "View all →"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                                        lineNumber: 329,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                                lineNumber: 327,
                                columnNumber: 21
                            }, this),
                            orders.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-slate-500 text-sm py-8 text-center",
                                children: "No orders yet"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                                lineNumber: 334,
                                columnNumber: 25
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: orders.slice(0, 5).map((order)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between gap-3 p-3 rounded-lg bg-white/[0.02] border border-white/5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "min-w-0",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-white text-sm font-medium truncate",
                                                        children: order.clientName
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                                                        lineNumber: 340,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-slate-500 text-xs truncate",
                                                        children: order.serviceName
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                                                        lineNumber: 341,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                                                lineNumber: 339,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-3 shrink-0",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-white text-sm font-semibold",
                                                        children: [
                                                            "$",
                                                            order.totalAmount
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                                                        lineNumber: 344,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `px-2 py-0.5 rounded-md text-xs font-medium border ${statusColors[order.status] || statusColors.pending}`,
                                                        children: order.status.replace("_", " ")
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                                                        lineNumber: 345,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                                                lineNumber: 343,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, order.id, true, {
                                        fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                                        lineNumber: 338,
                                        columnNumber: 33
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                                lineNumber: 336,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                        lineNumber: 326,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-2 glass rounded-xl p-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-lg font-semibold text-white",
                                        children: "Messages"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                                        lineNumber: 357,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>onNav("messages"),
                                        className: "text-brand-400 text-xs hover:text-brand-300",
                                        children: "View all →"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                                        lineNumber: 358,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                                lineNumber: 356,
                                columnNumber: 21
                            }, this),
                            messages.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-slate-500 text-sm py-8 text-center",
                                children: "No messages"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                                lineNumber: 363,
                                columnNumber: 25
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: messages.slice(0, 4).map((msg)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `p-3 rounded-lg border ${msg.isRead ? "bg-white/[0.02] border-white/5" : "bg-brand-600/5 border-brand-500/10"}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between items-start mb-0.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-white text-sm font-medium",
                                                        children: [
                                                            msg.name,
                                                            !msg.isRead && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "ml-2 w-1.5 h-1.5 bg-brand-400 rounded-full inline-block"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                                                                lineNumber: 371,
                                                                columnNumber: 61
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                                                        lineNumber: 369,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-slate-600 text-xs",
                                                        children: new Date(msg.createdAt).toLocaleDateString()
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                                                        lineNumber: 373,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                                                lineNumber: 368,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-slate-400 text-xs line-clamp-1",
                                                children: msg.subject
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                                                lineNumber: 375,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, msg.id, true, {
                                        fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                                        lineNumber: 367,
                                        columnNumber: 33
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                                lineNumber: 365,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                        lineNumber: 355,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                lineNumber: 325,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
        lineNumber: 293,
        columnNumber: 9
    }, this);
}
_c1 = OverviewTab;
/* ═══ Orders ═══ */ function OrdersTab({ orders, onUpdateStatus }) {
    _s1();
    const [filter, setFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    const [openDropdown, setOpenDropdown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const filtered = filter === "all" ? orders : orders.filter((o)=>o.status === filter);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-2xl font-bold text-white",
                        children: "Order Management"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                        lineNumber: 401,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-slate-400 text-sm mt-1",
                        children: "Update order statuses and manage client projects"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                        lineNumber: 402,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                lineNumber: 400,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setFilter("all"),
                        className: `px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${filter === "all" ? "gradient-brand text-white" : "bg-white/5 text-slate-400 hover:text-white border border-white/5"}`,
                        children: [
                            "All (",
                            orders.length,
                            ")"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                        lineNumber: 407,
                        columnNumber: 17
                    }, this),
                    statusOptions.map((s)=>{
                        const count = orders.filter((o)=>o.status === s.value).length;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setFilter(s.value),
                            className: `px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${filter === s.value ? "gradient-brand text-white" : "bg-white/5 text-slate-400 hover:text-white border border-white/5"}`,
                            children: [
                                s.label,
                                " (",
                                count,
                                ")"
                            ]
                        }, s.value, true, {
                            fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                            lineNumber: 416,
                            columnNumber: 25
                        }, this);
                    })
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                lineNumber: 406,
                columnNumber: 13
            }, this),
            filtered.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "glass rounded-xl p-12 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiShoppingBag"], {
                        className: "mx-auto text-slate-600 mb-3",
                        size: 40
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                        lineNumber: 429,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-slate-400",
                        children: "No orders match this filter"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                        lineNumber: 430,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                lineNumber: 428,
                columnNumber: 17
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3",
                children: filtered.map((order, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 8
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            delay: i * 0.03
                        },
                        className: "glass rounded-xl p-5",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap items-start justify-between gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "min-w-0 flex-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 mb-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-white font-semibold",
                                                    children: order.serviceName
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                                                    lineNumber: 445,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `px-2 py-0.5 rounded-md text-xs font-medium border ${statusColors[order.status]}`,
                                                    children: order.status.replace("_", " ")
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                                                    lineNumber: 446,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                                            lineNumber: 444,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-slate-400 text-sm",
                                            children: [
                                                order.clientName,
                                                " · ",
                                                order.clientEmail
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                                            lineNumber: 450,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-wrap gap-4 mt-2 text-xs text-slate-500",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: [
                                                        "$",
                                                        order.totalAmount,
                                                        " ",
                                                        order.currency
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                                                    lineNumber: 452,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: new Date(order.createdAt).toLocaleDateString()
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                                                    lineNumber: 453,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: order.paymentStatus === "succeeded" ? "text-green-400" : "text-yellow-400",
                                                    children: [
                                                        "Payment: ",
                                                        order.paymentStatus
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                                                    lineNumber: 454,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                                            lineNumber: 451,
                                            columnNumber: 37
                                        }, this),
                                        order.requirements && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-slate-500 text-xs mt-2 bg-white/[0.02] rounded p-2 border border-white/5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-slate-400",
                                                    children: "Requirements:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                                                    lineNumber: 460,
                                                    columnNumber: 45
                                                }, this),
                                                " ",
                                                order.requirements
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                                            lineNumber: 459,
                                            columnNumber: 41
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                                    lineNumber: 443,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setOpenDropdown(openDropdown === order.id ? null : order.id),
                                            className: "px-3 py-2 text-xs font-medium bg-white/5 border border-white/10 rounded-lg text-slate-300 hover:bg-white/10 transition-all flex items-center gap-2",
                                            children: [
                                                "Update Status ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiChevronDown"], {
                                                    size: 12
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                                                    lineNumber: 471,
                                                    columnNumber: 55
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                                            lineNumber: 467,
                                            columnNumber: 37
                                        }, this),
                                        openDropdown === order.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            initial: {
                                                opacity: 0,
                                                y: -4
                                            },
                                            animate: {
                                                opacity: 1,
                                                y: 0
                                            },
                                            className: "absolute right-0 top-full mt-1 z-20 glass rounded-lg p-1 min-w-[140px] shadow-xl",
                                            children: statusOptions.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>{
                                                        onUpdateStatus(order.id, s.value);
                                                        setOpenDropdown(null);
                                                    },
                                                    className: `w-full text-left px-3 py-2 rounded text-xs transition-colors hover:bg-white/10 ${s.color} ${order.status === s.value ? "bg-white/5 font-semibold" : ""}`,
                                                    children: [
                                                        order.status === s.value && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiCheck"], {
                                                            className: "inline mr-1.5",
                                                            size: 10
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                                                            lineNumber: 488,
                                                            columnNumber: 82
                                                        }, this),
                                                        s.label
                                                    ]
                                                }, s.value, true, {
                                                    fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                                                    lineNumber: 480,
                                                    columnNumber: 49
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                                            lineNumber: 474,
                                            columnNumber: 41
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                                    lineNumber: 466,
                                    columnNumber: 33
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                            lineNumber: 442,
                            columnNumber: 29
                        }, this)
                    }, order.id, false, {
                        fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                        lineNumber: 435,
                        columnNumber: 25
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                lineNumber: 433,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
        lineNumber: 399,
        columnNumber: 9
    }, this);
}
_s1(OrdersTab, "NAHIaPKB6nUkbmNIncNuu1YvxUQ=");
_c2 = OrdersTab;
/* ═══ Services ═══ */ function ServicesTab({ services }) {
    _s2();
    const [filter, setFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    const categories = [
        ...new Set(services.map((s)=>s.category))
    ];
    const filtered = filter === "all" ? services : services.filter((s)=>s.category === filter);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-2xl font-bold text-white",
                        children: "Services"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                        lineNumber: 513,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-slate-400 text-sm mt-1",
                        children: [
                            services.length,
                            " services configured"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                        lineNumber: 514,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                lineNumber: 512,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setFilter("all"),
                        className: `px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${filter === "all" ? "gradient-brand text-white" : "bg-white/5 text-slate-400 hover:text-white border border-white/5"}`,
                        children: "All"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                        lineNumber: 518,
                        columnNumber: 17
                    }, this),
                    categories.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setFilter(cat),
                            className: `px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${filter === cat ? "gradient-brand text-white" : "bg-white/5 text-slate-400 hover:text-white border border-white/5"}`,
                            children: categoryLabels[cat] || cat
                        }, cat, false, {
                            fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                            lineNumber: 525,
                            columnNumber: 21
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                lineNumber: 517,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "glass rounded-xl overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                    className: "w-full text-sm",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                className: "border-b border-white/5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "text-left px-5 py-3 text-slate-400 text-xs font-medium",
                                        children: "Service"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                                        lineNumber: 539,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "text-left px-5 py-3 text-slate-400 text-xs font-medium",
                                        children: "Category"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                                        lineNumber: 540,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "text-left px-5 py-3 text-slate-400 text-xs font-medium",
                                        children: "Price"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                                        lineNumber: 541,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "text-left px-5 py-3 text-slate-400 text-xs font-medium",
                                        children: "Model"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                                        lineNumber: 542,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "text-left px-5 py-3 text-slate-400 text-xs font-medium",
                                        children: "Status"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                                        lineNumber: 543,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                                lineNumber: 538,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                            lineNumber: 537,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                            children: filtered.map((service)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    className: "border-b border-white/[0.03] hover:bg-white/[0.02] transition-colors",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-5 py-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-white font-medium",
                                                    children: service.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                                                    lineNumber: 550,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-slate-500 text-xs line-clamp-1",
                                                    children: service.description
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                                                    lineNumber: 551,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                                            lineNumber: 549,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-5 py-3",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-slate-300 text-xs",
                                                children: categoryLabels[service.category] || service.category
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                                                lineNumber: 554,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                                            lineNumber: 553,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-5 py-3 text-white font-semibold",
                                            children: [
                                                "$",
                                                service.price
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                                            lineNumber: 556,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-5 py-3 text-slate-400 capitalize",
                                            children: service.pricingModel
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                                            lineNumber: 557,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-5 py-3",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `px-2 py-0.5 rounded-md text-xs font-medium ${service.isActive ? "bg-green-500/10 text-green-400 border border-green-500/20" : "bg-red-500/10 text-red-400 border border-red-500/20"}`,
                                                children: service.isActive ? "Active" : "Inactive"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                                                lineNumber: 559,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                                            lineNumber: 558,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, service.id, true, {
                                    fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                                    lineNumber: 548,
                                    columnNumber: 29
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                            lineNumber: 546,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                    lineNumber: 536,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                lineNumber: 535,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
        lineNumber: 511,
        columnNumber: 9
    }, this);
}
_s2(ServicesTab, "boPJerHaELAyf+PNkR+Y8+JetQg=");
_c3 = ServicesTab;
/* ═══ Messages ═══ */ function MessagesTab({ messages, onMarkRead }) {
    _s3();
    const [expandedMsg, setExpandedMsg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-2xl font-bold text-white",
                        children: "Messages"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                        lineNumber: 585,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-slate-400 text-sm mt-1",
                        children: [
                            messages.filter((m)=>!m.isRead).length,
                            " unread of ",
                            messages.length,
                            " total"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                        lineNumber: 586,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                lineNumber: 584,
                columnNumber: 13
            }, this),
            messages.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "glass rounded-xl p-12 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiMessageSquare"], {
                        className: "mx-auto text-slate-600 mb-3",
                        size: 40
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                        lineNumber: 593,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-slate-400",
                        children: "No messages yet"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                        lineNumber: 594,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                lineNumber: 592,
                columnNumber: 17
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3",
                children: messages.map((msg, i)=>{
                    const isExpanded = expandedMsg === msg.id;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 8
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            delay: i * 0.03
                        },
                        className: `glass rounded-xl overflow-hidden ${!msg.isRead ? "ring-1 ring-brand-500/20" : ""}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    setExpandedMsg(isExpanded ? null : msg.id);
                                    if (!msg.isRead) onMarkRead(msg.id);
                                },
                                className: "w-full p-5 text-left hover:bg-white/[0.02] transition-colors",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-start justify-between gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "min-w-0 flex-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-white font-semibold text-sm",
                                                        children: [
                                                            msg.name,
                                                            !msg.isRead && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "ml-2 inline-block w-2 h-2 rounded-full bg-brand-400"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                                                                lineNumber: 621,
                                                                columnNumber: 57
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                                                        lineNumber: 618,
                                                        columnNumber: 49
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                                                    lineNumber: 617,
                                                    columnNumber: 45
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-brand-400 text-sm mt-0.5",
                                                    children: msg.subject
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                                                    lineNumber: 625,
                                                    columnNumber: 45
                                                }, this),
                                                !isExpanded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-slate-500 text-xs mt-1 line-clamp-1",
                                                    children: msg.message
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                                                    lineNumber: 627,
                                                    columnNumber: 49
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                                            lineNumber: 616,
                                            columnNumber: 41
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-slate-600 text-xs shrink-0",
                                            children: new Date(msg.createdAt).toLocaleDateString("en-US", {
                                                month: "short",
                                                day: "numeric"
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                                            lineNumber: 630,
                                            columnNumber: 41
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                                    lineNumber: 615,
                                    columnNumber: 37
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                                lineNumber: 608,
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
                                    className: "overflow-hidden",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "px-5 pb-5 border-t border-white/5 pt-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-slate-300 text-sm leading-relaxed whitespace-pre-wrap mb-4",
                                                children: msg.message
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                                                lineNumber: 648,
                                                columnNumber: 49
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-wrap gap-4 text-xs text-slate-500",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "flex items-center gap-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiMail"], {
                                                                size: 12
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                                                                lineNumber: 653,
                                                                columnNumber: 57
                                                            }, this),
                                                            " ",
                                                            msg.email
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                                                        lineNumber: 652,
                                                        columnNumber: 53
                                                    }, this),
                                                    msg.phone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "flex items-center gap-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiPhone"], {
                                                                size: 12
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                                                                lineNumber: 657,
                                                                columnNumber: 61
                                                            }, this),
                                                            " ",
                                                            msg.phone
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                                                        lineNumber: 656,
                                                        columnNumber: 57
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                                                lineNumber: 651,
                                                columnNumber: 49
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                                        lineNumber: 647,
                                        columnNumber: 45
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                                    lineNumber: 641,
                                    columnNumber: 41
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                                lineNumber: 639,
                                columnNumber: 33
                            }, this)
                        ]
                    }, msg.id, true, {
                        fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                        lineNumber: 601,
                        columnNumber: 29
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                lineNumber: 597,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
        lineNumber: 583,
        columnNumber: 9
    }, this);
}
_s3(MessagesTab, "GVVde6h3Ukfo80wYqwF2kCJuPTk=");
_c4 = MessagesTab;
/* ═══ Clients ═══ */ function ClientsTab({ clients }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-2xl font-bold text-white",
                        children: "Clients"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                        lineNumber: 679,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-slate-400 text-sm mt-1",
                        children: [
                            clients.length,
                            " registered clients"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                        lineNumber: 680,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                lineNumber: 678,
                columnNumber: 13
            }, this),
            clients.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "glass rounded-xl p-12 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiUsers"], {
                        className: "mx-auto text-slate-600 mb-3",
                        size: 40
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                        lineNumber: 685,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-slate-400",
                        children: "No clients registered yet"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                        lineNumber: 686,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                lineNumber: 684,
                columnNumber: 17
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "glass rounded-xl overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                    className: "w-full text-sm",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                className: "border-b border-white/5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "text-left px-5 py-3 text-slate-400 text-xs font-medium",
                                        children: "Client"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                                        lineNumber: 693,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "text-left px-5 py-3 text-slate-400 text-xs font-medium",
                                        children: "Email"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                                        lineNumber: 694,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "text-left px-5 py-3 text-slate-400 text-xs font-medium",
                                        children: "Orders"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                                        lineNumber: 695,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "text-left px-5 py-3 text-slate-400 text-xs font-medium",
                                        children: "Joined"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                                        lineNumber: 696,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                                lineNumber: 692,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                            lineNumber: 691,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                            children: clients.map((client)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    className: "border-b border-white/[0.03] hover:bg-white/[0.02] transition-colors",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-5 py-3",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-8 h-8 rounded-full bg-gradient-to-br from-brand-500 to-accent-500 flex items-center justify-center text-white text-xs font-bold overflow-hidden",
                                                        children: client.image ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                            src: client.image,
                                                            alt: "",
                                                            className: "w-full h-full object-cover"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                                                            lineNumber: 706,
                                                            columnNumber: 53
                                                        }, this) : client.name.charAt(0).toUpperCase()
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                                                        lineNumber: 704,
                                                        columnNumber: 45
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-white font-medium",
                                                        children: client.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                                                        lineNumber: 711,
                                                        columnNumber: 45
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                                                lineNumber: 703,
                                                columnNumber: 41
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                                            lineNumber: 702,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-5 py-3 text-slate-400",
                                            children: client.email
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                                            lineNumber: 714,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-5 py-3 text-white font-semibold",
                                            children: client.ordersCount
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                                            lineNumber: 715,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-5 py-3 text-slate-500 text-xs",
                                            children: new Date(client.createdAt).toLocaleDateString("en-US", {
                                                month: "short",
                                                day: "numeric",
                                                year: "numeric"
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                                            lineNumber: 716,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, client.id, true, {
                                    fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                                    lineNumber: 701,
                                    columnNumber: 33
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                            lineNumber: 699,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                    lineNumber: 690,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
                lineNumber: 689,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/admin/AdminDashboardClient.tsx",
        lineNumber: 677,
        columnNumber: 9
    }, this);
}
_c5 = ClientsTab;
var _c, _c1, _c2, _c3, _c4, _c5;
__turbopack_context__.k.register(_c, "AdminDashboardClient");
__turbopack_context__.k.register(_c1, "OverviewTab");
__turbopack_context__.k.register(_c2, "OrdersTab");
__turbopack_context__.k.register(_c3, "ServicesTab");
__turbopack_context__.k.register(_c4, "MessagesTab");
__turbopack_context__.k.register(_c5, "ClientsTab");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_admin_AdminDashboardClient_tsx_0b10f8df._.js.map