"use client";

import { useState, useEffect, useRef } from "react";
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
    FiMessageSquare,
    FiPrinter,
    FiFileText,
    FiCheck,
    FiRefreshCw,
    FiShield,
    FiArrowDown,
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

interface ChatMessageItem {
    id: string;
    senderId: string;
    receiverId: string | null;
    orderId: string | null;
    message: string;
    senderRole: string;
    senderName: string;
    isRead: boolean;
    createdAt: string;
    order?: {
        id: string;
        serviceName: string;
        status: string;
    } | null;
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
    { id: "chat", label: "Messages & Support", icon: FiMessageSquare },
    { id: "profile", label: "Profile", icon: FiUser },
];

const categoryLabels: Record<string, string> = {
    "software-engineering": "Software Eng (NIC 62011)",
    "web-platforms": "Web Platforms (NIC 62012)",
    "infrastructure": "IT Infrastructure (NIC 62013)",
    "it-consultancy": "IT Consultancy (NIC 62020)",
    "ai-modernization": "Autonomous AI (NIC 62099)",
    "cloud-hosting": "Cloud & Data (NIC 63119)",
    "web-portals": "Web Portals (NIC 63121)",
    "social-media": "Social Media",
    platform: "Platform",
    "web-tech": "Web & Tech",
    creative: "Creative",
};

const categoryColors: Record<string, string> = {
    "software-engineering": "from-blue-600 to-cyan-400",
    "web-platforms": "from-emerald-600 to-teal-400",
    "infrastructure": "from-cyan-600 to-blue-500",
    "it-consultancy": "from-indigo-600 to-violet-500",
    "ai-modernization": "from-purple-600 to-pink-500",
    "cloud-hosting": "from-amber-600 to-orange-400",
    "web-portals": "from-teal-600 to-emerald-400",
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
    const [selectedChatOrderId, setSelectedChatOrderId] = useState<string | null>(null);
    const [invoiceOrder, setInvoiceOrder] = useState<OrderItem | null>(null);
    const [unreadChatCount, setUnreadChatCount] = useState(0);

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

    function openChatForOrder(orderId: string) {
        setSelectedChatOrderId(orderId);
        setActiveTab("chat");
    }

    // Polling unread count
    useEffect(() => {
        let mounted = true;
        const fetchUnread = async () => {
            try {
                const res = await fetch("/api/chat");
                const data = await res.json();
                if (mounted && data.success) {
                    setUnreadChatCount(data.unreadCount || 0);
                }
            } catch {
                /* non-blocking */
            }
        };
        fetchUnread();
        const interval = setInterval(fetchUnread, 15000);
        return () => {
            mounted = false;
            clearInterval(interval);
        };
    }, []);

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

            {/* Official Invoice Modal */}
            <AnimatePresence>
                {invoiceOrder && (
                    <InvoiceModal
                        order={invoiceOrder}
                        userName={userName}
                        userEmail={userEmail}
                        onClose={() => setInvoiceOrder(null)}
                    />
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
                                    <span className="inline-block mt-1 text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-brand-500/10 text-brand-300 border border-brand-500/20">
                                        Verified Client
                                    </span>
                                </div>
                            </div>

                            {/* Nav */}
                            <nav className="space-y-1">
                                {tabs.map((tab) => (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id)}
                                        className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                                            activeTab === tab.id
                                                ? "bg-brand-600/15 text-brand-400 shadow-sm"
                                                : "text-slate-400 hover:text-white hover:bg-white/5"
                                        }`}
                                    >
                                        <tab.icon size={16} />
                                        <span>{tab.label}</span>
                                        {tab.id === "orders" && orders.length > 0 && (
                                            <span className="ml-auto text-xs bg-white/10 px-2 py-0.5 rounded-full">
                                                {orders.length}
                                            </span>
                                        )}
                                        {tab.id === "chat" && unreadChatCount > 0 && (
                                            <span className="ml-auto text-xs bg-brand-500 text-white font-bold px-2 py-0.5 rounded-full animate-pulse">
                                                {unreadChatCount}
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
                                        onOpenChat={openChatForOrder}
                                        onViewInvoice={(ord) => setInvoiceOrder(ord)}
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
                                        onOpenChat={openChatForOrder}
                                        onViewInvoice={(ord) => setInvoiceOrder(ord)}
                                    />
                                )}
                                {activeTab === "chat" && (
                                    <ChatTab
                                        orders={orders}
                                        initialOrderId={selectedChatOrderId}
                                        onClearUnread={() => setUnreadChatCount(0)}
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
    onOpenChat,
    onViewInvoice,
}: {
    userName: string;
    orders: OrderItem[];
    totalSpent: number;
    onViewOrders: () => void;
    onViewServices: () => void;
    onOpenChat: (orderId: string) => void;
    onViewInvoice: (order: OrderItem) => void;
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
            label: "Total Committed",
            value: `₹${totalSpent.toLocaleString()}`,
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
                    Here&apos;s the live status of your engineering deliverables and communications.
                </p>
                <div className="flex flex-wrap gap-3 mt-4 relative">
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
                    {orders.length > 0 && (
                        <button
                            onClick={() => onOpenChat(orders[0].id)}
                            className="px-4 py-2 text-sm font-medium text-brand-300 bg-brand-500/10 border border-brand-500/25 rounded-lg hover:bg-brand-500/20 transition-all flex items-center gap-2"
                        >
                            <FiMessageSquare size={14} />
                            Chat with Lead Engineer
                        </button>
                    )}
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

            {/* Recent Orders with Quick Actions */}
            <div className="glass rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-semibold text-white flex items-center gap-2">
                        <FiTrendingUp className="text-brand-400" size={18} />
                        Active Project Pipelines
                    </h2>
                    {orders.length > 0 && (
                        <button
                            onClick={onViewOrders}
                            className="text-xs text-brand-400 hover:text-brand-300 font-semibold"
                        >
                            View All ({orders.length}) →
                        </button>
                    )}
                </div>

                {orders.length === 0 ? (
                    <div className="text-center py-8">
                        <p className="text-slate-500 text-sm">No active projects yet</p>
                        <button
                            onClick={onViewServices}
                            className="text-brand-400 hover:text-brand-300 text-sm font-medium mt-2 inline-block"
                        >
                            Browse services to get started →
                        </button>
                    </div>
                ) : (
                    <div className="space-y-3">
                        {orders.slice(0, 4).map((order) => (
                            <div
                                key={order.id}
                                className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                            >
                                <div className="flex items-center gap-3 min-w-0">
                                    <div
                                        className={`w-3 h-3 rounded-full shrink-0 ${
                                            order.status === "completed"
                                                ? "bg-green-400"
                                                : order.status === "in_progress"
                                                ? "bg-purple-400 animate-pulse"
                                                : order.status === "cancelled"
                                                ? "bg-red-400"
                                                : "bg-yellow-400"
                                        }`}
                                    />
                                    <div className="min-w-0">
                                        <p className="text-white text-sm font-semibold truncate">
                                            {order.serviceName}
                                        </p>
                                        <p className="text-slate-500 text-xs">
                                            ₹{order.totalAmount.toLocaleString()} • Ordered{" "}
                                            {new Date(order.createdAt).toLocaleDateString("en-US", {
                                                month: "short",
                                                day: "numeric",
                                                year: "numeric",
                                            })}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2 shrink-0">
                                    <span
                                        className={`px-2.5 py-1 rounded-md text-xs font-medium border ${
                                            statusColors[order.status] || statusColors.pending
                                        }`}
                                    >
                                        {statusLabels[order.status] || order.status}
                                    </span>

                                    <button
                                        onClick={() => onOpenChat(order.id)}
                                        className="px-3 py-1.5 text-xs font-semibold text-brand-300 bg-brand-500/10 border border-brand-500/20 rounded-lg hover:bg-brand-500/20 transition-all flex items-center gap-1.5"
                                        title="Chat about this order"
                                    >
                                        <FiMessageSquare size={13} />
                                        Chat
                                    </button>

                                    <button
                                        onClick={() => onViewInvoice(order)}
                                        className="px-3 py-1.5 text-xs font-semibold text-slate-300 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-all flex items-center gap-1.5"
                                        title="View official MSME invoice"
                                    >
                                        <FiFileText size={13} />
                                        Invoice
                                    </button>
                                </div>
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
                <h1 className="text-2xl font-bold text-white">Engineering & IT Catalog</h1>
                <p className="text-slate-400 text-sm mt-1">
                    Select a verified digital engineering solution with instant checkout and dedicated SLA.
                </p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
                <button
                    onClick={() => setCategoryFilter("all")}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                        categoryFilter === "all"
                            ? "gradient-brand text-white shadow-lg shadow-brand-600/20"
                            : "bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 border border-white/5"
                    }`}
                >
                    All Services ({services.length})
                </button>
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setCategoryFilter(cat)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                            categoryFilter === cat
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
                        className="glass rounded-xl p-5 group hover:border-brand-500/20 transition-all border border-transparent flex flex-col justify-between"
                    >
                        <div>
                            {/* Category Badge */}
                            <div className="flex items-center justify-between mb-3">
                                <span
                                    className={`px-2.5 py-1 rounded-md text-xs font-medium bg-gradient-to-r ${
                                        categoryColors[service.category] || "from-slate-500 to-slate-400"
                                    } text-white`}
                                >
                                    {categoryLabels[service.category] || service.category}
                                </span>
                            </div>

                            {/* Name & Description */}
                            <h3 className="text-white font-semibold mb-2 group-hover:text-brand-300 transition-colors">
                                {service.name}
                            </h3>
                            <p className="text-slate-400 text-xs leading-relaxed mb-4 line-clamp-3">
                                {service.description}
                            </p>
                        </div>

                        {/* Price & CTA */}
                        <div className="flex items-end justify-between pt-3 border-t border-white/5">
                            <div>
                                <span className="text-2xl font-bold text-white">
                                    ₹{service.price.toLocaleString()}
                                </span>
                                <span className="text-slate-500 text-xs ml-1">
                                    {pricingLabels[service.pricingModel] || "One-time"}
                                </span>
                            </div>
                            <button
                                onClick={() => onRequest(service)}
                                className="px-3.5 py-2 text-xs font-semibold text-brand-300 bg-brand-600/15 border border-brand-500/30 rounded-lg hover:bg-brand-600/25 hover:text-white transition-all flex items-center gap-1.5 shadow-sm"
                            >
                                Book Online <FiChevronRight size={13} />
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
    onOpenChat,
    onViewInvoice,
}: {
    orders: OrderItem[];
    expandedOrder: string | null;
    setExpandedOrder: (id: string | null) => void;
    onBrowse: () => void;
    onOpenChat: (orderId: string) => void;
    onViewInvoice: (order: OrderItem) => void;
}) {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-white">My Projects & Orders</h1>
                    <p className="text-slate-400 text-sm mt-1">
                        Track progress milestones, deadlines, and project details.
                    </p>
                </div>
                <button
                    onClick={onBrowse}
                    className="px-4 py-2 gradient-brand text-white font-semibold rounded-lg hover:opacity-90 transition-opacity text-xs"
                >
                    + Book New Project
                </button>
            </div>

            {orders.length === 0 ? (
                <div className="glass rounded-xl p-12 text-center">
                    <FiPackage className="mx-auto text-slate-600 mb-3" size={48} />
                    <p className="text-slate-400 text-lg font-medium mb-1">
                        No orders registered yet
                    </p>
                    <p className="text-slate-500 text-sm mb-4">
                        Explore our engineering offerings and initialize your first milestone.
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
                                className="glass rounded-xl overflow-hidden border border-white/5"
                            >
                                {/* Order Header */}
                                <div className="p-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
                                    <div
                                        onClick={() =>
                                            setExpandedOrder(isExpanded ? null : order.id)
                                        }
                                        className="flex items-center gap-4 min-w-0 cursor-pointer flex-1"
                                    >
                                        <div
                                            className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${
                                                isCancelled
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
                                                Order #{order.id.slice(-8).toUpperCase()} • Ordered{" "}
                                                {new Date(order.createdAt).toLocaleDateString("en-US", {
                                                    month: "short",
                                                    day: "numeric",
                                                    year: "numeric",
                                                })}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3 shrink-0">
                                        <span className="text-white font-bold text-sm">
                                            ₹{order.totalAmount.toLocaleString()}
                                        </span>
                                        <span
                                            className={`px-2.5 py-1 rounded-md text-xs font-medium border ${
                                                statusColors[order.status] || statusColors.pending
                                            }`}
                                        >
                                            {statusLabels[order.status] || order.status}
                                        </span>

                                        <button
                                            type="button"
                                            onClick={() => onOpenChat(order.id)}
                                            className="px-3 py-1.5 text-xs font-semibold text-brand-300 bg-brand-500/10 border border-brand-500/25 rounded-lg hover:bg-brand-500/20 transition-all flex items-center gap-1.5"
                                        >
                                            <FiMessageSquare size={13} />
                                            Live Chat
                                        </button>

                                        <button
                                            type="button"
                                            onClick={() => onViewInvoice(order)}
                                            className="px-3 py-1.5 text-xs font-semibold text-slate-300 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-all flex items-center gap-1.5"
                                        >
                                            <FiFileText size={13} />
                                            Invoice
                                        </button>

                                        <button
                                            type="button"
                                            onClick={() =>
                                                setExpandedOrder(isExpanded ? null : order.id)
                                            }
                                            className="p-1.5 text-slate-400 hover:text-white"
                                        >
                                            <motion.div
                                                animate={{ rotate: isExpanded ? 90 : 0 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                <FiChevronRight size={18} />
                                            </motion.div>
                                        </button>
                                    </div>
                                </div>

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
                                                                                className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                                                                                    isCurrent
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
                                                                                className={`text-xs mt-1.5 text-center ${
                                                                                    isActive
                                                                                        ? "text-white"
                                                                                        : "text-slate-600"
                                                                                }`}
                                                                            >
                                                                                {statusLabels[step]}
                                                                            </p>
                                                                        </div>
                                                                        {idx < statusSteps.length - 1 && (
                                                                            <div
                                                                                className={`flex-1 h-0.5 mx-2 mt-[-16px] rounded-full ${
                                                                                    idx < currentStep
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
                                                                Project Brief & Specifications
                                                            </p>
                                                            <p className="text-slate-300 text-sm">
                                                                {order.requirements}
                                                            </p>
                                                        </div>
                                                    )}
                                                    {order.notes && (
                                                        <div className="sm:col-span-2 bg-brand-600/5 border border-brand-500/10 rounded-lg p-3">
                                                            <p className="text-brand-400 text-xs mb-1">
                                                                Admin / Technical Lead Notes
                                                            </p>
                                                            <p className="text-slate-300 text-sm">
                                                                {order.notes}
                                                            </p>
                                                        </div>
                                                    )}
                                                    {order.deadline && (
                                                        <div className="bg-white/[0.02] rounded-lg p-3">
                                                            <p className="text-slate-500 text-xs mb-1">
                                                                Estimated Completion Target
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
                                                            Payment Settlement
                                                        </p>
                                                        <p
                                                            className={`text-sm font-medium ${
                                                                order.paymentStatus === "succeeded"
                                                                    ? "text-green-400"
                                                                    : "text-yellow-400"
                                                            }`}
                                                        >
                                                            {order.paymentStatus === "succeeded"
                                                                ? "Paid & Settled (Verified)"
                                                                : "Pending / Gateway Verification"}
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
   TAB: Live Chat & Status Tracking
   ═══════════════════════════════════════════════════════════ */
function ChatTab({
    orders,
    initialOrderId,
    onClearUnread,
}: {
    orders: OrderItem[];
    initialOrderId: string | null;
    onClearUnread: () => void;
}) {
    const [selectedOrderId, setSelectedOrderId] = useState<string | null>(initialOrderId);
    const [messages, setMessages] = useState<ChatMessageItem[]>([]);
    const [newMessage, setNewMessage] = useState("");
    const [loading, setLoading] = useState(true);
    const [sending, setSending] = useState(false);
    const [showScrollBottom, setShowScrollBottom] = useState(false);

    const chatContainerRef = useRef<HTMLDivElement>(null);
    const isUserNearBottomRef = useRef(true);
    const prevMsgCountRef = useRef(0);
    const isInitialLoadRef = useRef(true);

    const selectedOrder = orders.find((o) => o.id === selectedOrderId);

    // Isolated Container Scroll: NEVER hijacks window or parent page scroll
    const scrollToBottom = (instant = false) => {
        const el = chatContainerRef.current;
        if (!el) return;
        if (instant) {
            el.scrollTop = el.scrollHeight;
        } else {
            el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
        }
    };

    const handleContainerScroll = () => {
        const el = chatContainerRef.current;
        if (!el) return;
        const distanceToBottom = el.scrollHeight - el.scrollTop - el.clientHeight;
        const atBottom = distanceToBottom < 70;
        isUserNearBottomRef.current = atBottom;
        setShowScrollBottom(!atBottom && el.scrollHeight > el.clientHeight + 100);
    };

    const fetchMessages = async (showLoading = false) => {
        if (showLoading) setLoading(true);
        try {
            const url = selectedOrderId
                ? `/api/chat?orderId=${selectedOrderId}`
                : `/api/chat`;
            const res = await fetch(url);
            const data = await res.json();
            if (data.success) {
                const newMsgs: ChatMessageItem[] = data.messages || [];
                setMessages((prev) => {
                    // Strict equality check: prevent re-renders & scroll jumps if identical
                    if (
                        prev.length === newMsgs.length &&
                        prev.every((m, idx) => m.id === newMsgs[idx]?.id)
                    ) {
                        return prev;
                    }
                    return newMsgs;
                });

                // Non-blocking read mark
                fetch("/api/chat/read", { method: "PATCH" }).catch(() => {});
                onClearUnread();
            }
        } catch {
            /* non-blocking */
        } finally {
            if (showLoading) setLoading(false);
        }
    };

    // When order focus changes, re-fetch and reset initial load trigger
    useEffect(() => {
        isInitialLoadRef.current = true;
        fetchMessages(true);
        const interval = setInterval(() => fetchMessages(false), 4000);
        return () => clearInterval(interval);
    }, [selectedOrderId]);

    // Smart scroll effect: only scrolls on initial mount or when user is already at the bottom
    useEffect(() => {
        if (isInitialLoadRef.current) {
            scrollToBottom(true);
            isInitialLoadRef.current = false;
        } else if (messages.length > prevMsgCountRef.current) {
            if (isUserNearBottomRef.current) {
                scrollToBottom(false);
            }
        }
        prevMsgCountRef.current = messages.length;
    }, [messages]);

    const handleSendMessage = async (textToSend?: string) => {
        const text = (textToSend || newMessage).trim();
        if (!text || sending) return;

        setSending(true);
        try {
            const res = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    message: text,
                    orderId: selectedOrderId || undefined,
                }),
            });
            const data = await res.json();
            if (data.success && data.message) {
                setMessages((prev) => [...prev, data.message]);
                if (!textToSend) setNewMessage("");
                // User explicitly sent message -> immediately scroll container down
                setTimeout(() => scrollToBottom(false), 60);
            }
        } catch {
            /* error */
        } finally {
            setSending(false);
        }
    };

    // Quick inquiry templates
    const quickPrompts = [
        "What is the current delivery status?",
        "Please share the staging deployment link.",
        "Can we schedule a brief architectural review?",
        "Everything looks great, approved for next sprint!",
    ];

    const getProgressPercentage = (status: string) => {
        switch (status) {
            case "pending":
                return 25;
            case "confirmed":
                return 50;
            case "in_progress":
                return 75;
            case "completed":
                return 100;
            default:
                return 10;
        }
    };

    return (
        <div className="space-y-4">
            <div>
                <h1 className="text-2xl font-bold text-white flex items-center gap-2">
                    <FiMessageSquare className="text-brand-400" />
                    Engineering Communications & Status
                </h1>
                <p className="text-slate-400 text-sm mt-1">
                    Direct real-time channel with Softcorp&apos;s lead engineers and administration team.
                </p>
            </div>

            {/* Order Context Selector */}
            <div className="flex flex-wrap items-center gap-2 p-3 bg-white/5 border border-white/10 rounded-xl text-xs">
                <span className="text-slate-400 font-medium">Conversation Focus:</span>
                <motion.button
                    whileTap={{ scale: 0.96 }}
                    onClick={() => setSelectedOrderId(null)}
                    className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                        selectedOrderId === null
                            ? "bg-brand-500 text-white shadow-sm"
                            : "bg-white/5 text-slate-300 hover:text-white"
                    }`}
                >
                    General Inquiries
                </motion.button>
                {orders.map((o) => (
                    <motion.button
                        key={o.id}
                        whileTap={{ scale: 0.96 }}
                        onClick={() => setSelectedOrderId(o.id)}
                        className={`px-3 py-1.5 rounded-lg font-medium transition-all truncate max-w-xs ${
                            selectedOrderId === o.id
                                ? "bg-brand-500 text-white shadow-sm"
                                : "bg-white/5 text-slate-300 hover:text-white"
                        }`}
                    >
                        {o.serviceName} ({statusLabels[o.status] || o.status})
                    </motion.button>
                ))}
            </div>

            {/* Order Live Status Telemetry Banner (If an order is selected) */}
            <AnimatePresence mode="wait">
                {selectedOrder && (
                    <motion.div
                        key={selectedOrder.id}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="glass rounded-xl p-4 border border-brand-500/25 bg-brand-950/25 relative overflow-hidden shadow-lg"
                    >
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                            <div>
                                <div className="flex items-center gap-2">
                                    <span className="text-white font-bold text-sm">
                                        {selectedOrder.serviceName}
                                    </span>
                                    <span
                                        className={`px-2 py-0.5 rounded text-[11px] font-semibold border flex items-center gap-1.5 ${
                                            statusColors[selectedOrder.status] || statusColors.pending
                                        }`}
                                    >
                                        <span className="relative flex h-2 w-2">
                                            {selectedOrder.status === "in_progress" && (
                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75" />
                                            )}
                                            <span
                                                className={`relative inline-flex rounded-full h-2 w-2 ${
                                                    selectedOrder.status === "completed"
                                                        ? "bg-green-400"
                                                        : selectedOrder.status === "in_progress"
                                                        ? "bg-purple-400"
                                                        : "bg-yellow-400"
                                                }`}
                                            />
                                        </span>
                                        {statusLabels[selectedOrder.status] || selectedOrder.status}
                                    </span>
                                </div>
                                <p className="text-slate-400 text-xs mt-0.5">
                                    Order #{selectedOrder.id.slice(-8).toUpperCase()} • Value: ₹{selectedOrder.totalAmount.toLocaleString()} • Settlement: {selectedOrder.paymentStatus}
                                </p>
                            </div>
                            <div className="text-right">
                                <span className="text-xs text-brand-300 font-semibold">
                                    Milestone Progress: {getProgressPercentage(selectedOrder.status)}%
                                </span>
                            </div>
                        </div>

                        {/* Progress Bar with animated sweep */}
                        <div className="w-full bg-white/10 h-2.5 rounded-full overflow-hidden relative">
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${getProgressPercentage(selectedOrder.status)}%` }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                className="h-full bg-gradient-to-r from-brand-500 via-cyan-400 to-emerald-400 rounded-full relative"
                            >
                                <div className="absolute inset-0 bg-white/20 animate-pulse" />
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Chat Frame */}
            <div className="glass rounded-2xl border border-white/10 flex flex-col h-[520px] overflow-hidden shadow-2xl relative">
                {/* Chat Header */}
                <div className="p-3.5 border-b border-white/10 bg-white/[0.02] flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-500 to-accent-500 flex items-center justify-center text-white shadow-md">
                            <FiShield size={18} />
                        </div>
                        <div>
                            <p className="text-white font-semibold text-xs sm:text-sm">
                                Softcorp Engineering & Support Team
                            </p>
                            <p className="text-slate-400 text-[11px] flex items-center gap-1.5">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                                </span>
                                Active Telemetry • MSME Registered Support
                            </p>
                        </div>
                    </div>
                    <button
                        onClick={() => fetchMessages(true)}
                        className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
                        title="Refresh Messages"
                    >
                        <FiRefreshCw size={14} />
                    </button>
                </div>

                {/* Messages Stream (Container-Scoped Scroll) */}
                <div
                    ref={chatContainerRef}
                    onScroll={handleContainerScroll}
                    className="flex-1 overflow-y-auto p-4 space-y-3.5 scroll-smooth relative"
                >
                    {loading ? (
                        <div className="flex flex-col items-center justify-center h-full text-slate-500 text-xs gap-2">
                            <div className="w-6 h-6 border-2 border-brand-500 border-t-transparent rounded-full animate-spin" />
                            Loading conversation stream...
                        </div>
                    ) : messages.length === 0 ? (
                        <div className="flex flex-col items-center justify-center h-full text-center p-6">
                            <FiMessageSquare className="text-slate-600 mb-2" size={36} />
                            <p className="text-slate-400 font-medium text-sm">No messages yet</p>
                            <p className="text-slate-500 text-xs max-w-sm mt-1">
                                Send a message below to inquire about your project milestones, request technical updates, or discuss architecture.
                            </p>
                        </div>
                    ) : (
                        messages.map((m, idx) => {
                            const isMe = m.senderRole === "client";
                            const isSystem = m.senderRole === "system";

                            if (isSystem) {
                                return (
                                    <motion.div
                                        key={m.id || idx}
                                        initial={{ opacity: 0, y: 6 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.2 }}
                                        className="flex justify-center my-2.5"
                                    >
                                        <div className="p-2 px-3.5 rounded-full bg-brand-500/10 border border-brand-500/25 text-brand-300 text-[11px] max-w-md text-center shadow-sm">
                                            {m.message}
                                        </div>
                                    </motion.div>
                                );
                            }

                            return (
                                <motion.div
                                    key={m.id || idx}
                                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    transition={{ duration: 0.2, ease: "easeOut" }}
                                    className={`flex flex-col ${isMe ? "items-end" : "items-start"}`}
                                >
                                    <div className="text-[10px] text-slate-500 mb-1 px-1 flex items-center gap-1">
                                        <span>{isMe ? "You" : m.senderName || "Softcorp Lead Engineer"}</span>
                                        <span>•</span>
                                        <span>
                                            {new Date(m.createdAt).toLocaleTimeString([], {
                                                hour: "2-digit",
                                                minute: "2-digit",
                                            })}
                                        </span>
                                        {isMe && (
                                            <span className="text-brand-400 font-bold ml-0.5">
                                                {m.isRead ? "✓✓" : "✓"}
                                            </span>
                                        )}
                                    </div>
                                    <div
                                        className={`max-w-[85%] sm:max-w-[70%] p-3.5 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                                            isMe
                                                ? "bg-gradient-to-br from-brand-600 via-brand-500 to-cyan-500 text-white rounded-tr-none shadow-md shadow-brand-600/20"
                                                : "bg-white/[0.08] backdrop-blur-md border border-white/10 text-slate-100 rounded-tl-none shadow-md hover:border-brand-500/25 transition-colors"
                                        }`}
                                    >
                                        {m.order && (
                                            <div className="mb-1.5 pb-1.5 border-b border-white/20 text-[10px] font-semibold text-brand-200">
                                                Ref: {m.order.serviceName}
                                            </div>
                                        )}
                                        <p className="whitespace-pre-wrap">{m.message}</p>
                                    </div>
                                </motion.div>
                            );
                        })
                    )}
                </div>

                {/* Floating "Scroll to Bottom" Button */}
                <AnimatePresence>
                    {showScrollBottom && (
                        <motion.button
                            initial={{ opacity: 0, y: 12, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 12, scale: 0.9 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => scrollToBottom(false)}
                            className="absolute bottom-16 right-5 z-20 px-3 py-1.5 rounded-full bg-slate-900/90 text-brand-300 border border-brand-500/35 text-xs font-semibold shadow-xl backdrop-blur-md flex items-center gap-1.5"
                        >
                            <FiArrowDown size={13} className="animate-bounce" />
                            Latest Messages
                        </motion.button>
                    )}
                </AnimatePresence>

                {/* Quick Prompts Bar */}
                <div className="px-4 py-2 bg-white/[0.01] border-t border-white/5 flex items-center gap-1.5 overflow-x-auto no-scrollbar">
                    {quickPrompts.map((prompt, i) => (
                        <motion.button
                            key={i}
                            type="button"
                            whileHover={{ scale: 1.04, y: -1 }}
                            whileTap={{ scale: 0.96 }}
                            onClick={() => handleSendMessage(prompt)}
                            disabled={sending}
                            className="px-2.5 py-1 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-brand-500/30 text-[11px] text-slate-300 whitespace-nowrap transition-colors shrink-0 disabled:opacity-50"
                        >
                            + {prompt}
                        </motion.button>
                    ))}
                </div>

                {/* Chat Composer */}
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        handleSendMessage();
                    }}
                    className="p-3 bg-white/[0.03] border-t border-white/10 flex items-center gap-2"
                >
                    <input
                        type="text"
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        placeholder={
                            selectedOrder
                                ? `Message engineering lead regarding "${selectedOrder.serviceName}"...`
                                : "Ask a question or request a status update..."
                        }
                        className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-500/50 transition-all"
                    />
                    <motion.button
                        type="submit"
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.92 }}
                        disabled={!newMessage.trim() || sending}
                        className="p-2.5 gradient-brand rounded-xl text-white font-medium hover:opacity-90 transition-all disabled:opacity-40 shadow-md shrink-0"
                        aria-label="Send message"
                    >
                        <FiSend size={16} />
                    </motion.button>
                </form>
            </div>
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
                <h1 className="text-2xl font-bold text-white">Client Account Settings</h1>
                <p className="text-slate-400 text-sm mt-1">
                    Manage your identity, authentication credentials, and billing details.
                </p>
            </div>

            <div className="glass rounded-xl p-6 border border-white/5">
                <div className="flex items-center gap-4 pb-6 border-b border-white/5">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-brand-500 to-accent-500 flex items-center justify-center text-white font-bold text-2xl overflow-hidden">
                        {userImage ? (
                            <img src={userImage} alt="" className="w-full h-full object-cover" />
                        ) : (
                            userName.charAt(0).toUpperCase()
                        )}
                    </div>
                    <div>
                        <h2 className="text-lg font-bold text-white">{userName}</h2>
                        <p className="text-slate-400 text-sm">{userEmail}</p>
                        <span className="inline-block mt-1 text-xs font-semibold px-2 py-0.5 rounded bg-brand-500/10 text-brand-300 border border-brand-500/20">
                            Enterprise Client
                        </span>
                    </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 pt-6">
                    <div className="bg-white/[0.02] rounded-lg p-4 border border-white/5">
                        <p className="text-slate-500 text-xs mb-1">Contracted Projects</p>
                        <p className="text-xl font-bold text-white">{ordersCount}</p>
                    </div>
                    <div className="bg-white/[0.02] rounded-lg p-4 border border-white/5">
                        <p className="text-slate-500 text-xs mb-1">Total Settled Volume</p>
                        <p className="text-xl font-bold text-white">₹{totalSpent.toLocaleString()}</p>
                    </div>
                </div>

                <div className="mt-6 p-4 rounded-xl bg-brand-500/5 border border-brand-500/15 text-xs text-slate-300 leading-relaxed">
                    <strong>Enterprise Settlement Protection:</strong> All commercial invoices are covered under Section 15 of the Micro, Small and Medium Enterprises Development (MSMED) Act, 2006 (Udyam Reg: <span className="text-brand-300 font-mono">UDYAM-UP-50-0298723</span>).
                </div>
            </div>
        </div>
    );
}

/* ═══════════════════════════════════════════════════════════
   MODAL: Official Softcorp MSME Tax Invoice
   ═══════════════════════════════════════════════════════════ */
function InvoiceModal({
    order,
    userName,
    userEmail,
    onClose,
}: {
    order: OrderItem;
    userName: string;
    userEmail: string;
    onClose: () => void;
}) {
    const handlePrint = () => {
        window.print();
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/80 backdrop-blur-md">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-slate-900 border border-white/20 rounded-2xl p-6 sm:p-8 max-w-2xl w-full shadow-2xl relative text-left max-h-[90vh] overflow-y-auto"
            >
                <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                    <div className="flex items-center gap-3">
                        <div className="p-2.5 bg-brand-500/10 border border-brand-500/20 rounded-xl text-brand-400">
                            <FiFileText size={22} />
                        </div>
                        <div>
                            <h2 className="text-lg font-bold text-white">Official Tax Invoice & Receipt</h2>
                            <p className="text-xs text-slate-400">Softcorp Group • Govt. of India MoMSME Registered</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <button
                            type="button"
                            onClick={handlePrint}
                            className="px-3 py-1.5 bg-white/10 hover:bg-white/15 text-white rounded-lg text-xs font-semibold transition-colors flex items-center gap-1.5"
                        >
                            <FiPrinter size={14} /> Print / Save PDF
                        </button>
                        <button
                            type="button"
                            onClick={onClose}
                            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/10"
                        >
                            <FiX size={18} />
                        </button>
                    </div>
                </div>

                {/* Printable Invoice Paper */}
                <div className="p-6 bg-slate-950/80 rounded-xl border border-white/10 space-y-6 text-xs text-slate-300">
                    {/* Header */}
                    <div className="flex justify-between items-start gap-4">
                        <div>
                            <h3 className="text-base font-bold text-white uppercase tracking-wider">SOFTCORP GROUP</h3>
                            <p className="text-slate-400 text-[11px] mt-0.5">Plot No 17/18, Gulab Ashiyana, Chinhat, Matiyari, Dewa Road</p>
                            <p className="text-slate-400 text-[11px]">Lucknow, Uttar Pradesh - 226028, India</p>
                            <p className="text-slate-400 text-[11px]">Email: contact@wesoftcorp.com | Tel: +91 91703 33177</p>
                            <p className="text-brand-300 text-[11px] font-mono mt-1 font-semibold">
                                MSME Udyam: UDYAM-UP-50-0298723
                            </p>
                        </div>
                        <div className="text-right">
                            <div className="text-xs font-bold text-white uppercase">INVOICE NUMBER</div>
                            <div className="text-sm font-mono text-brand-400 font-bold">INV-{order.id.slice(-8).toUpperCase()}</div>
                            <div className="text-[11px] text-slate-400 mt-1">
                                Date: {new Date(order.createdAt).toLocaleDateString()}
                            </div>
                            <div className="mt-1">
                                <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                                    {order.paymentStatus === "succeeded" ? "PAID & SETTLED" : "PAYMENT CONFIRMED"}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Bill To */}
                    <div className="pt-4 border-t border-white/10 grid grid-cols-2 gap-4">
                        <div>
                            <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Billed To</span>
                            <div className="font-semibold text-white mt-0.5">{userName}</div>
                            <div className="text-slate-400">{userEmail}</div>
                        </div>
                        <div>
                            <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Project Status</span>
                            <div className="font-semibold text-white mt-0.5 capitalize">{order.status.replace("_", " ")}</div>
                            <div className="text-slate-400">Order ID: {order.id}</div>
                        </div>
                    </div>

                    {/* Table */}
                    <div className="pt-2">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b border-white/10 text-slate-400 text-[11px] uppercase">
                                    <th className="py-2">Item & Description</th>
                                    <th className="py-2 text-right">Qty</th>
                                    <th className="py-2 text-right">Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-white/5">
                                    <td className="py-3">
                                        <div className="font-semibold text-white">{order.serviceName}</div>
                                        <div className="text-slate-400 text-[11px]">
                                            Digital Engineering & IT Consultancy Deliverable
                                        </div>
                                    </td>
                                    <td className="py-3 text-right">1</td>
                                    <td className="py-3 text-right font-semibold text-white">
                                        ₹{order.totalAmount.toLocaleString()}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Total Summary */}
                    <div className="flex justify-end pt-2">
                        <div className="w-64 space-y-1.5 text-right">
                            <div className="flex justify-between text-slate-400">
                                <span>Subtotal:</span>
                                <span>₹{(order.totalAmount * 0.8474).toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between text-slate-400">
                                <span>GST (18% Statutory):</span>
                                <span>₹{(order.totalAmount * 0.1526).toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between text-base font-bold text-white pt-2 border-t border-white/10">
                                <span>Total Paid:</span>
                                <span className="text-brand-300">₹{order.totalAmount.toLocaleString()}</span>
                            </div>
                        </div>
                    </div>

                    {/* Legal note */}
                    <div className="pt-4 border-t border-white/10 text-[10px] text-slate-500 text-center">
                        This is an official computer-generated receipt issued by SoftCorp Group (UDYAM-UP-50-0298723). Protected under Section 15 of MSMED Act. Thank you for partnering with Softcorp.
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
