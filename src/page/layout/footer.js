/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/no-redundant-roles */

import logoImg from "../../assets/img/logo.svg";
import telegramImg from "../../assets/img/telegram.svg";
import xImg from "../../assets/img/x.svg";
import dexScreenerImg from "../../assets/img/dexscreener.svg";
import raydiumImg from "../../assets/img/raydium.svg";
import solanaImg from "../../assets/img/solana.svg";

function Footer() {
  return (
    <div className="section footer">
      <div className="container footer">
        <div className="footer-wrap">
          <a href="#home" className="footer-brand w-nav-brand">
            <img src={logoImg} />
            <h1 className="logo-text">dude</h1>
          </a>
          <div className="links">
            <div className="link-button">
              <a
                href="https://t.me/WelshCorgiSOL"
                target="_blank"
                className="link w-inline-block"
                rel="noreferrer"
              >
                <img src={telegramImg} className="logo-link" />
              </a>
            </div>
            <div className="link-button">
              <a
                href="https://x.com/welshcorgisol"
                target="_blank"
                className="link w-inline-block"
                rel="noreferrer"
              >
                <img src={xImg} className="logo-link" />
              </a>
            </div>
            <div className="link-button">
              <a
                href="https://dexscreener.com/solana/dhjsr5g2def7gcr291c5fgwphzk2c6wpompaeo2kqr6u"
                target="_blank"
                className="link w-inline-block"
                rel="noreferrer"
              >
                <img src={dexScreenerImg} className="logo-link" />
              </a>
            </div>
            <div className="link-button">
              <a
                href="https://raydium.io/swap/?outputCurrency=GDisrnbVWjKJuAVqeWfYd9zMyV9gP7gXb3FQfd8xbKuM"
                target="_blank"
                className="link w-inline-block"
                rel="noreferrer"
              >
                <img src={raydiumImg} className="logo-link" />
              </a>
            </div>
            <div className="link-button">
              <a
                href="https://solscan.io/token/GDisrnbVWjKJuAVqeWfYd9zMyV9gP7gXb3FQfd8xbKuM"
                target="_blank"
                className="link w-inline-block"
                rel="noreferrer"
              >
                <img src={solanaImg} className="logo-link" />
              </a>
            </div>
          </div>
        </div>
        <p className="paragraph-4">2024. All Rights Reserved</p>
      </div>
    </div>
  );
}

export default Footer;
