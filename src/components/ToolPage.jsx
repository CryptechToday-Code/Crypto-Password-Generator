import React, { useState } from 'react';
import SEOHead from './SEOHead';
import { theme } from '../theme';

export default function ToolPage({ meta, heroTitle, heroSubtitle, ToolComponent, explainer, faqs }) {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', width: '100%' }}>
      <SEOHead meta={meta} faqs={faqs} />
      
      <section style={{ textAlign: 'center', marginBottom: '48px', paddingTop: '24px' }}>
        <h1 style={{ fontFamily: theme.fontHeading, color: theme.textPrimary, fontSize: '2.5rem', marginBottom: '16px' }}>{heroTitle}</h1>
        <p style={{ fontFamily: theme.fontBody, color: theme.textSecondary, fontSize: '1.1rem', lineHeight: 1.5 }}>
          {heroSubtitle}
        </p>
      </section>

      <div style={{ marginBottom: '48px' }}>
        <ToolComponent />
      </div>

      {explainer && explainer.length > 0 && (
        <section style={{
          backgroundColor: theme.bgCard,
          borderRadius: theme.borderRadius,
          border: `1px solid ${theme.borderCard}`,
          padding: '32px',
          boxShadow: theme.cardShadow,
          marginBottom: '48px'
        }}>
          {explainer.map((block, idx) => (
            <div key={idx} style={{ marginBottom: idx === explainer.length - 1 ? 0 : '32px' }}>
              <h3 style={{ fontFamily: theme.fontHeading, color: theme.textPrimary, fontSize: '1.5rem', marginBottom: '12px' }}>
                {block.heading}
              </h3>
              <p style={{ fontFamily: theme.fontBody, color: theme.textSecondary, fontSize: '1rem', lineHeight: 1.6 }}>
                {block.body}
              </p>
            </div>
          ))}
        </section>
      )}

      {faqs && faqs.length > 0 && (
        <section style={{ marginBottom: '64px' }}>
          <h2 style={{ fontFamily: theme.fontHeading, color: theme.textPrimary, fontSize: '2rem', marginBottom: '24px' }}>
            Frequently Asked Questions
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {faqs.map((faq, idx) => (
              <div key={idx} style={{
                backgroundColor: theme.bgCard,
                borderRadius: '8px',
                border: `1px solid ${theme.borderCard}`,
                overflow: 'hidden'
              }}>
                <button 
                  onClick={() => toggleFaq(idx)}
                  style={{
                    width: '100%', display: 'flex', justifyContent: 'space-between', 
                    alignItems: 'center', padding: '16px 24px', background: 'none', border: 'none',
                    cursor: 'pointer', fontFamily: theme.fontBody, fontSize: '1.1rem', fontWeight: 600,
                    color: theme.textPrimary, textAlign: 'left'
                  }}
                >
                  {faq.question}
                  <span style={{ fontSize: '1.5rem', color: theme.accent }}>
                    {openFaq === idx ? '−' : '+'}
                  </span>
                </button>
                {openFaq === idx && (
                  <div style={{ padding: '0 24px 24px 24px', fontFamily: theme.fontBody, color: theme.textSecondary, lineHeight: 1.6 }}>
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
