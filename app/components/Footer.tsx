import React from 'react'
import mainLogo from "@/public/svg/main-unit.svg"
import midSize from "@/public/svg/mid-size.svg"
import unitIcon from "@/public/svg/unit-icon.svg"
import Image from 'next/image'
import { RxDiscordLogo } from "react-icons/rx";
import { RiTwitterXLine } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='lg:mt-20 lg:m-6'>
        <div className='flex justify-between items-center'>
            <div>
                <Image src="/svg/main-unit.svg" alt="main-logo" width={100} height={100} />
            </div>
            <div className='flex items-center gap-4'>
                <a href="https://discord.gg/6mNSBSVC4r"><button><RxDiscordLogo className='w-6 h-6 text-slate-400' /></button></a>
                <a href="https://twitter.com/0rbitco"><button><RiTwitterXLine className='w-6 h-6 text-slate-400' /></button></a>
                <a href="https://github.com/0rbit-co"><button><FaGithub className='w-6 h-6 text-slate-400' /></button></a>
            </div>
        </div>
        <div className='flex justify-center mt-10 text-[#b97340] text-xs'>
            © 2024 0rbit.
        </div>
    </div>
  )
}

export default Footer
