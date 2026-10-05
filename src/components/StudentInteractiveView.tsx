import React, { useState, useEffect, useRef } from 'react';
import { Scenario, MATCHING_DATA, TEACHER_GUIDE_CONTENT } from '../data/lkpdData';
import { 
  Save, 
  RotateCcw, 
  Check, 
  HelpCircle, 
  PenTool, 
  Eraser, 
  Download, 
  Calculator,
  CheckCircle2,
  AlertCircle,
  Lightbulb,
  Printer
} from 'lucide-react';

interface StudentInteractiveViewProps {
  scenario: Scenario;
}

export const StudentInteractiveView: React.FC<StudentInteractiveViewProps> = ({ scenario }) => {
  // Local storage state keys
  const STORAGE_KEY = `lkpd_ipas_student_work_${scenario.id}`;

  const [groupName, setGroupName] = useState('');
  const [studentClass, setStudentClass] = useState('');
  const [members, setMembers] = useState(['', '', '', '', '']);

  // Phase 2
  const [problemStatement, setProblemStatement] = useState('');
  const [hypothesis, setHypothesis] = useState('');

  // Phase 3 matching
  const [matchingAnswers, setMatchingAnswers] = useState<{ [key: string]: string }>({
    '1': '',
    '2': '',
    '3': '',
    '4': ''
  });
  const [matchingFeedback, setMatchingFeedback] = useState<string | null>(null);

  // Phase 3 Cloze
  const [clozeGensetInput, setClozeGensetInput] = useState('');
  const [clozeGensetUseful, setClozeGensetUseful] = useState('');
  const [clozeGensetWaste, setClozeGensetWaste] = useState('');
  const [clozeRoofInput, setClozeRoofInput] = useState('');
  const [clozeRoofWaste, setClozeRoofWaste] = useState('');

  // Phase 4
  const [solutionTitle, setSolutionTitle] = useState('');
  const [solutionPrinciple, setSolutionPrinciple] = useState('');
  const [step1Input, setStep1Input] = useState('');
  const [step1Trans, setStep1Trans] = useState('');
  const [step2Comp, setStep2Comp] = useState('');
  const [step2Trans, setStep2Trans] = useState('');
  const [step3Load, setStep3Load] = useState('');
  const [step3Benefit, setStep3Benefit] = useState('');

  // Phase 5
  const [reflectionEffectiveness, setReflectionEffectiveness] = useState('');
  const [reflectionComparison, setReflectionComparison] = useState('');
  const [reflectionTeamwork, setReflectionTeamwork] = useState('');

  // Canvas ref for drawing
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [brushColor, setBrushColor] = useState('#1e293b');
  const [brushSize, setBrushSize] = useState(3);
  const [isEraser, setIsEraser] = useState(false);

  // Efficiency Calculator state
  const [energyInputJoules, setEnergyInputJoules] = useState<number>(1000);
  const [energyUsefulJoules, setEnergyUsefulJoules] = useState<number>(350);

  // Toast / Save message
  const [saveStatus, setSaveStatus] = useState<string | null>(null);

  // Load from local storage
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const data = JSON.parse(saved);
        setGroupName(data.groupName || '');
        setStudentClass(data.studentClass || '');
        setMembers(data.members || ['', '', '', '', '']);
        setProblemStatement(data.problemStatement || '');
        setHypothesis(data.hypothesis || '');
        setMatchingAnswers(data.matchingAnswers || { '1': '', '2': '', '3': '', '4': '' });
        setClozeGensetInput(data.clozeGensetInput || '');
        setClozeGensetUseful(data.clozeGensetUseful || '');
        setClozeGensetWaste(data.clozeGensetWaste || '');
        setClozeRoofInput(data.clozeRoofInput || '');
        setClozeRoofWaste(data.clozeRoofWaste || '');
        setSolutionTitle(data.solutionTitle || '');
        setSolutionPrinciple(data.solutionPrinciple || '');
        setStep1Input(data.step1Input || '');
        setStep1Trans(data.step1Trans || '');
        setStep2Comp(data.step2Comp || '');
        setStep2Trans(data.step2Trans || '');
        setStep3Load(data.step3Load || '');
        setStep3Benefit(data.step3Benefit || '');
        setReflectionEffectiveness(data.reflectionEffectiveness || '');
        setReflectionComparison(data.reflectionComparison || '');
        setReflectionTeamwork(data.reflectionTeamwork || '');

        // restore canvas if available
        if (data.canvasDataUrl && canvasRef.current) {
          const img = new Image();
          img.src = data.canvasDataUrl;
          img.onload = () => {
            const ctx = canvasRef.current?.getContext('2d');
            if (ctx) {
              ctx.drawImage(img, 0, 0);
            }
          };
        }
      }
    } catch {
      // ignore
    }
  }, [scenario.id]);

  // Setup canvas background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
  }, []);

  const handleSaveToLocalStorage = () => {
    const canvas = canvasRef.current;
    const canvasDataUrl = canvas ? canvas.toDataURL() : '';

    const payload = {
      groupName,
      studentClass,
      members,
      problemStatement,
      hypothesis,
      matchingAnswers,
      clozeGensetInput,
      clozeGensetUseful,
      clozeGensetWaste,
      clozeRoofInput,
      clozeRoofWaste,
      solutionTitle,
      solutionPrinciple,
      step1Input,
      step1Trans,
      step2Comp,
      step2Trans,
      step3Load,
      step3Benefit,
      reflectionEffectiveness,
      reflectionComparison,
      reflectionTeamwork,
      canvasDataUrl
    };

    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
    setSaveStatus('Jawaban tersimpan otomatis di perangkat!');
    setTimeout(() => setSaveStatus(null), 3500);
  };

  const handleReset = () => {
    if (window.confirm('Apakah kalian yakin ingin mengosongkan seluruh lembar pengerjaan?')) {
      localStorage.removeItem(STORAGE_KEY);
      setGroupName('');
      setStudentClass('');
      setMembers(['', '', '', '', '']);
      setProblemStatement('');
      setHypothesis('');
      setMatchingAnswers({ '1': '', '2': '', '3': '', '4': '' });
      setClozeGensetInput('');
      setClozeGensetUseful('');
      setClozeGensetWaste('');
      setClozeRoofInput('');
      setClozeRoofWaste('');
      setSolutionTitle('');
      setSolutionPrinciple('');
      setStep1Input('');
      setStep1Trans('');
      setStep2Comp('');
      setStep2Trans('');
      setStep3Load('');
      setStep3Benefit('');
      setReflectionEffectiveness('');
      setReflectionComparison('');
      setReflectionTeamwork('');

      const canvas = canvasRef.current;
      if (canvas) {
        const ctx = canvas.getContext('2d');
        if (ctx) ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    }
  };

  // Canvas drawing handlers
  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    setIsDrawing(true);
    const rect = canvas.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

    const x = (clientX - rect.left) * (canvas.width / rect.width);
    const y = (clientY - rect.top) * (canvas.height / rect.height);

    ctx.beginPath();
    ctx.moveTo(x, y);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

    const x = (clientX - rect.left) * (canvas.width / rect.width);
    const y = (clientY - rect.top) * (canvas.height / rect.height);

    ctx.lineWidth = brushSize;
    if (isEraser) {
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = brushSize * 3;
    } else {
      ctx.strokeStyle = brushColor;
    }
    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  const downloadCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const link = document.createElement('a');
    link.download = `skema_solusi_${groupName || 'kelompok'}.png`;
    link.href = canvas.toDataURL();
    link.click();
  };

  // Check matching answers
  const checkMatching = () => {
    // 1 -> D, 2 -> A, 3 -> B, 4 -> C
    const correct: { [key: string]: string } = {
      '1': 'D',
      '2': 'A',
      '3': 'B',
      '4': 'C'
    };
    let score = 0;
    Object.keys(correct).forEach((key) => {
      if (matchingAnswers[key]?.toUpperCase() === correct[key]) score++;
    });

    if (score === 4) {
      setMatchingFeedback('Luar Biasa! Seluruh pasangan konversi energi (100%) dijawab tepat!');
    } else {
      setMatchingFeedback(`Kalian berhasil mencocokkan ${score} dari 4 pasangan dengan benar. Periksa kembali alur energi solar genset dan panel surya!`);
    }
  };

  // Calculate efficiency
  const calculatedEfficiency = energyInputJoules > 0 
    ? Math.min(100, Math.max(0, (energyUsefulJoules / energyInputJoules) * 100)) 
    : 0;
  const wastedEnergy = Math.max(0, energyInputJoules - energyUsefulJoules);

  return (
    <div className="max-w-5xl mx-auto space-y-8 pb-16">
      
      {/* Top Banner & Action Bar */}
      <div className="bg-emerald-900 text-white rounded-xl p-5 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-semibold text-emerald-300 uppercase tracking-wider block mb-1">
            Mode Pengerjaan Siswa · Interaktif & Kolaboratif
          </span>
          <h2 className="text-xl font-bold">
            Lembar Penyelidikan IPAS: Energi & Perubahannya
          </h2>
          <p className="text-xs text-emerald-100 mt-1 max-w-xl">
            Selesaikan tiap tahapan PBL di bawah ini bersama kelompokmu. Jawaban akan tersimpan secara otomatis di browser sehingga kalian dapat berdiskusi dengan nyaman.
          </p>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          <button
            onClick={handleSaveToLocalStorage}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 font-semibold text-xs text-white transition-colors shadow-xs"
          >
            <Save className="w-4 h-4" />
            <span>Simpan Progres</span>
          </button>
          <button
            onClick={handleReset}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-emerald-950/60 hover:bg-emerald-950 text-emerald-200 text-xs transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Kosongkan</span>
          </button>
        </div>
      </div>

      {saveStatus && (
        <div className="p-3 bg-emerald-50 border border-emerald-300 text-emerald-900 rounded-lg text-xs font-medium flex items-center gap-2 shadow-2xs">
          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          <span>{saveStatus}</span>
        </div>
      )}

      {/* Bagian Identitas Kelompok */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-2xs">
        <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-4 pb-2 border-b border-slate-100 flex items-center justify-between">
          <span>Identitas Tim Penyelidik Siswa</span>
          <span className="text-xs text-slate-500 normal-case font-normal">Fase E · SMK</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div>
            <label className="block font-semibold text-slate-700 mb-1">Nama Kelompok:</label>
            <input
              type="text"
              placeholder="Contoh: Tim Voltase Hijau Mekanikal"
              value={groupName}
              onChange={(e) => setGroupName(e.target.value)}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-emerald-600"
            />
          </div>
          <div>
            <label className="block font-semibold text-slate-700 mb-1">Program Keahlian & Kelas:</label>
            <input
              type="text"
              placeholder="Contoh: X Teknik Pemesinan 2 / X Agribisnis 1"
              value={studentClass}
              onChange={(e) => setStudentClass(e.target.value)}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-emerald-600"
            />
          </div>
        </div>

        <div className="mt-4">
          <label className="block font-semibold text-slate-700 mb-1 text-xs">
            Nama Anggota Tim (5 Orang):
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
            {members.map((member, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <span className="w-5 text-center font-bold text-slate-400 text-xs">{idx + 1}.</span>
                <input
                  type="text"
                  placeholder={
                    idx === 0 
                      ? 'Ketua Tim' 
                      : idx === 1 
                      ? 'Notulis' 
                      : idx === 2 
                      ? 'Perancang Skema' 
                      : idx === 3 
                      ? 'Juru Bicara' 
                      : 'Anggota Teknis'
                  }
                  value={member}
                  onChange={(e) => {
                    const newArr = [...members];
                    newArr[idx] = e.target.value;
                    setMembers(newArr);
                  }}
                  className="flex-1 px-2.5 py-1.5 text-xs border border-slate-300 rounded-md focus:outline-hidden focus:ring-1 focus:ring-emerald-600"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FASE 1: Orientasi Masalah */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-2xs">
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-emerald-800 text-white font-bold text-xs flex items-center justify-center">1</span>
            <h3 className="font-bold text-slate-900 text-sm sm:text-base">
              FASE 1: ORIENTASI MASALAH KONTEKSTUAL
            </h3>
          </div>
          <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded">
            {scenario.category}
          </span>
        </div>

        <h4 className="font-bold text-slate-900 text-sm mb-2">{scenario.title}</h4>
        
        <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 text-xs sm:text-sm text-slate-700 leading-relaxed space-y-2 mb-4 text-justify">
          {scenario.story.split('\n\n').map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        {/* AI Image Generator Prompt */}
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-3.5 text-xs">
          <div className="flex items-center gap-1.5 font-bold text-amber-900 mb-1">
            <Lightbulb className="w-4 h-4 text-amber-700" />
            <span>Deskripsi Ilustrasi Visual Masalah (Prompt AI Generator):</span>
          </div>
          <p className="font-mono text-[11px] text-slate-800 bg-white p-2.5 rounded border border-amber-200">
            {scenario.illustrationPrompt}
          </p>
        </div>
      </div>

      {/* FASE 2: Mengorganisasi Siswa untuk Belajar */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-2xs space-y-4">
        <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
          <span className="w-6 h-6 rounded-full bg-emerald-800 text-white font-bold text-xs flex items-center justify-center">2</span>
          <h3 className="font-bold text-slate-900 text-sm sm:text-base">
            FASE 2: MENGORGANISASI SISWA UNTUK BELAJAR
          </h3>
        </div>

        <div className="bg-emerald-50/60 border border-emerald-200 rounded-lg p-3 text-xs text-emerald-950">
          <p className="font-semibold mb-1">Pertanyaan Pemantik Diskusi:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Mengapa penggunaan genset solar di bengkel tersebut sangat tidak ramah lingkungan dan menyedot biaya tinggi?</li>
            <li>Potensi energi terbarukan apa yang ada di atap sekolah yang belum dimanfaatkan?</li>
          </ul>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-900 mb-1">
            Rumusan Masalah Utama Kelompok:
          </label>
          <p className="text-[11px] text-slate-500 mb-1">
            Tuliskan 1 kalimat tanya spesifik yang menjadi fokus utama yang ingin dipecahkan oleh kelompokmu!
          </p>
          <textarea
            rows={2}
            value={problemStatement}
            onChange={(e) => setProblemStatement(e.target.value)}
            placeholder="Contoh: Bagaimana cara merancang sistem penyedia energi listrik alternatif ramah lingkungan dan hemat biaya dengan memanfaatkan potensi energi matahari di atap bengkel SMK?"
            className="w-full p-2.5 text-xs border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-emerald-600 text-slate-900"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-900 mb-1">
            Hipotesis Awal Kelompok (Dugaan Solusi):
          </label>
          <p className="text-[11px] text-slate-500 mb-1">
            Apa dugaan awal kelompok kalian mengenai teknologi atau metode yang paling tepat untuk mengatasi masalah tersebut?
          </p>
          <textarea
            rows={2}
            value={hypothesis}
            onChange={(e) => setHypothesis(e.target.value)}
            placeholder="Contoh: Jika bengkel memasang sistem PLTS atap yang dilengkapi baterai penyimpan daya, maka mesin bengkel dapat tetap beroperasi saat listrik padam sekaligus menghemat biaya solar genset."
            className="w-full p-2.5 text-xs border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-emerald-600 text-slate-900"
          />
        </div>
      </div>

      {/* FASE 3: Scaffolding Tahap 1 (Bimbing Penyelidikan) */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-2xs space-y-6">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-emerald-800 text-white font-bold text-xs flex items-center justify-center">3</span>
            <h3 className="font-bold text-slate-900 text-sm sm:text-base">
              FASE 3: MEMBIMBING PENYELIDIKAN (Scaffolding Tahap 1)
            </h3>
          </div>
          <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded">
            Tingkat Bantuan: Tinggi (Terstruktur)
          </span>
        </div>

        {/* Infografis Ringkas */}
        <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 text-xs text-slate-800 space-y-2">
          <div className="font-bold text-emerald-950 flex items-center gap-1.5">
            <Lightbulb className="w-4 h-4 text-emerald-700" />
            <span>Konsep Kunci: Hukum Kekekalan Energi & Disipasi</span>
          </div>
          <p>
            Menurut <strong>Hukum Kekekalan Energi</strong>, energi tidak pernah hilang begitu saja. Dalam mesin apa pun, 
            <span className="bg-amber-100 text-amber-900 px-1.5 py-0.5 rounded font-mono mx-1">
              Energi Input = Energi Output Berguna + Energi Disipasi (Terbuang)
            </span>.
            Contoh: Pada genset diesel, energi kimia solar tidak 100% jadi listrik; lebih dari 65% terbuang menjadi panas (kalor) dan bunyi bising.
          </p>
        </div>

        {/* Aktivitas Menjodohkan Interaktif */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <h4 className="font-bold text-xs sm:text-sm text-slate-900">
              Aktivitas 3.1: Menjodohkan Perangkat & Perubahan Energi Utama
            </h4>
            <button
              onClick={checkMatching}
              className="text-xs font-semibold px-2.5 py-1 rounded bg-slate-800 text-white hover:bg-slate-700"
            >
              Cek Jawaban Menjodohkan
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="space-y-2.5">
              <div className="p-2.5 border border-slate-200 rounded-lg bg-slate-50 flex items-center justify-between">
                <span><strong>1.</strong> Mesin Genset Diesel Solar</span>
                <select
                  value={matchingAnswers['1']}
                  onChange={(e) => setMatchingAnswers({ ...matchingAnswers, '1': e.target.value })}
                  className="bg-white border border-slate-300 rounded px-2 py-1 font-bold text-xs"
                >
                  <option value="">Pilih Opsi</option>
                  <option value="A">A</option>
                  <option value="B">B</option>
                  <option value="C">C</option>
                  <option value="D">D</option>
                </select>
              </div>

              <div className="p-2.5 border border-slate-200 rounded-lg bg-slate-50 flex items-center justify-between">
                <span><strong>2.</strong> Panel Surya (Solar Photovoltaic)</span>
                <select
                  value={matchingAnswers['2']}
                  onChange={(e) => setMatchingAnswers({ ...matchingAnswers, '2': e.target.value })}
                  className="bg-white border border-slate-300 rounded px-2 py-1 font-bold text-xs"
                >
                  <option value="">Pilih Opsi</option>
                  <option value="A">A</option>
                  <option value="B">B</option>
                  <option value="C">C</option>
                  <option value="D">D</option>
                </select>
              </div>

              <div className="p-2.5 border border-slate-200 rounded-lg bg-slate-50 flex items-center justify-between">
                <span><strong>3.</strong> Dinamo Motor Bor Listrik Bengkel</span>
                <select
                  value={matchingAnswers['3']}
                  onChange={(e) => setMatchingAnswers({ ...matchingAnswers, '3': e.target.value })}
                  className="bg-white border border-slate-300 rounded px-2 py-1 font-bold text-xs"
                >
                  <option value="">Pilih Opsi</option>
                  <option value="A">A</option>
                  <option value="B">B</option>
                  <option value="C">C</option>
                  <option value="D">D</option>
                </select>
              </div>

              <div className="p-2.5 border border-slate-200 rounded-lg bg-slate-50 flex items-center justify-between">
                <span><strong>4.</strong> Lampu Emergency Baterai</span>
                <select
                  value={matchingAnswers['4']}
                  onChange={(e) => setMatchingAnswers({ ...matchingAnswers, '4': e.target.value })}
                  className="bg-white border border-slate-300 rounded px-2 py-1 font-bold text-xs"
                >
                  <option value="">Pilih Opsi</option>
                  <option value="A">A</option>
                  <option value="B">B</option>
                  <option value="C">C</option>
                  <option value="D">D</option>
                </select>
              </div>
            </div>

            <div className="border border-slate-200 rounded-lg p-3 bg-white space-y-2 text-[11px] text-slate-700">
              <p className="font-bold text-slate-900">Pilihan Pasangan:</p>
              <p><strong>A.</strong> Energi Radiasi Foton Matahari → Energi Listrik DC</p>
              <p><strong>B.</strong> Energi Listrik AC → Energi Kinetik Putaran Poros & Kalor</p>
              <p><strong>C.</strong> Energi Kimia Baterai → Energi Listrik → Energi Cahaya</p>
              <p><strong>D.</strong> Energi Kimia Solar → Energi Termal → Kinetik Piston → Energi Listrik</p>
            </div>
          </div>

          {matchingFeedback && (
            <div className={`mt-2.5 p-2 rounded text-xs font-medium ${
              matchingFeedback.includes('Luar Biasa') 
                ? 'bg-emerald-100 text-emerald-900 border border-emerald-300' 
                : 'bg-amber-50 text-amber-900 border border-amber-300'
            }`}>
              {matchingFeedback}
            </div>
          )}
        </div>

        {/* Aktivitas Mengisi Titik-Titik Tabel Analisis */}
        <div>
          <h4 className="font-bold text-xs sm:text-sm text-slate-900 mb-2">
            Aktivitas 3.2: Membedah Rantai Perubahan Energi Kasus Fase 1 (Isian Rumpang)
          </h4>
          <div className="border border-slate-300 rounded-lg overflow-x-auto text-xs">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-slate-100 text-slate-800 border-b border-slate-300">
                  <th className="p-2 text-left">Sistem</th>
                  <th className="p-2 text-left">Bentuk Energi Masukan</th>
                  <th className="p-2 text-left">Bentuk Energi Berguna</th>
                  <th className="p-2 text-left">Energi Terbuang (Disipasi)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr>
                  <td className="p-2 font-bold text-slate-900">Mesin Genset Solar</td>
                  <td className="p-2">
                    Energi{' '}
                    <input
                      type="text"
                      placeholder="contoh: Kimia"
                      value={clozeGensetInput}
                      onChange={(e) => setClozeGensetInput(e.target.value)}
                      className="border border-slate-300 rounded px-1.5 py-0.5 w-24 text-xs font-semibold text-emerald-800"
                    />
                  </td>
                  <td className="p-2">
                    Energi{' '}
                    <input
                      type="text"
                      placeholder="contoh: Listrik"
                      value={clozeGensetUseful}
                      onChange={(e) => setClozeGensetUseful(e.target.value)}
                      className="border border-slate-300 rounded px-1.5 py-0.5 w-24 text-xs font-semibold text-emerald-800"
                    />
                  </td>
                  <td className="p-2">
                    Kalor panas & Energi{' '}
                    <input
                      type="text"
                      placeholder="contoh: Bunyi"
                      value={clozeGensetWaste}
                      onChange={(e) => setClozeGensetWaste(e.target.value)}
                      className="border border-slate-300 rounded px-1.5 py-0.5 w-24 text-xs font-semibold text-emerald-800"
                    />
                  </td>
                </tr>
                <tr>
                  <td className="p-2 font-bold text-slate-900">Atap Seng Terpapar Matahari</td>
                  <td className="p-2">
                    Energi{' '}
                    <input
                      type="text"
                      placeholder="contoh: Radiasi Cahaya"
                      value={clozeRoofInput}
                      onChange={(e) => setClozeRoofInput(e.target.value)}
                      className="border border-slate-300 rounded px-1.5 py-0.5 w-28 text-xs font-semibold text-emerald-800"
                    />
                  </td>
                  <td className="p-2 text-red-600 font-semibold">
                    0% (Belum dimanfaatkan sama sekali)
                  </td>
                  <td className="p-2">
                    100% jadi Energi{' '}
                    <input
                      type="text"
                      placeholder="contoh: Kalor / Panas"
                      value={clozeRoofWaste}
                      onChange={(e) => setClozeRoofWaste(e.target.value)}
                      className="border border-slate-300 rounded px-1.5 py-0.5 w-28 text-xs font-semibold text-emerald-800"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Alat Bantu Tambahan: Kalkulator Efisiensi Energi */}
        <div className="bg-slate-50 border border-slate-200 rounded-lg p-3.5 text-xs">
          <div className="flex items-center gap-1.5 font-bold text-slate-900 mb-2">
            <Calculator className="w-4 h-4 text-emerald-700" />
            <span>Alat Bantu Belajar: Simulasi Perhitungan Efisiensi Energi (%)</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 items-end">
            <div>
              <label className="block text-[11px] text-slate-600 mb-0.5">Total Energi Input (Joule):</label>
              <input
                type="number"
                value={energyInputJoules}
                onChange={(e) => setEnergyInputJoules(Number(e.target.value))}
                className="w-full px-2 py-1 border border-slate-300 rounded bg-white"
              />
            </div>
            <div>
              <label className="block text-[11px] text-slate-600 mb-0.5">Energi Berguna / Output (Joule):</label>
              <input
                type="number"
                value={energyUsefulJoules}
                onChange={(e) => setEnergyUsefulJoules(Number(e.target.value))}
                className="w-full px-2 py-1 border border-slate-300 rounded bg-white"
              />
            </div>
            <div className="p-2 bg-emerald-100/70 border border-emerald-300 rounded font-semibold text-emerald-950">
              Efisiensi: <span className="text-sm font-bold">{calculatedEfficiency.toFixed(1)}%</span>
              <span className="block text-[10px] text-slate-600 font-normal">
                Energi Disipasi (Terbuang): {wastedEnergy} Joule
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* FASE 4: Scaffolding Tahap 2 (Mandiri - Mengembangkan Solusi & Kanvas Gambar) */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-2xs space-y-6">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-emerald-800 text-white font-bold text-xs flex items-center justify-center">4</span>
            <h3 className="font-bold text-slate-900 text-sm sm:text-base">
              FASE 4: MENGEMBANGKAN & MENYAJIKAN HASIL KARYA (Mandiri)
            </h3>
          </div>
          <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded">
            Tingkat Bantuan: Berkurang (Mandiri Berkelompok)
          </span>
        </div>

        <div className="space-y-3 text-xs">
          <div>
            <label className="block font-bold text-slate-900 mb-1">
              Nama Inovasi Solusi / Alat Peraga Kelompok:
            </label>
            <input
              type="text"
              placeholder="Contoh: PLTS Atap Hybrid Mandiri dengan Baterai LiFePO4 dan Inverter Otomatis"
              value={solutionTitle}
              onChange={(e) => setSolutionTitle(e.target.value)}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-emerald-600"
            />
          </div>

          <div>
            <label className="block font-bold text-slate-900 mb-1">
              Prinsip Cara Kerja Solusi:
            </label>
            <textarea
              rows={2}
              placeholder="Jelaskan bagaimana sistem bekerja dari penangkapan sumber energi terbarukan hingga dapat menyalakan peralatan..."
              value={solutionPrinciple}
              onChange={(e) => setSolutionPrinciple(e.target.value)}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-emerald-600"
            />
          </div>
        </div>

        {/* KANVAS GAMBAR DIGITAL UNTUK SISWA */}
        <div className="border border-slate-300 rounded-xl p-4 bg-slate-50">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
            <div>
              <h4 className="font-bold text-xs sm:text-sm text-slate-900 flex items-center gap-1.5">
                <PenTool className="w-4 h-4 text-emerald-700" />
                <span>Kanvas Menggambar Skema Rancangan Solusi Kelompok</span>
              </h4>
              <p className="text-[11px] text-slate-500">
                Gambarkan alur sistem: Panel Surya → Controller → Baterai → Inverter → Beban Mesin
              </p>
            </div>

            {/* Canvas Toolbar */}
            <div className="flex items-center gap-2 flex-wrap text-xs">
              <div className="flex items-center gap-1 bg-white border border-slate-200 rounded p-1">
                <button
                  type="button"
                  aria-label="Warna Hitam"
                  onClick={() => { setBrushColor('#1e293b'); setIsEraser(false); }}
                  className={`w-5 h-5 rounded-full bg-slate-800 ${brushColor === '#1e293b' && !isEraser ? 'ring-2 ring-emerald-500' : ''}`}
                />
                <button
                  type="button"
                  aria-label="Warna Biru"
                  onClick={() => { setBrushColor('#2563eb'); setIsEraser(false); }}
                  className={`w-5 h-5 rounded-full bg-blue-600 ${brushColor === '#2563eb' && !isEraser ? 'ring-2 ring-emerald-500' : ''}`}
                />
                <button
                  type="button"
                  aria-label="Warna Hijau"
                  onClick={() => { setBrushColor('#059669'); setIsEraser(false); }}
                  className={`w-5 h-5 rounded-full bg-emerald-600 ${brushColor === '#059669' && !isEraser ? 'ring-2 ring-emerald-500' : ''}`}
                />
                <button
                  type="button"
                  aria-label="Warna Merah"
                  onClick={() => { setBrushColor('#dc2626'); setIsEraser(false); }}
                  className={`w-5 h-5 rounded-full bg-red-600 ${brushColor === '#dc2626' && !isEraser ? 'ring-2 ring-emerald-500' : ''}`}
                />
                <button
                  type="button"
                  aria-label="Warna Kuning Emas"
                  onClick={() => { setBrushColor('#d97706'); setIsEraser(false); }}
                  className={`w-5 h-5 rounded-full bg-amber-500 ${brushColor === '#d97706' && !isEraser ? 'ring-2 ring-emerald-500' : ''}`}
                />
              </div>

              <button
                type="button"
                onClick={() => setIsEraser(!isEraser)}
                className={`p-1.5 rounded border text-xs flex items-center gap-1 ${
                  isEraser 
                    ? 'bg-amber-100 border-amber-300 text-amber-900 font-bold' 
                    : 'bg-white border-slate-200 text-slate-700'
                }`}
              >
                <Eraser className="w-3.5 h-3.5" />
                <span>Penghapus</span>
              </button>

              <button
                type="button"
                onClick={clearCanvas}
                className="px-2 py-1 rounded bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 text-xs"
              >
                Bersihkan
              </button>

              <button
                type="button"
                onClick={downloadCanvas}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-slate-900 text-white text-xs hover:bg-slate-800"
              >
                <Download className="w-3 h-3" />
                <span>Unduh Skema</span>
              </button>
            </div>
          </div>

          <div className="relative border-2 border-slate-300 rounded-lg overflow-hidden bg-white shadow-inner">
            <canvas
              ref={canvasRef}
              width={800}
              height={380}
              onMouseDown={startDrawing}
              onMouseMove={draw}
              onMouseUp={stopDrawing}
              onMouseLeave={stopDrawing}
              onTouchStart={startDrawing}
              onTouchMove={draw}
              onTouchEnd={stopDrawing}
              className="w-full h-80 touch-none cursor-crosshair block"
            />
          </div>
          <p className="text-[10px] text-slate-400 mt-1 italic text-center">
            Tips: Gunakan kursor mouse atau sentuhan jari pada layar HP/tablet untuk menggambar diagram alur konversi energi rancangan kalian.
          </p>
        </div>

        {/* Tabel Rincian Komponen & Alur Transformasi */}
        <div className="space-y-3 text-xs">
          <h4 className="font-bold text-slate-900 text-xs sm:text-sm">
            Rincian Alur Transformasi Energi Rancangan:
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="p-3 border border-slate-200 rounded-lg bg-slate-50 space-y-1.5">
              <span className="font-bold text-emerald-950 block">1. Input Energi</span>
              <input
                type="text"
                placeholder="Komponen penangkap (misal: Panel Surya 5 kWp)"
                value={step1Input}
                onChange={(e) => setStep1Input(e.target.value)}
                className="w-full px-2 py-1 border border-slate-300 rounded bg-white text-xs"
              />
              <input
                type="text"
                placeholder="Perubahan: Dari Energi Radiasi Cahaya → Listrik DC"
                value={step1Trans}
                onChange={(e) => setStep1Trans(e.target.value)}
                className="w-full px-2 py-1 border border-slate-300 rounded bg-white text-xs"
              />
            </div>

            <div className="p-3 border border-slate-200 rounded-lg bg-slate-50 space-y-1.5">
              <span className="font-bold text-emerald-950 block">2. Penyimpanan & Pengubah</span>
              <input
                type="text"
                placeholder="Komponen pengubah (misal: Baterai & Inverter)"
                value={step2Comp}
                onChange={(e) => setStep2Comp(e.target.value)}
                className="w-full px-2 py-1 border border-slate-300 rounded bg-white text-xs"
              />
              <input
                type="text"
                placeholder="Perubahan: Listrik DC → Energi Kimia Baterai → Listrik AC"
                value={step2Trans}
                onChange={(e) => setStep2Trans(e.target.value)}
                className="w-full px-2 py-1 border border-slate-300 rounded bg-white text-xs"
              />
            </div>

            <div className="p-3 border border-slate-200 rounded-lg bg-slate-50 space-y-1.5">
              <span className="font-bold text-emerald-950 block">3. Beban Pemanfaatan</span>
              <input
                type="text"
                placeholder="Beban yang dinyalakan (misal: Mesin Bubut, Las, Bor)"
                value={step3Load}
                onChange={(e) => setStep3Load(e.target.value)}
                className="w-full px-2 py-1 border border-slate-300 rounded bg-white text-xs"
              />
              <input
                type="text"
                placeholder="Manfaat utama: Bebas emisi genset, hemat solar 100%"
                value={step3Benefit}
                onChange={(e) => setStep3Benefit(e.target.value)}
                className="w-full px-2 py-1 border border-slate-300 rounded bg-white text-xs"
              />
            </div>
          </div>
        </div>
      </div>

      {/* FASE 5: Menganalisis & Mengevaluasi Solusi */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-2xs space-y-4">
        <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
          <span className="w-6 h-6 rounded-full bg-emerald-800 text-white font-bold text-xs flex items-center justify-center">5</span>
          <h3 className="font-bold text-slate-900 text-sm sm:text-base">
            FASE 5: MENGANALISIS & MENGEVALUASI PROSES PEMECAHAN MASALAH
          </h3>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-900 mb-1">
            1. Evaluasi Keandalan & Efisiensi Solusi:
          </label>
          <p className="text-[11px] text-slate-500 mb-1">
            Bagaimana jika cuaca mendung 2 hari berturut-turut? Apa solusi cadangan atau komponen penunjang dalam rancangan kalian?
          </p>
          <textarea
            rows={2}
            value={reflectionEffectiveness}
            onChange={(e) => setReflectionEffectiveness(e.target.value)}
            placeholder="Jelaskan kapasitas baterai, integrasi hybrid dengan grid PLN, atau sistem proteksi..."
            className="w-full p-2.5 text-xs border border-slate-300 rounded-lg text-slate-900 focus:ring-2 focus:ring-emerald-600"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-900 mb-1">
            2. Perbandingan Dampak Lingkungan & Keberlanjutan:
          </label>
          <p className="text-[11px] text-slate-500 mb-1">
            Bandingkan antara penggunaan genset solar diesel dengan sistem energi terbarukan rancangan kelompokmu!
          </p>
          <textarea
            rows={2}
            value={reflectionComparison}
            onChange={(e) => setReflectionComparison(e.target.value)}
            placeholder="Bandingkan dari sisi polusi suara (dB), polusi asap CO2, dan biaya pembelian bahan bakar..."
            className="w-full p-2.5 text-xs border border-slate-300 rounded-lg text-slate-900 focus:ring-2 focus:ring-emerald-600"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-900 mb-1">
            3. Refleksi Kerjasama Kelompok (Gotong Royong):
          </label>
          <p className="text-[11px] text-slate-500 mb-1">
            Bagaimana proses kerja kelompok berlangsung? Hal baru apa yang paling membuka wawasan kalian mengenai "Energi dan Perubahannya"?
          </p>
          <textarea
            rows={2}
            value={reflectionTeamwork}
            onChange={(e) => setReflectionTeamwork(e.target.value)}
            placeholder="Tuliskan pengalaman refleksi tim secara jujur..."
            className="w-full p-2.5 text-xs border border-slate-300 rounded-lg text-slate-900 focus:ring-2 focus:ring-emerald-600"
          />
        </div>

        <div className="pt-4 flex items-center justify-end gap-3">
          <button
            onClick={handleSaveToLocalStorage}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-emerald-700 text-white font-semibold text-xs hover:bg-emerald-600 transition-colors shadow-xs"
          >
            <Save className="w-4 h-4" />
            <span>Simpan Seluruh Hasil Pengerjaan</span>
          </button>
        </div>
      </div>

    </div>
  );
};
