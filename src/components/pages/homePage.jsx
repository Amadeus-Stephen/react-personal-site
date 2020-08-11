import React, { Component } from "react";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <header>
          <div>
            <p>
              I usally dont use headers, if your wondering why this is so out of
              place
            </p>
          </div>
        </header>
        <section>
          <div className="container">
            <div className="card bg-dark col">
              <div className="card-body">
                <h5 className="text-info">In the Beginning</h5>
                <p className="text-light">
                  God created the heaven and the earth
                </p>
                <p className="text-light">
                  More than couple thousand years later you were born, and then
                  i was born
                </p>
                <p className="text-light">
                  This site is basically my blog so, thats where i stop talking
                  about you :)
                </p>
              </div>
            </div>
          </div>
        </section>
        <footer>
          <div>
            <p>haha , you looked at my footer</p>
          </div>
        </footer>
      </div>
    );
  }
}

export default HomePage;
