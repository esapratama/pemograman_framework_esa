# <p align ="center"> LAPORAN PRAKTIKUM PEMROGRAMAN BERBASIS FRAMEWORK </p>

# <p align ="center"> JOBSHEET 11 </p>

<br><br><br><br>

<p align="center">
   <img src="IMG\LOGO_POLINEMA.png" width="30%"> </p>

<br><br><br><br><br>

<p align = "center"> Nama       : ESA PRATAMA PUTRI </p>
<p align = "center"> NIM        : 2341720061 </p>
<p align = "center"> Kelas      : TI-3D  </p>
<p align = "center"> Jurusan    : TEKNOLOGI INFORMASI </p>

## Bagian 1 – Membuat Dynamic Route

![alt text](IMG4/L1.png) <br>
![alt text](IMG4/L1.1.png) <br>

## Bagian 2 – Implementasi CSR (Client Rendering)

![alt text](IMG4/L2.png) <br>
![alt text](IMG4/L2.1.png) <br>
![alt text](IMG4/L2.2.png) <br>
![alt text](IMG4/L2.3.png) <br>
![alt text](IMG4/L2.4.png) <br>
![alt text](IMG4/L2.5.png) <br>

## Bagian 3 – Implementasi SSR

![alt text](IMG4/L3.png) <br>
![alt text](IMG4/L3.1.png) <br>

## Bagian 4 – Implementasi Static Site Generation (Dynamic SSG)

![alt text](IMG4/L4.png) <br>
![alt text](IMG4/L4.1.png) <br>

## E. Tugas Praktikum

1. Loading <br>

- csr
  ![alt text](IMG4/CSRLOADING.png) <br>
- ssr
  ![alt text](IMG4/SSRLOADING.png) <br>
- ssg
  ![alt text](IMG4/SSGLOADING.png) <br>

2. build <br>
   ![alt text](IMG4/BUILDSSG.png) <br>

3. SEO <br>

- csr
  ![alt text](IMG4/SEOCSR.png) <br>
- ssr
  ![alt text](IMG4/SEOSSR.png) <br>
- ssg
  ![alt text](IMG4/SSGLOADING.png) <br>

4. perubahan Data <br>

- csr
  ![alt text](IMG4/TAMBAHCSR.png) <br>
- ssr
  ![alt text](IMG4/TAMBAHSSR.png) <br>
- ssg
  ![alt text](IMG4/TAMBAHSSG.png) <br>

## F. Pertanyaan Refleksi

1. Mengapa getStaticPaths wajib pada dynamic SSG?

- Karena pada metode SSG, semua halaman HTML dibuat di awal saat proses build. Untuk rute dinamis (seperti /produk/[id]), Next.js tidak tahu ID apa saja yang ada di database. getStaticPaths bertugas memberi tahu Next.js daftar ID tersebut agar Next.js bisa mencetak semua halaman produknya satu per satu sebelum aplikasi dijalankan.

2. Mengapa CSR membutuhkan loading state?

- Karena pada CSR, browser menerima HTML kosong dari server. Data baru diminta ke API menggunakan JavaScript setelah halaman muncul di layar. Selama proses menunggu data dari API selesai, loading state tahu bahwa aplikasi sedang bekerja dan tidak menganggap halaman tersebut error atau kosong.

3. Mengapa SSG tidak menampilkan produk baru tanpa build ulang?

- Karena SSG bersifat statis. Halaman produk dibuat berdasarkan data yang ada saat perintah build dijalankan. Jika ada data baru di database setelah build selesai, halaman HTML untuk data tersebut belum tercipta. sebabnya harus menjalankan build ulang agar Next.js membuat file HTML baru untuk produk.

4. Mana metode terbaik untuk halaman detail e-commerce?

- SR lebih baik jika stok dan harga berubah sangat cepat (real-time) agar data selalu akurat.
- SSG/ISR lebih baik jika ingin kecepatan akses maksimal dan SEO yang sangat kuat, namun butuh penanganan ekstra agar data tetap diperbarui.

5. Apa risiko menggunakan SSG untuk produk yang sering berubah?

- Data Inconsistency (Data Tidak Akurat). bisa melihat harga lama atau stok yang sebenarnya sudah habis karena halaman yang mereka lihat adalah hasil lama. Untuk mengatasinya, harus sering melakukan build ulang atau menggunakan fitur Revalidation (ISR)
