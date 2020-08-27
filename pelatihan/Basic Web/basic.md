---
title: Basic PHP
layout: post
---

### HTTP Headers

> Apa itu HTTP?

HTTP adalah protokol web yang digunakan untuk menyampaikan pesan melalui browser, misalnya
halaman web ini.

Seperti tiap protokol komunikasi jaringan, http memiliki headers sebagai __identifier__ saat
kita melakukan request, atau saat kita menerima respon dari server.

Dalam response header, kita akan mendapatkan `Request Method` yang kita kirimkan, `Status
Code`, `Request URL`, dan lain sebagainya tergantung request yang kita kirimkan dan response
yang kita terima

> Kenapa PHP?

PHP merupakan bahasa scripting web yang banyak digunakan bahkan sampai sekarang karena
kemudahannya dalam pengaplikasian. PHP juga memiliki vulnerabilities yang cukup fatal, namun
dapat diatasi.

Topik ini akan dibahas secara perlahan

### Request Method

Request Method itu cara kita meminta respon file ke server, meskipun itu tergantung resource apa
yang kita miliki sekarang jika hanya memakai browser. Mungkin bahasa saya terlalu ribet. Misalnya
gini, saat kita buka [www.google.com](http://www.google.com) di browser, kita melakukan request _GET_ di browser. Saat kita
mencari sesuatu di _search bar_ google, kita melakukan request _POST_. Ini semua terjadi karena kita
memiliki resource yang hanya memperbolehkan request method tersebut di browser, yaitu _GET_ dan
_POST_. Masih terdapat request method lain yang bisa dilihat di laman mozilla di [sini](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods).
Tapi, kita bisa memanipulasi request method kita, atau dengan kata lain memanipulasi http request
header kita, dengan alat berupa `curl` dan `postman`.
Misalnya saya mempunyai script php seperti ini:
```php
<?php

echo $_SERVER[REQUEST_METHOD]

?>
```

Saat kita buka di browser akan muncul _GET_, karena itu yang bisa dilakukan browser, dan memang itu
yang seharusnya dilakukan saat membuka url dengan browser.
<img src='/assets/img/request_method1.png'>

Kita juga bisa melihat request method kita sendiri di http request header dari browser kita, dengan
mengakses developer tools, dan pilih tab Network. Berikut tampilan tab network dari development
tools chromium (google chrome juga).
<img src='/assets/img/request_method3.png'>

Dari gambar tersebut, terlihat beberapa komponen dalam http request kita, seperti request URL,
request method, IP server, file yang diberikan server untuk dimuat browser kita, dan user agent.
Dengan browser biasa, kita tidak bisa seenak hati kita menentukan request method saat memuat suatu
laman web. Tapi ada alat yang bisa melakukannya, yaitu `curl`. Dengan contoh seperti ini:
```sh
curl -X POST http://localhost/pelatihan/request.php
```
kita bisa mendapatkan hasil seperti berikut:
<img src='/assets/img/request_method4.png'>
Dari gambar tersebut dapat dilihat bahwa hasil respon server berupa _POST_ dan bukan lagi _GET_.
Kita juga bisa coba-coba dengan request method yang lain, misal _PUT_ dan _DELETE_ atau yang
aneh-aneh lainnya. Untuk petunjuk lengkap menggunakan curl, bisa dilihat sendiri di `man curl` yang
sudah dibahas secara lengkap.
<img src='/assets/img/request_method5.png'>

> Oke udah cukup request methodnya dong, isi $_SERVER apa aja sih?

Nah kalau mau lihat isi dari `$_SERVER` ini apa aja, bisa pakai perintah `print_r` dari php,
contohnya:
```php
 <!-- biar rapi aja  -->
<pre>
<?php
	print_r($_SERVER)
?>
</pre>
```
~~aku ubah aja file yang tadi~~ jadinya akan seperti ini saat diakses dari browser:
<img src='/assets/img/request_method6.png'>
Dari situ kelihatan, `$_SERVER` berisi banyak value, dapat dipakai sesuai kebutuhan. Di sini kita
akan 

### Query String

### Request Method Query
