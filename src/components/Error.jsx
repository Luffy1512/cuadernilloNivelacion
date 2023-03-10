
const Error = ({children, error}) => {
    // console.log(error);
    return (
      <div className={`mensaje ${error==='error' ? 'danger' : 'pass'}`}>
        {children}
      </div>
    )
}
  
export default Error