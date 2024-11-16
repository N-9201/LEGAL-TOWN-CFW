// إضافة وظيفة لإظهار تفاصيل القانون عند النقر
document.querySelectorAll('.rule').forEach(rule => {
    rule.addEventListener('click', () => {
        const details = rule.querySelector('.rule-details');
        details.style.display = details.style.display === 'block' ? 'none' : 'block';
    });
});
