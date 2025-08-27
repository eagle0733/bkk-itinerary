
# 曼谷行程（內嵌導航 v2.2）

功能：
- 內嵌導航（Leaflet + OSRM）
- 即時定位追蹤（watchPosition）
- 偏航自動重算（>80m 或每 15 秒）
- 螢幕常亮（Wake Lock）
- 簡易語音提示
- 行程管理（新增／匯出／匯入）
- PWA（可安裝到主畫面；基本離線快取）

## 部署到 GitHub Pages
1. 建立 repo，整包檔案放在根目錄。
2. Repo → Settings → Pages → Source: **Deploy from a branch**，Branch: `main`，Folder: `/ (root)` → Save。
3. 開啟 `https://你的帳號.github.io/你的repo/`。

## 部署到 Netlify
1. New site from Git → 選擇 repo。
2. Build command：空白（靜態）；Publish directory：`/`。
3. Deploy 後用自動的 https 網址測試。

> 持續定位需 **HTTPS 或 localhost**。GitHub Pages/Netlify 皆為 HTTPS。
