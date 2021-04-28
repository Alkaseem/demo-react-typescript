import styled from "styled-components";

export const Wrapper = styled.div`
  .page {
    width: 210mm;
    min-height: 100mm;
    padding: 3mm;
    margin: 10mm auto;
    border: 1px #d3d3d3 solid;
    border-radius: 5px;
    background: white;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  }
  .subpage {
    // padding: 1.5cm;
    border: 2px #ffff solid;
    height: 257mm;
    outline: 2cm #ffff solid;
  }

  @page {
    size: A4;
    margin: 0;
  }
  @media print {
      html, body {
          width: 210mm;
          height: 297mm;
      }
      .page {
          margin: 0;
          border: initial;
          border-radius: initial;
          width: initial;
          min-height: initial;
          box-shadow: initial;
          background: initial;
          page-break-after: always;
      }
`;

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 25%;
  padding: 0px 15px;
  background-color: #18a956;
`;

export const ImageContainer = styled.div`
  text-align: center;
  vertical-align: middle;
  img {
    border: 2px solid #18a956;
    border-radius: 5px;
  }
`;

export const Main = styled.main`
  margin-top: 45px;
  height: 15%;
  padding: 0px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .client-details {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 50%;
  }

  .details div {
    padding: 4px 0px;
  }

  .section-one {
    display: flex;
    height: 20vh;
    flex-direction: column;
    justify-content: space-between;
    div {
      padding-top: 4px;
    }
  }

  .section-two {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    div {
      padding-top: 4px;
    }
  }
`;

// export const Div = styled.div`
//   // border: 2px solid green;
//   display: flex;
//   height: 20vh;
//   flex-direction: column;
//   justify-content: space-between;
//   div {
//     padding-top: 4px;
//   }
// `;

export const Line = styled.hr`
  border: 2px solid green;
  width: 97%;
  margin-top: 50px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Table = styled.div`
  margin-top: 60px;
  table th,
  table td {
    padding: 25px;
    font-weight: 500;
  }
`;

export const Footer = styled.footer`
  margin-top: 60px;
`;
