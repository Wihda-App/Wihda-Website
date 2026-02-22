'use client';

import { useToast } from '@/hooks/use-toast';
import { Toast, ToastClose, ToastDescription, ToastProvider, ToastTitle, ToastViewport } from '@/components/ui/toast';
export function Toaster({
  dict
}: {
  dict: any;
}) {
  const {
    toasts
  } = useToast();
  return <ToastProvider dict={dict}>
      {toasts.map(function ({
      id,
      title,
      description,
      action,
      ...props
    }) {
      return <Toast key={id} {...props} dict={dict}>
            <div className="grid gap-1">
              {title && <ToastTitle dict={dict}>{title}</ToastTitle>}
              {description && <ToastDescription dict={dict}>{description}</ToastDescription>}
            </div>
            {action}
            <ToastClose dict={dict} />
          </Toast>;
    })}
      <ToastViewport dict={dict} />
    </ToastProvider>;
}