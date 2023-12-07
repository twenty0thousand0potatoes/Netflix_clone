import React from 'react';
import './styles/mainHeader.css';

export default function Logo() {
  return (
    <div className='logoConteiner'>
      <div className='svgConteuner'>
        <svg width="64" height="90" viewBox="0 0 84 138" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 76L9 61C9 55.4772 13.4772 51 19 51H65C70.5228 51 75 55.4772 75 61V66C75 71.5228 70.5228 76 65 76H9Z" fill="#7B121A" />
          <g filter="url(#filter0_d_110_8)">
            <path d="M9 19C9 13.4772 13.4772 9 19 9H34V119C34 124.523 29.5228 129 24 129H19C13.4772 129 9 124.523 9 119V19Z" fill="#A30E19" />
          </g>
          <g filter="url(#filter1_d_110_8)">
            <path d="M9 34L9 19C9 13.4772 13.4772 9 19 9L65 9C70.5228 9 75 13.4772 75 19V24C75 29.5228 70.5228 34 65 34H9Z" fill="#C51320" />
          </g>
          <defs>
            <filter id="filter0_d_110_8" x="4" y="0" width="43" height="138" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset dx="4" />
              <feGaussianBlur stdDeviation="4.5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.133333 0 0 0 0 0.121569 0 0 0 0 0.121569 0 0 0 0.44 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_110_8" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_110_8" result="shape" />
            </filter>
            <filter id="filter1_d_110_8" x="0" y="4" width="84" height="43" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="4.5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.133333 0 0 0 0 0.121569 0 0 0 0 0.121569 0 0 0 0.44 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_110_8" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_110_8" result="shape" />
            </filter>
          </defs>
        </svg>

      </div>
      <div className='textConteiner'>
        <span className='first letter'>a</span>
        <span className='second letter'>d</span>
        <span className='third letter'>e</span>
        <span className='fourth letter'>l</span>
        <span className='fifth letter'>i</span>
        <span className='sixth letter'>x</span>
      </div>
    </div>
  );
}
