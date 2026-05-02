# Crypto Password Generator — Secure Password Generator with Breach Checking

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen)](https://tools.cryptechtoday.com/password-generator)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Built with React](https://img.shields.io/badge/Built%20with-React-blue)](https://react.dev)
[![Deployed on Cloudflare Pages](https://img.shields.io/badge/Cloudflare-Pages-orange)](https://pages.cloudflare.com)

![Tool Screenshot](./screenshot.png)

## Overview

The **Crypto Password Generator** is a free, open source password generator built for crypto users who need strong, uncompromised credentials. It uses zxcvbn-ts for real crack-time strength analysis and checks every generated password against the HaveIBeenPwned database via k-anonymity — meaning your password never leaves your browser. No signup, no tracking, no server logging.

Live at [CrypTechToday Tools](https://tools.cryptechtoday.com/password-generator).

## Features

- **Real Strength Analysis**: Uses zxcvbn-ts to estimate actual crack time — not a fake colour bar.
- **HIBP Breach Check**: Checks your password against billions of known breached passwords via k-anonymity.
- **Zero Data Exposure**: SHA-1 hash prefix sent to HIBP API — your password never leaves the browser.
- **Configurable Generation**: Set length, uppercase, lowercase, numbers, and symbols independently.
- **Entropy Display**: Shows exact entropy bits alongside human-readable crack time estimate.
- **No Signup Required**: Fully client-side, open source, and free for all.

## Tech Stack

| Library | Purpose | Version |
| ------- | ------- | ------- |
| React | UI framework | ^19.2.5 |
| @zxcvbn-ts/core | Password strength analysis | latest |
| @zxcvbn-ts/language-en | English dictionary for zxcvbn | latest |
| react-helmet-async | Dynamic SEO metadata | ^3.0.0 |
| Vite | Frontend tooling | ^8.0.10 |

## Quick Start

```bash
git clone https://github.com/CryptechToday-Code/Crypto-Password-Generator.git
cd Crypto-Password-Generator
npm install
npm run dev
```

## Environment Variables

| Variable | Required | Description | Default |
| -------- | -------- | ----------- | ------- |
| — | — | This tool requires no environment variables | — |

The HIBP Pwned Passwords API is keyless and free. No API key needed.

## Deployment

See the full deployment guide → [DEPLOYMENT.md](./DEPLOYMENT.md)

Deploy to **Cloudflare Pages**, **Vercel**, Cloudflare Workers, or self-hosted Nginx.
Quick reference:
- Cloudflare Pages: Build command `npm run build`, output directory `dist`
- Vercel: Auto-detects Vite, add `vercel.json` rewrite rule for SPA routing

## Part of CrypTechToday Tools Suite

This tool is part of the open-source crypto tools suite built by [CrypTechToday](https://www.cryptechtoday.com). See all 7 tools at [tools.cryptechtoday.com](https://tools.cryptechtoday.com).

- [Crypto Password Generator](https://github.com/CryptechToday-Code/Crypto-Password-Generator)
- [Satoshi Converter](https://github.com/CryptechToday-Code/Satoshi-Converter)
- [Crypto Profit/Loss Calculator](https://github.com/CryptechToday-Code/crypto-profit-loss-calculator)
- [Token ROI Calculator](https://github.com/CryptechToday-Code/token-roi-calculator)
- [Ethereum Gas Fee Estimator](https://github.com/CryptechToday-Code/eth-gas-fee-estimator)
- [Bitcoin Mining Calculator](https://github.com/CryptechToday-Code/bitcoin-mining-calculator)
- [Crypto Transfer Optimizer](https://github.com/CryptechToday-Code/crypto-transfer-optimizer)

## License

MIT License. Free to use, fork, and modify.
