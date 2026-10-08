"use client";

import { useMemo, useState } from "react";
import {
  ArrowUpRight,
  BarChart3,
  BriefcaseBusiness,
  ChevronRight,
  Clock3,
  Filter,
  Inbox,
  Search,
  Settings,
  Users,
} from "lucide-react";

type LeadStatus =
  | "new"
  | "contacted"
  | "qualified"
  | "won"
  | "lost";

type Lead = {
  _id: string;
  name: string;
  email: string;
  company?: string;
  service: string;
  budget?: string;
  timeline?: string;
  message: string;
  status: LeadStatus;
  createdAt: string;
};

const demoLeads: Lead[] = [
  {
    _id: "1",
    name: "Alex Morgan",
    email: "alex@example.com",
    company: "Northstar",
    service: "Software Development",
    budget: "$10,000 – $25,000",
    timeline: "2 – 4 months",
    message:
      "We are looking for a team to build a modern SaaS platform.",
    status: "new",
    createdAt: "2026-10-08T12:30:00Z",
  },
  {
    _id: "2",
    name: "Sarah Khan",
    email: "sarah@example.com",
    company: "FlowLabs",
    service: "AI & Automation",
    budget: "$5,000 – $10,000",
    timeline: "1 – 2 months",
    message:
      "We want to automate several internal business workflows.",
    status: "contacted",
    createdAt: "2026-10-07T09:15:00Z",
  },
  {
    _id: "3",
    name: "David Chen",
    email: "david@example.com",
    company: "Vertex",
    service: "UI/UX Design",
    budget: "$2,000 – $5,000",
    timeline: "Flexible",
    message:
      "We need a complete redesign of our existing product.",
    status: "qualified",
    createdAt: "2026-10-05T15:40:00Z",
  },
  {
    _id: "4",
    name: "Emma Wilson",
    email: "emma@example.com",
    company: "Orbit",
    service: "QA & Testing",
    budget: "$5,000 – $10,000",
    timeline: "1 – 2 months",
    message:
      "We need automated end-to-end testing for our application.",
    status: "won",
    createdAt: "2026-09-29T11:20:00Z",
  },
];

const statusConfig: Record<
  LeadStatus,
  {
    label: string;
    className: string;
  }
> = {
  new: {
    label: "New",
    className:
      "border-blue-400/20 bg-blue-400/10 text-blue-300",
  },
  contacted: {
    label: "Contacted",
    className:
      "border-yellow-400/20 bg-yellow-400/10 text-yellow-300",
  },
  qualified: {
    label: "Qualified",
    className:
      "border-violet-400/20 bg-violet-400/10 text-violet-300",
  },
  won: {
    label: "Won",
    className:
      "border-emerald-400/20 bg-emerald-400/10 text-emerald-300",
  },
  lost: {
    label: "Lost",
    className:
      "border-red-400/20 bg-red-400/10 text-red-300",
  },
};

export default function AdminPage() {
  const [leads] = useState<Lead[]>(demoLeads);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] =
    useState<LeadStatus | "all">("all");

  const filteredLeads = useMemo(() => {
    return leads.filter((lead) => {
      const matchesSearch =
        lead.name.toLowerCase().includes(search.toLowerCase()) ||
        lead.email.toLowerCase().includes(search.toLowerCase()) ||
        lead.company?.toLowerCase().includes(search.toLowerCase()) ||
        lead.service.toLowerCase().includes(search.toLowerCase());

      const matchesStatus =
        statusFilter === "all" ||
        lead.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [leads, search, statusFilter]);

  const stats = {
    total: leads.length,
    new: leads.filter((lead) => lead.status === "new").length,
    qualified: leads.filter(
      (lead) => lead.status === "qualified",
    ).length,
    won: leads.filter((lead) => lead.status === "won").length,
  };

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute left-[15%] top-[-250px] h-[500px] w-[500px] rounded-full bg-violet-600/[0.07] blur-[130px]" />

        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Sidebar */}
      <aside className="fixed bottom-0 left-0 top-0 z-50 hidden w-[250px] border-r border-white/[0.07] bg-[#070707] lg:block">
        <div className="flex h-full flex-col">
          {/* Logo */}
          <div className="flex h-20 items-center border-b border-white/[0.07] px-6">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 bg-white/[0.05]">
                <span className="text-sm font-bold">C</span>
              </div>

              <div>
                <p className="text-sm font-semibold tracking-[0.2em]">
                  CAIRN
                </p>

                <p className="text-[9px] uppercase tracking-widest text-white/25">
                  Admin
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-1 p-4">
            <SidebarItem
              icon={<BarChart3 size={17} />}
              label="Overview"
              active
            />

            <SidebarItem
              icon={<Inbox size={17} />}
              label="Leads"
              count={stats.new}
            />

            <SidebarItem
              icon={<BriefcaseBusiness size={17} />}
              label="Projects"
            />

            <SidebarItem
              icon={<Users size={17} />}
              label="Clients"
            />

            <div className="my-5 border-t border-white/[0.06]" />

            <SidebarItem
              icon={<Settings size={17} />}
              label="Settings"
            />
          </nav>

          {/* User */}
          <div className="border-t border-white/[0.07] p-4">
            <div className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] p-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-violet-500/20 text-xs text-violet-300">
                A
              </div>

              <div className="min-w-0">
                <p className="truncate text-xs font-medium">
                  Admin
                </p>

                <p className="truncate text-[10px] text-white/25">
                  admin@cairn.dev
                </p>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main */}
      <div className="relative z-10 lg:ml-[250px]">
        {/* Header */}
        <header className="flex h-20 items-center justify-between border-b border-white/[0.07] px-6 lg:px-10">
          <div>
            <p className="text-sm font-medium">Overview</p>
            <p className="mt-1 text-xs text-white/25">
              Welcome back to your CAIRN workspace.
            </p>
          </div>

          <a
            href="/"
            className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs text-white/50 transition-colors hover:text-white"
          >
            View website
            <ArrowUpRight size={14} />
          </a>
        </header>

        <div className="px-6 py-8 lg:px-10">
          {/* Stats */}
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <StatCard
              icon={<Inbox size={17} />}
              label="Total Leads"
              value={stats.total}
              change="+12%"
            />

            <StatCard
              icon={<Clock3 size={17} />}
              label="New Leads"
              value={stats.new}
              change="+8%"
            />

            <StatCard
              icon={<Users size={17} />}
              label="Qualified"
              value={stats.qualified}
              change="+5%"
            />

            <StatCard
              icon={<CheckCircleIcon />}
              label="Won Projects"
              value={stats.won}
              change="+20%"
            />
          </div>

          {/* Leads */}
          <section className="mt-8 overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02]">
            {/* Toolbar */}
            <div className="flex flex-col justify-between gap-4 border-b border-white/[0.07] p-5 md:flex-row md:items-center">
              <div>
                <h2 className="text-sm font-medium">
                  Recent inquiries
                </h2>

                <p className="mt-1 text-xs text-white/25">
                  Manage your incoming project opportunities.
                </p>
              </div>

              <div className="flex flex-col gap-2 sm:flex-row">
                {/* Search */}
                <div className="relative">
                  <Search
                    size={14}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-white/25"
                  />

                  <input
                    value={search}
                    onChange={(event) =>
                      setSearch(event.target.value)
                    }
                    placeholder="Search leads..."
                    className="h-9 w-full rounded-lg border border-white/10 bg-white/[0.03] pl-9 pr-3 text-xs text-white outline-none placeholder:text-white/20 focus:border-violet-400/30 sm:w-52"
                  />
                </div>

                {/* Filter */}
                <div className="relative">
                  <Filter
                    size={13}
                    className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-white/25"
                  />

                  <select
                    value={statusFilter}
                    onChange={(event) =>
                      setStatusFilter(
                        event.target.value as LeadStatus | "all",
                      )
                    }
                    className="h-9 appearance-none rounded-lg border border-white/10 bg-[#0b0b0b] pl-9 pr-8 text-xs text-white/60 outline-none"
                  >
                    <option value="all">All statuses</option>
                    <option value="new">New</option>
                    <option value="contacted">
                      Contacted
                    </option>
                    <option value="qualified">
                      Qualified
                    </option>
                    <option value="won">Won</option>
                    <option value="lost">Lost</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full min-w-[800px]">
                <thead>
                  <tr className="border-b border-white/[0.06] text-left">
                    <th className="px-5 py-3 text-[10px] font-medium uppercase tracking-wider text-white/20">
                      Lead
                    </th>

                    <th className="px-5 py-3 text-[10px] font-medium uppercase tracking-wider text-white/20">
                      Service
                    </th>

                    <th className="px-5 py-3 text-[10px] font-medium uppercase tracking-wider text-white/20">
                      Budget
                    </th>

                    <th className="px-5 py-3 text-[10px] font-medium uppercase tracking-wider text-white/20">
                      Status
                    </th>

                    <th className="px-5 py-3 text-[10px] font-medium uppercase tracking-wider text-white/20">
                      Date
                    </th>

                    <th />
                  </tr>
                </thead>

                <tbody>
                  {filteredLeads.map((lead) => {
                    const status = statusConfig[lead.status];

                    return (
                      <tr
                        key={lead._id}
                        className="group border-b border-white/[0.05] transition-colors hover:bg-white/[0.02]"
                      >
                        <td className="px-5 py-4">
                          <div className="flex items-center gap-3">
                            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/[0.05] text-xs text-white/50">
                              {lead.name.charAt(0)}
                            </div>

                            <div>
                              <p className="text-xs font-medium">
                                {lead.name}
                              </p>

                              <p className="mt-1 text-[10px] text-white/25">
                                {lead.email}
                              </p>
                            </div>
                          </div>
                        </td>

                        <td className="px-5 py-4">
                          <span className="text-xs text-white/50">
                            {lead.service}
                          </span>
                        </td>

                        <td className="px-5 py-4">
                          <span className="text-xs text-white/40">
                            {lead.budget || "—"}
                          </span>
                        </td>

                        <td className="px-5 py-4">
                          <span
                            className={`inline-flex rounded-full border px-2.5 py-1 text-[10px] ${status.className}`}
                          >
                            {status.label}
                          </span>
                        </td>

                        <td className="px-5 py-4">
                          <span className="text-xs text-white/30">
                            {formatDate(lead.createdAt)}
                          </span>
                        </td>

                        <td className="px-5 py-4 text-right">
                          <button
                            type="button"
                            className="rounded-lg p-2 text-white/20 transition-colors hover:bg-white/[0.05] hover:text-white"
                          >
                            <ChevronRight size={16} />
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>

              {filteredLeads.length === 0 && (
                <div className="py-16 text-center">
                  <p className="text-sm text-white/30">
                    No leads found.
                  </p>
                </div>
              )}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

/* =========================================================
   COMPONENTS
========================================================= */

function SidebarItem({
  icon,
  label,
  active = false,
  count,
}: {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  count?: number;
}) {
  return (
    <button
      type="button"
      className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-xs transition-colors ${
        active
          ? "bg-white/[0.06] text-white"
          : "text-white/35 hover:bg-white/[0.03] hover:text-white"
      }`}
    >
      {icon}

      <span className="flex-1">{label}</span>

      {count !== undefined && count > 0 && (
        <span className="rounded-full bg-violet-500/15 px-2 py-0.5 text-[9px] text-violet-300">
          {count}
        </span>
      )}
    </button>
  );
}

function StatCard({
  icon,
  label,
  value,
  change,
}: {
  icon: React.ReactNode;
  label: string;
  value: number;
  change: string;
}) {
  return (
    <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5">
      <div className="flex items-center justify-between">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/[0.07] bg-white/[0.03] text-white/40">
          {icon}
        </div>

        <span className="text-[10px] text-emerald-400">
          {change}
        </span>
      </div>

      <p className="mt-6 text-2xl font-semibold">{value}</p>

      <p className="mt-1 text-xs text-white/25">{label}</p>
    </div>
  );
}

function CheckCircleIcon() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <span className="flex h-4 w-4 items-center justify-center rounded-full border border-emerald-400/40 text-emerald-400">
        ✓
      </span>
    </div>
  );
}

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(date));
}