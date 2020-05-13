import React from "react";
import { main, proposalFunc } from "../func/app";
import { Container, Row, Col, InputGroup, FormControl, Button} from "react-bootstrap";
import Items from "./Items";
import Header from "./Header";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      proposal: [],
      info: {},
      showInfo: false,
      word: "",
    };
  }

  handleInput(e) {
    this.setState({ word: e.target.value });
    this.findWord(e.target.value);
  }

  handlePropose(e) {
    this.findWord(e.target.getAttribute("value"));
  }

  async findWord(word) {
    const result = main(word);
    if (result.success) {
      console.log(result);

      this.setState({ info: result.body, showInfo: true, word });
    } else {
      const proposal = await proposalFunc(word);
      this.setState({ proposal, showInfo: false, info: {} });
    }
  }

  render() {
    const propItems = this.state.proposal.map((el, i) => {
      return (
        <p key={i} className="color__word" value={el} onClick={this.handlePropose.bind(this)}>
          {el}
        </p>
      );
    });

    return (
      <Container fluid={true} className="declin__bg">
        <Header />
        <Row className="d-flex justify-content-center m__main ">
          
          <Col  className="main__input" md={4}>
            <InputGroup className="mb-3">
              <FormControl
              
                value={this.state.word}
                onChange={this.handleInput.bind(this)}
                placeholder="...enter word"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
            {!this.state.showInfo ? propItems : null} 

            
          </Col>
         {/* <Col md={1}><div>
  <Button className="bt" variant="warning">Decline</Button>
</div></Col> */}
        </Row>
        <Row className="justify-content-center ">
          <Col md={5}>
            <Items info={this.state.info}></Items>
          </Col>
        </Row>
         
      </Container>
    );
  }
}

export default App;
