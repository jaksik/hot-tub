import React from 'react';
import { Table } from 'reactstrap';

const Example = (props) => {
  return (
    <Table responsive>
      <thead>
        <tr>
            <th>__</th>
          <th>Product #1</th>
          <th>Product #2</th>
          <th>Product #3</th>
          <th>Product #4</th>
          <th>Product #5</th>
          <th>Product #6</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Model</th>
          <td>Model</td>
          <td>Garmin vivo</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
        </tr>
        <tr>
          <th scope="row">Our Rating</th>
          <td>4</td>
          <td>4</td>
          <td>4</td>
          <td>4</td>
          <td>4</td>
          <td>4</td>
        </tr>
        <tr>
          <th scope="row">MSRP</th>
          <td>4</td>
          <td>4</td>
          <td>4</td>
          <td>4</td>
          <td>4</td>
          <td>4</td>
        </tr>
        <tr>
          <th scope="row">Dimensions</th>
          <td>4</td>
          <td>4</td>
          <td>4</td>
          <td>4</td>
          <td>4</td>
          <td>4</td>
        </tr>
        <tr>
          <th scope="row">Waterproof Depth</th>
          <td>4</td>
          <td>4</td>
          <td>4</td>
          <td>4</td>
          <td>4</td>
          <td>4</td>
        </tr>
        <tr>
          <th scope="row">Additional Features</th>
          <td>4</td>
          <td>4</td>
          <td>4</td>
          <td>4</td>
          <td>4</td>
          <td>4</td>
        </tr>
        <tr>
          <th scope="row">Built-in Alexa</th>
          <td>4</td>
          <td>4</td>
          <td>4</td>
          <td>4</td>
          <td>4</td>
          <td>4</td>
        </tr>
        <tr>
          <th scope="row">Waterproof Depth</th>
          <td>4</td>
          <td>4</td>
          <td>4</td>
          <td>4</td>
          <td>4</td>
          <td>4</td>
        </tr>
        <tr>
          <th scope="row">More Information</th>
          <td><button>Hello World</button></td>
          <td><button>Hello World</button></td>
          <td><button>Hello World</button></td>
          <td><button>Hello World</button></td>
          <td><button>Hello World</button></td>
          <td><button>Hello World</button></td>
        </tr>
      </tbody>
    </Table>
  );
}

export default Example;