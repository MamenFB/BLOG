import React from 'react';
import { Button } from 'flowbite-react';
import aiGhostImage from '../assets/fantas..webp'; 

export default function CallToAction() {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
        <div className="flex-1 justify-center flex flex-col">
            <h2 className='text-4xl'>
                Resucitar a seres queridos como 'fantasmas' de IA
            </h2>
            <p className='text-gray-700 my-2 text-xl'>
            ¿es una buena idea?
            </p>
            <Button gradientDuoTone='purpleToPink' className='rounded-tl-xl rounded-bl-none text-xl'>
                <a href="https://www.newscientist.com/article/2416079-resurrecting-loved-ones-as-ai-ghosts-could-harm-your-mental-health/" target='_blank' rel='noopener noreferrer'>
                    New Scientist
                </a>
            </Button>
        </div>
        <div className="p-7 flex-1">
            <img src={aiGhostImage} alt="AI Ghost Concept" className="ai-ghost-image" />
        </div>
    </div>
  );
}
