import React from "react";
import Table from "react-bootstrap/Table";

class Items extends React.Component {
  componentDidMount() {}
  createInfoItem(item) {
    if (item) {
      if (item.cut) {
        return this.props.info.origin_beginning + item.body;
      } else {
        return (
          this.props.info.origin_beginning +
          this.props.info.origin_end +
          item.body
        );
      }
    }
  }

  forSg() {
    return (
      <Table className="m__tab" striped bordered hover variant="dark">
        <thead>
          <tr>
            <th> </th>
            <th>singular</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Nom.</td>
            <td> {this.createInfoItem(this.props.info.nom_sg).trim()}</td>
          </tr>
          <tr>
            <td>Acc.</td>
            <td> {this.createInfoItem(this.props.info.acc_sg).trim()}</td>
          </tr>
          <tr>
            <td>Gen.</td>
            <td> {this.createInfoItem(this.props.info.gen_sg)}</td>
          </tr>
          <tr>
            <td>Dat.</td>
            <td> {this.createInfoItem(this.props.info.dat_sg).trim()}</td>
          </tr>
          <tr>
            <td>Inst.</td>
            <td>{this.createInfoItem(this.props.info.ins_sg).trim()} </td>
          </tr>
          <tr>
            <td>Loc.</td>
            <td> {this.createInfoItem(this.props.info.loc_sg).trim()}</td>
          </tr>
          <tr>
            <td>Voc.</td>
            <td> {this.createInfoItem(this.props.info.voc_sg).trim()}</td>
          </tr>
        </tbody>
      </Table>
    );
  }

  forPl() {
    return (
      <Table className="m__tab" striped bordered hover variant="dark">
        <thead>
          <tr>
            <th> </th>
            <th>plural</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Nom.</td>

            <td> {this.createInfoItem(this.props.info.nom_pl).trim()}</td>
          </tr>
          <tr>
            <td>Acc.</td>

            <td>{this.createInfoItem(this.props.info.acc_pl).trim()} </td>
          </tr>
          <tr>
            <td>Gen.</td>

            <td>{this.createInfoItem(this.props.info.gen_pl).trim()} </td>
          </tr>
          <tr>
            <td>Dat.</td>

            <td> {this.createInfoItem(this.props.info.dat_pl).trim()}</td>
          </tr>
          <tr>
            <td>Inst.</td>

            <td> {this.createInfoItem(this.props.info.ins_pl).trim()}</td>
          </tr>
          <tr>
            <td>Loc.</td>

            <td>{this.createInfoItem(this.props.info.loc_pl).trim()} </td>
          </tr>
          <tr>
            <td>Voc.</td>

            <td>{this.createInfoItem(this.props.info.voc_pl).trim()} </td>
          </tr>
        </tbody>
      </Table>
    );
  }

  full() {
    return (
      <Table className="m__tab" striped bordered hover variant="dark">
        <thead>
          <tr>
            <th> </th>
            <th>singular</th>
            <th>plural</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Nom.</td>
            <td> {this.createInfoItem(this.props.info.nom_sg).trim()}</td>
            <td> {this.createInfoItem(this.props.info.nom_pl).trim()}</td>
          </tr>
          <tr>
            <td>Acc.</td>
            <td> {this.createInfoItem(this.props.info.acc_sg).trim()}</td>
            <td>{this.createInfoItem(this.props.info.acc_pl).trim()} </td>
          </tr>
          <tr>
            <td>Gen.</td>
            <td> {this.createInfoItem(this.props.info.gen_sg)}</td>
            <td>{this.createInfoItem(this.props.info.gen_pl).trim()} </td>
          </tr>
          <tr>
            <td>Dat.</td>
            <td> {this.createInfoItem(this.props.info.dat_sg).trim()}</td>
            <td> {this.createInfoItem(this.props.info.dat_pl).trim()}</td>
          </tr>
          <tr>
            <td>Inst.</td>
            <td>{this.createInfoItem(this.props.info.ins_sg).trim()} </td>
            <td> {this.createInfoItem(this.props.info.ins_pl).trim()}</td>
          </tr>
          <tr>
            <td>Loc.</td>
            <td> {this.createInfoItem(this.props.info.loc_sg).trim()}</td>
            <td>{this.createInfoItem(this.props.info.loc_pl).trim()} </td>
          </tr>
          <tr>
            <td>Voc.</td>
            <td> {this.createInfoItem(this.props.info.voc_sg).trim()}</td>
            <td>{this.createInfoItem(this.props.info.voc_pl).trim()} </td>
          </tr>
        </tbody>
      </Table>
    );
  }

  render() {
    let test = null;
    if (this.props.info.origin_beginning) {
      test = (
        <div>
          {this.props.info.sg && this.props.info.pl
            ? this.full()
            : this.props.info.sg
            ? this.forSg()
            : this.forPl()}
        </div>
      );
    } else {
      test = null;
    }
    return <div>{test}</div>;
  }
}

export default Items;
