import './style.css';

const BioCard = ({ backgroundImageClass, text }) =>{
  return (
    <main className={`page-content ${backgroundImageClass}`}>
      <div className="card">
        <div className="content">
          <p className="copy">{text}</p>
        </div>
      </div>
    </main>
  )
}

export default BioCard