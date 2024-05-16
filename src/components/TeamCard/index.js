import {Link} from 'react-router-dom'

const TeamCard = props => {
  const {teamDetails} = props
  const {name, id, teamImageURL} = teamDetails
  return (
    <li>
      <Link to={`/team-matches/${id}`}>
        <img src={teamImageURL} alt={name} />
        <p>{name}</p>
      </Link>
    </li>
  )
}
export default TeamCard
