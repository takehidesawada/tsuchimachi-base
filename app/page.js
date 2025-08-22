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

    window.addEventListener('scroll', handleScroll);
    const cleanup = observeElements();

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

  const timeline = [
    { 
      year: 2020, 
      event: 'プロジェクト始動',
      detail: '瀬戸焼の伝統を現代につなげる想いから、有志メンバーが集まりプロジェクトを立ち上げました。',
      stats: '創設メンバー: 5名',
      image: '🌱'
    },
    { 
      year: 2021, 
      event: '最初のトークイベント開催',
      detail: '「土トーーク！vol.1」を開催。地域の職人さんや市民約30名が参加し、熱い議論が交わされました。',
      stats: '参加者: 30名',
      image: '💬'
    },
    { 
      year: 2023, 
      event: '洞地区フィールドワーク',
      detail: '瀬戸の心臓部である洞地区の窯元を巡り、1300年の歴史を肌で感じるツアーを実施しました。',
      stats: '訪問窯元: 8軒',
      image: '🚶'
    },
    { 
      year: 2024, 
      event: '国際芸術祭「あいち」参加',
      detail: '国際的な舞台で瀬戸焼の魅力を発信。世界中から訪れる来場者に地域の文化を紹介しました。',
      stats: '来場者: 500名+',
      image: '🎨'
    }
  ];

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
        background: `linear-gradient(135deg, ${colors.primaryLight} 0%, ${colors.surfaceWarm} 100%)`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        position: 'relative'
      }}>
        <div style={{
          maxWidth: '800px',
          textAlign: 'center',
          animation: visibleSections.has('hero') ? 'fadeInUp 1s ease' : 'none'
        }} id="hero" data-animate>
          <h1 style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: 'bold',
            marginBottom: '1.5rem',
            color: colors.primaryDark,
            lineHeight: '1.2'
          }}>
            瀬戸の土が、人をつなぐ
          </h1>
          
          <p style={{
            fontSize: 'clamp(1.1rem, 2vw, 1.3rem)',
            color: colors.textSecondary,
            marginBottom: '3rem',
            maxWidth: '600px',
            margin: '0 auto 3rem'
          }}>
            1300年の歴史を持つ瀬戸焼の街で、新しいコミュニティを育てています
          </p>

          <div style={{
            background: 'white',
            borderRadius: '20px',
            padding: '2rem',
            boxShadow: `0 10px 30px ${colors.shadowSoft}`,
            maxWidth: '500px',
            margin: '0 auto',
            border: `2px solid ${colors.accentFlame}`
          }}>
            <div style={{
              color: colors.accentFlame,
              fontSize: '0.9rem',
              fontWeight: 'bold',
              marginBottom: '0.5rem'
            }}>
              🔥 次回イベント
            </div>
            <h3 style={{
              fontSize: '1.3rem',
              marginBottom: '0.5rem',
              color: colors.primaryDark
            }}>
              土トーーク！vol.5
            </h3>
            <p style={{
              color: colors.textSecondary,
              fontSize: '0.95rem'
            }}>
              12月15日(日) 14:00〜 | 瀬戸蔵
            </p>
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

      {/* Timeline Section */}
      <section style={{
        padding: '5rem 2rem',
        background: colors.surfaceWarm
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 2.5rem)',
            textAlign: 'center',
            marginBottom: '4rem',
            color: colors.primaryDark
          }} id="timeline" data-animate>
            プロジェクトストーリー
          </h2>
          
          <div style={{
            position: 'relative',
            animation: visibleSections.has('timeline') ? 'fadeInUp 1s ease' : 'none'
          }}>
            {/* 中央の縦線 */}
            <div style={{
              position: 'absolute',
              left: '50%',
              top: '0',
              bottom: '0',
              width: '4px',
              background: `linear-gradient(to bottom, ${colors.accentFlame}, ${colors.accentEarth})`,
              transform: 'translateX(-50%)',
              borderRadius: '2px'
            }} />

            {timeline.map((item, index) => {
              const isLeft = index % 2 === 0;
              const isActive = activeTimelineItem === index;
              
              return (
                <div key={index} style={{
                  position: 'relative',
                  marginBottom: '4rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: isLeft ? 'flex-end' : 'flex-start'
                }}>
                  {/* 年号の円 */}
                  <div style={{
                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '80px',
                    height: '80px',
                    background: colors.accentFlame,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '1.2rem',
                    fontWeight: 'bold',
                    boxShadow: `0 4px 20px ${colors.shadowSoft}`,
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    border: `4px solid ${colors.surfaceWarm}`,
                    zIndex: 2
                  }}
                  onClick={() => setActiveTimelineItem(activeTimelineItem === index ? null : index)}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translate(-50%, -50%) scale(1.1)';
                    e.target.style.background = colors.primaryDark;
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translate(-50%, -50%) scale(1)';
                    e.target.style.background = colors.accentFlame;
                  }}>
                    {item.year}
                  </div>

                  {/* 基本カード */}
                  <div style={{
                    width: '45%',
                    background: 'white',
                    borderRadius: '15px',
                    padding: '2rem',
                    boxShadow: `0 5px 20px ${colors.shadowSoft}`,
                    marginRight: isLeft ? '2rem' : '0',
                    marginLeft: isLeft ? '0' : '2rem',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    position: 'relative'
                  }}
                  onClick={() => setActiveTimelineItem(activeTimelineItem === index ? null : index)}>
                    {/* 三角形の矢印 */}
                    <div style={{
                      position: 'absolute',
                      top: '50%',
                      [isLeft ? 'right' : 'left']: '-10px',
                      transform: 'translateY(-50%)',
                      width: 0,
                      height: 0,
                      borderTop: '10px solid transparent',
                      borderBottom: '10px solid transparent',
                      [isLeft ? 'borderRight' : 'borderLeft']: '10px solid white'
                    }} />
                    
                    <div style={{
                      fontSize: '2.5rem',
                      marginBottom: '1rem',
                      textAlign: 'center'
                    }}>
                      {item.image}
                    </div>
                    
                    <h3 style={{
                      fontSize: '1.2rem',
                      marginBottom: '0.5rem',
                      color: colors.primaryDark,
                      textAlign: 'center'
                    }}>
                      {item.event}
                    </h3>
                    
                    <p style={{
                      color: colors.accentFlame,
                      fontSize: '0.9rem',
                      fontWeight: 'bold',
                      textAlign: 'center'
                    }}>
                      {item.stats}
                    </p>
                  </div>

                  {/* 詳細カード（展開式） */}
                  {isActive && (
                    <div style={{
                      position: 'absolute',
                      [isLeft ? 'right' : 'left']: '55%',
                      top: '0',
                      width: '350px',
                      background: colors.accentFlame,
                      color: 'white',
                      borderRadius: '15px',
                      padding: '2rem',
                      boxShadow: `0 10px 30px rgba(255, 107, 53, 0.3)`,
                      animation: 'expandCard 0.3s ease-out forwards',
                      zIndex: 3
                    }}>
                      <div style={{
                        position: 'absolute',
                        top: '50%',
                        [isLeft ? 'left' : 'right']: '-10px',
                        transform: 'translateY(-50%)',
                        width: 0,
                        height: 0,
                        borderTop: '10px solid transparent',
                        borderBottom: '10px solid transparent',
                        [isLeft ? 'borderRight' : 'borderLeft']: `10px solid ${colors.accentFlame}`
                      }} />
                      
                      <h4 style={{
                        fontSize: '1.3rem',
                        marginBottom: '1rem',
                        fontWeight: 'bold'
                      }}>
                        {item.year}年の出来事
                      </h4>
                      
                      <p style={{
                        lineHeight: '1.6',
                        marginBottom: '1rem',
                        opacity: 0.95
                      }}>
                        {item.detail}
                      </p>
                      
                      <div style={{
                        background: 'rgba(255, 255, 255, 0.2)',
                        padding: '0.8rem',
                        borderRadius: '8px',
                        fontSize: '0.9rem',
                        fontWeight: 'bold'
                      }}>
                        📊 {item.stats}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
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
