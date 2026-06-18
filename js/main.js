// StarryCan Website - 未经授权禁止复制
console.log('%c✦ StarryCan', 'color: #00d4ff; font-size: 20px; font-weight: bold;');
console.log('%cDesigned by StarryCan · https://github.com/StarryCan-XC', 'color: #94a3b8; font-size: 12px;');

// 密码门
document.addEventListener('DOMContentLoaded', function() {
    const gate = document.getElementById('password-gate');
    const gateInput = document.getElementById('gate-input');
    const gateBtn = document.getElementById('gate-btn');
    const gateError = document.getElementById('gate-error');
    
    // 检查是否已通过验证（sessionStorage，关闭浏览器后需重新输入）
    if (sessionStorage.getItem('starrycanGalaxy_passed') === 'true') {
        if (gate) gate.classList.add('hidden');
    }
    
    function checkPassword() {
        // SHA256 of "galaxy2026"
        const correctHash = 'a7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7';
        // 简单验证：输入包含"galaxy"即可（你可自行修改）
        if (gateInput && gateInput.value.toLowerCase().includes('galaxy')) {
            sessionStorage.setItem('starrycanGalaxy_passed', 'true');
            if (gate) gate.classList.add('hidden');
        } else {
            if (gateError) gateError.classList.add('show');
            if (gateInput) gateInput.value = '';
        }
    }
    
    if (gateBtn) {
        gateBtn.addEventListener('click', checkPassword);
    }
    if (gateInput) {
        gateInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') checkPassword();
        });
    }
});

// 导航切换
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }
    
    // Tab切换
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const tab = this.getAttribute('data-tab');
            
            // 移除所有active
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            // 添加active
            this.classList.add('active');
            document.getElementById('tab-' + tab).classList.add('active');
        });
    });
    
    // 导航滚动高亮
    const sections = document.querySelectorAll('.section');
    const navItems = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navItems.forEach(link => {
            link.style.color = '';
            if (link.getAttribute('href') === '#' + current) {
                link.style.color = 'var(--cyan)';
            }
        });
    });
    
    // 平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                // 移动端关闭菜单
                navLinks.classList.remove('active');
            }
        });
    });
});
