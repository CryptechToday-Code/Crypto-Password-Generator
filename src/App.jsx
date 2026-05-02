import React from 'react';
import ToolPage from './components/ToolPage';
import PasswordGenerator from './tool/Component';
import { meta } from './seo/meta';
import { theme } from './theme';

export default function App() {
  const explainer = [
    { heading: "What makes a password cryptographically secure?", body: "High-entropy, cryptographically strong passwords rely on completely random character distribution rather than predictable, dictionary-based patterns. This significantly increases the required compute difficulty for dictionary-based and brute-force cracking attempts." },
    { heading: "Offline, browser-only cryptography", body: "Our password generator processes everything strictly client-side using JavaScript. No keys, passwords, or configuration tokens are sent to any remote server or stored anywhere." },
    { heading: "Customization & security tradeoffs", body: "While including more diverse character groups (numbers and special symbols) boosts your entropy profile, the raw character length of your password is the primary factor in resisting modern cracking algorithms." }
  ];
  
  const faqs = [
    { question: "Is this password generator safe to use?", answer: "Yes, 100%. The generation uses JavaScript Math.random() offline in your browser. Your generated secrets never leave your device." },
    { question: "How long should a strong password be?", answer: "We recommend at least 16 characters including uppercase, lowercase, numbers, and symbols for industry-standard protection." },
    { question: "Are my passwords stored or logged anywhere?", answer: "No. This tool operates without any backend database or storage mechanism. Once you refresh the page, the generated passwords disappear permanently." }
  ];

  return (
    <div style={{ minHeight: '100vh', backgroundColor: theme.bg, padding: '40px 20px', boxSizing: 'border-box' }}>
      <ToolPage 
        meta={meta}
        heroTitle="Crypto Password Generator"
        heroSubtitle="Generate ultra-secure cryptographic passwords entirely offline"
        ToolComponent={PasswordGenerator}
        explainer={explainer}
        faqs={faqs}
      />
    </div>
  );
}
