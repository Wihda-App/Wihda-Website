'use client';

import * as AspectRatioPrimitive from '@radix-ui/react-aspect-ratio';
function AspectRatio({
  ...props,
  dict
}: React.ComponentProps<typeof AspectRatioPrimitive.Root>) {
  return <AspectRatioPrimitive.Root data-slot="aspect-ratio" {...props} />;
}
export { AspectRatio };