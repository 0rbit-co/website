import React from "react";

const QuestsModal = ({ vis, onClosing }: any) => {
  const checkArea = (e: any) => {
    if (e.target.id === "blurArea") {
      onClosing();
    }
  };
  return (
    <>
      {vis && (
        <div
          className="bg-[#21212198] backdrop-blur-md fixed inset-0 grid"
          onClick={checkArea}
          id="blurArea"
        >
          <div className="bg-[#ffffff] rounded-3xl place-self-center p-6 grid grid-flow-col grid-cols-2 w-[75%]">
            QuestsModal
          </div>
        </div>
      )}
    </>
  );
};

export default QuestsModal;
