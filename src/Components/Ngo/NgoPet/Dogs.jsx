export default function Dogs() {
  return (
    <section className="ftco-section">
      <div className="container">
        <div className="row">

          {/* Beagle */}
          <div className="col-md-4 ftco-animate">
            <div
              className="work mb-4 img d-flex align-items-end"
              style={{
                backgroundImage: "url(/assets/images/gallery-5.jpg)",
                height: "300px",
              }}
            >
              <a
                href="/assets/images/gallery-5.jpg"
                className="icon image-popup d-flex justify-content-center align-items-center"
              >
                <span className="fa fa-expand" />
              </a>
            </div>
            <div className="desc text-center mt-2">
              <h2 style={{ color: 'green', fontWeight: 'bold' }}>Beagle</h2>
              <p style={{ color: 'green', fontWeight: 'bold' }}>
                Price: ₹8,000
              </p>
            </div>
          </div>

          {/* Pug */}
          <div className="col-md-4 ftco-animate">
            <div
              className="work mb-4 img d-flex align-items-end"
              style={{
                backgroundImage: "url(/assets/images/gallery-6.jpg)",
                height: "300px",
              }}
            >
              <a
                href="/assets/images/gallery-6.jpg"
                className="icon image-popup d-flex justify-content-center align-items-center"
              >
                <span className="fa fa-expand" />
              </a>
            </div>
            <div className="desc text-center mt-2">
              <h2 style={{ color: 'green', fontWeight: 'bold' }}>Pug</h2>
              <p style={{ color: 'green', fontWeight: 'bold' }}>
                Price: ₹5,000
              </p>
            </div>
          </div>

          {/* British Shorthair */}
          <div className="col-md-4 ftco-animate">
            <div
              className="work mb-4 img d-flex align-items-end"
              style={{
                backgroundImage: "url(/assets/images/gallery-7.jpg)",
                height: "300px",
              }}
            >
              <a
                href="/assets/images/gallery-7.jpg"
                className="icon image-popup d-flex justify-content-center align-items-center"
              >
                <span className="fa fa-expand" />
              </a>
            </div>
            <div className="desc text-center mt-2">
              <h2 style={{ color: 'green', fontWeight: 'bold' }}>British Shorthair</h2>
              <p style={{ color: 'green', fontWeight: 'bold' }}>
                Price: ₹6,000
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
