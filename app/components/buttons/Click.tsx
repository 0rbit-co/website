"use client"
import { useState } from 'react';

const Click: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [clicked, setClicked] = useState<boolean>(false);

  const handleClick = () => {
    setClicked(true);
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 1000); 
  };

  return (
    <button
      onClick={handleClick}
      className="relative inline-flex w-32 h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
      disabled={clicked}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />

      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
        {clicked ? (
          loading ? (
            <span>
              Loading..
            </span>
          ) : (
            'Hooray!'
          )
        ) : (
          'Access Data'
        )}
      </span>
    </button>
  );
};

export default Click;