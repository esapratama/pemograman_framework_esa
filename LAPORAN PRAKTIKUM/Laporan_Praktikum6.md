 <p align ="center"> LAPORAN PRAKTIKUM PEMROGRAMAN BERBASIS FRAMEWORK </p>

# <p align ="center"> JOBSHEET 1 </p>

<br><br><br><br>

<p align="center">
   <img src="IMG\LOGO_POLINEMA.png" width="30%"> </p>

<br><br><br><br><br>

<p align = "center"> Nama       : ESA PRATAMA PUTRI </p>
<p align = "center"> NIM        : 2341720061 </p>
<p align = "center"> Kelas      : TI-3D  </p>
<p align = "center"> Jurusan    : TEKNOLOGI INFORMASI </p>

## Langkah 1 – Menjalankan Project

![alt text](IMG2/6.L1.png) <br>

## Langkah 2 – Membuat Custom Document

![alt text](IMG2/6.L2.png) <br>

## Langkah 3 – Pengaturan Title per Halaman

![alt text](IMG2/6.L3.png) <br>

## Langkah 4 – Membuat Custom Error Page (404)

![alt text](IMG2/6.L4.png) <br>

## Langkah 5 – Styling Halaman 404

![alt text](IMG2/6.L5.png) <br>

## Langkah 6 – Menampilkan Gambar dari Folder Public

![alt text](IMG2/6.L6.png) <br>

## Tugas Praktikum

## Tugas 1

![alt text](LAPORAN PRAKTIKUM/IMG2/6.T1.png) <br>

## Tugas 2

![alt text](IMG2/6.T2.png) <br>

## Tugas 2

![alt text](IMG2/6.T3.png) <br>
![alt text](IMG2/6.T4.png) <br>

## F. Pertanyaan Evaluasi

1. Apa fungsi utama \_document.js? <br>

- Digunakan untuk mengatur struktur HTML dasar aplikasi Next.js, seperti `<html>`, `<head>`, dan `<body>`. < br>

2. Mengapa <title> tidak disarankan di \_document.js? <br>

- Karena `<title>` bersifat spesifik per halaman, `_document.js` digunakan untuk struktur global, sedangkan pengaturan `<title>` sebaiknya menggunakan `<Head>` di masing-masing halaman agar bisa dinamis dan berbeda setiap page.<br>

3. Apa perbedaan halaman biasa dan halaman 404.js? <br>

- Halaman biasa dibuat untuk route tertentu dan diakses melalui URL yang sesuai, sedangkan `404.js` adalah halaman khusus yang otomatis ditampilkan ketika user mengakses route yang tidak ditemukan. <br>

4. Mengapa folder public tidak perlu di-import? <br>

- Karena semua file di dalam folder `public` otomatis bisa diakses melalui root URL aplikasi. <br>
