"use client";
import Navigation from "@/app/_components/Navigation";
import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import Profile from "@/app/_components/Profile";
import Extra from "@/app/_components/Extra";
import Footer from "@/app/_components/commonComponent/Footer";

const Dashboard = () => {
  const [role, setRole] = useState("");
  const [dynamicComponent, setDynamicComponent] = useState(null);

  useEffect(() => {
    const browseAuthData = localStorage.getItem("auth");
    if (browseAuthData) {
      const parsedData = JSON.parse(browseAuthData);
      setRole(parsedData?.user?.role === 1 ? "create" : "profile");
    }
  }, []);

  const renderDynamicComponent = () => {
    switch (dynamicComponent) {
      case "extra":
        return <Extra />;
      case "create":
        return <CreateCategory />;
      case "profile":
      default:
        return <Profile />;
    }
  };

  return (
    <>
      <Navigation />
      <Row>
        <Col sm={3}>
          <button className="btn btn-primary w-100 mb-2">Dashboard</button>
          <button
            className="btn btn-secondary w-100 text-capitalize"
            onClick={() => setDynamicComponent(role)}
          >
            {role}
          </button>
          <button
            className="btn btn-info w-100 text-capitalize mt-2"
            onClick={() => setDynamicComponent("extra")}
          >
            Extra
          </button>
        </Col>
        <Col sm={9}>{renderDynamicComponent()}</Col>
      </Row>
      <Footer />
    </>
  );
};

export default Dashboard;
