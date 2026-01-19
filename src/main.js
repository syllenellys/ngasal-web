import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="min-h-screen bg-gradient-to-br from-amber-50 via-stone-50 to-amber-100 py-12 px-4">
    <div class="max-w-4xl mx-auto">
      <!-- Header -->
      <header class="text-center mb-12">
        <h1 class="font-serif text-5xl md:text-6xl font-bold text-stone-800 mb-4 tracking-tight">
          Kerajaan Tarumanagara
        </h1>
        <p class="text-xl text-stone-600 italic font-serif">
          Peradaban Hindu-Buddha di Tanah Sunda
        </p>
        <div class="w-24 h-1 bg-amber-600 mx-auto mt-6"></div>
      </header>

      <!-- Main Content -->
      <main class="bg-white rounded-lg shadow-xl p-8 md:p-12 space-y-8">
        <!-- Introduction -->
        <section>
          <h2 class="font-serif text-3xl font-semibold text-stone-800 mb-4">Pengantar</h2>
          <p class="text-stone-700 leading-relaxed mb-4">
            Kerajaan Tarumanagara adalah salah satu kerajaan tertua di Nusantara yang pernah berdiri 
            di wilayah Jawa Barat, sekitar abad ke-4 hingga ke-7 Masehi. Kerajaan ini merupakan 
            kerajaan Hindu-Buddha yang memiliki pengaruh besar dalam sejarah peradaban Indonesia, 
            khususnya di wilayah Sunda.
          </p>
          <p class="text-stone-700 leading-relaxed">
            Nama "Tarumanagara" berasal dari kata "Taruma" yang berarti "air terjun" dan "nagara" 
            yang berarti "kerajaan" atau "negara". Kerajaan ini diperkirakan berpusat di sekitar 
            daerah Bekasi dan Karawang, dengan wilayah kekuasaan yang meliputi sebagian besar 
            Jawa Barat modern.
          </p>
        </section>

        <!-- History Section -->
        <section>
          <h2 class="font-serif text-3xl font-semibold text-stone-800 mb-4">Sejarah dan Perkembangan</h2>
          <div class="space-y-4 text-stone-700 leading-relaxed">
            <p>
              Berdasarkan prasasti-prasasti yang ditemukan, Kerajaan Tarumanagara didirikan sekitar 
              tahun 358 Masehi oleh <strong class="text-stone-800">Maharaja Jayasingawarman</strong>. 
              Kerajaan ini mencapai puncak kejayaannya pada masa pemerintahan 
              <strong class="text-stone-800">Purnawarman</strong> (395-434 M), yang dikenal sebagai 
              raja yang bijaksana dan membawa kemakmuran bagi rakyatnya.
            </p>
            <p>
              Purnawarman dikenal sebagai raja yang membangun sistem irigasi yang canggih untuk 
              pertanian, termasuk pembuatan saluran-saluran air yang disebut "Gomati" dan "Candrabhaga". 
              Prasasti Tugu yang ditemukan di Jakarta Utara menceritakan tentang pembangunan saluran 
              air sepanjang 6.122 tumbak (sekitar 11 km) yang selesai dalam waktu 21 hari.
            </p>
            <p>
              Kerajaan Tarumanagara memiliki hubungan dagang yang erat dengan kerajaan-kerajaan di 
              India dan Tiongkok. Hal ini dibuktikan dengan ditemukannya berbagai artefak dan 
              prasasti yang menunjukkan pengaruh budaya Hindu-Buddha yang kuat.
            </p>
          </div>
        </section>

        <!-- Prasasti Section -->
        <section>
          <h2 class="font-serif text-3xl font-semibold text-stone-800 mb-4">Sumber Sejarah</h2>
          <p class="text-stone-700 leading-relaxed mb-4">
            Sejarah Kerajaan Tarumanagara diketahui melalui beberapa prasasti yang ditemukan di 
            berbagai lokasi di Jawa Barat:
          </p>
          <ul class="list-disc list-inside space-y-2 text-stone-700 ml-4">
            <li><strong class="text-stone-800">Prasasti Ciaruteun</strong> - Ditemukan di Bogor, berisi cap telapak kaki Purnawarman</li>
            <li><strong class="text-stone-800">Prasasti Kebon Kopi</strong> - Ditemukan di Bogor, berisi cap telapak kaki gajah</li>
            <li><strong class="text-stone-800">Prasasti Jambu</strong> - Ditemukan di Bogor, menyebutkan nama Purnawarman</li>
            <li><strong class="text-stone-800">Prasasti Tugu</strong> - Ditemukan di Jakarta Utara, menceritakan pembangunan saluran air</li>
            <li><strong class="text-stone-800">Prasasti Muara Cianten</strong> - Ditemukan di Bogor, berisi tulisan yang belum sepenuhnya terbaca</li>
            <li><strong class="text-stone-800">Prasasti Pasir Awi</strong> - Ditemukan di Bogor, berisi pahatan gambar</li>
            <li><strong class="text-stone-800">Prasasti Cidanghiang</strong> - Ditemukan di Lebak, menyebutkan nama Purnawarman</li>
          </ul>
        </section>

        <!-- Kings Table -->
        <section>
          <h2 class="font-serif text-3xl font-semibold text-stone-800 mb-6">Daftar Raja-Raja Tarumanagara</h2>
          <div class="overflow-x-auto">
            <table class="w-full border-collapse border border-stone-300 shadow-md">
              <thead>
                <tr class="bg-amber-600 text-white">
                  <th class="border border-stone-300 px-6 py-4 text-left font-serif font-semibold">No</th>
                  <th class="border border-stone-300 px-6 py-4 text-left font-serif font-semibold">Nama Raja</th>
                  <th class="border border-stone-300 px-6 py-4 text-left font-serif font-semibold">Periode</th>
                  <th class="border border-stone-300 px-6 py-4 text-left font-serif font-semibold">Keterangan</th>
                </tr>
              </thead>
              <tbody class="bg-white">
                <tr class="hover:bg-amber-50 transition-colors">
                  <td class="border border-stone-300 px-6 py-4 text-stone-700">1</td>
                  <td class="border border-stone-300 px-6 py-4 font-semibold text-stone-800">Jayasingawarman</td>
                  <td class="border border-stone-300 px-6 py-4 text-stone-700">358-382 M</td>
                  <td class="border border-stone-300 px-6 py-4 text-stone-700">Pendiri kerajaan, berasal dari Salankayana, India</td>
                </tr>
                <tr class="hover:bg-amber-50 transition-colors bg-stone-50">
                  <td class="border border-stone-300 px-6 py-4 text-stone-700">2</td>
                  <td class="border border-stone-300 px-6 py-4 font-semibold text-stone-800">Dharmayawarman</td>
                  <td class="border border-stone-300 px-6 py-4 text-stone-700">382-395 M</td>
                  <td class="border border-stone-300 px-6 py-4 text-stone-700">Putra Jayasingawarman</td>
                </tr>
                <tr class="hover:bg-amber-50 transition-colors">
                  <td class="border border-stone-300 px-6 py-4 text-stone-700">3</td>
                  <td class="border border-stone-300 px-6 py-4 font-semibold text-stone-800">Purnawarman</td>
                  <td class="border border-stone-300 px-6 py-4 text-stone-700">395-434 M</td>
                  <td class="border border-stone-300 px-6 py-4 text-stone-700">Raja terbesar, membangun sistem irigasi dan mencapai puncak kejayaan</td>
                </tr>
                <tr class="hover:bg-amber-50 transition-colors bg-stone-50">
                  <td class="border border-stone-300 px-6 py-4 text-stone-700">4</td>
                  <td class="border border-stone-300 px-6 py-4 font-semibold text-stone-800">Wisnuwarman</td>
                  <td class="border border-stone-300 px-6 py-4 text-stone-700">434-455 M</td>
                  <td class="border border-stone-300 px-6 py-4 text-stone-700">Putra Purnawarman</td>
                </tr>
                <tr class="hover:bg-amber-50 transition-colors">
                  <td class="border border-stone-300 px-6 py-4 text-stone-700">5</td>
                  <td class="border border-stone-300 px-6 py-4 font-semibold text-stone-800">Indrawarman</td>
                  <td class="border border-stone-300 px-6 py-4 text-stone-700">455-515 M</td>
                  <td class="border border-stone-300 px-6 py-4 text-stone-700">Meneruskan pemerintahan ayahnya</td>
                </tr>
                <tr class="hover:bg-amber-50 transition-colors bg-stone-50">
                  <td class="border border-stone-300 px-6 py-4 text-stone-700">6</td>
                  <td class="border border-stone-300 px-6 py-4 font-semibold text-stone-800">Candrawarman</td>
                  <td class="border border-stone-300 px-6 py-4 text-stone-700">515-535 M</td>
                  <td class="border border-stone-300 px-6 py-4 text-stone-700">Masa pemerintahan yang relatif stabil</td>
                </tr>
                <tr class="hover:bg-amber-50 transition-colors">
                  <td class="border border-stone-300 px-6 py-4 text-stone-700">7</td>
                  <td class="border border-stone-300 px-6 py-4 font-semibold text-stone-800">Suryawarman</td>
                  <td class="border border-stone-300 px-6 py-4 text-stone-700">535-561 M</td>
                  <td class="border border-stone-300 px-6 py-4 text-stone-700">Mengalami kemunduran kekuasaan</td>
                </tr>
                <tr class="hover:bg-amber-50 transition-colors bg-stone-50">
                  <td class="border border-stone-300 px-6 py-4 text-stone-700">8</td>
                  <td class="border border-stone-300 px-6 py-4 font-semibold text-stone-800">Kertawarman</td>
                  <td class="border border-stone-300 px-6 py-4 text-stone-700">561-628 M</td>
                  <td class="border border-stone-300 px-6 py-4 text-stone-700">Raja terakhir sebelum keruntuhan</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <!-- Culture Section -->
        <section>
          <h2 class="font-serif text-3xl font-semibold text-stone-800 mb-4">Budaya dan Warisan</h2>
          <p class="text-stone-700 leading-relaxed mb-4">
            Kerajaan Tarumanagara meninggalkan warisan budaya yang penting bagi peradaban Nusantara. 
            Sistem irigasi yang dibangun pada masa Purnawarman menunjukkan kemajuan teknologi pertanian 
            pada masa itu. Pengaruh Hindu-Buddha yang kuat terlihat dari prasasti-prasasti yang 
            menggunakan aksara Pallawa dan bahasa Sanskerta.
          </p>
          <p class="text-stone-700 leading-relaxed">
            Kerajaan ini juga memiliki peran penting dalam perdagangan internasional, menjadi 
            penghubung antara Nusantara dengan India dan Tiongkok. Setelah keruntuhan Tarumanagara 
            sekitar abad ke-7, wilayahnya kemudian berkembang menjadi kerajaan-kerajaan Sunda lainnya 
            seperti Kerajaan Sunda dan Kerajaan Galuh.
          </p>
        </section>

        <!-- Footer -->
        <footer class="pt-8 mt-12 border-t border-stone-300 text-center text-stone-600 text-sm">
          <p class="font-serif italic">
            "Sejarah adalah cermin masa lalu yang membimbing kita ke masa depan"
          </p>
          <p class="mt-2">© 2024 - Artikel Sejarah Kerajaan Tarumanagara</p>
        </footer>
      </main>
    </div>
  </div>
`
