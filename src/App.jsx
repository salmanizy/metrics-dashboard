import React from 'react';
import { MessageSquare } from 'lucide-react';
import { mockData } from './mockData';
import { StatCard } from './components/StatsCard';
import { LeadsCard } from './components/LeadsCard';
import { ChartCard } from './components/ChartCard';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      <Header />
      <Sidebar />

      <main className="max-w-7xl mx-auto px-8 py-8">
        <div className="grid grid-cols-3 gap-6 mb-8">
          <StatCard
            icon={MessageSquare}
            title="New Messages"
            count={mockData.newMessages.count}
            metric={mockData.newMessages.responseRate}
            metricLabel="Response Rate"
            progressChart={mockData.newMessages.progressChart}
          />
          
          <LeadsCard
            count={mockData.leads.count}
            dailyGoal={mockData.leads.dailyGoal}
            thisWeek={mockData.leads.thisWeek}
            percentage={mockData.leads.percentage}
            pieChartData={mockData.leads.pieChartData}
          />
          <StatCard
            icon={MessageSquare}
            title="New Messages"
            count={mockData.newMessages.count}
            metric={mockData.newMessages.responseRate}
            metricLabel="Response Rate"
            progressChart={mockData.newMessages.progressChart}
          />
        </div>

        <ChartCard 
          data={mockData.chartData}
          secondaryData={mockData.secondaryData}
        />
      </main>
    </div>
  );
};

export default App;