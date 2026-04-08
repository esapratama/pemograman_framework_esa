# <p align ="center"> LAPORAN PRAKTIKUM PEMROGRAMAN BERBASIS FRAMEWORK </p>

# <p align ="center"> JOBSHEET 17</p>

<br><br><br><br>

<p align="center">
   <img src="IMG\LOGO_POLINEMA.png" width="30%"> </p>

<br><br><br><br><br>

<p align = "center"> Nama       : ESA PRATAMA PUTRI </p>
<p align = "center"> NIM        : 2341720061 </p>
<p align = "center"> Kelas      : TI-3D  </p>
<p align = "center"> Jurusan    : TEKNOLOGI INFORMASI </p>

## Langkah 1 – Masuk ke Google Cloud Console Buka:

![alt text](LAPORAN PRAKTIKUM\IMG7\17.1.png) <br>

## Langkah 2 – Buat Project Baru

![alt text](LAPORAN PRAKTIKUM\IMG7\17.2.png) <br>

## Langkah 3 – Konfigurasi OAuth Consent Screen

![alt text](LAPORAN PRAKTIKUM\IMG7\17.3.png) <br>

## Langkah 4 – Buat OAuth Credentials

![alt text](IMG7/17.4.png) <br>

## E. Tambahkan Button Login Google

![alt text](IMG7/17.E1.png) <br>
![alt text](IMG7/17.E2.png) <br>

## TUGAS 1 2

![alt text](IMG7/NO1.png) <br>
![alt text](IMG7/NO2.png) <br>

## TUGAS 3 5

![alt text](IMG7/NO3.png) <br>
![alt text](IMG7/NO3.1.png) <br>
![alt text](IMG7/NO3.2.png) <br>
![alt text](IMG7/NO3.3.png) <br>

## Analisis & Diskusi

1. Apa perbedaan login credential dan login Google?

- Login Credential (email & password)
  User masuk pakai akun yang dibuat di sistem kita sendiri.
  Data disimpan & dikelola oleh aplikasi (harus handle keamanan, hashing, dll).
- Login Google (OAuth)
  User masuk pakai akun Google tanpa buat password baru.
  Autentikasi ditangani oleh Google, aplikasi hanya menerima hasil login.

2. Mengapa data Google tetap perlu disimpan ke database?

- Manajemen Hak Akses: perlu menyimpan data Google (seperti email) agar bisa memberikan role khusus (admin/editor) kepada pengguna tersebut di sistem kita.
- sinkronisasi Data: memudahkan aplikasi untuk mengenali identitas pengguna secara konsisten setiap kali mereka masuk kembali.
- Relasi Data: data user bisa dihubungkan dengan fitur lain, misalnya untuk mencatat siapa yang mengedit artikel atau melakukan transaksi.

3. Apa fungsi JWT callback?

- Berfungsi untuk menyisipkan data tambahan dari database (seperti role atau fullname) ke dalam token enkripsi.

4. Mengapa perlu multi-role?

- Membatasi akses pengguna agar hanya bisa membuka fitur yang sesuai dengan fungsinya.
- Memungkinkan adanya perbedaan wewenang, misalnya Admin untuk kontrol penuh, Editor untuk mengelola konten, dan Member hanya untuk melihat konten.

5. Apa risiko jika tidak menyimpan user ke database?

- Kehilangan Kontrol: tidak bisa memberikan atau mencabut akses khusus (seperti menjadikannya Editor) karena sistem tidak memiliki catatan permanen tentang user tersebut.
- Data Terfragmentasi: setiap kali login, user akan dianggap sebagai orang asing, sehingga preferensi atau riwayat aktivitas mereka tidak bisa disimpan.
- Ketergantungan Penuh: jika mengandalkan provider (Google/GitHub) tanpa menyimpan datanya, kita akan kesulitan melakukan audit data atau migrasi sistem di masa depan.
