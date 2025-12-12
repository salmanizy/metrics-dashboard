import React from 'react';
import { Grid3x3 } from 'lucide-react';
import { PieChart, Pie } from 'recharts';

export const LeadsCard = ({ count, dailyGoal, thisWeek, percentage, pieChartData }) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-2 text-gray-600 text-sm mb-2">
            <span>Leads</span>
          </div>
          <div className="text-5xl font-bold mb-4">{count}</div>

          <div className="space-y-1 text-right">
            <div className="text-sm">
              <span className="font-semibold">{dailyGoal}%</span>
              <span className="text-gray-600 ml-2">Daily Goal</span>
            </div>

            <div className="text-sm">
              <span className="font-semibold">{thisWeek}</span>
              <span className="text-gray-600 ml-2">This week</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-end gap-3">
          <div className="bg-gray-50 p-3 rounded-xl">
            <Grid3x3 className="w-5 h-5 text-gray-600" />
          </div>

          <div className="relative w-24 h-24 flex items-center justify-center">
            <PieChart width={96} height={96}>
              <Pie
                data={pieChartData}
                dataKey="value"
                innerRadius="75%"
                outerRadius="100%"
                startAngle={90}
                endAngle={-270}
                cornerRadius={50}
                paddingAngle={2}
                isAnimationActive={true}
              />
            </PieChart>

            <span className="absolute text-xl font-bold">{percentage}%</span>
          </div>
        </div>
      </div>
    </div>
  );
};
