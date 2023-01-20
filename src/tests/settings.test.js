import React from "react";
import renderer from "react-test-renderer";
import Settings from "../pages/Settings";

describe('Settings Page rendered correctly', () => {
    it('matches snapshot', () => {
        const settingsPage = renderer.create(<Settings />).toJSON();
        expect(settingsPage).toMatchSnapshot();
    })
})
