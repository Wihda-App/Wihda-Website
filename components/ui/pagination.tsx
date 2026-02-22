import * as React from 'react';
import { ChevronLeftIcon, ChevronRightIcon, MoreHorizontalIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button, buttonVariants } from '@/components/ui/button';
function Pagination({
  className,
  ...props,
  dict
}: React.ComponentProps<'nav'>) {
  return <nav role="navigation" aria-label="pagination" data-slot="pagination" className={cn('mx-auto flex w-full justify-center', className)} {...props} />;
}
function PaginationContent({
  className,
  ...props,
  dict
}: React.ComponentProps<'ul'>) {
  return <ul data-slot="pagination-content" className={cn('flex flex-row items-center gap-1', className)} {...props} />;
}
function PaginationItem({
  ...props,
  dict
}: React.ComponentProps<'li'>) {
  return <li data-slot="pagination-item" {...props} />;
}
type PaginationLinkProps = {
  isActive?: boolean;
} & Pick<React.ComponentProps<typeof Button>, 'size'> & React.ComponentProps<'a'>;
function PaginationLink({
  className,
  isActive,
  size = 'icon',
  ...props,
  dict
}: PaginationLinkProps) {
  return <a aria-current={isActive ? 'page' : undefined} data-slot="pagination-link" data-active={isActive} className={cn(buttonVariants({
    variant: isActive ? 'outline' : 'ghost',
    size
  }), className)} {...props} />;
}
function PaginationPrevious({
  className,
  ...props,
  dict
}: React.ComponentProps<typeof PaginationLink>) {
  return <PaginationLink aria-label="Go to previous page" size="default" className={cn('gap-1 px-2.5 sm:pl-2.5', className)} {...props} dict={dict}>
      <ChevronLeftIcon dict={dict} />
      <span className="hidden sm:block">{dict.PaginationPrevious.text_1}</span>
    </PaginationLink>;
}
function PaginationNext({
  className,
  ...props,
  dict
}: React.ComponentProps<typeof PaginationLink>) {
  return <PaginationLink aria-label="Go to next page" size="default" className={cn('gap-1 px-2.5 sm:pr-2.5', className)} {...props} dict={dict}>
      <span className="hidden sm:block">{dict.PaginationNext.text_1}</span>
      <ChevronRightIcon dict={dict} />
    </PaginationLink>;
}
function PaginationEllipsis({
  className,
  ...props,
  dict
}: React.ComponentProps<'span'>) {
  return <span aria-hidden data-slot="pagination-ellipsis" className={cn('flex size-9 items-center justify-center', className)} {...props}>
      <MoreHorizontalIcon className="size-4" dict={dict} />
      <span className="sr-only">{dict.PaginationEllipsis.text_1}</span>
    </span>;
}
export { Pagination, PaginationContent, PaginationLink, PaginationItem, PaginationPrevious, PaginationNext, PaginationEllipsis };