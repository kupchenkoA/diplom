import React from "react";
import items from "../func/decl";
import { Form, Row, Col } from "react-bootstrap";
import dictionary from "../func/dict";
import TableItems from "./Items";
import { main } from "../func/app";

class ByType extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentGender: null,
      genderWords: [],
      loadItem: 0,
    };
    console.log(dictionary.length);
  }

  handleInput(e) {
    this.setState({ currentGender: e.target.value }, () => {
      const genderItems = dictionary.filter((el) => {
        return this.state.currentGender == el.type;
      });
      this.setState({ genderWords: genderItems });
    });
  }

  findWord(word) {
    const result = main(word);
    return result;
  }

  render() {
    return (
      <div>
        <Row>
          <Col md={4}>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Gender</Form.Label>
              <Form.Control
                as="select"
                value={this.state.currentGender}
                onChange={this.handleInput.bind(this)}
              >
                {items.map((el, i) => {
                  if (this.state.currentGender == null && i == 0) {
                    this.setState({ currentGender: el.gender });
                  }
                  return (
                    <option value={el.gender} key={i}>
                      {el.gender}
                    </option>
                  );
                })}
              </Form.Control>
            </Form.Group>
          </Col>
          <Col md={4}>{this.state.genderWords.length} Items</Col>
        </Row>
        <Row>
          {this.state.genderWords.length > 0
            ? this.state.genderWords.map((el, i) => {
                const result = this.findWord(el.word);
                if (result.success) {
                  return (
                    <Col md={3} key={i}>
                      <TableItems info={result.body} />
                    </Col>
                  );
                } else {
                  return null;
                }
              })
            : null}
        </Row>
      </div>
    );
  }
}

export default ByType;
