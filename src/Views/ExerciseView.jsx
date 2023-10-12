// eslint-disable-next-line no-unused-vars
import React from "react";
import { Card, CardBody, CardTitle, CardText, Button } from "reactstrap";
import "../assets/Styles/ExerciseView/Rules__BEM copy.css";
import exerciseViewIcon from "../assets/Styles/ExerciseView/exerciseViewIcon.svg";

const ExerciseView = () => {
  return (
    <div className="container-exercise-view">
      <div className="container-exercise-view__header">
        <img
          className="container-exercise-view__header__image"
          src={exerciseViewIcon}
          alt="exercise view icon"
        />
        <h2 className="container-exercise-view__header__title">Exercises</h2>
      </div>

      <div className="container-exercise-view__section">
        <h3 className="container-exercise-view__section__title">
          Choose your exercise
        </h3>
        <div className="container-exercise-view__section__card">
          <Card
            className="Card"
            style={{
              width: "18rem",
            }}
          >
            <img
              alt="Squats"
              src="https://www.runtastic.com/blog/wp-content/uploads/2016/08/squat-variations-blog_1200x800.jpg"
            />
            <CardBody>
              <CardTitle tag="h5">Squads</CardTitle>

              <CardText>
                It directly works the thigh muscles, hip muscles and glutes, and
                strengthens the bones, ligaments and tendons of the legs and
                hips.
              </CardText>
              <a href="/SesionView">
                <Button className="Card__button">Start</Button>
              </a>
            </CardBody>
          </Card>
          <Card
            className="Card"
            style={{
              width: "18rem",
            }}
          >
            <img
              alt="Bench Press"
              src="https://img.livestrong.com/640/cme-data/getty%2F8f630f91c4f84fc581e7d54e77caec27.jpg"
            />
            <CardBody>
              <CardTitle tag="h5">Bench Press</CardTitle>

              <CardText>
                It is a free weight exercise that primarily works the upper body
                and is also used in bodybuilding as a chest exercise. body.
              </CardText>
              <a href="/SesionView">
                <Button className="Card__button">Start</Button>
              </a>
            </CardBody>
          </Card>
          <Card
            className="Card"
            style={{
              width: "18rem",
            }}
          >
            <img
              alt="Deadlift"
              src="https://blogscdn.thehut.net/wp-content/uploads/sites/478/2015/06/10102520/Blog-Deadlifting-Male_1800x1200opt.jpg"
            />
            <CardBody>
              <CardTitle tag="h5">Deadlift</CardTitle>

              <CardText>
                It consists of lifting a weight from the floor to hip level with
                the torso perpendicular to the floor, before placing it back on
                the floor.
              </CardText>
              <a href="/SesionView">
                <Button className="Card__button">Start</Button>
              </a>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ExerciseView;
