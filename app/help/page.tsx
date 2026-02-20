import { Footer } from '@/components/Footer';
import { HelpSearch } from '@/components/help/HelpSearch';
import { HelpSidebar } from '@/components/help/HelpSidebar';
import { HelpTopics } from '@/components/help/HelpTopics';
import {
  SidebarProvider,
  SidebarInset,
  SidebarTrigger,
} from '@/components/ui/sidebar';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Wihda Help Center',
  description:
    'Find answers, browse topics, and get support for Wihda.',
};

export default function HelpPage() {
  return (
    
      <SidebarProvider defaultOpen={true}>
        <HelpSidebar />
        <SidebarInset className="bg-background min-h-[calc(100vh-4rem)] pt-20 md:pt-24 pb-10">
          <main className="flex-grow flex flex-col items-center w-full px-4 sm:px-6 lg:px-8">
            {/* Mobile Sidebar Trigger */}
            <div className="w-full max-w-7xl flex items-center justify-start mb-6 lg:hidden">
              <SidebarTrigger />
              <span className="ml-2 font-semibold text-sm">Menu</span>
            </div>

            {/* Hero */}
            <div className="w-full max-w-[800px] flex flex-col items-center text-center mb-16">
              <nav className="flex items-center gap-2 text-sm font-medium mb-6 text-muted-foreground">
                <Link
                  href="/"
                  className="hover:text-primary transition-colors"
                >
                  Home
                </Link>
                <span className="material-icons text-sm">
                  chevron_right
                </span>
                <span className="text-foreground">Help Center</span>
              </nav>

              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-8 tracking-tight">
                How can we help you today?
              </h2>

              <HelpSearch />
            </div>

            {/* All Articles */}
            <div className="w-full max-w-4xl">
              <HelpTopics />
            </div>
          </main>

          {/* Decorative blobs */}
          <div
            className="fixed top-0 right-0 -z-10 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl opacity-50 pointer-events-none translate-x-1/2 -translate-y-1/2"
            aria-hidden="true"
          />
          <div
            className="fixed bottom-0 left-0 -z-10 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl opacity-50 pointer-events-none -translate-x-1/3 translate-y-1/4"
            aria-hidden="true"
          />

          <Footer />
        </SidebarInset>
      </SidebarProvider>
  );
}
