import React from 'react';
import { Scenario } from '../data/lkpdData';
import { 
  CheckCircle, 
  HelpCircle, 
  Lightbulb, 
  Target, 
  Layers, 
  Clock, 
  Users,
  Compass,
  FileCheck
} from 'lucide-react';

interface PrintDocumentViewProps {
  scenario: Scenario;
}

export const PrintDocumentView: React.FC<PrintDocumentViewProps> = ({ scenario }) => {
  return (
    <div className="bg-white text-slate-900 mx-auto max-w-4xl p-6 sm:p-10 shadow-sm border border-slate-200 print:border-none print:shadow-none print:p-0 print:max-w-none">
      
      {/* 1. KOP LEMBAR KERJA PESERTA DIDIK (STANDAR SMK RESMI) */}
      <div className="border-b-2 border-slate-900 pb-4 mb-6">
        <div className="flex items-center justify-between gap-4">
          <div className="w-16 h-16 border-2 border-slate-900 rounded-sm flex flex-col items-center justify-center p-1 text-center">
            <span className="font-extrabold text-[10px] tracking-tight">SMK BISA</span>
            <span className="font-bold text-[8px] text-emerald-800">HEBAT</span>
          </div>

          <div className="text-center flex-1">
            <h2 className="text-sm font-semibold tracking-wider uppercase text-slate-700">
              PEMERINTAH DAERAH PROVINSI · DINAS PENDIDIKAN
            </h2>
            <h1 className="text-lg sm:text-xl font-black uppercase text-slate-900 tracking-wide">
              LEMBAR KERJA PESERTA DIDIK (LKPD)
            </h1>
            <p className="text-xs sm:text-sm font-semibold text-emerald-900">
              Mata Pelajaran: Proyek IPAS (Ilmu Pengetahuan Alam dan Sosial)
            </p>
            <p className="text-[11px] text-slate-600">
              Model: Problem-Based Learning (PBL) Terintegrasi Scaffolding Berjenjang
            </p>
          </div>

          <div className="w-16 h-16 border border-slate-300 rounded-sm flex flex-col items-center justify-center p-1 text-center text-[10px]">
            <span className="font-bold text-slate-800">KURIKULUM</span>
            <span className="font-semibold text-emerald-700">MERDEKA</span>
            <span className="text-[9px] text-slate-500">FASE E</span>
          </div>
        </div>
      </div>

      {/* 1. IDENTITAS KELOMPOK & PENGANTAR */}
      <section className="mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border border-slate-300 rounded-lg p-4 bg-slate-50/50 text-xs sm:text-sm print:bg-white print:border-slate-800">
          <div className="space-y-2">
            <div className="flex items-center">
              <span className="w-32 font-semibold text-slate-700">Nama Kelompok</span>
              <span className="mr-2">:</span>
              <span className="flex-1 border-b border-dotted border-slate-400 pb-0.5 font-medium"></span>
            </div>
            <div className="flex items-center">
              <span className="w-32 font-semibold text-slate-700">Program Keahlian</span>
              <span className="mr-2">:</span>
              <span className="flex-1 border-b border-dotted border-slate-400 pb-0.5 font-medium"></span>
            </div>
            <div className="flex items-center">
              <span className="w-32 font-semibold text-slate-700">Kelas / Semester</span>
              <span className="mr-2">:</span>
              <span className="flex-1 font-medium">X (Sepuluh) / Gasal</span>
            </div>
            <div className="flex items-center">
              <span className="w-32 font-semibold text-slate-700">Alokasi Waktu</span>
              <span className="mr-2">:</span>
              <span className="flex-1 font-medium">3 x 45 Menit (1 Pertemuan)</span>
            </div>
          </div>

          <div className="space-y-1.5">
            <span className="font-semibold text-slate-800 block text-xs">Anggota Kelompok & Peran:</span>
            <div className="text-xs space-y-1 text-slate-700">
              <div className="flex items-center gap-1">
                <span className="w-4">1.</span>
                <span className="flex-1 border-b border-dotted border-slate-400"></span>
                <span className="text-[10px] text-slate-500">(Ketua Kelompok)</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="w-4">2.</span>
                <span className="flex-1 border-b border-dotted border-slate-400"></span>
                <span className="text-[10px] text-slate-500">(Notulis / Riset)</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="w-4">3.</span>
                <span className="flex-1 border-b border-dotted border-slate-400"></span>
                <span className="text-[10px] text-slate-500">(Perancang Skema)</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="w-4">4.</span>
                <span className="flex-1 border-b border-dotted border-slate-400"></span>
                <span className="text-[10px] text-slate-500">(Juru Bicara Tim)</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="w-4">5.</span>
                <span className="flex-1 border-b border-dotted border-slate-400"></span>
                <span className="text-[10px] text-slate-500">(Anggota Teknis)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INDIKATOR PENCAPAIAN KOMPETENSI (IPK) & TUJUAN PEMBELAJARAN */}
      <section className="mb-8 border-l-4 border-emerald-700 pl-4 py-1 text-xs sm:text-sm">
        <h3 className="font-bold text-slate-900 flex items-center gap-1.5 mb-2">
          <Target className="w-4 h-4 text-emerald-800" />
          Indikator Pencapaian Kompetensi (IPK) & Tujuan Pembelajaran
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-700 text-xs">
          <div>
            <span className="font-semibold text-emerald-950 block mb-1">Indikator Pencapaian Kompetensi (IPK):</span>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>IPK 1.1:</strong> Mengidentifikasi berbagai bentuk energi (kinetik, potensial, kimia, listrik, kalor, cahaya, dan bunyi) dalam fenomena kehidupan sehari-hari dan kejuruan SMK.</li>
              <li><strong>IPK 2.1:</strong> Menganalisis rantai konversi energi dan energi terbuang (disipasi) berdasarkan Hukum Kekekalan Energi.</li>
              <li><strong>IPK 3.1:</strong> Merancang skema prototype/solusi pemanfaatan energi ramah lingkungan atas masalah kontekstual.</li>
              <li><strong>IPK 4.1:</strong> Mengevaluasi efektivitas solusi dan proses kolaborasi kelompok.</li>
            </ul>
          </div>
          <div>
            <span className="font-semibold text-emerald-950 block mb-1">Tujuan Pembelajaran (TP):</span>
            <ul className="list-disc list-inside space-y-1">
              <li>Melalui penelusuran masalah kontekstual, peserta didik mampu membedakan bentuk energi input dan output pada sistem teknologi secara kritis.</li>
              <li>Melalui tabel penuntun scaffolding, peserta didik dapat memetakan energi yang berguna dan energi disipasi dengan tepat.</li>
              <li>Melalui diskusi tim, peserta didik mampu menggambar skema solusi energi alternatif mandiri yang aplikatif bagi lingkungan SMK/masyarakat.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FASE 1: ORIENTASI MASALAH */}
      <section className="mb-8 border border-slate-300 rounded-lg p-5 page-break-inside-avoid print:border-slate-800">
        <div className="flex items-center justify-between border-b border-slate-200 pb-2 mb-3">
          <h2 className="text-sm sm:text-base font-extrabold text-slate-900 uppercase flex items-center gap-2">
            <span className="bg-emerald-800 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs">1</span>
            FASE 1 PBL: ORIENTASI PESERTA DIDIK PADA MASALAH
          </h2>
          <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded print:border print:border-slate-300">
            Konteks Riil Kejuruan
          </span>
        </div>

        <div className="mb-4">
          <h3 className="text-sm font-bold text-slate-900 mb-1">
            Kasus Studi Nyata: "{scenario.title}"
          </h3>
          <p className="text-xs text-slate-500 mb-2 italic">
            Bidang Relevansi: {scenario.category}
          </p>
          <div className="text-xs sm:text-sm text-slate-800 leading-relaxed space-y-2 bg-slate-50 p-4 rounded border border-slate-200 text-justify print:bg-white print:border-slate-400">
            {scenario.story.split('\n\n').map((par, idx) => (
              <p key={idx}>{par}</p>
            ))}
          </div>
        </div>

        {/* Deskripsi Ilustrasi Visual Detail (Dalam Tanda Kurung Siku) */}
        <div className="mt-4 bg-amber-50/70 border border-amber-200 rounded-md p-3 text-xs print:bg-white print:border-slate-400">
          <div className="flex items-center gap-1.5 font-bold text-amber-900 mb-1">
            <Lightbulb className="w-3.5 h-3.5 text-amber-700" />
            <span>Deskripsi Ilustrasi Visual Pendukung (Prompt Generator / Media Visual):</span>
          </div>
          <p className="font-mono text-[11px] text-slate-800 leading-normal bg-white p-2 rounded border border-amber-200/80">
            {scenario.illustrationPrompt}
          </p>
        </div>
      </section>

      {/* FASE 2: MENGORGANISASI SISWA UNTUK BELAJAR */}
      <section className="mb-8 border border-slate-300 rounded-lg p-5 page-break-inside-avoid print:border-slate-800">
        <div className="flex items-center justify-between border-b border-slate-200 pb-2 mb-3">
          <h2 className="text-sm sm:text-base font-extrabold text-slate-900 uppercase flex items-center gap-2">
            <span className="bg-emerald-800 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs">2</span>
            FASE 2 PBL: MENGORGANISASI PESERTA DIDIK UNTUK BELAJAR
          </h2>
          <span className="text-[11px] font-semibold text-slate-600">
            Brainstorming & Hipotesis
          </span>
        </div>

        <div className="text-xs sm:text-sm space-y-4">
          <div>
            <h4 className="font-semibold text-slate-900 mb-1 flex items-center gap-1.5">
              <HelpCircle className="w-3.5 h-3.5 text-emerald-700" />
              A. Pertanyaan Pemantik untuk Diskusi Kelompok:
            </h4>
            <ol className="list-decimal list-inside space-y-1 text-slate-700 pl-1">
              <li>
                Mengapa penggunaan mesin berbahan bakar minyak (genset) dinilai sangat tidak efisien dan merugikan lingkungan serta anggaran sekolah/warga?
              </li>
              <li>
                Bentuk energi alami apa yang melimpah ruah pada fenomena di atas yang saat ini terbuang sia-sia tanpa dimanfaatkan menjadi energi listrik atau kerja mekanik?
              </li>
            </ol>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 mb-1">
              B. Rumusan Masalah Utama Kelompok:
            </h4>
            <p className="text-xs text-slate-500 italic mb-1.5">
              (Susunlah 1 kalimat tanya spesifik yang menjadi fokus utama penyelidikan kelompokmu!)
            </p>
            <div className="border border-slate-300 rounded p-3 min-h-[60px] bg-slate-50/50 print:bg-white print:border-slate-800 flex flex-col justify-end">
              <span className="border-b border-dotted border-slate-400 block w-full mb-2"></span>
              <span className="border-b border-dotted border-slate-400 block w-full"></span>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 mb-1">
              C. Kolom Hipotesis Awal:
            </h4>
            <p className="text-xs text-slate-500 italic mb-1.5">
              (Tuliskan gagasan dugaan sementara: teknologi konversi energi apa yang paling memungkinkan diterapkan untuk mengatasi masalah tersebut?)
            </p>
            <div className="border border-slate-300 rounded p-3 min-h-[60px] bg-slate-50/50 print:bg-white print:border-slate-800 flex flex-col justify-end">
              <span className="border-b border-dotted border-slate-400 block w-full mb-2"></span>
              <span className="border-b border-dotted border-slate-400 block w-full"></span>
            </div>
          </div>
        </div>
      </section>

      {/* FASE 3: MEMBIMBING PENYELIDIKAN (SCAFFOLDING TAHAP 1 - KONSEP DASAR) */}
      <section className="mb-8 border border-slate-300 rounded-lg p-5 page-break-inside-avoid print:border-slate-800">
        <div className="flex items-center justify-between border-b border-slate-200 pb-2 mb-3">
          <h2 className="text-sm sm:text-base font-extrabold text-slate-900 uppercase flex items-center gap-2">
            <span className="bg-emerald-800 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs">3</span>
            FASE 3 PBL: MEMBIMBING PENYELIDIKAN (Scaffolding Tahap 1)
          </h2>
          <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded print:border print:border-slate-300">
            Bantuan Terstruktur (High Support)
          </span>
        </div>

        {/* Teks Bacaan Singkat / Infografis Tertulis */}
        <div className="bg-slate-50 border border-slate-200 rounded p-3.5 mb-4 text-xs leading-relaxed text-slate-800 print:bg-white print:border-slate-400">
          <h4 className="font-bold text-slate-900 mb-1.5 text-xs sm:text-sm flex items-center gap-1.5 text-emerald-950">
            <Layers className="w-3.5 h-3.5 text-emerald-700" />
            Infografis Tertulis: Bentuk-Bentuk Energi & Hukum Kekekalan Energi
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-2">
            <div>
              <p className="font-semibold text-slate-900 mb-0.5">1. Bentuk-Bentuk Energi Kunci:</p>
              <ul className="list-disc list-inside space-y-0.5 text-slate-700 text-[11px]">
                <li><strong>Energi Kinetik</strong>: Energi gerakan (putaran motor, aliran zat).</li>
                <li><strong>Energi Potensial</strong>: Energi tersimpan akibat kedudukan posisi.</li>
                <li><strong>Energi Kimia</strong>: Ikatan molekul bahan bakar (solar, bensin, biomassa, baterai).</li>
                <li><strong>Energi Listrik</strong>: Aliran muatan listrik dalam konduktor.</li>
                <li><strong>Energi Termal (Kalor)</strong>: Getaran partikel materi / energi panas.</li>
                <li><strong>Energi Radiasi / Cahaya</strong>: Gelombang elektromagnetik surya (foton).</li>
                <li><strong>Energi Bunyi</strong>: Getaran gelombang mekanik melalui medium.</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-slate-900 mb-0.5">2. Hukum Kekekalan Energi:</p>
              <p className="text-[11px] text-slate-700 italic border-l-2 border-emerald-600 pl-2 mb-1.5">
                "Energi tidak dapat diciptakan dan tidak dapat dimusnahkan. Energi hanya dapat berubah bentuk dari satu macam energi menjadi macam energi lainnya."
              </p>
              <p className="font-semibold text-slate-900 mb-0.5">3. Efisiensi & Energi Disipasi:</p>
              <p className="text-[11px] text-slate-700">
                Total Energi Input = Energi Output Berguna + Energi Terbuang (Disipasi / Kalor / Bising).
                Semakin kecil energi disipasi, semakin tinggi nilai efisiensi sistem tersebut.
              </p>
            </div>
          </div>
        </div>

        {/* Aktivitas Menjodohkan Konsep Energi */}
        <div className="mb-4">
          <h4 className="font-bold text-xs sm:text-sm text-slate-900 mb-1">
            Aktivitas 3.1: Menjodohkan Perangkat dengan Transformasi Energi Utamanya
          </h4>
          <p className="text-xs text-slate-600 mb-2">
            Tuliskan huruf pilihan transformasi energi yang sesuai pada kolom jawaban yang tersedia!
          </p>
          <div className="border border-slate-300 rounded overflow-hidden text-xs">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-slate-100 text-slate-800 border-b border-slate-300">
                  <th className="py-1.5 px-2 text-center w-10">No</th>
                  <th className="py-1.5 px-3 text-left">Perangkat / Mesin Konversi</th>
                  <th className="py-1.5 px-3 text-left">Pilihan Transformasi Energi Utama</th>
                  <th className="py-1.5 px-2 text-center w-24">Jawaban</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr>
                  <td className="py-2 px-2 text-center font-bold">1</td>
                  <td className="py-2 px-3">Mesin Genset Diesel Solar</td>
                  <td className="py-2 px-3"><strong>A.</strong> Energi Radiasi Matahari → Energi Listrik (DC)</td>
                  <td className="py-2 px-2 text-center border-l border-slate-200 font-bold">[ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ]</td>
                </tr>
                <tr>
                  <td className="py-2 px-2 text-center font-bold">2</td>
                  <td className="py-2 px-3">Panel Surya Fotovoltaik (PV)</td>
                  <td className="py-2 px-3"><strong>B.</strong> Energi Listrik → Energi Kinetik Putaran Poros</td>
                  <td className="py-2 px-2 text-center border-l border-slate-200 font-bold">[ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ]</td>
                </tr>
                <tr>
                  <td className="py-2 px-2 text-center font-bold">3</td>
                  <td className="py-2 px-3">Motor Dinamo Mesin Bubut / Bor Listrik</td>
                  <td className="py-2 px-3"><strong>C.</strong> Energi Kimia Baterai → Energi Listrik → Energi Cahaya</td>
                  <td className="py-2 px-2 text-center border-l border-slate-200 font-bold">[ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ]</td>
                </tr>
                <tr>
                  <td className="py-2 px-2 text-center font-bold">4</td>
                  <td className="py-2 px-3">Lampu Penerangan Darurat Baterai</td>
                  <td className="py-2 px-3"><strong>D.</strong> Energi Kimia Solar → Energi Termal → Kinetik → Listrik</td>
                  <td className="py-2 px-2 text-center border-l border-slate-200 font-bold">[ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ]</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Tabel Analisis Rantai Perubahan Energi Terstruktur (Titik-Titik) */}
        <div>
          <h4 className="font-bold text-xs sm:text-sm text-slate-900 mb-1">
            Aktivitas 3.2: Tabel Analisis Energi Sistem pada Masalah Fase 1 (Isian Terbimbing)
          </h4>
          <p className="text-xs text-slate-600 mb-2">
            Isilah bagian titik-titik berikut untuk membedah mengapa sistem saat ini tidak efisien:
          </p>
          <div className="border border-slate-300 rounded overflow-x-auto text-xs">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-slate-100 text-slate-800 border-b border-slate-300">
                  <th className="py-2 px-2.5 text-left font-bold">Komponen Sistem</th>
                  <th className="py-2 px-2.5 text-left font-bold">Bentuk Energi Input</th>
                  <th className="py-2 px-2.5 text-left font-bold">Bentuk Energi Berguna</th>
                  <th className="py-2 px-2.5 text-left font-bold">Energi Terbuang (Disipasi)</th>
                  <th className="py-2 px-2.5 text-left font-bold">Dampak Negatif</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-[11px]">
                <tr>
                  <td className="py-2 px-2.5 font-semibold text-slate-900">
                    Mesin Genset Solar
                  </td>
                  <td className="py-2 px-2.5">
                    Energi <span className="border-b border-dotted border-slate-500 inline-block min-w-16"></span><br/>
                    <span className="text-[10px] text-slate-500">(bahan bakar solar)</span>
                  </td>
                  <td className="py-2 px-2.5">
                    Energi <span className="border-b border-dotted border-slate-500 inline-block min-w-16"></span><br/>
                    <span className="text-[10px] text-slate-500">(menyalakan mesin)</span>
                  </td>
                  <td className="py-2 px-2.5">
                    1. Kalor mesin membara<br/>
                    2. Energi <span className="border-b border-dotted border-slate-500 inline-block min-w-12"></span> (bising 95 dB)
                  </td>
                  <td className="py-2 px-2.5 text-slate-700">
                    Polusi asap pekat berbau, emisi CO2, biaya operasional tinggi.
                  </td>
                </tr>
                <tr>
                  <td className="py-2 px-2.5 font-semibold text-slate-900">
                    Atap Bengkel & Radiasi Matahari
                  </td>
                  <td className="py-2 px-2.5">
                    Energi <span className="border-b border-dotted border-slate-500 inline-block min-w-16"></span><br/>
                    <span className="text-[10px] text-slate-500">(radiasi foton siang)</span>
                  </td>
                  <td className="py-2 px-2.5 text-red-700 font-medium">
                    Belum ada yang dimanfaatkan (0%)
                  </td>
                  <td className="py-2 px-2.5">
                    100% terserap menjadi Energi <span className="border-b border-dotted border-slate-500 inline-block min-w-12"></span> (panas 48°C)
                  </td>
                  <td className="py-2 px-2.5 text-slate-700">
                    Ruang bengkel terasa panas gerah, siswa gerah dan mudah lelah.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FASE 4: MENGEMBANGKAN & MENYAJIKAN HASIL KARYA (SCAFFOLDING TAHAP 2 - MANDIRI) */}
      <section className="mb-8 border border-slate-300 rounded-lg p-5 page-break-inside-avoid print:border-slate-800">
        <div className="flex items-center justify-between border-b border-slate-200 pb-2 mb-3">
          <h2 className="text-sm sm:text-base font-extrabold text-slate-900 uppercase flex items-center gap-2">
            <span className="bg-emerald-800 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs">4</span>
            FASE 4 PBL: MENGEMBANGKAN & MENYAJIKAN HASIL KARYA
          </h2>
          <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded print:border print:border-slate-300">
            Scaffolding Tahap 2: Mandiri & Kreasi
          </span>
        </div>

        <p className="text-xs text-slate-600 mb-3 italic">
          Bantuan telah dikurangi! Sekarang secara berkelompok rancanglah solusi nyata/alat peraga berbasis energi alternatif ramah lingkungan untuk mengatasi krisis pada masalah di Fase 1.
        </p>

        {/* Identitas Solusi */}
        <div className="space-y-2 mb-4 text-xs sm:text-sm">
          <div className="flex items-center">
            <span className="w-48 font-bold text-slate-800">Judul Inovasi Solusi Kelompok:</span>
            <span className="flex-1 border-b border-dotted border-slate-400 pb-0.5 font-medium"></span>
          </div>
          <div>
            <span className="font-bold text-slate-800 block mb-1">Prinsip Ringkas Cara Kerja Solusi:</span>
            <div className="border border-slate-300 rounded p-2.5 min-h-[48px] bg-slate-50/40 print:bg-white print:border-slate-800 flex flex-col justify-end">
              <span className="border-b border-dotted border-slate-400 block w-full mb-1.5"></span>
              <span className="border-b border-dotted border-slate-400 block w-full"></span>
            </div>
          </div>
        </div>

        {/* Ruang Gambar Skema Solusi */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-1.5">
            <h4 className="font-bold text-xs sm:text-sm text-slate-900">
              Ruang Gambar Skema Rancangan Solusi & Alur Perubahan Energi:
            </h4>
            <span className="text-[11px] text-slate-500 italic">
              (Gambarkan diagram komponen, panah aliran energi, & beri label nama)
            </span>
          </div>
          <div className="w-full h-72 border-2 border-dashed border-slate-400 rounded-lg flex flex-col items-center justify-center p-4 bg-slate-50/30 print:bg-white print:border-slate-600 relative">
            <div className="text-center text-slate-400 space-y-1">
              <Compass className="w-8 h-8 mx-auto text-slate-300" />
              <p className="text-xs font-semibold text-slate-500">
                KOTAK SKETSA GAMBAR SKEMA TEKNOLOGI SOLUSI
              </p>
              <p className="text-[11px] text-slate-400 max-w-sm">
                (Contoh: Panel Surya Fotovoltaik → Solar Charge Controller → Baterai Penyimpan → Inverter DC ke AC → Beban Mesin Bengkel SMK)
              </p>
            </div>
          </div>
        </div>

        {/* Analisis Alur Transformasi Energi Rancangan Mandiri */}
        <div className="space-y-2 text-xs">
          <h4 className="font-bold text-slate-900 text-xs sm:text-sm">
            Tabel Rincian Komponen & Alur Transformasi Energi:
          </h4>
          <div className="border border-slate-300 rounded overflow-hidden">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-slate-100 text-slate-800 border-b border-slate-300">
                  <th className="py-1.5 px-3 text-left w-1/4">Tahapan Sistem</th>
                  <th className="py-1.5 px-3 text-left w-1/3">Nama Komponen / Alat</th>
                  <th className="py-1.5 px-3 text-left">Transformasi Energi yang Berlangsung</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr>
                  <td className="py-2 px-3 font-semibold text-slate-800">1. Penangkapan Input</td>
                  <td className="py-2 px-3 border-l border-slate-200">
                    <span className="border-b border-dotted border-slate-400 block w-full"></span>
                  </td>
                  <td className="py-2 px-3 border-l border-slate-200">
                    Energi <span className="border-b border-dotted border-slate-400 inline-block min-w-16"></span> → Energi <span className="border-b border-dotted border-slate-400 inline-block min-w-16"></span>
                  </td>
                </tr>
                <tr>
                  <td className="py-2 px-3 font-semibold text-slate-800">2. Penyimpanan Daya</td>
                  <td className="py-2 px-3 border-l border-slate-200">
                    <span className="border-b border-dotted border-slate-400 block w-full"></span>
                  </td>
                  <td className="py-2 px-3 border-l border-slate-200">
                    Energi Listrik DC → Energi <span className="border-b border-dotted border-slate-400 inline-block min-w-24"></span> (baterai)
                  </td>
                </tr>
                <tr>
                  <td className="py-2 px-3 font-semibold text-slate-800">3. Beban Pemanfaatan</td>
                  <td className="py-2 px-3 border-l border-slate-200">
                    <span className="border-b border-dotted border-slate-400 block w-full"></span>
                  </td>
                  <td className="py-2 px-3 border-l border-slate-200">
                    Energi Listrik AC → Energi <span className="border-b border-dotted border-slate-400 inline-block min-w-24"></span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FASE 5: MENGANALISIS & MENGEVALUASI PROSES PEMECAHAN MASALAH */}
      <section className="mb-8 border border-slate-300 rounded-lg p-5 page-break-inside-avoid print:border-slate-800">
        <div className="flex items-center justify-between border-b border-slate-200 pb-2 mb-3">
          <h2 className="text-sm sm:text-base font-extrabold text-slate-900 uppercase flex items-center gap-2">
            <span className="bg-emerald-800 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs">5</span>
            FASE 5 PBL: MENGANALISIS & MENGEVALUASI PROSES PEMECAHAN MASALAH
          </h2>
          <span className="text-[11px] font-semibold text-slate-600">
            Refleksi Kritis & Kolaborasi
          </span>
        </div>

        <div className="text-xs sm:text-sm space-y-4">
          <div>
            <h4 className="font-semibold text-slate-900 mb-1">
              1. Evaluasi Keandalan & Efisiensi Solusi:
            </h4>
            <p className="text-xs text-slate-600 mb-1">
              Bagaimana jika cuaca mendung selama 2 hari berturut-turut? Apakah sistem rancangan kelompokmu tetap mampu mengalirkan energi ke mesin bengkel? Komponen apa yang menjaminnya?
            </p>
            <div className="border border-slate-300 rounded p-2.5 min-h-[50px] bg-slate-50/40 print:bg-white print:border-slate-800 flex flex-col justify-end">
              <span className="border-b border-dotted border-slate-400 block w-full mb-1.5"></span>
              <span className="border-b border-dotted border-slate-400 block w-full"></span>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 mb-1">
              2. Perbandingan Dampak Lingkungan & Ekonomi:
            </h4>
            <p className="text-xs text-slate-600 mb-1">
              Bandingkan keuntungan lingkungan (emisi gas buang/suara) dan keuntungan finansial jangka panjang solusi kelompokmu jika dibandingkan dengan genset diesel pada cerita Fase 1!
            </p>
            <div className="border border-slate-300 rounded p-2.5 min-h-[50px] bg-slate-50/40 print:bg-white print:border-slate-800 flex flex-col justify-end">
              <span className="border-b border-dotted border-slate-400 block w-full mb-1.5"></span>
              <span className="border-b border-dotted border-slate-400 block w-full"></span>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 mb-1">
              3. Refleksi Kerjasama Kelompok (Profil Pelajar Pancasila: Gotong Royong):
            </h4>
            <p className="text-xs text-slate-600 mb-1">
              Apakah setiap anggota telah menjalankan perannya dengan baik? Apa tantangan terbesar yang dihadapi tim saat menyatukan gagasan rancangan, dan bagaimana cara menyelesaikannya?
            </p>
            <div className="border border-slate-300 rounded p-2.5 min-h-[50px] bg-slate-50/40 print:bg-white print:border-slate-800 flex flex-col justify-end">
              <span className="border-b border-dotted border-slate-400 block w-full mb-1.5"></span>
              <span className="border-b border-dotted border-slate-400 block w-full"></span>
            </div>
          </div>
        </div>
      </section>

      {/* LEMBAR PENILAIAN & PENGESAHAN GURU */}
      <section className="border border-slate-300 rounded-lg p-4 bg-slate-50/50 print:bg-white print:border-slate-800 page-break-inside-avoid text-xs">
        <h3 className="font-bold text-slate-900 mb-2 flex items-center gap-1.5 text-xs sm:text-sm">
          <FileCheck className="w-4 h-4 text-emerald-800" />
          Lembar Penilaian & Catatan Evaluator Guru IPAS
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border border-slate-300 rounded overflow-hidden">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-slate-200 text-slate-800 border-b border-slate-300">
                  <th className="py-1 px-2 text-left">Aspek Penilaian</th>
                  <th className="py-1 px-2 text-center w-16">Bobot</th>
                  <th className="py-1 px-2 text-center w-16">Skor</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr>
                  <td className="py-1 px-2">1. Identifikasi Masalah & Hipotesis (Fase 1-2)</td>
                  <td className="py-1 px-2 text-center font-semibold">20%</td>
                  <td className="py-1 px-2 text-center"></td>
                </tr>
                <tr>
                  <td className="py-1 px-2">2. Analisis Konsep & Transformasi Energi (Fase 3)</td>
                  <td className="py-1 px-2 text-center font-semibold">25%</td>
                  <td className="py-1 px-2 text-center"></td>
                </tr>
                <tr>
                  <td className="py-1 px-2">3. Orisinalitas & Kelayakan Skema Solusi (Fase 4)</td>
                  <td className="py-1 px-2 text-center font-semibold">35%</td>
                  <td className="py-1 px-2 text-center"></td>
                </tr>
                <tr>
                  <td className="py-1 px-2">4. Evaluasi Kritis & Refleksi Gotong Royong (Fase 5)</td>
                  <td className="py-1 px-2 text-center font-semibold">20%</td>
                  <td className="py-1 px-2 text-center"></td>
                </tr>
                <tr className="bg-slate-100 font-bold">
                  <td className="py-1.5 px-2">TOTAL NILAI AKHIR (SKOR MAKSIMAL)</td>
                  <td className="py-1.5 px-2 text-center">100%</td>
                  <td className="py-1.5 px-2 text-center font-extrabold text-sm">/ 100</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="flex flex-col justify-between p-2 border border-slate-300 rounded bg-white">
            <div>
              <span className="font-semibold text-slate-800 block mb-1">Catatan & Umpan Balik Guru:</span>
              <div className="space-y-1">
                <span className="border-b border-dotted border-slate-300 block w-full"></span>
                <span className="border-b border-dotted border-slate-300 block w-full"></span>
                <span className="border-b border-dotted border-slate-300 block w-full"></span>
              </div>
            </div>

            <div className="mt-4 pt-2 border-t border-slate-200 flex justify-between items-end text-[11px]">
              <div>
                <p>Tanggal Penilaian: .........................</p>
                <p className="mt-8 font-semibold">Nama Guru Pengampu IPAS</p>
                <p className="text-slate-500">NIP. .........................................</p>
              </div>
              <div className="w-24 h-16 border border-dashed border-slate-300 rounded flex items-center justify-center text-slate-400 text-[10px]">
                Paraf Guru
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
