### Home sayfasini olusturuyoruz

1. Array oluşturma
   HeroSlides icinde her slide icin image, title, subtitle, text, buttonText, buttonLink var
   Neden array? Çünkü birden fazla slide var ve map ile kolayca render edebileceğiz
2. HeroSlider componenti
   ana slider logic’i burada
   heroSlides.map(...) ile array’i dolaşıyor
   <Slider slide={slide} /> → Slider componentine props olarak geçiyor

3. Slider componenti
   her slide’ın HTML/JSX yapısı burada
   { slide } → props olarak HeroSlider’dan geliyor
   Slider componenti array’deki resim ve yazıları kullanıyor
   burada kullanilan button projede birden fazla kullanilacagi icin component olarak yaptim 
   # tailwind
   Template literal + ${} → dinamik olarak sınıf ekleme
   `... ${...} ...` JS’de string içinde değişken veya ifadeyi eklemek için kullanılır (template literal)
   - w-full h-full genişlik ve yükseklik %100
   - absolute resimleri ust uste koyar
   - inset-0 top/right/bottom/left = 0 → tüm container’ı kaplar
   - transition-opacity opacity değiştiğinde transition efekti uygular
   - duration-700 transition süresi = 700ms
   - ease-in-out geçiş eğrisi → yavaş başlar, hızlanır, yavaşlar
   - whitespace-pre-line Satır sonlarını (\n) koru
   - tracking letter-spacing, yani harfler arası boşluğu
   - max-w-max elementin en fazla genişliği içeriği kadar olsun demek
     [text] → buton sadece yazı kadar geniş olur
     [text text text] → yazı uzarsa buton uzar
     ➡ Buton gereksiz yere tüm satırı kaplamaz
     ➡ Sadece içindeki yazı kadar yer kaplar
    - relative → bu elemana konumlandırma referansı verir.
    - left-1/2 Elementi sol kenardan %50 konuma çeker
    - top-full Elementi üstten %100 konuma çeker
    - -translate-x-1/2 Elemanı kendi genişliğinin %50’si kadar sola kaydırır 
    Bu, left-1/2 ile beraber kullanıldığında tam yatay ortalama sağlar
    - whitespace-nowrap Metnin alt satıra geçmesini engeller, yani yazı tek satır kalır
