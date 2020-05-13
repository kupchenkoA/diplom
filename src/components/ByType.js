import React from "react";
import items from "../func/decl";
import { Form, Row, Col } from "react-bootstrap";
import dictionary from "../func/dict";
import TableItems from "./Items";
import { main } from "../func/appPromise";

class ByType extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentGender: null,
      genderWords: [],
      formatInfo: [],
    };
    console.log(dictionary.length);
  }

  handleInput(e) {
    this.setState({ currentGender: e.target.value }, () => {
      const genderItems = dictionary.filter((el) => {
        return this.state.currentGender == el.type;
      });
      this.setState({ genderWords: genderItems }, () => {
        this.formatAll();
      });
    });
  }

  async findWord(word) {
    const result = await main(word);
    return result;
  }

  formatAll() {
    const format = this.state.genderWords.map((el, i) => {
      return main(el.word).body;
    });
    this.setState({ formatInfo: format });
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
                  if (this.state.currentGender == null && i == 8) {
                    this.setState({ currentGender: el.gender }, () => {
                      const genderItems = dictionary.filter((el) => {
                        return this.state.currentGender == el.type;
                      });
                      this.setState({ genderWords: genderItems }, () => {
                        this.formatAll();
                      });
                    });
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
          <Col md={4}>{this.state.genderWords.length}</Col>
        </Row>
        <Row>
          {this.state.genderWords.length > 0
            ? this.state.formatInfo.map((el) => {
                return (
                  <Col md={3}>
                    <p>{el.origin_beginning + el.origin_end}</p>
                    <TableItems info={el} />
                  </Col>
                );
              })
            : null}
        </Row>
      </div>
    );
  }
}

export default ByType;
