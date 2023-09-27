var yas = prompt("Yaşınızı girin:");
if (yas < 18) {
    alert("Üzgünüz, bu siteye erişim yaş sınırlaması nedeniyle engellenmiştir.");
    window.location.href = "https://www.google.com"; // Yaş sınırlamasını karşılamayan kullanıcıları yönlendirilecek başka bir sayfaya yönlendirebilirsiniz.
}