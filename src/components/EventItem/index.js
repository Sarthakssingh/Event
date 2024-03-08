// Write your code here
import './index.css'

const EventItem = props => {
  const {eachItem, onClickStatus} = props
  const {imageUrl, name, location, registrationStatus} = eachItem

  const handleClick = () => {
    onClickStatus(registrationStatus)
  }

  return (
    <li className="itemContainer">
      {/* <button className="button" onClick={handleClick}> */}
      <img
        className="itemImage"
        src={imageUrl}
        alt="event"
        onClick={handleClick}
      />
      {/* </button> */}

      <p className="itemName">{name}</p>
      <p className="itemLocation">{location}</p>
    </li>
  )
}

export default EventItem
