import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { withTranslation } from "react-i18next";
import { connect } from "react-redux";

import { getColorPalette } from "./../theme";

const Home = ({ t, uiState }) => {
  const Header1 = styled.h1`
    font-size: ${uiState.globalFontSize * 2}px;
  `;
  const Paragraph = styled.p`
    font-size: ${uiState.globalFontSize}px;
  `;
  const Anchor = styled(Link)`
    color: ${() => getColorPalette(uiState.viewMode).secondary};
    &:hover {
      color: ${({ theme }) => getColorPalette(uiState.viewMode).primary};
    }
  `;

  return (
    <main>
      <Header1>{t("home:welcome_message", { name: "Denis Angulo" })}</Header1>
      <Paragraph>
        {t(
          "home:p1",
          "I'm a software developer focused mainly on web technologies, namely Python (with the Django framework) and JavaScript."
        )}
      </Paragraph>
      <Paragraph>
        {t(
          "home:p2",
          "This website is a collection of the projects and work that I've done over the years."
        )}
      </Paragraph>
      <Paragraph>
        {t("home:p3_1", "See the")}{" "}
        <Anchor to='/portfolio'>
          {t("translation:portfolio", "Portfolio")}
        </Anchor>{" "}
        {t(
          "home:p3_2",
          "section if you want to see some of my finished work. If you're interested in seeing the latest toy project or concept I've been working on, head to the"
        )}
        <Anchor to='/lab'> {t("translation:lab", "Lab")}</Anchor>
        {"."}
      </Paragraph>
    </main>
  );
};

export default connect(state => ({ uiState: state.ui }))(
  withTranslation("home")(Home)
);
