
const Heading = ( {heading, text, note}) => {
    return (
    <div className="header-container">
         <h1 className="main-heading">{heading}</h1>
         <p className="paragraph-text">{text}</p>
         <p className="note-text"><strong>Note!</strong> {note}</p>
    </div>
    )
}
export default Heading