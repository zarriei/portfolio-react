import React, { Component } from "react";
import { Card, CardGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Works.</h1>

            <CardGroup>
              <Card>
                <Card.Body>
                  <Card.Title>Project Footy</Card.Title>
                  <Card.Text>
                    This project is an application that allows the user to
                    search for their favorite soccer team and get back loads of
                    information based on the users input.
                  </Card.Text>
                </Card.Body>
                <Card.Link href="https://jonathanstoll0603.github.io/Footy/">
                  Project Footy Link
                </Card.Link>
              </Card>
              <Card>
                <Card.Body>
                  <Card.Title>Day Planner</Card.Title>
                  <Card.Text>
                    This assignment is a live deployed day planner. The user is
                    able to schedule and plan their day and time is color coded
                    by past, present, and future.{" "}
                  </Card.Text>
                </Card.Body>
                <Card.Link href="https://zarriei.github.io/Jquery_Calander/">
                  Day Planner
                </Card.Link>
              </Card>
              <Card>
                <Card.Body>
                  <Card.Title>Layouts Assignment</Card.Title>
                  <Card.Text>
                    This assignment had a purpose of being able to replicate a
                    site that was provided to us by the instructor. I learned
                    positioning of elements and styling. Also, we learned the
                    grid layout as well. This assignment mainly focused on CSS
                    elements as well as some debugging as well.
                  </Card.Text>
                </Card.Body>
                <Card.Link href=" https://zarriei.github.io/HOMEWORK-1/">
                  Positioning and CSS
                </Card.Link>
              </Card>
            </CardGroup>
          </div>
        </div>
      </section>
    );
  }
}
