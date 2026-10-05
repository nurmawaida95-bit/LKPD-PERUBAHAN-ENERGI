export interface Scenario {
  id: string;
  name: string;
  category: string;
  title: string;
  story: string;
  illustrationPrompt: string;
  problemContext: string;
  exampleSolution: string;
}

export const SCENARIOS: Scenario[] = [
  {
    id: 'bengkel-desa',
    name: 'Skenario 1: Bengkel Praktik & Krisis Listrik Desa (Teknologi & Rekayasa)',
    category: 'Teknologi, Otomotif & Manufaktur',
    title: 'Dilema Mesin Bengkel Praktik dan Padamnya Aliran Listrik Sukamaju Saat Beban Puncak',
    story: `SMK Negeri 1 Sukamaju berlokasi di daerah sub-perkotaan yang berdampingan dengan pemukiman warga dan sentra bengkel UMKM. Setiap memasuki musim kemarau panjang, konsumsi listrik melonjak drastis karena pendingin ruangan dan pompa air warga menyala serentak. Pada jam beban puncak (pukul 17.00 - 21.00 WIB) serta jam praktik bengkel sekolah di siang hari, trafo gardu listrik setempat sering mengalami kelebihan beban (overload), memicu pemadaman listrik bergilir yang tiba-tiba.

Akibatnya, aktivitas bengkel praktik SMK—mulai dari mesin bubut, gerinda, hingga las listrik—terhenti mendadak. Benda kerja presisi siswa menjadi rusak, dan deadline penyelesaian pesanan komponen industri gagal terpenuhi. Untuk mengatasinya, pihak bengkel menyalakan genset (generator diesel) tua berdaya 15 kVA. Namun, genset tersebut menimbulkan suara bising yang memekakkan telinga (mencapai 95 dB), mengeluarkan asap hitam tebal berbau solar menyengat yang mencemari udara ruang praktik, serta menghabiskan biaya bahan bakar solar hingga Rp 250.000 hanya untuk 3 jam pengoperasian. Ironisnya, di siang hari atap seng bengkel SMK yang seluas 400 m² terpapar sinar matahari terik dengan suhu permukaan atap mencapai 48°C tanpa dimanfaatkan sama sekali.`,
    illustrationPrompt: `[Ilustrasi suasana bengkel mesin praktik SMK dan perkampungan warga di kala senja musim kemarau: mesin bubut dan lampu penerangan mati mendadak dengan siswa berseragam praktik mekanik tertegun di samping benda kerja logam, di sudut bengkel sebuah mesin generator genset diesel tua bergetar hebat mengeluarkan kepulan asap abu-abu hitam pekat dan knalpot membara, sementara di luar jendela terlihat atap seng sekolah yang sangat luas bermandikan terik radiasi sinar matahari siang hari yang belum terpasang solar panel, gaya seni infografis semi-realistis modern dengan kontras warna hangat dan dingin, detail teknis peralatan listrik dan mekanik]`,
    problemContext: 'Ketergantungan pada listrik PLN fosil dan genset diesel boros biaya/emisi saat beban puncak, padahal terdapat potensi radiasi matahari melimpah di atap bengkel yang belum dikonversi menjadi energi listrik.',
    exampleSolution: 'Perancangan Sistem Solar Panel PV Hybrid (PLTS Atap) dengan Baterai Penyimpan dan Sistem Manajemen Beban (Load Management) Prioritas di Bengkel Sekolah.'
  },
  {
    id: 'agribisnis-pengering',
    name: 'Skenario 2: Pembusukan Panen & Krisis Bahan Bakar (Agribisnis & Pengolahan)',
    category: 'Agribisnis & Pengolahan Hasil Pertanian',
    title: 'Ancaman Pembusukan Gabah dan Beban Biaya Pengering Biji-Bijian di Desa Sumber Subur',
    story: `Kelompok Tani Muda Mandiri yang beranggotakan para alumni dan siswa Praktik Kerja Lapangan (PKL) SMK Agribisnis Sumber Subur menghadapi kendala serius pasca panen raya jagung dan padi. Saat musim pancaroba dengan cuaca tak menentu, metode penjemuran konvensional di lantai jemur terbuka sering gagal karena hujan turun tiba-tiba, menyebabkan tingkat kadar air biji tetap tinggi dan jamur aflatoksin tumbuh merusak 30% hasil panen.

Untuk mempercepat pengeringan, kelompok tani sempat menyewa mesin rotary dryer berbahan bakar gas elpiji dan minyak tanah. Namun biaya bahan bakar fosil tersebut menyedot hampir 40% margin keuntungan penjualan hasil tani. Di sisi lain, setiap hari kegiatan pertanian dan peternakan sapi di sekitar lokasi menghasilkan ratusan kilogram kotoran ternak basah dan limbah tongkol jagung kering yang dibiarkan menumpuk hingga membusuk dan mengeluarkan gas metana serta bau tak sedap ke pemukiman.`,
    illustrationPrompt: `[Ilustrasi hamparan penjemuran biji jagung dan gabah di halaman sentra pertanian SMK Agribisnis yang terancam mendung hujan lebat, siswa dan petani terburu-buru menutupi terpal, di sampingnya terdapat tumpukan limbah tongkol jagung kering dan kandang ternak sapi dengan limbah kotoran yang melimpah belum diolah, serta mesin pemanas silinder berbahan bakar tabung elpiji mahal yang berasap, gaya visual ilustrasi editorial IPAS SMK informatif dan inspiratif]`,
    problemContext: 'Ketergantungan pada pengering fosil berbiaya tinggi dan cuaca alam yang tidak stabil, mengabaikan potensi konversi energi kimia biomassa limbah tongkol/biogas kotoran ternak dan energi termal surya terarah.',
    exampleSolution: 'Perancangan Rumah Pengering Surya Efek Rumah Kaca (Solar Dryer Dome) Terpadu dengan Kompor Biomassa Briket Tongkol Jagung / Digester Biogas.'
  },
  {
    id: 'sekolah-hemat-energi',
    name: 'Skenario 3: Pemborosan Energi & Tagihan Listrik Gedung Sekolah (Bisnis & TI)',
    category: 'Manajemen Gedung, IT & Perkantoran',
    title: 'Lonjakan Tagihan Listrik Gedung Kampus SMK Akibat Vampire Power dan Sistem Pasif yang Terabaikan',
    story: `Berdasarkan audit internal yang dilakukan jurusan Teknik Komputer Jaringan dan Manajemen Perkantoran SMK Bintang Bangsa, tagihan rekening listrik bulanan sekolah melonjak menembus angka Rp 18.500.000 per bulan. Tim investigasi mendapati bahwa di 6 laboratorium komputer (berisi 240 unit PC) dan puluhan ruang kelas, perangkat elektronik seperti proyektor, monitor, dispenser air, dan AC berkapasitas besar kerap dibiarkan dalam kondisi 'standby' (vampire load) sepanjang malam dan akhir pekan.

Selain itu, desain arsitektur jendela gedung yang menghadap barat membuat ruangan kelas menjadi sangat panas di siang hari (radiasi termal tinggi), sehingga AC dipaksa bekerja pada suhu ekstrem 16°C secara non-stop dengan kompresor bekerja maksimal. Padahal, ventilasi alami gedung sebenarnya sangat cukup jika jalur aliran udara dingin (ventilasi silang) dioptimalkan. Energi listrik dalam jumlah masif terbuang menjadi energi kalor (panas) sia-sia yang justru menambah beban pendinginan.`,
    illustrationPrompt: `[Ilustrasi ruangan laboratorium komputer SMK dan ruang kelas modern di waktu senja dengan monitor menyala standby berkedip merah dan AC bersuhu rendah terus bekerja di ruangan kosong tanpa penghuni, diagram infografis transparan menunjukkan aliran garis energi listrik yang terbuang sia-sia menjadi gelombang radiasi panas merah di sekitar komputer dan stopkontak, gaya ilustrasi arsitektural teknis digital yang bersih dengan palet warna cyan dan oranye neon]`,
    problemContext: 'Pemborosan energi masif akibat perilaku konsumsi listrik pasif (vampire power), pendinginan termal tidak efisien, dan ketiadaan sistem otomatisasi kendali daya terpadu.',
    exampleSolution: 'Perancangan Sistem Smart Energy Monitoring berbasis IoT Sederhana, Pengaturan Ventilasi Pasif Termal, dan Kampanye Operasional Zero-Vampire Load.'
  }
];

export interface MatchingConcept {
  id: string;
  sourceEnergy: string;
  transDevice: string;
  mainOutput: string;
  wasteOutput: string;
}

export const MATCHING_DATA: MatchingConcept[] = [
  {
    id: 'm1',
    sourceEnergy: 'Energi Kimia (Bahan bakar solar pada genset)',
    transDevice: 'Motor Bakar Diesel Genset',
    mainOutput: 'Energi Listrik & Kinetik Putaran Generator',
    wasteOutput: 'Energi Kalor (panas mesin/knalpot) & Energi Bunyi (kebisingan suara)'
  },
  {
    id: 'm2',
    sourceEnergy: 'Energi Cahaya / Radiasi Foton (Sinar Matahari)',
    transDevice: 'Panel Surya Fotovoltaik (Solar Cell)',
    mainOutput: 'Energi Listrik Arus Searah (DC)',
    wasteOutput: 'Energi Kalor (peningkatan suhu permukaan panel)'
  },
  {
    id: 'm3',
    sourceEnergy: 'Energi Listrik dari Stopkontak PLN',
    transDevice: 'Mesin Gerinda / Bor Listrik Bengkel',
    mainOutput: 'Energi Kinetik (Putaran mata gerinda/mata bor)',
    wasteOutput: 'Energi Kalor (gesekan) & Energi Bunyi serta Percikan Cahaya'
  },
  {
    id: 'm4',
    sourceEnergy: 'Energi Kimia Makanan / Otot Manusia',
    transDevice: 'Siswa Mengayuh Penggerak Manual / Bekerja',
    mainOutput: 'Energi Kinetik (gerak mekanik alat)',
    wasteOutput: 'Energi Kalor (keringat/panas tubuh) & Lelah'
  }
];

export const RAW_MARKDOWN_LKPD = `# LEMBAR KERJA PESERTA DIDIK (LKPD)
## BERBASIS PROBLEM-BASED LEARNING (PBL) DENGAN PENDEKATAN SCAFFOLDING

---

### **INFORMASI UMUM DOKUMEN PEMBELAJARAN**
* **Mata Pelajaran** : Proyek Ilmu Pengetahuan Alam dan Sosial (IPAS)
* **Aspek/Materi** : Energi dan Perubahannya
* **Sasaran Siswa** : Siswa Kelas X SMK (Semua Bidang Keahlian / Fase E)
* **Alokasi Waktu** : 3 x 45 Menit (1 Pertemuan Pembelajaran)
* **Model Pembelajaran** : *Problem-Based Learning* (PBL) Terintegrasi *Scaffolding*
* **Profil Pelajar Pancasila** : Beriman dan Bertakwa, Gotong Royong (Kolaborasi Tim), dan Bernalar Kritis (Analisis Masalah & Desain Solusi)

---

### **IDENTITAS KELOMPOK**
* **Nama Kelompok** : ..........................................................................
* **Program Keahlian/Kelas** : ..........................................................................
* **Hari, Tanggal** : ..........................................................................
* **Anggota Kelompok** :
  1. .................................................................... (Ketua Kelompok)
  2. .................................................................... (Notulis / Pengumpul Data)
  3. .................................................................... (Perancang Skema / Desain)
  4. .................................................................... (Juru Bicara / Presenter)
  5. .................................................................... (Anggota Pendukung)

---

### **CAPAIAN PEMBELAJARAN, IPK, & TUJUAN PEMBELAJARAN**

#### A. Capaian Pembelajaran (Fase E - Aspek Energi dan Perubahannya)
Peserta didik mampu memahami konsep dasar energi, bentuk-bentuk energi, perubahan (transformasi) energi, hukum kekekalan energi, serta keterbatasan dan pemanfaatan sumber energi terbarukan dalam mengatasi permasalahan energi di lingkungan kehidupan sehari-hari dan dunia kerja/kejuruan SMK secara kritis, mandiri, dan kolaboratif.

#### B. Indikator Pencapaian Kompetensi (IPK)
1. **IPK 1 (Pengetahuan/Kognitif)**: Mengidentifikasi berbagai bentuk energi (kimia, kinetik, potensial, listrik, kalor, cahaya, dan bunyi) dalam fenomena kehidupan nyata dan aktivitas kejuruan SMK.
2. **IPK 2 (Analisis Saintifik)**: Menganalisis diagram alir transformasi energi dan energi disipasi (terbuang) berdasarkan Hukum Kekekalan Energi pada sistem konversi energi.
3. **IPK 3 (Keterampilan/Desain)**: Merancang skema prototype/konsep solusi teknologi ramah lingkungan guna mengatasi permasalahan pemborosan atau krisis energi di lingkungan sekitar.
4. **IPK 4 (Evaluasi & Refleksi)**: Mengevaluasi efektivitas, efisiensi energi, dan dampak keberlanjutan dari solusi yang dirumuskan bersama kelompok.

#### C. Tujuan Pembelajaran (TP)
Melalui model pembelajaran *Problem-Based Learning* (PBL) berbantuan LKPD dengan pendekatan scaffolding, peserta didik diharapkan mampu:
1. Menjelaskan sedikitnya 4 bentuk energi dan prinsip dasar Hukum Kekekalan Energi dengan tepat setelah menyimak masalah kontekstual.
2. Menganalisis rantai perubahan energi pada kasus krisis energi bengkel/sekolah secara sistematis melalui tabel penuntun.
3. Mengembangkan gagasan karya dan menggambar skema solusi energi alternatif/efisiensi energi secara mandiri bersama kelompok.
4. Mempresentasikan serta mengevaluasi efektivitas solusi yang ditawarkan dengan sikap bernalar kritis dan kerja sama yang solid.

---

### **PETUNJUK PENGGUNAAN LKPD BER-SCAFFOLDING**
1. **Pelajari Alur**: LKPD ini terdiri dari 5 Fase PBL. Ikuti langkah demi langkah secara runtut.
2. **Perhatikan Tingkat Bantuan (Scaffolding)**:
   * **Fase 3 (Scaffolding Tahap 1 - Bantuan Terbimbing)**: Kalian diberikan teks konsep ringkas, kalimat rumpang (titik-titik), dan tabel terstruktur untuk mempermudah pemahaman awal.
   * **Fase 4 (Scaffolding Tahap 2 - Mandiri)**: Bantuan dikurangi secara bertahap. Kalian ditantang merancang skema solusi orisinal hasil kreasi kelompok sendiri.
3. **Kolaborasi Aktif**: Bagilah tugas secara adil dalam kelompok. Hargai setiap pendapat rekan satu tim.

---

## **FASE 1 PBL: ORIENTASI MASALAH (Masalah Kontekstual & Visualisasi)**

### **Artikel Masalah Kontekstual:**
> **"Dilema Mesin Bengkel Praktik dan Padamnya Aliran Listrik Sukamaju Saat Beban Puncak Musim Kemarau"**
> 
> SMK Negeri 1 Sukamaju berlokasi di wilayah sub-perkotaan yang berdampingan dengan pemukiman warga dan deretan bengkel UMKM. Setiap kali memasuki puncak musim kemarau, kebutuhan listrik melonjak drastis akibat pemakaian pendingin ruangan, kipas angin, dan pompa air warga yang bekerja terus-menerus. Pada jam beban puncak (pukul 17.00 - 21.00 WIB) serta jam praktik bengkel sekolah di siang hari, trafo gardu listrik sering mengalami kelebihan beban (*overload*), menyebabkan pemadaman bergilir yang mendadak.
> 
> Kondisi ini menjadi mimpi buruk bagi siswa dan guru kejuruan: mesin bubut, bor listrik, dan mesin las tiba-tiba mati di tengah pengerjaan benda kerja presisi. Benda kerja menjadi cacat (*reject*), dan target proyek praktikum gagal selesai tepat waktu.
> 
> Sebagai solusi darurat, pihak sekolah menyalakan mesin genset berbahan bakar solar berdaya 15 kVA. Masalah baru pun muncul:
> 1. Genset tua tersebut mengeluarkan suara bising memekakkan telinga (mencapai 95 dB) yang mengganggu konsentrasi belajar.
> 2. Knalpot genset menyemburkan kepulan asap hitam berbau menyengat ke dalam ruang bengkel dan lingkungan sekitar.
> 3. Biaya bahan bakar solar menghabiskan dana kas operasional sekolah hingga Rp 250.000 untuk tiap 3 jam pemakaian.
> 
> Padahal, di saat bersamaan, atap seng bengkel praktik seluas 400 m² terpapar terik radiasi sinar matahari tropis selama lebih dari 8 jam setiap hari dengan suhu permukaan atap mencapai lebih dari 48°C. Sayangnya, potensi limpahan energi matahari tersebut terbiarkan begitu saja tanpa pernah dimanfaatkan.

\`\`\`
[Ilustrasi suasana bengkel mesin praktik SMK dan perkampungan warga di kala senja musim kemarau: mesin bubut dan lampu penerangan mati mendadak dengan siswa berseragam praktik mekanik tertegun di samping benda kerja logam, di sudut bengkel sebuah mesin generator genset diesel tua bergetar hebat mengeluarkan kepulan asap abu-abu hitam pekat dan knalpot membara, sementara di luar jendela terlihat atap seng sekolah yang sangat luas bermandikan terik radiasi sinar matahari siang hari yang belum terpasang solar panel, gaya seni infografis semi-realistis modern dengan kontras warna hangat dan dingin, detail teknis peralatan listrik dan mekanik]
\`\`\`

---

## **FASE 2 PBL: MENGORGANISASI SISWA UNTUK BELAJAR**

Setelah membaca dan mengamati ilustrasi pada cerita di Fase 1, diskusikan pertanyaan pemantik berikut bersama kelompokmu!

### **A. Pertanyaan Pemantik:**
1. Mengapa menyalakan genset solar dinilai bukan solusi yang ideal dari sudut pandang biaya operasional dan kelestarian lingkungan?
2. Sumber energi apakah yang sebenarnya melimpah ruah di lokasi SMK tersebut namun belum diubah bentuknya menjadi energi listrik yang berguna?

### **B. Rumusan Masalah Utama:**
*(Tuliskan 1 kalimat tanya utama yang paling krusial untuk diselesaikan oleh kelompokmu!)*
> **Rumusan Masalah:**  
> ...........................................................................................................................................................  
> ...........................................................................................................................................................

### **C. Hipotesis Awal (Dugaan Sementara Solusi Kelompok):**
*(Tuliskan dugaan awal: teknologi atau metode apa yang menurut kelompok kalian paling memungkinkan untuk mengatasi masalah di atas?)*
> **Hipotesis:**  
> ...........................................................................................................................................................  
> ...........................................................................................................................................................

---

## **FASE 3 PBL: MEMBIMBING PENYELIDIKAN (Scaffolding Tahap 1 - Konsep Dasar)**

Sebelum merancang solusi yang tepat, mari pahami konsep dasar sains dan rekayasa energi melalui panduan terstruktur di bawah ini.

### 📚 **Teks Bacaan Singkat / Infografis Konsep Energi (Bantuan Konsep)**
1. **Hakikat Energi**: Energi adalah kemampuan suatu sistem untuk melakukan usaha (*work*) atau menyebabkan perubahan.
2. **Bentuk-Bentuk Energi Populer**:
   * **Energi Kinetik**: Energi yang dimiliki benda karena gerakannya (contoh: putaran mesin turbin, aliran air, putaran mata bor).
   * **Energi Potensial Gravitasi**: Energi tersimpan karena posisi atau ketinggian benda terhadap acuan.
   * **Energi Kimia**: Energi tersimpan dalam ikatan molekul zat (contoh: bahan bakar fosil solar/bensin, baterai, biomassa, makanan).
   * **Energi Listrik**: Energi yang dihasilkan dari aliran muatan elektron melalui konduktor.
   * **Energi Termal (Kalor)**: Energi kinetik mikroskopis partikel zat yang bergetar/bergerak (berkaitan dengan suhu/panas).
   * **Energi Radiasi / Cahaya**: Energi yang dipancarkan dalam bentuk gelombang elektromagnetik (contoh: foton sinar matahari).
   * **Energi Bunyi**: Energi yang merambat melalui getaran medium partikel.
3. **Hukum Kekekalan Energi (Hukum I Termodinamika)**:
   > *"Energi tidak dapat diciptakan dan tidak dapat dimusnahkan. Energi hanya dapat berubah (ditransformasikan) dari satu bentuk ke bentuk yang lain."*
   $$\\text{Total Energi Input} = \\text{Total Energi Output yang Berguna} + \\text{Total Energi Disipasi (Terbuang)}$$
4. **Energi Disipasi (Energi yang Terbuang)**:
   Tidak ada mesin buatan manusia yang memiliki efisiensi 100%. Sebagian energi input pasti akan mengalami disipasi (biasanya terbuang menjadi panas tak terkendali akibat gesekan atau bunyi kebisingan). Mesin yang baik adalah mesin yang mampu meminimalkan energi disipasi tersebut.

---

### **Aktivitas 3.1: Menjodohkan Konsep Perubahan Energi (Scaffolding Terpandu)**
Tarik garis hubung atau cocokkan pasangan huruf dengan angka yang benar!

| No | Perangkat / Fenomena Konversi | Pilihan Perubahan Bentuk Energi Utama |
|:---:|:---|:---|
| 1 | Mesin Genset Diesel Solar | A. Energi Radiasi Foton (Matahari) $\\rightarrow$ Energi Listrik (DC) |
| 2 | Panel Surya (*Photovoltaic*) | B. Energi Listrik $\\rightarrow$ Energi Kinetik (Putaran) + Kalor Gesekan |
| 3 | Mesin Bor Listrik Bengkel | C. Energi Kimia (Baterai) $\\rightarrow$ Energi Listrik $\\rightarrow$ Energi Cahaya |
| 4 | Lampu LED Emergency Baterai | D. Energi Kimia (Solar) $\\rightarrow$ Energi Termal $\\rightarrow$ Energi Mekanik $\\rightarrow$ Energi Listrik |

*Jawaban Menjodohkan: 1 - (...), 2 - (...), 3 - (...), 4 - (...)*

---

### **Aktivitas 3.2: Tabel Analisis Rantai Perubahan Energi pada Kasus Fase 1 (Isian Terbimbing)**
Lengkapilah titik-titik pada tabel berikut untuk menganalisis mengapa genset pada cerita Fase 1 tidak efisien:

| Komponen / Sistem | Bentuk Energi Masukan (Input) | Proses Konversi yang Terjadi | Bentuk Energi Utama yang Diharapkan (Output Berguna) | Bentuk Energi Terbuang (Disipasi) | Kerugian / Dampak Lingkungan yang Muncul |
|:---|:---|:---|:---|:---|:---|
| **Mesin Genset Diesel** | Energi ........................ *(tersimpan dalam solar)* | Pembakaran bahan bakar memutar piston dan poros generator | Energi ........................ *(menghidupkan mesin bengkel)* | 1. Energi Kalor (mesin panas membara)<br>2. Energi ........................ *(suara 95 dB)* | Asap hitam beracun, polusi udara ($CO_2$), dan biaya beli bahan bakar mahal. |
| **Atap Bengkel Terpapar Surya** | Energi ........................ *(radiasi foton matahari)* | Tidak diserap alat, sinar membentur atap seng | Tidak ada yang dimanfaatkan (0%) | 100% terserap menjadi Energi ........................ *(atap menjadi panas 48°C)* | Suhu ruang bengkel menjadi gerah, siswa tidak nyaman belajar. |

---

## **FASE 4 PBL: MENGEMBANGKAN & MENYAJIKAN HASIL KARYA (Scaffolding Tahap 2 - Mandiri)**

*Pada tahap ini, bantuan dikurangi! Kelompokmu ditantang menjadi konsultan teknologi energi muda SMK untuk merancang solusi terbarukan bagi SMK Negeri 1 Sukamaju.*

### **A. Deskripsi Gagasan Solusi Kelompok:**
*(Tuliskan nama solusi/alat rancangan kalian, cara kerja umum, dan alasan memilih solusi tersebut!)*
* **Nama Inovasi Solusi** : ............................................................................................................................
* **Prinsip Kerja Solusi** : ............................................................................................................................
  ............................................................................................................................................................................

### **B. Ruang Gambar Skema Rancangan Solusi:**
*(Gambarkan diagram/skema alur prototype rancangan kelompokmu! Cantumkan komponen utama, arah panah aliran energi, serta beri label nama komponen secara jelas!)*

+---------------------------------------------------------------------------------------------------+
|                                                                                                   |
|                                                                                                   |
|                                                                                                   |
|                                                                                                   |
|                                [ KOTAK MENGGAMBAR SKEMA RANCANGAN ]                              |
|                          (Gambarkan Skema Sistem, Arah Aliran Energi, dan                         |
|                           Komponen Pendukung: Panel/Inverter/Baterai/Alat)                        |
|                                                                                                   |
|                                                                                                   |
|                                                                                                   |
|                                                                                                   |
+---------------------------------------------------------------------------------------------------+

### **C. Rincian Alur Transformasi Energi pada Solusi Kalian:**
Jelaskan perubahan energi yang berlangsung pada setiap komponen rancangan kalian:
1. **Bagian Input Energi**:
   * Sumber energi: ............................................................................................................................
   * Komponen penangkap energi: .................................................................................................
2. **Bagian Penyimpanan / Pengonversi**:
   * Komponen penyimpan/pengubah: ............................................................................................
   * Transformasi energi yang terjadi: Dari Energi ............................ menjadi Energi ............................
3. **Bagian Beban Output (Pemanfaatan)**:
   * Peralatan bengkel/sekolah yang dinyalakan: .............................................................................
   * Manfaat ekonomi & lingkungan langsung: .................................................................................

---

## **FASE 5 PBL: MENGANALISIS & MENGEVALUASI PROSES PEMECAHAN MASALAH**

Lakukan penilaian objektif dan refleksi terhadap solusi karya yang telah dibuat serta bagaimana kerjasama kelompok kalian.

### **A. Evaluasi Kritis Solusi Rancangan:**
1. **Tingkat Efektivitas**: Apakah solusi yang kalian rancang dapat menjamin kelangsungan mesin bengkel saat listrik PLN padam di malam hari atau saat hari mendung? Jika iya, apa komponen kunci penyokongnya?
   > *Jawaban:* ......................................................................................................................................
   > ...........................................................................................................................................................
2. **Efisiensi & Dampak Lingkungan**: Bandingkan emisi karbon dan biaya operasional antara solusi terbarukan kelompokmu dengan mesin genset diesel pada cerita Fase 1!
   > *Jawaban:* ......................................................................................................................................
   > ...........................................................................................................................................................
3. **Potensi Kendala Lapangan**: Kendala teknis apa yang mungkin dihadapi saat memasang alat tersebut di atap bengkel SMK, dan bagaimana kelompokmu mengantisipasinya?
   > *Jawaban:* ......................................................................................................................................
   > ...........................................................................................................................................................

### **B. Refleksi Kolaborasi Kelompok (Gotong Royong):**
1. Bagaimana pembagian peran kerja di kelompokmu selama menyelesaikan LKPD ini? Apakah seluruh anggota berkontribusi aktif?
   > *Refleksi:* ......................................................................................................................................
2. Hal baru apa yang paling berkesan dan membuka wawasan kalian mengenai "Energi dan Perubahannya" dalam kehidupan vokasi nyata?
   > *Refleksi:* ......................................................................................................................................

---

### **RUBRIK ASESMEN & LEMBAR PENGESAHAN GURU**

| Aspek Penilaian | Skor Maks | Skor Perolehan | Catatan & Umpan Balik Guru |
|:---|:---:|:---:|:---|
| **1. Identifikasi Masalah & Hipotesis (Fase 1-2)** | 20 | | |
| **2. Penguasaan Konsep Transformasi Energi (Fase 3)** | 25 | | |
| **3. Orisinalitas & Kelayakan Skema Solusi (Fase 4)** | 35 | | |
| **4. Kemampuan Evaluasi Kritis & Refleksi (Fase 5)** | 20 | | |
| **TOTAL SKOR NILAI AKHIR** | **100** | | |

*Tanda Tangan Guru Pengampu IPAS:* .................................................  
*Tanggal Penilaian:* .................................................  
`;

export const TEACHER_GUIDE_CONTENT = {
  curriculum: {
    mataPelajaran: 'Proyek IPAS (Ilmu Pengetahuan Alam dan Sosial)',
    bidangKeahlian: 'Semua Program Keahlian SMK',
    kelasFase: 'Kelas X / Fase E',
    alokasiWaktu: '3 Jam Pelajaran (3 x 45 Menit = 135 Menit)',
    model: 'Problem-Based Learning (PBL) berbantuan Scaffolding',
    pendekatan: 'Kontekstual Kejuruan (Vokasi) & Berpusat pada Peserta Didik'
  },
  scaffoldingSteps: [
    {
      level: 'Tahap 1: High Scaffolding (Bantuan Intensif)',
      fase: 'Fase 1 & Fase 3',
      teacherAction: 'Guru menyajikan fenomena masalah riil dengan narasi konkret dan visualisasi. Guru memberikan ringkasan konsep inti, aktivitas menjodohkan dengan opsi terbatas, serta tabel analisis terstruktur dengan titik-titik (cloze test) agar siswa tidak bingung.',
      studentTarget: 'Siswa mampu mengidentifikasi bentuk energi awal, energi output, dan energi disipasi tanpa tersesat dalam rumus rumit.'
    },
    {
      level: 'Tahap 2: Fading Scaffolding (Bantuan Dikurangi Bertahap)',
      fase: 'Fase 2 & Fase 4',
      teacherAction: 'Guru hanya memberikan pertanyaan penuntun (guiding prompts) dan kanvas skema kosong. Guru berkeliling memfasilitasi diskusi tanpa memberikan jawaban langsung ("Bagaimana agar listrik matahari siang bisa dipakai malam hari?").',
      studentTarget: 'Siswa mandiri merancang komponen sistem alternatif (panel PV -> solar charge controller -> baterai -> inverter -> beban mesin bengkel).'
    },
    {
      level: 'Tahap 3: Autonomous Evaluation (Kemandirian Penuh)',
      fase: 'Fase 5',
      teacherAction: 'Guru berperan sebagai penilai kritis (stakeholder) yang menguji keandalan rancangan siswa (cost-benefit, cuaca mendung, perawatan baterai).',
      studentTarget: 'Siswa mampu mempertahankan argumen saintifik dan mengevaluasi kelemahan/kelebihan rancangan mereka sendiri.'
    }
  ],
  rubrics: [
    {
      kriteria: 'Bernalar Kritis (Perumusan Masalah & Analisis Energi)',
      skor4: 'Mampu merumuskan masalah spesifik dengan variabel jelas, menganalisis seluruh perubahan energi input, berguna, dan disipasi secara akurat.',
      skor3: 'Rumusan masalah tepat, mampu menganalisis sebagian besar perubahan energi dengan sedikit bantuan guru.',
      skor2: 'Rumusan masalah masih terlalu umum, mengalami kesulitan membedakan energi berguna dan energi terbuang.',
      skor1: 'Tidak mampu merumuskan masalah dan keliru mengidentifikasi bentuk-bentuk energi.'
    },
    {
      kriteria: 'Kreativitas & Kelayakan Desain Skema Solusi (Fase 4)',
      skor4: 'Skema rancangan sangat jelas, alur energi logis dan aplikatif untuk bengkel SMK, dilengkapi komponen proteksi/penyimpanan yang tepat.',
      skor3: 'Skema rancangan cukup jelas dan aplikatif, komponen utama lengkap namun detail alur konversi kurang lengkap.',
      skor2: 'Skema rancangan ada namun sulit direalisasikan atau komponen kunci (misal: inverter/baterai) terlewatkan.',
      skor1: 'Rancangan tidak jelas, tidak ada alur konversi energi yang dapat dipertanggungjawabkan.'
    },
    {
      kriteria: 'Gotong Royong & Refleksi Evaluasi (Fase 5)',
      skor4: 'Seluruh anggota berbagi peran secara setara, refleksi diri jujur dan mendalam, mampu mengidentifikasi kelemahan solusi secara objektif.',
      skor3: 'Kerja tim berjalan baik, refleksi cukup baik namun evaluasi terhadap kelemahan solusi masih dangkal.',
      skor2: 'Hanya 1-2 siswa yang aktif bekerja, refleksi hanya bersifat formalitas singkat.',
      skor1: 'Tidak terjadi kerjasama tim, tidak ada refleksi yang bermakna.'
    }
  ],
  kunciJawaban: {
    fase2Rumusan: 'Contoh Jawaban Ideal: "Bagaimana cara merancang sistem penyedia energi listrik alternatif ramah lingkungan dan hemat biaya dengan memanfaatkan potensi energi matahari di atap bengkel SMK untuk mengatasi kendala pemadaman listrik saat beban puncak?"',
    fase2Hipotesis: 'Contoh Hipotesis: "Jika sekolah memasang sistem Pembangkit Listrik Tenaga Surya (PLTS) atap hybrid yang dilengkapi baterai penyimpan daya, maka bengkel praktik tetap dapat beroperasi tanpa terganggu pemadaman listrik PLN sekaligus menghemat biaya bahan bakar genset diesel dan menurunkan polusi udara."',
    fase3Aktivitas1: 'Kunci Menjodohkan: 1 - D, 2 - A, 3 - B, 4 - C',
    fase3Aktivitas2: [
      'Genset: Input = Energi Kimia (solar) -> Output Berguna = Energi Listrik & Mekanik Kinetik -> Output Terbuang = Energi Kalor dan Energi Bunyi.',
      'Atap Surya: Input = Energi Radiasi / Cahaya Foton Matahari -> Output Berguna = Belum ada (0%) -> Output Terbuang = Energi Termal / Kalor (menaikkan suhu atap seng jadi 48°C).'
    ],
    fase4SolusiModel: 'Rancangan Ideal: PLTS Rooftop Hybrid Bengkel SMK berkapasitas 5 kWp terdiri dari: 1. Solar Photovoltaic Panels (mengubah energi radiasi surya menjadi listrik DC), 2. Solar Charge Controller MPPT (mengatur pengisian energi kimia baterai), 3. Baterai LiFePO4 / Deep Cycle (menyimpan energi kimia untuk digunakan malam hari / saat padam), 4. Inverter Pure Sine Wave (mengubah listrik DC menjadi AC 220V untuk motor mesin bubut), 5. Sakelar Otomatis (Automatic Transfer Switch / ATS) untuk peralihan mulus saat PLN mati.'
  }
};
