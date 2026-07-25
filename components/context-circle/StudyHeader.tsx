"use client";

import Link from "next/link";
import { BookOpen, ShieldCheck } from "lucide-react";

import {
  CONTEXT_CIRCLE_MODES,
  CONTEXT_CIRCLE_ROLES,
} from "@/lib/context-circle/constants";
import type {
  ContextCircleMode,
  ContextCircleRole,
} from "@/types/context-circle";

type StudyHeaderProps = {
  role: ContextCircleRole;
  mode: ContextCircleMode;
  onRoleChange: (role: ContextCircleRole) => void;
  onModeChange: (mode: ContextCircleMode) => void;
};

export default function StudyHeader({
  role,
  mode,
  onRoleChange,
  onModeChange,
}: StudyHeaderProps) {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex w-full max-w-[1500px] flex-col gap-4 px-5 py-4 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <Link
          href="/"
          className="flex w-fit items-center gap-3 rounded-lg transition hover:opacity-80"
          title="Return to BRL Home"
          aria-label="Return to BRL Home"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-950 text-amber-300">
            <BookOpen className="h-6 w-6" />
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
              BRL Research Workspace
            </p>

            <h1 className="font-serif text-2xl font-bold text-slate-950">
              Context Circle
            </h1>
          </div>
        </Link>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <label className="flex items-center gap-2 text-sm font-medium text-slate-700">
            <ShieldCheck className="h-4 w-4 text-blue-700" />

            <span>Role</span>

            <select
              value={role}
              onChange={(event) =>
                onRoleChange(event.target.value as ContextCircleRole)
              }
              className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
            >
              {CONTEXT_CIRCLE_ROLES.map((roleOption) => (
                <option key={roleOption.id} value={roleOption.id}>
                  {roleOption.label}
                </option>
              ))}
            </select>
          </label>

          <div
            className="inline-flex rounded-lg border border-slate-300 bg-slate-100 p-1"
            aria-label="Context Circle mode"
          >
            {CONTEXT_CIRCLE_MODES.map((modeOption) => {
              const isActive = modeOption.id === mode;

              return (
                <button
                  key={modeOption.id}
                  type="button"
                  onClick={() => onModeChange(modeOption.id)}
                  className={`rounded-md px-4 py-2 text-sm font-semibold transition ${
                    isActive
                      ? "bg-blue-950 text-white shadow-sm"
                      : "text-slate-600 hover:bg-white hover:text-slate-950"
                  }`}
                >
                  {modeOption.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </header>
  );
}