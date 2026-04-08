# <p align ="center"> LAPORAN PRAKTIKUM PEMROGRAMAN BERBASIS FRAMEWORK </p>

# <p align ="center"> JOBSHEET 19</p>

<br><br><br><br>

<p align="center">
   <img src="IMG\LOGO_POLINEMA.png" width="30%"> </p>

<br><br><br><br><br>

<p align = "center"> Nama       : ESA PRATAMA PUTRI </p>
<p align = "center"> NIM        : 2341720061 </p>
<p align = "center"> Kelas      : TI-3D  </p>
<p align = "center"> Jurusan    : TEKNOLOGI INFORMASI </p>

## PRAKTIKUM 3 – Testing Halaman About

![alt text](IMG8/P3.png) <br>

## PRAKTIKUM 4 – Coverage Report

![alt text](IMG8/P4.png) <br>
![alt text](IMG8/P4.1.png) <br>
![alt text](IMG8/P4.2.png) <br>

## PRAKTIKUM 5 – Konfigurasi Coverage Lengkap

![alt text](IMG8/P5.png) <br>
![alt text](IMG8/P5.1.png) <br>
![alt text](IMG8/P5.2.png) <br>
![alt text](IMG8/P5.3.png) <br>

## PRAKTIKUM 6 – Testing dengan getByTestId

![alt text](IMG8/P6.png) <br>
![alt text](IMG8/P6.1.png) <br>
![alt text](IMG8/P6.2.png) <br>
![alt text](IMG8/P6.3.png) <br>

## PRAKTIKUM 7 – Testing Page dengan Router (Mocking)

![alt text](IMG8/P7.png) <br>

## PRAKTIKUM 8 – Menangani Undefined Data

![alt text](IMG8/P8.png) <br>
![alt text](IMG8/P8.1.png) <br>
![alt text](IMG8/P8.2.png) <br>
![alt text](IMG8/P8.3.png) <br>

## Tugas Praktikum

![alt text](IMG8/3.5.png) <br>
![alt text](IMG8/3.5.1.png) <br>
![alt text](IMG8/3.5.2.png) <br>
![alt text](IMG8/3.5.3.png) <br>

## Diskusi & Refleksi

1. Mengapa unit testing penting sebelum production?

- Unit testing penting karena berfungsi sebagai jaring pengaman (safety net) untuk mendeteksi bug atau kesalahan logika sedini mungkin pada level terkecil (fungsi/komponen). Hal ini mencegah error fatal sampai ke tangan pengguna di tahap production dan mempermudah proses pemeliharaan kode (maintenance).

2. Mengapa branch coverage sulit mencapai 100%?

- Branch coverage sulit mencapai 100% karena kode seringkali memiliki jalur logika yang kompleks, seperti penanganan error (catch blocks), kondisi yang sangat jarang terjadi (edge cases), atau dependensi eksternal yang sulit disimulasikan secara sempurna.

3. Apa itu mocking?

- Mocking adalah teknik untuk memalsukan atau meniru objek/modul asli yang memiliki dependensi eksternal (seperti API, Database, atau Router). Tujuannya agar unit test bisa fokus menguji logika internal komponen tersebut secara terisolasi tanpa terpengaruh oleh faktor luar yang lambat atau tidak stabil.

4. Kapan snapshot test digunakan?

- Snapshot test digunakan saat ingin memastikan bahwa struktur tampilan (UI/HTML) suatu komponen tidak berubah secara tidak sengaja. Tes ini sangat berguna untuk komponen yang tampilannya sudah stabil; jika ada perubahan sedikit saja pada elemen HTML, Jest akan memberikan peringatan.

5. Apakah semua file harus dites?

- Iya, Namun secara praktis tidak selalu harus semua. Prioritas pengujian sebaiknya diberikan pada file yang mengandung logika bisnis penting dan komponen UI utama. File konfigurasi statis atau file yang hanya berisi export sederhana biasanya memiliki prioritas lebih rendah karena risiko bug-nya kecil.
