(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/My_Projects/softcorp/src/components/Navbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$My_Projects$2f$softcorp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/My_Projects/softcorp/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_Projects$2f$softcorp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/My_Projects/softcorp/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_Projects$2f$softcorp$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/My_Projects/softcorp/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_Projects$2f$softcorp$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/My_Projects/softcorp/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_Projects$2f$softcorp$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/My_Projects/softcorp/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_Projects$2f$softcorp$2f$node_modules$2f$next$2d$auth$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/My_Projects/softcorp/node_modules/next-auth/react.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_Projects$2f$softcorp$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/My_Projects/softcorp/node_modules/react-icons/fi/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_Projects$2f$softcorp$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/My_Projects/softcorp/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_Projects$2f$softcorp$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/My_Projects/softcorp/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
const navLinks = [
    {
        name: "Home",
        href: "/#home"
    },
    {
        name: "AI Solutions",
        href: "/ai-solutions"
    },
    {
        name: "Services",
        href: "/#services"
    },
    {
        name: "About",
        href: "/#about"
    },
    {
        name: "Process",
        href: "/#process"
    },
    {
        name: "Contact",
        href: "/#contact"
    }
];
function Navbar() {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Projects$2f$softcorp$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const { data: session } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Projects$2f$softcorp$2f$node_modules$2f$next$2d$auth$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Projects$2f$softcorp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isScrolled, setIsScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Projects$2f$softcorp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Projects$2f$softcorp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            const handleScroll = {
                "Navbar.useEffect.handleScroll": ()=>setIsScrolled(window.scrollY > 50)
            }["Navbar.useEffect.handleScroll"];
            window.addEventListener("scroll", handleScroll);
            return ({
                "Navbar.useEffect": ()=>window.removeEventListener("scroll", handleScroll)
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], []);
    const dashboardHref = session?.user ? session.user.role === "admin" ? "/admin" : "/dashboard" : "/login";
    if (pathname?.startsWith("/studio")) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Projects$2f$softcorp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: `fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? "glass shadow-lg shadow-black/10 py-3" : "bg-transparent py-5"}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Projects$2f$softcorp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-6 lg:px-12 flex justify-between items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Projects$2f$softcorp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_Projects$2f$softcorp$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: "flex items-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Projects$2f$softcorp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_Projects$2f$softcorp$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: "/logo.png",
                            alt: "SoftCorp Group",
                            width: 256,
                            height: 256,
                            className: "h-20 lg:h-24 w-auto object-contain",
                            priority: true,
                            unoptimized: true
                        }, void 0, false, {
                            fileName: "[project]/My_Projects/softcorp/src/components/Navbar.tsx",
                            lineNumber: 50,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/My_Projects/softcorp/src/components/Navbar.tsx",
                        lineNumber: 49,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Projects$2f$softcorp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "hidden lg:flex items-center gap-8",
                        children: [
                            navLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Projects$2f$softcorp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: link.href,
                                    className: "text-sm font-medium text-slate-300 hover:text-white transition-colors relative group",
                                    children: [
                                        link.name,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Projects$2f$softcorp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "absolute -bottom-1 left-0 w-0 h-0.5 gradient-brand rounded-full transition-all duration-300 group-hover:w-full"
                                        }, void 0, false, {
                                            fileName: "[project]/My_Projects/softcorp/src/components/Navbar.tsx",
                                            lineNumber: 70,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, link.name, true, {
                                    fileName: "[project]/My_Projects/softcorp/src/components/Navbar.tsx",
                                    lineNumber: 64,
                                    columnNumber: 25
                                }, this)),
                            session?.user ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Projects$2f$softcorp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_Projects$2f$softcorp$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: dashboardHref,
                                className: "px-5 py-2.5 text-sm font-semibold text-white gradient-brand rounded-lg hover:opacity-90 transition-opacity shadow-lg shadow-brand-600/25 flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Projects$2f$softcorp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_Projects$2f$softcorp$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiUser"], {
                                        size: 14
                                    }, void 0, false, {
                                        fileName: "[project]/My_Projects/softcorp/src/components/Navbar.tsx",
                                        lineNumber: 79,
                                        columnNumber: 29
                                    }, this),
                                    "Dashboard"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/My_Projects/softcorp/src/components/Navbar.tsx",
                                lineNumber: 75,
                                columnNumber: 25
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Projects$2f$softcorp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_Projects$2f$softcorp$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/login",
                                className: "px-5 py-2.5 text-sm font-semibold text-white gradient-brand rounded-lg hover:opacity-90 transition-opacity shadow-lg shadow-brand-600/25",
                                children: "Get Started"
                            }, void 0, false, {
                                fileName: "[project]/My_Projects/softcorp/src/components/Navbar.tsx",
                                lineNumber: 83,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/My_Projects/softcorp/src/components/Navbar.tsx",
                        lineNumber: 62,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Projects$2f$softcorp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setIsOpen(!isOpen),
                        className: "lg:hidden text-white p-2",
                        "aria-label": "Toggle Menu",
                        children: isOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Projects$2f$softcorp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_Projects$2f$softcorp$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiX"], {
                            size: 24
                        }, void 0, false, {
                            fileName: "[project]/My_Projects/softcorp/src/components/Navbar.tsx",
                            lineNumber: 98,
                            columnNumber: 31
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Projects$2f$softcorp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_Projects$2f$softcorp$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiMenu"], {
                            size: 24
                        }, void 0, false, {
                            fileName: "[project]/My_Projects/softcorp/src/components/Navbar.tsx",
                            lineNumber: 98,
                            columnNumber: 51
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/My_Projects/softcorp/src/components/Navbar.tsx",
                        lineNumber: 93,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/My_Projects/softcorp/src/components/Navbar.tsx",
                lineNumber: 47,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Projects$2f$softcorp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_Projects$2f$softcorp$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Projects$2f$softcorp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_Projects$2f$softcorp$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        height: 0
                    },
                    animate: {
                        opacity: 1,
                        height: "auto"
                    },
                    exit: {
                        opacity: 0,
                        height: 0
                    },
                    className: "lg:hidden glass border-t border-white/5",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Projects$2f$softcorp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "flex flex-col items-center py-6 gap-4",
                        children: [
                            navLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Projects$2f$softcorp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: link.href,
                                    onClick: ()=>setIsOpen(false),
                                    className: "text-lg text-slate-300 hover:text-white transition-colors",
                                    children: link.name
                                }, link.name, false, {
                                    fileName: "[project]/My_Projects/softcorp/src/components/Navbar.tsx",
                                    lineNumber: 113,
                                    columnNumber: 33
                                }, this)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Projects$2f$softcorp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_Projects$2f$softcorp$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: session?.user ? dashboardHref : "/login",
                                onClick: ()=>setIsOpen(false),
                                className: "mt-2 px-6 py-3 text-white gradient-brand rounded-lg font-semibold",
                                children: session?.user ? "Dashboard" : "Get Started"
                            }, void 0, false, {
                                fileName: "[project]/My_Projects/softcorp/src/components/Navbar.tsx",
                                lineNumber: 122,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/My_Projects/softcorp/src/components/Navbar.tsx",
                        lineNumber: 111,
                        columnNumber: 25
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/My_Projects/softcorp/src/components/Navbar.tsx",
                    lineNumber: 105,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/My_Projects/softcorp/src/components/Navbar.tsx",
                lineNumber: 103,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/My_Projects/softcorp/src/components/Navbar.tsx",
        lineNumber: 41,
        columnNumber: 9
    }, this);
}
_s(Navbar, "WSqjaFmo5xVkr4c+vpdtZazWFbQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$My_Projects$2f$softcorp$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$My_Projects$2f$softcorp$2f$node_modules$2f$next$2d$auth$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"]
    ];
});
_c = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/My_Projects/softcorp/src/components/Footer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$My_Projects$2f$softcorp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/My_Projects/softcorp/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_Projects$2f$softcorp$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/My_Projects/softcorp/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_Projects$2f$softcorp$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/My_Projects/softcorp/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_Projects$2f$softcorp$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/My_Projects/softcorp/node_modules/react-icons/fi/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_Projects$2f$softcorp$2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/My_Projects/softcorp/node_modules/react-icons/fa6/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const socialLinks = [
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$My_Projects$2f$softcorp$2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaLinkedinIn"],
        href: "https://www.linkedin.com/in/rajeevrockstar/",
        label: "LinkedIn"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$My_Projects$2f$softcorp$2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaXTwitter"],
        href: "https://x.com/rajeevrockstar",
        label: "X"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$My_Projects$2f$softcorp$2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaYoutube"],
        href: "https://www.youtube.com/@RajeevRockstar",
        label: "YouTube"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$My_Projects$2f$softcorp$2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaInstagram"],
        href: "https://www.instagram.com/rockstar_rajeevupadhyay/",
        label: "Instagram"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$My_Projects$2f$softcorp$2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaFacebookF"],
        href: "https://www.facebook.com/rajeevrohitupadhyay",
        label: "Facebook"
    }
];
const quickLinks = [
    {
        name: "Home",
        href: "#home"
    },
    {
        name: "Services",
        href: "#services"
    },
    {
        name: "About",
        href: "#about"
    },
    {
        name: "Process",
        href: "#process"
    },
    {
        name: "Contact",
        href: "#contact"
    }
];
function Footer() {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Projects$2f$softcorp$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    if (pathname?.startsWith("/studio")) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Projects$2f$softcorp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "bg-surface-950 border-t border-white/5",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Projects$2f$softcorp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-6 lg:px-12 py-16",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Projects$2f$softcorp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid md:grid-cols-2 lg:grid-cols-4 gap-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Projects$2f$softcorp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:col-span-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Projects$2f$softcorp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-6",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Projects$2f$softcorp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_Projects$2f$softcorp$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/logo.png",
                                        alt: "SoftCorp Group",
                                        width: 256,
                                        height: 256,
                                        className: "h-24 lg:h-32 w-auto object-contain",
                                        unoptimized: true
                                    }, void 0, false, {
                                        fileName: "[project]/My_Projects/softcorp/src/components/Footer.tsx",
                                        lineNumber: 41,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/My_Projects/softcorp/src/components/Footer.tsx",
                                    lineNumber: 40,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Projects$2f$softcorp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-slate-400 max-w-md leading-relaxed mb-6",
                                    children: "Enterprise-grade IT infrastructure, cloud solutions, and AI modernization for scaling businesses. Led by Rajeev Upadhyay."
                                }, void 0, false, {
                                    fileName: "[project]/My_Projects/softcorp/src/components/Footer.tsx",
                                    lineNumber: 50,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Projects$2f$softcorp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-slate-500 text-sm mb-6 italic",
                                    children: "Global Availability: Serving Europe, UAE, Australia, and New Zealand."
                                }, void 0, false, {
                                    fileName: "[project]/My_Projects/softcorp/src/components/Footer.tsx",
                                    lineNumber: 54,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Projects$2f$softcorp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-3",
                                    children: socialLinks.map((social)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Projects$2f$softcorp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: social.href,
                                            "aria-label": social.label,
                                            className: "w-10 h-10 flex items-center justify-center rounded-lg glass-light text-slate-400 hover:text-white hover:bg-brand-600/20 transition-all",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Projects$2f$softcorp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(social.icon, {
                                                size: 16
                                            }, void 0, false, {
                                                fileName: "[project]/My_Projects/softcorp/src/components/Footer.tsx",
                                                lineNumber: 65,
                                                columnNumber: 37
                                            }, this)
                                        }, social.label, false, {
                                            fileName: "[project]/My_Projects/softcorp/src/components/Footer.tsx",
                                            lineNumber: 59,
                                            columnNumber: 33
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/My_Projects/softcorp/src/components/Footer.tsx",
                                    lineNumber: 57,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/My_Projects/softcorp/src/components/Footer.tsx",
                            lineNumber: 39,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Projects$2f$softcorp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Projects$2f$softcorp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-white font-semibold mb-4 text-sm uppercase tracking-wider",
                                    children: "Quick Links"
                                }, void 0, false, {
                                    fileName: "[project]/My_Projects/softcorp/src/components/Footer.tsx",
                                    lineNumber: 73,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Projects$2f$softcorp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-3",
                                    children: quickLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Projects$2f$softcorp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Projects$2f$softcorp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: link.href,
                                                className: "text-slate-400 hover:text-brand-400 transition-colors text-sm",
                                                children: link.name
                                            }, void 0, false, {
                                                fileName: "[project]/My_Projects/softcorp/src/components/Footer.tsx",
                                                lineNumber: 79,
                                                columnNumber: 37
                                            }, this)
                                        }, link.name, false, {
                                            fileName: "[project]/My_Projects/softcorp/src/components/Footer.tsx",
                                            lineNumber: 78,
                                            columnNumber: 33
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/My_Projects/softcorp/src/components/Footer.tsx",
                                    lineNumber: 76,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/My_Projects/softcorp/src/components/Footer.tsx",
                            lineNumber: 72,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Projects$2f$softcorp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Projects$2f$softcorp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-white font-semibold mb-4 text-sm uppercase tracking-wider",
                                    children: "Contact"
                                }, void 0, false, {
                                    fileName: "[project]/My_Projects/softcorp/src/components/Footer.tsx",
                                    lineNumber: 92,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Projects$2f$softcorp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Projects$2f$softcorp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "flex items-start gap-3 text-sm text-slate-400",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Projects$2f$softcorp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_Projects$2f$softcorp$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiMail"], {
                                                    className: "mt-0.5 text-brand-400 shrink-0",
                                                    size: 16
                                                }, void 0, false, {
                                                    fileName: "[project]/My_Projects/softcorp/src/components/Footer.tsx",
                                                    lineNumber: 97,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Projects$2f$softcorp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "support@wesoftcorp.com"
                                                }, void 0, false, {
                                                    fileName: "[project]/My_Projects/softcorp/src/components/Footer.tsx",
                                                    lineNumber: 98,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/My_Projects/softcorp/src/components/Footer.tsx",
                                            lineNumber: 96,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Projects$2f$softcorp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "flex items-start gap-3 text-sm text-slate-400",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Projects$2f$softcorp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_Projects$2f$softcorp$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiPhone"], {
                                                    className: "mt-0.5 text-brand-400 shrink-0",
                                                    size: 16
                                                }, void 0, false, {
                                                    fileName: "[project]/My_Projects/softcorp/src/components/Footer.tsx",
                                                    lineNumber: 101,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Projects$2f$softcorp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "+1 9292664560 US"
                                                }, void 0, false, {
                                                    fileName: "[project]/My_Projects/softcorp/src/components/Footer.tsx",
                                                    lineNumber: 102,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/My_Projects/softcorp/src/components/Footer.tsx",
                                            lineNumber: 100,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Projects$2f$softcorp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "flex items-start gap-3 text-sm text-slate-400",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Projects$2f$softcorp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_Projects$2f$softcorp$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiMapPin"], {
                                                    className: "mt-0.5 text-brand-400 shrink-0",
                                                    size: 16
                                                }, void 0, false, {
                                                    fileName: "[project]/My_Projects/softcorp/src/components/Footer.tsx",
                                                    lineNumber: 105,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Projects$2f$softcorp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "United States"
                                                }, void 0, false, {
                                                    fileName: "[project]/My_Projects/softcorp/src/components/Footer.tsx",
                                                    lineNumber: 106,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/My_Projects/softcorp/src/components/Footer.tsx",
                                            lineNumber: 104,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/My_Projects/softcorp/src/components/Footer.tsx",
                                    lineNumber: 95,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/My_Projects/softcorp/src/components/Footer.tsx",
                            lineNumber: 91,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/My_Projects/softcorp/src/components/Footer.tsx",
                    lineNumber: 37,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Projects$2f$softcorp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Projects$2f$softcorp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-slate-500 text-sm",
                            children: [
                                "© ",
                                new Date().getFullYear(),
                                " Softcorp Group LLC. All rights reserved."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/My_Projects/softcorp/src/components/Footer.tsx",
                            lineNumber: 114,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Projects$2f$softcorp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-6 text-sm text-slate-500",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Projects$2f$softcorp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#",
                                    className: "hover:text-slate-300 transition-colors",
                                    children: "Privacy Policy"
                                }, void 0, false, {
                                    fileName: "[project]/My_Projects/softcorp/src/components/Footer.tsx",
                                    lineNumber: 119,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Projects$2f$softcorp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#",
                                    className: "hover:text-slate-300 transition-colors",
                                    children: "Terms of Service"
                                }, void 0, false, {
                                    fileName: "[project]/My_Projects/softcorp/src/components/Footer.tsx",
                                    lineNumber: 122,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/My_Projects/softcorp/src/components/Footer.tsx",
                            lineNumber: 118,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/My_Projects/softcorp/src/components/Footer.tsx",
                    lineNumber: 113,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/My_Projects/softcorp/src/components/Footer.tsx",
            lineNumber: 36,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/My_Projects/softcorp/src/components/Footer.tsx",
        lineNumber: 35,
        columnNumber: 9
    }, this);
}
_s(Footer, "xbyQPtUVMO7MNj7WjJlpdWqRcTo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$My_Projects$2f$softcorp$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/My_Projects/softcorp/src/components/Providers.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Providers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$My_Projects$2f$softcorp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/My_Projects/softcorp/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_Projects$2f$softcorp$2f$node_modules$2f$next$2d$auth$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/My_Projects/softcorp/node_modules/next-auth/react.js [app-client] (ecmascript)");
"use client";
;
;
function Providers({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Projects$2f$softcorp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_Projects$2f$softcorp$2f$node_modules$2f$next$2d$auth$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SessionProvider"], {
        children: children
    }, void 0, false, {
        fileName: "[project]/My_Projects/softcorp/src/components/Providers.tsx",
        lineNumber: 6,
        columnNumber: 12
    }, this);
}
_c = Providers;
var _c;
__turbopack_context__.k.register(_c, "Providers");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=My_Projects_softcorp_src_components_4c51d282._.js.map