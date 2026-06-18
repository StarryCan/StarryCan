// StarryCan Official Website - 未经授权禁止复制
console.log('%c✦ StarryCan', 'color: #00d4ff; font-size: 20px; font-weight: bold;');
console.log('%cDesigned by StarryCan · https://github.com/StarryCan-XC', 'color: #94a3b8; font-size: 12px;');

// 主题切换
(function() {
    const toggleBtn = document.getElementById('theme-toggle');
    const icon = document.getElementById('theme-icon');
    const html = document.documentElement;
    
    // 读取本地存储的主题偏好，默认暗色
    const savedTheme = localStorage.getItem('starrycan-theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'light') {
        html.setAttribute('data-theme', 'light');
        if (icon) icon.textContent = '🌙';
    } else if (savedTheme === 'dark' || !savedTheme) {
        html.removeAttribute('data-theme');
        if (icon) icon.textContent = '☀️';
    }
    
    if (toggleBtn) {
        toggleBtn.addEventListener('click', function() {
            const isLight = html.getAttribute('data-theme') === 'light';
            
            if (isLight) {
                html.removeAttribute('data-theme');
                localStorage.setItem('starrycan-theme', 'dark');
                if (icon) icon.textContent = '☀️';
            } else {
                html.setAttribute('data-theme', 'light');
                localStorage.setItem('starrycan-theme', 'light');
                if (icon) icon.textContent = '🌙';
            }
        });
    }
})();

// 导航切换
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }
    
    // 点击导航链接后关闭移动端菜单
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
});

// Tab切换
document.addEventListener('DOMContentLoaded', function() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetTab = btn.dataset.tab;
            
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            btn.classList.add('active');
            document.getElementById(`tab-${targetTab}`).classList.add('active');
        });
    });
});

// 滚动高亮
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    function highlightNav() {
        const scrollY = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', highlightNav);
});

// 导航栏滚动效果
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.scrollY;
        
        if (currentScroll > 100) {
            navbar.style.boxShadow = '0 1px 3px rgba(0,0,0,0.3)';
        } else {
            navbar.style.boxShadow = 'none';
        }
        
        lastScroll = currentScroll;
    });
});
