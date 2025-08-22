export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#FFF8F3',
      padding: '20px',
      fontFamily: 'sans-serif'
    }}>
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        backgroundColor: 'white',
        borderRadius: '10px',
        padding: '40px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
      }}>
        <h1 style={{
          color: '#8B4513',
          fontSize: '32px',
          marginBottom: '10px',
          display: 'flex',
          alignItems: 'center',
          gap: '10px'
        }}>
          🏺 つちまちベース
        </h1>
        
        <p style={{
          color: '#666',
          marginBottom: '30px'
        }}>
          土街人プロジェクト 活動支援ツール
        </p>

        <div style={{
          backgroundColor: '#FFF0E5',
          padding: '20px',
          borderRadius: '8px',
          marginBottom: '20px'
        }}>
          <h2 style={{
            color: '#D2691E',
            fontSize: '20px',
            marginBottom: '15px'
          }}>
            🎯 今月のイベント
          </h2>
          <ul style={{
            listStyle: 'none',
            padding: 0
          }}>
            <li style={{ marginBottom: '10px' }}>
              📅 12月15日（日）- 土トーーク！vol.5
            </li>
            <li style={{ marginBottom: '10px' }}>
              📅 12月22日（日）- 窯元めぐりフィールドワーク
            </li>
          </ul>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '15px',
          marginTop: '30px'
        }}>
          <button style={{
            backgroundColor: '#D2691E',
            color: 'white',
            padding: '15px',
            border: 'none',
            borderRadius: '8px',
            fontSize: '16px',
            cursor: 'pointer'
          }}>
            📝 企画を提案
          </button>
          
          <button style={{
            backgroundColor: '#CD853F',
            color: 'white',
            padding: '15px',
            border: 'none',
            borderRadius: '8px',
            fontSize: '16px',
            cursor: 'pointer'
          }}>
            📚 アーカイブ
          </button>
          
          <button style={{
            backgroundColor: '#DEB887',
            color: 'white',
            padding: '15px',
            border: 'none',
            borderRadius: '8px',
            fontSize: '16px',
            cursor: 'pointer'
          }}>
            👥 メンバー
          </button>
        </div>

        <div style={{
          marginTop: '40px',
          padding: '20px',
          backgroundColor: '#F5F5F5',
          borderRadius: '8px',
          textAlign: 'center'
        }}>
          <p style={{ color: '#666', fontSize: '14px' }}>
            愛知県瀬戸市で、土と窯業の魅力を深掘りする
          </p>
          <p style={{ 
            color: '#D2691E', 
            fontWeight: 'bold',
            marginTop: '10px' 
          }}>
            土街人プロジェクト
          </p>
        </div>
      </div>
    </div>
  );
}
