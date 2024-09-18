import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col
} from "reactstrap";
import { alumns } from "const/alumns";

function Dashboard() {
  return (
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
  );
}

export default Dashboard;
