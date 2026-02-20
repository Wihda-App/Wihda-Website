'use client';

import React from 'react';
import Link from 'next/link';
import { DownloadVisual } from '@/components/download-visual'; // Customized visual for download page
import { Button } from '@/components/ui/button';

export const DownloadPage: React.FC = () => {
    return (
        <div className="min-h-screen overflow-hidden bg-background flex flex-col font-display overflow-hidden relative">
            {/* Background Gradients */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl -z-10"></div>

            <main className="flex-grow flex items-center justify-center px-4 py-20 w-full max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full">
                    
                    {/* Left Column: Content & CTA */}
                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-8 animate-fade-in-up order-2 lg:order-1">
                        
                        

                        {/* Headlines */}
                        <div className="space-y-4">
                             <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-foreground leading-[1.1]">
                                Download the <br/>
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Wihda App</span>
                            </h1>
                            <p className="text-xl text-muted-foreground leading-relaxed max-w-lg mx-auto lg:mx-0">
                                Join <span className="text-foreground font-bold">1,000+ neighbors</span> in Algiers participating in civic dialogue and local governance.
                            </p>
                        </div>

                        {/* Visual QR Code & Store Buttons */}
                        <div className="flex flex-col sm:flex-row items-center gap-8 w-full justify-center lg:justify-start">
                            
                            {/* QR Code Block */}
                            <div className="hidden sm:flex flex-col items-center gap-2 p-3 bg-white dark:bg-card border border-border/50 rounded-2xl shadow-sm shrink-0">
                                <div className="w-32 h-32 bg-slate-900 rounded-xl flex items-center justify-center relative overflow-hidden group">
                                     {/* Placeholder QR Grid */}
                                    <div className="absolute inset-0 bg-white p-2">
                                         <div className="w-full h-full border-4 border-slate-900 rounded-lg flex items-center justify-center">
                                            <span className="material-icons text-4xl text-slate-900">qr_code_2</span>
                                         </div>
                                         <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                            <span className="text-[10px] font-bold text-slate-900 bg-white px-2 py-1 rounded shadow-sm">Scan Me</span>
                                         </div>
                                    </div>
                                </div>
                                <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-wide">Scan to Install</span>
                            </div>

                            {/* Store Buttons Stack */}
                            <div className="flex flex-col gap-3 w-full sm:w-auto">
                                <Link href="#" passHref>
                                    <Button size="lg" className="h-14 px-8 rounded-xl text-base gap-3 shadow-md hover:translate-y-[-2px] transition-all w-full sm:w-auto justify-start cursor-pointer">
                                        <span className="material-icons text-3xl">apple</span>
                                        <div className="text-left leading-tight">
                                            <div className="text-[10px] uppercase font-medium opacity-80">Download on the</div>
                                            <div className="font-bold">App Store</div>
                                        </div>
                                    </Button>
                                </Link>
                                <Link href="#" passHref>
                                    <Button size="lg" variant="secondary" className="h-14 px-8 rounded-xl text-base gap-3 shadow-md hover:translate-y-[-2px] transition-all bg-neutral-800 text-white hover:bg-neutral-900 dark:bg-slate-700 dark:hover:bg-slate-600 w-full sm:w-auto justify-start cursor-pointer">
                                        <span className="material-icons text-3xl">android</span>
                                        <div className="text-left leading-tight">
                                            <div className="text-[10px] uppercase font-medium opacity-80">Get it on</div>
                                            <div className="font-bold">Google Play</div>
                                        </div>
                                    </Button>
                                </Link>
                            </div>
                        </div>

                        {/* Trust Indicators */}
                        <div className="flex items-center gap-6 pt-4 border-t border-border/40 w-full justify-center lg:justify-start">
                            <div className="flex items-center gap-1">
                                <div className="flex text-yellow-500">
                                    <span className="material-icons text-sm">star</span>
                                    <span className="material-icons text-sm">star</span>
                                    <span className="material-icons text-sm">star</span>
                                    <span className="material-icons text-sm">star</span>
                                    <span className="material-icons text-sm">star</span>
                                </div>
                                <span className="text-sm font-bold ml-2">4.9/5</span>
                            </div>
                            <div className="w-px h-8 bg-border/60"></div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <span className="material-icons text-sm text-green-500">verified_user</span>
                                <span>Verified Secure</span>
                            </div>
                             <div className="w-px h-8 bg-border/60"></div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <span className="material-icons text-sm text-primary">check_circle</span>
                                <span>Free Forever</span>
                            </div>
                        </div>

                    </div>

                    {/* Right Column: Visual */}
                    <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end scale-90 sm:scale-100 lg:scale-110 origin-center lg:origin-right">
                        <DownloadVisual />
                    </div>

                </div>
            </main>
        </div>
    );
};