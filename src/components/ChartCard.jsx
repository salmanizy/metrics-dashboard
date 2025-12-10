import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-gray-900 text-white px-4 py-3 rounded-lg shadow-lg">
        <p className="text-xs text-gray-300 mb-2">{label}</p>
        {payload.map((entry, index) => (
          <div key={index} className="flex items-center gap-2 mb-1">
            <div 
              className="w-3 h-3 rounded-full" 
              style={{ backgroundColor: entry.color }}
            />
            <p className="font-semibold text-sm">
              {entry.name}: {entry.value}
            </p>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

export const ChartCard = ({ data }) => {
  const [hoveringDataKey, setHoveringDataKey] = React.useState(undefined);

  let primaryOpacity = 1;
  let secondaryOpacity = 1;

  if (hoveringDataKey === 'primary') {
    secondaryOpacity = 0.3;
  }
  if (hoveringDataKey === 'secondary') {
    primaryOpacity = 0.3;
  }

  const handleMouseEnter = (payload) => {
    setHoveringDataKey(payload.dataKey);
  };

  const handleMouseLeave = () => {
    setHoveringDataKey(undefined);
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 0,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis 
            dataKey="name" 
            tick={{ fill: '#9ca3af', fontSize: 12 }}
            axisLine={{ stroke: '#f0f0f0' }}
          />
          <YAxis 
            tick={{ fill: '#9ca3af', fontSize: 12 }}
            axisLine={{ stroke: '#f0f0f0' }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend 
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave}
            wrapperStyle={{ paddingTop: '20px' }}
          />
          <Line 
            type="monotone" 
            dataKey="primary" 
            name="Primary Data"
            stroke="#3b82f6" 
            strokeWidth={3}
            strokeOpacity={primaryOpacity}
            dot={{ fill: '#3b82f6', r: 5 }}
            activeDot={{ r: 7 }}
          />
          <Line 
            type="monotone" 
            dataKey="secondary" 
            name="Secondary Data"
            stroke="#cccdd1" 
            strokeWidth={2}
            strokeOpacity={secondaryOpacity}
            dot={{ fill: '#e5e7eb', r: 4 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
      <p className="text-xs text-gray-500 text-center mt-3">
        💡 Tip: Hover pada legend untuk highlight data!
      </p>
    </div>
  );
};