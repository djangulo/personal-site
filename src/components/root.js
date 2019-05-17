import React from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { connect } from 'react-redux';
import { NavLink, Redirect, Route, Switch } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { getViewMode } from '../store';

import styled from '@emotion/styled';

import Home from './home';

const Root = ({ viewMode }) => {
  const { t } = useTranslation('translation');

  const Header = styled.header`
    background-color: ${({ theme }) => theme[viewMode].colors.primary};
    margin: 0;
    height: 4em;
    display: flex;
    align-items: center;
    padding: 0 1em;
    justify-content: space-between;
  `;

  const Ul = styled.ul`
    nav & {
      display: flex;
      justify-content: space-around;
      flex-direction: row;
      margin: 0;
    }
    & li {
      list-style: none;
      & a {
        color: ${({ theme }) => theme[viewMode].colors.primaryText};
        text-decoration: none;
        font-size: ${({ theme }) => theme.globalFontSize};
        &:hover {
          color: ${({ theme }) => theme[viewMode].colors.secondary};
        }
      }
    }
  `;

  return (
    <React.Fragment>
      <Header>
        <nav>
          <Ul>
            <li>
              <NavLink to="/">{t('translation:home', 'Home')}</NavLink>
            </li>
            <li>
              <NavLink to="/portfolio">
                {t('translation:portfolio', 'Portfolio')}
              </NavLink>
            </li>
            <li>
              <NavLink to="/lab">{t('translation:lab', 'Lab')}</NavLink>
            </li>
            <li>
              <NavLink to="/resume">
                {t('translation:resume', 'Resume')}
              </NavLink>
            </li>
          </Ul>
        </nav>
      </Header>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/lab" component={Home} />
        <Route path="/portfolio" component={Home} />
        <Route path="/resume" component={Home} />
        <Redirect to="/" />
      </Switch>
    </React.Fragment>
  );
};

export default connect(state => ({ viewMode: getViewMode(state) }))(Root);
