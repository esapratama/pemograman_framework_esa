# <p align ="center"> LAPORAN PRAKTIKUM PEMROGRAMAN BERBASIS FRAMEWORK </p>

# <p align ="center"> JOBSHEET 20</p>

<br><br><br><br>

<p align="center">
   <img src="IMG\LOGO_POLINEMA.png" width="30%"> </p>

<br><br><br><br><br>

<p align = "center"> Nama       : ESA PRATAMA PUTRI </p>
<p align = "center"> NIM        : 2341720061 </p>
<p align = "center"> Kelas      : TI-3D  </p>
<p align = "center"> Jurusan    : TEKNOLOGI INFORMASI </p>

## deploy

![alt text](IMG9/201.png) <br>
![alt text](IMG9/202.png) <br>
![alt text](IMG9/203.png) <br>
![alt text](IMG9/204.png) <br>
![alt text](IMG9/205.png) <br>
![alt text](IMG9/206.png) <br>
![alt text](IMG9/207.png) <br>

## /about

![alt text](IMG9/ABOUT.png) <br>

## /product

![alt text](IMG9/PRODUK.png) <br>

## /profile

![alt text](IMG9/PROFILE.png) <br>

## Login Google

![alt text](IMG9/GOOGLE.png) <br>

## Login credential biasa

![alt text](IMG9/BIASA.png) <br>

## Refleksi & Diskusi

1. Mengapa localhost tidak boleh digunakan di production?

- Karena localhost hanya bisa diakses di komputer sendiri. Di production, aplikasi harus pakai domain publik agar bisa diakses user lain.

2. Mengapa SSG bisa gagal saat build?

- Karena proses build mengambil data saat compile. Jika API error, data kosong, atau ENV belum ada, build gagal.

3. Apa perbedaan SSR dan SSG saat deployment?

- SSR (Server-Side Rendering) : Halaman dibuat saat user request (butuh server)
- SSG (Static Site Generation) : Halaman dibuat saat build (lebih cepat, tanpa server)

4. Mengapa perlu redeploy setelah menambahkan environment?

- Karena environment variable hanya dibaca saat build, deploy. Tanpa redeploy, perubahan tidak akan diterapkan ke aplikasi.

5. Apa fungsi redirect URI pada OAuth?

- Sebagai URL tujuan setelah login dari provider (Google/GitHub). Untuk mengembalikan user ke aplikasi membawa hasil autentikasi.
