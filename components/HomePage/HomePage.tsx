import React from 'react'

import * as S from './styles'

import { I_Person } from '@/utils/types'

interface I_Props {
  list: I_Person[]
}

export const HomePage = ({ list }: I_Props) => {
  return (
    <S.Pane>
      <h2>HomePage</h2>
      <div>
        {list.map((i) => (
          <div key={i.id}>{i.name}</div>
        ))}
      </div>
    </S.Pane>
  )
}
