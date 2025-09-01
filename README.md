
# 曼谷行程（內嵌導航 v2.2｜PWA 版）

功能：
- 內嵌導航（Leaflet + OSRM）
- 即時定位追蹤（watchPosition）
- 偏航自動重算（>80m 或每 15 秒）
- 螢幕常亮（Wake Lock）＋ 簡易語音提示
- 行程管理（新增／刪除／匯出／匯入）
- 持久化（localStorage `itinerary_v1`）＋ 跨分頁同步
- PWA（可安裝到主畫面；基本離線快取）

## 部署
### GitHub Pages
1. 把整包檔案放到 repo 根目錄，分支 `main`。
2. Settings → Pages → Source: Deploy from a branch；Branch: `main`；Folder: `/`。
3. 造訪 `https://<你的帳號>.github.io/<repo>/`。

### Netlify
1. New site from Git → 選擇此 repo。
2. Build command 留空；Publish directory：`/`。
3. 打開自動產生的 https 網址。

> 持續定位需 **HTTPS 或 localhost**。

## 使用
- 首次安裝或更新：若畫面沒變，硬重新整理（Win: Ctrl+F5 / Mac: Cmd+Shift+R）。
- 若要強制更新 SW 快取：改 `sw.js` 的 `CACHE_NAME` 後重新整理。
