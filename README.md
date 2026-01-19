# Undangan Pernikahan Online - Syarifah Mumtazah & Ahmad Faris

Project ini adalah undangan pernikahan digital yang dibuat dengan **Vibes Coding (Google Studio)** untuk acara pernikahan Syarifah Mumtazah dan Ahmad Faris.

## Tentang Project

Aplikasi ini dibangun menggunakan React dan Vite, dirancang untuk memberikan pengalaman undangan digital yang elegan dan modern.

## Menjalankan Aplikasi

Berikut adalah langkah-langkah untuk menjalankan aplikasi ini di komputer lokal Anda:

**Prasyarat:** Node.js

1. Install dependencies:
   ```bash
   npm install
   ```

2. Atur `GEMINI_API_KEY` di file [.env.local](.env.local) dengan API key Gemini Anda.

3. Jalankan aplikasi:
   ```bash
   npm run dev
   ```

## Vibes Coding

Project ini dikembangkan dengan sentuhan "vibes coding" menggunakan teknologi dari Google Studio.

## Deploy ke Vercel

Cara termudah untuk mendeploy aplikasi ini adalah menggunakan [Platform Vercel](https://vercel.com/new).

### Langkah-langkah:

1. **Push ke GitHub/GitLab/Bitbucket**
   Pastikan kode project ini sudah di-upload ke repository Git Anda.

2. **Buat Project Baru di Vercel**
   - Buka dashboard Vercel dan klik "Add New..." -> "Project".
   - Import repository Git yang baru saja Anda upload.

3. **Konfigurasi Project**
   - Vercel akan otomatis mendeteksi bahwa ini adalah project **Vite**.
   - Pada bagian **Environment Variables**, tambahkan:
     - Key: `GEMINI_API_KEY`
     - Value: Masukkan API Key Gemini Anda.

4. **Deploy**
   - Klik tombol **Deploy** dan tunggu proses build selesai.
   - Setelah sukses, Anda akan mendapatkan URL domain untuk mengakses undangan pernikahan online ini.

