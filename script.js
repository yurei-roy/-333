// ☀️ 模組 A：太陽能點擊互動
const sun = document.getElementById("sun");
const bar = document.getElementById("solarBar");
const percent = document.getElementById("solarPercent");
let progress = 0;
sun.onclick = () => {
  if (progress < 100) {
    progress += 10;
    bar.style.width = `${progress}%`;
    percent.textContent = progress;
  }
};

// 🌿 模組 B：農業轉盤
const spinBtn = document.getElementById("spinBtn");
const agriResult = document.getElementById("agriResult");
const agriItems = [
  "推動有機專區與可可產業鏈",
  "推廣惜食教育，從校園扎根",
  "一鄉一特色農業回收系統",
  "食農教育結合環境永續",
];
spinBtn.onclick = () => {
  const pick = agriItems[Math.floor(Math.random() * agriItems.length)];
  agriResult.textContent = `🌾 ${pick}`;
};

// 🧪 模組 C：空氣品質模擬
const pmSlider = document.getElementById("pmSlider");
const pmValue = document.getElementById("pmValue");
pmSlider.oninput = () => {
  pmValue.textContent = pmSlider.value;
  document.body.style.backgroundColor = `rgba(${255 - pmSlider.value * 2},255,${255 - pmSlider.value * 2},1)`;
};

// 💧 模組 D：濕地復育進度
const wetlandSelect = document.getElementById("wetlandSelect");
const wetlandData = document.getElementById("wetlandData");
const wetlandInfo = {
  "黃金濕地": "BOD 淨化量：120 公斤 / 年，面積：12 公頃",
  "海豐濕地": "BOD 淨化量：95 公斤 / 年，面積：8.5 公頃",
  "龍頸溪": "BOD 淨化量：154 公斤 / 年，面積：17 公頃"
};
wetlandSelect.onchange = () => {
  const val = wetlandSelect.value;
  wetlandData.textContent = `📊 ${wetlandInfo[val]}`;
};

// 🌏 模組 E：碳排放圓形互動
const slider = document.getElementById("co2Slider");
const output = document.getElementById("co2Output");
const circle = document.getElementById("co2Circle");
slider.oninput = function () {
  output.textContent = this.value;
  const scale = 1 + this.value / 100;
  circle.style.transform = `scale(${scale})`;
};
