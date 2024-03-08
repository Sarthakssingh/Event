// Write your code here
import './index.css'

const ActiveEventRegistrationDetails = props => {
  const {result} = props
  console.log(result)

  const eventStatus = {
    closed: 'REGISTRATIONS_CLOSED',
    registered: 'REGISTERED',
    yetToRegister: 'YET_TO_REGISTER',
    initial: 'INITIAL',
  }

  switch (result) {
    case eventStatus.registered:
      return (
        <div className="statusContainer">
          <img
            className="already"
            src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
            alt="registered"
          />
          <h2>You have already registered for the event</h2>
        </div>
      )
    case eventStatus.closed:
      return (
        <div className="statusContainer">
          <img
            className="closed"
            src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
            alt="registrations closed"
          />
          <h1>Registrations Are Closed Now!</h1>
          <p>Stay tuned. We will reopen</p>
        </div>
      )
    case eventStatus.yetToRegister:
      return (
        <div className="statusContainer">
          <img
            className="yetToRegister"
            src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
            alt="yet to register"
          />
          <p>
            A live performance brings so much to your relationship with dance
          </p>
          <button>Register Here</button>
        </div>
      )
    case eventStatus.initial:
      return (
        <div>
          <p>Click on an event, to view its registration details</p>
        </div>
      )
    default:
      return null
  }
}

export default ActiveEventRegistrationDetails
