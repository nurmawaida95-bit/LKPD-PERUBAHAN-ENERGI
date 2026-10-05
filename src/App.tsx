import React, { useState } from 'react';
import { SCENARIOS, Scenario } from './data/lkpdData';
import { HeaderNav } from './components/HeaderNav';
import { PrintDocumentView } from './components/PrintDocumentView';
import { StudentInteractiveView } from './components/StudentInteractiveView';
import { TeacherGuideRubricView } from './components/TeacherGuideRubricView';
import { MarkdownCopyView } from './components/MarkdownCopyView';

export default function App() {
  const [activeTab, setActiveTab] = useState<'print' | 'interactive' | 'teacher' | 'markdown'>('print');
  const [selectedScenario, setSelectedScenario] = useState<Scenario>(SCENARIOS[0]);

  const handlePrint = () => {
    // Switch to print view if not already there, then trigger window.print
    setActiveTab('print');
    setTimeout(() => {
      window.print();
    }, 150);
  };

  return (
    <div className="min-h-screen bg-slate-100/70 text-slate-900 flex flex-col font-sans">
      {/* Top Navigation & Applet Controls */}
      <HeaderNav
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        selectedScenario={selectedScenario}
        setSelectedScenario={setSelectedScenario}
        onPrint={handlePrint}
      />

      {/* Main Content Area */}
      <main className="flex-1 py-6 px-4 sm:px-6 lg:px-8">
        {activeTab === 'print' && (
          <PrintDocumentView scenario={selectedScenario} />
        )}

        {activeTab === 'interactive' && (
          <StudentInteractiveView scenario={selectedScenario} />
        )}

        {activeTab === 'teacher' && (
          <TeacherGuideRubricView />
        )}

        {activeTab === 'markdown' && (
          <MarkdownCopyView currentScenario={selectedScenario} />
        )}
      </main>

      {/* Footer (No-print) */}
      <footer className="bg-white border-t border-slate-200 py-4 px-4 text-center text-xs text-slate-500 no-print">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>
            Perangkat Ajar Proyek IPAS SMK Kelas X · Model Problem-Based Learning (PBL) Terintegrasi Scaffolding
          </p>
          <div className="flex items-center gap-3 text-slate-600">
            <span>Kurikulum Merdeka</span>
            <span aria-hidden="true">·</span>
            <span>Fase E</span>
            <span aria-hidden="true">·</span>
            <span>Aspek Energi dan Perubahannya</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
