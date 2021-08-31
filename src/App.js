import React, { Component } from 'react';
// import logo from './logo.svg';
// import { Container, Header, Logo } from './App.styled';
// // import LinkStyled from "./Components/Link.styled";
// import Link from "./Components/Link";
// import Description from './Components/Description';


import GlobalStyle from './Layout/Base.styled';
import Todo from './Layout/Todo.styled';
import Container from './Layout/Container.styled';
import Form from './Components/Form';
import Navigation from './Components/Navigation';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      priority: "",
      due_date: "",
      description: "",
      status: false
    }
  }

  componentDidMount() {
    console.log("component did mount");
  }

  componentDidUpdate() {
    console.log("component did update");
  }

  // handleUpdateLabel = (value) => {
  //   this.setState({
  //     label: value
  //   })
  // }

  render() {

    // const { label } = this.state;

    return (
      <Todo>
        <GlobalStyle/>
        <Container>
          <Form></Form>
          <Navigation></Navigation>
        </Container>
      </Todo>

      // <Container>
      //   <GlobalStyle />
      //   <Header>
      //     <Logo src={ logo } alt="logo"></Logo>
      //     <Description
      //       description={["Edit ",<code>src/App.js</code>," and save to reload."]}
      //     ></Description>
      //     <Link
      //       linkLabel={ label }
      //       url="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //       OnHandleUpdateLabel={ this.handleUpdateLabel }
      //     >
      //     </Link>
      //   </Header>
      // </Container>
    );
  }
}

export default App;

