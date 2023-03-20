import { _return_promise_data } from '@/utils/helpers'
import { I_Person, ReqT, ResT } from '@/utils/types'

const getList = async (): Promise<I_Person[]> => {
  return _return_promise_data([
    { id: '1', name: 'Person 1' },
    { id: '2', name: 'Person 2' },
  ])
}

export default async function handler(req: ReqT, res: ResT<I_Person[]>) {
  try {
    const list = await getList()
    res.status(200).json(list)
  } catch (e) {
    res.status(500).json({ error: String(e) })
  }
}
