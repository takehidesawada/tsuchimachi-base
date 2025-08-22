export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#0a0a0a',
      color: '#ffffff',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      {/* ナビゲーションバー */}
      <nav style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        backgroundColor: 'rgba(0,0,0,0.9)',
        backdropFilter: 'blur(10px)',
        padding: '15px 30px',
        zIndex: 1000,
        borderBottom: '1px solid rgba(255,255,255,0.1)'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          maxWidth: '1400px',
          margin: '0 auto'
        }}>
          <h1 style={{
            fontSize: '24px',
            fontWeight: 700,
            margin: 0,
            background: 'linear-gradient(135deg, #ff6b35 0%, #a0522d 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            🏺 TSUCHIMACHI BASE
          </h1>
          <button style={{
            backgroundColor: '#ff6b35',
            color: 'white',
            border: 'none',
            padding: '10px 24px',
            borderRadius: '20px',
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}>
            ログイン
          </button>
        </div>
      </nav>

      {/* ヒーローセクション */}
      <section style={{
        position: 'relative',
        height: '70vh',
        background: 'linear-gradient(135deg, rgba(255,107,53,0.9) 0%, rgba(160,82,45,0.9) 100%), url("/hero-bg.jpg") center/cover',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '60px'
      }}>
        <div style={{
          textAlign: 'center',
          padding: '20px',
          maxWidth: '800px'
        }}>
          <h2 style={{
            fontSize: 'clamp(36px, 5vw, 64px)',
            fontWeight: 800,
            marginBottom: '20px',
            textShadow: '0 4px 6px rgba(0,0,0,0.3)'
          }}>
            瀬戸の土が つなぐ物語
          </h2>
          <p style={{
            fontSize: 'clamp(18px, 2vw, 24px)',
            opacity: 0.95,
            marginBottom: '40px'
          }}>
            1300年の歴史を持つ瀬戸焼の街で、新しい価値を創造する
          </p>
          <button style={{
            backgroundColor: 'rgba(255,255,255,0.2)',
            backdropFilter: 'blur(10px)',
            color: 'white',
            border: '2px solid white',
            padding: '16px 40px',
            fontSize: '18px',
            borderRadius: '30px',
            cursor: 'pointer',
            fontWeight: 600,
            transition: 'all 0.3s ease'
          }}>
            活動に参加する →
          </button>
        </div>
      </section>

      {/* イベントセクション */}
      <section style={{
        padding: '80px 30px',
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        <h3 style={{
          fontSize: '32px',
          fontWeight: 700,
          marginBottom: '40px'
        }}>
          今月のイベント
        </h3>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '24px'
        }}>
          {/* イベントカード */}
          <div style={{
            backgroundColor: '#1a1a1a',
            borderRadius: '12px',
            overflow: 'hidden',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            cursor: 'pointer',
            border: '1px solid rgba(255,255,255,0.1)'
          }}>
            <div style={{
              height: '180px',
              background: 'linear-gradient(135deg, #ff6b35 0%, #a0522d 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '48px'
            }}>
              🏺
            </div>
            <div style={{
              padding: '24px'
            }}>
              <div style={{
                fontSize: '14px',
                color: '#ff6b35',
                marginBottom: '8px',
                fontWeight: 600
              }}>
                12月15日（日）14:00
              </div>
              <h4 style={{
                fontSize: '20px',
                fontWeight: 700,
                marginBottom: '12px'
              }}>
                土トーーク！vol.5
              </h4>
              <p style={{
                fontSize: '14px',
                color: '#b0b0b0',
                lineHeight: 1.6
              }}>
                瀬戸の土の魅力を語り尽くす、月例トークイベント。今回のゲストは...
              </p>
            </div>
          </div>

          {/* 追加のカード */}
          <div style={{
            backgroundColor: '#1a1a1a',
            borderRadius: '12px',
            overflow: 'hidden',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            cursor: 'pointer',
            border: '1px solid rgba(255,255,255,0.1)'
          }}>
            <div style={{
              height: '180px',
              background: 'linear-gradient(135deg, #a0522d 0%, #8b4513 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '48px'
            }}>
              🔥
            </div>
            <div style={{
              padding: '24px'
            }}>
              <div style={{
                fontSize: '14px',
                color: '#ff6b35',
                marginBottom: '8px',
                fontWeight: 600
              }}>
                12月22日（日）10:00
              </div>
              <h4 style={{
                fontSize: '20px',
                fontWeight: 700,
                marginBottom: '12px'
              }}>
                窯元めぐりフィールドワーク
              </h4>
              <p style={{
                fontSize: '14px',
                color: '#b0b0b0',
                lineHeight: 1.6
              }}>
                実際の窯元を訪問し、職人の技と想いに触れる特別な体験...
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* アクションボタンセクション */}
      <section style={{
        backgroundColor: '#1a1a1a',
        padding: '60px 30px',
        borderTop: '1px solid rgba(255,255,255,0.1)'
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '20px'
        }}>
          <button style={{
            backgroundColor: 'transparent',
            border: '2px solid #ff6b35',
            color: '#ff6b35',
            padding: '20px',
            borderRadius: '8px',
            fontSize: '16px',
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}>
            📝 企画を提案する
          </button>
          <button style={{
            backgroundColor: 'transparent',
            border: '2px solid #a0522d',
            color: '#a0522d',
            padding: '20px',
            borderRadius: '8px',
            fontSize: '16px',
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}>
            📚 アーカイブを見る
          </button>
          <button style={{
            backgroundColor: 'transparent',
            border: '2px solid #8b4513',
            color: '#8b4513',
            padding: '20px',
            borderRadius: '8px',
            fontSize: '16px',
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}>
            👥 メンバー一覧
          </button>
        </div>
      </section>
    </div>
  );
}
