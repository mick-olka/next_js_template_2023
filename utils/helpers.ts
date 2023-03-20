import { NextApiResponse } from 'next'
import { toast } from 'react-toastify'

export const toasterPending = <T>(
  method: Promise<T>,
  pending?: string,
  error?: string,
  success?: string,
): Promise<T> => {
  return toast.promise(method, {
    pending: pending || 'Loading...',
    error: {
      render({ data }) {
        console.log(data)
        return error || 'Error'
      },
    },
    success: success || 'Success',
  })
}

export const resNotFound = (res: NextApiResponse<{ error: string }>) => {
  return res.status(404).json({ error: 'Not Found' })
}

export const _return_promise_data = <T>(data: T): Promise<T> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(data), 1000)
  })
}
