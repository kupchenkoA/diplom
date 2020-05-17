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
      currentEnd: null,
      genderWords: [],
      formatInfo: [],
      currentEnds: [],
      filterInfo: [],
    };
  }

  handleInput(e) {
    this.setState({ currentGender: e.target.value }, async () => {
      await this.getArrayEnds();
      const genderItems = dictionary.filter((el) => {
        return this.state.currentGender == el.type;
      });
      this.setState({ genderWords: genderItems }, () => {
        this.getArrayEnds();
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
    this.setState({ formatInfo: format }, () => {
      this.setState({
        filterInfo: this.state.formatInfo.filter((el) => {
          return el.indexOfEnd == this.state.currentEnd;
        }),
      });
    });
  }

  getArrayEnds() {
    const newEnds = items
      .filter((declEl) => {
        return declEl.gender == this.state.currentGender;
      })[0]
      .ends.map((end) => {
        return end;
      });
    this.setState({ currentEnds: newEnds }, () => {
      this.setState({ currentEnd: 0 }, () => {
        this.formatAll();
      });
    });
  }

  handleEnd(e) {
    this.setState({ currentEnd: Number.parseInt(e.target.value) }, () => {
      this.setState({
        filterInfo: this.state.formatInfo.filter((el) => {
          return el.indexOfEnd == this.state.currentEnd;
        }),
      });
    });
  }

  render() {
    return (
      <div>
        <Row>
          <Col md={4}>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>By Type</Form.Label>
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
                      this.getArrayEnds();
                      this.setState({ genderWords: genderItems }, () => {
                        this.formatAll();
                      });
                    });
                  }
                  return (
                    <option value={el.gender} key={i}>
                      {el.title}
                    </option>
                  );
                })}
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>By Group</Form.Label>
              <Form.Control
                as="select"
                value={this.state.currentEnd}
                onChange={this.handleEnd.bind(this)}
              >
                {this.state.currentEnds.length > 0
                  ? this.state.currentEnds.map((end, i) => {
                      return (
                        <option value={i} key={i}>
                          Группа {++i}
                        </option>
                      );
                    })
                  : null}
              </Form.Control>
            </Form.Group>
          </Col>
          <Col md={4}>{this.state.filterInfo.length}</Col>
        </Row>
        <Row>
          {this.state.genderWords.length > 0
            ? this.state.filterInfo.map((el) => {
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
