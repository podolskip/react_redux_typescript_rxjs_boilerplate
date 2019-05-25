// tslint:disable:max-line-length
import * as React from 'react';
import { connect } from 'react-redux';

export class HomePage extends React.Component {
  public render() {
    return (
      <section>
        <h1>
          Welcome to the main page of React redux boilerplate
      </h1>
        <h3>Technology stack covered by this project:</h3>
        <ul>
          <li>React: </li>
        </ul>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non lorem lacinia erat volutpat laoreet commodo ac urna. Mauris odio est, cursus vitae metus nec, sodales commodo ante. Fusce blandit purus sit amet tempus pellentesque. Maecenas facilisis in justo at maximus. Phasellus eleifend, eros a tristique cursus, arcu felis viverra diam, quis accumsan nisl mauris eget magna. Sed ex ipsum, lobortis sit amet sapien ut, aliquet faucibus libero. Sed non accumsan nibh, a lobortis purus. Quisque imperdiet posuere ligula. Mauris a erat cursus, vulputate nunc ac, consequat tortor. Sed sollicitudin eu libero in bibendum. Nulla luctus, nisl non dapibus pellentesque, lectus dolor imperdiet felis, sed lacinia leo elit eget velit. In risus sem, varius nec hendrerit vitae, auctor eget velit.
      </p>

      </section>
    );
  }
}

export default connect()(HomePage);