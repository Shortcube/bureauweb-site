const Container = ({ children, className = '', id = '' }) => {
  return (
    <div 
      id={id}
      className={`section-container scroll-mt-header ${className}`}
    >
      {children}
    </div>
  )
}

export default Container
