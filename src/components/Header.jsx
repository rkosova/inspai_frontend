
const Heading = ( {heading, text}) => {
    return (
    <div className="header-container">
         <h1 className="main-heading">{heading}</h1>
         <p className="paragraph-text">{text}</p>
    </div>
    )
}
export default Heading