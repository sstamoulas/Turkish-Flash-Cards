const words = ['abi', 'abla', 'aç', 'açık', 'ad', 'adalet', 'adam', 'adres', 'ağaç', 'ağustos', 'aile', 'akraba', 'akşam', 'aktör', 'akvaryum', 'alıştırma', 'alışveriş', 'amca', 'anahtar', 'anne', 'antik', 'antre', 'apartman', 'araba', 'arkadaş', 'armut', 'asansör', 'asker', 'aslan', 'aş', 'aşk', 'at', 'Avrupa', 'avukat', 'ay', 'ayak', 'ayakkabı', 'Ayasofya', 'aynı', 'ayran', 'az', 'baba', 'bahçe', 'bakkal', 'balık', 'balıkçı', 'balkon', 'balon', 'banka', 'bankacı', 'banyo', 'bardak', 'baş', 'başka', 'başkan', 'başlangıç', 'bayan', 'bayram', 'bazen', 'bebek', 'bekar', 'beraber', 'bilet', 'bilgisayar', 'biraz', 'biraz sonra', 'bisiklet', 'bluz', 'boş', 'boya', 'bu akşam', 'bugün', 'bulaşık', 'buzdolabı', 'büro', 'büyük', 'cami', 'ceket', 'cep', 'cezve', 'cüzdan', 'çalışkan', 'çanta', 'çatı', 'çay', 'çaycı', 'çaydanlık', 'çekyat', 'çevreci', 'çiçek', 'çocuk', 'çocuk odası', 'çok', 'çorba', 'cöp', 'çünkü', 'daire', 'damat', 'dayı', 'defter', 'değil', 'deniz', 'dergi', 'ders', 'deve', 'dışarı', 'dil', 'diş', 'dişçi', 'dizi film', 'doğru', 'doktor', 'dolap', 'dolmuş', 'dolu', 'dondurma', 'dost', 'dosya', 'döner kebap', 'durak', 'duvar', 'düz', 'eczane', 'eğlenceli', 'ehliyet', 'ek', 'ekmek', 'ekşi', 'el', 'El Hamra Sarayı', 'elbise', 'elektrik', 'elektronik eşya', 'elma', 'emekli', 'emlak', 'enteresan', 'eposta', 'erkek', 'erken', 'eski', 'eş', 'eşofman', 'et', 'etek', 'ev', 'ev hanımı', 'evli', 'fabrika', 'fakir', 'fare', 'fatura', 'fena değil', 'fırça', 'fikir', 'fotoğraf', 'fotokopi', 'futbol', 'futbolcu', 'garaj', 'gardırop', 'garson', 'gazete', 'gazeteci', 'gece', 'gelecek', 'gelin', 'gemi', 'genç', 'genellikle', 'gerçekten', 'gibi', 'gişe', 'göl', 'gömlek', 'göz', 'gözlük', 'gül', 'gün', 'güzel', 'haber', 'hafta sonu', 'hala', 'halı', 'harita', 'hasta', 'hastane', 'hava', 'havuz', 'hediye', 'hemşire', 'hepsi', 'her', 'her akşam', 'her gün', 'her sabah', 'her yıl', 'her zaman', 'herkes', 'hesap', 'heyecanlı', 'hızlı', 'hizmet', 'hukuk', 'ızgara', 'ileri', 'ilkokul', 'ince', 'inek', 'insan', 'internet', 'iskele', 'istasyon', 'iş', 'iş adamı', 'işçi', 'itfaiye', 'iyi', 'jet', 'jilet', 'kaç tane', 'kadın', 'kafe', 'kafein', 'kafeterya', 'kahvaltı', 'kahve', 'kahvehane', 'halabalık', 'kalem', 'kalın', 'kamera', 'kamp', 'kamyon', 'kanguru', 'kantin', 'kapalı', 'Kapalıçarşı', 'kapı', 'kaptan', 'kardeş', 'karı', 'karnaval', 'kart', 'kasap', 'kaşık', 'kat', 'kayıt formu', 'kazak', 'kebap', 'kedi', 'kısa', 'kız', 'kilim', 'kilise', 'kim', 'kitap', 'koca', 'koç', 'kolay', 'koltuk', 'komşu', 'konser', 'konsolosluk', 'koridor', 'köfte', 'kök', 'kömür', 'köpek', 'köprü', 'köşe', 'kötü', 'köy', 'kravat', 'Kremlin Sarayı', 'kuaför', 'kulak', 'kurs', 'kuruş', 'kuş', 'kutu', 'kuyumcu', 'kuzen', 'küçük', 'kütüphane', 'lastik', 'lezzetli', 'limon', 'lobi', 'lokanta', 'lütfen', 'maç', 'mağaza', 'mahalle', 'manav', 'mangal', 'manzara', 'market', 'masa', 'matematik', 'mavi', 'mektup', 'memur', 'merdiven', 'merkez', 'meslek', 'meşgul', 'metro', 'meyve', 'Mısır', 'millet', 'mimar', 'minibüs', 'misafir', 'mobilya', 'mont', 'motosiklet', 'muhasebe', 'mutfak', 'mutlu', 'mühendis', 'müstakil ev', 'müze', 'müzik', 'müzisyen', 'nargile', 'ne', 'ne kadar', 'ne zaman', 'neden', 'nerede', 'nereden', 'niçin', 'niye', 'ocak', 'oda', 'ofis', 'okul', 'orta', 'ortaokul', 'otel', 'otobüs', 'otogar', 'oturma odası', 'ödev', 'öğle yemeği', 'öğrenci', 'öğretmen', 'ördek', 'örümcek', 'Özgürlük Heykeli', 'pahalı', 'palyaço', 'pansiyon', 'pantolon', 'para', 'park', 'parti', 'pasaport', 'pasta', 'patates', 'pazar', 'pembe', 'pencere', 'perde', 'peynir', 'piknik', 'piramit', 'Pisa Kulesi', 'piyano', 'plaj', 'plan', 'polis', 'politika', 'posta', 'poşet', 'projektör', 'radyo', 'rahat', 'randevu', 'rehber', 'renk', 'resepsiyonist', 'resim', 'saat', 'sabah', 'saç', 'sağ', 'saşlıklı', 'salata', 'salon', 'sandalye', 'sarı', 'sayfa', 'sayı', 'sebze', 'sekreter', 'selamlaşma', 'semaver', 'seminer', 'seviye', 'sıcak', 'sık sık', 'sınav', 'sınıf', 'simitçi', 'sinema', 'siyah', 'soğuk', 'sokak', 'sol', 'soru', 'soyad', 'sözlük', 'spor', 'su', 'suç', 'şal', 'şanslı', 'şapka', 'şarkı', 'şarkıcı', 'şeker', 'şemsiye', 'şimdi', 'şişman', 'şoför', 'tabak', 'tahta', 'taksi', 'takvim', 'tamir', 'tanışma', 'tarihi', 'tarihi', 'tatil', 'tatlı', 'tavuk', 'taze', 'tekrar', 'telefon', 'televizyon', 'tembel', 'temiz', 'temizlik', 'teneffüs', 'teras', 'terzi', 'teyze', 'tişört', 'tiyatro', 'tok', 'top', 'toplantı', 'tost', 'tramvay', 'tren', 'turist', 'turistik', 'tuvalet', 'Türk', 'Türkçe', 'ucuz', 'uzak', 'uzun', 'uçak', 'uyku', 'ülke', 'üniversite', 'ütü', 'üzgün', 'üzüm', 'vapur', 'vazo', 'veteriner', 'vitamin', 'vitrin', 'vize', 'yabancı', 'yakın', 'yanlış', 'yarım', 'yarın', 'yastık', 'yatak', 'yatak odası', 'yavaş', 'yaz', 'yeğen', 'yemek', 'yemekhane', 'yeni', 'yer', 'yeterli', 'yıl', 'yoğurt', 'yol', 'yorgun', 'yönetici', 'yumurta', 'yurt', 'zaman', 'zayıf', 'zeki', 'zengin', 'zeytin', 'zor'];
