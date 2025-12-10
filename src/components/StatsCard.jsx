import React from "react";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";

export const StatCard = ({
  icon: Icon,
  title,
  count,
  metric,
  metricLabel,
  progressChart
}) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <div className="flex items-start justify-between mb-4">
        <div>
          <div className="flex items-center gap-2 text-gray-600 text-sm mb-2">
            <span>{title}</span>
          </div>
          <div className="text-5xl font-bold">{count}</div>
        </div>

        <div className="bg-gray-50 p-3 rounded-xl">
          <Icon className="w-5 h-5 text-gray-600" />
        </div>
      </div>

      <div className="space-y-5">
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">{metricLabel}</span>
          <span className="font-semibold">{metric}%</span>
        </div>

        <div className="w-full h-6">
          <ResponsiveContainer width="100%" height="50%">
            <BarChart
              data={progressChart}
              layout="vertical"
              margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
            >
              <YAxis type="category" dataKey="name" hide />
              <XAxis type="number" domain={[0, 100]} hide />

              <Bar
                dataKey="value"
                fill="#3b82f6"
                radius={[10, 10, 10, 10]}
                background={{ fill: "#e5e7eb", radius: 10 }}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};
