import React from "react";
import { Row, Col, Container, Form } from "react-bootstrap";
import CategoriesCarousel from "../common/CategoriesCarousel";
import "./TopSearch.css";

class TopSearch extends React.Component {
  render() {
    return (
      <section className="pt-5 pb-5 position-relative">
        {/* Video Background */}
        <video autoPlay loop muted className="video-background">
          <source src="/video/top-back.webm" type="video/webm" />
          <source src="/video/top-back.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay */}
        <div className="banner-overlay"></div>

        {/* Centered Content */}
        <div className="center-content">
          <Container>
            <Row className="d-flex align-items-center justify-content-center text-center">
              <Col md={8}>
                <div className="homepage-search-title">
                  <h1 className="mb-2 font-weight-normal">
                    <span className="font-weight-bold">
                      Book Your Favorite Restaurant
                    </span>{" "}
                    in Bangladesh
                  </h1>
                  <h5 className="mb-5 text-secondary font-weight-normal">
                    Lists of top restaurants, cafes, pubs, and bars in
                    Melbourne, based on trends
                  </h5>
                </div>

                {/* Horizontal Search Bar */}
                <Form className="search-bar d-flex align-items-center">
                  <div className="search-item">
                    <Form.Control type="date" />
                  </div>
                  <div className="search-item">
                    <Form.Control as="select">
                      <option value="19:00">7:00 PM</option>
                      <option value="20:00">8:00 PM</option>
                      <option value="21:00">9:00 PM</option>
                    </Form.Control>
                  </div>
                  <div className="search-item">
                    <Form.Control as="select">
                      <option value="1">1 person</option>
                      <option value="2">2 people</option>
                      <option value="3">3 people</option>
                    </Form.Control>
                  </div>
                  <div className="search-item flex-grow-1">
                    <Form.Control
                      type="text"
                      placeholder="Location, Restaurant, or Cuisine"
                    />
                  </div>
                  <button className="btn btn-danger search-btn">
                    Let's Go
                  </button>
                </Form>

                <p className="text-secondary mt-2">
                  It looks like you're in <b>Dhaka Division</b>. Not correct?{" "}
                  <a href="#" className="text-danger">
                    Get current location
                  </a>
                </p>

                <CategoriesCarousel />
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    );
  }
}

export default TopSearch;
