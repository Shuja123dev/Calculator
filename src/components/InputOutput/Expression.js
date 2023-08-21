import './Expression.css'

const Expression = ({ expression }) => {
  return (
    <div className='expression-container'>
      <input type="text" value={expression} readOnly />
    </div>
  )
}

export default Expression
