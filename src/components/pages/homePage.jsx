import React, { Component } from "react";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div
        className="page"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/background.png)`,
        }}
      >
        <section className="mt-5">
          <div className="container">
            <div className="card bg-dark col">
              <div className="card-body">
                <h5 className="text-info">In the Beginning</h5>
                <p className="text-light">
                  God created the heaven and the earth
                </p>
                <p className="text-light">
                  More than couple thousand years later you were born, and then
                  I was born
                </p>
                <p className="text-light">
                  since this is my site ,thats where we are gonna stop talking
                  about you
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="m-2 ">
          <div className="container d-flex justify-content-end m-3">
            <div className="d-flex justify-content-between w-100">
              <div className="card bg-dark">
                <div className="card-body ">
                  <p>
                    I couldnt find any stock imagess for lego <br />
                    so i had to make this shot and add the grey scale <br />
                    background
                  </p>
                  <div className="d-flex justify-content-center">
                    <img
                      src={process.env.PUBLIC_URL + "/hard-drive.jpg"}
                      className="rounded image-container"
                      alt="hdd"
                    />
                  </div>
                </div>
                <div className="row ml-0 ">
                  <p className="text-light">lego is fun </p>
                </div>
              </div>
              <div className="card bg-dark">
                <div className="card-body">
                  <h5 className="text-info">Chapter One: a new journey</h5>
                  <h6 className="text-danger">Levels 0-6</h6>
                  <p className="text-light">
                    Unfortunately, I wasnt born as a grown man <br />
                    like everyone else I was subjected to playing through the
                    "life" tutorial <br />
                    I wish some one would add a skip feature <br />
                    For atleast the first six levels you cant do anything
                    <br />
                    most of my data was wiped of these levels for "Optimization"
                    reasons
                    <br />I think the game devs just wanted to save some money
                    of server space
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="m-2">
          <div className="container d-flex justify-content-center m-2">
            <div className="d-flex justify-content-between w-100">
              <div className="card bg-dark">
                <div className="card-body">
                  <h5 className="text-info">
                    Chapter Two: still A bad Game , But With added features
                  </h5>
                  <h6 className="text-danger">Levels 6-13</h6>
                  <p className="text-light">
                    After Realizing this tutorial isnt gonning to end for a
                    while
                    <br />
                    And in fact will get even longer due to the edition of
                    manditory side quests (school) <br />
                    I, like many others decided to use our abilty "cry",
                    <br /> to get whatever we want (100% effectiveness against
                    parent types). <br />
                    After a while some of us "matured" and started using other
                    ways to get what we want.
                    <br />
                    While most players choose to play with the other low level
                    noobs <br />
                    I however didnt do that, <br />
                    mostly do to the fact the my charisma stats were less than
                    average, since than almost nothing has changed. <br />i
                    spent most of these levels playing with the Logo dlc
                    bundles.
                  </p>
                </div>
              </div>
              <div className="card bg-dark">
                <div className="card-body ">
                  <p>
                    I couldnt find any stock imagess for lego <br />
                    so i had to make this shot and add the grey scale <br />
                    background
                  </p>
                  <div className="d-flex justify-content-center">
                    <img
                      src={process.env.PUBLIC_URL + "/lego.jpg"}
                      className="rounded   image-container "
                      alt="hdd"
                    />
                  </div>
                </div>
                <div className="row ml-0 ">
                  <p className="text-light">lego is fun</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="m-3 p-4">
          <div className="container d-flex justify-content-start m-2">
            <div className="d-flex justify-content-around w-100">
              <div className="card bg-dark">
                <div className="card-body ">
                  <p>
                    a super accurate depiction of running <br />
                  </p>
                  <div
                    className="d-flex justify-content-center"
                    style={{ background: "#222328" }}
                  >
                    <img
                      src={process.env.PUBLIC_URL + "/naruto.jpg"}
                      className="rounded image-container "
                      alt="hdd"
                    />
                  </div>
                </div>
                <div className="row ml-0 ">
                  <p className="text-light">
                    i know this looks like a lot of fun but, its not
                  </p>
                </div>
              </div>
              <div className="card bg-dark">
                <div className="card-body">
                  <h5 className="text-info">
                    Chapter Three: how long did you say this thing was?
                  </h5>
                  <h6 className="text-danger">Levels 13-16</h6>
                  <p className="text-light">
                    After realizing how long this game was actually gonning to
                    be I decided to try to get better at some of the controls,
                    <br />
                    While I did try getting better at them in previous levels
                    <br />
                    my dexterity and agility stats happen to be super low
                    <br />
                    while others forms of tranning were looked super fun , I
                    decided to do speed runs with some of my party members{" "}
                    <br />
                    as i got better times, I also got some gliches in my player
                    character <br />
                    after being benched for 2 ranked seasons, I realized speed
                    runs in the grand scheme of the game <br /> werent that
                    important and that I had more fun playing other missions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default HomePage;
