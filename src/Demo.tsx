import React from "react";
import {
  Document,
  Font,
  Image,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";

export default function Demo() {
  return (
    <Page>
      <Document>
        <Text>Hellp</Text>
      </Document>
    </Page>
  );
}
