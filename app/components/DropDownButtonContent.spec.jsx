import React from 'react';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import DropDownButtonContent from './DropDownButtonContent';

describe('<DropDownButtonContent />', () => {
    it("should render text with a caret", () => {
        const renderer = ReactShallowRenderer.createRenderer();
        renderer.render(<DropDownButtonContent text="test" />);
        const result = renderer.getRenderOutput();
        expect(result).toEqual([
            (<span>test <span className="caret"></span></span>)
        ][0]);
    });
});
