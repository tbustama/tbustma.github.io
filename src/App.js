import { useEffect, useRef, useState } from "react";
import "./App.css";
import ReactPlayer from "react-player";
function App() {
  const [modalSource, setModalSource] = useState("");
  const videoRef = useRef(undefined);
  const buttonRef = useRef(undefined);
  useEffect(() => {
    videoRef.current.defaultMuted = true;
    videoRef.current.play = true;
  });

  const handleClick = () => {
    if (!buttonRef.current.classList.contains("collapsed")) {
      buttonRef.current.classList.add("collapsed");
      const element = document.getElementById("navbarNavAltMarkup");
      element.classList.remove("collapse");
      element.classList.remove("show");
      element.classList.add("collapsing");
      setTimeout(() => {
        element.classList.add("collapse");
        element.classList.remove("collapsing");
      }, 300);
    }
  };

  const handleImage = (e) => {
    setModalSource(e.target.src);
  };
  return (
    <div className="App">
      <header className="App-header">
        <nav
          class="navbar fixed-top navbar-expand-lg bg-body-tertiary garamond"
          id="Nav"
        >
          <div class="container-fluid">
            <button
              ref={buttonRef}
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav space-between">
                <a
                  class="nav-link"
                  aria-current="page"
                  href="#"
                  onClick={handleClick}
                >
                  HOME
                </a>
                <a class="nav-link" href="#OurStory" onClick={handleClick}>
                  OUR STORY
                </a>
                <a class="nav-link" href="#Event" onClick={handleClick}>
                  EVENT DETAILS
                </a>
                <a class="nav-link" href="#Travel" onClick={handleClick}>
                  TRAVEL & STAY
                </a>
                <a class="nav-link" href="#FAQs" onClick={handleClick}>
                  FAQs
                </a>
                <a
                  class="nav-link"
                  href="https://overthemoon.com/apps/registry/petrusha-bustamante-54b2"
                  target="_blank"
                  onClick={handleClick}
                >
                  REGISTRY
                </a>
                <a class="nav-link" href="#Gallery" onClick={handleClick}>
                  GALLERY
                </a>
              </div>
            </div>
            <div class="logo">
              <img
                width="95px"
                height="95px"
                alt="logo"
                src={process.env.PUBLIC_URL + "/logo.png"}
              />
            </div>
            <div class="nav-link sorry" href="#">
              <div class="cinzel text-center">03.09.25</div>
              <div class="garamond">RANCHO SHIBUMI, TODOS SANTOS, MX</div>
            </div>
          </div>
        </nav>
      </header>
      <main>
        <div class="" id="Our">
          <video ref={videoRef} loop autoPlay muted playsInline>
            <source
              src={process.env.PUBLIC_URL + "/videos/beach.mp4"}
              type="video/mp4"
            />
          </video>

          <div id="OurStory"></div>
        </div>
        <section class="mt-4">
          <div class="d-lg-flex text-center">
            <div>
              <img
                class="first-img"
                src={process.env.PUBLIC_URL + "/ring.png"}
              />
            </div>
            <div class="p-4 first-section">
              <h3 class="seasons">OUR STORY</h3>
              <p class="garamond">
                On a late evening in March 2019, Kendall and her girlfriends
                walked into Silver Clouds, making their final stop for the
                night. In the lively crowd of the infamous San Francisco karaoke
                bar, Kendall unexpectedly found herself chatting with a stranger
                (whom she found quite charming). Mistaking him for her friend's
                Hinge Date, Taylor took on the role of "Chris" until Kendall's
                friends quickly clarified the mix-up. Unfazed by the confusion,
                Taylor and Kendall spend the rest of the evening flirting and
                dancing, and from that moment on, the rest is history!
              </p>
            </div>
            <div class="p-4 first-section">
              <h3 class="seasons">HOW HE ASKED</h3>
              <p class="garamond">
                On a late evening in March 2019, Kendall and her girlfriends
                walked into Silver Clouds, making their final stop for the
                night. In the lively crowd of the infamous San Francisco karaoke
                bar, Kendall unexpectedly found herself chatting with a stranger
                (whom she found quite charming). Mistaking him for her friend's
                Hinge Date, Taylor took on the role of "Chris" until Kendall's
                friends quickly clarified the mix-up. Unfazed by the confusion,
                Taylor and Kendall spend the rest of the evening flirting and
                dancing, and from that moment on, the rest is history!{" "}
              </p>
              <div id="Event"></div>
            </div>
          </div>
        </section>
        <section>
          <div class="seasons-it px-5 fs-5">
            please join us as we walk down the isle
          </div>
        </section>
        <section>
          <div class="d-lg-flex space-between text-center">
            <div>
              <h3 class="seasons title">CEREMONY</h3>
              <p class="garamond">on the beach</p>
              <img
                src={process.env.PUBLIC_URL + "/ceremony.png"}
                alt="ceremony"
                width="90%"
              />
            </div>
            <div>
              <h3 class="seasons title"> COCKTAIL HOUR</h3>
              <p class="garamond">at the palapa</p>
              <img
                src={process.env.PUBLIC_URL + "/cocktail.png"}
                alt="cocktail"
                width="90%"
              />
            </div>
            <div>
              <h3 class="seasons title">RECEPTION</h3>
              <p class="garamond">at the hacidena</p>
              <img
                id="Travel"
                src={process.env.PUBLIC_URL + "/reception.png"}
                alt="reception"
                width="90%"
              />
            </div>
          </div>
        </section>
        <section>
          <div class="d-lg-flex space-between text-center">
            <div class=" grid p-4 space-between">
              <div>
                <h3 class="seasons">HOTEL STAY</h3>
                <p class="garamond">
                  Please note, for your convenience, a room block has been
                  placed at the Corazón Cabo Resort & Spa. Special rates will be
                  available from March 6th to March 15th. To make a reservation,
                  please email reservations@corazoncabo.com or call 800-753-5069
                  and mention Taylor & Kendall Bustamante’s wedding or use the
                  code “2403KENDAL”
                </p>
              </div>
              <div class="middle-grid">
                <img
                  src={process.env.PUBLIC_URL + "/hotel.png"}
                  alt="reception"
                  width="90%"
                />
              </div>
            </div>
            <div class="grid space-between p-4">
              <h3 class="seasons">TRANSPORTATION</h3>
              <p class="garamond">
                Transportation will be provided from the Corazón Cabo Resort to
                the wedding venue in Todos Santos on Sunday, March 9th. Guests
                will be required to arrive to Rancho Shibumi venue via the
                provided shuttle or private transportation as there is limited
                parking at the property. Please check back closer to our date
                for departure times.
              </p>
              <div class="middle-grid">
                <img
                  src={process.env.PUBLIC_URL + "/transportation.png"}
                  alt="reception"
                  width="90%"
                />
              </div>
            </div>
            <div class="p-4">
              <h3 class="seasons">AIRPORT</h3>
              <p class="garamond">
                The closest airport is the SJD San José del Cabo International
                Airport. It is located 5 miles (about 22 minutes) from the
                Corazón Cabo Resort & Spa. Direct flights are available from
                most major cities in the Western and Southern United States. We
                recommend booking transportation from the airport to the resort
                through Cabo Airport Shuttle. Please note, Ubers are NOT
                available from the airport. * DO NOT FORGET YOUR PASSPORT *
              </p>
              <img
                src={process.env.PUBLIC_URL + "/plane.png"}
                alt="reception"
                width="90%"
                id="FAQs"
              />
            </div>
          </div>
        </section>
        <section>
          <div class="seasons-it px-5 fs-5">frequently asked questions</div>
        </section>
        <section>
          <div class="d-sm-flex flex-wrap space-between text-center px-5">
            <div class="p-4">
              <h4 class="seasons">
                WHERE ARE THE CEREMONY & RECEPTION TAKING PLACE?
              </h4>
              <p class="garamond">
                The Ceremony and Reception will both take place at Rancho
                Shibumi, a private property in Todos Santos, about 15 minutes
                outside of Cabo San Lucas. Please note both events will take
                place outdoors - a light jacket may be needed.
              </p>
            </div>
            <div class="p-4">
              <h4 class="seasons">AM I ALLOWED TO BRING A GUEST?</h4>
              <p class="garamond">
                Due to limited space, we are only able to accommodate those
                guests formally invited on your wedding invitation. If you
                received a plus one they will appear on your invite. Thank you
                for understanding!
              </p>
            </div>
            <div class="p-4">
              <h4 class="seasons">WILL TRANSPORTATION BE PROVIDED?</h4>
              <p class="garamond">
                Yes! We have a shuttle leaving from the Corazón Cabo Resort and
                Spa to and from the venue on Sunday, March 9th. Please check
                back closer to our date for departure times and additional
                details.
              </p>
            </div>
            <div class="p-4">
              <h4 class="seasons">PASSPORTS</h4>
              <p class="garamond">
                Do not forget your passport! Please double check to make sure
                your passport does not expire before September 2024 as you will
                not be permitted to travel within 6 months remaining of an
                expiration date. Passports can take up to 3 months to arrive, so
                please be sure to renew or apply for a passport as soon as
                possible.
              </p>
            </div>
            <div class="p-4">
              <h4 class="seasons">WHAT IS THE DRESS CODE?</h4>
              <p class="garamond">
                We would love to see our family & friends get dressed up for our
                big day! Dress code is formal attire for the evening. Gentlemen,
                think suit & tie. For Ladies, mid-length (below knee) or Full
                length dresses- thicker heels are recommended!
              </p>
            </div>
            <div class="p-4">
              <h4 class="seasons">GIFTS</h4>
              <p class="garamond">
                We are truly grateful for your presence on our special day, and
                your love and support mean the world to us. Your attendance is
                the greatest gift of all, so please do not feel obligated to
                give a gift!
              </p>
            </div>
            <div class="p-4">
              <h4 class="seasons">WHEN IS THE RSVP DEADLINE?</h4>
              <p class="garamond" id="Gallery">
                Please RSVP no later than January 1st, 2025. RSVP instructions
                will be given in the formal invitation. We can’t wait to
                celebrate our love with you!
              </p>
            </div>
          </div>
        </section>
        <section>
          <div>
            <div class="grid-4 text-center">
              <div class="p-2 g-col-6">
                <img
                  src={process.env.PUBLIC_URL + "/row1pic1.png"}
                  alt="row1"
                  width="90%"
                  onClick={(e) => handleImage(e)}
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                />
              </div>
              <div class="p-2 g-col-6">
                <img
                  src={process.env.PUBLIC_URL + "/row1pic2.png"}
                  alt="reception"
                  width="90%"
                  onClick={(e) => handleImage(e)}
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                />
              </div>
              <div class="p-2 g-col-6">
                <img
                  src={process.env.PUBLIC_URL + "/row1pic3.png"}
                  alt="reception"
                  width="90%"
                  onClick={(e) => handleImage(e)}
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                />
              </div>
              <div class="p-2 g-col-6">
                {" "}
                <img
                  src={process.env.PUBLIC_URL + "/row1pic4.png"}
                  alt="reception"
                  width="90%"
                  onClick={(e) => handleImage(e)}
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                />
              </div>
            </div>
            <div class="grid-3 text-center">
              <div class="p-2 g-col-4">
                <img
                  src={process.env.PUBLIC_URL + "/row2pic1.png"}
                  alt="reception"
                  width="90%"
                  onClick={(e) => handleImage(e)}
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                />
              </div>
              <div class="p-2 g-col-4">
                <img
                  src={process.env.PUBLIC_URL + "/row2pic2.png"}
                  alt="reception"
                  width="90%"
                  onClick={(e) => handleImage(e)}
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                />
              </div>
              <div class="p-2 g-col-4">
                <img
                  src={process.env.PUBLIC_URL + "/row2pic3.png"}
                  alt="reception"
                  width="90%"
                  onClick={(e) => handleImage(e)}
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                />
              </div>
            </div>
            <div class="grid-4 text-center">
              <div class="p-2 g-col-6">
                <img
                  src={process.env.PUBLIC_URL + "/row3pic1.png"}
                  alt="row3"
                  width="90%"
                  onClick={(e) => handleImage(e)}
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                />
              </div>
              <div class="p-2 g-col-6">
                <img
                  src={process.env.PUBLIC_URL + "/row3pic2.png"}
                  alt="reception"
                  width="90%"
                  onClick={(e) => handleImage(e)}
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                />
              </div>
              <div class="p-2 g-col-6">
                <img
                  src={process.env.PUBLIC_URL + "/row3pic3.png"}
                  alt="reception"
                  width="90%"
                  onClick={(e) => handleImage(e)}
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                />
              </div>
              <div class="p-2 g-col-6">
                {" "}
                <img
                  src={process.env.PUBLIC_URL + "/row3pic4.png"}
                  alt="reception"
                  width="90%"
                  onClick={(e) => handleImage(e)}
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                />
              </div>
            </div>
            <div class="grid-3 text-center">
              <div class="p-2 g-col-4">
                <img
                  src={process.env.PUBLIC_URL + "/row4pic1.png"}
                  alt="reception"
                  width="90%"
                  onClick={(e) => handleImage(e)}
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                />
              </div>
              <div class="p-2 g-col-4">
                <img
                  src={process.env.PUBLIC_URL + "/row4pic2.png"}
                  alt="reception"
                  width="90%"
                  onClick={(e) => handleImage(e)}
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                />
              </div>
              <div class="p-2 g-col-4">
                <img
                  src={process.env.PUBLIC_URL + "/row4pic3.png"}
                  alt="reception"
                  width="90%"
                  onClick={(e) => handleImage(e)}
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                />
              </div>
            </div>
            <div class="grid-4 text-center">
              <div class="p-2 g-col-6">
                <img
                  src={process.env.PUBLIC_URL + "/row5pic1.png"}
                  alt="row3"
                  width="90%"
                  onClick={(e) => handleImage(e)}
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                />
              </div>
              <div class="p-2 g-col-6">
                <img
                  src={process.env.PUBLIC_URL + "/row5pic2.png"}
                  alt="reception"
                  width="90%"
                  onClick={(e) => handleImage(e)}
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                />
              </div>
              <div class="p-2 g-col-6">
                <img
                  src={process.env.PUBLIC_URL + "/row5pic3.png"}
                  alt="reception"
                  width="90%"
                  onClick={(e) => handleImage(e)}
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                />
              </div>
              <div class="p-2 g-col-6">
                {" "}
                <img
                  src={process.env.PUBLIC_URL + "/row5pic4.png"}
                  alt="reception"
                  width="90%"
                  onClick={(e) => handleImage(e)}
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                />
              </div>
            </div>
            <div class="grid-3 text-center">
              <div class="p-2 g-col-4">
                <img
                  src={process.env.PUBLIC_URL + "/row6pic1.png"}
                  alt="reception"
                  width="90%"
                  onClick={(e) => handleImage(e)}
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                />
              </div>
              <div class="p-2 g-col-4">
                <img
                  src={process.env.PUBLIC_URL + "/row6pic2.png"}
                  alt="reception"
                  width="90%"
                  onClick={(e) => handleImage(e)}
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                />
              </div>
              <div class="p-2 g-col-4">
                <img
                  src={process.env.PUBLIC_URL + "/row6pic3.png"}
                  alt="reception"
                  width="90%"
                  onClick={(e) => handleImage(e)}
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                />
              </div>
            </div>
          </div>
        </section>

        <div
          class="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div>
                <img
                  id="Modal-Image"
                  src={modalSource}
                  alt="reception"
                  width="100%"
                />
                <button
                  type="button"
                  class="btn-close"
                  id="modal-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
