import React, { useState } from 'react';
import { RAW_MARKDOWN_LKPD, Scenario } from '../data/lkpdData';
import { Copy, Check, Download, FileText, CheckCircle2 } from 'lucide-react';

interface MarkdownCopyViewProps {
  currentScenario: Scenario;
}

export const MarkdownCopyView: React.FC<MarkdownCopyViewProps> = ({ currentScenario }) => {
  const [copied, setCopied] = useState(false);

  // Generate dynamic markdown tailored to currently chosen scenario
  const dynamicMarkdown = RAW_MARKDOWN_LKPD
    .replace(
      'Dilema Mesin Bengkel Praktik dan Padamnya Aliran Listrik Sukamaju Saat Beban Puncak Musim Kemarau',
      currentScenario.title
    )
    .replace(
      /\[Ilustrasi suasana bengkel mesin praktik SMK[\s\S]*?detail teknis peralatan listrik dan mekanik\]/m,
      currentScenario.illustrationPrompt
    );

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(dynamicMarkdown);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      // fallback
      const textArea = document.createElement('textarea');
      textArea.value = dynamicMarkdown;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  const handleDownload = () => {
    const blob = new Blob([dynamicMarkdown], { type: 'text/markdown;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `LKPD_IPAS_SMK_${currentScenario.id}.md`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6 pb-16">
      <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-2xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
          <div>
            <div className="flex items-center gap-2 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-1">
              <FileText className="w-4 h-4" />
              <span>Format Markdown Murni (Siap Salin & Pakai)</span>
            </div>
            <h2 className="text-lg font-bold text-slate-900">
              Draf Lengkap LKPD IPAS SMK (Markdown Format)
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Dapat langsung di-paste ke Google Docs, Microsoft Word, LMS Moodle/Google Classroom, Notion, atau Canva.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-emerald-700 text-white font-semibold text-xs hover:bg-emerald-600 transition-colors shadow-xs"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-200" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'Tersalin ke Clipboard!' : 'Salin Semua Teks'}</span>
            </button>

            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-slate-900 text-white font-semibold text-xs hover:bg-slate-800 transition-colors shadow-xs"
            >
              <Download className="w-4 h-4" />
              <span>Unduh File .md</span>
            </button>
          </div>
        </div>

        {copied && (
          <div className="mt-3 p-3 bg-emerald-50 border border-emerald-300 rounded-lg text-xs font-medium text-emerald-900 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-700" />
            <span>
              Format Markdown berhasil disalin! Anda dapat langsung mem-paste (Ctrl+V) ke editor dokumen pilihan Anda.
            </span>
          </div>
        )}

        <div className="mt-4">
          <pre className="bg-slate-900 text-slate-100 font-mono text-xs p-5 rounded-xl overflow-x-auto max-h-[650px] leading-relaxed select-all">
            {dynamicMarkdown}
          </pre>
        </div>
      </div>
    </div>
  );
};
