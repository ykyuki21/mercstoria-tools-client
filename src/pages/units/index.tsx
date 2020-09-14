import { NextPage, GetStaticProps } from 'next'
import type { Unit } from '~/interfaces/unit'

type Props = {
  units: Unit[]
}

const Units: NextPage<Props> = props => {
  return (
    <ul>
      {props.units.map((unit) => (
        <li>{unit.id}: {unit.name} </li>
      ))}
    </ul>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('http://127.0.0.1:4010/units')
  const units: Unit[] = await res.json()

  return {
    props: {
      units,
    },
  }
}

export default Units