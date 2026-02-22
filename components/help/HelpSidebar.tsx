'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarFooter } from '@/components/ui/sidebar';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { HELP_CATEGORIES, getCategoryForArticle } from '@/lib/help-data';
export function HelpSidebar({
  dict
}: {
  dict: any;
}) {
  const pathname = usePathname();

  // Determine which category is active:
  // - Direct match: /help/getting-started
  // - Article child: /help/article/verify-residency → resolve to its parent category
  const articleSlugMatch = pathname.match(/^\/help\/article\/(.+)$/);
  const parentCategory = articleSlugMatch ? getCategoryForArticle(articleSlugMatch[1]) : null;
  return <Sidebar className="top-0 h-[calc(100svh-4rem)] border-r bg-background" collapsible="offcanvas" side="left" dict={dict}>
      <SidebarContent dict={dict}>
        <SidebarGroup dict={dict}>
          <SidebarGroupLabel dict={dict}>{dict.HelpSidebar.text_1}</SidebarGroupLabel>
          <SidebarGroupContent dict={dict}>
            <SidebarMenu dict={dict}>
              {HELP_CATEGORIES.map(cat => {
              const isActive = pathname === cat.href || parentCategory != null && parentCategory.slug === cat.slug;
              return <SidebarMenuItem key={cat.slug} dict={dict}>
                    <SidebarMenuButton asChild isActive={isActive} tooltip={cat.label} className="h-12" dict={dict}>
                      <Link href={cat.href}>
                        <span className={`material-icons text-xl ${isActive ? 'text-primary' : 'text-muted-foreground'}`}>
                          {cat.icon}
                        </span>
                        <span className="text-base font-medium">
                          {cat.label}
                        </span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>;
            })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4" dict={dict}>
        <Card className="border-border bg-background shadow-sm" dict={dict}>
          <CardContent className="p-4" dict={dict}>
            <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-secondary mb-3">
              <span className="material-icons text-xl">{dict.HelpSidebar.text_2}</span>
            </div>
            <h4 className="font-bold text-foreground mb-1 text-sm">{dict.HelpSidebar.text_3}</h4>
            <p className="text-xs text-muted-foreground mb-3 leading-relaxed">{dict.HelpSidebar.text_4}</p>
            <Button variant="outline" className="w-full font-bold text-xs" size="sm" dict={dict}>{dict.HelpSidebar.text_5}</Button>
          </CardContent>
        </Card>
      </SidebarFooter>
    </Sidebar>;
}