export default function HomePage() {
  return (
    <div className="container" style={{textAlign: 'center', padding: '20px'}}>
      <div className="row">
        <div className="col-sm-11">
          <h1>Hi, I'm Krishnendu K R</h1>
            <p>Welcome to my portfolio. I'm a full stack developer based in Japan.</p>
        </div>
        <div className="col-sm-4">
            <img className="photo img-fluid" src="/images/photo.png" alt="My Photo" />
        </div>
      </div>
    </div>
  );
}
