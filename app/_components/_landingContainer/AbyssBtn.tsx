import React from "react";
import { brandLightText, brandSecondaryText } from "../../_utils/colors";

const AbyssBtn = () => {
  return (
    <a
      href="https://docs.0rbit.co/"
      target="_blank"
      className={`scaleScroll sm:mx-20 mx-[9px] px-2 py-[6px] bg-[#25291c1e] hover:bg-[#25291c39] rounded-3xl ${brandLightText} text-[15px] scale-125`}
    >
      <div
        className={`px-2 py-[6px] bg-[#25291c39] hover:bg-[#25291c53] rounded-3xl`}
      >
        <div
          className={`px-2 py-[6px] bg-[#25291c53] hover:bg-[#25291c7e] rounded-3xl`}
        >
          <div
            className={`px-2 py-[6px] bg-[#25291c7e] hover:bg-[#25291c9c] rounded-3xl`}
          >
            <div
              className={`px-2 py-[6px] bg-[#25291c9c] hover:bg-[#25291cba] rounded-3xl`}
            >
              <div
                className={`px-2 py-[6px] bg-[#25291cba] hover:bg-[#1b1f14ec] rounded-3xl`}
              >
                <div
                  className={`w-fit px-3 py-[6px] bg-[#1b1f14ec] hover:bg-[#0e100a] rounded-3xl text-center`}
                >
                  Want to dive deeper? 
                  <a
                    className={`${brandSecondaryText} hover:underline block sm:inline`}
                  >
                    Check the Docs!
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default AbyssBtn;
