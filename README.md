# Imported Car


輸入車販売のコーポレートサイトです。

## 開発環境

- Node.js
- npm
- Vite

---

## 動作環境

以下のバージョンで動作確認しています。

- Node.js 22.x
- npm 10.x

※Node.jsがインストールされていない場合は先にインストールしてください。

---

## セットアップ

### ① リポジトリをクローン

```bash
git clone https://github.com/ユーザー名/imported-car.git
```

### ② プロジェクトへ移動

```bash
cd imported-car
```

### ③ パッケージをインストール

```bash
npm install
```

このコマンドで package.json に記載されているライブラリがインストールされます。

---

## 開発サーバーの起動

```bash
npm run dev
```

ターミナルに表示されるURLをブラウザで開きます。

例

```
http://localhost:5173/
```

---

## 本番用ファイルの作成

```bash
npm run build
```

実行すると

```
dist/
```

フォルダが生成されます。

サーバーへアップロードする場合は、この `dist` フォルダ内を使用します。

---

## プレビュー

ビルド後の表示確認

```bash
npm run preview
```

---

## 使用技術

- HTML
- SCSS
- JavaScript
- Vite
- Swiper

---

## ディレクトリ構成

```
src/
 ├─ images/
 ├─ js/
 ├─ sass/
 └─ index.html

public/

dist/
```

---

## 使用コマンド一覧

| コマンド | 内容 |
|----------|------|
| npm install | パッケージをインストール |
| npm run dev | 開発サーバー起動 |
| npm run build | 本番ファイル作成 |
| npm run preview | ビルド結果を確認 |

# imported_car
