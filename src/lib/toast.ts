import { toast, ToasterProps } from 'sonner'

export function notifySuccess (message: string, options?: ToasterProps): string | number {
  return toast.success(message, options)
}

export function notifyWarn (message: string, options?: ToasterProps): string | number {
  return toast.warning(message, options)
}

export function notifyError (message: string, options?: ToasterProps): string | number {
  return toast.error(message, options)
}
