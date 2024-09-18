/*!

=========================================================
* Paper Dashboard React - v1.3.1
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// react plugin used to create charts
import { Line, Pie } from "react-chartjs-2";
import hombre from "hombre.png";
import mujer from "mujer.webp";
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col
} from "reactstrap";
// core components
import {
  dashboard24HoursPerformanceChart,
  dashboardEmailStatisticsChart,
  dashboardNASDAQChart
} from "variables/charts.js";
import { alumns } from "const/alumns";

function Dashboard() {
  return (
    <>
      <div className="content">
      <Row>
  {alumns &&
    alumns.map((entry) => (
      <Col key={entry.id} lg="3" md="6" sm="6">
        <Card className="card-stats">
          <CardBody>
            <Row>
              <Col md="4" xs="5">
                <div className="icon-big text-center icon-warning">
                  <i className="nc-icon nc-globe text-warning" />
                </div>
              </Col>
              <Col md="8" xs="7">
                <div className="numbers">
                  <p className="card-category">ALUMNO {entry.id}</p>
                  <CardTitle tag="p">{entry.nombre}</CardTitle>
                  <p />
                </div>
              </Col>
            </Row>
          </CardBody>
          <CardFooter>
            <hr />
            <div className="stats">
              {/* Puedes agregar estadísticas o información aquí */}
            </div>
            <a href="/" className="simple-text logo-mini">
              <div className="logo-img">
                <img src={`${process.env.PUBLIC_URL}${entry.foto}`} alt={`${entry.nombre}-photo`} />
              </div>
            </a>
          </CardFooter>
        </Card>
      </Col>
    ))}
</Row>

        
      </div>
    </>
  );
}

export default Dashboard;
