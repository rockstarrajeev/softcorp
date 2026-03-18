"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { signOut } from "next-auth/react";
import {
    FiHome,
    FiShoppingBag,
    FiGrid,
    FiMessageSquare,
    FiUsers,
    FiLogOut,
    FiDollarSign,
    FiTrendingUp,
    FiCheck,
    FiX,
    FiMail,
    FiPhone,
    FiChevronDown,
} from "react-icons/fi";

/* ─── Types ─── */
interface OrderItem {
    id: string;
    clientName: string;
    clientEmail: string;
    serviceName: string;
    status: string;
    totalAmount: number;
    currency: string;
    requirements: string | null;
    notes: string | null;
    createdAt: string;
    paymentStatus: string;
}
interface MessageItem {
    id: string;
    name: string;
    email: string;
    phone: string | null;
    subject: string;
    message: string;
    isRead: boolean;
    createdAt: string;
}
interface ServiceItem {
    id: string;
    name: string;
    slug: string;
    category: string;
    description: string;
    price: number;
    pricingModel: string;
    isActive: boolean;
}
interface ClientItem {
    id: string;
    name: string;
    email: string;
    image: string | null;
    ordersCount: number;
    createdAt: string;
}

interface AdminData {
    stats: {
        totalClients: number;
        totalOrders: number;
        totalRevenue: number;
        totalMessages: number;
    };
    orders: OrderItem[];
    messages: MessageItem[];
    services: ServiceItem[];
    clients: ClientItem[];
}

/* ─── Constants ─── */
const tabs = [
    { id: "overview", label: "Overview", icon: FiHome },
    { id: "orders", label: "Orders", icon: FiShoppingBag },
    { id: "services", label: "Services", icon: FiGrid },
    { id: "messages", label: "Messages", icon: FiMessageSquare },
    { id: "clients", label: "Clients", icon: FiUsers },
];

const statusOptions = [
    { value: "pending", label: "Pending", color: "text-yellow-400" },
    { value: "confirmed", label: "Confirmed", color: "text-blue-400" },
    { value: "in_progress", label: "In Progress", color: "text-purple-400" },
    { value: "completed", label: "Completed", color: "text-green-400" },
    { value: "cancelled", label: "Cancelled", color: "text-red-400" },
];

const statusColors: Record<string, string> = {
    pending: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
    confirmed: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    in_progress: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    completed: "bg-green-500/10 text-green-400 border-green-500/20",
    cancelled: "bg-red-500/10 text-red-400 border-red-500/20",
};

const categoryLabels: Record<string, string> = {
    "social-media": "Social Media",
    platform: "Platform",
    "web-tech": "Web & Tech",
    creative: "Creative",
};

/* ─── Main ─── */
export default function AdminDashboardClient({ data }: { data: AdminData }) {
    const [activeTab, setActiveTab] = useState("overview");
    const [orders, setOrders] = useState(data.orders);
    const [messages, setMessages] = useState(data.messages);
    const [toast, setToast] = useState<string | null>(null);

    const unreadCount = messages.filter((m) => !m.isRead).length;

    function showToast(msg: string) {
        setToast(msg);
        setTimeout(() => setToast(null), 3000);
    }

    async function updateOrderStatus(orderId: string, status: string) {
        try {
            const res = await fetch("/api/admin/orders", {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ orderId, status }),
            });
            const result = await res.json();
            if (result.success) {
                setOrders((prev) =>
                    prev.map((o) => (o.id === orderId ? { ...o, status } : o))
                );
                showToast(`Order updated to "${status.replace("_", " ")}"`);
            }
        } catch {
            showToast("Failed to update order");
        }
    }

    async function markMessageRead(messageId: string) {
        try {
            await fetch("/api/admin/messages", {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ messageId }),
            });
            setMessages((prev) =>
                prev.map((m) => (m.id === messageId ? { ...m, isRead: true } : m))
            );
        } catch {
            /* silent */
        }
    }

    return (
        <div className="min-h-screen pt-20 pb-8">
            {/* Toast */}
            <AnimatePresence>
                {toast && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed top-24 left-1/2 -translate-x-1/2 z-50 px-6 py-3 glass rounded-lg text-white text-sm font-medium shadow-xl border border-green-500/20"
                    >
                        <FiCheck className="inline mr-2 text-green-400" />
                        {toast}
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="container mx-auto max-w-7xl px-4 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-6">
                    {/* ─── Sidebar ─── */}
                    <aside className="lg:w-56 flex-shrink-0">
                        <div className="glass rounded-2xl p-5 lg:sticky lg:top-24">
                            <div className="flex items-center gap-3 mb-6 pb-5 border-b border-white/5">
                                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-brand-500 to-accent-500 flex items-center justify-center">
                                    <FiTrendingUp className="text-white" size={18} />
                                </div>
                                <div>
                                    <p className="text-white font-semibold text-sm">Admin</p>
                                    <p className="text-slate-500 text-xs">Management</p>
                                </div>
                            </div>

                            <nav className="space-y-1">
                                {tabs.map((tab) => (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id)}
                                        className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${activeTab === tab.id
                                                ? "bg-brand-600/15 text-brand-400"
                                                : "text-slate-400 hover:text-white hover:bg-white/5"
                                            }`}
                                    >
                                        <tab.icon size={16} />
                                        {tab.label}
                                        {tab.id === "messages" && unreadCount > 0 && (
                                            <span className="ml-auto text-xs bg-brand-500/20 text-brand-400 px-2 py-0.5 rounded-full">
                                                {unreadCount}
                                            </span>
                                        )}
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

                    {/* ─── Main ─── */}
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
                                        stats={data.stats}
                                        orders={orders}
                                        messages={messages}
                                        onNav={setActiveTab}
                                    />
                                )}
                                {activeTab === "orders" && (
                                    <OrdersTab
                                        orders={orders}
                                        onUpdateStatus={updateOrderStatus}
                                    />
                                )}
                                {activeTab === "services" && (
                                    <ServicesTab services={data.services} />
                                )}
                                {activeTab === "messages" && (
                                    <MessagesTab
                                        messages={messages}
                                        onMarkRead={markMessageRead}
                                    />
                                )}
                                {activeTab === "clients" && (
                                    <ClientsTab clients={data.clients} />
                                )}
                            </motion.div>
                        </AnimatePresence>
                    </main>
                </div>
            </div>
        </div>
    );
}

/* ═══ Overview ═══ */
function OverviewTab({
    stats,
    orders,
    messages,
    onNav,
}: {
    stats: AdminData["stats"];
    orders: OrderItem[];
    messages: MessageItem[];
    onNav: (t: string) => void;
}) {
    const statCards = [
        { label: "Total Clients", value: stats.totalClients, icon: FiUsers, color: "from-blue-500 to-cyan-400" },
        { label: "Total Orders", value: stats.totalOrders, icon: FiShoppingBag, color: "from-purple-500 to-pink-400" },
        { label: "Revenue", value: `$${stats.totalRevenue.toLocaleString()}`, icon: FiDollarSign, color: "from-emerald-500 to-teal-400" },
        { label: "Messages", value: stats.totalMessages, icon: FiMessageSquare, color: "from-orange-500 to-amber-400" },
    ];

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-bold text-white flex items-center gap-2">
                    <FiTrendingUp className="text-brand-400" /> Admin Dashboard
                </h1>
                <p className="text-slate-400 text-sm mt-1">
                    Manage clients, orders, and track business performance
                </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {statCards.map((stat, i) => (
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
                            <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                                <stat.icon size={16} className="text-white" />
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="grid lg:grid-cols-5 gap-6">
                <div className="lg:col-span-3 glass rounded-xl p-6">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-lg font-semibold text-white">Recent Orders</h2>
                        <button onClick={() => onNav("orders")} className="text-brand-400 text-xs hover:text-brand-300">
                            View all →
                        </button>
                    </div>
                    {orders.length === 0 ? (
                        <p className="text-slate-500 text-sm py-8 text-center">No orders yet</p>
                    ) : (
                        <div className="space-y-2">
                            {orders.slice(0, 5).map((order) => (
                                <div key={order.id} className="flex items-center justify-between gap-3 p-3 rounded-lg bg-white/[0.02] border border-white/5">
                                    <div className="min-w-0">
                                        <p className="text-white text-sm font-medium truncate">{order.clientName}</p>
                                        <p className="text-slate-500 text-xs truncate">{order.serviceName}</p>
                                    </div>
                                    <div className="flex items-center gap-3 shrink-0">
                                        <span className="text-white text-sm font-semibold">${order.totalAmount}</span>
                                        <span className={`px-2 py-0.5 rounded-md text-xs font-medium border ${statusColors[order.status] || statusColors.pending}`}>
                                            {order.status.replace("_", " ")}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                <div className="lg:col-span-2 glass rounded-xl p-6">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-lg font-semibold text-white">Messages</h2>
                        <button onClick={() => onNav("messages")} className="text-brand-400 text-xs hover:text-brand-300">
                            View all →
                        </button>
                    </div>
                    {messages.length === 0 ? (
                        <p className="text-slate-500 text-sm py-8 text-center">No messages</p>
                    ) : (
                        <div className="space-y-2">
                            {messages.slice(0, 4).map((msg) => (
                                <div key={msg.id} className={`p-3 rounded-lg border ${msg.isRead ? "bg-white/[0.02] border-white/5" : "bg-brand-600/5 border-brand-500/10"}`}>
                                    <div className="flex justify-between items-start mb-0.5">
                                        <p className="text-white text-sm font-medium">
                                            {msg.name}
                                            {!msg.isRead && <span className="ml-2 w-1.5 h-1.5 bg-brand-400 rounded-full inline-block" />}
                                        </p>
                                        <span className="text-slate-600 text-xs">{new Date(msg.createdAt).toLocaleDateString()}</span>
                                    </div>
                                    <p className="text-slate-400 text-xs line-clamp-1">{msg.subject}</p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

/* ═══ Orders ═══ */
function OrdersTab({
    orders,
    onUpdateStatus,
}: {
    orders: OrderItem[];
    onUpdateStatus: (id: string, status: string) => void;
}) {
    const [filter, setFilter] = useState("all");
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const filtered = filter === "all" ? orders : orders.filter((o) => o.status === filter);

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-bold text-white">Order Management</h1>
                <p className="text-slate-400 text-sm mt-1">Update order statuses and manage client projects</p>
            </div>

            {/* Status Filters */}
            <div className="flex flex-wrap gap-2">
                <button
                    onClick={() => setFilter("all")}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${filter === "all" ? "gradient-brand text-white" : "bg-white/5 text-slate-400 hover:text-white border border-white/5"}`}
                >
                    All ({orders.length})
                </button>
                {statusOptions.map((s) => {
                    const count = orders.filter((o) => o.status === s.value).length;
                    return (
                        <button
                            key={s.value}
                            onClick={() => setFilter(s.value)}
                            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${filter === s.value ? "gradient-brand text-white" : "bg-white/5 text-slate-400 hover:text-white border border-white/5"}`}
                        >
                            {s.label} ({count})
                        </button>
                    );
                })}
            </div>

            {filtered.length === 0 ? (
                <div className="glass rounded-xl p-12 text-center">
                    <FiShoppingBag className="mx-auto text-slate-600 mb-3" size={40} />
                    <p className="text-slate-400">No orders match this filter</p>
                </div>
            ) : (
                <div className="space-y-3">
                    {filtered.map((order, i) => (
                        <motion.div
                            key={order.id}
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.03 }}
                            className="glass rounded-xl p-5"
                        >
                            <div className="flex flex-wrap items-start justify-between gap-4">
                                <div className="min-w-0 flex-1">
                                    <div className="flex items-center gap-2 mb-1">
                                        <p className="text-white font-semibold">{order.serviceName}</p>
                                        <span className={`px-2 py-0.5 rounded-md text-xs font-medium border ${statusColors[order.status]}`}>
                                            {order.status.replace("_", " ")}
                                        </span>
                                    </div>
                                    <p className="text-slate-400 text-sm">{order.clientName} · {order.clientEmail}</p>
                                    <div className="flex flex-wrap gap-4 mt-2 text-xs text-slate-500">
                                        <span>${order.totalAmount} {order.currency}</span>
                                        <span>{new Date(order.createdAt).toLocaleDateString()}</span>
                                        <span className={order.paymentStatus === "succeeded" ? "text-green-400" : "text-yellow-400"}>
                                            Payment: {order.paymentStatus}
                                        </span>
                                    </div>
                                    {order.requirements && (
                                        <p className="text-slate-500 text-xs mt-2 bg-white/[0.02] rounded p-2 border border-white/5">
                                            <span className="text-slate-400">Requirements:</span> {order.requirements}
                                        </p>
                                    )}
                                </div>

                                {/* Status Dropdown */}
                                <div className="relative">
                                    <button
                                        onClick={() => setOpenDropdown(openDropdown === order.id ? null : order.id)}
                                        className="px-3 py-2 text-xs font-medium bg-white/5 border border-white/10 rounded-lg text-slate-300 hover:bg-white/10 transition-all flex items-center gap-2"
                                    >
                                        Update Status <FiChevronDown size={12} />
                                    </button>
                                    {openDropdown === order.id && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -4 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="absolute right-0 top-full mt-1 z-20 glass rounded-lg p-1 min-w-[140px] shadow-xl"
                                        >
                                            {statusOptions.map((s) => (
                                                <button
                                                    key={s.value}
                                                    onClick={() => {
                                                        onUpdateStatus(order.id, s.value);
                                                        setOpenDropdown(null);
                                                    }}
                                                    className={`w-full text-left px-3 py-2 rounded text-xs transition-colors hover:bg-white/10 ${s.color} ${order.status === s.value ? "bg-white/5 font-semibold" : ""}`}
                                                >
                                                    {order.status === s.value && <FiCheck className="inline mr-1.5" size={10} />}
                                                    {s.label}
                                                </button>
                                            ))}
                                        </motion.div>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            )}
        </div>
    );
}

/* ═══ Services ═══ */
function ServicesTab({ services }: { services: ServiceItem[] }) {
    const [filter, setFilter] = useState("all");
    const categories = [...new Set(services.map((s) => s.category))];
    const filtered = filter === "all" ? services : services.filter((s) => s.category === filter);

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-bold text-white">Services</h1>
                <p className="text-slate-400 text-sm mt-1">{services.length} services configured</p>
            </div>

            <div className="flex flex-wrap gap-2">
                <button
                    onClick={() => setFilter("all")}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${filter === "all" ? "gradient-brand text-white" : "bg-white/5 text-slate-400 hover:text-white border border-white/5"}`}
                >
                    All
                </button>
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setFilter(cat)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${filter === cat ? "gradient-brand text-white" : "bg-white/5 text-slate-400 hover:text-white border border-white/5"}`}
                    >
                        {categoryLabels[cat] || cat}
                    </button>
                ))}
            </div>

            <div className="glass rounded-xl overflow-hidden">
                <table className="w-full text-sm">
                    <thead>
                        <tr className="border-b border-white/5">
                            <th className="text-left px-5 py-3 text-slate-400 text-xs font-medium">Service</th>
                            <th className="text-left px-5 py-3 text-slate-400 text-xs font-medium">Category</th>
                            <th className="text-left px-5 py-3 text-slate-400 text-xs font-medium">Price</th>
                            <th className="text-left px-5 py-3 text-slate-400 text-xs font-medium">Model</th>
                            <th className="text-left px-5 py-3 text-slate-400 text-xs font-medium">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filtered.map((service) => (
                            <tr key={service.id} className="border-b border-white/[0.03] hover:bg-white/[0.02] transition-colors">
                                <td className="px-5 py-3">
                                    <p className="text-white font-medium">{service.name}</p>
                                    <p className="text-slate-500 text-xs line-clamp-1">{service.description}</p>
                                </td>
                                <td className="px-5 py-3">
                                    <span className="text-slate-300 text-xs">{categoryLabels[service.category] || service.category}</span>
                                </td>
                                <td className="px-5 py-3 text-white font-semibold">${service.price}</td>
                                <td className="px-5 py-3 text-slate-400 capitalize">{service.pricingModel}</td>
                                <td className="px-5 py-3">
                                    <span className={`px-2 py-0.5 rounded-md text-xs font-medium ${service.isActive ? "bg-green-500/10 text-green-400 border border-green-500/20" : "bg-red-500/10 text-red-400 border border-red-500/20"}`}>
                                        {service.isActive ? "Active" : "Inactive"}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

/* ═══ Messages ═══ */
function MessagesTab({
    messages,
    onMarkRead,
}: {
    messages: MessageItem[];
    onMarkRead: (id: string) => void;
}) {
    const [expandedMsg, setExpandedMsg] = useState<string | null>(null);

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-bold text-white">Messages</h1>
                <p className="text-slate-400 text-sm mt-1">
                    {messages.filter((m) => !m.isRead).length} unread of {messages.length} total
                </p>
            </div>

            {messages.length === 0 ? (
                <div className="glass rounded-xl p-12 text-center">
                    <FiMessageSquare className="mx-auto text-slate-600 mb-3" size={40} />
                    <p className="text-slate-400">No messages yet</p>
                </div>
            ) : (
                <div className="space-y-3">
                    {messages.map((msg, i) => {
                        const isExpanded = expandedMsg === msg.id;
                        return (
                            <motion.div
                                key={msg.id}
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.03 }}
                                className={`glass rounded-xl overflow-hidden ${!msg.isRead ? "ring-1 ring-brand-500/20" : ""}`}
                            >
                                <button
                                    onClick={() => {
                                        setExpandedMsg(isExpanded ? null : msg.id);
                                        if (!msg.isRead) onMarkRead(msg.id);
                                    }}
                                    className="w-full p-5 text-left hover:bg-white/[0.02] transition-colors"
                                >
                                    <div className="flex items-start justify-between gap-4">
                                        <div className="min-w-0 flex-1">
                                            <div className="flex items-center gap-2">
                                                <p className="text-white font-semibold text-sm">
                                                    {msg.name}
                                                    {!msg.isRead && (
                                                        <span className="ml-2 inline-block w-2 h-2 rounded-full bg-brand-400" />
                                                    )}
                                                </p>
                                            </div>
                                            <p className="text-brand-400 text-sm mt-0.5">{msg.subject}</p>
                                            {!isExpanded && (
                                                <p className="text-slate-500 text-xs mt-1 line-clamp-1">{msg.message}</p>
                                            )}
                                        </div>
                                        <span className="text-slate-600 text-xs shrink-0">
                                            {new Date(msg.createdAt).toLocaleDateString("en-US", {
                                                month: "short",
                                                day: "numeric",
                                            })}
                                        </span>
                                    </div>
                                </button>

                                <AnimatePresence>
                                    {isExpanded && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-5 pb-5 border-t border-white/5 pt-4">
                                                <p className="text-slate-300 text-sm leading-relaxed whitespace-pre-wrap mb-4">
                                                    {msg.message}
                                                </p>
                                                <div className="flex flex-wrap gap-4 text-xs text-slate-500">
                                                    <span className="flex items-center gap-1">
                                                        <FiMail size={12} /> {msg.email}
                                                    </span>
                                                    {msg.phone && (
                                                        <span className="flex items-center gap-1">
                                                            <FiPhone size={12} /> {msg.phone}
                                                        </span>
                                                    )}
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

/* ═══ Clients ═══ */
function ClientsTab({ clients }: { clients: ClientItem[] }) {
    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-bold text-white">Clients</h1>
                <p className="text-slate-400 text-sm mt-1">{clients.length} registered clients</p>
            </div>

            {clients.length === 0 ? (
                <div className="glass rounded-xl p-12 text-center">
                    <FiUsers className="mx-auto text-slate-600 mb-3" size={40} />
                    <p className="text-slate-400">No clients registered yet</p>
                </div>
            ) : (
                <div className="glass rounded-xl overflow-hidden">
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="border-b border-white/5">
                                <th className="text-left px-5 py-3 text-slate-400 text-xs font-medium">Client</th>
                                <th className="text-left px-5 py-3 text-slate-400 text-xs font-medium">Email</th>
                                <th className="text-left px-5 py-3 text-slate-400 text-xs font-medium">Orders</th>
                                <th className="text-left px-5 py-3 text-slate-400 text-xs font-medium">Joined</th>
                            </tr>
                        </thead>
                        <tbody>
                            {clients.map((client) => (
                                <tr key={client.id} className="border-b border-white/[0.03] hover:bg-white/[0.02] transition-colors">
                                    <td className="px-5 py-3">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-500 to-accent-500 flex items-center justify-center text-white text-xs font-bold overflow-hidden">
                                                {client.image ? (
                                                    <img src={client.image} alt="" className="w-full h-full object-cover" />
                                                ) : (
                                                    client.name.charAt(0).toUpperCase()
                                                )}
                                            </div>
                                            <span className="text-white font-medium">{client.name}</span>
                                        </div>
                                    </td>
                                    <td className="px-5 py-3 text-slate-400">{client.email}</td>
                                    <td className="px-5 py-3 text-white font-semibold">{client.ordersCount}</td>
                                    <td className="px-5 py-3 text-slate-500 text-xs">
                                        {new Date(client.createdAt).toLocaleDateString("en-US", {
                                            month: "short",
                                            day: "numeric",
                                            year: "numeric",
                                        })}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}
