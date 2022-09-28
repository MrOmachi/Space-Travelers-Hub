import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import MyProfile from '../MyProfile/MyProfile';
import Missions from '../Missions/Missions';
import Rockets from '../Rockets/Rockets';
import { store } from '../store';

describe('Rocket components', () => {
  it('Render component', () => {
    const tree = render(
      <React.StrictMode>
        <Provider store={store}>
          <Router>
            <Rockets />
          </Router>
        </Provider>
      </React.StrictMode>,
    );
    expect(tree).toMatchSnapshot();
  });
});

describe('Mission components', () => {
  it('Render component', () => {
    const treeMission = render(
      <React.StrictMode>
        <Provider store={store}>
          <Router>
            <Missions />
          </Router>
        </Provider>
      </React.StrictMode>,
    );
    expect(treeMission).toMatchSnapshot();
  });
});

describe('Testing the Profile component', () => {
  test('Check rendering of the Profile component', () => {
    const { getByText } = render(
      <Router>
        <Provider store={store}>
          <MyProfile />
        </Provider>
      </Router>,
    );
    expect(getByText('Rockets')).toBeInTheDocument();
  });
});
