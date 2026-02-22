import { SiteHeader } from "@/components/site-header";
export default function MarketingLayout({
  children,
  dict
}: {
  children: React.ReactNode;
  dict: any;
}) {
  return <section>
            <SiteHeader dict={dict} />
            {children}
        </section>;
}