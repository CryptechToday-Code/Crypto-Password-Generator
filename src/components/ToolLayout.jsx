import React from 'react';
import { theme } from '../theme';

export default function ToolLayout({ children }) {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', width: '100%', fontFamily: theme.fontBody }}>
      <button 
        onClick={() => window.location.href = 'https://tools.cryptechtoday.com'}
        style={{
          background: 'none',
          border: 'none',
          color: theme.textSecondary,
          fontSize: '1rem',
          cursor: 'pointer',
          marginBottom: '24px',
          padding: '8px 0',
          fontWeight: 600,
          fontFamily: theme.fontBody
        }}
      >
        ← All Tools
      </button>
      <div style={{
        backgroundColor: theme.bgCard,
        borderRadius: theme.borderRadius,
        border: `1px solid ${theme.borderCard}`,
        padding: '32px',
        boxShadow: theme.cardShadow
      }}>
        {children}
      </div>
    </div>
  );
}
