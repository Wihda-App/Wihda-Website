'use client';

import React from 'react';

export const DownloadVisual = () => {
  return (
    <div className="relative w-full h-[600px] flex items-center justify-center perspective-1000">
      
      {/* Hand Holding Phone Image - CLean, High Quality, Vertical */}
      {/* Hand Holding Phone Image - CLean, High Quality, Vertical */}
      <div className="relative w-120 md:w-130 h-full z-10 flex items-end justify-center pb-0">
        <img 
            src="/images/holding-phone.png" 
            alt="App usage demonstration" 
            className="w-full h-auto object-contain drop-shadow-2xl [mask-image:linear-gradient(to_bottom,black_70%,transparent_100%)]"
        />
      </div>

       {/* Floating Notification Card - Single, Clean, Material Design */}
       {/* Positioned to look like it's popping out from the phone area */}
      <div className="absolute top-[25%] -right-[5%] md:top-[28%] md:-right-12 z-20 animate-float-slow">
        <div className="bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md border border-white/20 dark:border-white/10 shadow-xl rounded-2xl p-4 w-72 flex items-start gap-4 transition-transform hover:scale-105 duration-300">
            
            {/* Icon Box */}
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg shadow-primary/20 shrink-0">
                <span className="material-icons text-white text-xl">notifications_active</span>
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start mb-1">
                    <h4 className="font-bold text-sm text-foreground">New Interaction</h4>
                    <span className="text-[10px] text-muted-foreground">Now</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                    <span className="font-semibold text-foreground">Amira</span> committed to the <span className="text-primary font-medium">Beach Cleanup</span> event.
                </p>
                
                {/* Action Buttons (Mini) */}
                <div className="flex gap-2 mt-3">
                    <button className="flex-1 bg-primary/10 hover:bg-primary/20 text-primary text-[10px] font-bold py-1.5 rounded-lg transition-colors">
                        View Details
                    </button>
                     <button className="flex-1 bg-muted hover:bg-muted/80 text-muted-foreground text-[10px] font-bold py-1.5 rounded-lg transition-colors">
                        Dismiss
                    </button>
                </div>
            </div>
        </div>
      </div>

    </div>
  );
};
