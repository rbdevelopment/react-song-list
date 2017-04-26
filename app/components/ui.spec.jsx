import { dropDownClassName } from './ui';

describe("dropDownClassName function", () => {
    it("should return only btn-group when passed false", () => {
        const result = dropDownClassName(false);
        expect(result).toBe('btn-group');
    });

    it("should return btn-group open when passed true", () => {
        const result = dropDownClassName(true);
        expect(result).toBe('btn-group open');
    });
});