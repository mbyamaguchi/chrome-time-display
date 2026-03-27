const clockElement = document.getElementById('clock') as HTMLDivElement;
const dateElement = document.getElementById('date') as HTMLDivElement;

// 現在時刻を更新する関数
function updateTime(): void {
    const now = new Date();

    // hour, min, sec を取得（2ケタ表示に整形）
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    // year, month, day を取得
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const day = now.getDate().toString().padStart(2, '0');

    // 曜日を取得
    const weekdays = ['日', '月', '火', '水', '木', '金', '土'];
    const weekday = weekdays[now.getDay()];

    // 画面に表示
    clockElement.textContent = `${hours}:${minutes}:${seconds}`;
    dateElement.textContent = `${year}年${month}月${day}日(${weekday})`;
}

// 初回実行
updateTime();

// 1秒ごとに時刻を更新
setInterval(updateTime, 1000);

// TypeScriptの利点: コード補完、型安全性、バグの早期発見など