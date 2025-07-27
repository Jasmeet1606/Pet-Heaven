export default function Cats() {
  return (
    <section className="ftco-section">
      <div className="container">
        <div className="row">
          {/* Persian Cat */}
          <div className="col-md-4 ftco-animate">
            <div
              className="work mb-4 img d-flex align-items-end"
              style={{ backgroundImage: "url(/assets/images/gallery-1.jpg)" }}
            >
              <a
                href="/assets/images/gallery-1.jpg"
                className="icon image-popup d-flex justify-content-center align-items-center"
              >
                <span className="fa fa-expand" />
              </a>
            </div>
            <div className="desc w-100 px-4 text-center">
              <h2 style={{ color: 'green', fontWeight: 'bold' }}>
                <a href="work-single.html" style={{ color: 'green', fontWeight: 'bold' }}>
                  Persian Cat
                </a>
              </h2>
              <p style={{ color: 'green', fontWeight: 'bold' }}>Price: ₹5,500</p>
            </div>
          </div>

          {/* Sphynx Cat */}
          <div className="col-md-4 ftco-animate">
            <div
              className="work mb-4 img d-flex align-items-end"
              style={{ backgroundImage: "url(/assets/images/gallery-3.jpg)" }}
            >
              <a
                href="/assets/images/gallery-3.jpg"
                className="icon image-popup d-flex justify-content-center align-items-center"
              >
                <span className="fa fa-expand" />
              </a>
            </div>
            <div className="desc w-100 px-4 text-center">
              <h2 style={{ color: 'green', fontWeight: 'bold' }}>
                <a href="work-single.html" style={{ color: 'green', fontWeight: 'bold' }}>
                  Sphynx Cat
                </a>
              </h2>
              <p style={{ color: 'green', fontWeight: 'bold' }}>Price: ₹5,000</p>
            </div>
          </div>

          {/* British Shorthair */}
          <div className="col-md-4 ftco-animate">
            <div
              className="work mb-4 img d-flex align-items-end"
              style={{ backgroundImage: "url(/assets/images/gallery-4.jpg)" }}
            >
              <a
                href="/assets/images/gallery-4.jpg"
                className="icon image-popup d-flex justify-content-center align-items-center"
              >
                <span className="fa fa-expand" />
              </a>
            </div>
            <div className="desc w-100 px-4 text-center">
              <h2 style={{ color: 'green', fontWeight: 'bold' }}>
                <a href="work-single.html" style={{ color: 'green', fontWeight: 'bold' }}>
                  British Shorthair
                </a>
              </h2>
              <p style={{ color: 'green', fontWeight: 'bold' }}>Price: ₹6,000</p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
