import "./App.css";
import "./Responsive.css";
import Typed from "react-typed";

let check = false;
const sidebar = document.getElementById("side-bar");
const navIcon = document.getElementById("nav-icon");

const myFunction = () => {
  if (!check) {
    sidebar.style.left = "-2rem";
    navIcon.classList.add("bx-x", "active");
    check = true;
  } else if (check == true) {
    sidebar.style.left = "-100rem";
    navIcon.classList.remove("bx-x", "active");
    check = false;
  }
};

const redirect = () => {
  let value = document.getElementById("value").value;
  if (value) {
    window.open("https://www.google.com/travel/search?q=" + value);
  } else {
    alert("Error: Place Name is Empty");
  }
};

function App() {
  return (
    <section className="header">
      <div className="container">
        <nav className="padding-top margin">
          <div className="content">
            <div className="h3">Xplore.</div>
          </div>
          <span className="nav-icon btn">
            <i
              class="bx bx-menu-alt-right"
              onClick={myFunction}
              id="nav-icon"
            ></i>
          </span>
          <div className="content" id="side-bar">
            <a href="https://www.tourmyindia.com">Travel Guide</a>
            <a href="https://www.makemytrip.com/tripideas/tourist-attractions">
              Famous Places
            </a>
            <a href="https://travelplanner.co.in">Planner</a>
            <a href="https://www.skyscanner.co.in" className="btn">
              Bookings <i class="bx bxs-plane"></i>
            </a>
          </div>
        </nav>

        <div className="banner margin">
          <div className="content">
            <h1>
              Beautiful Places to&nbsp;
              <Typed
                strings={["Explore.", "Visit."]}
                typeSpeed={40}
                backSpeed={50}
                attr="placeholder"
                loop
              >
                <input className="typed" type="text" />
              </Typed>
            </h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries.
            </p>
            <form>
              <input type="text" placeholder="Place Name" id="value" />
              <button onClick={redirect} className="btn">
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
