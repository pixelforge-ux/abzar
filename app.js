import { createIcons, Globe, Scale, Calendar, Languages, Moon, Home, Lock, CalendarDays, Copy, ChevronLeft, ChevronRight, ArrowRight, Sun, Ghost, Clock, Wrench, Calculator, Delete, Settings2, Activity, Timer, Type, Link2, Shuffle, Mail, ShieldCheck, Palette, Binary, Banknote, Baby, Car, Eye, EyeOff, Hourglass, GraduationCap, Plus, Trash2, Dices, Coins, CalendarRange, History, Layers, HelpCircle, RotateCw, Minus, ChevronUp, ChevronDown, Dice5 } from 'lucide';
import moment from 'moment-jalaali';

// Initial Icon Render
const lucideIcons = { Globe, Scale, Calendar, Languages, Moon, Home, Lock, CalendarDays, Copy, ChevronLeft, ChevronRight, ArrowRight, Sun, Ghost, Clock, Wrench, Calculator, Delete, Settings2, Activity, Timer, Type, Link2, Shuffle, Mail, ShieldCheck, Palette, Binary, Banknote, Baby, Car, Eye, EyeOff, Hourglass, GraduationCap, Plus, Trash2, Dices, Coins, CalendarRange, History, Layers, HelpCircle, RotateCw, Minus, ChevronUp, ChevronDown, Dice5 };
createIcons({ icons: lucideIcons });

const IRAN_CITIES = {
    'Tehran': { name: 'تهران', lat: 35.6892, lon: 51.3890, tz: 'Asia/Tehran' },
    'Mashhad': { name: 'مشهد', lat: 36.2972, lon: 59.6067, tz: 'Asia/Tehran' },
    'Isfahan': { name: 'اصفهان', lat: 32.6546, lon: 51.6680, tz: 'Asia/Tehran' },
    'Karaj': { name: 'کرج', lat: 35.8327, lon: 50.9915, tz: 'Asia/Tehran' },
    'Shiraz': { name: 'شیراز', lat: 29.5918, lon: 52.5837, tz: 'Asia/Tehran' },
    'Tabriz': { name: 'تبریز', lat: 38.0962, lon: 46.2731, tz: 'Asia/Tehran' },
    'Qom': { name: 'قم', lat: 34.6416, lon: 50.8746, tz: 'Asia/Tehran' },
    'Ahvaz': { name: 'اهواز', lat: 31.3183, lon: 48.6706, tz: 'Asia/Tehran' },
    'Kermanshah': { name: 'کرمانشاه', lat: 34.3142, lon: 47.0650, tz: 'Asia/Tehran' },
    'Urmia': { name: 'ارومیه', lat: 37.5527, lon: 45.0761, tz: 'Asia/Tehran' },
    'Rasht': { name: 'رشت', lat: 37.2808, lon: 49.5831, tz: 'Asia/Tehran' },
    'Zahedan': { name: 'زاهدان', lat: 29.4963, lon: 60.8629, tz: 'Asia/Tehran' },
    'Hamadan': { name: 'همدان', lat: 34.7982, lon: 48.5146, tz: 'Asia/Tehran' },
    'Kerman': { name: 'کرمان', lat: 30.2839, lon: 57.0834, tz: 'Asia/Tehran' },
    'Yazd': { name: 'یزد', lat: 31.8974, lon: 54.3569, tz: 'Asia/Tehran' },
    'Ardabil': { name: 'اردبیل', lat: 38.2498, lon: 48.2933, tz: 'Asia/Tehran' },
    'BandarAbbas': { name: 'بندرعباس', lat: 27.1833, lon: 56.2667, tz: 'Asia/Tehran' },
    'Sari': { name: 'ساری', lat: 36.5659, lon: 53.0586, tz: 'Asia/Tehran' }
};

const WORLD_CAPITALS = {
    'London': { name: 'لندن', country: 'بریتانیا', tz: 'Europe/London' },
    'NewYork': { name: 'نیویورک', country: 'آمریکا', tz: 'America/New_York' },
    'Tokyo': { name: 'توکیو', country: 'ژاپن', tz: 'Asia/Tokyo' },
    'Paris': { name: 'پاریس', country: 'فرانسه', tz: 'Europe/Paris' },
    'Berlin': { name: 'برلین', country: 'آلمان', tz: 'Europe/Berlin' },
    'Moscow': { name: 'مسکو', country: 'روسیه', tz: 'Europe/Moscow' },
    'Beijing': { name: 'پکن', country: 'چین', tz: 'Asia/Shanghai' },
    'Dubai': { name: 'دبی', country: 'امارات', tz: 'Asia/Dubai' },
    'Istanbul': { name: 'استانبول', country: 'ترکیه', tz: 'Europe/Istanbul' },
    'Sydney': { name: 'سیدنی', country: 'استرالیا', tz: 'Australia/Sydney' },
    'Toronto': { name: 'تورنتو', country: 'کانادا', tz: 'America/Toronto' }
};

const CITIES = { ...IRAN_CITIES };

/**
 * FALLING ICONS BACKGROUND
 */
const backgroundModule = (() => {
    const container = document.getElementById('falling-icons-bg');
    const iconKeys = Object.keys(lucideIcons);
    
    function createIcon() {
        const key = iconKeys[Math.floor(Math.random() * iconKeys.length)];
        const el = document.createElement('div');
        el.className = 'falling-icon';
        const size = 15 + Math.random() * 35;
        el.style.left = Math.random() * 100 + 'vw';
        el.style.fontSize = size + 'px';
        
        // Manual Lucide SVG creation to avoid re-running createIcons constantly
        const iconName = key.toLowerCase();
        el.innerHTML = `<i data-lucide="${iconName}" style="width:${size}px; height:${size}px; display:block;"></i>`;
        container.appendChild(el);
        
        // We still need to initialize the specific icon we just added
        createIcons({ icons: lucideIcons, nameAttr: 'data-lucide', root: el });

        const duration = 6000 + Math.random() * 8000;
        const drift = (Math.random() - 0.5) * 100; // Slight horizontal drift
        const anim = el.animate([
            { transform: `translate(0, -10vh) rotate(0deg)`, opacity: 0 },
            { transform: `translate(${drift/2}px, 50vh) rotate(180deg)`, opacity: 0.2 },
            { transform: `translate(${drift}px, 110vh) rotate(360deg)`, opacity: 0 }
        ], {
            duration: duration,
            easing: 'linear'
        });

        anim.onfinish = () => el.remove();
    }

    function init() {
        // Initial burst for immediate effect
        for(let i=0; i<30; i++) {
            setTimeout(() => {
                createIcon();
            }, Math.random() * 2000);
        }
        // High frequency spawning
        setInterval(createIcon, 400);
    }
    return { init };
})();

/** 
 * WORLD CLOCK MODULE
 */
const clockModule = (() => {
    const listContainer = document.getElementById('world-clock-list');

    function renderClocks() {
        listContainer.innerHTML = '';
        // Combine Iranian and World cities for the clock
        const allClocks = { ...IRAN_CITIES, ...WORLD_CAPITALS };
        Object.keys(allClocks).forEach(cityKey => {
            const data = allClocks[cityKey];
            const item = document.createElement('div');
            item.className = 'clock-item';
            item.innerHTML = `
                <div class="city-meta">
                    <h4>${data.name}</h4>
                    <span>${data.country || 'ایران'}</span>
                </div>
                <div class="time-display" data-tz="${data.tz}">--:--:--</div>
            `;
            listContainer.appendChild(item);
        });
    }

    function updateTimes() {
        const displays = listContainer.querySelectorAll('.time-display');
        displays.forEach(d => {
            const tz = d.dataset.tz;
            try {
                const time = new Intl.DateTimeFormat('fa-IR', {
                    timeZone: tz,
                    hour: '2-digit',
                    minute: '2-digit',
                    second: '2-digit',
                    hour12: false
                }).format(new Date());
                d.innerText = time.replace(/,/g, '');
            } catch(e) {}
        });
    }

    function init() {
        renderClocks();
        setInterval(updateTimes, 1000);
        updateTimes();
    }

    return { init };
})();

/**
 * CONVERTERS MODULE
 */
const converterModule = (() => {
    const units = {
        length: { 
            units: ['متر', 'کیلومتر', 'سانتی‌متر', 'میلی‌متر', 'مایل', 'یارد', 'فوت', 'اینچ', 'نانومتر', 'میکرومتر'], 
            rates: [1, 0.001, 100, 1000, 0.000621371, 1.09361, 3.28084, 39.3701, 1e9, 1e6] 
        },
        weight: { 
            units: ['کیلوگرم', 'گرم', 'میلی‌گرم', 'تن', 'پوند', 'اونس', 'مثقال', 'سیر'], 
            rates: [1, 1000, 1000000, 0.001, 2.20462, 35.274, 217.39, 13.33] 
        },
        area: {
            units: ['مترمربع', 'کیلومترمربع', 'هکتار', 'جریب (Acre)', 'فوت مربع', 'سانتی‌مترمربع'],
            rates: [1, 0.000001, 0.0001, 0.000247105, 10.7639, 10000]
        },
        volume: {
            units: ['لیتر', 'میلی‌لیتر', 'مترمکعب', 'گالن (US)', 'فنجان', 'پیمانه'],
            rates: [1, 1000, 0.001, 0.264172, 4.22675, 4]
        },
        speed: {
            units: ['متر بر ثانیه', 'کیلومتر بر ساعت', 'مایل بر ساعت', 'گره (Knot)', 'ماخ'],
            rates: [1, 3.6, 2.23694, 1.94384, 0.00293867]
        },
        temp: { units: ['سلسیوس', 'فارنهایت', 'کلوین', 'رنکین'] }
    };

    function populateSelects() {
        const type = document.getElementById('unit-type').value;
        const from = document.getElementById('unit-from');
        const to = document.getElementById('unit-to');
        if (!from || !to) return;
        from.innerHTML = to.innerHTML = '';
        units[type].units.forEach((u, i) => {
            from.add(new Option(u, i));
            to.add(new Option(u, i));
        });
        convert();
    }

    function convert() {
        const type = document.getElementById('unit-type').value;
        const val = parseFloat(document.getElementById('unit-input').value) || 0;
        const fromIdx = parseInt(document.getElementById('unit-from').value);
        const toIdx = parseInt(document.getElementById('unit-to').value);

        const outEl = document.getElementById('unit-output');

        if (type === 'temp') {
            let celsius;
            if (fromIdx === 0) celsius = val;
            else if (fromIdx === 1) celsius = (val - 32) * 5/9;
            else if (fromIdx === 2) celsius = val - 273.15;
            else celsius = (val - 491.67) * 5/9;

            let result;
            if (toIdx === 0) result = celsius;
            else if (toIdx === 1) result = (celsius * 9/5) + 32;
            else if (toIdx === 2) result = celsius + 273.15;
            else result = (celsius + 273.15) * 9/5;

            outEl.value = result.toFixed(2);
        } else {
            const rates = units[type].rates;
            // Base value = input / rate of 'from'
            const baseValue = val / rates[fromIdx];
            // Result = base * rate of 'to'
            const result = baseValue * rates[toIdx];
            
            // Avoid extreme scientific notation for user
            if (result < 0.000001 && result > 0) outEl.value = result.toExponential(4);
            else outEl.value = Number(result.toFixed(6));
        }
    }

    function init() {
        document.getElementById('unit-type').addEventListener('change', populateSelects);
        document.getElementById('unit-input').addEventListener('input', convert);
        document.getElementById('unit-from').addEventListener('change', convert);
        document.getElementById('unit-to').addEventListener('change', convert);
        populateSelects();
    }

    return { init };
})();

/**
 * DATE CONVERTER MODULE (Simplified)
 */
const dateModule = (() => {
    const MONTH_NAMES = {
        sh: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'],
        mi: ['ژانویه', 'فوریه', 'مارس', 'آوریل', 'مه', 'ژوئن', 'ژوئیه', 'اوت', 'سپتامبر', 'اکتبر', 'نوامبر', 'دسامبر'],
        gh: ['محرم', 'صفر', 'ربیع‌الاول', 'ربیع‌الثانی', 'جمادی‌الاول', 'جمادی‌الثانی', 'رجب', 'شعبان', 'رمضان', 'شوال', 'ذی‌القعده', 'ذی‌الحجه']
    };

    function g2h(date) {
        // Use English locale with Islamic calendar to prevent browser from defaulting to Persian calendar in fa-IR
        const formatter = new Intl.DateTimeFormat('en-u-ca-islamic-umalqura-nu-latn', {
            year: 'numeric', month: 'numeric', day: 'numeric'
        });
        try {
            const parts = formatter.formatToParts(date);
            const y = parts.find(p => p.type === 'year').value;
            const m = parts.find(p => p.type === 'month').value;
            const d = parts.find(p => p.type === 'day').value;
            return `${y}/${m}/${d}`;
        } catch (e) {
            return "خطا در محاسبه";
        }
    }
    function h2g(y, m, d) {
        // More robust Hijri to Julian Day conversion (Tabular)
        const jd = Math.floor((11 * y + 3) / 30) + 354 * y + 30 * m - Math.floor((m - 1) / 2) + d + 1948440 - 385;
        const gDate = new Date((jd - 2440587.5) * 86400000);
        gDate.setHours(12, 0, 0, 0); // Normalize to noon
        return gDate;
    }

    function refresh() {
        const y = parseInt(document.getElementById('date-y').value);
        const m = parseInt(document.getElementById('date-m').value);
        const d = parseInt(document.getElementById('date-d').value);
        const from = document.getElementById('date-from').value;

        if (!y || !m || !d) return;

        try {
            let gDate;
            if (from === 'sh') {
                // Ensure noon to avoid TZ shifts causing year/day jumps
                const mObj = moment(`${y}/${m}/${d}`, 'jYYYY/jM/jD');
                if (!mObj.isValid()) return;
                gDate = mObj.hour(12).minute(0).toDate();
            } else if (from === 'mi') {
                gDate = new Date(y, m - 1, d, 12, 0);
            } else if (from === 'gh') {
                gDate = h2g(y, m, d);
                gDate.setHours(12, 0);
            }

            if (isNaN(gDate.getTime())) return;

            // Use the same noon-based moment for display to ensure consistency
            const resultMoment = moment(gDate).hour(12);
            document.getElementById('res-sh').innerText = resultMoment.format('jYYYY/jM/jD');
            document.getElementById('res-mi').innerText = resultMoment.format('YYYY/MM/DD');
            document.getElementById('res-gh').innerText = g2h(gDate);
        } catch (e) {
            console.error("Conversion Error:", e);
        }
    }

    function updateMonthSelect() {
        const from = document.getElementById('date-from').value;
        const monthSelect = document.getElementById('date-m');
        const currentVal = monthSelect.value || 1;
        
        monthSelect.innerHTML = '';
        MONTH_NAMES[from].forEach((name, idx) => {
            const opt = document.createElement('option');
            opt.value = idx + 1;
            opt.textContent = name;
            monthSelect.appendChild(opt);
        });
        
        if (currentVal <= MONTH_NAMES[from].length) {
            monthSelect.value = currentVal;
        }
    }

    function init() {
        const inputs = ['date-y', 'date-m', 'date-d', 'date-from'];
        
        document.getElementById('date-from').addEventListener('change', () => {
            updateMonthSelect();
            refresh();
        });

        inputs.forEach(id => {
            const el = document.getElementById(id);
            if (id === 'date-m') {
                el.addEventListener('change', refresh);
            } else {
                el.addEventListener('input', refresh);
            }
        });
        
        // Use a safer initialization for Jalaali
        const now = moment();
        const jy = now.jYear();
        const jm = now.jMonth() + 1;
        const jd = now.jDate();
        
        updateMonthSelect();
        
        document.getElementById('date-y').value = jy;
        document.getElementById('date-m').value = jm;
        document.getElementById('date-d').value = jd;
        
        // Delayed refresh to ensure DOM is ready and inputs are populated
        setTimeout(refresh, 100);
    }
    return { init };
})();

/**
 * PASSWORD GENERATOR MODULE
 */
const passwordModule = (() => {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
    
    function generate() {
        const len = document.getElementById('pass-length').value;
        let pass = "";
        for(let i=0; i<len; i++) {
            pass += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        document.getElementById('pass-output').value = pass;
    }

    function init() {
        const range = document.getElementById('pass-length');
        range.addEventListener('input', () => {
            document.getElementById('pass-len-val').innerText = range.value;
        });
        document.getElementById('btn-gen-pass').addEventListener('click', generate);
        document.getElementById('btn-copy-pass').addEventListener('click', () => {
            const out = document.getElementById('pass-output');
            out.select();
            document.execCommand('copy');
            alert('رمز کپی شد!');
        });
        generate();
    }
    return { init };
})();

/**
 * CALENDAR MODULE
 */
const calendarModule = (() => {
    let currentMonth = moment();

    // Key Iranian holidays (Static list of common fixed-date public solar holidays in Jalali)
    // months are 0-based: 0 = فروردین, 1 = اردیبهشت, ... 11 = اسفند
    const holidays = [
        // Fixed Iranian Solar Holidays
        {m: 0, d: 1}, {m: 0, d: 2}, {m: 0, d: 3}, {m: 0, d: 4}, // نوروز
        {m: 0, d: 12}, // روز جمهوری اسلامی
        {m: 0, d: 13}, // روز طبیعت
        {m: 2, d: 14}, // رحلت امام خمینی
        {m: 2, d: 15}, // قیام ۱۵ خرداد
        {m: 10, d: 22}, // پیروزی انقلاب اسلامی
        {m: 11, d: 29}  // ملی شدن صنعت نفت
    ];

    const monthNames = [
        'فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور',
        'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'
    ];

    function render() {
        const grid = document.getElementById('calendar-grid');
        const monthName = document.getElementById('cal-month-name');
        
        const days = grid.querySelectorAll('.day-cell');
        days.forEach(d => d.remove());

        monthName.innerText = `${monthNames[currentMonth.jMonth()]} ${currentMonth.jYear().toLocaleString('fa-IR', {useGrouping:false})}`;

        const startOfMonth = currentMonth.clone().startOf('jMonth');
        const endOfMonth = currentMonth.clone().endOf('jMonth');
        
        // moment().day(): 0=Sunday ... 6=Saturday
        // Shift so the calendar grid starts with Saturday (common for Iran views) => Saturday should be index 0
        let firstDayIdx = startOfMonth.day();
        firstDayIdx = (firstDayIdx + 1) % 7; // now 0=Saturday, 1=Sunday, ..., 6=Friday

        for (let i = 0; i < firstDayIdx; i++) {
            const empty = document.createElement('div');
            empty.className = 'day-cell empty';
            grid.appendChild(empty);
        }

        const daysInMonth = endOfMonth.jDate();
        const today = moment();

        for (let d = 1; d <= daysInMonth; d++) {
            const cell = document.createElement('div');
            cell.className = 'day-cell';
            cell.innerText = d.toLocaleString('fa-IR');
            
            // Highlight Friday (index 5 in moment.day())
            const currentDay = startOfMonth.clone().add(d - 1, 'days');
            if (currentDay.day() === 5) {
                cell.classList.add('holiday');
            }

            // Fixed holidays
            if (holidays.some(h => h.m === currentMonth.jMonth() && h.d === d)) {
                cell.classList.add('holiday');
            }

            if (currentMonth.jYear() === today.jYear() && 
                currentMonth.jMonth() === today.jMonth() && 
                d === today.jDate()) {
                cell.classList.add('today');
            }
            grid.appendChild(cell);
        }
    }

    function init() {
        document.getElementById('cal-prev').addEventListener('click', () => {
            currentMonth.add(1, 'jMonth');
            render();
        });
        document.getElementById('cal-next').addEventListener('click', () => {
            currentMonth.subtract(1, 'jMonth');
            render();
        });
        render();
    }
    return { init };
})();

/**
 * PRAYER TIMES MODULE
 */
const prayerModule = (() => {
    const citySelector = document.getElementById('prayer-city-selector');

    async function update() {
        const cityKey = citySelector.value;
        const coords = IRAN_CITIES[cityKey];
        if (!coords) return;

        try {
            const res = await fetch(`https://api.aladhan.com/v1/timings?latitude=${coords.lat}&longitude=${coords.lon}&method=7`);
            const data = await res.json();
            const timings = data.data.timings;

            document.getElementById('p-fajr').innerText = timings.Fajr;
            document.getElementById('p-sunrise').innerText = timings.Sunrise;
            document.getElementById('p-dhuhr').innerText = timings.Dhuhr;
            document.getElementById('p-sunset').innerText = timings.Sunset;
            document.getElementById('p-maghrib').innerText = timings.Maghrib;
            document.getElementById('p-midnight').innerText = timings.Midnight;
        } catch (e) {
            console.error("Prayer fetch error", e);
        }
    }

    function init() {
        Object.keys(IRAN_CITIES).forEach(cityKey => {
            const opt = new Option(IRAN_CITIES[cityKey].name, cityKey);
            citySelector.add(opt);
        });

        const savedCity = localStorage.getItem('user-city') || 'Tehran';
        citySelector.value = savedCity;

        citySelector.addEventListener('change', () => {
            localStorage.setItem('user-city', citySelector.value);
            update();
        });
        update();
    }
    return { init };
})();

/**
 * CALCULATOR MODULE
 */
const calcModule = (() => {
    let expression = '';
    let result = '0';
    let lastWasOp = false;

    const expressionEl = document.getElementById('calc-expression');
    const resultEl = document.getElementById('calc-result');

    function toPersianDigits(str) {
        if (str === null || str === undefined) return '';
        return str.toString().replace(/\d/g, d => '۰۱۲۳۴۵۶۷۸۹'[d]);
    }

    function updateDisplay() {
        let displayExpr = expression
            .replace(/\*\*/g, '^')
            .replace(/\*/g, ' × ')
            .replace(/\//g, ' ÷ ')
            .replace(/Math\.sin/g, 'sin')
            .replace(/Math\.cos/g, 'cos')
            .replace(/Math\.tan/g, 'tan')
            .replace(/Math\.log10/g, 'log')
            .replace(/Math\.log/g, 'ln')
            .replace(/Math\.sqrt/g, '√')
            .replace(/Math\.PI/g, 'π')
            .replace(/Math\.E/g, 'e');
            
        expressionEl.innerText = toPersianDigits(displayExpr) || '۰';
        resultEl.innerText = result ? toPersianDigits(result) : '';
    }

    function factorial(n) {
        if (n < 0) return NaN;
        if (n === 0 || n === 1) return 1;
        let res = 1;
        for (let i = 2; i <= n; i++) res *= i;
        return res;
    }

    function calculateLive() {
        if (!expression) {
            result = '';
            return;
        }
        try {
            let evalStr = expression
                .replace(/sin\(/g, 'Math.sin(')
                .replace(/cos\(/g, 'Math.cos(')
                .replace(/tan\(/g, 'Math.tan(')
                .replace(/log\(/g, 'Math.log10(')
                .replace(/ln\(/g, 'Math.log(')
                .replace(/sqrt\(/g, 'Math.sqrt(')
                .replace(/PI/g, 'Math.PI')
                .replace(/E/g, 'Math.E');

            // Handle Factorial manually before eval
            evalStr = evalStr.replace(/(\d+)!/g, (match, num) => factorial(parseInt(num)));

            // Close trailing open parentheses for live eval
            let openParens = (evalStr.match(/\(/g) || []).length;
            let closeParens = (evalStr.match(/\)/g) || []).length;
            let tempEvalStr = evalStr;
            for (let i = 0; i < openParens - closeParens; i++) {
                tempEvalStr += ')';
            }

            // Remove trailing ops
            if (['+', '-', '*', '/', '.', '^'].includes(tempEvalStr.slice(-1))) {
                tempEvalStr = tempEvalStr.slice(0, -1);
            }

            const evalResult = eval(tempEvalStr);
            if (evalResult !== undefined && evalResult !== Infinity && !isNaN(evalResult)) {
                result = Number.isInteger(evalResult) ? evalResult.toString() : evalResult.toFixed(6).replace(/\.?0+$/, "");
            } else {
                result = '';
            }
        } catch (e) {
            result = '';
        }
    }

    function handleInput(val) {
        if (val === 'C') {
            expression = '';
            result = '';
        } else if (val === 'DEL') {
            expression = expression.slice(0, -1);
            calculateLive();
        } else if (val === '=') {
            if (result !== '') {
                expression = result;
                result = '';
            }
        } else if (val === '%') {
             try {
                let evalTarget = expression || '0';
                const evalResult = eval(evalTarget) / 100;
                expression = evalResult.toString();
                result = '';
             } catch(e) { }
        } else if (val === '!') {
            if (expression && !isNaN(expression.slice(-1))) {
                expression += '!';
                calculateLive();
            }
        } else {
            const isOp = ['+', '-', '*', '/', '**'].includes(val);
            if (isOp) {
                if (expression === '' && val !== '-') return;
                if (lastWasOp) {
                    expression = expression.slice(0, -1) + val;
                } else {
                    expression += val;
                }
            } else {
                expression += val;
            }
            lastWasOp = isOp;
            calculateLive();
        }
        updateDisplay();
    }

    function init() {
        document.querySelectorAll('.calc-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                handleInput(btn.dataset.val);
            });
        });
    }

    return { init };
})();

/**
 * BMI MODULE
 */
const bmiModule = (() => {
    function calculate() {
        const h = parseFloat(document.getElementById('bmi-height').value);
        const w = parseFloat(document.getElementById('bmi-weight').value);
        const resultArea = document.getElementById('bmi-result-area');
        const valEl = document.getElementById('bmi-val');
        const statusEl = document.getElementById('bmi-status');
        const descEl = document.getElementById('bmi-desc');

        if (!h || !w || h <= 0 || w <= 0) return;

        const heightInMeters = h / 100;
        const bmi = w / (heightInMeters * heightInMeters);
        const pBmi = bmi.toFixed(1).toLocaleString('fa-IR');

        valEl.innerText = pBmi;
        resultArea.style.display = 'block';

        if (bmi < 18.5) {
            statusEl.innerText = "کمبود وزن";
            statusEl.style.color = "#ffcc00";
            descEl.innerText = "وزن شما نسبت به قدتان کم است. بهتر است با یک متخصص تغذیه مشورت کنید.";
        } else if (bmi >= 18.5 && bmi < 25) {
            statusEl.innerText = "وزن نرمال";
            statusEl.style.color = "#4CAF50";
            descEl.innerText = "تبریک! وزن شما در محدوده ایده‌آل و سلامت قرار دارد.";
        } else if (bmi >= 25 && bmi < 30) {
            statusEl.innerText = "اضافه وزن";
            statusEl.style.color = "#ff9800";
            descEl.innerText = "شما کمی اضافه وزن دارید. فعالیت بدنی بیشتر و رژیم غذایی سالم توصیه می‌شود.";
        } else {
            statusEl.innerText = "چاقی";
            statusEl.style.color = "#f44336";
            descEl.innerText = "شاخص توده بدنی شما در محدوده چاقی است. برای حفظ سلامت قلب و عروق اقدام کنید.";
        }
    }

    function init() {
        document.getElementById('btn-calc-bmi').addEventListener('click', calculate);
    }
    return { init };
})();

/**
 * STOPWATCH MODULE
 */
const stopwatchModule = (() => {
    let startTime = 0;
    let elapsedTime = 0;
    let timerInterval = null;
    let laps = [];

    const display = document.getElementById('sw-display');
    const startBtn = document.getElementById('sw-start');
    const resetBtn = document.getElementById('sw-reset');
    const lapBtn = document.getElementById('sw-lap');
    const lapsList = document.getElementById('sw-laps');

    function timeToString(time) {
        let diffInMin = time / 60000;
        let mm = Math.floor(diffInMin);

        let diffInSec = (diffInMin - mm) * 60;
        let ss = Math.floor(diffInSec);

        let diffInMs = (diffInSec - ss) * 100;
        let ms = Math.floor(diffInMs);

        let formattedMM = mm.toString().padStart(2, "0");
        let formattedSS = ss.toString().padStart(2, "0");
        let formattedMS = ms.toString().padStart(2, "0");

        return `${formattedMM}:${formattedSS}:${formattedMS}`;
    }

    function print(txt) {
        display.innerHTML = txt.replace(/\d/g, d => '۰۱۲۳۴۵۶۷۸۹'[d]);
    }

    function start() {
        startTime = Date.now() - elapsedTime;
        timerInterval = setInterval(function printTime() {
            elapsedTime = Date.now() - startTime;
            print(timeToString(elapsedTime));
        }, 10);
        showButton("PAUSE");
    }

    function pause() {
        clearInterval(timerInterval);
        showButton("PLAY");
    }

    function reset() {
        clearInterval(timerInterval);
        print("۰۰:۰۰:۰۰");
        elapsedTime = 0;
        laps = [];
        renderLaps();
        showButton("PLAY");
    }

    function lap() {
        if (elapsedTime === 0) return;
        laps.unshift(timeToString(elapsedTime));
        renderLaps();
    }

    function renderLaps() {
        lapsList.innerHTML = '';
        laps.forEach((time, index) => {
            const lapEl = document.createElement('div');
            lapEl.className = 'lap-item';
            lapEl.innerHTML = `
                <span>دور ${(laps.length - index).toLocaleString('fa-IR')}</span>
                <span style="direction:ltr; font-family:monospace;">${time.replace(/\d/g, d => '۰۱۲۳۴۵۶۷۸۹'[d])}</span>
            `;
            lapsList.appendChild(lapEl);
        });
    }

    function showButton(buttonKey) {
        if (buttonKey === "PAUSE") {
            startBtn.innerText = "توقف";
            startBtn.classList.add('secondary');
        } else {
            startBtn.innerText = "شروع";
            startBtn.classList.remove('secondary');
        }
    }

    function init() {
        startBtn.addEventListener('click', () => {
            if (timerInterval) {
                pause();
                timerInterval = null;
            } else {
                start();
            }
        });
        resetBtn.addEventListener('click', reset);
        lapBtn.addEventListener('click', lap);
    }

    return { init };
})();

/**
 * TEXT ANALYSIS MODULE
 */
const textAnalysisModule = (() => {
    const input = document.getElementById('analysis-input');
    const charEl = document.getElementById('char-count');
    const wordEl = document.getElementById('word-count');
    const timeEl = document.getElementById('reading-time');

    function analyze() {
        const text = input.value || '';
        const chars = text.length;
        const words = text.trim().split(/\s+/).filter(w => w.length > 0).length;
        
        // Avg reading speed: ~200 words per minute
        const seconds = Math.ceil((words / 200) * 60);
        
        charEl.innerText = chars.toLocaleString('fa-IR');
        wordEl.innerText = words.toLocaleString('fa-IR');
        
        if (seconds < 60) {
            timeEl.innerText = `${seconds.toLocaleString('fa-IR')} ثانیه`;
        } else {
            const minutes = Math.floor(seconds / 60);
            timeEl.innerText = `${minutes.toLocaleString('fa-IR')} دقیقه و ${(seconds % 60).toLocaleString('fa-IR')} ثانیه`;
        }
    }

    function init() {
        input.addEventListener('input', analyze);
    }
    return { init };
})();

/**
 * VALIDATOR MODULE
 */
const validatorModule = (() => {
    const input = document.getElementById('validator-input');
    const emailRes = document.getElementById('email-valid');
    const urlRes = document.getElementById('url-valid');

    function validate() {
        const val = input.value.trim();
        if (!val) {
            emailRes.innerText = urlRes.innerText = '-';
            emailRes.className = urlRes.className = 'status-badge';
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isEmail = emailRegex.test(val);
        
        let isUrl = false;
        try {
            new URL(val.startsWith('http') ? val : 'https://' + val);
            // Additional check to ensure it has a dot and looks like a domain
            isUrl = val.includes('.') && val.length > 3;
        } catch(e) { isUrl = false; }

        emailRes.innerText = isEmail ? 'معتبر' : 'نامعتبر';
        emailRes.className = 'status-badge ' + (isEmail ? 'valid' : 'invalid');

        urlRes.innerText = isUrl ? 'معتبر' : 'نامعتبر';
        urlRes.className = 'status-badge ' + (isUrl ? 'valid' : 'invalid');
    }

    function init() {
        input.addEventListener('input', validate);
    }
    return { init };
})();

/**
 * PASSWORD STRENGTH MODULE
 */
const strengthModule = (() => {
    const input = document.getElementById('strength-input');
    const bar = document.getElementById('strength-bar');
    const text = document.getElementById('strength-text');
    const tipsList = document.getElementById('strength-tips');
    const toggleBtn = document.getElementById('toggle-strength-pass');

    function check() {
        const val = input.value;
        let score = 0;
        let tips = [];

        if (val.length >= 8) score++; else tips.push("حداقل ۸ کاراکتر وارد کنید");
        if (/[A-Z]/.test(val)) score++; else tips.push("حروف بزرگ انگلیسی اضافه کنید");
        if (/[0-9]/.test(val)) score++; else tips.push("اعداد اضافه کنید");
        if (/[!@#$%^&*]/.test(val)) score++; else tips.push("نمادهای خاص (!@#...) اضافه کنید");
        if (val.length >= 12) score++;

        const levels = ["خیلی ضعیف", "ضعیف", "متوسط", "قوی", "بسیار قوی"];
        const colors = ["#f44336", "#ff9800", "#ffeb3b", "#4caf50", "#2196f3"];
        
        const safeScore = Math.min(score, 4);
        bar.style.width = (score * 20) + "%";
        bar.style.backgroundColor = colors[safeScore];
        text.innerText = levels[safeScore];
        text.style.color = colors[safeScore];

        tipsList.innerHTML = tips.map(t => `<li>${t}</li>`).join("");
    }

    function init() {
        input.addEventListener('input', check);
        toggleBtn.addEventListener('click', () => {
            const isPass = input.type === 'password';
            input.type = isPass ? 'text' : 'password';
            toggleBtn.innerHTML = isPass ? '<i data-lucide="eye-off"></i>' : '<i data-lucide="eye"></i>';
            createIcons({ icons: lucideIcons });
        });
    }
    return { init };
})();

/**
 * COLOR STUDIO MODULE
 */
const colorModule = (() => {
    const picker = document.getElementById('color-picker');
    const preview = document.getElementById('color-preview');
    const hexInput = document.getElementById('color-hex');
    const rgbInput = document.getElementById('color-rgb');
    const hslInput = document.getElementById('color-hsl');

    function hexToRgb(hex) {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    }

    function rgbToHsl(r, g, b) {
        r /= 255, g /= 255, b /= 255;
        const max = Math.max(r, g, b), min = Math.min(r, g, b);
        let h, s, l = (max + min) / 2;
        if (max === min) h = s = 0;
        else {
            const d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            switch (max) {
                case r: h = (g - b) / d + (g < b ? 6 : 0); break;
                case g: h = (b - r) / d + 2; break;
                case b: h = (r - g) / d + 4; break;
            }
            h /= 6;
        }
        return `hsl(${Math.round(h * 360)}, ${Math.round(s * 100)}%, ${Math.round(l * 100)}%)`;
    }

    function update(hex) {
        if (!hex.startsWith('#')) hex = '#' + hex;
        preview.style.backgroundColor = hex;
        hexInput.value = hex.toUpperCase();
        const rgb = hexToRgb(hex);
        if (rgb) {
            rgbInput.value = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
            hslInput.value = rgbToHsl(rgb.r, rgb.g, rgb.b);
        }
    }

    function init() {
        picker.addEventListener('input', (e) => update(e.target.value));
        hexInput.addEventListener('input', (e) => {
            if (/^#?[0-9A-F]{6}$/i.test(e.target.value)) update(e.target.value);
        });
        update(picker.value);
    }
    return { init };
})();

/**
 * ABJAD MODULE
 */
const abjadModule = (() => {
    const values = {
        'ا': 1, 'آ': 1, 'ب': 2, 'ج': 3, 'د': 4, 'ه': 5, 'و': 6, 'ز': 7, 'ح': 8, 'ط': 9,
        'ی': 10, 'ک': 20, 'ل': 30, 'م': 40, 'ن': 50, 'س': 60, 'ع': 70, 'ف': 80, 'ص': 90,
        'ق': 100, 'ر': 200, 'ش': 300, 'ت': 400, 'ث': 500, 'خ': 600, 'ذ': 700, 'ض': 800, 'ظ': 900, 'غ': 1000,
        'گ': 20, 'چ': 3, 'پ': 2, 'ژ': 7 // Standard Persian additions
    };

    function calculate() {
        const text = document.getElementById('abjad-input').value;
        let sum = 0;
        for (let char of text) {
            if (values[char]) sum += values[char];
        }
        document.getElementById('abjad-result').innerText = sum.toLocaleString('fa-IR', { useGrouping: false });
    }

    function init() {
        document.getElementById('abjad-input').addEventListener('input', calculate);
    }
    return { init };
})();

/**
 * LOAN CALCULATOR MODULE
 */
const loanModule = (() => {
    function calculate() {
        const amount = parseFloat(document.getElementById('loan-amount').value);
        const rate = parseFloat(document.getElementById('loan-rate').value) / 100 / 12;
        const months = parseFloat(document.getElementById('loan-months').value);
        const resBox = document.getElementById('loan-results');

        if (!amount || !rate || !months) return;

        // Formula: M = P [ i(1 + i)^n ] / [ (1 + i)^n – 1 ]
        const x = Math.pow(1 + rate, months);
        const monthly = (amount * x * rate) / (x - 1);
        const totalPay = monthly * months;
        const totalInterest = totalPay - amount;

        resBox.style.display = 'block';
        document.getElementById('loan-monthly').innerText = Math.round(monthly).toLocaleString('fa-IR') + ' تومان';
        document.getElementById('loan-total-interest').innerText = Math.round(totalInterest).toLocaleString('fa-IR') + ' تومان';
        document.getElementById('loan-total-pay').innerText = Math.round(totalPay).toLocaleString('fa-IR') + ' تومان';
    }

    function init() {
        const inputs = ['loan-amount', 'loan-rate', 'loan-months'];
        inputs.forEach(id => document.getElementById(id).addEventListener('input', calculate));
    }
    return { init };
})();

/**
 * AGE CALCULATOR MODULE
 */
const ageModule = (() => {
    function calculate() {
        const y = parseInt(document.getElementById('age-y').value);
        const m = parseInt(document.getElementById('age-m').value);
        const d = parseInt(document.getElementById('age-d').value);
        if (!y || !m || !d) return;

        const birthDate = moment(`${y}/${m}/${d}`, 'jYYYY/jM/jD');
        const now = moment();

        if (!birthDate.isValid()) return;

        const diffYears = now.jYear() - birthDate.jYear();
        const diffMonths = now.jMonth() - birthDate.jMonth();
        const diffDays = now.jDate() - birthDate.jDate();

        let ageY = diffYears;
        let ageM = diffMonths;
        let ageD = diffDays;

        if (ageD < 0) {
            ageM--;
            ageD += 30; // Approximation for Jalaali
        }
        if (ageM < 0) {
            ageY--;
            ageM += 12;
        }

        const resBox = document.getElementById('age-results');
        resBox.style.display = 'block';
        document.getElementById('age-val').innerText = `${ageY.toLocaleString('fa-IR')} سال و ${ageM.toLocaleString('fa-IR')} ماه و ${ageD.toLocaleString('fa-IR')} روز`;
        
        const weekdays = ['یکشنبه', 'دوشنبه', 'سه‌شنبه', 'چهارشنبه', 'پنج‌شنبه', 'جمعه', 'شنبه'];
        document.getElementById('age-weekday').innerText = weekdays[birthDate.day()];

        // Next Birthday calculation
        let nextBday = moment(`${now.jYear()}/${m}/${d}`, 'jYYYY/jM/jD');
        if (nextBday.isBefore(now)) nextBday.add(1, 'jYear');
        const daysToNext = nextBday.diff(now, 'days');
        document.getElementById('age-next').innerText = `${daysToNext.toLocaleString('fa-IR')} روز دیگر`;
    }

    function init() {
        const monthSelect = document.getElementById('age-m');
        const months = ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'];
        months.forEach((name, idx) => {
            monthSelect.add(new Option(name, idx + 1));
        });
        document.getElementById('btn-calc-age').addEventListener('click', calculate);
    }
    return { init };
})();

/**
 * LICENSE PLATE MODULE
 */
const plateModule = (() => {
    const data = {
        '10': 'تهران', '11': 'تهران', '12': 'مشهد (خراسان رضوی)', '13': 'اصفهان', '14': 'اهواز (خوزستان)', '15': 'تبریز (آذربایجان شرقی)', '16': 'قم', '17': 'ارومیه (آذربایجان غربی)', '18': 'همدان', '19': 'کرمانشاه', '20': 'تهران', '21': 'استان تهران و البرز (کرج/حومه)', '22': 'تهران', '23': 'استان اصفهان (سایر شهرها)', '24': 'استان خوزستان (سایر شهرها)', '25': 'استان آذربایجان شرقی (سایر)', '26': 'بجنورد (خراسان شمالی)', '27': 'استان آذربایجان غربی (سایر)', '28': 'استان همدان (سایر)', '29': 'استان کرمانشاه (سایر)', '30': 'تهران/البرز (سایر)', '31': 'استان لرستان', '32': 'خراسان شمالی/رضوی (شهرست‌های متغیر)', '33': 'تهران', '34': 'استان خوزستان', '35': 'استان آذربایجان شرقی', '36': 'استان خراسان رضوی (سایر)', '37': 'استان آذربایجان غربی', '38': 'استان البرز/تهران (حومه)', '39': 'استان کرمان', '40': 'تهران', '41': 'استان لرستان (سایر)', '42': 'خراسان رضوی/شمالی (سایر)', '43': 'استان اصفهان (سایر)', '44': 'تهران', '45': 'استان کرمان', '46': 'استان گیلان', '47': 'استان مرکزی', '48': 'استان bوشهر', '49': 'استان کهگیلویه و بویراحمد', '50': 'تهران', '51': 'استان کردستان', '52': 'خراسان جنوبی', '53': 'استان اصفهان (سایر)', '54': 'استان یزد', '55': 'تهران', '56': 'استان گیلان (سایر)', '57': 'استان مرکزی (سایر)', '58': 'استان بوشهر (سایر)', '59': 'استان گلستان', '60': '(برخی استان‌ها/حومه)', '61': 'استان کردستان (سایر)', '62': 'استان مازندران', '63': 'استان فارس (شیراز)', '64': 'استان یزد (سایر)', '65': 'استان کرمان (سایر)', '66': 'تهران', '67': 'استان اصفهان (سایر)', '68': 'کرج (البرز/تهران)', '69': 'استان گلستان (سایر)', '70': '(کدهای جدید تهران/حومه)', '71': 'استان چهارمحال و بختیاری', '72': 'استان مازندران (سایر)', '73': 'استان فارس (سایر)', '74': 'خراسان رضوی (سایر)', '75': 'استان کرمان (سایر)', '76': 'استان گیلان (سایر)', '77': 'تهران', '78': 'استان تهران (ورامین، شهریار، پاکدشت، ...)', '79': 'استان قزوین', '80': '(کدهای جدید تهران/حومه)', '81': 'استان چهارمحال و بختیاری (سایر)', '82': 'استان مازندران (سایر)', '83': 'استان فارس (سایر)', '84': 'استان هرمزگان', '85': 'سیستان و بلوچستان (زاهدان)', '86': 'استان سمنان', '87': 'استان زنجان', '88': 'تهران', '89': 'استان قزوین (سایر)', '90': '(کدهای جدید تهران)', '91': 'استان اردبیل', '92': 'استان مازندران (سایر)', '93': 'استان فارس (سایر)', '94': 'استان هرمزگان (سایر)', '95': 'سیستان و بلوچستان (سایر)', '96': 'استان سمنان (سایر)', '97': 'استان زنجان (سایر)', '98': 'استان ایلام', '99': 'تهران'
    };

    function search() {
        const code = document.getElementById('plate-code').value;
        const resBox = document.getElementById('plate-result-box');
        const cityEl = document.getElementById('plate-city');
        
        if (code.length === 2) {
            resBox.style.display = 'block';
            if (data[code]) {
                cityEl.innerText = data[code];
            } else {
                cityEl.innerText = 'کد یافت نشد';
            }
        } else {
            resBox.style.display = 'none';
        }
    }

    function init() {
        document.getElementById('plate-code').addEventListener('input', search);
    }
    return { init };
})();

/**
 * EVENT COUNTDOWN MODULE
 */
const countdownModule = (() => {
    let timer = null;

    function update() {
        const y = document.getElementById('event-y').value;
        const m = document.getElementById('event-m').value;
        const d = document.getElementById('event-d').value;
        if (!y || !m || !d) return;

        const targetMoment = moment(`${y}/${m}/${d}`, 'jYYYY/jM/jD');
        if (!targetMoment.isValid()) return;

        const now = moment();
        const diff = targetMoment.diff(now);

        if (diff <= 0) {
            document.getElementById('cd-status').innerText = 'زمان رویداد فرا رسیده یا گذشته است!';
            ['cd-days', 'cd-hours', 'cd-mins'].forEach(id => document.getElementById(id).innerText = '۰');
            return;
        }

        document.getElementById('cd-status').innerText = '';
        const duration = moment.duration(diff);
        document.getElementById('cd-days').innerText = Math.floor(duration.asDays()).toLocaleString('fa-IR');
        document.getElementById('cd-hours').innerText = duration.hours().toLocaleString('fa-IR');
        document.getElementById('cd-mins').innerText = duration.minutes().toLocaleString('fa-IR');
    }

    function init() {
        const monthSelect = document.getElementById('event-m');
        const months = ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'];
        months.forEach((name, idx) => monthSelect.add(new Option(name, idx + 1)));

        const now = moment();
        document.getElementById('event-y').value = now.jYear();
        document.getElementById('event-m').value = now.jMonth() + 1;
        document.getElementById('event-d').value = now.jDate();

        // Always show custom inputs (only custom preset exists)
        const customInputs = document.getElementById('custom-event-inputs');
        customInputs.style.display = 'block';

        ['event-y', 'event-m', 'event-d'].forEach(id => {
            document.getElementById(id).addEventListener('input', update);
        });

        timer = setInterval(update, 1000 * 30); // Update every 30s
        update();
    }
    return { init };
})();

/**
 * GPA CALCULATOR MODULE
 */
const gpaModule = (() => {
    const container = document.getElementById('gpa-rows-container');
    const resultEl = document.getElementById('gpa-result');

    function createRow() {
        const row = document.createElement('div');
        row.className = 'gpa-row';
        row.innerHTML = `
            <div style="display: flex; gap: 8px; flex: 1;">
                <input type="number" step="0.01" class="glass-input grade-formative" placeholder="تکوینی" min="0" max="20" style="flex:1">
                <input type="number" step="0.01" class="glass-input grade-final" placeholder="پایانی" min="0" max="20" style="flex:1">
            </div>
            <button class="btn-remove-row"><i data-lucide="trash-2"></i></button>
        `;
        container.appendChild(row);
        createIcons({ icons: lucideIcons, nameAttr: 'data-lucide', root: row });

        row.querySelector('.btn-remove-row').addEventListener('click', () => {
            row.remove();
            calculate();
        });
        row.querySelectorAll('input').forEach(input => input.addEventListener('input', calculate));
    }

    function calculate() {
        const rows = container.querySelectorAll('.gpa-row');
        let totalSum = 0;
        let count = 0;

        rows.forEach(row => {
            const formative = parseFloat(row.querySelector('.grade-formative').value);
            const final = parseFloat(row.querySelector('.grade-final').value);

            let grade = 0;
            let validRow = false;

            if (!isNaN(formative) && !isNaN(final)) {
                grade = (formative + final) / 2;
                validRow = true;
            } else if (!isNaN(formative)) {
                grade = formative;
                validRow = true;
            } else if (!isNaN(final)) {
                grade = final;
                validRow = true;
            }

            if (validRow) {
                totalSum += grade;
                count++;
            }
        });

        if (count > 0) {
            const gpa = totalSum / count;
            resultEl.innerText = gpa.toFixed(2).toLocaleString('fa-IR');
        } else {
            resultEl.innerText = '۰.۰۰';
        }
    }

    function init() {
        document.getElementById('btn-add-subject').addEventListener('click', createRow);
        // Initial 3 rows
        for (let i = 0; i < 3; i++) createRow();
    }
    return { init };
})();

/**
 * LUCK MODULE (Dice & Coin)
 */
const luckModule = (() => {
    function init() {
        const diceDisplay = document.getElementById('dice-display');
        const btnDice = document.getElementById('btn-roll-dice');
        const diceMax = document.getElementById('dice-max');

        btnDice.addEventListener('click', () => {
            diceDisplay.classList.add('rolling');
            btnDice.disabled = true;
            setTimeout(() => {
                const max = parseInt(diceMax.value) || 6;
                const result = Math.floor(Math.random() * max) + 1;
                diceDisplay.innerText = result.toLocaleString('fa-IR');
                diceDisplay.classList.remove('rolling');
                btnDice.disabled = false;
            }, 600);
        });

        const coinDisplay = document.getElementById('coin-display');
        const btnCoin = document.getElementById('btn-flip-coin');

        btnCoin.addEventListener('click', () => {
            coinDisplay.classList.add('rolling');
            btnCoin.disabled = true;
            setTimeout(() => {
                const isHeads = Math.random() > 0.5;
                coinDisplay.innerText = isHeads ? 'شیر' : 'خط';
                coinDisplay.classList.remove('rolling');
                btnCoin.disabled = false;
            }, 600);
        });
    }
    return { init };
})();

/**
 * DATE DIFF MODULE
 */
const dateDiffModule = (() => {
    function calculate() {
        const y1 = parseInt(document.getElementById('dd-y1').value);
        const m1 = parseInt(document.getElementById('dd-m1').value);
        const d1 = parseInt(document.getElementById('dd-d1').value);
        const y2 = parseInt(document.getElementById('dd-y2').value);
        const m2 = parseInt(document.getElementById('dd-m2').value);
        const d2 = parseInt(document.getElementById('dd-d2').value);

        if (!y1 || !m1 || !d1 || !y2 || !m2 || !d2) return;

        const date1 = moment(`${y1}/${m1}/${d1}`, 'jYYYY/jM/jD');
        const date2 = moment(`${y2}/${m2}/${d2}`, 'jYYYY/jM/jD');

        if (!date1.isValid() || !date2.isValid()) return;

        const diffDays = Math.abs(date2.diff(date1, 'days'));
        const diffHours = diffDays * 24;

        document.getElementById('dd-res-days').innerText = diffDays.toLocaleString('fa-IR');
        document.getElementById('dd-res-hours').innerText = diffHours.toLocaleString('fa-IR');
    }

    function init() {
        const months = ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'];
        const sel1 = document.getElementById('dd-m1');
        const sel2 = document.getElementById('dd-m2');
        months.forEach((name, idx) => {
            sel1.add(new Option(name, idx + 1));
            sel2.add(new Option(name, idx + 1));
        });

        const now = moment();
        document.getElementById('dd-y1').value = now.jYear();
        document.getElementById('dd-m1').value = now.jMonth() + 1;
        document.getElementById('dd-d1').value = now.jDate();
        document.getElementById('dd-y2').value = now.jYear();
        document.getElementById('dd-m2').value = now.jMonth() + 1;
        document.getElementById('dd-d2').value = now.jDate();

        ['dd-y1', 'dd-m1', 'dd-d1', 'dd-y2', 'dd-m2', 'dd-d2'].forEach(id => {
            document.getElementById(id).addEventListener('change', calculate);
            document.getElementById(id).addEventListener('input', calculate);
        });
        calculate();
    }
    return { init };
})();

/**
 * GUESS NUMBER MODULE
 */
const guessNumberModule = (() => {
    let targetNum = 0;
    let tries = 10;
    let max = 50;
    let gameOver = false;
    let currentDigits = [0, 0, 1]; // 100s, 10s, 1s

    const triesEl = document.getElementById('gn-tries');
    const feedback = document.getElementById('gn-feedback');
    const diffBtns = document.querySelectorAll('.diff-btn');
    const stepperBoxes = document.querySelectorAll('.digit-box');

    function toPersianDigits(str) {
        return str.toString().replace(/\d/g, d => '۰۱۲۳۴۵۶۷۸۹'[d]);
    }

    function updateStepperUI() {
        stepperBoxes[0].innerText = toPersianDigits(currentDigits[0]);
        stepperBoxes[1].innerText = toPersianDigits(currentDigits[1]);
        stepperBoxes[2].innerText = toPersianDigits(currentDigits[2]);
    }

    function getCombinedVal() {
        return currentDigits[0] * 100 + currentDigits[1] * 10 + currentDigits[2];
    }

    function resetGame(level) {
        if (level === 'easy') { max = 50; tries = 10; }
        else if (level === 'medium') { max = 100; tries = 7; }
        else { max = 500; tries = 5; }

        targetNum = Math.floor(Math.random() * max) + 1;
        gameOver = false;
        currentDigits = [0, 0, 1];
        updateStepperUI();
        triesEl.innerText = toPersianDigits(tries);
        feedback.innerText = `یک عدد بین ۱ تا ${toPersianDigits(max)} حدس بزنید!`;
        feedback.style.color = "var(--primary)";
        document.getElementById('btn-guess-num').innerText = "بررسی حدس";
    }

    function guess() {
        if (gameOver) {
            resetGame(document.querySelector('.diff-btn.active').dataset.level);
            return;
        }

        const val = getCombinedVal();
        
        if (val === 0) {
            feedback.innerText = "عددی بزرگتر از صفر انتخاب کنید!";
            return;
        }

        tries--;
        triesEl.innerText = toPersianDigits(tries);

        if (val === targetNum) {
            feedback.innerText = "آفرین! درست حدس زدی 🥳";
            feedback.style.color = "#4CAF50";
            gameOver = true;
            document.getElementById('btn-guess-num').innerText = "شروع دوباره";
        } else if (tries === 0) {
            feedback.innerText = `باختی! عدد ${toPersianDigits(targetNum)} بود 😞`;
            feedback.style.color = "#f44336";
            gameOver = true;
            document.getElementById('btn-guess-num').innerText = "شروع دوباره";
        } else {
            feedback.innerText = val > targetNum ? "کمتر!" : "بیشتر!";
        }
    }

    function handleStepper(pos, delta) {
        const idx = pos === 100 ? 0 : (pos === 10 ? 1 : 2);
        currentDigits[idx] = (currentDigits[idx] + delta + 10) % 10;
        
        // Just ensure the total doesn't exceed the level max
        const total = getCombinedVal();
        if (total > max) {
            const maxStr = max.toString().padStart(3, '0');
            currentDigits = maxStr.split('').map(d => parseInt(d));
        }

        updateStepperUI();
    }

    function init() {
        diffBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                diffBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                resetGame(btn.dataset.level);
            });
        });

        document.querySelectorAll('.digit-stepper').forEach(stepper => {
            const pos = parseInt(stepper.dataset.pos);
            stepper.querySelector('.up').addEventListener('click', () => handleStepper(pos, 1));
            stepper.querySelector('.down').addEventListener('click', () => handleStepper(pos, -1));
        });

        document.getElementById('btn-guess-num').addEventListener('click', guess);
        resetGame('easy');
    }
    return { init };
})();

/**
 * LUCKY WHEEL MODULE
 */
const luckyWheelModule = (() => {
    const canvas = document.getElementById('lucky-wheel-canvas');
    const ctx = canvas.getContext('2d');
    const spinBtn = document.getElementById('btn-spin-wheel');
    const optionsList = document.getElementById('wheel-options-list');
    const addBtn = document.getElementById('btn-add-wheel-option');

    let startAngle = 0;
    let arc = 0;
    let spinTimeout = null;
    let spinAngleStart = 0;
    let spinTime = 0;
    let spinTimeTotal = 0;
    let items = [];

    const colors = ["#4a90e2", "#9b51e0", "#e67e22", "#2ecc71", "#e74c3c", "#f1c40f", "#1abc9c", "#34495e"];

    function createOption(val = "") {
        const row = document.createElement('div');
        row.className = 'wheel-option-row';
        row.innerHTML = `
            <input type="text" class="glass-input option-input" placeholder="گزینه..." value="${val}">
            <button class="btn-remove-row"><i data-lucide="trash-2"></i></button>
        `;
        optionsList.appendChild(row);
        createIcons({ icons: lucideIcons, nameAttr: 'data-lucide', root: row });

        const input = row.querySelector('.option-input');
        input.addEventListener('input', drawWheel);
        row.querySelector('.btn-remove-row').addEventListener('click', () => {
            row.remove();
            drawWheel();
        });
    }

    function drawWheel() {
        const inputs = optionsList.querySelectorAll('.option-input');
        items = Array.from(inputs).map(i => i.value).filter(v => v.trim() !== '');
        
        if (items.length === 0) {
            ctx.clearRect(0,0,300,300);
            return;
        }
        
        arc = Math.PI / (items.length / 2);
        ctx.clearRect(0,0,300,300);

        items.forEach((item, i) => {
            const angle = startAngle + i * arc;
            ctx.fillStyle = colors[i % colors.length];
            ctx.beginPath();
            ctx.moveTo(150, 150);
            ctx.arc(150, 150, 140, angle, angle + arc, false);
            ctx.fill();
            ctx.save();
            
            ctx.fillStyle = "white";
            ctx.translate(150 + Math.cos(angle + arc/2) * 100, 150 + Math.sin(angle + arc/2) * 100);
            ctx.rotate(angle + arc/2 + Math.PI/2);
            ctx.font = 'bold 12px Vazir';
            ctx.textAlign = "center";
            ctx.fillText(item, 0, 0);
            ctx.restore();
        });
    }

    function rotateWheel() {
        spinTime += 30;
        if (spinTime >= spinTimeTotal) {
            stopRotateWheel();
            return;
        }
        const spinAngle = spinAngleStart - easeOut(spinTime, 0, spinAngleStart, spinTimeTotal);
        startAngle += (spinAngle * Math.PI / 180);
        drawWheel();
        spinTimeout = requestAnimationFrame(rotateWheel);
    }

    function stopRotateWheel() {
        cancelAnimationFrame(spinTimeout);
        const degrees = startAngle * 180 / Math.PI + 90;
        const arcd = arc * 180 / Math.PI;
        const index = Math.floor((360 - degrees % 360) / arcd);
        const winner = items[(index + items.length) % items.length];
        alert("برنده: " + winner);
        spinBtn.disabled = false;
    }

    function easeOut(t, b, c, d) {
        const ts = (t /= d) * t;
        const tc = ts * t;
        return b + c * (tc + -3 * ts + 3 * t);
    }

    function init() {
        addBtn.addEventListener('click', () => createOption());
        ['شیرینی', 'پیتزا', 'کباب', 'بستنی'].forEach(v => createOption(v));
        
        spinBtn.addEventListener('click', () => {
            if (items.length < 2) {
                alert('حداقل ۲ گزینه وارد کنید');
                return;
            }
            spinBtn.disabled = true;
            spinAngleStart = Math.random() * 10 + 10;
            spinTime = 0;
            spinTimeTotal = Math.random() * 3000 + 4000;
            rotateWheel();
        });
        drawWheel();
    }
    return { init };
})();

/**
 * DAY CONVERTER MODULE
 */
const dayConvModule = (() => {
    function convert() {
        const days = parseInt(document.getElementById('day-conv-input').value) || 0;
        
        const months = Math.floor(days / 30);
        const remainingAfterMonths = days % 30;
        const weeks = Math.floor(remainingAfterMonths / 7);
        const finalDays = remainingAfterMonths % 7;

        let resultStr = "";
        if (months > 0) resultStr += `${months.toLocaleString('fa-IR')} ماه `;
        if (weeks > 0) resultStr += (resultStr ? ' و ' : '') + `${weeks.toLocaleString('fa-IR')} هفته `;
        if (finalDays > 0 || days === 0) resultStr += (resultStr ? ' و ' : '') + `${finalDays.toLocaleString('fa-IR')} روز`;

        document.getElementById('day-conv-text').innerText = resultStr || '۰ روز';
        document.getElementById('day-res-weeks').innerText = (days / 7).toFixed(1).toLocaleString('fa-IR');
        document.getElementById('day-res-months').innerText = (days / 30).toFixed(1).toLocaleString('fa-IR');
    }

    function init() {
        document.getElementById('day-conv-input').addEventListener('input', convert);
    }
    return { init };
})();

/**
 * GRADIENT MODULE
 */
const gradientModule = (() => {
    function update() {
        const c1 = document.getElementById('grad-c1').value;
        const c2 = document.getElementById('grad-c2').value;
        const angle = document.getElementById('grad-angle').value;
        
        const css = `linear-gradient(${angle}deg, ${c1}, ${c2})`;
        document.getElementById('grad-preview').style.background = css;
        document.getElementById('grad-css').value = `background: ${css};`;
        document.getElementById('grad-angle-val').innerText = parseInt(angle).toLocaleString('fa-IR');
    }

    function init() {
        ['grad-c1', 'grad-c2', 'grad-angle'].forEach(id => {
            document.getElementById(id).addEventListener('input', update);
        });
        document.getElementById('btn-copy-grad').addEventListener('click', () => {
            const el = document.getElementById('grad-css');
            el.select();
            document.execCommand('copy');
            alert('کد CSS کپی شد!');
        });
        update();
    }
    return { init };
})();

/**
 * APP INITIALIZATION
 */
function initApp() {
    const splash = document.getElementById('splash-screen');

    // Eitaa WebApp SDK Integration
    const eitaaApp = window.Eitaa?.WebApp;
    if (eitaaApp) {
        eitaaApp.ready();
        eitaaApp.expand();
        eitaaApp.setHeaderColor('#0a61db');

        eitaaApp.BackButton.onClick(() => {
            window.history.back();
        });
    }
    
    backgroundModule.init();
    clockModule.init();
    converterModule.init();
    dateModule.init();
    prayerModule.init();
    passwordModule.init();
    calendarModule.init();
    calcModule.init();
    bmiModule.init();
    stopwatchModule.init();
    textAnalysisModule.init();
    validatorModule.init();
    strengthModule.init();
    colorModule.init();
    abjadModule.init();
    loanModule.init();
    ageModule.init();
    plateModule.init();
    countdownModule.init();
    gpaModule.init();
    luckModule.init();
    dateDiffModule.init();
    dayConvModule.init();
    gradientModule.init();
    guessNumberModule.init();
    luckyWheelModule.init();

    // Random Tool Logic
    const randomBtn = document.getElementById('random-tool');
    randomBtn.addEventListener('click', () => {
        const tools = ['earth', 'units', 'date', 'prayer', 'password', 'calendar', 'calc', 'bmi', 'stopwatch', 'text-analysis', 'validator', 'pass-strength', 'color-studio', 'abjad', 'loan', 'age', 'plate', 'countdown', 'gpa', 'luck', 'date-diff', 'day-conv', 'gradient', 'guess-num', 'lucky-wheel'];
        const randomTool = tools[Math.floor(Math.random() * tools.length)];
        switchTool(randomTool);
    });

    // Auto-clear logic for numeric inputs
    document.querySelectorAll('input[type="number"]').forEach(input => {
        input.addEventListener('focus', function() {
            this.select();
        });
        // Mobile tap selection fix
        input.addEventListener('mouseup', function(e) {
            e.preventDefault();
        }, { once: true });
    });

    // Hide splash screen after loading animation finishes
    setTimeout(() => {
        splash.classList.add('hidden');
    }, 2800);

    const menuItems = document.querySelectorAll('.menu-item');
    const sections = document.querySelectorAll('.tool-section');
    const backBtns = document.querySelectorAll('.back-btn, .back-btn-mini');
    const exitModal = document.getElementById('exit-modal');
    
    let currentActiveTool = 'home';

    // Handle History for Back Button
    window.history.replaceState({ tool: 'home' }, '');

    function switchTool(target, pushState = true) {
        if (target === currentActiveTool) return;

        sections.forEach(s => s.classList.remove('active'));
        const targetSection = document.getElementById(`tool-${target}`);
        if (targetSection) {
            targetSection.classList.add('active');
            currentActiveTool = target;

            // Handle Eitaa SDK BackButton visibility
            if (eitaaApp) {
                if (target === 'home') {
                    eitaaApp.BackButton.hide();
                } else {
                    eitaaApp.BackButton.show();
                }
            }

            if (pushState) {
                window.history.pushState({ tool: target }, '');
            }
        }
    }

    window.addEventListener('popstate', (event) => {
        if (event.state && event.state.tool) {
            // If the modal is open, close it instead of navigating
            if (exitModal.classList.contains('active')) {
                exitModal.classList.remove('active');
                window.history.pushState({ tool: 'home' }, '');
                return;
            }
            switchTool(event.state.tool, false);
        } else {
            // No state means we are at the very beginning
            if (currentActiveTool === 'home') {
                showExitModal();
            } else {
                switchTool('home', false);
            }
        }
    });

    menuItems.forEach(item => {
        item.addEventListener('click', () => switchTool(item.dataset.tool));
    });

    backBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            window.history.back();
        });
    });

    // Exit Modal Logic
    function showExitModal() {
        exitModal.classList.add('active');
        // Push a state so the next "back" can be caught to close the modal
        window.history.pushState({ tool: 'home', modal: true }, '');
    }

    document.getElementById('exit-no').addEventListener('click', () => {
        exitModal.classList.remove('active');
        // We don't need to do anything with history because the user clicked a button
    });

    document.getElementById('exit-yes').addEventListener('click', () => {
        // In a real web app, we can't always close the window, but we can redirect or try
        window.close();
        // Fallback for browsers that don't allow window.close()
        exitModal.querySelector('p').innerText = "برای خروج، تب مرورگر را ببندید.";
    });

    // Theme Toggle
    const themeBtn = document.getElementById('theme-toggle');
    themeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const currentTheme = document.body.getAttribute('data-theme');
        const nextTheme = currentTheme === 'light' ? 'dark' : 'light';
        document.body.setAttribute('data-theme', nextTheme);
        themeBtn.innerHTML = nextTheme === 'light' ? '<i data-lucide="moon"></i>' : '<i data-lucide="sun"></i>';
        createIcons({ icons: lucideIcons });
    });
}

document.addEventListener('DOMContentLoaded', initApp);