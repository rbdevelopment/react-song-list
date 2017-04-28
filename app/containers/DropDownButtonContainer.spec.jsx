import React from 'react';
import configureStore from 'redux-mock-store';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import DropDownButtonContainer from './DropDownButtonContainer';

describe('<DropDownButtonContainer />', () => {
    const renderComponent = () => {
        const mockStore = configureStore();
        const store = mockStore({playlists: ['test'], selectedPlaylist: 'selected item'});
        const renderer = ReactShallowRenderer.createRenderer();
        renderer.render(<DropDownButtonContainer store={store} />);
        return renderer.getRenderOutput();
    }

    it("should render OnClickOutside(DropDownButton)", () => {
        const result = renderComponent();
        expect(result.type.displayName).toEqual('OnClickOutside(DropDownButton)');
    });

    it("should assign items", () => {
        const result = renderComponent();
        expect(result.props.items).toEqual(['test']);
    });

    it("should assign selectedPlaylist", () => {
        const result = renderComponent();
        expect(result.props.selectedPlaylist).toEqual('selected item');
    });

    it("should return the select playlist action with the playlist name", () => {
        const result = renderComponent();
        const onItemChangedResult = result.props.onItemChanged('wedding playlist');
        const expected = { type: 'select playlist', name: 'wedding playlist' };
        expect(expected).toEqual(onItemChangedResult);
    });
});
