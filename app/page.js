export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* 背景装飾 */}
      <div style={{
        position: 'absolute',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(255,107,53,0.3) 0%, transparent 70%)',
        borderRadius: '50%',
        top: '-100px',
        right: '-100px',
        filter: 'blur(60px)'
      }}></div>

      {/* メインコンテンツ */}
      <div style={{
        paddingTop: '120px',
        paddingBottom: '60px',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '120px 20px 60px'
      }}>
        {/* ヒーローセクション */}
        <div style={{
          textAlign: 'center',
          marginBottom: '80px'
        }}>
          <h1 style={{
            fontSize: '56px',
            fontWeight: '800',
            color: 'white',
            marginBottom: '20px',
            letterSpacing: '-1px'
          }}>
            土街人プロジェクト
          </h1>
          <p style={{
            fontSize: '20px',
            color: 'rgba(255,255,255,0.9)',
            maxWidth: '600px',
            margin: '0 auto 40px'
          }}>
            瀬戸の土と窯業文化を次世代へつなぐ、コミュニティプラットフォーム
          </p>
          <button style={{
            background: 'white',
            color: '#667eea',
            border: 'none',
            padding: '16px 40px',
            borderRadius: '30px',
            fontSize: '16px',
            fontWeight: '700',
            cursor: 'pointer',
            boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
            transition: 'transform 0.2s'
          }}>
            はじめる →
          </button>
        </div>

        {/* カードグリッド */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px'
        }}>
          {/* イベントカード */}
          <div style={{
            background: 'rgba(255,255,255,0.1)',
            backdropFilter: 'blur(20px)',
            borderRadius: '20px',
            padding: '30px',
            border: '1px solid rgba(255,255,255,0.2)',
            transition: 'transform 0.3s'
          }}>
            <div style={{
              fontSize: '40px',
              marginBottom: '20px'
            }}>🏺</div>
            <h3 style={{
              color: 'white',
              fontSize: '24px',
              marginBottom: '10px'
            }}>今月のイベント</h3>
            <p style={{
              color: 'rgba(255,255,255,0.8)',
              fontSize: '14px'
            }}>
              土トーーク、フィールドワークなど
            </p>
          </div>

          {/* アーカイブカード */}
          <div style={{
            background: 'rgba(255,255,255,0.1)',
            backdropFilter: 'blur(20px)',
            borderRadius: '20px',
            padding: '30px',
            border: '1px solid rgba(255,255,255,0.2)',
            transition: 'transform 0.3s'
          }}>
            <div style={{
              fontSize: '40px',
              marginBottom: '20px'
            }}>📚</div>
            <h3 style={{
              color: 'white',
              fontSize: '24px',
              marginBottom: '10px'
            }}>アーカイブ</h3>
            <p style={{
              color: 'rgba(255,255,255,0.8)',
              fontSize: '14px'
            }}>
              過去のイベント記録と写真
            </p>
          </div>

          {/* メンバーカード */}
          <div style={{
            background: 'rgba(255,255,255,0.1)',
            backdropFilter: 'blur(20px)',
            borderRadius: '20px',
            padding: '30px',
            border: '1px solid rgba(255,255,255,0.2)',
            transition: 'transform 0.3s'
          }}>
            <div style={{
              fontSize: '40px',
              marginBottom: '20px'
            }}>👥</div>
            <h3 style={{
              color: 'white',
              fontSize: '24px',
              marginBottom: '10px'
            }}>コミュニティ</h3>
            <p style={{
              color: 'rgba(255,255,255,0.8)',
              fontSize: '14px'
            }}>
              メンバー同士の交流と企画
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
