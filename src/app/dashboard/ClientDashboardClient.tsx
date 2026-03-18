"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { signOut } from "next-auth/react";
import {
    FiHome,
    FiGrid,
    FiPackage,
    FiUser,
    FiLogOut,
    FiClock,
    FiCheckCircle,
    FiDollarSign,
    FiTrendingUp,
    FiChevronRight,
    FiSend,
    FiAlertCircle,
    FiX,
} from "react-icons/fi";

/* ─── Types ─── */
interface OrderItem {
    id: string;
    serviceName: string;
    serviceCategory: string;
    status: string;
    totalAmount: number;
    currency: string;
    requirements: string | null;
    notes: string | null;
    deadline: string | null;
    createdAt: string;
    updatedAt: string;
    paymentStatus: string;
}

interface ServiceItem {
    id: string;
    name: string;
    slug: string;
    category: string;
    description: string;
    price: number;
    pricingModel: string;
    currency: string;
}

interface Props {
    userName: string;
    userEmail: string;
    userImage: string | null;
    orders: OrderItem[];
    services: ServiceItem[];
}

/* ─── Constants ─── */
const tabs = [
    { id: "overview", label: "Overview", icon: FiHome },
    { id: "services", label: "Services", icon: FiGrid },
    { id: "orders", label: "My Orders", icon: FiPackage },
    { id: "profile", label: "Profile", icon: FiUser },
];

const categoryLabels: Record<string, string> = {
    "social-media": "Social Media",
    platform: "Platform",
    "web-tech": "Web & Tech",
    creative: "Creative",
};

const categoryColors: Record<string, string> = {
    "social-media": "from-blue-500 to-cyan-400",
    platform: "from-purple-500 to-pink-400",
    "web-tech": "from-emerald-500 to-teal-400",
    creative: "from-orange-500 to-amber-400",
};

const statusSteps = ["pending", "confirmed", "in_progress", "completed"];
const statusLabels: Record<string, string> = {
    pending: "Pending",
    confirmed: "Confirmed",
    in_progress: "In Progress",
    completed: "Completed",
    cancelled: "Cancelled",
};

const statusColors: Record<string, string> = {
    pending: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
    confirmed: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    in_progress: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    completed: "bg-green-500/10 text-green-400 border-green-500/20",
    cancelled: "bg-red-500/10 text-red-400 border-red-500/20",
};

const pricingLabels: Record<string, string> = {
    fixed: "One-time",
    hourly: "/hr",
    monthly: "/mo",
};

/* ─── Main Component ─── */
export default function ClientDashboardClient({
    userName,
    userEmail,
    userImage,
    orders,
    services,
}: Props) {
    const router = useRouter();
    const [activeTab, setActiveTab] = useState("overview");
    const [categoryFilter, setCategoryFilter] = useState("all");
    const [toast, setToast] = useState<string | null>(null);
    const [expandedOrder, setExpandedOrder] = useState<string | null>(null);

    const totalSpent = orders
        .filter((o) => o.paymentStatus === "succeeded" || o.status !== "cancelled")
        .reduce((sum, o) => sum + o.totalAmount, 0);

    const filteredServices =
        categoryFilter === "all"
            ? services
            : services.filter((s) => s.category === categoryFilter);

    const categories = [...new Set(services.map((s) => s.category))];

    function goToCheckout(serviceId: string) {
        router.push(`/checkout/${serviceId}`);
    }

    /* ─── Render ─── */
    return (
        <div className="min-h-screen pt-20 pb-8">
            {/* Toast */}
            <AnimatePresence>
                {toast && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed top-24 left-1/2 -translate-x-1/2 z-50 px-6 py-3 glass rounded-lg text-white text-sm font-medium shadow-xl border border-brand-500/20"
                    >
                        {toast}
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="container mx-auto max-w-7xl px-4 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-6">
                    {/* ─── Sidebar ─── */}
                    <aside className="lg:w-64 flex-shrink-0">
                        <div className="glass rounded-2xl p-5 lg:sticky lg:top-24">
                            {/* User Card */}
                            <div className="flex items-center gap-3 mb-6 pb-5 border-b border-white/5">
                                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-brand-500 to-accent-500 flex items-center justify-center text-white font-bold text-lg overflow-hidden">
                                    {userImage ? (
                                        <img
                                            src={userImage}
                                            alt=""
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        userName.charAt(0).toUpperCase()
                                    )}
                                </div>
                                <div className="min-w-0">
                                    <p className="text-white font-semibold text-sm truncate">
                                        {userName}
                                    </p>
                                    <p className="text-slate-500 text-xs truncate">{userEmail}</p>
                                </div>
                            </div>

                            {/* Nav */}
                            <nav className="space-y-1">
                                {tabs.map((tab) => (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id)}
                                        className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${activeTab === tab.id
                                            ? "bg-brand-600/15 text-brand-400 shadow-sm"
                                            : "text-slate-400 hover:text-white hover:bg-white/5"
                                            }`}
                                    >
                                        <tab.icon size={16} />
                                        {tab.label}
                                        {tab.id === "orders" && orders.length > 0 && (
                                            <span className="ml-auto text-xs bg-white/10 px-2 py-0.5 rounded-full">
                                                {orders.length}
                                            </span>
                                        )}
                                    </button>
                                ))}
                            </nav>

                            <div className="mt-6 pt-5 border-t border-white/5">
                                <button
                                    onClick={() => signOut({ callbackUrl: "/" })}
                                    className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm text-slate-500 hover:text-red-400 hover:bg-red-500/5 transition-all"
                                >
                                    <FiLogOut size={16} />
                                    Sign Out
                                </button>
                            </div>
                        </div>
                    </aside>

                    {/* ─── Main Content ─── */}
                    <main className="flex-1 min-w-0">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, x: 12 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -12 }}
                                transition={{ duration: 0.2 }}
                            >
                                {activeTab === "overview" && (
                                    <OverviewTab
                                        userName={userName}
                                        orders={orders}
                                        totalSpent={totalSpent}
                                        onViewOrders={() => setActiveTab("orders")}
                                        onViewServices={() => setActiveTab("services")}
                                    />
                                )}
                                {activeTab === "services" && (
                                    <ServicesTab
                                        services={filteredServices}
                                        categories={categories}
                                        categoryFilter={categoryFilter}
                                        setCategoryFilter={setCategoryFilter}
                                        onRequest={(s) => goToCheckout(s.id)}
                                    />
                                )}
                                {activeTab === "orders" && (
                                    <OrdersTab
                                        orders={orders}
                                        expandedOrder={expandedOrder}
                                        setExpandedOrder={setExpandedOrder}
                                        onBrowse={() => setActiveTab("services")}
                                    />
                                )}
                                {activeTab === "profile" && (
                                    <ProfileTab
                                        userName={userName}
                                        userEmail={userEmail}
                                        userImage={userImage}
                                        ordersCount={orders.length}
                                        totalSpent={totalSpent}
                                    />
                                )}
                            </motion.div>
                        </AnimatePresence>
                    </main>
                </div>
            </div>


        </div>
    );
}

/* ═══════════════════════════════════════════════════════════
   TAB: Overview
   ═══════════════════════════════════════════════════════════ */
function OverviewTab({
    userName,
    orders,
    totalSpent,
    onViewOrders,
    onViewServices,
}: {
    userName: string;
    orders: OrderItem[];
    totalSpent: number;
    onViewOrders: () => void;
    onViewServices: () => void;
}) {
    const stats = [
        {
            label: "Total Orders",
            value: orders.length,
            icon: FiPackage,
            color: "from-blue-500 to-cyan-400",
        },
        {
            label: "In Progress",
            value: orders.filter((o) => o.status === "in_progress").length,
            icon: FiClock,
            color: "from-purple-500 to-pink-400",
        },
        {
            label: "Completed",
            value: orders.filter((o) => o.status === "completed").length,
            icon: FiCheckCircle,
            color: "from-emerald-500 to-teal-400",
        },
        {
            label: "Total Spent",
            value: `$${totalSpent.toLocaleString()}`,
            icon: FiDollarSign,
            color: "from-orange-500 to-amber-400",
        },
    ];

    return (
        <div className="space-y-6">
            {/* Welcome Card */}
            <div className="glass rounded-2xl p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-brand-600/10 to-accent-500/5 rounded-full -translate-y-12 translate-x-12 blur-2xl" />
                <h1 className="text-2xl font-bold text-white relative">
                    Welcome back,{" "}
                    <span className="gradient-text">{userName.split(" ")[0]}</span> 👋
                </h1>
                <p className="text-slate-400 mt-1 text-sm relative">
                    Here&apos;s what&apos;s happening with your projects
                </p>
                <div className="flex gap-3 mt-4 relative">
                    <button
                        onClick={onViewServices}
                        className="px-4 py-2 text-sm font-medium gradient-brand text-white rounded-lg hover:opacity-90 transition-opacity"
                    >
                        Browse Services
                    </button>
                    <button
                        onClick={onViewOrders}
                        className="px-4 py-2 text-sm font-medium text-slate-300 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-all"
                    >
                        View Orders
                    </button>
                </div>
            </div>

            {/* Stats */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {stats.map((stat, i) => (
                    <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.08 }}
                        className="glass rounded-xl p-5"
                    >
                        <div className="flex justify-between items-start">
                            <div>
                                <p className="text-slate-400 text-xs mb-1">{stat.label}</p>
                                <p className="text-xl font-bold text-white">{stat.value}</p>
                            </div>
                            <div
                                className={`w-9 h-9 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center`}
                            >
                                <stat.icon size={16} className="text-white" />
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Recent Activity */}
            <div className="glass rounded-xl p-6">
                <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <FiTrendingUp className="text-brand-400" size={18} />
                    Recent Activity
                </h2>
                {orders.length === 0 ? (
                    <div className="text-center py-8">
                        <p className="text-slate-500 text-sm">No activity yet</p>
                        <button
                            onClick={onViewServices}
                            className="text-brand-400 hover:text-brand-300 text-sm font-medium mt-2 inline-block"
                        >
                            Browse services to get started →
                        </button>
                    </div>
                ) : (
                    <div className="space-y-3">
                        {orders.slice(0, 5).map((order) => (
                            <div
                                key={order.id}
                                className="flex items-center justify-between gap-3 p-3 rounded-lg bg-white/[0.02] border border-white/5 group hover:bg-white/[0.04] transition-colors"
                            >
                                <div className="flex items-center gap-3 min-w-0">
                                    <div
                                        className={`w-2 h-2 rounded-full ${order.status === "completed"
                                            ? "bg-green-400"
                                            : order.status === "in_progress"
                                                ? "bg-purple-400"
                                                : order.status === "cancelled"
                                                    ? "bg-red-400"
                                                    : "bg-yellow-400"
                                            }`}
                                    />
                                    <div className="min-w-0">
                                        <p className="text-white text-sm font-medium truncate">
                                            {order.serviceName}
                                        </p>
                                        <p className="text-slate-500 text-xs">
                                            {new Date(order.createdAt).toLocaleDateString("en-US", {
                                                month: "short",
                                                day: "numeric",
                                            })}
                                        </p>
                                    </div>
                                </div>
                                <span
                                    className={`px-2 py-0.5 rounded-md text-xs font-medium border shrink-0 ${statusColors[order.status] || statusColors.pending}`}
                                >
                                    {statusLabels[order.status] || order.status}
                                </span>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

/* ═══════════════════════════════════════════════════════════
   TAB: Services
   ═══════════════════════════════════════════════════════════ */
function ServicesTab({
    services,
    categories,
    categoryFilter,
    setCategoryFilter,
    onRequest,
}: {
    services: ServiceItem[];
    categories: string[];
    categoryFilter: string;
    setCategoryFilter: (c: string) => void;
    onRequest: (s: ServiceItem) => void;
}) {
    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-bold text-white">Service Catalog</h1>
                <p className="text-slate-400 text-sm mt-1">
                    Browse and request from our full range of services
                </p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
                <button
                    onClick={() => setCategoryFilter("all")}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${categoryFilter === "all"
                        ? "gradient-brand text-white shadow-lg shadow-brand-600/20"
                        : "bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 border border-white/5"
                        }`}
                >
                    All Services
                </button>
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setCategoryFilter(cat)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${categoryFilter === cat
                            ? "gradient-brand text-white shadow-lg shadow-brand-600/20"
                            : "bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 border border-white/5"
                            }`}
                    >
                        {categoryLabels[cat] || cat}
                    </button>
                ))}
            </div>

            {/* Service Cards Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {services.map((service, i) => (
                    <motion.div
                        key={service.id}
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.04 }}
                        className="glass rounded-xl p-5 group hover:border-brand-500/20 transition-all border border-transparent"
                    >
                        {/* Category Badge */}
                        <div className="flex items-center justify-between mb-3">
                            <span
                                className={`px-2.5 py-1 rounded-md text-xs font-medium bg-gradient-to-r ${categoryColors[service.category] || "from-slate-500 to-slate-400"} text-white`}
                            >
                                {categoryLabels[service.category] || service.category}
                            </span>
                        </div>

                        {/* Name & Description */}
                        <h3 className="text-white font-semibold mb-2 group-hover:text-brand-300 transition-colors">
                            {service.name}
                        </h3>
                        <p className="text-slate-500 text-sm leading-relaxed mb-4 line-clamp-2">
                            {service.description}
                        </p>

                        {/* Price & CTA */}
                        <div className="flex items-end justify-between pt-3 border-t border-white/5">
                            <div>
                                <span className="text-2xl font-bold text-white">
                                    ${service.price}
                                </span>
                                <span className="text-slate-500 text-sm ml-1">
                                    {pricingLabels[service.pricingModel]}
                                </span>
                            </div>
                            <button
                                onClick={() => onRequest(service)}
                                className="px-3 py-2 text-xs font-semibold text-brand-400 bg-brand-600/10 border border-brand-500/20 rounded-lg hover:bg-brand-600/20 hover:text-brand-300 transition-all flex items-center gap-1.5"
                            >
                                Request <FiChevronRight size={12} />
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

/* ═══════════════════════════════════════════════════════════
   TAB: Orders
   ═══════════════════════════════════════════════════════════ */
function OrdersTab({
    orders,
    expandedOrder,
    setExpandedOrder,
    onBrowse,
}: {
    orders: OrderItem[];
    expandedOrder: string | null;
    setExpandedOrder: (id: string | null) => void;
    onBrowse: () => void;
}) {
    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-bold text-white">My Orders</h1>
                <p className="text-slate-400 text-sm mt-1">
                    Track the progress of your projects
                </p>
            </div>

            {orders.length === 0 ? (
                <div className="glass rounded-xl p-12 text-center">
                    <FiPackage className="mx-auto text-slate-600 mb-3" size={48} />
                    <p className="text-slate-400 text-lg font-medium mb-1">
                        No orders yet
                    </p>
                    <p className="text-slate-500 text-sm mb-4">
                        Browse our services and place your first order
                    </p>
                    <button
                        onClick={onBrowse}
                        className="px-5 py-2.5 gradient-brand text-white font-semibold rounded-lg hover:opacity-90 transition-opacity text-sm"
                    >
                        Browse Services
                    </button>
                </div>
            ) : (
                <div className="space-y-4">
                    {orders.map((order, i) => {
                        const isExpanded = expandedOrder === order.id;
                        const currentStep = statusSteps.indexOf(order.status);
                        const isCancelled = order.status === "cancelled";

                        return (
                            <motion.div
                                key={order.id}
                                initial={{ opacity: 0, y: 12 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.05 }}
                                className="glass rounded-xl overflow-hidden"
                            >
                                {/* Order Header */}
                                <button
                                    onClick={() =>
                                        setExpandedOrder(isExpanded ? null : order.id)
                                    }
                                    className="w-full p-5 flex items-center justify-between gap-4 hover:bg-white/[0.02] transition-colors text-left"
                                >
                                    <div className="flex items-center gap-4 min-w-0">
                                        <div
                                            className={`w-10 h-10 rounded-lg flex items-center justify-center ${isCancelled
                                                ? "bg-red-500/10"
                                                : order.status === "completed"
                                                    ? "bg-green-500/10"
                                                    : "bg-brand-600/10"
                                                }`}
                                        >
                                            {isCancelled ? (
                                                <FiAlertCircle className="text-red-400" size={18} />
                                            ) : order.status === "completed" ? (
                                                <FiCheckCircle className="text-green-400" size={18} />
                                            ) : (
                                                <FiPackage className="text-brand-400" size={18} />
                                            )}
                                        </div>
                                        <div className="min-w-0">
                                            <p className="text-white font-semibold text-sm truncate">
                                                {order.serviceName}
                                            </p>
                                            <p className="text-slate-500 text-xs">
                                                Ordered{" "}
                                                {new Date(order.createdAt).toLocaleDateString("en-US", {
                                                    month: "short",
                                                    day: "numeric",
                                                    year: "numeric",
                                                })}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4 shrink-0">
                                        <span className="text-white font-semibold text-sm">
                                            ${order.totalAmount}
                                        </span>
                                        <span
                                            className={`px-2.5 py-1 rounded-md text-xs font-medium border ${statusColors[order.status] || statusColors.pending}`}
                                        >
                                            {statusLabels[order.status] || order.status}
                                        </span>
                                        <motion.div
                                            animate={{ rotate: isExpanded ? 90 : 0 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <FiChevronRight className="text-slate-500" size={16} />
                                        </motion.div>
                                    </div>
                                </button>

                                {/* Expanded Details */}
                                <AnimatePresence>
                                    {isExpanded && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.25 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-5 pb-5 pt-0 border-t border-white/5">
                                                {/* Progress Stepper */}
                                                {!isCancelled && (
                                                    <div className="py-5">
                                                        <div className="flex items-center justify-between">
                                                            {statusSteps.map((step, idx) => {
                                                                const isActive = idx <= currentStep;
                                                                const isCurrent = idx === currentStep;
                                                                return (
                                                                    <div
                                                                        key={step}
                                                                        className="flex items-center flex-1"
                                                                    >
                                                                        <div className="flex flex-col items-center">
                                                                            <div
                                                                                className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${isCurrent
                                                                                    ? "bg-brand-500 text-white ring-4 ring-brand-500/20"
                                                                                    : isActive
                                                                                        ? "bg-green-500 text-white"
                                                                                        : "bg-white/10 text-slate-500"
                                                                                    }`}
                                                                            >
                                                                                {isActive && idx < currentStep
                                                                                    ? "✓"
                                                                                    : idx + 1}
                                                                            </div>
                                                                            <p
                                                                                className={`text-xs mt-1.5 text-center ${isActive
                                                                                    ? "text-white"
                                                                                    : "text-slate-600"
                                                                                    }`}
                                                                            >
                                                                                {statusLabels[step]}
                                                                            </p>
                                                                        </div>
                                                                        {idx < statusSteps.length - 1 && (
                                                                            <div
                                                                                className={`flex-1 h-0.5 mx-2 mt-[-16px] rounded-full ${idx < currentStep
                                                                                    ? "bg-green-500"
                                                                                    : "bg-white/10"
                                                                                    }`}
                                                                            />
                                                                        )}
                                                                    </div>
                                                                );
                                                            })}
                                                        </div>
                                                    </div>
                                                )}

                                                {/* Details Grid */}
                                                <div className="grid sm:grid-cols-2 gap-4 mt-2">
                                                    {order.requirements && (
                                                        <div className="sm:col-span-2 bg-white/[0.02] rounded-lg p-3">
                                                            <p className="text-slate-500 text-xs mb-1">
                                                                Requirements
                                                            </p>
                                                            <p className="text-slate-300 text-sm">
                                                                {order.requirements}
                                                            </p>
                                                        </div>
                                                    )}
                                                    {order.notes && (
                                                        <div className="sm:col-span-2 bg-brand-600/5 border border-brand-500/10 rounded-lg p-3">
                                                            <p className="text-brand-400 text-xs mb-1">
                                                                Admin Notes
                                                            </p>
                                                            <p className="text-slate-300 text-sm">
                                                                {order.notes}
                                                            </p>
                                                        </div>
                                                    )}
                                                    {order.deadline && (
                                                        <div className="bg-white/[0.02] rounded-lg p-3">
                                                            <p className="text-slate-500 text-xs mb-1">
                                                                Deadline
                                                            </p>
                                                            <p className="text-white text-sm font-medium">
                                                                {new Date(order.deadline).toLocaleDateString(
                                                                    "en-US",
                                                                    {
                                                                        month: "long",
                                                                        day: "numeric",
                                                                        year: "numeric",
                                                                    }
                                                                )}
                                                            </p>
                                                        </div>
                                                    )}
                                                    <div className="bg-white/[0.02] rounded-lg p-3">
                                                        <p className="text-slate-500 text-xs mb-1">
                                                            Payment
                                                        </p>
                                                        <p
                                                            className={`text-sm font-medium ${order.paymentStatus === "succeeded"
                                                                ? "text-green-400"
                                                                : "text-yellow-400"
                                                                }`}
                                                        >
                                                            {order.paymentStatus === "succeeded"
                                                                ? "Paid"
                                                                : "Pending"}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}

/* ═══════════════════════════════════════════════════════════
   TAB: Profile
   ═══════════════════════════════════════════════════════════ */
function ProfileTab({
    userName,
    userEmail,
    userImage,
    ordersCount,
    totalSpent,
}: {
    userName: string;
    userEmail: string;
    userImage: string | null;
    ordersCount: number;
    totalSpent: number;
}) {
    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-bold text-white">Profile</h1>
                <p className="text-slate-400 text-sm mt-1">Your account details</p>
            </div>

            <div className="glass rounded-2xl p-8">
                <div className="flex flex-col sm:flex-row items-center gap-6">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-brand-500 to-accent-500 flex items-center justify-center text-white font-bold text-4xl overflow-hidden ring-4 ring-brand-500/20">
                        {userImage ? (
                            <img
                                src={userImage}
                                alt=""
                                className="w-full h-full object-cover"
                            />
                        ) : (
                            userName.charAt(0).toUpperCase()
                        )}
                    </div>
                    <div className="text-center sm:text-left">
                        <h2 className="text-2xl font-bold text-white">{userName}</h2>
                        <p className="text-slate-400">{userEmail}</p>
                        <span className="inline-block mt-2 px-3 py-1 rounded-full text-xs font-medium bg-brand-600/10 text-brand-400 border border-brand-500/20">
                            Client
                        </span>
                    </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 mt-8 pt-6 border-t border-white/5">
                    <div className="bg-white/[0.03] rounded-xl p-5">
                        <p className="text-slate-500 text-sm">Total Orders</p>
                        <p className="text-3xl font-bold text-white mt-1">{ordersCount}</p>
                    </div>
                    <div className="bg-white/[0.03] rounded-xl p-5">
                        <p className="text-slate-500 text-sm">Total Spent</p>
                        <p className="text-3xl font-bold text-white mt-1">
                            ${totalSpent.toLocaleString()}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
