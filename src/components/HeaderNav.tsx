import React from 'react';
import { 
  FileText, 
  Edit3, 
  GraduationCap, 
  Copy, 
  Printer, 
  Sparkles,
  BookOpen
} from 'lucide-react';
import { SCENARIOS, Scenario } from '../data/lkpdData';

interface HeaderNavProps {
  activeTab: 'print' | 'interactive' | 'teacher' | 'markdown';
  setActiveTab: (tab: 'print' | 'interactive' | 'teacher' | 'markdown') => void;
  selectedScenario: Scenario;
  setSelectedScenario: (scenario: Scenario) => void;
  onPrint: () => void;
}

export const HeaderNav: React.FC<HeaderNavProps> = ({
  activeTab,
  setActiveTab,
  selectedScenario,
  setSelectedScenario,
  onPrint
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between py-3 gap-3">
          {/* Logo & School Context */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-700 text-white flex items-center justify-center font-bold text-lg shadow-sm">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-emerald-800">
                  Kurikulum Merdeka SMK · Fase E
                </span>
                <span className="text-slate-300">|</span>
                <span className="text-xs text-slate-500">Proyek IPAS Kelas X</span>
              </div>
              <h1 className="text-base sm:text-lg font-bold text-slate-900 leading-tight">
                LKPD PBL Scaffolding: Energi dan Perubahannya
              </h1>
            </div>
          </div>

          {/* Scenario Selector & Quick Print */}
          <div className="flex items-center flex-wrap gap-2">
            <div className="flex items-center gap-1.5 bg-slate-100 rounded-lg p-1 text-xs">
              <span className="font-medium text-slate-600 pl-2">Skenario Kejuruan:</span>
              <select
                aria-label="Pilih Skenario Kejuruan SMK"
                value={selectedScenario.id}
                onChange={(e) => {
                  const found = SCENARIOS.find((s) => s.id === e.target.value);
                  if (found) setSelectedScenario(found);
                }}
                className="bg-white border border-slate-200 text-slate-800 rounded-md py-1 px-2.5 font-medium focus:outline-hidden focus:ring-2 focus:ring-emerald-600 text-xs"
              >
                {SCENARIOS.map((scenario) => (
                  <option key={scenario.id} value={scenario.id}>
                    {scenario.category}
                  </option>
                ))}
              </select>
            </div>

            <button
              onClick={onPrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 transition-colors shadow-xs"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Cetak / Simpan PDF</span>
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <nav className="flex space-x-1 border-t border-slate-100 pt-1 pb-2 overflow-x-auto scrollbar-none">
          <button
            onClick={() => setActiveTab('print')}
            className={`flex items-center gap-2 px-3.5 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all ${
              activeTab === 'print'
                ? 'bg-emerald-50 text-emerald-900 border border-emerald-200 shadow-2xs font-semibold'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            <FileText className="w-4 h-4 text-emerald-700" />
            <span>Dokumen LKPD Cetak</span>
          </button>

          <button
            onClick={() => setActiveTab('interactive')}
            className={`flex items-center gap-2 px-3.5 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all ${
              activeTab === 'interactive'
                ? 'bg-emerald-50 text-emerald-900 border border-emerald-200 shadow-2xs font-semibold'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            <Edit3 className="w-4 h-4 text-emerald-700" />
            <span>Pengerjaan Interaktif (Siswa)</span>
          </button>

          <button
            onClick={() => setActiveTab('teacher')}
            className={`flex items-center gap-2 px-3.5 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all ${
              activeTab === 'teacher'
                ? 'bg-emerald-50 text-emerald-900 border border-emerald-200 shadow-2xs font-semibold'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            <GraduationCap className="w-4 h-4 text-emerald-700" />
            <span>Panduan & Rubrik Guru</span>
          </button>

          <button
            onClick={() => setActiveTab('markdown')}
            className={`flex items-center gap-2 px-3.5 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all ${
              activeTab === 'markdown'
                ? 'bg-emerald-50 text-emerald-900 border border-emerald-200 shadow-2xs font-semibold'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            <Copy className="w-4 h-4 text-emerald-700" />
            <span>Salin Format Markdown</span>
          </button>
        </nav>
      </div>
    </header>
  );
};
