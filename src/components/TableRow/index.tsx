import { MovieProps } from '../../interfaces/MovieProps'
import { useState } from 'react'
import * as S from './style'
export type TaskProps = {
  task: 'firstTask' | 'secondTask'
}
export function TableRow({
  id,
  genre,
  name,
  imgLink,
  task
}: MovieProps & TaskProps) {
  const [isChecked, setIsChecked] = useState(false)

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked)
    if (!isChecked) {
      alert(`Filme ${name} selecionado`)
    }
  }

  if (task === 'secondTask') {
    return (
      <S.StyledRow>
        <td>{id}</td>
        <td>{genre}</td>
        <td>{name}</td>
        <td>
          <img src={imgLink} alt={`Imagem do filme ${name}`} />
        </td>
        <td>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
        </td>
      </S.StyledRow>
    )
  }

  return (
    <S.StyledRow>
      <td>{id}</td>
      <td>{genre}</td>
      <td>{name}</td>
      <td>
        <img src={imgLink} alt={`Imagem do filme ${name}`} />
      </td>
    </S.StyledRow>
  )
}
