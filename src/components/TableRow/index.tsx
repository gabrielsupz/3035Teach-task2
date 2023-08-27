import { MovieProps } from '../../interfaces/MovieProps'

export function TableRow({ id, genre, name, imgLink }: MovieProps) {
  return (
    <tr>
      <td>{id}</td>
      <td>{genre}</td>
      <td>{name}</td>
      <td>
        <img src={imgLink} alt={`Imagem do filme ${name}`} />
      </td>
    </tr>
  )
}
