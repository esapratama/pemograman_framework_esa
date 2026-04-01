# <p align ="center"> LAPORAN PRAKTIKUM PEMROGRAMAN BERBASIS FRAMEWORK </p>

# <p align ="center"> JOBSHEET 13 </p>

<br><br><br><br>

<p align="center">
   <img src="IMG\LOGO_POLINEMA.png" width="30%"> </p>

<br><br><br><br><br>

<p align = "center"> Nama       : ESA PRATAMA PUTRI </p>
<p align = "center"> NIM        : 2341720061 </p>
<p align = "center"> Kelas      : TI-3D  </p>
<p align = "center"> Jurusan    : TEKNOLOGI INFORMASI </p>

## G. Pertanyaan Analisis

1. Mengapa middleware lebih aman dibanding useEffect?

- Karena middleware berjalan di sisi server (Server-Side) sebelum permintaan ke halaman, sehingga autentikasi terjadi sebelum kode dari sisi klien dieksekusi. Sebaliknya, useEffect berjalan di sisi klien (Client-Side) setelah halaman mulai dimuat.

2. Mengapa middleware tidak menimbulkan glitch?

- Glitch terjadi pada useEffect karena browser harus merender HTML terlebih dahulu sebelum menjalankan JavaScript. Middleware memproses logika sebelum HTML dikirim ke browser. Jika pengguna tidak punya akses, server langsung mengirim instruksi pengalihan (redirect).

3. Apa risiko jika semua halaman diproteksi tanpa pengecualian?

- Risiko utamanya adalah Infinite Redirect Loop (perulangan pengalihan tanpa henti). Jika halaman Login juga diproteksi, middleware akan mengalihkan pengguna ke halaman Login, lalu saat mencoba membuka Login, middleware memblokirnya lagi dan mengalihkan kembali ke tempat yang sama. Selain itu, aset statis (gambar/CSS) dan API internal bisa ikut terblokir jika matcher tidak dikonfigurasi dengan benar.

4. Kapan middleware tidak diperlukan?

- Karena interaksi UI atau validasi input form secara real-time.
- Untuk halaman publik yang memang boleh diakses siapa saja (misalnya Landing Page atau About Us).
- Untuk keamanan data yang sebenarnya, validasi harus tetap ada di level API/Database.

5. Apa perbedaan middleware dan API route?

- Middleware: Berfungsi sebagai satpam. Karena mencegah setiap permintaan (halaman, aset, API) untuk melakukan pengecekan global (seperti cek cookie/token).
- API Route: Berfungsi sebagai pelayan data. Endpoint khusus (seperti /api/user) yang dipanggil untuk mengambil atau memanipulasi data dari database, biasanya dipanggil setelah pengguna berhasil melewati middleware.
