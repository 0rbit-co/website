import React from "react";

const HeroL = () => {
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
          d="M545.085 151.575C545.085 151.575 445.524 201.48 379.5 224.907C263.102 266.208 73.6491 288.121 73.6491 288.121L19.1825 296.024"
          stroke="url(#paint0_linear_1317_3033)"
          stroke-width="8"
          stroke-linecap="round"
          stroke-dasharray="38.16 38.16"
        />
        <path
          d="M545.836 74.5781C545.836 74.5781 404.824 158.307 338.8 181.735C127.135 256.839 17.3346 270.823 17.3346 270.823"
          stroke="url(#paint1_linear_1317_3033)"
          stroke-width="8"
          stroke-linecap="round"
          stroke-dasharray="38.16 38.16"
        />
        <path
          d="M558.547 -25C558.547 -25 388.53 111.545 293.251 149.55C81.1358 234.158 18.437 234.158 18.437 234.158"
          stroke="url(#paint2_linear_1317_3033)"
          stroke-width="8"
          stroke-linecap="round"
          stroke-dasharray="38.16 38.16"
        />
        <path
          d="M541.667 324.968C541.667 324.968 462.017 339.58 388.538 340.159C162.569 341.939 22.6054 351.145 22.6054 351.145"
          stroke="url(#paint4_linear_1317_3033)"
          stroke-width="8"
          stroke-linecap="round"
          stroke-dasharray="38.16 38.16"
        />
        <path
          d="M545.907 811.379C545.907 811.379 529 717.5 302.5 600.5C84.366 487.822 6.69469 501.665 6.69469 501.665"
          stroke="url(#paint5_linear_1317_3033)"
          stroke-width="8"
          stroke-dasharray="38.16 38.16"
        />
        <path
          d="M551.055 416.501L276.052 393.001L18.3911 388.919"
          stroke="url(#paint6_linear_1317_3033)"
          stroke-width="8"
          stroke-linecap="round"
          stroke-dasharray="50.11 50.11"
        />
        <path
          d="M545.605 516.505C545.605 516.505 374.127 447.002 264.943 433.136C155.762 419.27 15.783 416.672 15.783 416.672"
          stroke="url(#paint7_linear_1317_3033)"
          stroke-width="8"
          stroke-linecap="round"
          stroke-dasharray="50.11 50.11"
        />
        <path
          d="M540.262 687.791C540.262 687.791 389.484 588.057 296.982 545.221C205.25 502.741 12.9323 476.032 12.9323 476.032"
          stroke="url(#paint8_linear_1317_3033)"
          stroke-width="8"
          stroke-linecap="round"
          stroke-dasharray="50.88 50.88"
        />
        <path
          d="M533.945 594.059C533.945 594.059 397.804 532.111 302.6 499.546C194.984 462.735 12.6233 447.702 12.6233 447.702"
          stroke="url(#paint9_linear_1317_3033)"
          stroke-width="8"
          stroke-linecap="round"
          stroke-dasharray="50.88 50.88"
        />
        <defs>
          <linearGradient
            id="paint0_linear_1317_3033"
            x1="546.714"
            y1="160.142"
            x2="12.6567"
            y2="261.71"
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
            id="paint1_linear_1317_3033"
            x1="506.725"
            y1="95.44"
            x2="16.1342"
            y2="212.247"
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
            id="paint2_linear_1317_3033"
            x1="491.451"
            y1="34.4914"
            x2="1.42484"
            y2="174.947"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#C8CAB0" stop-opacity="0.92" />
            <stop offset="1" stop-color="#CCCEBF" stop-opacity="0.3" />
          </linearGradient>
          <linearGradient
            id="paint3_linear_1317_3033"
            x1="538.405"
            y1="206.009"
            x2="142.182"
            y2="278.371"
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
            id="paint4_linear_1317_3033"
            x1="530.443"
            y1="265.949"
            x2="24.6951"
            y2="362.133"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#A1A587" />
            <stop offset="1" stop-color="#3D3F34" stop-opacity="0" />
          </linearGradient>
          <linearGradient
            id="paint5_linear_1317_3033"
            x1="-11.8654"
            y1="480.079"
            x2="492.151"
            y2="638.736"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#CDCEC0" stop-opacity="0.2" />
            <stop offset="1" stop-color="#CCCEBF" />
          </linearGradient>
          <linearGradient
            id="paint6_linear_1317_3033"
            x1="539.278"
            y1="405.136"
            x2="18.3365"
            y2="391.032"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#A1A587" />
            <stop offset="1" stop-color="#3D3F34" stop-opacity="0" />
          </linearGradient>
          <linearGradient
            id="paint7_linear_1317_3033"
            x1="536.836"
            y1="516.313"
            x2="76.3997"
            y2="343.45"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#A1A587" />
            <stop offset="1" stop-color="#CCCEBF" />
          </linearGradient>
          <linearGradient
            id="paint8_linear_1317_3033"
            x1="523.555"
            y1="677.5"
            x2="77.9361"
            y2="405.664"
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
            id="paint9_linear_1317_3033"
            x1="267.373"
            y1="455.733"
            x2="207.122"
            y2="571.845"
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

export default HeroL;
