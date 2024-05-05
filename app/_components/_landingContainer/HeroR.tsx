import React from "react";

const AnimatedSVG = () => {
  const animationStyles = `
    @keyframes dash {
      from {
        stroke-dashoffset: 800;
      }
      to {
        stroke-dashoffset: 0;
      }
    }

    path {
      stroke-dasharray: 40;
      animation: dash 4s linear infinite;
    }
  `;

  return (
    <div className="scale-[1.5]">
      <style>{animationStyles}</style>
      <svg
        width="100%"
        height="700"
        viewBox="0 0 579 809"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M33.1342 158.575C33.1342 158.575 132.694 208.48 198.718 231.907C315.116 273.208 504.57 295.121 504.57 295.121L559.036 303.024"
          stroke="url(#paint0_linear_1317_3044)"
          stroke-width="8"
          stroke-linecap="round"
          stroke-dasharray="38.16 38.16"
        />
        <path
          d="M32.3828 81.5781C32.3828 81.5781 173.395 165.307 239.419 188.735C451.083 263.839 560.884 277.823 560.884 277.823"
          stroke="url(#paint1_linear_1317_3044)"
          stroke-width="8"
          stroke-linecap="round"
          stroke-dasharray="38.16 38.16"
        />
        <path
          d="M19.6719 -18C19.6719 -18 189.688 118.545 284.968 156.55C497.083 241.158 559.782 241.158 559.782 241.158"
          stroke="url(#paint2_linear_1317_3044)"
          stroke-width="8"
          stroke-linecap="round"
          stroke-dasharray="38.16 38.16"
        />

        <path
          d="M36.5513 331.968C36.5513 331.968 116.202 346.58 189.68 347.159C415.65 348.939 555.613 358.145 555.613 358.145"
          stroke="url(#paint4_linear_1317_3044)"
          stroke-width="8"
          stroke-linecap="round"
          stroke-dasharray="38.16 38.16"
        />
        <path
          d="M32.3118 818.379C32.3118 818.379 49.2188 724.5 275.719 607.5C493.853 494.822 571.524 508.665 571.524 508.665"
          stroke="url(#paint5_linear_1317_3044)"
          stroke-width="8"
          stroke-dasharray="38.16 38.16"
        />
        <path
          d="M27.1641 423.501L302.167 400.001L559.828 395.919"
          stroke="url(#paint6_linear_1317_3044)"
          stroke-width="8"
          stroke-linecap="round"
          stroke-dasharray="50.11 50.11"
        />
        <path
          d="M32.6138 523.505C32.6138 523.505 204.092 454.002 313.275 440.136C422.457 426.27 562.436 423.672 562.436 423.672"
          stroke="url(#paint7_linear_1317_3044)"
          stroke-width="8"
          stroke-linecap="round"
          stroke-dasharray="50.11 50.11"
        />
        <path
          d="M37.9571 694.791C37.9571 694.791 188.735 595.057 281.236 552.221C372.969 509.741 565.286 483.032 565.286 483.032"
          stroke="url(#paint8_linear_1317_3044)"
          stroke-width="8"
          stroke-linecap="round"
          stroke-dasharray="50.88 50.88"
        />
        <path
          d="M44.2734 601.059C44.2734 601.059 180.415 539.111 275.619 506.546C383.235 469.735 565.595 454.702 565.595 454.702"
          stroke="url(#paint9_linear_1317_3044)"
          stroke-width="8"
          stroke-linecap="round"
          stroke-dasharray="50.88 50.88"
        />
        <defs>
          <linearGradient
            id="paint0_linear_1317_3044"
            x1="31.5049"
            y1="167.142"
            x2="565.562"
            y2="268.71"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#A4A694" />
            <stop
              offset="0.673432"
              stop-color="#4B4C43"
              stop-opacity="0.112708"
            />
            <stop offset="1" stop-color="#3F4039" stop-opacity="0" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_1317_3044"
            x1="71.494"
            y1="102.44"
            x2="562.085"
            y2="219.247"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#A8A991" stop-opacity="0.8" />
            <stop
              offset="0.681874"
              stop-color="#CDCEC0"
              stop-opacity="0.562941"
            />
            <stop offset="1" stop-color="#CCCEBF" stop-opacity="0.2" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_1317_3044"
            x1="86.768"
            y1="41.4914"
            x2="576.794"
            y2="181.947"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#C8CAB0" stop-opacity="0.92" />
            <stop offset="1" stop-color="#CCCEBF" stop-opacity="0.3" />
          </linearGradient>
          <linearGradient
            id="paint3_linear_1317_3044"
            x1="39.8134"
            y1="213.009"
            x2="436.036"
            y2="285.371"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#A1A587" />
            <stop
              offset="0.50291"
              stop-color="#7A7E67"
              stop-opacity="0.642752"
            />
            <stop offset="1" stop-color="#3D3F33" stop-opacity="0.07" />
          </linearGradient>
          <linearGradient
            id="paint4_linear_1317_3044"
            x1="47.7757"
            y1="272.949"
            x2="553.524"
            y2="369.133"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#A1A587" />
            <stop offset="1" stop-color="#3D3F34" stop-opacity="0" />
          </linearGradient>
          <linearGradient
            id="paint5_linear_1317_3044"
            x1="590.084"
            y1="487.079"
            x2="86.0674"
            y2="645.736"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#CDCEC0" stop-opacity="0.2" />
            <stop offset="1" stop-color="#CCCEBF" />
          </linearGradient>
          <linearGradient
            id="paint6_linear_1317_3044"
            x1="38.9407"
            y1="412.136"
            x2="559.882"
            y2="398.032"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#A1A587" />
            <stop offset="1" stop-color="#3D3F34" stop-opacity="0" />
          </linearGradient>
          <linearGradient
            id="paint7_linear_1317_3044"
            x1="41.3831"
            y1="523.313"
            x2="501.819"
            y2="350.45"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#A1A587" />
            <stop offset="1" stop-color="#CCCEBF" />
          </linearGradient>
          <linearGradient
            id="paint8_linear_1317_3044"
            x1="54.664"
            y1="684.5"
            x2="500.283"
            y2="412.664"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#969783" stop-opacity="0.8" />
            <stop
              offset="0.484605"
              stop-color="#CDCEC0"
              stop-opacity="0.504788"
            />
            <stop offset="1" stop-color="#B3B9A5" stop-opacity="0.2" />
          </linearGradient>
          <linearGradient
            id="paint9_linear_1317_3044"
            x1="310.846"
            y1="462.733"
            x2="371.097"
            y2="578.845"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#C0C1B0" />
            <stop offset="1" stop-color="#CCCEBF" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default AnimatedSVG;
