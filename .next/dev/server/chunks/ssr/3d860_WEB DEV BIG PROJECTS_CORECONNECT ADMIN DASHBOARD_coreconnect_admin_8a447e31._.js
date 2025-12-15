module.exports = [
"[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/lib/utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}),
"[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/ui/button.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: 'bg-primary text-primary-foreground hover:bg-primary/90',
            destructive: 'bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
            outline: 'border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
            secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
            ghost: 'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
            link: 'text-primary underline-offset-4 hover:underline'
        },
        size: {
            default: 'h-9 px-4 py-2 has-[>svg]:px-3',
            sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
            lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
            icon: 'size-9',
            'icon-sm': 'size-8',
            'icon-lg': 'size-10'
        }
    },
    defaultVariants: {
        variant: 'default',
        size: 'default'
    }
});
function Button({ className, variant, size, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : 'button';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/ui/button.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/logo.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Logo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function Logo() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-white font-bold text-lg",
                    children: "CC"
                }, void 0, false, {
                    fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/logo.tsx",
                    lineNumber: 5,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/logo.tsx",
                lineNumber: 4,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "font-bold text-lg text-white",
                children: "CoreConnect"
            }, void 0, false, {
                fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/logo.tsx",
                lineNumber: 7,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/logo.tsx",
        lineNumber: 3,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/sidebar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Sidebar",
    ()=>Sidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/node_modules/lucide-react/dist/esm/icons/users.js [app-ssr] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/node_modules/lucide-react/dist/esm/icons/settings.js [app-ssr] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/node_modules/lucide-react/dist/esm/icons/download.js [app-ssr] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-ssr] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__ = __turbopack_context__.i("[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/node_modules/lucide-react/dist/esm/icons/layout-dashboard.js [app-ssr] (ecmascript) <export default as LayoutDashboard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$components$2f$logo$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/logo.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
function Sidebar() {
    const [expandedMenu, setExpandedMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const toggleMenu = (menu)=>{
        setExpandedMenu(expandedMenu === menu ? null : menu);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
        className: "w-64 bg-sidebar border-r border-sidebar-border h-screen flex flex-col overflow-y-auto sticky top-0",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-6 border-b border-sidebar-border",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$components$2f$logo$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/sidebar.tsx",
                    lineNumber: 18,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/sidebar.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "flex-1 p-4 space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "ghost",
                        className: "w-full justify-start gap-3 text-white hover:bg-sidebar-accent",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__["LayoutDashboard"], {
                                className: "w-5 h-5 text-white"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/sidebar.tsx",
                                lineNumber: 26,
                                columnNumber: 11
                            }, this),
                            "Dashboard"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/sidebar.tsx",
                        lineNumber: 22,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>toggleMenu('users'),
                                className: "w-full flex items-center justify-between px-4 py-2 text-white hover:bg-sidebar-accent rounded-md transition-colors",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                className: "w-5 h-5 text-white"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/sidebar.tsx",
                                                lineNumber: 36,
                                                columnNumber: 15
                                            }, this),
                                            "Users"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/sidebar.tsx",
                                        lineNumber: 35,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                        className: `w-4 h-4 text-white transition-transform ${expandedMenu === 'users' ? 'rotate-180' : ''}`
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/sidebar.tsx",
                                        lineNumber: 39,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/sidebar.tsx",
                                lineNumber: 31,
                                columnNumber: 11
                            }, this),
                            expandedMenu === 'users' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "ml-8 space-y-1 mt-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "ghost",
                                        className: "w-full justify-start text-sm text-white hover:bg-sidebar-accent",
                                        asChild: true,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Add New"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/sidebar.tsx",
                                            lineNumber: 48,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/sidebar.tsx",
                                        lineNumber: 47,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "ghost",
                                        className: "w-full justify-start text-sm text-white hover:bg-sidebar-accent",
                                        asChild: true,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Users List"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/sidebar.tsx",
                                            lineNumber: 51,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/sidebar.tsx",
                                        lineNumber: 50,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "ghost",
                                        className: "w-full justify-start text-sm text-white hover:bg-sidebar-accent",
                                        asChild: true,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Roles"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/sidebar.tsx",
                                            lineNumber: 54,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/sidebar.tsx",
                                        lineNumber: 53,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "ghost",
                                        className: "w-full justify-start text-sm text-white hover:bg-sidebar-accent",
                                        asChild: true,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "User Logs"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/sidebar.tsx",
                                            lineNumber: 57,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/sidebar.tsx",
                                        lineNumber: 56,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/sidebar.tsx",
                                lineNumber: 46,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/sidebar.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>toggleMenu('fields'),
                                className: "w-full flex items-center justify-between px-4 py-2 text-white hover:bg-sidebar-accent rounded-md transition-colors",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                                                className: "w-5 h-5 text-white"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/sidebar.tsx",
                                                lineNumber: 69,
                                                columnNumber: 15
                                            }, this),
                                            "Custom Fields"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/sidebar.tsx",
                                        lineNumber: 68,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                        className: `w-4 h-4 text-white transition-transform ${expandedMenu === 'fields' ? 'rotate-180' : ''}`
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/sidebar.tsx",
                                        lineNumber: 72,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/sidebar.tsx",
                                lineNumber: 64,
                                columnNumber: 11
                            }, this),
                            expandedMenu === 'fields' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "ml-8 space-y-1 mt-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "ghost",
                                        className: "w-full justify-start text-sm text-white hover:bg-sidebar-accent",
                                        asChild: true,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Add New"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/sidebar.tsx",
                                            lineNumber: 81,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/sidebar.tsx",
                                        lineNumber: 80,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "ghost",
                                        className: "w-full justify-start text-sm text-white hover:bg-sidebar-accent",
                                        asChild: true,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Field List"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/sidebar.tsx",
                                            lineNumber: 84,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/sidebar.tsx",
                                        lineNumber: 83,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "ghost",
                                        className: "w-full justify-start text-sm text-white hover:bg-sidebar-accent",
                                        asChild: true,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Position"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/sidebar.tsx",
                                            lineNumber: 87,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/sidebar.tsx",
                                        lineNumber: 86,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/sidebar.tsx",
                                lineNumber: 79,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/sidebar.tsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>toggleMenu('wizard'),
                                className: "w-full flex items-center justify-between px-4 py-2 text-white hover:bg-sidebar-accent rounded-md transition-colors",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                                className: "w-5 h-5 text-white"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/sidebar.tsx",
                                                lineNumber: 99,
                                                columnNumber: 15
                                            }, this),
                                            "Import Wizard"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/sidebar.tsx",
                                        lineNumber: 98,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                        className: `w-4 h-4 text-white transition-transform ${expandedMenu === 'wizard' ? 'rotate-180' : ''}`
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/sidebar.tsx",
                                        lineNumber: 102,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/sidebar.tsx",
                                lineNumber: 94,
                                columnNumber: 11
                            }, this),
                            expandedMenu === 'wizard' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "ml-8 space-y-1 mt-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "ghost",
                                        className: "w-full justify-start text-sm text-white hover:bg-sidebar-accent",
                                        asChild: true,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Add New"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/sidebar.tsx",
                                            lineNumber: 111,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/sidebar.tsx",
                                        lineNumber: 110,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "ghost",
                                        className: "w-full justify-start text-sm text-white hover:bg-sidebar-accent",
                                        asChild: true,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Get Import Format"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/sidebar.tsx",
                                            lineNumber: 114,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/sidebar.tsx",
                                        lineNumber: 113,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "ghost",
                                        className: "w-full justify-start text-sm text-white hover:bg-sidebar-accent",
                                        asChild: true,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Companies Ids"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/sidebar.tsx",
                                            lineNumber: 117,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/sidebar.tsx",
                                        lineNumber: 116,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/sidebar.tsx",
                                lineNumber: 109,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/sidebar.tsx",
                        lineNumber: 93,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/sidebar.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 border-t border-sidebar-border",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                    variant: "ghost",
                    className: "w-full justify-start gap-3 text-white hover:bg-sidebar-accent",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                            className: "w-5 h-5 text-white"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/sidebar.tsx",
                            lineNumber: 126,
                            columnNumber: 11
                        }, this),
                        "Go Back"
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/sidebar.tsx",
                    lineNumber: 125,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/sidebar.tsx",
                lineNumber: 124,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/sidebar.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/ui/card.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card,
    "CardAction",
    ()=>CardAction,
    "CardContent",
    ()=>CardContent,
    "CardDescription",
    ()=>CardDescription,
    "CardFooter",
    ()=>CardFooter,
    "CardHeader",
    ()=>CardHeader,
    "CardTitle",
    ()=>CardTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/lib/utils.ts [app-ssr] (ecmascript)");
;
;
function Card({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/ui/card.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
function CardHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/ui/card.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
function CardTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('leading-none font-semibold', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/ui/card.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
function CardDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('text-muted-foreground text-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/ui/card.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
function CardAction({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-action",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('col-start-2 row-span-2 row-start-1 self-start justify-self-end', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/ui/card.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
function CardContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('px-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/ui/card.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
function CardFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('flex items-center px-6 [.border-t]:pt-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/ui/card.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/stat-cards.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StatCards",
    ()=>StatCards
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/ui/card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/node_modules/lucide-react/dist/esm/icons/users.js [app-ssr] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/node_modules/lucide-react/dist/esm/icons/shield.js [app-ssr] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__ = __turbopack_context__.i("[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/node_modules/lucide-react/dist/esm/icons/building-2.js [app-ssr] (ecmascript) <export default as Building2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$contact$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Contact$3e$__ = __turbopack_context__.i("[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/node_modules/lucide-react/dist/esm/icons/contact.js [app-ssr] (ecmascript) <export default as Contact>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$kanban$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderKanban$3e$__ = __turbopack_context__.i("[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/node_modules/lucide-react/dist/esm/icons/folder-kanban.js [app-ssr] (ecmascript) <export default as FolderKanban>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__ = __turbopack_context__.i("[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/node_modules/lucide-react/dist/esm/icons/cpu.js [app-ssr] (ecmascript) <export default as Cpu>");
'use client';
;
;
;
const mockData = {
    totalUsers: [
        {
            id: 1,
            name: 'Ahmed Ali',
            email: 'ahmed.ali@coreconnect.com',
            status: 'Active'
        },
        {
            id: 2,
            name: 'Fatima Khan',
            email: 'fatima.khan@coreconnect.com',
            status: 'Active'
        },
        {
            id: 3,
            name: 'Hassan Malik',
            email: 'hassan.malik@coreconnect.com',
            status: 'Active'
        },
        {
            id: 4,
            name: 'Ayesha Sheikh',
            email: 'ayesha.sheikh@coreconnect.com',
            status: 'Inactive'
        },
        {
            id: 5,
            name: 'Bilal Ahmed',
            email: 'bilal.ahmed@coreconnect.com',
            status: 'Active'
        },
        {
            id: 6,
            name: 'Zainab Raza',
            email: 'zainab.raza@coreconnect.com',
            status: 'Active'
        },
        {
            id: 7,
            name: 'Usman Iqbal',
            email: 'usman.iqbal@coreconnect.com',
            status: 'Inactive'
        },
        {
            id: 8,
            name: 'Sana Mirza',
            email: 'sana.mirza@coreconnect.com',
            status: 'Active'
        },
        {
            id: 9,
            name: 'Omar Butt',
            email: 'omar.butt@coreconnect.com',
            status: 'Active'
        },
        {
            id: 10,
            name: 'Hira Abbas',
            email: 'hira.abbas@coreconnect.com',
            status: 'Active'
        },
        {
            id: 11,
            name: 'Tariq Hussain',
            email: 'tariq.hussain@coreconnect.com',
            status: 'Active'
        },
        {
            id: 12,
            name: 'Amina Khan',
            email: 'amina.khan@coreconnect.com',
            status: 'Active'
        },
        {
            id: 13,
            name: 'Faisal Sheikh',
            email: 'faisal.sheikh@coreconnect.com',
            status: 'Inactive'
        },
        {
            id: 14,
            name: 'Sara Ali',
            email: 'sara.ali@coreconnect.com',
            status: 'Inactive'
        },
        {
            id: 15,
            name: 'Hamza Malik',
            email: 'hamza.malik@coreconnect.com',
            status: 'Inactive'
        }
    ],
    admins: [
        {
            id: 1,
            name: 'Ahmed Ali',
            email: 'ahmed.ali@coreconnect.com'
        },
        {
            id: 6,
            name: 'Zainab Raza',
            email: 'zainab.raza@coreconnect.com'
        },
        {
            id: 16,
            name: 'Khalid Butt',
            email: 'khalid.butt@coreconnect.com'
        },
        {
            id: 17,
            name: 'Nida Iqbal',
            email: 'nida.iqbal@coreconnect.com'
        }
    ],
    companies: [
        {
            id: 1,
            name: 'Tech Solutions Pakistan'
        },
        {
            id: 2,
            name: 'Digital Innovations Ltd'
        },
        {
            id: 3,
            name: 'PakSoft Technologies'
        },
        {
            id: 4,
            name: 'CloudConnect Systems'
        },
        {
            id: 5,
            name: 'DataFlow Solutions'
        },
        {
            id: 6,
            name: 'CodeCraft Pakistan'
        },
        {
            id: 7,
            name: 'InnovateHub Karachi'
        },
        {
            id: 8,
            name: 'SwiftDev Lahore'
        },
        {
            id: 9,
            name: 'ByteBuild Islamabad'
        },
        {
            id: 10,
            name: 'WebWorks Pakistan'
        },
        {
            id: 11,
            name: 'AppSphere Solutions'
        },
        {
            id: 12,
            name: 'DevOps Pakistan'
        },
        {
            id: 13,
            name: 'CyberTech Solutions'
        },
        {
            id: 14,
            name: 'SmartCode Systems'
        },
        {
            id: 15,
            name: 'FutureTech Pakistan'
        }
    ],
    contacts: [
        {
            id: 1,
            name: 'Ahmed Hassan',
            email: 'ahmed.hassan@email.com'
        },
        {
            id: 2,
            name: 'Fatima Ali',
            email: 'fatima.ali@email.com'
        },
        {
            id: 3,
            name: 'Hassan Malik',
            email: 'hassan.malik@email.com'
        },
        {
            id: 4,
            name: 'Ayesha Khan',
            email: 'ayesha.khan@email.com'
        },
        {
            id: 5,
            name: 'Bilal Ahmed',
            email: 'bilal.ahmed@email.com'
        },
        {
            id: 6,
            name: 'Zainab Sheikh',
            email: 'zainab.sheikh@email.com'
        },
        {
            id: 7,
            name: 'Usman Raza',
            email: 'usman.raza@email.com'
        },
        {
            id: 8,
            name: 'Sana Iqbal',
            email: 'sana.iqbal@email.com'
        },
        {
            id: 9,
            name: 'Omar Butt',
            email: 'omar.butt@email.com'
        },
        {
            id: 10,
            name: 'Hira Abbas',
            email: 'hira.abbas@email.com'
        },
        {
            id: 11,
            name: 'Tariq Hussain',
            email: 'tariq.hussain@email.com'
        },
        {
            id: 12,
            name: 'Amina Khan',
            email: 'amina.khan@email.com'
        },
        {
            id: 13,
            name: 'Faisal Sheikh',
            email: 'faisal.sheikh@email.com'
        },
        {
            id: 14,
            name: 'Sara Ali',
            email: 'sara.ali@email.com'
        },
        {
            id: 15,
            name: 'Hamza Malik',
            email: 'hamza.malik@email.com'
        }
    ],
    projects: [
        {
            id: 1,
            name: 'E-Commerce Platform'
        },
        {
            id: 2,
            name: 'Healthcare Management System'
        },
        {
            id: 3,
            name: 'School Management Portal'
        },
        {
            id: 4,
            name: 'Banking Application'
        },
        {
            id: 5,
            name: 'Real Estate Portal'
        },
        {
            id: 6,
            name: 'Food Delivery App'
        },
        {
            id: 7,
            name: 'Inventory Management'
        },
        {
            id: 8,
            name: 'CRM System'
        },
        {
            id: 9,
            name: 'HR Management System'
        },
        {
            id: 10,
            name: 'E-Learning Platform'
        },
        {
            id: 11,
            name: 'Social Media App'
        },
        {
            id: 12,
            name: 'Fitness Tracker'
        },
        {
            id: 13,
            name: 'Weather App'
        },
        {
            id: 14,
            name: 'News Aggregator'
        },
        {
            id: 15,
            name: 'Task Management Tool'
        }
    ],
    technologies: [
        {
            id: 1,
            name: 'React'
        },
        {
            id: 2,
            name: 'Node.js'
        },
        {
            id: 3,
            name: 'Python'
        },
        {
            id: 4,
            name: 'JavaScript'
        },
        {
            id: 5,
            name: 'TypeScript'
        },
        {
            id: 6,
            name: 'Next.js'
        },
        {
            id: 7,
            name: 'MongoDB'
        },
        {
            id: 8,
            name: 'PostgreSQL'
        },
        {
            id: 9,
            name: 'Docker'
        },
        {
            id: 10,
            name: 'Kubernetes'
        },
        {
            id: 11,
            name: 'AWS'
        },
        {
            id: 12,
            name: 'Azure'
        },
        {
            id: 13,
            name: 'GraphQL'
        },
        {
            id: 14,
            name: 'Redis'
        },
        {
            id: 15,
            name: 'Elasticsearch'
        }
    ]
};
function StatCards({ onCardClick }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-wrap gap-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                className: "bg-gradient-to-br from-purple-500 to-purple-600 text-white p-4 cursor-pointer hover:shadow-lg transition-all hover:scale-105 border-0 flex-1 min-w-[150px]",
                onClick: ()=>onCardClick('Total Users', mockData.totalUsers),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between mb-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-purple-100 text-xs mb-1",
                                        children: "Total Users"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/stat-cards.tsx",
                                        lineNumber: 110,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-2xl font-bold",
                                        children: mockData.totalUsers.length
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/stat-cards.tsx",
                                        lineNumber: 111,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/stat-cards.tsx",
                                lineNumber: 109,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white/20 p-2 rounded-lg",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/stat-cards.tsx",
                                    lineNumber: 114,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/stat-cards.tsx",
                                lineNumber: 113,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/stat-cards.tsx",
                        lineNumber: 108,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-purple-100 text-xs",
                        children: "Name, Email, Status"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/stat-cards.tsx",
                        lineNumber: 117,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/stat-cards.tsx",
                lineNumber: 104,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                className: "bg-gradient-to-br from-blue-500 to-blue-600 text-white p-4 cursor-pointer hover:shadow-lg transition-all hover:scale-105 border-0 flex-1 min-w-[150px]",
                onClick: ()=>onCardClick('Admins', mockData.admins),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between mb-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-blue-100 text-xs mb-1",
                                        children: "Admins"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/stat-cards.tsx",
                                        lineNumber: 127,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-2xl font-bold",
                                        children: mockData.admins.length
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/stat-cards.tsx",
                                        lineNumber: 128,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/stat-cards.tsx",
                                lineNumber: 126,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white/20 p-2 rounded-lg",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"], {
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/stat-cards.tsx",
                                    lineNumber: 131,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/stat-cards.tsx",
                                lineNumber: 130,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/stat-cards.tsx",
                        lineNumber: 125,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-blue-100 text-xs",
                        children: "Admin Name, Email"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/stat-cards.tsx",
                        lineNumber: 134,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/stat-cards.tsx",
                lineNumber: 121,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                className: "bg-gradient-to-br from-green-500 to-green-600 text-white p-4 cursor-pointer hover:shadow-lg transition-all hover:scale-105 border-0 flex-1 min-w-[150px]",
                onClick: ()=>onCardClick('Companies', mockData.companies),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between mb-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-green-100 text-xs mb-1",
                                        children: "Companies"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/stat-cards.tsx",
                                        lineNumber: 144,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-2xl font-bold",
                                        children: mockData.companies.length
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/stat-cards.tsx",
                                        lineNumber: 145,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/stat-cards.tsx",
                                lineNumber: 143,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white/20 p-2 rounded-lg",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"], {
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/stat-cards.tsx",
                                    lineNumber: 148,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/stat-cards.tsx",
                                lineNumber: 147,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/stat-cards.tsx",
                        lineNumber: 142,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-green-100 text-xs",
                        children: "Total companies"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/stat-cards.tsx",
                        lineNumber: 151,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/stat-cards.tsx",
                lineNumber: 138,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                className: "bg-gradient-to-br from-orange-500 to-orange-600 text-white p-4 cursor-pointer hover:shadow-lg transition-all hover:scale-105 border-0 flex-1 min-w-[150px]",
                onClick: ()=>onCardClick('Contacts', mockData.contacts),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between mb-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-orange-100 text-xs mb-1",
                                        children: "Contacts"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/stat-cards.tsx",
                                        lineNumber: 161,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-2xl font-bold",
                                        children: mockData.contacts.length
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/stat-cards.tsx",
                                        lineNumber: 162,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/stat-cards.tsx",
                                lineNumber: 160,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white/20 p-2 rounded-lg",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$contact$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Contact$3e$__["Contact"], {
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/stat-cards.tsx",
                                    lineNumber: 165,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/stat-cards.tsx",
                                lineNumber: 164,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/stat-cards.tsx",
                        lineNumber: 159,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-orange-100 text-xs",
                        children: "Total contacts"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/stat-cards.tsx",
                        lineNumber: 168,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/stat-cards.tsx",
                lineNumber: 155,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                className: "bg-gradient-to-br from-pink-500 to-pink-600 text-white p-4 cursor-pointer hover:shadow-lg transition-all hover:scale-105 border-0 flex-1 min-w-[150px]",
                onClick: ()=>onCardClick('Projects', mockData.projects),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between mb-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-pink-100 text-xs mb-1",
                                        children: "Projects"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/stat-cards.tsx",
                                        lineNumber: 178,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-2xl font-bold",
                                        children: mockData.projects.length
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/stat-cards.tsx",
                                        lineNumber: 179,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/stat-cards.tsx",
                                lineNumber: 177,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white/20 p-2 rounded-lg",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$kanban$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderKanban$3e$__["FolderKanban"], {
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/stat-cards.tsx",
                                    lineNumber: 182,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/stat-cards.tsx",
                                lineNumber: 181,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/stat-cards.tsx",
                        lineNumber: 176,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-pink-100 text-xs",
                        children: "Total projects"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/stat-cards.tsx",
                        lineNumber: 185,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/stat-cards.tsx",
                lineNumber: 172,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                className: "bg-gradient-to-br from-indigo-500 to-indigo-600 text-white p-4 cursor-pointer hover:shadow-lg transition-all hover:scale-105 border-0 flex-1 min-w-[150px]",
                onClick: ()=>onCardClick('Technologies', mockData.technologies),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between mb-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-indigo-100 text-xs mb-1",
                                        children: "Technologies"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/stat-cards.tsx",
                                        lineNumber: 195,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-2xl font-bold",
                                        children: mockData.technologies.length
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/stat-cards.tsx",
                                        lineNumber: 196,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/stat-cards.tsx",
                                lineNumber: 194,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white/20 p-2 rounded-lg",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__["Cpu"], {
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/stat-cards.tsx",
                                    lineNumber: 199,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/stat-cards.tsx",
                                lineNumber: 198,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/stat-cards.tsx",
                        lineNumber: 193,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-indigo-100 text-xs",
                        children: "Total technologies"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/stat-cards.tsx",
                        lineNumber: 202,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/stat-cards.tsx",
                lineNumber: 189,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/stat-cards.tsx",
        lineNumber: 102,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/ui/badge.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Badge",
    ()=>Badge,
    "badgeVariants",
    ()=>badgeVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
const badgeVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])('inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden', {
    variants: {
        variant: {
            default: 'border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90',
            secondary: 'border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90',
            destructive: 'border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
            outline: 'text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground'
        }
    },
    defaultVariants: {
        variant: 'default'
    }
});
function Badge({ className, variant, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : 'span';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "badge",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(badgeVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/ui/badge.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/recent-activity.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RecentActivity",
    ()=>RecentActivity
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/ui/card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/ui/badge.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/node_modules/lucide-react/dist/esm/icons/calendar.js [app-ssr] (ecmascript) <export default as Calendar>");
'use client';
;
;
;
;
const mockActivity = [
    {
        id: 1,
        user: 'John Doe',
        action: 'Updated',
        item: 'admin dashboard',
        time: '20 Nov 2025',
        timestamp: '12:24am'
    },
    {
        id: 2,
        user: 'Jane Smith',
        action: 'Created',
        item: 'new company',
        time: '20 Nov 2025',
        timestamp: '11:45am'
    },
    {
        id: 3,
        user: 'Mike Johnson',
        action: 'Updated',
        item: 'user roles',
        time: '19 Nov 2025',
        timestamp: '11:00pm'
    },
    {
        id: 4,
        user: 'Emma Davis',
        action: 'Created',
        item: 'new contact',
        time: '19 Nov 2025',
        timestamp: '11:09pm'
    },
    {
        id: 5,
        user: 'Tom Brown',
        action: 'Updated',
        item: 'project status',
        time: '19 Nov 2025',
        timestamp: '11:06pm'
    }
];
function RecentActivity() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
        className: "border-border h-full w-full",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-lg font-semibold text-foreground mb-4 flex items-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                            className: "w-5 h-5"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/recent-activity.tsx",
                            lineNumber: 55,
                            columnNumber: 11
                        }, this),
                        "Recent Changes"
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/recent-activity.tsx",
                    lineNumber: 54,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4",
                    children: mockActivity.map((activity)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-3 hover:bg-muted/50 rounded-lg transition-colors border border-border/50",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-start gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-blue-500 flex-shrink-0"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/recent-activity.tsx",
                                        lineNumber: 65,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 min-w-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 mb-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-medium text-foreground text-sm",
                                                        children: activity.user
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/recent-activity.tsx",
                                                        lineNumber: 68,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                                        variant: "outline",
                                                        className: "text-xs",
                                                        children: activity.action
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/recent-activity.tsx",
                                                        lineNumber: 69,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/recent-activity.tsx",
                                                lineNumber: 67,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-muted-foreground mb-2",
                                                children: [
                                                    "Visited ",
                                                    activity.item
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/recent-activity.tsx",
                                                lineNumber: 73,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-1 text-xs text-muted-foreground",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                        className: "w-3 h-3"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/recent-activity.tsx",
                                                        lineNumber: 77,
                                                        columnNumber: 21
                                                    }, this),
                                                    activity.time,
                                                    " @ ",
                                                    activity.timestamp
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/recent-activity.tsx",
                                                lineNumber: 76,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/recent-activity.tsx",
                                        lineNumber: 66,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/recent-activity.tsx",
                                lineNumber: 64,
                                columnNumber: 15
                            }, this)
                        }, activity.id, false, {
                            fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/recent-activity.tsx",
                            lineNumber: 60,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/recent-activity.tsx",
                    lineNumber: 58,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/recent-activity.tsx",
            lineNumber: 53,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/recent-activity.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/ui/table.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Table",
    ()=>Table,
    "TableBody",
    ()=>TableBody,
    "TableCaption",
    ()=>TableCaption,
    "TableCell",
    ()=>TableCell,
    "TableFooter",
    ()=>TableFooter,
    "TableHead",
    ()=>TableHead,
    "TableHeader",
    ()=>TableHeader,
    "TableRow",
    ()=>TableRow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/lib/utils.ts [app-ssr] (ecmascript)");
'use client';
;
;
function Table({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "table-container",
        className: "relative w-full overflow-x-auto",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
            "data-slot": "table",
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('w-full caption-bottom text-sm', className),
            ...props
        }, void 0, false, {
            fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/ui/table.tsx",
            lineNumber: 13,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/ui/table.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
function TableHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
        "data-slot": "table-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('[&_tr]:border-b', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/ui/table.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
function TableBody({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
        "data-slot": "table-body",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('[&_tr:last-child]:border-0', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/ui/table.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
function TableFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tfoot", {
        "data-slot": "table-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('bg-muted/50 border-t font-medium [&>tr]:last:border-b-0', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/ui/table.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
function TableRow({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
        "data-slot": "table-row",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/ui/table.tsx",
        lineNumber: 57,
        columnNumber: 5
    }, this);
}
function TableHead({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
        "data-slot": "table-head",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/ui/table.tsx",
        lineNumber: 70,
        columnNumber: 5
    }, this);
}
function TableCell({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
        "data-slot": "table-cell",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/ui/table.tsx",
        lineNumber: 83,
        columnNumber: 5
    }, this);
}
function TableCaption({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("caption", {
        "data-slot": "table-caption",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('text-muted-foreground mt-4 text-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/ui/table.tsx",
        lineNumber: 99,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/user-data-table.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UserDataTable",
    ()=>UserDataTable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/ui/card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/ui/table.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpDown$3e$__ = __turbopack_context__.i("[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/node_modules/lucide-react/dist/esm/icons/arrow-up-down.js [app-ssr] (ecmascript) <export default as ArrowUpDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDown$3e$__ = __turbopack_context__.i("[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/node_modules/lucide-react/dist/esm/icons/arrow-down.js [app-ssr] (ecmascript) <export default as ArrowDown>");
'use client';
;
;
;
;
;
const mockUserData = [
    {
        id: 1,
        ptTeamMember: 'Ahmed Ali',
        addedBy: 'Mohammad Hassan',
        companiesAdded: 12,
        contactsAdded: 45,
        industry: 'Technology',
        region: 'USA',
        dateAdded: '15 Nov 2025',
        clientName: 'TechCorp Inc.'
    },
    {
        id: 2,
        ptTeamMember: 'Fatima Khan',
        addedBy: 'Ayesha Rahman',
        companiesAdded: 8,
        contactsAdded: 32,
        industry: 'Healthcare',
        region: 'Canada',
        dateAdded: '16 Nov 2025',
        clientName: 'MedHealth Solutions'
    },
    {
        id: 3,
        ptTeamMember: 'Hassan Malik',
        addedBy: 'Omar Sheikh',
        companiesAdded: 15,
        contactsAdded: 58,
        industry: 'Finance',
        region: 'USA',
        dateAdded: '17 Nov 2025',
        clientName: 'FinanceGlobal Ltd.'
    },
    {
        id: 4,
        ptTeamMember: 'Ayesha Sheikh',
        addedBy: 'Zainab Ali',
        companiesAdded: 6,
        contactsAdded: 22,
        industry: 'Retail',
        region: 'Canada',
        dateAdded: '18 Nov 2025',
        clientName: 'RetailMax Group'
    },
    {
        id: 5,
        ptTeamMember: 'Bilal Ahmed',
        addedBy: 'Usman Khan',
        companiesAdded: 10,
        contactsAdded: 38,
        industry: 'Manufacturing',
        region: 'USA',
        dateAdded: '19 Nov 2025',
        clientName: 'ManufacturePro Co.'
    },
    {
        id: 6,
        ptTeamMember: 'Zainab Raza',
        addedBy: 'Hira Malik',
        companiesAdded: 18,
        contactsAdded: 65,
        industry: 'Technology',
        region: 'Canada',
        dateAdded: '20 Nov 2025',
        clientName: 'InnovateTech Systems'
    },
    {
        id: 7,
        ptTeamMember: 'Usman Iqbal',
        addedBy: 'Tariq Ahmed',
        companiesAdded: 11,
        contactsAdded: 42,
        industry: 'Energy',
        region: 'USA',
        dateAdded: '21 Nov 2025',
        clientName: 'EnergySolutions Corp.'
    },
    {
        id: 8,
        ptTeamMember: 'Sana Mirza',
        addedBy: 'Fatima Hussain',
        companiesAdded: 13,
        contactsAdded: 48,
        industry: 'Education',
        region: 'Canada',
        dateAdded: '22 Nov 2025',
        clientName: 'EduTech Academy'
    },
    {
        id: 9,
        ptTeamMember: 'Omar Butt',
        addedBy: 'Hassan Raza',
        companiesAdded: 9,
        contactsAdded: 38,
        industry: 'Real Estate',
        region: 'USA',
        dateAdded: '23 Nov 2025',
        clientName: 'PropertyDevelopers LLC'
    },
    {
        id: 10,
        ptTeamMember: 'Hira Abbas',
        addedBy: 'Ayesha Iqbal',
        companiesAdded: 16,
        contactsAdded: 60,
        industry: 'Telecommunications',
        region: 'Canada',
        dateAdded: '24 Nov 2025',
        clientName: 'TelecomGlobal Inc.'
    },
    {
        id: 11,
        ptTeamMember: 'Tariq Hussain',
        addedBy: 'Mohammad Ali',
        companiesAdded: 9,
        contactsAdded: 35,
        industry: 'Transportation',
        region: 'USA',
        dateAdded: '25 Nov 2025',
        clientName: 'TransportLogistics Ltd.'
    }
];
function UserDataTable() {
    const [sortBy, setSortBy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('time');
    // Sort users based on selected sort option
    const sortedUsers = [
        ...mockUserData
    ].sort((a, b)=>{
        if (sortBy === 'time') {
            // Sort by date added in ascending order (oldest first)
            return a.dateAdded.localeCompare(b.dateAdded);
        } else {
            // Sort by total (companies + contacts) in descending order (highest first)
            const totalA = a.companiesAdded + a.contactsAdded;
            const totalB = b.companiesAdded + b.contactsAdded;
            return totalB - totalA // Descending order (highest to lowest)
            ;
        }
    });
    const handleSortToggle = ()=>{
        setSortBy(sortBy === 'time' ? 'total' : 'time');
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
        className: "border-border h-full flex flex-col w-full",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-6 flex flex-col flex-1 min-h-0",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg font-semibold text-foreground",
                        children: "User Data Activity"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/user-data-table.tsx",
                        lineNumber: 177,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/user-data-table.tsx",
                    lineNumber: 176,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 overflow-y-auto overflow-x-auto [&_div[data-slot='table-container']]:overflow-x-auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Table"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHeader"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableRow"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                            className: "text-foreground font-semibold",
                                            children: "PT Team Member"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/user-data-table.tsx",
                                            lineNumber: 183,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                            className: "text-foreground font-semibold",
                                            children: "Added By (Lead)"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/user-data-table.tsx",
                                            lineNumber: 184,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                            className: "text-foreground font-semibold text-center",
                                            children: "Companies Added"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/user-data-table.tsx",
                                            lineNumber: 185,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                            className: "text-foreground font-semibold text-center",
                                            children: "Contacts Added"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/user-data-table.tsx",
                                            lineNumber: 188,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                            className: "text-foreground font-semibold",
                                            children: "Industry"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/user-data-table.tsx",
                                            lineNumber: 191,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                            className: "text-foreground font-semibold",
                                            children: "Region"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/user-data-table.tsx",
                                            lineNumber: 192,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                            className: "text-foreground font-semibold",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: handleSortToggle,
                                                className: "flex items-center gap-2 hover:opacity-70 transition-opacity",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/user-data-table.tsx",
                                                        lineNumber: 198,
                                                        columnNumber: 21
                                                    }, this),
                                                    "Date Added",
                                                    sortBy === 'time' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDown$3e$__["ArrowDown"], {
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/user-data-table.tsx",
                                                        lineNumber: 201,
                                                        columnNumber: 23
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpDown$3e$__["ArrowUpDown"], {
                                                        className: "w-4 h-4 opacity-50"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/user-data-table.tsx",
                                                        lineNumber: 203,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/user-data-table.tsx",
                                                lineNumber: 194,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/user-data-table.tsx",
                                            lineNumber: 193,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                            className: "text-foreground font-semibold",
                                            children: "Client Name"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/user-data-table.tsx",
                                            lineNumber: 207,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/user-data-table.tsx",
                                    lineNumber: 182,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/user-data-table.tsx",
                                lineNumber: 181,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableBody"], {
                                children: sortedUsers.map((user)=>{
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableRow"], {
                                        className: "hover:bg-muted/50",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                className: "font-medium text-foreground",
                                                children: user.ptTeamMember
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/user-data-table.tsx",
                                                lineNumber: 214,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                className: "text-foreground",
                                                children: user.addedBy
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/user-data-table.tsx",
                                                lineNumber: 217,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                className: "text-center text-foreground",
                                                children: user.companiesAdded
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/user-data-table.tsx",
                                                lineNumber: 218,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                className: "text-center text-foreground",
                                                children: user.contactsAdded
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/user-data-table.tsx",
                                                lineNumber: 221,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                className: "text-foreground",
                                                children: user.industry
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/user-data-table.tsx",
                                                lineNumber: 224,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                className: "text-foreground",
                                                children: user.region
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/user-data-table.tsx",
                                                lineNumber: 225,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                className: "text-foreground",
                                                children: user.dateAdded
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/user-data-table.tsx",
                                                lineNumber: 226,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                className: "text-foreground",
                                                children: user.clientName
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/user-data-table.tsx",
                                                lineNumber: 227,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, user.id, true, {
                                        fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/user-data-table.tsx",
                                        lineNumber: 213,
                                        columnNumber: 19
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/user-data-table.tsx",
                                lineNumber: 210,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/user-data-table.tsx",
                        lineNumber: 180,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/user-data-table.tsx",
                    lineNumber: 179,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/user-data-table.tsx",
            lineNumber: 175,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/user-data-table.tsx",
        lineNumber: 174,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/activity-charts.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ActivityCharts",
    ()=>ActivityCharts
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/ui/card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/ui/table.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$LineChart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/node_modules/recharts/es6/chart/LineChart.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/node_modules/recharts/es6/cartesian/Line.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/node_modules/recharts/es6/chart/BarChart.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/node_modules/recharts/es6/cartesian/Bar.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/node_modules/recharts/es6/cartesian/XAxis.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/node_modules/recharts/es6/cartesian/YAxis.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/node_modules/recharts/es6/cartesian/CartesianGrid.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/node_modules/recharts/es6/component/Tooltip.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Legend$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/node_modules/recharts/es6/component/Legend.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/node_modules/recharts/es6/component/ResponsiveContainer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$PieChart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/node_modules/recharts/es6/chart/PieChart.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$Pie$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/node_modules/recharts/es6/polar/Pie.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/node_modules/recharts/es6/component/Cell.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpDown$3e$__ = __turbopack_context__.i("[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/node_modules/lucide-react/dist/esm/icons/arrow-up-down.js [app-ssr] (ecmascript) <export default as ArrowUpDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUp$3e$__ = __turbopack_context__.i("[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/node_modules/lucide-react/dist/esm/icons/arrow-up.js [app-ssr] (ecmascript) <export default as ArrowUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDown$3e$__ = __turbopack_context__.i("[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/node_modules/lucide-react/dist/esm/icons/arrow-down.js [app-ssr] (ecmascript) <export default as ArrowDown>");
'use client';
;
;
;
;
;
;
// Daily Activity Trend - Companies and Contacts added over time
const dailyActivityData = [
    {
        date: '15 Nov',
        companies: 12,
        contacts: 45
    },
    {
        date: '16 Nov',
        companies: 8,
        contacts: 32
    },
    {
        date: '17 Nov',
        companies: 15,
        contacts: 58
    },
    {
        date: '18 Nov',
        companies: 6,
        contacts: 22
    },
    {
        date: '19 Nov',
        companies: 10,
        contacts: 38
    },
    {
        date: '20 Nov',
        companies: 18,
        contacts: 65
    },
    {
        date: '21 Nov',
        companies: 11,
        contacts: 42
    },
    {
        date: '22 Nov',
        companies: 13,
        contacts: 48
    },
    {
        date: '23 Nov',
        companies: 9,
        contacts: 38
    },
    {
        date: '24 Nov',
        companies: 16,
        contacts: 60
    },
    {
        date: '25 Nov',
        companies: 9,
        contacts: 35
    }
];
// Industry Distribution
const industryData = [
    {
        name: 'Technology',
        value: 3,
        fill: '#8b5cf6'
    },
    {
        name: 'Healthcare',
        value: 1,
        fill: '#3b82f6'
    },
    {
        name: 'Finance',
        value: 1,
        fill: '#06b6d4'
    },
    {
        name: 'Retail',
        value: 1,
        fill: '#ec4899'
    },
    {
        name: 'Manufacturing',
        value: 1,
        fill: '#f59e0b'
    },
    {
        name: 'Energy',
        value: 1,
        fill: '#10b981'
    },
    {
        name: 'Education',
        value: 1,
        fill: '#ef4444'
    },
    {
        name: 'Real Estate',
        value: 1,
        fill: '#6366f1'
    },
    {
        name: 'Telecommunications',
        value: 1,
        fill: '#14b8a6'
    },
    {
        name: 'Transportation',
        value: 1,
        fill: '#f97316'
    }
];
// Regional Performance Comparison
const regionalData = [
    {
        region: 'USA',
        companies: 71,
        contacts: 280,
        total: 351
    },
    {
        region: 'Canada',
        companies: 40,
        contacts: 185,
        total: 225
    }
];
// PT Team Members Data - Aggregated from user data
const ptTeamMembersData = [
    {
        name: 'Zainab Raza',
        companies: 18,
        contacts: 65
    },
    {
        name: 'Hira Abbas',
        companies: 16,
        contacts: 60
    },
    {
        name: 'Hassan Malik',
        companies: 15,
        contacts: 58
    },
    {
        name: 'Sana Mirza',
        companies: 13,
        contacts: 48
    },
    {
        name: 'Ahmed Ali',
        companies: 12,
        contacts: 45
    },
    {
        name: 'Usman Iqbal',
        companies: 11,
        contacts: 42
    },
    {
        name: 'Bilal Ahmed',
        companies: 10,
        contacts: 38
    },
    {
        name: 'Fatima Khan',
        companies: 8,
        contacts: 32
    },
    {
        name: 'Omar Butt',
        companies: 9,
        contacts: 38
    },
    {
        name: 'Tariq Hussain',
        companies: 9,
        contacts: 35
    },
    {
        name: 'Ayesha Sheikh',
        companies: 6,
        contacts: 22
    },
    {
        name: 'Mohammad Ali',
        companies: 14,
        contacts: 52
    },
    {
        name: 'Ayesha Rahman',
        companies: 12,
        contacts: 48
    },
    {
        name: 'Omar Sheikh',
        companies: 11,
        contacts: 44
    },
    {
        name: 'Zainab Ali',
        companies: 10,
        contacts: 40
    },
    {
        name: 'Usman Khan',
        companies: 13,
        contacts: 50
    },
    {
        name: 'Hira Malik',
        companies: 15,
        contacts: 55
    },
    {
        name: 'Tariq Ahmed',
        companies: 9,
        contacts: 36
    },
    {
        name: 'Fatima Hussain',
        companies: 11,
        contacts: 42
    },
    {
        name: 'Hassan Raza',
        companies: 8,
        contacts: 30
    },
    {
        name: 'Ayesha Iqbal',
        companies: 12,
        contacts: 46
    },
    {
        name: 'Mohammad Hassan',
        companies: 16,
        contacts: 58
    }
];
const COLORS = [
    '#8b5cf6',
    '#3b82f6',
    '#06b6d4',
    '#ec4899',
    '#f59e0b',
    '#10b981',
    '#ef4444',
    '#6366f1',
    '#14b8a6',
    '#f97316'
];
function ActivityCharts() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8 w-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                className: "border-border p-6 w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg font-semibold text-foreground mb-4",
                        children: "Daily Activity Trend"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/activity-charts.tsx",
                        lineNumber: 87,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-muted-foreground mb-4",
                        children: "Companies and Contacts added over the past 11 days"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/activity-charts.tsx",
                        lineNumber: 88,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                        width: "100%",
                        height: 300,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$LineChart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LineChart"], {
                            data: dailyActivityData,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                                    strokeDasharray: "3 3",
                                    stroke: "var(--color-border)"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/activity-charts.tsx",
                                    lineNumber: 93,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["XAxis"], {
                                    dataKey: "date",
                                    stroke: "var(--color-muted-foreground)",
                                    tick: {
                                        fontSize: 12
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/activity-charts.tsx",
                                    lineNumber: 94,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["YAxis"], {
                                    stroke: "var(--color-muted-foreground)"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/activity-charts.tsx",
                                    lineNumber: 99,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tooltip"], {
                                    contentStyle: {
                                        backgroundColor: 'var(--color-card)',
                                        border: '1px solid var(--color-border)'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/activity-charts.tsx",
                                    lineNumber: 100,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Legend$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Legend"], {}, void 0, false, {
                                    fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/activity-charts.tsx",
                                    lineNumber: 106,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Line"], {
                                    type: "monotone",
                                    dataKey: "companies",
                                    stroke: "#8b5cf6",
                                    strokeWidth: 2,
                                    dot: {
                                        r: 4
                                    },
                                    name: "Companies Added"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/activity-charts.tsx",
                                    lineNumber: 107,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Line"], {
                                    type: "monotone",
                                    dataKey: "contacts",
                                    stroke: "#3b82f6",
                                    strokeWidth: 2,
                                    dot: {
                                        r: 4
                                    },
                                    name: "Contacts Added"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/activity-charts.tsx",
                                    lineNumber: 115,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/activity-charts.tsx",
                            lineNumber: 92,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/activity-charts.tsx",
                        lineNumber: 91,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/activity-charts.tsx",
                lineNumber: 86,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                className: "border-border p-6 w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg font-semibold text-foreground mb-4",
                        children: "Industry Distribution"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/activity-charts.tsx",
                        lineNumber: 129,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-muted-foreground mb-4",
                        children: "Breakdown of companies by industry sector"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/activity-charts.tsx",
                        lineNumber: 130,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                        width: "100%",
                        height: 300,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$PieChart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PieChart"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$Pie$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Pie"], {
                                    data: industryData,
                                    cx: "50%",
                                    cy: "50%",
                                    labelLine: false,
                                    label: ({ name, percent })=>`${name}: ${(percent * 100).toFixed(0)}%`,
                                    outerRadius: 100,
                                    fill: "#8884d8",
                                    dataKey: "value",
                                    children: industryData.map((entry, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Cell"], {
                                            fill: COLORS[index % COLORS.length]
                                        }, `cell-${index}`, false, {
                                            fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/activity-charts.tsx",
                                            lineNumber: 146,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/activity-charts.tsx",
                                    lineNumber: 135,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tooltip"], {
                                    contentStyle: {
                                        backgroundColor: 'var(--color-card)',
                                        border: '1px solid var(--color-border)'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/activity-charts.tsx",
                                    lineNumber: 149,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/activity-charts.tsx",
                            lineNumber: 134,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/activity-charts.tsx",
                        lineNumber: 133,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/activity-charts.tsx",
                lineNumber: 128,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                className: "border-border p-6 w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg font-semibold text-foreground mb-4",
                        children: "Regional Performance"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/activity-charts.tsx",
                        lineNumber: 161,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-muted-foreground mb-4",
                        children: "Comparison of USA vs Canada performance"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/activity-charts.tsx",
                        lineNumber: 162,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                        width: "100%",
                        height: 300,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BarChart"], {
                            data: regionalData,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                                    strokeDasharray: "3 3",
                                    stroke: "var(--color-border)"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/activity-charts.tsx",
                                    lineNumber: 167,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["XAxis"], {
                                    dataKey: "region",
                                    stroke: "var(--color-muted-foreground)"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/activity-charts.tsx",
                                    lineNumber: 168,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["YAxis"], {
                                    stroke: "var(--color-muted-foreground)"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/activity-charts.tsx",
                                    lineNumber: 169,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tooltip"], {
                                    contentStyle: {
                                        backgroundColor: 'var(--color-card)',
                                        border: '1px solid var(--color-border)'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/activity-charts.tsx",
                                    lineNumber: 170,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Legend$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Legend"], {}, void 0, false, {
                                    fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/activity-charts.tsx",
                                    lineNumber: 176,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Bar"], {
                                    dataKey: "companies",
                                    fill: "#8b5cf6",
                                    radius: [
                                        8,
                                        8,
                                        0,
                                        0
                                    ],
                                    name: "Companies"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/activity-charts.tsx",
                                    lineNumber: 177,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Bar"], {
                                    dataKey: "contacts",
                                    fill: "#3b82f6",
                                    radius: [
                                        8,
                                        8,
                                        0,
                                        0
                                    ],
                                    name: "Contacts"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/activity-charts.tsx",
                                    lineNumber: 178,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Bar"], {
                                    dataKey: "total",
                                    fill: "#06b6d4",
                                    radius: [
                                        8,
                                        8,
                                        0,
                                        0
                                    ],
                                    name: "Total"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/activity-charts.tsx",
                                    lineNumber: 179,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/activity-charts.tsx",
                            lineNumber: 166,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/activity-charts.tsx",
                        lineNumber: 165,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 grid grid-cols-2 gap-4 text-xs",
                        children: regionalData.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-muted-foreground",
                                        children: [
                                            item.region,
                                            ":"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/activity-charts.tsx",
                                        lineNumber: 185,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-semibold text-foreground",
                                        children: [
                                            item.total,
                                            " total (",
                                            item.companies,
                                            " companies, ",
                                            item.contacts,
                                            " contacts)"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/activity-charts.tsx",
                                        lineNumber: 186,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, item.region, true, {
                                fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/activity-charts.tsx",
                                lineNumber: 184,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/activity-charts.tsx",
                        lineNumber: 182,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/activity-charts.tsx",
                lineNumber: 160,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PTTeamMembersTable, {}, void 0, false, {
                fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/activity-charts.tsx",
                lineNumber: 195,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/activity-charts.tsx",
        lineNumber: 84,
        columnNumber: 5
    }, this);
}
function PTTeamMembersTable() {
    const [sortField, setSortField] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [sortDirection, setSortDirection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleSort = (field)=>{
        if (sortField === field) {
            // Toggle direction if same field
            setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
        } else {
            // New field, start with descending
            setSortField(field);
            setSortDirection('desc');
        }
    };
    // Sort the data
    const sortedData = [
        ...ptTeamMembersData
    ].sort((a, b)=>{
        if (!sortField || !sortDirection) return 0;
        const aValue = a[sortField];
        const bValue = b[sortField];
        if (sortDirection === 'asc') {
            return aValue - bValue;
        } else {
            return bValue - aValue;
        }
    });
    const getSortIcon = (field)=>{
        if (sortField !== field) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpDown$3e$__["ArrowUpDown"], {
                className: "w-4 h-4 opacity-50"
            }, void 0, false, {
                fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/activity-charts.tsx",
                lineNumber: 231,
                columnNumber: 14
            }, this);
        }
        return sortDirection === 'asc' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUp$3e$__["ArrowUp"], {
            className: "w-4 h-4"
        }, void 0, false, {
            fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/activity-charts.tsx",
            lineNumber: 234,
            columnNumber: 7
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDown$3e$__["ArrowDown"], {
            className: "w-4 h-4"
        }, void 0, false, {
            fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/activity-charts.tsx",
            lineNumber: 236,
            columnNumber: 7
        }, this);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
        className: "border-border p-6 w-full flex flex-col h-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg font-semibold text-foreground mb-2",
                        children: "PT Team Members"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/activity-charts.tsx",
                        lineNumber: 243,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-muted-foreground",
                        children: "All team members with their companies and contacts added"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/activity-charts.tsx",
                        lineNumber: 244,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/activity-charts.tsx",
                lineNumber: 242,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-y-auto overflow-x-hidden max-h-[400px]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Table"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHeader"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableRow"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                        className: "text-foreground font-semibold",
                                        children: "PT Team Member"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/activity-charts.tsx",
                                        lineNumber: 252,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                        className: "text-foreground font-semibold text-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>handleSort('companies'),
                                            className: "flex items-center gap-2 hover:opacity-70 transition-opacity mx-auto",
                                            children: [
                                                "Companies Added",
                                                getSortIcon('companies')
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/activity-charts.tsx",
                                            lineNumber: 254,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/activity-charts.tsx",
                                        lineNumber: 253,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                        className: "text-foreground font-semibold text-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>handleSort('contacts'),
                                            className: "flex items-center gap-2 hover:opacity-70 transition-opacity mx-auto",
                                            children: [
                                                "Contacts Added",
                                                getSortIcon('contacts')
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/activity-charts.tsx",
                                            lineNumber: 263,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/activity-charts.tsx",
                                        lineNumber: 262,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                        className: "text-foreground font-semibold text-center",
                                        children: "Total"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/activity-charts.tsx",
                                        lineNumber: 271,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/activity-charts.tsx",
                                lineNumber: 251,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/activity-charts.tsx",
                            lineNumber: 250,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableBody"], {
                            children: sortedData.map((member, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableRow"], {
                                    className: "hover:bg-muted/50",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                            className: "font-medium text-foreground",
                                            children: member.name
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/activity-charts.tsx",
                                            lineNumber: 277,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                            className: "text-center text-foreground",
                                            children: member.companies
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/activity-charts.tsx",
                                            lineNumber: 278,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                            className: "text-center text-foreground",
                                            children: member.contacts
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/activity-charts.tsx",
                                            lineNumber: 279,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                            className: "text-center text-foreground font-semibold",
                                            children: member.companies + member.contacts
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/activity-charts.tsx",
                                            lineNumber: 280,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, index, true, {
                                    fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/activity-charts.tsx",
                                    lineNumber: 276,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/activity-charts.tsx",
                            lineNumber: 274,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/activity-charts.tsx",
                    lineNumber: 249,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/activity-charts.tsx",
                lineNumber: 248,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/activity-charts.tsx",
        lineNumber: 241,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/ui/input.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/lib/utils.ts [app-ssr] (ecmascript)");
;
;
function Input({ className, type, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        "data-slot": "input",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm', 'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]', 'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/ui/input.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/header.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Header",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/node_modules/lucide-react/dist/esm/icons/search.js [app-ssr] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__ = __turbopack_context__.i("[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/node_modules/lucide-react/dist/esm/icons/bell.js [app-ssr] (ecmascript) <export default as Bell>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/node_modules/lucide-react/dist/esm/icons/settings.js [app-ssr] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/node_modules/lucide-react/dist/esm/icons/calendar.js [app-ssr] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/ui/input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
function Header() {
    const [dateRange, setDateRange] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "bg-card border-b border-border px-8 py-4 flex items-center justify-between sticky top-0 z-40",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-4 flex-1",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-2xl font-bold text-foreground",
                    children: "Dashboard"
                }, void 0, false, {
                    fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/header.tsx",
                    lineNumber: 14,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/header.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative hidden md:block",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/header.tsx",
                                lineNumber: 19,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                type: "text",
                                placeholder: "Search...",
                                className: "pl-10 pr-4 py-2 w-64 bg-background"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/header.tsx",
                                lineNumber: 20,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/header.tsx",
                        lineNumber: 18,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/header.tsx",
                                lineNumber: 28,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                type: "date",
                                className: "pl-10 pr-4 py-2 bg-background",
                                onChange: (e)=>setDateRange(e.target.value)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/header.tsx",
                                lineNumber: 29,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/header.tsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "ghost",
                        size: "icon",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__["Bell"], {
                            className: "w-5 h-5"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/header.tsx",
                            lineNumber: 37,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/header.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "ghost",
                        size: "icon",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                            className: "w-5 h-5"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/header.tsx",
                            lineNumber: 41,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/header.tsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-blue-500"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/header.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/header.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/header.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/ui/dialog.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Dialog",
    ()=>Dialog,
    "DialogClose",
    ()=>DialogClose,
    "DialogContent",
    ()=>DialogContent,
    "DialogDescription",
    ()=>DialogDescription,
    "DialogFooter",
    ()=>DialogFooter,
    "DialogHeader",
    ()=>DialogHeader,
    "DialogOverlay",
    ()=>DialogOverlay,
    "DialogPortal",
    ()=>DialogPortal,
    "DialogTitle",
    ()=>DialogTitle,
    "DialogTrigger",
    ()=>DialogTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__ = __turbopack_context__.i("[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as XIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/lib/utils.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function Dialog({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "dialog",
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/ui/dialog.tsx",
        lineNumber: 12,
        columnNumber: 10
    }, this);
}
function DialogTrigger({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "dialog-trigger",
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/ui/dialog.tsx",
        lineNumber: 18,
        columnNumber: 10
    }, this);
}
function DialogPortal({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Portal"], {
        "data-slot": "dialog-portal",
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/ui/dialog.tsx",
        lineNumber: 24,
        columnNumber: 10
    }, this);
}
function DialogClose({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Close"], {
        "data-slot": "dialog-close",
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/ui/dialog.tsx",
        lineNumber: 30,
        columnNumber: 10
    }, this);
}
function DialogOverlay({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Overlay"], {
        "data-slot": "dialog-overlay",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/ui/dialog.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
function DialogContent({ className, children, showCloseButton = true, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogPortal, {
        "data-slot": "dialog-portal",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogOverlay, {}, void 0, false, {
                fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/ui/dialog.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"], {
                "data-slot": "dialog-content",
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg', className),
                ...props,
                children: [
                    children,
                    showCloseButton && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Close"], {
                        "data-slot": "dialog-close",
                        className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__["XIcon"], {}, void 0, false, {
                                fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/ui/dialog.tsx",
                                lineNumber: 74,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "sr-only",
                                children: "Close"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/ui/dialog.tsx",
                                lineNumber: 75,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/ui/dialog.tsx",
                        lineNumber: 70,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/ui/dialog.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/ui/dialog.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
function DialogHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "dialog-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('flex flex-col gap-2 text-center sm:text-left', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/ui/dialog.tsx",
        lineNumber: 85,
        columnNumber: 5
    }, this);
}
function DialogFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "dialog-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('flex flex-col-reverse gap-2 sm:flex-row sm:justify-end', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/ui/dialog.tsx",
        lineNumber: 95,
        columnNumber: 5
    }, this);
}
function DialogTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Title"], {
        "data-slot": "dialog-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('text-lg leading-none font-semibold', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/ui/dialog.tsx",
        lineNumber: 111,
        columnNumber: 5
    }, this);
}
function DialogDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Description"], {
        "data-slot": "dialog-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('text-muted-foreground text-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/ui/dialog.tsx",
        lineNumber: 124,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/user-details-modal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UserDetailsModal",
    ()=>UserDetailsModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/ui/dialog.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/ui/table.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/ui/badge.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function UserDetailsModal({ isOpen, onClose, cardType, users }) {
    const isAdminCard = cardType === 'Admins';
    const isCompaniesCard = cardType === 'Companies';
    const isContactsCard = cardType === 'Contacts';
    const isProjectsCard = cardType === 'Projects';
    const isTechnologiesCard = cardType === 'Technologies';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Dialog"], {
        open: isOpen,
        onOpenChange: onClose,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogContent"], {
            className: "max-w-5xl max-h-[85vh] overflow-hidden flex flex-col",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogHeader"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogTitle"], {
                        className: "text-xl font-bold",
                        children: [
                            cardType,
                            " - ",
                            users.length,
                            " ",
                            users.length === 1 ? 'item' : 'items'
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/user-details-modal.tsx",
                        lineNumber: 32,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/user-details-modal.tsx",
                    lineNumber: 31,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 overflow-y-auto overflow-x-hidden mt-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full overflow-x-hidden [&_div[data-slot='table-container']]:overflow-x-hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Table"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHeader"], {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableRow"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                                className: "w-16",
                                                children: "#"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/user-details-modal.tsx",
                                                lineNumber: 41,
                                                columnNumber: 19
                                            }, this),
                                            isCompaniesCard || isProjectsCard || isTechnologiesCard ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                                className: "min-w-[200px]",
                                                children: "Name"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/user-details-modal.tsx",
                                                lineNumber: 43,
                                                columnNumber: 21
                                            }, this) : isContactsCard ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                                        className: "min-w-[200px]",
                                                        children: "Contact Name"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/user-details-modal.tsx",
                                                        lineNumber: 46,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                                        className: "min-w-[250px]",
                                                        children: "Email"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/user-details-modal.tsx",
                                                        lineNumber: 47,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true) : isAdminCard ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                                        className: "min-w-[200px]",
                                                        children: "Admin Name"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/user-details-modal.tsx",
                                                        lineNumber: 51,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                                        className: "min-w-[250px]",
                                                        children: "Email"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/user-details-modal.tsx",
                                                        lineNumber: 52,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                                        className: "min-w-[200px]",
                                                        children: "Name"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/user-details-modal.tsx",
                                                        lineNumber: 56,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                                        className: "min-w-[250px]",
                                                        children: "Email"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/user-details-modal.tsx",
                                                        lineNumber: 57,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                                        className: "w-28 text-center",
                                                        children: "Status"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/user-details-modal.tsx",
                                                        lineNumber: 58,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/user-details-modal.tsx",
                                        lineNumber: 40,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/user-details-modal.tsx",
                                    lineNumber: 39,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableBody"], {
                                    children: isCompaniesCard || isProjectsCard || isTechnologiesCard ? users.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableRow"], {
                                            className: "hover:bg-muted/50",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                    className: "font-medium text-muted-foreground",
                                                    children: index + 1
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/user-details-modal.tsx",
                                                    lineNumber: 67,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-semibold text-foreground",
                                                        children: item.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/user-details-modal.tsx",
                                                        lineNumber: 71,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/user-details-modal.tsx",
                                                    lineNumber: 70,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, item.id, true, {
                                            fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/user-details-modal.tsx",
                                            lineNumber: 66,
                                            columnNumber: 21
                                        }, this)) : isContactsCard ? users.map((contact, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableRow"], {
                                            className: "hover:bg-muted/50",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                    className: "font-medium text-muted-foreground",
                                                    children: index + 1
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/user-details-modal.tsx",
                                                    lineNumber: 78,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2 min-w-0",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center text-white font-semibold text-xs flex-shrink-0",
                                                                children: contact.name.split(' ').map((n)=>n[0]).join('')
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/user-details-modal.tsx",
                                                                lineNumber: 83,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-semibold text-foreground truncate",
                                                                children: contact.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/user-details-modal.tsx",
                                                                lineNumber: 86,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/user-details-modal.tsx",
                                                        lineNumber: 82,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/user-details-modal.tsx",
                                                    lineNumber: 81,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                    className: "text-muted-foreground",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "truncate block",
                                                        children: contact.email || 'No email'
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/user-details-modal.tsx",
                                                        lineNumber: 90,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/user-details-modal.tsx",
                                                    lineNumber: 89,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, contact.id, true, {
                                            fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/user-details-modal.tsx",
                                            lineNumber: 77,
                                            columnNumber: 21
                                        }, this)) : isAdminCard ? users.map((admin, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableRow"], {
                                            className: "hover:bg-muted/50",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                    className: "font-medium text-muted-foreground",
                                                    children: index + 1
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/user-details-modal.tsx",
                                                    lineNumber: 97,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2 min-w-0",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center text-white font-semibold text-xs flex-shrink-0",
                                                                children: admin.name.split(' ').map((n)=>n[0]).join('')
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/user-details-modal.tsx",
                                                                lineNumber: 102,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-semibold text-foreground truncate",
                                                                children: admin.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/user-details-modal.tsx",
                                                                lineNumber: 105,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/user-details-modal.tsx",
                                                        lineNumber: 101,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/user-details-modal.tsx",
                                                    lineNumber: 100,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                    className: "text-muted-foreground",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "truncate block",
                                                        children: admin.email || 'No email'
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/user-details-modal.tsx",
                                                        lineNumber: 109,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/user-details-modal.tsx",
                                                    lineNumber: 108,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, admin.id, true, {
                                            fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/user-details-modal.tsx",
                                            lineNumber: 96,
                                            columnNumber: 21
                                        }, this)) : users.map((user, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableRow"], {
                                            className: "hover:bg-muted/50",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                    className: "font-medium text-muted-foreground",
                                                    children: index + 1
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/user-details-modal.tsx",
                                                    lineNumber: 116,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2 min-w-0",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-blue-500 flex items-center justify-center text-white font-semibold text-xs flex-shrink-0",
                                                                children: user.name.split(' ').map((n)=>n[0]).join('')
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/user-details-modal.tsx",
                                                                lineNumber: 121,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-semibold text-foreground truncate",
                                                                children: user.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/user-details-modal.tsx",
                                                                lineNumber: 124,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/user-details-modal.tsx",
                                                        lineNumber: 120,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/user-details-modal.tsx",
                                                    lineNumber: 119,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                    className: "text-muted-foreground",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "truncate block",
                                                        children: user.email || 'No email'
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/user-details-modal.tsx",
                                                        lineNumber: 128,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/user-details-modal.tsx",
                                                    lineNumber: 127,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                    className: "text-center",
                                                    children: user.status ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                                        variant: user.status === 'Active' ? 'default' : 'secondary',
                                                        className: user.status === 'Active' ? 'bg-green-500 hover:bg-green-600 text-white whitespace-nowrap' : 'bg-gray-500 hover:bg-gray-600 text-white whitespace-nowrap',
                                                        children: user.status
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/user-details-modal.tsx",
                                                        lineNumber: 132,
                                                        columnNumber: 27
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-muted-foreground text-sm",
                                                        children: "-"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/user-details-modal.tsx",
                                                        lineNumber: 143,
                                                        columnNumber: 27
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/user-details-modal.tsx",
                                                    lineNumber: 130,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, user.id, true, {
                                            fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/user-details-modal.tsx",
                                            lineNumber: 115,
                                            columnNumber: 21
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/user-details-modal.tsx",
                                    lineNumber: 63,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/user-details-modal.tsx",
                            lineNumber: 38,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/user-details-modal.tsx",
                        lineNumber: 37,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/user-details-modal.tsx",
                    lineNumber: 36,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/user-details-modal.tsx",
            lineNumber: 30,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/user-details-modal.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Dashboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$components$2f$sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/sidebar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$components$2f$stat$2d$cards$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/stat-cards.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$components$2f$recent$2d$activity$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/recent-activity.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$components$2f$user$2d$data$2d$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/user-data-table.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$components$2f$activity$2d$charts$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/activity-charts.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$components$2f$header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/header.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$components$2f$user$2d$details$2d$modal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/components/user-details-modal.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
function Dashboard() {
    const [selectedCard, setSelectedCard] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedUsers, setSelectedUsers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const handleCardClick = (cardType, users)=>{
        setSelectedCard(cardType);
        setSelectedUsers(users);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex h-screen bg-background",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$components$2f$sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Sidebar"], {}, void 0, false, {
                fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/app/page.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 flex flex-col overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$components$2f$header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Header"], {}, void 0, false, {
                        fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/app/page.tsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 overflow-auto",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                            className: "p-8 max-w-7xl mx-auto w-full",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$components$2f$stat$2d$cards$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StatCards"], {
                                    onCardClick: handleCardClick
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/app/page.tsx",
                                    lineNumber: 28,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8 items-stretch w-full",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "lg:col-span-2 flex w-full",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$components$2f$user$2d$data$2d$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserDataTable"], {}, void 0, false, {
                                                fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/app/page.tsx",
                                                lineNumber: 31,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/app/page.tsx",
                                            lineNumber: 30,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex w-full",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$components$2f$recent$2d$activity$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RecentActivity"], {}, void 0, false, {
                                                fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/app/page.tsx",
                                                lineNumber: 34,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/app/page.tsx",
                                            lineNumber: 33,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/app/page.tsx",
                                    lineNumber: 29,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$components$2f$activity$2d$charts$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ActivityCharts"], {}, void 0, false, {
                                    fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/app/page.tsx",
                                    lineNumber: 37,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/app/page.tsx",
                            lineNumber: 27,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/app/page.tsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/app/page.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            selectedCard && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEB__DEV__BIG__PROJECTS$2f$CORECONNECT__ADMIN__DASHBOARD$2f$coreconnect_admin$2f$components$2f$user$2d$details$2d$modal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserDetailsModal"], {
                isOpen: !!selectedCard,
                onClose: ()=>setSelectedCard(null),
                cardType: selectedCard,
                users: selectedUsers
            }, void 0, false, {
                fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/app/page.tsx",
                lineNumber: 43,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/WEB DEV BIG PROJECTS/CORECONNECT ADMIN DASHBOARD/coreconnect_admin/app/page.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=3d860_WEB%20DEV%20BIG%20PROJECTS_CORECONNECT%20ADMIN%20DASHBOARD_coreconnect_admin_8a447e31._.js.map