import './index.css'

const HistoryItem = props => {
  const {eachHistory, deleteTodo} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = eachHistory

  const onDelete = () => {
    deleteTodo(id)
  }

  return (
    <li className="list-item">
      <div className="logo-container">
        <p className="timeAccessed-para">{timeAccessed}</p>
        <img src={logoUrl} className="logo-style" alt="domain logo" />
        <p className="title-style">{title}</p>
        <p className="url-style">{domainUrl}</p>
      </div>
      <button
        type="button"
        className="btn"
        data-testid="delete"
        onClick={onDelete}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          className="delete-icon"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default HistoryItem
