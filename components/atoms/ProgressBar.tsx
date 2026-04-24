"use client";

/**
 * ProgressBar - Atom component
 * Displays a labeled progress bar with animated fill.
 * Used in language and programming skill sections of the sidebar.
 */

import { useEffect, useState } from "react";

interface ProgressBarProps {
  /** Label shown above the bar */
  label: string;
  /** Percentage value (0–100) */
  percentage: number;
}

export default function ProgressBar({ label, percentage }: ProgressBarProps) {
  const [width, setWidth] = useState(0);

  // Animate bar on mount
  useEffect(() => {
    const timer = setTimeout(() => setWidth(percentage), 300);
    return () => clearTimeout(timer);
  }, [percentage]);

  return (
    <div className="mb-3">
      <div className="flex justify-between items-center mb-1">
        <span style={{ color: "var(--text-secondary)", fontSize: "0.8rem" }}>
          {label}
        </span>
        <span className="mono" style={{ color: "var(--accent)", fontSize: "0.75rem", fontWeight: 600 }}>
          {percentage}%
        </span>
      </div>
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${width}%` }} />
      </div>
    </div>
  );
}
