import React from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import Pdf from "react-to-pdf";
// import Pdf from "./Pdf";
import { File } from "react-feather";
import Demo from "./Demo";

const ref: React.RefObject<HTMLDivElement> = React.createRef();

const Download = () => {
  return (
    <>
      <div className="post" ref={ref}>
        <h1>Goodmoeni</h1>
      </div>
      {/* <PDFDownloadLink fileName={`My test`} document={<Demo />}>
        <button>
          <File size={10} strokeWidth={3} />
          <span className="text-success">Get PDF</span>
        </button>
      </PDFDownloadLink> */}
      <Pdf targetRef={ref} filename="test.pdf">
        {({ toPdf }) => <button onClick={toPdf}>capute</button>}
      </Pdf>
    </>
  );
};

export default Download;
