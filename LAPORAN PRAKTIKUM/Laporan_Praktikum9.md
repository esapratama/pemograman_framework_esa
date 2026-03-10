 <p align ="center"> LAPORAN PRAKTIKUM PEMROGRAMAN BERBASIS FRAMEWORK </p>

# <p align ="center"> JOBSHEET 9 </p>

<br><br><br><br>

<p align="center">
   <img src="IMG\LOGO_POLINEMA.png" width="30%"> </p>

<br><br><br><br><br>

<p align = "center"> Nama       : ESA PRATAMA PUTRI </p>
<p align = "center"> NIM        : 2341720061 </p>
<p align = "center"> Kelas      : TI-3D  </p>
<p align = "center"> Jurusan    : TEKNOLOGI INFORMASI </p>

## Bagian 1 – Setup Halaman SSR

![alt text](IMG3/9.L1.png) <br>

## Bagian 2 – Implementasi getServerSideProps pada server.tsx

![alt text](IMG3/9.L2.png) <br>

## Bagian 3 – Refactor Type ( produk type )

## Bagian 4 – Uji Perbedaan SSR vs CSR

![alt text](IMG3/9.L4CSR.png) <br>
![alt text](IMG3/9.L4SSR.png) <br>

## D. Tugas Praktikum

1. Buat 2 halaman:
   o /products (CSR)
   o /products/server (SSR)
   ![alt text](IMG3/9.L4CSR.png) <br>
   ![alt text](IMG3/9.L4SSR.png) <br>

2. Dokumentasikan:
   o Screenshot CSR
   o Screenshot SSR
   o Perbedaan Network tab
   o Perbedaan View Source
   ![alt text](IMG3/9.L4UJICSR.png) <br>
   ![alt text](IMG3/9.L4UJISSR.png) <br>
   ![alt text](IMG3/9.L4PRODUKCSR.png) <br>
   ![alt text](IMG3/9.L4PRODUKSSR.png) <br>

3. Buat laporan analisis minimal 2 halaman.

- Halaman CSR: Saat dilakukan view-source, konten produk (seperti teks "gaun" atau "baju polo") tidak ditemukan.
- Halaman SSR: Pada view-source, semua data produk sudah ada di dalam tag HTML (<h4>, <p>).
- CSR: Adanya pemanggilan API sesaat setelah halaman dimuat. Browser sedang bekerja menarik data setelah tampilan muncul.
- SSR: Tidak ditemukan pemanggilan API produk di Network Tab sisi client. Hal ini dikarenakan proses pengambilan data sudah selesai dilakukan oleh server internal sebelum data dikirim ke pengguna.
- Loading: Pada CSR, sempat terlihat fase loading atau layar kosong sebelum data muncul. Pada SSR, konten langsung muncul secara langsung setelah halaman terbuka.

## E. Studi Analisis

1. Mengapa SSR lebih baik untuk SEO? <br>

- Karena server mengirimkan HTML yang sudah berisi konten lengkap. Untuk bisa langsung membaca teks dan data produk tanpa harus menjalankan JavaScript terlebih dahulu.

2. Kapan sebaiknya menggunakan SSR? <br>

- Saat aplikasi membutuhkan SEO yang kuat (seperti e-commerce atau portal berita).
- Halaman yang datanya sering berubah namun harus tetap terbaca.

3. Apa kekurangan SSR dibanding CSR? <br>

- Beban Server Lebih Tinggi: Server harus memuat HTML untuk setiap permintaan, berbeda dengan CSR yang beban renderingnya ada di browser pengguna.
- Response Time Lebih Lambat: Ada jeda waktu karena server harus menunggu data dari API selesai diambil sebelum mengirimkan HTML ke browser.
- Interaktivitas Tertunda: Pengguna bisa melihat konten, tapi tidak bisa langsung berinteraksi (seperti klik tombol) sampai proses sinkronisasi JavaScript selesai.

4. Mengapa skeleton tidak muncul pada SSR?<br>

- Karena data sudah diambil di sisi server melalui fungsi seperti getServerSideProps sebelum halaman dikirim ke browser. Saat HTML sampai di browser, kontennya sudah jadi, sehingga tidak ada fase "menunggu data" di sisi client yang biasanya memicu munculnya loading.
