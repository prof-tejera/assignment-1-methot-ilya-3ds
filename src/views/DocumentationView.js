import React from "react";
import styled from "styled-components";

import DocumentComponent from "../components/documentation/DocumentComponent";
import NeonButton from "../components/generic/Button/NeonButtons";
import FlexColumn from "../components/generic/FlexDivs/FlexColumn.js"
import FlexRow from "../components/generic/FlexDivs/FlexRow";
import Loading from "../components/generic/Loading";
import NeonParagraph from "../components/generic/Paragraph/NeonParagraph";

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Title = styled.div`
  font-size: 2rem;
`;

class Documentation extends React.Component {
  render() {
    return (
      <Container>
        <div>
          <Title>Documentation</Title>
          <DocumentComponent
            title="NeonButton"
            component={<NeonButton>btn</NeonButton>}
            propDocs={[
              {
                prop: "onClick",
                description: "Method that runs when button is clicked",
                type: "func",
                defaultValue: "none",
              },
              {
                prop: "width",
                description: "Width of button",
                type: "string, number",
                defaultValue: "50, 50px",
              },
              {
                prop: "height",
                description: "Height of button",
                type: "string, number",
                defaultValue: "50, 50px",
              },
              {
                prop: "className",
                description: `Use to change the style of the Button. 
                Currently available options include: StartButton, ClearButton, PauseButton, RestartButton, display, smallButton`,
                type: "string",
                defaultValue: "StartButton",
              },
              {
                prop: "disabled",
                description: "Choose whether button is disabled (clickable)",
                type: "bool",
                defaultValue: "false",
              },
            ]}
          />
          <DocumentComponent
            title="FlexColumn"
            component={<FlexColumn><NeonButton>btn</NeonButton><NeonButton className="RestartButton">btn</NeonButton><NeonButton className="ClearButton">btn</NeonButton></FlexColumn>}
            propDocs={[
              {
                prop: "color",
                description: "Changes the color of the background",
                type: "string",
                defaultValue: "white",
              },
              {
                prop: "width",
                description: "Width of div",
                type: "string, number",
                defaultValue: "100px",
              },
              {
                prop: "height",
                description: "Height of div",
                type: "string, number",
                defaultValue: "100px",
              },
              {
                prop: "margin",
                description: "Margin of div",
                type: "string, number",
                defaultValue: "0px",
              },
              {
                prop: "padding",
                description: "padding of div",
                type: "string, number",
                defaultValue: "10px",
              },
            ]}
          />
          <DocumentComponent
            title="FlexRow"
            component={<FlexRow><NeonButton>btn</NeonButton><NeonButton className="RestartButton">btn</NeonButton><NeonButton className="ClearButton">btn</NeonButton></FlexRow>}
            propDocs={[
              {
                prop: "color",
                description: "Changes the color of the background",
                type: "string",
                defaultValue: "white",
              },
              {
                prop: "width",
                description: "Width of div",
                type: "string, number",
                defaultValue: "100px",
              },
              {
                prop: "height",
                description: "Height of div",
                type: "string, number",
                defaultValue: "100px",
              },
              {
                prop: "margin",
                description: "Margin of div",
                type: "string, number",
                defaultValue: "0px",
              },
              {
                prop: "padding",
                description: "padding of div",
                type: "string, number",
                defaultValue: "10px",
              },
            ]}
          />
           <DocumentComponent
            title="FlexRow"
            component={<NeonParagraph>Neon Text</NeonParagraph>}
            propDocs={[
              {
                prop: "color",
                description: "Changes the color of the text",
                type: "string",
                defaultValue: "Blue",
              },
              {
                prop: "width",
                description: "Width of text container",
                type: "string, number",
                defaultValue: "200px",
              },
              {
                prop: "height",
                description: "Height of text container",
                type: "string, number",
                defaultValue: "200px",
              },
              {
                prop: "padding",
                description: "padding of text container",
                type: "string, number",
                defaultValue: "10px",
              },
            ]}
          />
        </div>
      </Container>
    );
  }
}

export default Documentation;
