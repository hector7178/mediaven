import React from 'react';
import Chats from './Chats';
import Image from 'next/image';
import robot from "../../public/g24.svg"
const Page = () => {
    return (
        <main className='flex flex-row '>
        <div className="w-1/3 h-full md:flex hidden p-10 items-center justify-center">
            <Image src={robot} alt="ia medical" width={500} height={500} className="w-[50vw] h-[50vh] "/>
          </div>
            <Chats/>
        </main>
    );
}

export default Page;
