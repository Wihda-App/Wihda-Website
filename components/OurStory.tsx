import React from 'react';

export const OurStory: React.FC = () => {
  return (
    <section className="relative pt-32 md:pb-32 pb-16 overflow-hidden border-t border-gray-200 dark:border-gray-800">
      <div className="absolute inset-0 grid-bg -z-10"></div>
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10 mix-blend-multiply"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary/5 rounded-full blur-3xl -z-10 mix-blend-multiply"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
          
          <div className="w-full lg:w-3/5 space-y-8">

            
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-sans leading-[1.1] tracking-tight text-gray-900 dark:text-white font-bold">
              Empowering<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600 dark:to-white">Neighborhoods</span>
            </h2>
            
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-xl leading-relaxed font-light font-sans">
              Clarity. Precision. Warmth. Wihda bridges the gap between intent and impact in your local community. We are reimagining how neighbors connect, share, and solve problems together.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="inline-flex justify-center items-center px-8 py-4 bg-primary text-white rounded-xl text-sm font-semibold tracking-wide uppercase hover:bg-primary-dark hover:shadow-lg hover:-translate-y-0.5 transition-all shadow-md">
                Read the Manifesto
              </button>
              <button className="inline-flex justify-center items-center px-8 py-4 border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white rounded-xl text-sm font-semibold tracking-wide uppercase hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-colors group">
                <span className="material-icons text-lg mr-2 group-hover:scale-110 transition-transform">play_circle</span>
                Our Story
              </button>
            </div>
          </div>
          
          <div className="w-full lg:w-2/5 flex flex-col justify-end items-start lg:pt-32">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-soft border border-gray-100 dark:border-gray-700 w-full relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-secondary/10 rounded-full blur-2xl -mr-8 -mt-8"></div>
              <div className="space-y-6 relative z-10">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <p className="text-4xl font-sans font-bold text-gray-900 dark:text-white">1k+</p>
                    <span className="material-icons text-secondary">trending_up</span>
                  </div>
                  <p className="text-sm font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">Active Communities</p>
                </div>
                <div className="w-full h-px bg-gray-100 dark:bg-gray-700"></div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <p className="text-4xl font-sans font-bold text-gray-900 dark:text-white">85%</p>
                    <span className="material-icons text-secondary">check_circle</span>
                  </div>
                  <p className="text-sm font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">Resolution Rate</p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};