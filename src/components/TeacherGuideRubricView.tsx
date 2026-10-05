import React from 'react';
import { TEACHER_GUIDE_CONTENT } from '../data/lkpdData';
import { 
  GraduationCap, 
  BookOpen, 
  Award, 
  HelpCircle, 
  CheckCircle, 
  Sparkles,
  Layers,
  ShieldCheck,
  Compass
} from 'lucide-react';

export const TeacherGuideRubricView: React.FC = () => {
  const { curriculum, scaffoldingSteps, rubrics, kunciJawaban } = TEACHER_GUIDE_CONTENT;

  return (
    <div className="max-w-5xl mx-auto space-y-8 pb-16">
      
      {/* Header Banner */}
      <div className="bg-slate-900 text-white rounded-xl p-6 shadow-sm border border-slate-800">
        <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-1">
          <GraduationCap className="w-4 h-4" />
          <span>Buku Pedoman Guru & Panduan Asesmen IPAS SMK</span>
        </div>
        <h2 className="text-xl font-bold">
          Panduan Guru, Strategi Scaffolding, & Rubrik Asesmen Kurikulum Merdeka
        </h2>
        <p className="text-xs text-slate-300 mt-1 max-w-2xl">
          Dokumen pendukung bagi guru pengampu Proyek IPAS SMK Kelas X untuk memfasilitasi pembelajaran berbasis masalah (PBL) berbantuan scaffolding secara efektif, terukur, dan berdiferensiasi.
        </p>
      </div>

      {/* 1. INFORMASI KURIKULUM & MODUL AJAR */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-2xs">
        <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-4 pb-2 border-b border-slate-100 flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-emerald-800" />
          <span>Informasi Kurikulum & Kerangka Modul Ajar</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs">
          <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
            <span className="text-slate-500 block mb-0.5">Mata Pelajaran:</span>
            <span className="font-bold text-slate-900">{curriculum.mataPelajaran}</span>
          </div>
          <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
            <span className="text-slate-500 block mb-0.5">Sasaran Siswa / Fase:</span>
            <span className="font-bold text-slate-900">{curriculum.kelasFase}</span>
          </div>
          <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
            <span className="text-slate-500 block mb-0.5">Alokasi Waktu:</span>
            <span className="font-bold text-slate-900">{curriculum.alokasiWaktu}</span>
          </div>
          <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
            <span className="text-slate-500 block mb-0.5">Model Pembelajaran:</span>
            <span className="font-bold text-emerald-900">{curriculum.model}</span>
          </div>
          <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg sm:col-span-2">
            <span className="text-slate-500 block mb-0.5">Dimensi Profil Pelajar Pancasila:</span>
            <span className="font-bold text-slate-900">
              1. Bernalar Kritis (Analisis Masalah, Efisiensi Energi) · 2. Gotong Royong (Kolaborasi Tim)
            </span>
          </div>
        </div>
      </div>

      {/* 2. STRATEGI IMPLEMENTASI SCAFFOLDING GURU */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-2xs space-y-4">
        <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide pb-2 border-b border-slate-100 flex items-center gap-2">
          <Layers className="w-4 h-4 text-emerald-800" />
          <span>Panduan Pendekatan Scaffolding (Bantuan Bertahap Guru di Kelas)</span>
        </h3>

        <div className="space-y-4">
          {scaffoldingSteps.map((step, idx) => (
            <div key={idx} className="border border-slate-200 rounded-lg p-4 bg-slate-50/50 text-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                <span className="font-bold text-emerald-950 text-sm">{step.level}</span>
                <span className="text-[11px] font-semibold text-slate-600 bg-white border border-slate-200 px-2 py-0.5 rounded">
                  Diterapkan pada: {step.fase}
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-slate-700">
                <div className="bg-white p-3 rounded border border-slate-200">
                  <span className="font-semibold text-slate-900 block mb-1">Peran & Tindakan Guru:</span>
                  <p className="leading-relaxed">{step.teacherAction}</p>
                </div>
                <div className="bg-white p-3 rounded border border-slate-200">
                  <span className="font-semibold text-slate-900 block mb-1">Target Kemandirian Siswa:</span>
                  <p className="leading-relaxed">{step.studentTarget}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. KUNCI JAWABAN & MODEL RESPON SISWA */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-2xs space-y-4">
        <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide pb-2 border-b border-slate-100 flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-800" />
          <span>Kunci Jawaban & Contoh Respon Ideal Siswa</span>
        </h3>

        <div className="space-y-3 text-xs text-slate-800">
          <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-lg">
            <span className="font-bold text-emerald-950 block mb-1">
              Fase 2: Contoh Rumusan Masalah & Hipotesis yang Baik:
            </span>
            <p className="text-slate-700 mb-1.5 italic bg-white p-2 rounded border border-slate-200">
              {kunciJawaban.fase2Rumusan}
            </p>
            <p className="text-slate-700 italic bg-white p-2 rounded border border-slate-200">
              {kunciJawaban.fase2Hipotesis}
            </p>
          </div>

          <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-lg">
            <span className="font-bold text-emerald-950 block mb-1">
              Fase 3: Kunci Jawaban Menjodohkan & Cloze Test:
            </span>
            <div className="font-mono text-emerald-900 font-bold bg-white p-2 rounded border border-slate-200 mb-2">
              {kunciJawaban.fase3Aktivitas1}
            </div>
            <ul className="list-disc list-inside space-y-1 text-slate-700">
              {kunciJawaban.fase3Aktivitas2.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-lg">
            <span className="font-bold text-emerald-950 block mb-1">
              Fase 4: Rekomendasi Model Solusi & Komponen Kunci Siswa:
            </span>
            <p className="text-slate-700 leading-relaxed bg-white p-2.5 rounded border border-slate-200">
              {kunciJawaban.fase4SolusiModel}
            </p>
          </div>
        </div>
      </div>

      {/* 4. RUBRIK ASESMEN FORMATIF (KURIKULUM MERDEKA) */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-2xs space-y-4">
        <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide pb-2 border-b border-slate-100 flex items-center gap-2">
          <Award className="w-4 h-4 text-emerald-800" />
          <span>Rubrik Asesmen Otentik Berjenjang (Skala 1 - 4)</span>
        </h3>

        <div className="border border-slate-300 rounded-lg overflow-x-auto text-xs">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-slate-100 text-slate-900 border-b border-slate-300">
                <th className="p-2.5 text-left w-1/4">Kriteria Penilaian</th>
                <th className="p-2.5 text-left">Skor 4 (Sangat Mahir)</th>
                <th className="p-2.5 text-left">Skor 3 (Mahir)</th>
                <th className="p-2.5 text-left">Skor 2 (Cukup)</th>
                <th className="p-2.5 text-left">Skor 1 (Perlu Bimbingan)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {rubrics.map((r, idx) => (
                <tr key={idx} className="hover:bg-slate-50/50">
                  <td className="p-2.5 font-bold text-slate-900 bg-slate-50/70">{r.kriteria}</td>
                  <td className="p-2.5 text-slate-700">{r.skor4}</td>
                  <td className="p-2.5 text-slate-700">{r.skor3}</td>
                  <td className="p-2.5 text-slate-700">{r.skor2}</td>
                  <td className="p-2.5 text-slate-700">{r.skor1}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg text-xs text-amber-950">
          <strong>Pedoman Konversi Nilai:</strong> Nilai Akhir = (Total Skor Perolehan / Total Skor Maksimum 12) × 100.
          KKTP (Kriteria Ketercapaian Tujuan Pembelajaran) minimal: 75.
        </div>
      </div>

    </div>
  );
};
