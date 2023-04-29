import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Display from "./Display";
import { Container, Row, Col } from "react-bootstrap";
import '../App.css'

class Home extends Component {
  render() {
    return (
      <div>
        <Container>
          <br />
          <h1 className="text-center headingtag" style={{ color: "#1d283e" }}>
            AI Buddy: Simplifying Your Tasks with AI
          </h1>
          <br />
          <Row>
            <Col>
              <Display
                header="SQL Requests"
                title="Get SQL Commands"
                text="Generate SQL Queries button provides a user-friendly interface to quickly create complex SQL queries for your database. With support for multiple databases and simple query creation, this tool can save you time and effort."
                theLink="/sql-requests"
              />
            </Col>
            <Col>
              <Display
                header="Grammar Correction"
                title="Correct Grammar"
                text="It quickly checks and corrects grammar and punctuation errors in your writing. Simply copy and paste your text, and it will suggest corrections for any mistakes, helping improve the accuracy and professionalism of your writing."
                theLink="/grammar-correction"
              />
            </Col>
            <Col>
              <Display
                header="Time Complexity"
                title="Check Time Complexity"
                text="It helps you analyze the time complexity of your algorithms. Simply enter your code into the tool, and it will quickly determine the time complexity of your algorithm, helping you optimize your code and improve its efficiency."
                theLink="/time-complexity"
              />
            </Col>
          </Row>
          <br />
          <Row>
            <Col>
              <Display
                header="Javascript helper chatbot"
                title="Get help with your JS codes"
                text="A JavaScript helper chatbot is an AI tool that provides quick and helpful responses to users' inquiries about JavaScript. It's designed to improve user engagement, reduce frustration, and enhance overall website experience."
                theLink="/javascript-helper"
              />
            </Col>
            <Col>
              <Display
                header="Translate Programming Language"
                title="Convert One Language To Other"
                text="Programming Language Converter tool quickly converts code between programming languages. Ideal for developers and students learning multiple languages, it saves time and effort in the code conversion process."
                theLink="/translate-programming-lang"
              />
            </Col>
            <Col>
              <Display
                header="Micro horror story creator"
                title="Horror Story Creator"
                text="Input a topic and our advanced tool will generate a unique two to three-line horror story based on your input. Whether you're a horror enthusiast or just looking for a thrill, our user-friendly interface makes it easy to create your own spooky tale."
                theLink="/story-creator"
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default Home;
