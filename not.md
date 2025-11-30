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
     [text] → buton sadece yazı kadar geniş olur
     [text text text] → yazı uzarsa buton uzar
     ➡ Buton gereksiz yere tüm satırı kaplamaz
     ➡ Sadece içindeki yazı kadar yer kaplar
    
5rem = 80px)