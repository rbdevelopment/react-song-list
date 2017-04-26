import * as actions from './actions';

describe('addSong action', () => {
    it('should set action type to add song', () => {
        expect(actions.addSong('Marry go round', 'Popular singers', 1901)).toEqual({
            type: 'add song',
            title: 'Marry go round',
            artist: 'Popular singers',
            year: 1901
        });
    });
});