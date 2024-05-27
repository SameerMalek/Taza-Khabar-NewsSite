import "./App.css";
import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

class App extends Component {
  apiKey = process.env.REACT_APP_NEWS_API
  state = {
    progress: 0,
  };

  setProgress = (progress) => {
    this.setState({ progress });
  };

  Layout = () => (
    <>
      <Navbar />
      <LoadingBar color="#f11946" progress={this.state.progress} />
      <Outlet />
    </>
  );

  render() {
    const { Layout } = this;

    const router = createBrowserRouter([
      {
        path: "/",
        element: <Layout />,
        children: [
          {
            path: "/",
            element: <News setProgress={this.setProgress} apiKey={this.apiKey} key="home" />,
          },
          {
            path: "business",
            element: <News setProgress={this.setProgress} apiKey={this.apiKey} key="business" category="business" />,
          },
          {
            path: "entertainment",
            element: <News setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" category="entertainment" />,
          },
          {
            path: "health",
            element: <News setProgress={this.setProgress} apiKey={this.apiKey} key="health" category="health" />,
          },
          {
            path: "science",
            element: <News setProgress={this.setProgress} apiKey={this.apiKey} key="science" category="science" />,
          },
          {
            path: "sports",
            element: <News setProgress={this.setProgress} apiKey={this.apiKey} key="sports" category="sports" />,
          },
          {
            path: "technology",
            element: <News setProgress={this.setProgress} apiKey={this.apiKey} key="technology" category="technology" />,
          },
        ],
      },
    ]);

    return (
      <div>
        <RouterProvider router={router} />
      </div>
    );
  }
}

export default App;
