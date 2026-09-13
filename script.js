// تأثير التمرير السلس
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
});

// تفاعل أزرار الانضمام للغرف
document.querySelectorAll('.btn-join').forEach(btn => {
    btn.addEventListener('click', () => {
        const roomName = btn.closest('.room-card').querySelector('h4').textContent;
        btn.textContent = '✓ تم الانضمام';
        btn.style.background = 'linear-gradient(135deg,#00b894,#00cec9)';
        setTimeout(() => {
            alert(`مرحباً بك في غرفة: ${roomName}!`);
        }, 300);
    });
});

// تنبيه عند الضغط على أزرار التسجيل
document.querySelectorAll('.btn-primary, .btn-signup').forEach(btn => {
    btn.addEventListener('click', () => {
        alert('سيتم توجيهك لصفحة التسجيل قريباً!');
    });
});
