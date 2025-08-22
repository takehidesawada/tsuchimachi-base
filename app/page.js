'use client';

import { useState, useEffect } from 'react';

const colors = {
  primaryLight: '#faf7f2',
  primaryDark: '#2c2416',
  accentFlame: '#ff6b35',
  accentEarth: '#8b6f47',
  accentGlaze: '#4a7c59',
  surfaceWarm: '#f5ebe0',
  shadowSoft: 'rgba(44,36,22,0.08)',
  textSecondary: '#6b5d4f'
};

const fontFamily = '"游ゴシック Medium", "Yu Gothic Medium", "Hiragino Kaku Gothic ProN", "Noto Sans JP", sans-serif';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [visibleSections, setVisibleSections] = useState(new Set());
  const [activeTimelineItem, setActiveTimelineItem] = useState(null);
  const [selectedYear, setSelectedYear] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [currentYear, setCurrentYear] = useState(1300);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const observeElements = () => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleSections(prev => new Set([...prev, entry.target.id]));
            }
          });
        },
        { threshold: 0.2 }
      );

      document.querySelectorAll('[data-animate]').forEach((el) => {
        observer.observe(el);
      });

      return () => observer.disconnect();
    };

    // カウントアップアニメーション
    const countUpAnimation = () => {
      const duration = 3000; // 3秒
      const startTime = Date.now();
      const startYear = 1300;
      const endYear = 2024;
      
      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const year = Math.floor(startYear + (endYear - startYear) * easeOutQuart);
        
        setCurrentYear(year);
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      
      setTimeout(() => {
        requestAnimationFrame(animate);
      }, 1000); // 1秒後に開始
    };

    window.addEventListener('scroll', handleScroll);
    const cleanup = observeElements();
    countUpAnimation();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      cleanup();
    };
  }, []);

  const events = [
    {
      id: 1,
      date: '12月15日(日) 14:00',
      category: 'トークイベント',
      title: '土トーーク！vol.5',
      description: '瀬戸焼の未来について語り合う対話の場。地域の職人さんや若手作家をお招きします。',
      participants: 25,
      image: 'https://images.unsplash.com/photo-1594736797933-d0ca9c1c2e66?w=400'
    },
    {
      id: 2,
      date: '12月22日(日) 10:00',
      category: 'フィールドワーク',
      title: '窯元めぐりフィールドワーク',
      description: '洞地区の窯元を訪問し、職人さんから直接技術や歴史を学びます。',
      participants: 15,
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400'
    },
    {
      id: 3,
      date: '1月13日(土) 13:00',
      category: 'ワークショップ',
      title: 'やきもの制作ワークショップ',
      description: '初心者歓迎！土に触れながら、自分だけの器を作ってみませんか。',
      participants: 12,
      image: 'https://images.unsplash.com/photo-1571205894034-3b0d1e4cc348?w=400'
    }
  ];

  const activities = [
    {
      icon: '📚',
      title: '学ぶ',
      description: 'トークイベントや勉強会を通じて、瀬戸焼の歴史や技術を深く知る機会を提供します。'
    },
    {
      icon: '🎨',
      title: 'つくる',
      description: 'ワークショップや制作活動で、実際に土に触れ、ものづくりの喜びを体験します。'
    },
    {
      icon: '🤝',
      title: 'つながる',
      description: '地域の人々、職人、アーティストとの交流を通じて新しいコミュニティを育てます。'
    }
  ];

  const archiveEvents = [
    // 2024年のイベント
    {
      id: 1,
      year: 2024,
      month: '12月',
      category: 'トークイベント',
      title: '土トーーク！vol.15',
      description: '瀬戸焼の未来について職人・作家・市民で語り合う年末スペシャル',
      date: '2024.12.15',
      participants: 45,
      mediaType: 'video',
      thumbnail: 'https://images.unsplash.com/photo-1594736797933-d0ca9c1c2e66?w=400',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      tags: ['職人対話', '未来展望']
    },
    {
      id: 2,
      year: 2024,
      month: '11月',
      category: 'フィールドワーク',
      title: '深川神社周辺の窯跡探索',
      description: '江戸時代の古窯跡を巡り、瀬戸焼のルーツを探る歴史散策',
      date: '2024.11.23',
      participants: 25,
      mediaType: 'photos',
      thumbnail: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400',
      photos: [
        'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800',
        'https://images.unsplash.com/photo-1571205894034-3b0d1e4cc348?w=800',
        'https://images.unsplash.com/photo-1594736797933-d0ca9c1c2e66?w=800'
      ],
      tags: ['歴史探索', '古窯跡']
    },
    {
      id: 3,
      year: 2024,
      month: '10月',
      category: 'ワークショップ',
      title: '親子でつくる瀬戸焼体験',
      description: '家族で楽しむやきもの制作。親子の絆を深める特別企画',
      date: '2024.10.14',
      participants: 20,
      mediaType: 'photos',
      thumbnail: 'https://images.unsplash.com/photo-1571205894034-3b0d1e4cc348?w=400',
      photos: [
        'https://images.unsplash.com/photo-1571205894034-3b0d1e4cc348?w=800',
        'https://images.unsplash.com/photo-1594736797933-d0ca9c1c2e66?w=800'
      ],
      tags: ['親子', '体験']
    },
    {
      id: 4,
      year: 2024,
      month: '9月',
      category: 'トークイベント',
      title: '土トーーク！vol.14 - 国際芸術祭振り返り',
      description: 'あいち国際芸術祭での体験を振り返り、今後の展望を語る',
      date: '2024.09.21',
      participants: 35,
      mediaType: 'video',
      thumbnail: 'https://images.unsplash.com/photo-1594736797933-d0ca9c1c2e66?w=400',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      tags: ['芸術祭', '振り返り']
    },
    {
      id: 5,
      year: 2024,
      month: '8月',
      category: 'フィールドワーク',
      title: '夏の窯場見学ツアー',
      description: '真夏の窯場で職人の技を間近で見学。暑さに負けない情熱を体感',
      date: '2024.08.17',
      participants: 18,
      mediaType: 'photos',
      thumbnail: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400',
      photos: [
        'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800',
        'https://images.unsplash.com/photo-1571205894034-3b0d1e4cc348?w=800'
      ],
      tags: ['窯場', '職人技']
    },
    // 2023年のイベント
    {
      id: 6,
      year: 2023,
      month: '12月',
      category: 'トークイベント',
      title: '土トーーク！vol.12 - 年末スペシャル',
      description: '2023年の活動を振り返り、来年への想いを語り合う',
      date: '2023.12.16',
      participants: 40,
      mediaType: 'video',
      thumbnail: 'https://images.unsplash.com/photo-1594736797933-d0ca9c1c2e66?w=400',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      tags: ['年末', '振り返り']
    },
    {
      id: 7,
      year: 2023,
      month: '10月',
      category: 'フィールドワーク',
      title: '洞地区の歴史を歩く',
      description: '瀬戸焼発祥の地とされる洞地区を詳しく探索',
      date: '2023.10.28',
      participants: 30,
      mediaType: 'photos',
      thumbnail: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400',
      photos: [
        'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800',
        'https://images.unsplash.com/photo-1571205894034-3b0d1e4cc348?w=800',
        'https://images.unsplash.com/photo-1594736797933-d0ca9c1c2e66?w=800'
      ],
      tags: ['洞地区', '歴史']
    },
    // 2022年のイベント
    {
      id: 8,
      year: 2022,
      month: '11月',
      category: 'ワークショップ',
      title: '秋のやきもの制作会',
      description: '紅葉の季節に、落ち着いた雰囲気でやきもの作りを楽しむ',
      date: '2022.11.19',
      participants: 22,
      mediaType: 'photos',
      thumbnail: 'https://images.unsplash.com/photo-1571205894034-3b0d1e4cc348?w=400',
      photos: [
        'https://images.unsplash.com/photo-1571205894034-3b0d1e4cc348?w=800',
        'https://images.unsplash.com/photo-1594736797933-d0ca9c1c2e66?w=800'
      ],
      tags: ['秋', '制作会']
    },
    // 2021年のイベント
    {
      id: 9,
      year: 2021,
      month: '6月',
      category: 'トークイベント',
      title: '土トーーク！vol.1 - 記念すべき第一回',
      description: 'プロジェクト初のトークイベント。多くの市民が参加し大成功',
      date: '2021.06.12',
      participants: 30,
      mediaType: 'video',
      thumbnail: 'https://images.unsplash.com/photo-1594736797933-d0ca9c1c2e66?w=400',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      tags: ['第一回', '記念']
    }
  ];

  const filteredEvents = archiveEvents.filter(event => {
    const yearMatch = selectedYear === 'all' || event.year.toString() === selectedYear;
    const categoryMatch = selectedCategory === 'all' || event.category === selectedCategory;
    return yearMatch && categoryMatch;
  });

  const years = ['all', ...Array.from(new Set(archiveEvents.map(e => e.year.toString()))).sort((a, b) => b - a)];
  const categories = ['all', 'トークイベント', 'フィールドワーク', 'ワークショップ'];

  const members = [
    { name: '田中さん', role: '代表', message: '瀬戸の土と人をつなぎたい' },
    { name: '佐藤さん', role: 'イベント企画', message: '楽しい企画を考えています' },
    { name: '鈴木さん', role: 'デザイナー', message: '伝統と現代をつなぐデザインを' },
    { name: '山田さん', role: '地域コーディネーター', message: '地域の声を大切にします' }
  ];

  return (
    <div style={{ 
      fontFamily,
      backgroundColor: colors.primaryLight,
      color: colors.primaryDark,
      lineHeight: '1.7'
    }}>
      {/* Header */}
      <header style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        backgroundColor: isScrolled ? 'rgba(250, 247, 242, 0.95)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(10px)' : 'none',
        transition: 'all 0.3s ease',
        padding: '1rem 0',
        borderBottom: isScrolled ? `1px solid ${colors.shadowSoft}` : 'none'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: colors.primaryDark
          }}>
            土街人 TSUCHIMACHI
          </div>
          
          <nav style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            <div style={{ display: 'flex', gap: '2rem' }}>
              {['イベント', '活動について', '参加する', 'アーカイブ'].map((item) => (
                <a key={item} href="#" style={{
                  textDecoration: 'none',
                  color: colors.primaryDark,
                  fontSize: '0.95rem',
                  transition: 'color 0.3s ease',
                  ':hover': { color: colors.accentFlame }
                }}>
                  {item}
                </a>
              ))}
            </div>
            
            <button style={{
              background: `linear-gradient(135deg, ${colors.accentFlame}, ${colors.accentEarth})`,
              color: 'white',
              border: 'none',
              padding: '0.8rem 1.5rem',
              borderRadius: '25px',
              fontSize: '0.9rem',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              boxShadow: `0 4px 15px ${colors.shadowSoft}`
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = `0 6px 20px rgba(255, 107, 53, 0.3)`;
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = `0 4px 15px ${colors.shadowSoft}`;
            }}>
              参加申込
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section style={{
        minHeight: '100vh',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        overflow: 'hidden'
      }}>
        {/* Background Layer */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: `
            radial-gradient(circle at 20% 80%, ${colors.surfaceWarm}40 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, ${colors.accentEarth}20 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, ${colors.accentGlaze}15 0%, transparent 50%),
            linear-gradient(135deg, ${colors.primaryLight} 0%, ${colors.surfaceWarm} 100%)
          `
        }} />

        {/* Floating Pottery Elements */}
        <div style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none'
        }}>
          {[
            { emoji: '🏺', x: '10%', y: '20%', delay: '0s', duration: '20s' },
            { emoji: '🍵', x: '85%', y: '15%', delay: '2s', duration: '25s' },
            { emoji: '🌿', x: '15%', y: '70%', delay: '1s', duration: '18s' },
            { emoji: '✨', x: '80%', y: '75%', delay: '3s', duration: '22s' },
            { emoji: '🔥', x: '5%', y: '45%', delay: '1.5s', duration: '30s' },
            { emoji: '🍃', x: '90%', y: '50%', delay: '2.5s', duration: '28s' }
          ].map((item, index) => (
            <div key={index} style={{
              position: 'absolute',
              left: item.x,
              top: item.y,
              fontSize: '2rem',
              opacity: '0.3',
              animation: `float ${item.duration} infinite linear`,
              animationDelay: item.delay
            }}>
              {item.emoji}
            </div>
          ))}
        </div>

        {/* Particle Effect */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: `
            radial-gradient(2px 2px at 20px 30px, ${colors.accentEarth}40, transparent),
            radial-gradient(2px 2px at 40px 70px, ${colors.accentFlame}30, transparent),
            radial-gradient(1px 1px at 90px 40px, ${colors.accentGlaze}40, transparent),
            radial-gradient(1px 1px at 130px 80px, ${colors.textSecondary}30, transparent)
          `,
          backgroundSize: '150px 150px',
          animation: 'particleMove 60s linear infinite'
        }} />

        <div style={{
          maxWidth: '900px',
          textAlign: 'center',
          position: 'relative',
          zIndex: 2
        }} id="hero" data-animate>
          <div style={{
            animation: visibleSections.has('hero') ? 'fadeInUp 1s ease' : 'none'
          }}>
            <h1 style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 'bold',
              marginBottom: '1rem',
              color: colors.primaryDark,
              lineHeight: '1.2',
              textShadow: `2px 2px 4px ${colors.shadowSoft}`
            }}>
              瀬戸の土が、人をつなぐ
            </h1>
            
            {/* Year Counter */}
            <div style={{
              fontSize: 'clamp(1rem, 2vw, 1.2rem)',
              color: colors.accentFlame,
              marginBottom: '2rem',
              fontWeight: 'bold',
              animation: 'pulse 2s infinite'
            }}>
              {currentYear}年の歴史を持つ瀬戸焼の街で
            </div>
            
            <p style={{
              fontSize: 'clamp(1.1rem, 2vw, 1.3rem)',
              color: colors.textSecondary,
              marginBottom: '3rem',
              maxWidth: '600px',
              margin: '0 auto 3rem',
              lineHeight: '1.6'
            }}>
              新しいコミュニティを育てています
            </p>

            <div style={{
              background: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(10px)',
              borderRadius: '25px',
              padding: '2.5rem',
              boxShadow: `0 15px 35px ${colors.shadowSoft}, 0 5px 15px rgba(255, 107, 53, 0.2)`,
              maxWidth: '520px',
              margin: '0 auto 3rem',
              border: `2px solid ${colors.accentFlame}`,
              position: 'relative',
              animation: 'glow 3s ease-in-out infinite alternate'
            }}>
              {/* Corner decorations */}
              <div style={{
                position: 'absolute',
                top: '-8px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '40px',
                height: '4px',
                background: colors.accentFlame,
                borderRadius: '2px'
              }} />
              
              <div style={{
                color: colors.accentFlame,
                fontSize: '1rem',
                fontWeight: 'bold',
                marginBottom: '1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem'
              }}>
                🔥 次回イベント
              </div>
              <h3 style={{
                fontSize: '1.5rem',
                marginBottom: '0.8rem',
                color: colors.primaryDark,
                fontWeight: 'bold'
              }}>
                土トーーク！vol.5
              </h3>
              <p style={{
                color: colors.textSecondary,
                fontSize: '1rem',
                marginBottom: '1.5rem'
              }}>
                12月15日(日) 14:00〜 | 瀬戸蔵
              </p>
              <button style={{
                background: `linear-gradient(135deg, ${colors.accentFlame}, ${colors.accentEarth})`,
                color: 'white',
                border: 'none',
                padding: '1rem 2rem',
                borderRadius: '25px',
                fontSize: '1rem',
                fontWeight: 'bold',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: `0 4px 15px rgba(255, 107, 53, 0.3)`
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-3px)';
                e.target.style.boxShadow = `0 8px 25px rgba(255, 107, 53, 0.4)`;
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = `0 4px 15px rgba(255, 107, 53, 0.3)`;
              }}>
                詳細・参加申込
              </button>
            </div>

            {/* Scroll Indicator */}
            <div style={{
              position: 'absolute',
              bottom: '2rem',
              left: '50%',
              transform: 'translateX(-50%)',
              color: colors.textSecondary,
              textAlign: 'center',
              animation: 'bounce 2s infinite'
            }}>
              <div style={{ marginBottom: '0.5rem', fontSize: '0.9rem' }}>
                スクロールして詳細を見る
              </div>
              <div style={{ fontSize: '1.5rem' }}>↓</div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section style={{
        padding: '5rem 2rem',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <h2 style={{
          fontSize: 'clamp(2rem, 4vw, 2.5rem)',
          textAlign: 'center',
          marginBottom: '3rem',
          color: colors.primaryDark
        }} id="events" data-animate>
          直近のイベント
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '2rem',
          animation: visibleSections.has('events') ? 'fadeInUp 0.8s ease' : 'none'
        }}>
          {events.map((event, index) => (
            <div key={event.id} style={{
              background: 'white',
              borderRadius: '15px',
              overflow: 'hidden',
              boxShadow: `0 5px 20px ${colors.shadowSoft}`,
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              animationDelay: `${index * 0.2}s`
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.boxShadow = `0 15px 35px rgba(44, 36, 22, 0.15)`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = `0 5px 20px ${colors.shadowSoft}`;
            }}>
              <div style={{
                height: '200px',
                background: `linear-gradient(45deg, ${colors.accentEarth}, ${colors.accentGlaze})`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '3rem'
              }}>
                {event.category === 'トークイベント' ? '💬' : 
                 event.category === 'フィールドワーク' ? '🚶' : '🎨'}
              </div>
              
              <div style={{ padding: '1.5rem' }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '1rem'
                }}>
                  <span style={{
                    background: colors.accentFlame,
                    color: 'white',
                    padding: '0.3rem 0.8rem',
                    borderRadius: '15px',
                    fontSize: '0.8rem',
                    fontWeight: 'bold'
                  }}>
                    {event.category}
                  </span>
                  <span style={{
                    color: colors.textSecondary,
                    fontSize: '0.9rem'
                  }}>
                    {event.date}
                  </span>
                </div>
                
                <h3 style={{
                  fontSize: '1.2rem',
                  marginBottom: '0.8rem',
                  color: colors.primaryDark
                }}>
                  {event.title}
                </h3>
                
                <p style={{
                  color: colors.textSecondary,
                  fontSize: '0.9rem',
                  lineHeight: '1.6',
                  marginBottom: '1rem'
                }}>
                  {event.description}
                </p>
                
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <span style={{
                    color: colors.textSecondary,
                    fontSize: '0.85rem'
                  }}>
                    👥 {event.participants}名予定
                  </span>
                  <button style={{
                    background: colors.accentGlaze,
                    color: 'white',
                    border: 'none',
                    padding: '0.5rem 1rem',
                    borderRadius: '20px',
                    fontSize: '0.85rem',
                    cursor: 'pointer',
                    transition: 'background 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.background = colors.primaryDark}
                  onMouseLeave={(e) => e.target.style.background = colors.accentGlaze}>
                    詳細を見る
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Archive Section */}
      <section style={{
        padding: '5rem 2rem',
        background: colors.surfaceWarm,
        minHeight: '100vh'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 2.5rem)',
            textAlign: 'center',
            marginBottom: '2rem',
            color: colors.primaryDark
          }} id="archive" data-animate>
            活動アーカイブ
          </h2>
          
          <p style={{
            textAlign: 'center',
            color: colors.textSecondary,
            marginBottom: '3rem',
            fontSize: '1.1rem'
          }}>
            これまでに開催した{archiveEvents.length}回のイベント・フィールドワークの記録
          </p>

          {/* フィルター */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem',
            marginBottom: '3rem',
            flexWrap: 'wrap'
          }}>
            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
              <span style={{ color: colors.textSecondary, fontSize: '0.9rem' }}>年:</span>
              {years.map(year => (
                <button
                  key={year}
                  onClick={() => setSelectedYear(year)}
                  style={{
                    padding: '0.5rem 1rem',
                    border: 'none',
                    borderRadius: '20px',
                    background: selectedYear === year ? colors.accentFlame : 'white',
                    color: selectedYear === year ? 'white' : colors.textSecondary,
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    fontSize: '0.85rem',
                    fontWeight: selectedYear === year ? 'bold' : 'normal'
                  }}
                  onMouseEnter={(e) => {
                    if (selectedYear !== year) {
                      e.target.style.background = colors.primaryLight;
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (selectedYear !== year) {
                      e.target.style.background = 'white';
                    }
                  }}
                >
                  {year === 'all' ? '全て' : year}
                </button>
              ))}
            </div>
            
            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
              <span style={{ color: colors.textSecondary, fontSize: '0.9rem' }}>カテゴリ:</span>
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  style={{
                    padding: '0.5rem 1rem',
                    border: 'none',
                    borderRadius: '20px',
                    background: selectedCategory === category ? colors.accentEarth : 'white',
                    color: selectedCategory === category ? 'white' : colors.textSecondary,
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    fontSize: '0.85rem',
                    fontWeight: selectedCategory === category ? 'bold' : 'normal'
                  }}
                  onMouseEnter={(e) => {
                    if (selectedCategory !== category) {
                      e.target.style.background = colors.primaryLight;
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (selectedCategory !== category) {
                      e.target.style.background = 'white';
                    }
                  }}
                >
                  {category === 'all' ? '全て' : category}
                </button>
              ))}
            </div>
          </div>

          {/* イベントカードグリッド */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
            gap: '2rem',
            animation: visibleSections.has('archive') ? 'fadeInUp 0.8s ease' : 'none'
          }}>
            {filteredEvents.map((event, index) => (
              <div
                key={event.id}
                onClick={() => setSelectedEvent(event)}
                style={{
                  background: 'white',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  boxShadow: `0 8px 25px ${colors.shadowSoft}`,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  animationDelay: `${index * 0.1}s`
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.boxShadow = `0 20px 40px rgba(44, 36, 22, 0.15)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = `0 8px 25px ${colors.shadowSoft}`;
                }}
              >
                {/* 画像/サムネイル部分 */}
                <div style={{
                  height: '200px',
                  backgroundImage: `url(${event.thumbnail})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  position: 'relative'
                }}>
                  {/* グラデーションオーバーレイ */}
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to bottom, transparent, rgba(0,0,0,0.7))'
                  }} />
                  
                  {/* カテゴリタグ */}
                  <div style={{
                    position: 'absolute',
                    top: '1rem',
                    left: '1rem',
                    background: event.category === 'トークイベント' ? colors.accentFlame :
                               event.category === 'フィールドワーク' ? colors.accentGlaze : colors.accentEarth,
                    color: 'white',
                    padding: '0.3rem 0.8rem',
                    borderRadius: '15px',
                    fontSize: '0.8rem',
                    fontWeight: 'bold'
                  }}>
                    {event.category}
                  </div>
                  
                  {/* メディアタイプアイコン */}
                  <div style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    background: 'rgba(255, 255, 255, 0.9)',
                    borderRadius: '50%',
                    width: '40px',
                    height: '40px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.2rem'
                  }}>
                    {event.mediaType === 'video' ? '🎥' : '📷'}
                  </div>
                  
                  {/* 日付 */}
                  <div style={{
                    position: 'absolute',
                    bottom: '1rem',
                    left: '1rem',
                    color: 'white',
                    fontSize: '0.9rem',
                    fontWeight: 'bold'
                  }}>
                    {event.date}
                  </div>
                </div>
                
                {/* コンテンツ部分 */}
                <div style={{ padding: '1.5rem' }}>
                  <h3 style={{
                    fontSize: '1.2rem',
                    marginBottom: '0.8rem',
                    color: colors.primaryDark,
                    lineHeight: '1.3'
                  }}>
                    {event.title}
                  </h3>
                  
                  <p style={{
                    color: colors.textSecondary,
                    fontSize: '0.9rem',
                    lineHeight: '1.5',
                    marginBottom: '1rem'
                  }}>
                    {event.description}
                  </p>
                  
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '1rem'
                  }}>
                    <span style={{
                      color: colors.textSecondary,
                      fontSize: '0.85rem'
                    }}>
                      👥 {event.participants}名参加
                    </span>
                    <span style={{
                      color: colors.accentFlame,
                      fontSize: '0.85rem',
                      fontWeight: 'bold'
                    }}>
                      {event.month}
                    </span>
                  </div>
                  
                  {/* タグ */}
                  <div style={{
                    display: 'flex',
                    gap: '0.5rem',
                    flexWrap: 'wrap'
                  }}>
                    {event.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        style={{
                          background: colors.primaryLight,
                          color: colors.textSecondary,
                          padding: '0.2rem 0.6rem',
                          borderRadius: '10px',
                          fontSize: '0.75rem',
                          border: `1px solid ${colors.shadowSoft}`
                        }}
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredEvents.length === 0 && (
            <div style={{
              textAlign: 'center',
              padding: '3rem',
              color: colors.textSecondary
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔍</div>
              <p>該当するイベントが見つかりませんでした</p>
            </div>
          )}
        </div>
      </section>

      {/* Activities Section */}
      <section style={{
        padding: '5rem 2rem',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <h2 style={{
          fontSize: 'clamp(2rem, 4vw, 2.5rem)',
          textAlign: 'center',
          marginBottom: '3rem',
          color: colors.primaryDark
        }} id="activities" data-animate>
          活動の3つの柱
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          animation: visibleSections.has('activities') ? 'fadeInUp 0.8s ease' : 'none'
        }}>
          {activities.map((activity, index) => (
            <div key={index} style={{
              background: 'white',
              borderRadius: '20px',
              padding: '3rem 2rem',
              textAlign: 'center',
              boxShadow: `0 8px 25px ${colors.shadowSoft}`,
              transition: 'transform 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
              <div style={{
                fontSize: '3rem',
                marginBottom: '1.5rem'
              }}>
                {activity.icon}
              </div>
              <h3 style={{
                fontSize: '1.5rem',
                marginBottom: '1rem',
                color: colors.primaryDark
              }}>
                {activity.title}
              </h3>
              <p style={{
                color: colors.textSecondary,
                lineHeight: '1.6'
              }}>
                {activity.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Members Section */}
      <section style={{
        padding: '5rem 2rem',
        background: colors.surfaceWarm
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 2.5rem)',
            textAlign: 'center',
            marginBottom: '3rem',
            color: colors.primaryDark
          }} id="members" data-animate>
            メンバー紹介
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem',
            animation: visibleSections.has('members') ? 'fadeInUp 0.8s ease' : 'none'
          }}>
            {members.map((member, index) => (
              <div key={index} style={{
                background: 'white',
                borderRadius: '20px',
                padding: '2rem',
                textAlign: 'center',
                boxShadow: `0 5px 20px ${colors.shadowSoft}`,
                transition: 'transform 0.3s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                <div style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  background: `linear-gradient(135deg, ${colors.accentEarth}, ${colors.accentGlaze})`,
                  margin: '0 auto 1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '2rem'
                }}>
                  👤
                </div>
                <h4 style={{
                  fontSize: '1.2rem',
                  marginBottom: '0.5rem',
                  color: colors.primaryDark
                }}>
                  {member.name}
                </h4>
                <p style={{
                  color: colors.accentFlame,
                  fontSize: '0.9rem',
                  marginBottom: '1rem',
                  fontWeight: 'bold'
                }}>
                  {member.role}
                </p>
                <p style={{
                  color: colors.textSecondary,
                  fontSize: '0.85rem',
                  fontStyle: 'italic'
                }}>
                  「{member.message}」
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Participation Section */}
      <section style={{
        padding: '5rem 2rem',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <h2 style={{
          fontSize: 'clamp(2rem, 4vw, 2.5rem)',
          textAlign: 'center',
          marginBottom: '3rem',
          color: colors.primaryDark
        }} id="participation" data-animate>
          参加方法
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
          animation: visibleSections.has('participation') ? 'fadeInUp 0.8s ease' : 'none'
        }}>
          {[
            { step: '01', title: 'イベント情報をチェック', desc: 'SNSやWebサイトで最新情報をご確認ください' },
            { step: '02', title: '申込フォームから登録', desc: 'イベントページから簡単にお申し込みできます' },
            { step: '03', title: '当日会場へ', desc: '瀬戸市内各所でお会いしましょう！' }
          ].map((item, index) => (
            <div key={index} style={{
              textAlign: 'center',
              padding: '2rem'
            }}>
              <div style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                background: colors.accentFlame,
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem',
                fontSize: '1.5rem',
                fontWeight: 'bold'
              }}>
                {item.step}
              </div>
              <h3 style={{
                fontSize: '1.2rem',
                marginBottom: '1rem',
                color: colors.primaryDark
              }}>
                {item.title}
              </h3>
              <p style={{
                color: colors.textSecondary,
                lineHeight: '1.6'
              }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Event Detail Modal */}
      {selectedEvent && (
        <div style={{
          position: 'fixed',
          inset: 0,
          zIndex: 9999,
          background: 'rgba(0, 0, 0, 0.8)',
          backdropFilter: 'blur(5px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem',
          animation: 'fadeIn 0.3s ease'
        }}
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            setSelectedEvent(null);
          }
        }}>
          <div style={{
            background: 'white',
            borderRadius: '20px',
            maxWidth: '800px',
            maxHeight: '90vh',
            overflowY: 'auto',
            position: 'relative',
            animation: 'slideInFromBottom 0.3s ease'
          }}
          onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button
              onClick={() => setSelectedEvent(null)}
              style={{
                position: 'absolute',
                top: '1.5rem',
                right: '1.5rem',
                background: 'rgba(255, 255, 255, 0.9)',
                border: 'none',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                cursor: 'pointer',
                fontSize: '1.2rem',
                zIndex: 10,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: `0 2px 10px ${colors.shadowSoft}`
              }}
            >
              ×
            </button>

            {/* Hero Image */}
            <div style={{
              height: '300px',
              backgroundImage: `url(${selectedEvent.thumbnail})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              position: 'relative',
              borderTopLeftRadius: '20px',
              borderTopRightRadius: '20px'
            }}>
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to bottom, transparent, rgba(0,0,0,0.5))'
              }} />
              
              <div style={{
                position: 'absolute',
                bottom: '2rem',
                left: '2rem',
                color: 'white'
              }}>
                <div style={{
                  background: selectedEvent.category === 'トークイベント' ? colors.accentFlame :
                             selectedEvent.category === 'フィールドワーク' ? colors.accentGlaze : colors.accentEarth,
                  padding: '0.5rem 1rem',
                  borderRadius: '20px',
                  fontSize: '0.9rem',
                  fontWeight: 'bold',
                  marginBottom: '1rem',
                  display: 'inline-block'
                }}>
                  {selectedEvent.category}
                </div>
                <h2 style={{
                  fontSize: '2rem',
                  marginBottom: '0.5rem',
                  textShadow: '2px 2px 4px rgba(0,0,0,0.7)'
                }}>
                  {selectedEvent.title}
                </h2>
                <p style={{
                  fontSize: '1.1rem',
                  opacity: 0.9,
                  textShadow: '1px 1px 2px rgba(0,0,0,0.7)'
                }}>
                  {selectedEvent.date} | {selectedEvent.participants}名参加
                </p>
              </div>
            </div>

            {/* Content */}
            <div style={{ padding: '2rem' }}>
              <p style={{
                fontSize: '1.1rem',
                lineHeight: '1.6',
                color: colors.textSecondary,
                marginBottom: '2rem'
              }}>
                {selectedEvent.description}
              </p>

              {/* Media Content */}
              {selectedEvent.mediaType === 'video' && selectedEvent.videoUrl && (
                <div style={{ marginBottom: '2rem' }}>
                  <h3 style={{
                    fontSize: '1.3rem',
                    marginBottom: '1rem',
                    color: colors.primaryDark
                  }}>
                    📹 イベント動画
                  </h3>
                  <div style={{
                    position: 'relative',
                    paddingBottom: '56.25%',
                    height: 0,
                    borderRadius: '15px',
                    overflow: 'hidden'
                  }}>
                    <iframe
                      src={selectedEvent.videoUrl}
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        border: 'none'
                      }}
                      allowFullScreen
                    />
                  </div>
                </div>
              )}

              {selectedEvent.photos && (
                <div style={{ marginBottom: '2rem' }}>
                  <h3 style={{
                    fontSize: '1.3rem',
                    marginBottom: '1rem',
                    color: colors.primaryDark
                  }}>
                    📸 イベント写真
                  </h3>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '1rem'
                  }}>
                    {selectedEvent.photos.map((photo, index) => (
                      <div key={index} style={{
                        borderRadius: '10px',
                        overflow: 'hidden',
                        aspectRatio: '16/9',
                        backgroundImage: `url(${photo})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        cursor: 'pointer',
                        transition: 'transform 0.3s ease'
                      }}
                      onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                      onMouseLeave={(e) => e.target.style.transform = 'scale(1)'} />
                    ))}
                  </div>
                </div>
              )}

              {/* Tags */}
              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{
                  fontSize: '1.1rem',
                  marginBottom: '1rem',
                  color: colors.primaryDark
                }}>
                  🏷️ タグ
                </h3>
                <div style={{
                  display: 'flex',
                  gap: '0.5rem',
                  flexWrap: 'wrap'
                }}>
                  {selectedEvent.tags.map((tag, index) => (
                    <span key={index} style={{
                      background: colors.surfaceWarm,
                      color: colors.primaryDark,
                      padding: '0.5rem 1rem',
                      borderRadius: '20px',
                      fontSize: '0.9rem',
                      fontWeight: 'bold'
                    }}>
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer style={{
        background: colors.primaryDark,
        color: colors.primaryLight,
        padding: '3rem 2rem 2rem',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            marginBottom: '2rem'
          }}>
            土街人 TSUCHIMACHI
          </div>
          
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '2rem',
            marginBottom: '2rem',
            flexWrap: 'wrap'
          }}>
            {['Instagram', 'Facebook', 'note', 'お問い合わせ', 'プライバシーポリシー'].map((link) => (
              <a key={link} href="#" style={{
                color: colors.primaryLight,
                textDecoration: 'none',
                fontSize: '0.9rem',
                transition: 'color 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.color = colors.accentFlame}
              onMouseLeave={(e) => e.target.style.color = colors.primaryLight}>
                {link}
              </a>
            ))}
          </div>
          
          <p style={{
            color: colors.textSecondary,
            fontSize: '0.85rem',
            margin: 0
          }}>
            © 2024 土街人プロジェクト
          </p>
        </div>
      </footer>

      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        html {
          scroll-behavior: smooth;
        }
        
        body {
          overflow-x: hidden;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInFromLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes expandCard {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes slideInFromBottom {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0.2;
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
            opacity: 0.4;
          }
        }
        
        @keyframes particleMove {
          0% {
            transform: translateX(0) translateY(0);
          }
          100% {
            transform: translateX(-150px) translateY(-150px);
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 0.8;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.05);
          }
        }
        
        @keyframes glow {
          0% {
            box-shadow: 0 15px 35px ${colors.shadowSoft}, 0 5px 15px rgba(255, 107, 53, 0.2);
          }
          100% {
            box-shadow: 0 20px 40px ${colors.shadowSoft}, 0 8px 25px rgba(255, 107, 53, 0.4);
          }
        }
        
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0) translateX(-50%);
          }
          40% {
            transform: translateY(-10px) translateX(-50%);
          }
          60% {
            transform: translateY(-5px) translateX(-50%);
          }
        }
        
        @media (max-width: 768px) {
          nav {
            display: none !important;
          }
          
          header div:first-child {
            justify-content: center !important;
          }
        }
      `}</style>
    </div>
  );
}
