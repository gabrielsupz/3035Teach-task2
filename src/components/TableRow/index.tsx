import { FilmProps } from '../../interfaces/FilmProps'

export function TableRow({ id, genre, name, imgLink }: FilmProps) {
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
