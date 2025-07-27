import { Link } from "react-router-dom";

export default function PetListing() {
  return (
    <>
      <section
        className="hero-wrap hero-wrap-2"
        style={{ backgroundImage: 'url("/assets/images/bg_2.jpg")' }}
        data-stellar-background-ratio="0.5"
      >
        <div className="overlay" />
        <div className="container">
          <div className="row no-gutters slider-text align-items-end">
            <div className="col-md-9 ftco-animate pb-5">
              <p className="breadcrumbs mb-2">
                <span className="mr-2">
                  <Link to={"/ngo"}>
                    PetListing <i className="ion-ios-arrow-forward" />
                  </Link>
                </span>
                <span>
                  <i className="ion-ios-arrow-forward" />
                </span>
              </p>
              <h1 className="mb-0 bread"></h1>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section bg-light ftco-no-pt ftco-intro">
        <div className="container">
          <div className="row">
            {/* Dogs */}
            <div className="col-md-4 d-flex align-self-stretch px-4 ftco-animate">
              <div className="d-block services text-center">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="flaticon-blind" />
                </div>
                <div className="media-body">
                  <h1>Dogs</h1>
                  <Link
                    to={"/ngo/pet/dogs"}
                    className="btn-custom d-flex align-items-center justify-content-center"
                  >
                    <span className="fa fa-chevron-right" />
                    <i className="sr-only">Read more</i>
                  </Link>
                </div>
              </div>
            </div>

            {/* Cats */}
            <div className="col-md-4 d-flex align-self-stretch px-4 ftco-animate">
              <div className="d-block services text-center">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="flaticon-dog-eating" />
                </div>
                <div className="media-body">
                  <h1>Cats</h1>
                  <Link
                    to={"/ngo/pet/cats"}
                    className="btn-custom d-flex align-items-center justify-content-center"
                  >
                    <span className="fa fa-chevron-right" />
                    <i className="sr-only">Read more</i>
                  </Link>
                </div>
              </div>
            </div>

            {/* Add Pet Details */}
            <div className="col-md-4 d-flex align-self-stretch px-4 ftco-animate">
              <div className="d-block services text-center">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="flaticon-veterinarian" />
                </div>
                <div className="media-body">
                  <h1>Add Pet Details</h1>
                  <Link
                    to={"/ngo/pet/details"}
                    className="btn-custom d-flex align-items-center justify-content-center"
                  >
                    <span className="fa fa-chevron-right" />
                    <i className="sr-only">Read more</i>
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
