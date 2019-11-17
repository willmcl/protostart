import React, { Component } from 'react';

class Dashboard extends Component {
  render() {
    return (
      <main className="DashboardContent">
        <h1>Heading One</h1>
        <h2>Heading Two</h2>
        <h3>Heading Three</h3>
        <h4>Heading Four</h4>
        <h5>Heading Five</h5>
        <h6>Heading Six</h6>
        <p>Paragraph text</p>
        <ul>
          <li>List item</li>
          <li>List item</li>
          <li>List item</li>
          <li>List item</li>
        </ul>

      </main>
    )
  }
}

export default Dashboard;