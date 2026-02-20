'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
} from '@/components/ui/sidebar';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { HELP_CATEGORIES, getCategoryForArticle } from '@/lib/help-data';

export function HelpSidebar() {
  const pathname = usePathname();

  // Determine which category is active:
  // - Direct match: /help/getting-started
  // - Article child: /help/article/verify-residency → resolve to its parent category
  const articleSlugMatch = pathname.match(/^\/help\/article\/(.+)$/);
  const parentCategory = articleSlugMatch
    ? getCategoryForArticle(articleSlugMatch[1])
    : null;

  return (
    <Sidebar
      className="top-0 h-[calc(100svh-4rem)] border-r bg-background"
      collapsible="offcanvas"
      side="left"
    >
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Browse by Topic</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {HELP_CATEGORIES.map((cat) => {
                const isActive =
                  pathname === cat.href ||
                  (parentCategory != null && parentCategory.slug === cat.slug);

                return (
                  <SidebarMenuItem key={cat.slug}>
                    <SidebarMenuButton
                      asChild
                      isActive={isActive}
                      tooltip={cat.label}
                      className="h-12"
                    >
                      <Link href={cat.href}>
                        <span
                          className={`material-icons text-xl ${
                            isActive
                              ? 'text-primary'
                              : 'text-muted-foreground'
                          }`}
                        >
                          {cat.icon}
                        </span>
                        <span className="text-base font-medium">
                          {cat.label}
                        </span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4">
        <Card className="border-border bg-background shadow-sm">
          <CardContent className="p-4">
            <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-secondary mb-3">
              <span className="material-icons text-xl">support</span>
            </div>
            <h4 className="font-bold text-foreground mb-1 text-sm">
              Need direct help?
            </h4>
            <p className="text-xs text-muted-foreground mb-3 leading-relaxed">
              Our support team is available Mon-Fri.
            </p>
            <Button
              variant="outline"
              className="w-full font-bold text-xs"
              size="sm"
            >
              Contact Support
            </Button>
          </CardContent>
        </Card>
      </SidebarFooter>
    </Sidebar>
  );
}
