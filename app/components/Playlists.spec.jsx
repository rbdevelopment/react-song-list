import React from 'react';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import Playlists from './Playlists';
import DropDownButtonContainer from '../containers/DropDownButtonContainer';

describe('<Playlists />', () => {
    it("should render DropDownButtonContainer", () => {
        const renderer = ReactShallowRenderer.createRenderer();
        renderer.render(<Playlists />);
        const result = renderer.getRenderOutput();
        expect(result).toEqual([
            (<DropDownButtonContainer />)
        ][0]);
    });
});
