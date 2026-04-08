# <p align ="center"> LAPORAN PRAKTIKUM PEMROGRAMAN BERBASIS FRAMEWORK </p>

# <p align ="center"> JOBSHEET 18</p>

<br><br><br><br>

<p align="center">
   <img src="IMG\LOGO_POLINEMA.png" width="30%"> </p>

<br><br><br><br><br>

<p align = "center"> Nama       : ESA PRATAMA PUTRI </p>
<p align = "center"> NIM        : 2341720061 </p>
<p align = "center"> Kelas      : TI-3D  </p>
<p align = "center"> Jurusan    : TEKNOLOGI INFORMASI </p>

## PRAKTIKUM 1 – Image Optimization

![alt text](IMG8/18N1.png) <br>
![alt text](IMG8/18N1.1.png) <br>
![alt text](IMG8/18N1.2.png) <br>
![alt text](IMG8/18N1.3.png) <br>

## Refleksi & Diskusi

1. Mengapa <img> biasa tidak optimal?

- Tag <img> standar hanya berfungsi untuk menampilkan gambar tanpa kecerdasan tambahan.

2. Apa perbedaan font CDN dan next/font?

- Font CDN (seperti Google Fonts Link): Browser harus mengirim permintaan tambahan ke server luar (Google) saat halaman dimuat. Ini menyebabkan keterlambatan dan risiko Flash of Unstyled Text (FOUT).
- next/font: Next.js mengunduh font saat proses build dan menyimpannya secara lokal di server aplikasi Anda. Browser tidak perlu melakukan permintaan ke luar, sehingga loading lebih cepat dan privasi lebih terjaga.

3. Mengapa script bisa membuat website lambat?

- Script (JavaScript) bersifat render-blocking. Artinya, browser akan berhenti memproses tampilan HTML/CSS sampai script tersebut selesai diunduh dan dijalankan.

4. Kapan harus menggunakan dynamic import?

- Komponen Berat: Komponen yang memiliki library besar (seperti grafik/chart atau editor teks).
- Komponen Bawah Lipatan (Below the Fold): Komponen yang tidak langsung dilihat pengguna saat halaman pertama kali dibuka, seperti Footer atau Modal.
- Interaksi Jarang: Komponen yang hanya muncul setelah klik tombol tertentu.

5. Apa dampak bundle size terhadap UX?

- Waktu Muat (FCP): Semakin besar ukuran bundle JavaScript, semakin lama waktu yang dibutuhkan browser untuk mengunduh dan memprosesnya, sehingga pengguna harus menunggu lebih lama untuk melihat konten pertama.
- Responsivitas (FID/TBT): Bundle yang besar membuat browser sibuk memproses kode, sehingga website terasa berat atau tidak responsif saat diklik oleh pengguna.
- Retensi Pengguna: Pengguna cenderung meninggalkan website yang loading-nya lebih dari 3 detik. Bundle size yang kecil menjamin pengalaman yang mulus, terutama bagi pengguna dengan koneksi internet lambat.
