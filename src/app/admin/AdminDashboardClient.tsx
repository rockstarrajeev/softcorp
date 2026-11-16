"use client";

import { useState, useEffect, useRef } from "react";
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
    FiSend,
    FiRefreshCw,
    FiShield,
    FiSearch,
    FiClock,
    FiCheckCircle,
    FiAlertCircle,
    FiArrowDown,
} from "react-icons/fi";

/* ─── Types ─── */
interface OrderItem {
    id: string;
    userId?: string;
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
        totalUnreadChat?: number;
    };
    orders: OrderItem[];
    messages: MessageItem[];
    services: ServiceItem[];
    clients: ClientItem[];
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

interface ClientChatSummary {
    id: string;
    name: string;
    email: string;
    image: string | null;
    createdAt: string;
    latestMessage: {
        id: string;
        message: string;
        senderRole: string;
        createdAt: string;
    } | null;
    unreadCount: number;
    orders: Array<{
        id: string;
        status: string;
        totalAmount: number;
        currency: string;
        serviceName: string;
    }>;
}

/* ─── Constants ─── */
const tabs = [
    { id: "overview", label: "Overview", icon: FiHome },
    { id: "orders", label: "Orders", icon: FiShoppingBag },
    { id: "chat", label: "Client Chat", icon: FiMessageSquare },
    { id: "services", label: "Services", icon: FiGrid },
    { id: "messages", label: "Inquiries", icon: FiMail },
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

/* ─── Main Component ─── */
export default function AdminDashboardClient({ data }: { data: AdminData }) {
    const [activeTab, setActiveTab] = useState("overview");
    const [orders, setOrders] = useState(data.orders);
    const [messages, setMessages] = useState(data.messages);
    const [toast, setToast] = useState<string | null>(null);
    const [selectedChatClientId, setSelectedChatClientId] = useState<string | null>(null);
    const [unreadChatTotal, setUnreadChatTotal] = useState(data.stats.totalUnreadChat || 0);

    const unreadInquiriesCount = messages.filter((m) => !m.isRead).length;

    function showToast(msg: string) {
        setToast(msg);
        setTimeout(() => setToast(null), 3000);
    }

    async function updateOrderStatus(orderId: string, status: string, notes?: string) {
        try {
            const res = await fetch("/api/admin/orders", {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ orderId, status, notes }),
            });
            const result = await res.json();
            if (result.success) {
                setOrders((prev) =>
                    prev.map((o) => (o.id === orderId ? { ...o, status } : o))
                );
                showToast(`Order status updated to "${status.replace("_", " ")}"`);
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

    function openChatForClient(clientId: string) {
        setSelectedChatClientId(clientId);
        setActiveTab("chat");
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
                                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-accent-500 flex items-center justify-center text-white shadow-md">
                                    <FiShield size={18} />
                                </div>
                                <div>
                                    <p className="text-white font-bold text-sm">Softcorp Admin</p>
                                    <p className="text-brand-400 text-xs font-medium">Operations Center</p>
                                </div>
                            </div>

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

                                        {tab.id === "chat" && unreadChatTotal > 0 && (
                                            <span className="ml-auto text-xs bg-brand-500 text-white font-bold px-2 py-0.5 rounded-full animate-pulse">
                                                {unreadChatTotal}
                                            </span>
                                        )}
                                        {tab.id === "messages" && unreadInquiriesCount > 0 && (
                                            <span className="ml-auto text-xs bg-purple-500/20 text-purple-300 font-bold px-2 py-0.5 rounded-full">
                                                {unreadInquiriesCount}
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
                                        stats={data.stats}
                                        orders={orders}
                                        onViewOrders={() => setActiveTab("orders")}
                                        onViewChat={() => setActiveTab("chat")}
                                    />
                                )}
                                {activeTab === "orders" && (
                                    <OrdersTab
                                        orders={orders}
                                        onUpdateStatus={updateOrderStatus}
                                        onOpenChat={openChatForClient}
                                    />
                                )}
                                {activeTab === "chat" && (
                                    <AdminChatTab
                                        initialClientId={selectedChatClientId}
                                        onUpdateOrderStatus={updateOrderStatus}
                                        onUnreadTotalChange={(val) => setUnreadChatTotal(val)}
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
                                    <ClientsTab
                                        clients={data.clients}
                                        onOpenChat={openChatForClient}
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
    stats,
    orders,
    onViewOrders,
    onViewChat,
}: {
    stats: AdminData["stats"];
    orders: OrderItem[];
    onViewOrders: () => void;
    onViewChat: () => void;
}) {
    const statCards = [
        {
            label: "Total Clients",
            value: stats.totalClients,
            icon: FiUsers,
            color: "from-blue-500 to-cyan-400",
        },
        {
            label: "Total Orders",
            value: stats.totalOrders,
            icon: FiShoppingBag,
            color: "from-purple-500 to-pink-400",
        },
        {
            label: "Gross Settled Revenue",
            value: `₹${stats.totalRevenue.toLocaleString()}`,
            icon: FiDollarSign,
            color: "from-emerald-500 to-teal-400",
        },
        {
            label: "Contact Inquiries",
            value: stats.totalMessages,
            icon: FiMail,
            color: "from-orange-500 to-amber-400",
        },
    ];

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-white">Operations Dashboard</h1>
                    <p className="text-slate-400 text-sm mt-1">
                        SoftCorp Group LLC • Enterprise Telemetry & Client Management
                    </p>
                </div>
                <button
                    onClick={onViewChat}
                    className="px-4 py-2 gradient-brand text-white font-semibold rounded-lg hover:opacity-90 transition-opacity text-xs flex items-center gap-2"
                >
                    <FiMessageSquare size={14} />
                    Open Live Client Chat
                </button>
            </div>

            {/* Stat Cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {statCards.map((card, i) => (
                    <motion.div
                        key={card.label}
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.08 }}
                        className="glass rounded-xl p-5 border border-white/5"
                    >
                        <div className="flex justify-between items-start">
                            <div>
                                <p className="text-slate-400 text-xs mb-1">{card.label}</p>
                                <p className="text-xl font-bold text-white">{card.value}</p>
                            </div>
                            <div
                                className={`w-9 h-9 rounded-lg bg-gradient-to-br ${card.color} flex items-center justify-center`}
                            >
                                <card.icon size={16} className="text-white" />
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Recent Orders Overview */}
            <div className="glass rounded-xl p-6 border border-white/5">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-semibold text-white flex items-center gap-2">
                        <FiTrendingUp className="text-brand-400" size={18} />
                        Recent Client Orders
                    </h2>
                    <button
                        onClick={onViewOrders}
                        className="text-xs text-brand-400 hover:text-brand-300 font-semibold"
                    >
                        View All Orders →
                    </button>
                </div>

                <div className="space-y-3">
                    {orders.slice(0, 5).map((order) => (
                        <div
                            key={order.id}
                            className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all flex items-center justify-between gap-4"
                        >
                            <div className="flex items-center gap-3 min-w-0">
                                <div
                                    className={`w-2.5 h-2.5 rounded-full shrink-0 ${
                                        order.status === "completed"
                                            ? "bg-green-400"
                                            : order.status === "in_progress"
                                            ? "bg-purple-400"
                                            : order.status === "cancelled"
                                            ? "bg-red-400"
                                            : "bg-yellow-400"
                                    }`}
                                />
                                <div className="min-w-0">
                                    <p className="text-white text-sm font-semibold truncate">
                                        {order.clientName} — {order.serviceName}
                                    </p>
                                    <p className="text-slate-500 text-xs truncate">
                                        {order.clientEmail} • ₹{order.totalAmount.toLocaleString()}
                                    </p>
                                </div>
                            </div>
                            <span
                                className={`px-2.5 py-1 rounded-md text-xs font-medium border shrink-0 ${
                                    statusColors[order.status] || statusColors.pending
                                }`}
                            >
                                {order.status.replace("_", " ")}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

/* ═══════════════════════════════════════════════════════════
   TAB: Orders
   ═══════════════════════════════════════════════════════════ */
function OrdersTab({
    orders,
    onUpdateStatus,
    onOpenChat,
}: {
    orders: OrderItem[];
    onUpdateStatus: (orderId: string, status: string) => void;
    onOpenChat: (clientId: string) => void;
}) {
    const [search, setSearch] = useState("");
    const [statusFilter, setStatusFilter] = useState("all");

    const filtered = orders.filter((o) => {
        const matchesSearch =
            o.clientName.toLowerCase().includes(search.toLowerCase()) ||
            o.clientEmail.toLowerCase().includes(search.toLowerCase()) ||
            o.serviceName.toLowerCase().includes(search.toLowerCase()) ||
            o.id.toLowerCase().includes(search.toLowerCase());
        const matchesStatus = statusFilter === "all" || o.status === statusFilter;
        return matchesSearch && matchesStatus;
    });

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-white">Project Orders</h1>
                    <p className="text-slate-400 text-sm mt-1">
                        Manage client orders, review project briefs, and update sprint statuses.
                    </p>
                </div>
            </div>

            {/* Filter & Search Bar */}
            <div className="flex flex-col md:flex-row gap-3">
                <div className="relative flex-1">
                    <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" size={15} />
                    <input
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search orders by client, email, service..."
                        className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-xl text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-500/50"
                    />
                </div>

                <div className="flex flex-wrap gap-1.5">
                    {["all", "pending", "confirmed", "in_progress", "completed", "cancelled"].map((s) => (
                        <button
                            key={s}
                            onClick={() => setStatusFilter(s)}
                            className={`px-3 py-1.5 rounded-lg text-xs font-medium capitalize transition-all ${
                                statusFilter === s
                                    ? "bg-brand-500 text-white font-semibold shadow-sm"
                                    : "bg-white/5 text-slate-400 hover:text-white"
                            }`}
                        >
                            {s.replace("_", " ")}
                        </button>
                    ))}
                </div>
            </div>

            {/* Orders Table */}
            <div className="glass rounded-xl overflow-hidden border border-white/5">
                <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="border-b border-white/5 text-slate-400 text-xs">
                                <th className="text-left px-5 py-3.5 font-medium">Order ID & Date</th>
                                <th className="text-left px-5 py-3.5 font-medium">Client</th>
                                <th className="text-left px-5 py-3.5 font-medium">Service</th>
                                <th className="text-left px-5 py-3.5 font-medium">Amount</th>
                                <th className="text-left px-5 py-3.5 font-medium">Status</th>
                                <th className="text-right px-5 py-3.5 font-medium">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filtered.length === 0 ? (
                                <tr>
                                    <td colSpan={6} className="px-5 py-12 text-center text-slate-500">
                                        No matching orders found
                                    </td>
                                </tr>
                            ) : (
                                filtered.map((order) => (
                                    <tr
                                        key={order.id}
                                        className="border-b border-white/[0.03] hover:bg-white/[0.02] transition-colors"
                                    >
                                        <td className="px-5 py-4">
                                            <div className="font-mono text-xs text-brand-300 font-semibold">
                                                #{order.id.slice(-8).toUpperCase()}
                                            </div>
                                            <div className="text-[11px] text-slate-500">
                                                {new Date(order.createdAt).toLocaleDateString()}
                                            </div>
                                        </td>

                                        <td className="px-5 py-4">
                                            <div className="font-semibold text-white">{order.clientName}</div>
                                            <div className="text-xs text-slate-400">{order.clientEmail}</div>
                                        </td>

                                        <td className="px-5 py-4">
                                            <div className="text-slate-200 font-medium">{order.serviceName}</div>
                                            {order.requirements && (
                                                <div className="text-[11px] text-slate-500 truncate max-w-xs mt-0.5">
                                                    Brief: {order.requirements}
                                                </div>
                                            )}
                                        </td>

                                        <td className="px-5 py-4 font-bold text-white">
                                            ₹{order.totalAmount.toLocaleString()}
                                        </td>

                                        <td className="px-5 py-4">
                                            <select
                                                value={order.status}
                                                onChange={(e) => onUpdateStatus(order.id, e.target.value)}
                                                className={`text-xs font-semibold px-2.5 py-1 rounded-md border bg-slate-900 cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-500/50 ${
                                                    statusColors[order.status] || statusColors.pending
                                                }`}
                                            >
                                                {statusOptions.map((opt) => (
                                                    <option key={opt.value} value={opt.value}>
                                                        {opt.label}
                                                    </option>
                                                ))}
                                            </select>
                                        </td>

                                        <td className="px-5 py-4 text-right">
                                            <button
                                                type="button"
                                                onClick={() => {
                                                    if (order.userId) {
                                                        onOpenChat(order.userId);
                                                    }
                                                }}
                                                className="px-3 py-1.5 text-xs font-semibold text-brand-300 bg-brand-500/10 border border-brand-500/20 rounded-lg hover:bg-brand-500/20 transition-all inline-flex items-center gap-1.5"
                                            >
                                                <FiMessageSquare size={13} />
                                                Chat
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

/* ═══════════════════════════════════════════════════════════
   TAB: Client Chat & Live Status Hub
   ═══════════════════════════════════════════════════════════ */
function AdminChatTab({
    initialClientId,
    onUpdateOrderStatus,
    onUnreadTotalChange,
}: {
    initialClientId: string | null;
    onUpdateOrderStatus: (orderId: string, status: string, notes?: string) => Promise<void>;
    onUnreadTotalChange: (count: number) => void;
}) {
    const [clients, setClients] = useState<ClientChatSummary[]>([]);
    const [selectedClientId, setSelectedClientId] = useState<string | null>(initialClientId);
    const [messages, setMessages] = useState<ChatMessageItem[]>([]);
    const [newMessage, setNewMessage] = useState("");
    const [searchClient, setSearchClient] = useState("");
    const [loadingClients, setLoadingClients] = useState(true);
    const [loadingMessages, setLoadingMessages] = useState(false);
    const [sending, setSending] = useState(false);
    const [showScrollBottom, setShowScrollBottom] = useState(false);

    const chatContainerRef = useRef<HTMLDivElement>(null);
    const isUserNearBottomRef = useRef(true);
    const prevMsgCountRef = useRef(0);
    const isInitialLoadRef = useRef(true);

    const selectedClient = clients.find((c) => c.id === selectedClientId);

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

    // Fetch Client List with Summaries
    const fetchClients = async () => {
        try {
            const res = await fetch("/api/chat?summary=true");
            const data = await res.json();
            if (data.success) {
                const newClients: ClientChatSummary[] = data.clients || [];
                setClients((prev) => {
                    // Quick check if unread counts or count changed
                    if (
                        prev.length === newClients.length &&
                        prev.every(
                            (c, i) =>
                                c.id === newClients[i]?.id &&
                                c.unreadCount === newClients[i]?.unreadCount &&
                                c.latestMessage?.id === newClients[i]?.latestMessage?.id
                        )
                    ) {
                        return prev;
                    }
                    return newClients;
                });

                const totalUnread = newClients.reduce(
                    (sum: number, c: ClientChatSummary) => sum + (c.unreadCount || 0),
                    0
                );
                onUnreadTotalChange(totalUnread);

                // If no client selected, default to first client
                if (!selectedClientId && newClients.length > 0) {
                    setSelectedClientId(newClients[0].id);
                }
            }
        } catch {
            /* non-blocking */
        } finally {
            setLoadingClients(false);
        }
    };

    // Fetch conversation with selected client
    const fetchMessages = async (clientId: string, showLoading = false) => {
        if (showLoading) setLoadingMessages(true);
        try {
            const res = await fetch(`/api/chat?clientId=${clientId}`);
            const data = await res.json();
            if (data.success) {
                const newMsgs: ChatMessageItem[] = data.messages || [];
                setMessages((prev) => {
                    if (
                        prev.length === newMsgs.length &&
                        prev.every((m, idx) => m.id === newMsgs[idx]?.id)
                    ) {
                        return prev;
                    }
                    return newMsgs;
                });

                // Mark messages read for this client
                fetch("/api/chat/read", {
                    method: "PATCH",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ clientId }),
                }).catch(() => {});
            }
        } catch {
            /* error */
        } finally {
            if (showLoading) setLoadingMessages(false);
        }
    };

    useEffect(() => {
        fetchClients();
        const interval = setInterval(fetchClients, 8000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (selectedClientId) {
            isInitialLoadRef.current = true;
            fetchMessages(selectedClientId, true);
            const interval = setInterval(() => fetchMessages(selectedClientId, false), 4000);
            return () => clearInterval(interval);
        }
    }, [selectedClientId]);

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
        if (!text || !selectedClientId || sending) return;

        setSending(true);
        try {
            const res = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    message: text,
                    receiverId: selectedClientId,
                }),
            });
            const data = await res.json();
            if (data.success && data.message) {
                setMessages((prev) => [...prev, data.message]);
                if (!textToSend) setNewMessage("");
                setTimeout(() => scrollToBottom(false), 60);
            }
        } catch {
            /* error */
        } finally {
            setSending(false);
        }
    };

    const handleQuickStatusChange = async (orderId: string, newStatus: string) => {
        await onUpdateOrderStatus(orderId, newStatus);
        // Refresh messages after status update
        if (selectedClientId) {
            fetchMessages(selectedClientId, false);
            fetchClients();
        }
    };

    const quickReplies = [
        "Sprint update: Development is on schedule according to plan.",
        "Staging build is deployed and ready for your review.",
        "Payment received and verified. Architecture kick-off underway.",
        "Please provide the required API credentials and assets to proceed.",
    ];

    const filteredClients = clients.filter(
        (c) =>
            c.name.toLowerCase().includes(searchClient.toLowerCase()) ||
            c.email.toLowerCase().includes(searchClient.toLowerCase())
    );

    return (
        <div className="space-y-4">
            <div>
                <h1 className="text-2xl font-bold text-white flex items-center gap-2">
                    <FiMessageSquare className="text-brand-400" />
                    Client Communications & Status Hub
                </h1>
                <p className="text-slate-400 text-sm mt-1">
                    Direct two-way messaging, real-time query resolution, and live project status synchronizer.
                </p>
            </div>

            {/* Split Screen Container */}
            <div className="glass rounded-2xl border border-white/10 shadow-2xl grid grid-cols-1 md:grid-cols-12 h-[640px] overflow-hidden">
                {/* ─── Column 1: Client Roster (4 cols) ─── */}
                <div className="md:col-span-4 border-r border-white/10 flex flex-col bg-white/[0.01]">
                    {/* Search Bar */}
                    <div className="p-3 border-b border-white/10">
                        <div className="relative">
                            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={14} />
                            <input
                                type="text"
                                value={searchClient}
                                onChange={(e) => setSearchClient(e.target.value)}
                                placeholder="Search clients..."
                                className="w-full pl-9 pr-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-brand-500/50"
                            />
                        </div>
                    </div>

                    {/* Client List */}
                    <div className="flex-1 overflow-y-auto divide-y divide-white/5">
                        {loadingClients ? (
                            <div className="p-4 text-center text-xs text-slate-500">Loading client roster...</div>
                        ) : filteredClients.length === 0 ? (
                            <div className="p-6 text-center text-xs text-slate-500">No matching clients</div>
                        ) : (
                            filteredClients.map((client) => {
                                const isSelected = selectedClientId === client.id;
                                return (
                                    <button
                                        key={client.id}
                                        type="button"
                                        onClick={() => setSelectedClientId(client.id)}
                                        className={`w-full p-3.5 text-left transition-colors flex items-start gap-3 ${
                                            isSelected ? "bg-brand-500/15 border-l-2 border-brand-400" : "hover:bg-white/[0.02]"
                                        }`}
                                    >
                                        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-brand-500 to-accent-500 flex items-center justify-center text-white text-xs font-bold shrink-0 overflow-hidden shadow-sm">
                                            {client.image ? (
                                                <img src={client.image} alt="" className="w-full h-full object-cover" />
                                            ) : (
                                                client.name.charAt(0).toUpperCase()
                                            )}
                                        </div>

                                        <div className="min-w-0 flex-1">
                                            <div className="flex items-center justify-between gap-1">
                                                <p className="text-white font-semibold text-xs truncate">
                                                    {client.name}
                                                </p>
                                                {client.unreadCount > 0 && (
                                                    <span className="bg-brand-500 text-white font-bold text-[10px] px-1.5 py-0.2 rounded-full shrink-0 animate-pulse">
                                                        {client.unreadCount} new
                                                    </span>
                                                )}
                                            </div>
                                            <p className="text-slate-500 text-[11px] truncate">{client.email}</p>
                                            {client.latestMessage ? (
                                                <p className="text-slate-400 text-[11px] truncate mt-1">
                                                    {client.latestMessage.senderRole === "admin" ? "You: " : ""}
                                                    {client.latestMessage.message}
                                                </p>
                                            ) : (
                                                <p className="text-slate-600 text-[11px] italic mt-1">
                                                    {client.orders.length > 0
                                                        ? `${client.orders.length} Active Project(s)`
                                                        : "No messages yet"}
                                                </p>
                                            )}
                                        </div>
                                    </button>
                                );
                            })
                        )}
                    </div>
                </div>

                {/* ─── Column 2: Chat Stream (5 cols) ─── */}
                <div className="md:col-span-5 border-r border-white/10 flex flex-col bg-slate-950/40 relative">
                    {selectedClient ? (
                        <>
                            {/* Chat Header */}
                            <div className="p-3.5 border-b border-white/10 bg-white/[0.02] flex items-center justify-between">
                                <div className="flex items-center gap-2.5 min-w-0">
                                    <div className="w-8 h-8 rounded-full bg-brand-500/20 text-brand-300 font-bold text-xs flex items-center justify-center shrink-0">
                                        {selectedClient.name.charAt(0).toUpperCase()}
                                    </div>
                                    <div className="min-w-0">
                                        <p className="text-white font-semibold text-xs sm:text-sm truncate">
                                            {selectedClient.name}
                                        </p>
                                        <p className="text-slate-500 text-[11px] truncate">{selectedClient.email}</p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => fetchMessages(selectedClient.id, true)}
                                    className="p-1.5 text-slate-400 hover:text-white"
                                    title="Refresh"
                                >
                                    <FiRefreshCw size={13} />
                                </button>
                            </div>

                            {/* Messages Container (Scoped Scroll) */}
                            <div
                                ref={chatContainerRef}
                                onScroll={handleContainerScroll}
                                className="flex-1 overflow-y-auto p-4 space-y-3.5 scroll-smooth relative"
                            >
                                {loadingMessages ? (
                                    <div className="flex flex-col items-center justify-center h-full text-slate-500 text-xs gap-2">
                                        <div className="w-6 h-6 border-2 border-brand-500 border-t-transparent rounded-full animate-spin" />
                                        Loading messages...
                                    </div>
                                ) : messages.length === 0 ? (
                                    <div className="flex flex-col items-center justify-center h-full text-center p-6 text-slate-500 text-xs">
                                        <FiMessageSquare size={32} className="mb-2 text-slate-600" />
                                        No messages with this client yet. Send a status update or welcoming greeting below.
                                    </div>
                                ) : (
                                    messages.map((m, idx) => {
                                        const isAdmin = m.senderRole === "admin";
                                        const isSystem = m.senderRole === "system";

                                        if (isSystem) {
                                            return (
                                                <motion.div
                                                    key={m.id || idx}
                                                    initial={{ opacity: 0, y: 6 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ duration: 0.2 }}
                                                    className="flex justify-center my-2"
                                                >
                                                    <div className="p-2 px-3 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-300 text-[11px] max-w-sm text-center">
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
                                                className={`flex flex-col ${isAdmin ? "items-end" : "items-start"}`}
                                            >
                                                <div className="text-[10px] text-slate-500 mb-1 px-1">
                                                    {isAdmin ? "Admin (You)" : m.senderName} •{" "}
                                                    {new Date(m.createdAt).toLocaleTimeString([], {
                                                        hour: "2-digit",
                                                        minute: "2-digit",
                                                    })}
                                                </div>
                                                <div
                                                    className={`max-w-[85%] p-3 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                                                        isAdmin
                                                            ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-tr-none shadow-md"
                                                            : "bg-white/10 border border-white/10 text-slate-100 rounded-tl-none shadow-md"
                                                    }`}
                                                >
                                                    {m.order && (
                                                        <div className="mb-1 pb-1 border-b border-white/20 text-[10px] font-semibold text-purple-200">
                                                            Order: {m.order.serviceName}
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

                            {/* Quick Replies */}
                            <div className="px-3 py-1.5 bg-white/[0.01] border-t border-white/5 flex items-center gap-1.5 overflow-x-auto no-scrollbar">
                                {quickReplies.map((reply, i) => (
                                    <motion.button
                                        key={i}
                                        type="button"
                                        whileHover={{ scale: 1.03 }}
                                        whileTap={{ scale: 0.97 }}
                                        onClick={() => handleSendMessage(reply)}
                                        disabled={sending}
                                        className="px-2 py-0.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-[10px] text-slate-300 whitespace-nowrap transition-colors shrink-0 disabled:opacity-50"
                                    >
                                        + {reply}
                                    </motion.button>
                                ))}
                            </div>

                            {/* Composer */}
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
                                    placeholder={`Message ${selectedClient.name}...`}
                                    className="flex-1 bg-white/5 border border-white/10 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-500/50"
                                />
                                <motion.button
                                    type="submit"
                                    whileHover={{ scale: 1.04 }}
                                    whileTap={{ scale: 0.92 }}
                                    disabled={!newMessage.trim() || sending}
                                    className="p-2.5 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl text-white font-medium hover:opacity-90 transition-all disabled:opacity-40 shadow-md shrink-0"
                                >
                                    <FiSend size={15} />
                                </motion.button>
                            </form>
                        </>
                    ) : (
                        <div className="flex items-center justify-center h-full text-slate-500 text-xs">
                            Select a client from the roster to start chatting
                        </div>
                    )}
                </div>

                {/* ─── Column 3: Client Orders & Quick Status Controller (3 cols) ─── */}
                <div className="md:col-span-3 flex flex-col bg-white/[0.01] overflow-y-auto p-4 space-y-4">
                    {selectedClient ? (
                        <>
                            <div>
                                <h3 className="text-xs uppercase font-bold text-slate-400 tracking-wider">
                                    Client Profile
                                </h3>
                                <p className="text-sm font-bold text-white mt-1">{selectedClient.name}</p>
                                <p className="text-xs text-slate-400">{selectedClient.email}</p>
                                <p className="text-[11px] text-slate-500 mt-0.5">
                                    Joined: {new Date(selectedClient.createdAt).toLocaleDateString()}
                                </p>
                            </div>

                            <div className="pt-3 border-t border-white/10">
                                <h3 className="text-xs uppercase font-bold text-slate-400 tracking-wider mb-2">
                                    Associated Projects ({selectedClient.orders.length})
                                </h3>

                                {selectedClient.orders.length === 0 ? (
                                    <p className="text-xs text-slate-500">No active projects registered</p>
                                ) : (
                                    <div className="space-y-3">
                                        {selectedClient.orders.map((ord) => (
                                            <div
                                                key={ord.id}
                                                className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-2"
                                            >
                                                <div className="font-semibold text-xs text-white">
                                                    {ord.serviceName}
                                                </div>
                                                <div className="text-[11px] text-slate-400 flex items-center justify-between">
                                                    <span>₹{ord.totalAmount.toLocaleString()}</span>
                                                    <span className="font-mono text-[10px] text-brand-300">
                                                        #{ord.id.slice(-6).toUpperCase()}
                                                    </span>
                                                </div>

                                                <div>
                                                    <label className="block text-[10px] text-slate-400 mb-1">
                                                        Change Sprint Status:
                                                    </label>
                                                    <select
                                                        value={ord.status}
                                                        onChange={(e) =>
                                                            handleQuickStatusChange(ord.id, e.target.value)
                                                        }
                                                        className={`w-full text-xs font-semibold px-2 py-1.5 rounded-lg border bg-slate-900 cursor-pointer focus:outline-none focus:ring-1 focus:ring-brand-500 ${
                                                            statusColors[ord.status] || statusColors.pending
                                                        }`}
                                                    >
                                                        {statusOptions.map((opt) => (
                                                            <option key={opt.value} value={opt.value}>
                                                                {opt.label}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </>
                    ) : (
                        <div className="text-xs text-slate-500 text-center py-10">
                            Select a client to view project status controls
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}


/* ═══════════════════════════════════════════════════════════
   TAB: Services
   ═══════════════════════════════════════════════════════════ */
function ServicesTab({ services }: { services: ServiceItem[] }) {
    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-bold text-white">Service Catalog</h1>
                <p className="text-slate-400 text-sm mt-1">{services.length} active service offerings</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {services.map((service) => (
                    <div key={service.id} className="glass rounded-xl p-5 border border-white/5 space-y-2">
                        <div className="flex items-center justify-between">
                            <span className="text-xs font-medium px-2 py-0.5 rounded bg-brand-500/10 text-brand-300 border border-brand-500/20">
                                {categoryLabels[service.category] || service.category}
                            </span>
                            <span className="text-xs text-green-400 font-semibold">Active</span>
                        </div>
                        <h3 className="text-white font-semibold">{service.name}</h3>
                        <p className="text-slate-400 text-xs line-clamp-2">{service.description}</p>
                        <div className="pt-2 border-t border-white/5 flex items-center justify-between text-xs">
                            <span className="font-bold text-white text-base">₹{service.price.toLocaleString()}</span>
                            <span className="text-slate-500 capitalize">{service.pricingModel}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

/* ═══════════════════════════════════════════════════════════
   TAB: Messages (Contact Inquiries)
   ═══════════════════════════════════════════════════════════ */
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
                <h1 className="text-2xl font-bold text-white">Contact Form Inquiries</h1>
                <p className="text-slate-400 text-sm mt-1">Inbound messages from landing page contact forms</p>
            </div>

            {messages.length === 0 ? (
                <div className="glass rounded-xl p-12 text-center text-slate-500">No contact inquiries yet</div>
            ) : (
                <div className="space-y-3">
                    {messages.map((msg) => {
                        const isExpanded = expandedMsg === msg.id;
                        return (
                            <div
                                key={msg.id}
                                className={`glass rounded-xl overflow-hidden border border-white/5 ${
                                    !msg.isRead ? "ring-1 ring-brand-500/20" : ""
                                }`}
                            >
                                <button
                                    onClick={() => {
                                        setExpandedMsg(isExpanded ? null : msg.id);
                                        if (!msg.isRead) onMarkRead(msg.id);
                                    }}
                                    className="w-full p-4 text-left hover:bg-white/[0.02] transition-colors flex items-center justify-between gap-4"
                                >
                                    <div className="min-w-0 flex-1">
                                        <div className="flex items-center gap-2">
                                            <span className="text-white font-semibold text-sm">{msg.name}</span>
                                            {!msg.isRead && (
                                                <span className="w-2 h-2 rounded-full bg-brand-400 shrink-0" />
                                            )}
                                        </div>
                                        <p className="text-brand-300 text-xs font-medium mt-0.5">{msg.subject}</p>
                                    </div>
                                    <span className="text-slate-500 text-xs shrink-0">
                                        {new Date(msg.createdAt).toLocaleDateString()}
                                    </span>
                                </button>

                                <AnimatePresence>
                                    {isExpanded && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="p-4 pt-0 border-t border-white/5 text-xs text-slate-300 space-y-3">
                                                <p className="whitespace-pre-wrap leading-relaxed">{msg.message}</p>
                                                <div className="flex flex-wrap gap-4 text-slate-400">
                                                    <span>Email: {msg.email}</span>
                                                    {msg.phone && <span>Tel: {msg.phone}</span>}
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}

/* ═══════════════════════════════════════════════════════════
   TAB: Clients
   ═══════════════════════════════════════════════════════════ */
function ClientsTab({
    clients,
    onOpenChat,
}: {
    clients: ClientItem[];
    onOpenChat: (clientId: string) => void;
}) {
    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-bold text-white">Registered Clients</h1>
                <p className="text-slate-400 text-sm mt-1">{clients.length} active client accounts</p>
            </div>

            <div className="glass rounded-xl overflow-hidden border border-white/5">
                <table className="w-full text-sm">
                    <thead>
                        <tr className="border-b border-white/5 text-slate-400 text-xs">
                            <th className="text-left px-5 py-3.5 font-medium">Client</th>
                            <th className="text-left px-5 py-3.5 font-medium">Email</th>
                            <th className="text-left px-5 py-3.5 font-medium">Total Orders</th>
                            <th className="text-left px-5 py-3.5 font-medium">Joined</th>
                            <th className="text-right px-5 py-3.5 font-medium">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {clients.map((client) => (
                            <tr
                                key={client.id}
                                className="border-b border-white/[0.03] hover:bg-white/[0.02] transition-colors"
                            >
                                <td className="px-5 py-3.5">
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
                                <td className="px-5 py-3.5 text-slate-400">{client.email}</td>
                                <td className="px-5 py-3.5 text-white font-semibold">{client.ordersCount}</td>
                                <td className="px-5 py-3.5 text-slate-500 text-xs">
                                    {new Date(client.createdAt).toLocaleDateString()}
                                </td>
                                <td className="px-5 py-3.5 text-right">
                                    <button
                                        type="button"
                                        onClick={() => onOpenChat(client.id)}
                                        className="px-3 py-1.5 text-xs font-semibold text-brand-300 bg-brand-500/10 border border-brand-500/20 rounded-lg hover:bg-brand-500/20 transition-all inline-flex items-center gap-1.5"
                                    >
                                        <FiMessageSquare size={13} />
                                        Open Chat
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
