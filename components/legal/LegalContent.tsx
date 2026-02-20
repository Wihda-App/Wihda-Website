import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export function LegalContent() {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <Card className="rounded-xl shadow-sm border border-border overflow-hidden">
        <CardContent className="p-8 sm:p-12 relative">
            {/* Decorative top accent */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary"></div>

            {/* Last Updated Badge */}
            <div className="flex justify-between items-start mb-10">
            <div>
                <h2 className="text-3xl font-bold text-foreground mb-2">Privacy Policy</h2>
                <p className="text-muted-foreground text-sm">
                Governing the use of data on the Wihda Platform.
                </p>
            </div>
            <Badge variant="secondary" className="inline-flex items-center gap-1.5 bg-secondary/10 text-secondary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide border border-secondary/20">
                <span className="material-icons text-sm">check_circle</span>
                Last Updated: Oct 24, 2025
            </Badge>
            </div>

            {/* Summary Card (TL;DR) */}
            <div className="bg-muted/50 rounded-lg p-6 mb-12 border border-border">
            <h4 className="font-bold text-foreground flex items-center gap-2 mb-3">
                <span className="material-icons text-primary">info</span>
                At a Glance (TL;DR)
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0"></span>
                We only collect data necessary to provide our civic services.
                </li>
                <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0"></span>
                We do not sell your personal data to third parties.
                </li>
                <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0"></span>
                You have full control to export or delete your account at any time.
                </li>
            </ul>
            </div>

            {/* Legal Content */}
            <div className="prose prose-slate dark:prose-invert max-w-none text-muted-foreground transition-colors">
            <section id="introduction" className="mb-12 scroll-mt-32">
                <h3 className="text-2xl font-bold text-foreground mb-4">1. Introduction</h3>
                <p className="mb-4">
                Welcome to Wihda. We are committed to protecting your personal information and your
                right to privacy. If you have any questions or concerns about our policy, or our
                practices with regards to your personal information, please contact us.
                </p>
                <p>
                When you visit our website and use our services, you trust us with your personal
                information. We take your privacy very seriously. In this privacy notice, we describe
                our privacy policy. We seek to explain to you in the clearest way possible what
                information we collect, how we use it, and what rights you have in relation to it.
                </p>
            </section>

            <div className="w-full h-px bg-border my-8"></div>

            <section id="data-collection" className="mb-12 scroll-mt-32">
                <h3 className="text-2xl font-bold text-foreground mb-4">2. Data We Collect</h3>
                <p className="mb-4">
                We collect personal information that you voluntarily provide to us when registering at
                the Services expressing an interest in obtaining information about us or our products
                and services, when participating in activities on the Services or otherwise contacting
                us.
                </p>
                <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="bg-muted/50 p-4 rounded-lg border border-border">
                    <h5 className="font-bold text-foreground mb-2 text-sm">Personal Data</h5>
                    <p className="text-sm">
                    Name, email address, contact preferences, and profile images provided during
                    registration.
                    </p>
                </div>
                <div className="bg-muted/50 p-4 rounded-lg border border-border">
                    <h5 className="font-bold text-foreground mb-2 text-sm">Usage Data</h5>
                    <p className="text-sm">
                    IP address, browser type, operating system, and interaction logs with civic tools.
                    </p>
                </div>
                </div>
                <p>
                All personal information that you provide to us must be true, complete and accurate,
                and you must notify us of any changes to such personal information.
                </p>
            </section>

            <div className="w-full h-px bg-border my-8"></div>

            <section id="data-usage" className="mb-12 scroll-mt-32">
                <h3 className="text-2xl font-bold text-foreground mb-4">3. How We Use Data</h3>
                <p className="mb-4">
                We use personal information collected via our Services for a variety of business
                purposes described below. We process your personal information for these purposes in
                reliance on our legitimate business interests.
                </p>
                <ul className="list-none pl-0 space-y-3 mt-4">
                <li className="flex gap-3">
                    <span className="material-icons text-primary">check</span>
                    <span>To facilitate account creation and logon process.</span>
                </li>
                <li className="flex gap-3">
                    <span className="material-icons text-primary">check</span>
                    <span>
                    To send administrative information to you regarding service updates.
                    </span>
                </li>
                <li className="flex gap-3">
                    <span className="material-icons text-primary">check</span>
                    <span>To protect our Services (e.g., fraud monitoring and prevention).</span>
                </li>
                </ul>
            </section>

            <div className="w-full h-px bg-border my-8"></div>

            <section id="user-responsibilities" className="mb-12 scroll-mt-32">
                <h3 className="text-2xl font-bold text-foreground mb-4">4. User Responsibilities</h3>
                <p className="mb-4">
                As a user of the Wihda platform, you agree to use the service in compliance with all
                applicable local, state, national, and international laws. You are responsible for
                maintaining the confidentiality of your account credentials and for all activities that
                occur under your account.
                </p>
                <div className="bg-primary/5 border-l-4 border-primary p-4 rounded-r-lg">
                <p className="text-sm text-foreground font-medium">
                    <strong>Important:</strong> Engaging in harassment, hate speech, or the distribution
                    of illegal content will result in immediate termination of your account.
                </p>
                </div>
            </section>

            <div className="w-full h-px bg-border my-8"></div>

            <section id="security" className="mb-12 scroll-mt-32">
                <h3 className="text-2xl font-bold text-foreground mb-4">5. Security</h3>
                <p className="mb-4">
                We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, please also remember that we cannot guarantee that the internet itself is 100% secure. Although we will do our best to protect your personal information, transmission of personal information to and from our Services is at your own risk. You should only access the services within a secure environment.
                </p>
            </section>

            <div className="w-full h-px bg-border my-8"></div>

            <section id="termination" className="mb-12 scroll-mt-32">
                <h3 className="text-2xl font-bold text-foreground mb-4">6. Termination</h3>
                <p className="mb-4">
                We may terminate or suspend your account and bar access to the Service immediately,
                without prior notice or liability, under our sole discretion, for any reason
                whatsoever and without limitation, including but not limited to a breach of the Terms.
                </p>
            </section>

            <section id="contact" className="mb-12 scroll-mt-32">
                <h3 className="text-2xl font-bold text-foreground mb-4">7. Contact Us</h3>
                <div className="bg-card text-card-foreground rounded-xl p-8 relative overflow-hidden bg-slate-900 text-white">
                <div className="relative z-10">
                    <p className="mb-6 opacity-90">
                    If you have questions or comments about this policy, you may email us at{' '}
                    <Link
                        href="#"
                        className="text-primary hover:text-white underline decoration-primary underline-offset-4"
                    >
                        legal@wihda.org
                    </Link>{' '}
                    or by post to:
                    </p>
                    <address className="not-italic opacity-80 mb-6">
                    Wihda Legal Dept.
                    <br />
                    Zurichbergstrasse 23
                    <br />
                    8044 Zurich
                    <br />
                    Switzerland
                    </address>
                    <Button className="bg-primary hover:bg-primary/90 text-white font-medium transition-colors">
                    Open Support Ticket
                    </Button>
                </div>
                <div className="absolute right-0 bottom-0 opacity-10 transform translate-x-1/4 translate-y-1/4 pointer-events-none">
                    <span className="material-icons text-[16rem]">gavel</span>
                </div>
                </div>
            </section>
            </div>
        </CardContent>
      </Card>
    </div>
  );
}
