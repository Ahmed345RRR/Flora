"use client"
import { cn } from '@/lib/utils';

import React, { use, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react';
import Button from './ui/Button';

const Recorder = () => {
    const [isRecord, setIsRecording] = useState<Boolean>(false);
    const MediaRecord = useRef<MediaRecorder | null>()
    const MediaBlob = useRef<Blob[]>([]);
    const videoRT = useRef<HTMLVideoElement>(null)
    const [Videosrc, setVideoSrc] = useState<string>()

    useEffect(() => {
        if (isRecord) {
            startStream()
        } else if (!isRecord && MediaRecord.current) {
            stopScreenRecoder()
        }
    }, [isRecord])
    const startStream = async () => {
        try {
            const stream = await navigator.mediaDevices.getDisplayMedia({ video: true, audio: true });
            MediaRecord.current = new MediaRecorder(stream);
            if (videoRT.current) {
                videoRT.current.srcObject = stream
            }
            MediaRecord.current.ondataavailable = (event: BlobEvent) => {
                if (event.data.size > 0) {
                    MediaBlob.current?.push(event.data)
                }
            }
            MediaRecord.current.onstop =  () => {
             
                const srcBlob = new Blob(MediaBlob.current,{type:'video/mp4'});
                const streamRecorded = URL.createObjectURL(srcBlob);
                
                const element = document.createElement('a');
                element.href = streamRecorded ;
                element.download ="file.mp4";
                element.click()
                
                
                setVideoSrc(streamRecorded)
                if (MediaBlob.current) {
                    MediaRecord.current = null
                }
            }

            MediaRecord.current.start()
        } catch (error) {
            console.log("error:", error)
        }
    }
    const stopScreenRecoder = () => {
        MediaRecord.current?.stop();
        MediaRecord.current = null
    }
    const Downloader =()=>{

    }
    return (

        <div className='w-full h-dvh flex justify-center items-center'>
         <div>
          
            <div className='flex justify-center items-center gap-4'>


                <AnimatePresence>
                <motion.div  layout key={1} className='w-[300px] p-1 bg-grident h-[200px] bg-gradient-to-tr from-red-400 via-white to-blue-500 rounded-2xl border '>
                    <div className="w-full flex justify-center items-center h-full rounded-xl bg-white">


                        <button onClick={() => isRecord ? setIsRecording(false) : setIsRecording(true)} className={cn('w-11 shadow-md h-11 rounded-full', isRecord ? 'bg-red-600 animate-pulse' : 'bg-blue-600')} />


                    </div>


                </motion.div>
                {isRecord && !Videosrc &&
                    <motion.div key={2} layout
                        animate={{
                            x:[ 100 , 0] ,
                            opacity:[0 , 1],
                            transition:{ease:["easeIn","easeOut"]}
                        }}
                        className='w-[300px] p-1 bg-grident h-[200px] bg-gradient-to-tr from-red-400 via-white to-blue-500 rounded-2xl border '>
                        <video ref={videoRT} className='w-full h-full object-cover rounded-xl'  />
                    </motion.div>

}            
 {
    !isRecord && Videosrc &&
    <motion.div key={2} layout
        animate={{
            x:[ 100 , 0] ,
            opacity:[0 , 1],
            transition:{ease:["easeIn","easeOut"]}
        }}
        className='w-[300px] p-1 bg-grident h-[200px] bg-gradient-to-tr from-red-400 via-white to-blue-500 rounded-2xl border '>
        <video src={Videosrc} className='w-full h-full object-cover rounded-xl'  autoPlay />
        
    </motion.div>
 }
            </AnimatePresence>

              </div>
            </div>
        </div>

    )
}

export default Recorder
