import React, { useState } from 'react';
import { theme } from '../theme';
import { generatePasswords } from './logic/generate';
import ToolLayout from '../components/ToolLayout';

export default function Component({ onBack }) {
  const [length, setLength] = useState(16);
  const [includeUpper, setIncludeUpper] = useState(true);
  const [includeLower, setIncludeLower] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [excludeChars, setExcludeChars] = useState('');
  const [generated, setGenerated] = useState('');
  const [copied, setCopied] = useState(false);

  const handleGenerate = () => {
    const pw = generatePasswords({
      length,
      upper: includeUpper,
      lower: includeLower,
      numbers: includeNumbers,
      symbols: includeSymbols,
      excludeChars,
      count: 1
    });
    if (pw && pw.length > 0) {
      setGenerated(pw[0]);
      setCopied(false);
    }
  };

  const copyToClipboard = () => {
    if (!generated) return;
    navigator.clipboard.writeText(generated);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <ToolLayout title="Crypto Password Generator" description="Generate ultra-secure cryptographic passwords entirely offline" onBack={onBack}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <div style={{
          backgroundColor: theme.bgMuted,
          border: `1px solid ${theme.borderCard}`,
          borderRadius: theme.borderRadiusMd,
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px'
        }}>
          <div>
            <label style={{ display: 'block', fontSize: '11px', letterSpacing: '0.08em', textTransform: 'uppercase', color: theme.textSecondary, fontWeight: 600, marginBottom: '8px' }}>
              Password Length: {length}
            </label>
            <input 
              type="range" 
              min="8" 
              max="64" 
              value={length} 
              onChange={(e) => setLength(Number(e.target.value))} 
              style={{ width: '100%', accentColor: theme.accent }}
            />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontFamily: theme.fontBody, color: theme.textPrimary }}>
              <input type="checkbox" checked={includeUpper} onChange={(e) => setIncludeUpper(e.target.checked)} style={{ accentColor: theme.accent }} />
              Include Uppercase
            </label>
            <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontFamily: theme.fontBody, color: theme.textPrimary }}>
              <input type="checkbox" checked={includeLower} onChange={(e) => setIncludeLower(e.target.checked)} style={{ accentColor: theme.accent }} />
              Include Lowercase
            </label>
            <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontFamily: theme.fontBody, color: theme.textPrimary }}>
              <input type="checkbox" checked={includeNumbers} onChange={(e) => setIncludeNumbers(e.target.checked)} style={{ accentColor: theme.accent }} />
              Include Numbers
            </label>
            <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontFamily: theme.fontBody, color: theme.textPrimary }}>
              <input type="checkbox" checked={includeSymbols} onChange={(e) => setIncludeSymbols(e.target.checked)} style={{ accentColor: theme.accent }} />
              Include Symbols
            </label>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '11px', letterSpacing: '0.08em', textTransform: 'uppercase', color: theme.textSecondary, fontWeight: 600, marginBottom: '8px' }}>
              Exclude Characters
            </label>
            <input 
              type="text" 
              value={excludeChars} 
              onChange={(e) => setExcludeChars(e.target.value)} 
              placeholder="e.g. i, l, 1, 0, o, O" 
              style={{
                width: '100%', padding: '10px 14px', borderRadius: theme.borderRadiusSm, border: `1px solid ${theme.borderCard}`,
                fontFamily: theme.fontBody, color: theme.textPrimary, background: theme.bgCard, outline: 'none', boxSizing: 'border-box'
              }}
            />
          </div>

          <button 
            onClick={handleGenerate}
            style={{
              backgroundColor: theme.accent, color: theme.bgCard, padding: '12px 24px', border: 'none',
              borderRadius: theme.borderRadiusMd, fontSize: '1rem', fontWeight: 700, cursor: 'pointer', width: '100%',
              transition: 'background-color 0.2s', marginTop: '8px'
            }}
          >
            Generate Password →
          </button>
        </div>

        {generated && (
          <div style={{
            backgroundColor: theme.bgCard, border: `2px solid ${theme.accent}`, borderRadius: theme.borderRadiusMd,
            padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px', position: 'relative'
          }}>
            <div style={{
              fontFamily: theme.fontMono, fontSize: '1.25rem', wordBreak: 'break-all', padding: '16px',
              backgroundColor: theme.bgMuted, borderRadius: theme.borderRadiusSm, border: `1px solid ${theme.borderCard}`,
              color: theme.textPrimary, display: 'flex', justifyContent: 'space-between', alignItems: 'center'
            }}>
              <span>{generated}</span>
              <button 
                onClick={copyToClipboard}
                style={{
                  backgroundColor: theme.accent, color: theme.bgCard, border: 'none', padding: '8px 16px',
                  borderRadius: theme.borderRadiusSm, fontSize: '0.9rem', fontWeight: 600, cursor: 'pointer'
                }}
              >
                {copied ? 'Copied!' : 'Copy'}
              </button>
            </div>
          </div>
        )}
      </div>
    </ToolLayout>
  );
}
