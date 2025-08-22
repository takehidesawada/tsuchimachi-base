export const metadata = {
  title: 'つちまちベース - 土街人プロジェクト',
  description: '瀬戸市で活動する土街人プロジェクトの活動支援ツール',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  )
}
