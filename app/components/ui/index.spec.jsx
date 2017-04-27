import { dropDownClassName, panelClassName} from './index';

describe("dropDownClassName function", () => {
    it("should return only btn-group when passed false", () => {
        const result = dropDownClassName(false);
        expect(result).toBe('btn-group');
    });

    it("should return btn-group open' when passed true", () => {
        const result = dropDownClassName(true);
        expect(result).toBe('btn-group open');
    });
});

describe("panelClassName function", () => {
    it("should return only popup panel hide when passed false", () => {
        const result = panelClassName(false);
        expect(result).toBe('popup panel hide');
    });

    it("should return popup panel when passed true", () => {
        const result = panelClassName(true);
        expect(result).toBe('popup panel');
    });
});
