import React from "react";
import {
  Wrapper,
  Header,
  Main,
  Table,
  Footer,
  ImageContainer,
} from "./Pdf.style";
import logo from "./logo.png";

const Pdf = () => {
  return (
    <>
      <Wrapper>
        <div className="page">
          <div className="subpage">
            {/* <Header>
              <section>
                <img alt="logo" src={logo} />
                <div className="text-white h3">INVOICE DETAILS</div>
              </section>
              <section className="text-white h5">
                <div>Federal Airports Authority of Nigeria</div>{" "}
                <div>Nnamdi Azikiwe International Airport</div>
                <div>Protocol Services</div>
              </section>
            </Header> */}
            <Header>
              <section className="text-white h5">
                <ImageContainer>
                  <img alt="logo" src={logo} />
                </ImageContainer>
                <div className="h4">Federal Airports Authority of Nigeria</div>{" "}
                <p className="text-center">
                  Nnamdi Azikiwe International Airport
                </p>
                <p className="text-center">Protocol Services Units</p>
                <p className="text-white text-center h3">INVOICE DETAILS</p>
              </section>
            </Header>

            <Main>
              <section className="client-details">
                <div className="details">
                  <div className="text-muted">Bill To</div>
                  <div className="h6">Client Name</div>
                  <div className="h6">Client Address</div>
                  <div className="h6">Client Phone</div>
                  <div className="h6">Client Email</div>
                </div>
                <div className="section-one">
                  <div>
                    <div className="text-muted">Invoice Number</div>
                    <div className="h5">000000000</div>
                  </div>
                  <div>
                    <div className="text-muted">Date</div>
                    <div className="h5">10/2/2021</div>
                  </div>
                </div>
              </section>

              <section className="section-two">
                <div>
                  <div className="text-muted">Revenue Code</div>
                  <div className="h3">444555778</div>
                </div>
                <div>
                  <div className="text-muted">Invoice Total</div>
                  <div className="text-success h3">$2000,000.00</div>
                </div>
              </section>
            </Main>
            <Table>
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col" className="text-success">
                        DESCRIPTION
                      </th>
                      <th scope="col" className="text-success">
                        QUANTITY
                      </th>
                      <th scope="col" className="text-success">
                        RATE
                      </th>
                      <th scope="col" className="text-success">
                        AMOUNT
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td scope="row">
                        Protocol Services - Fuel Surcharge at Nnam-di Azikiwe
                        International Airport
                      </td>
                      <td>2</td>
                      <td>30000</td>
                      <td>60000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Table>

            <Footer>
              <div className="h3">
                Please note that TSA processing fee applies.
              </div>
              <div className="text-muted">
                ©Copyright 2021 Airport Protocol Service. All rights reserved.
              </div>
            </Footer>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default Pdf;
