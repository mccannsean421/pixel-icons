import React from "react";
import Icon from "../Icon";
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from "redux-mock-store";

const mockProps = {
    name: "Mock icon",
    svg: `
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M25 8H15V13H10V18H5V28V37V38V46V47V56H9V62H14V67H19V72H24V77H29V82H35V87H40V92H50H60V87H65V82H69V77H74V72H79V67H84V62H90V56H95V47V46V37V28V27V18H90V13H85V8H75H65V13H60V18H55V23H50H45V18H40V13H35V8H25ZM65 23V28H60V33H55V38H45V33H40V28H35V23H30V18H25H20V23H15V28V37V38V46V47V52H19V57H24V62H29V67H34V72H39V77H45V82H50H55V77H59V72H64V67H69V62H74V57H80V52H85V47V46V37V28V27V23H80V18H75H70V23H65Z" fill="#D9D9D9"/>
        </svg>
    `,
}

const mockStore = configureStore([]);

describe("<Icon />", () => {
    
    let store;

    beforeEach(() => {
      store = mockStore({
        // Your Redux state here
        icon: {
          size: 69
        }
      });
    });
    
    it("renders and icon without crashing", () => {
        render(
            <Provider store={store}>        
            <Icon {...mockProps} />
            </Provider>
        );
    });
});