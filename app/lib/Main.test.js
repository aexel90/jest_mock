import { jest } from '@jest/globals';
import { run } from './main';

jest.mock('./service', () => {
    return jest.fn().mockImplementation(() => {
        return {
            getValue: jest.fn().mockReturnValue('mocked_value'),
        };
    });
});

describe('test run', () => {
    it('should log the correct message', () => {
        console.log = jest.fn();
        run();
        expect(console.log).toHaveBeenCalledWith('Executing service with value mocked_value');
    });
});
