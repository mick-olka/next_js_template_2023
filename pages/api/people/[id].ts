import { resNotFound, _return_promise_data } from '@/utils/helpers'
import { I_Person, ReqT, ResT } from '@/utils/types'

const getById = async (id: string): Promise<I_Person> => {
  return _return_promise_data({ id: id, name: 'Person ' + id })
}

const create = (data: I_Person): Promise<I_Person> => {
  return _return_promise_data(data)
}

const update = (id: string, data: I_Person): Promise<I_Person> => {
  return _return_promise_data({ id: id, name: data.name })
}

const deleteById = (id: string): Promise<I_Person> => {
  return _return_promise_data({ id: id, name: 'Item ' + id })
}

export default async function handler(req: ReqT, res: ResT<{ id: string; name: string }>) {
  try {
    const { query, method } = req
    let dat = null
    const bodyData = req.body.data
    switch (method) {
      case 'GET':
        dat = await getById(String(query.id))
        if (!dat) resNotFound(res)
        else res.status(200).json(dat)
        break
      case 'POST':
        dat = await create(bodyData)
        res.status(201).json(dat)
        break
      case 'PATCH':
        dat = await update(String(query.id), bodyData)
        if (!dat) resNotFound(res)
        else res.status(200).json(dat)
        break
      case 'DELETE':
        dat = await deleteById(String(query.id))
        if (!dat) resNotFound(res)
        else res.status(200).json(dat)
        break
      default:
        res.setHeader('Allow', ['GET', 'POST', 'PATCH', 'DELETE'])
        res.status(405).end(`Method ${method} Not Allowed`)
    }
  } catch (e) {
    res.status(500).json({ error: String(e) })
  }
}
