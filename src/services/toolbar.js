export const handleClick = (event, type, action) => {
  action({ type }) 
  event.target.blur()
}