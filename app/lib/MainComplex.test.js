import { jest } from '@jest/globals';
import { run } from './main';
import service from './service';

jest.mock('./service', () => {
    return {
        __esModule: true,
        default: {
            getValue: jest.fn(),
        },
    };
});

describe('test run', () => {
    it('should log the correct message with mocked_value', () => {
        service.getValue.mockReturnValue('mocked_value');
        console.log = jest.fn();
        run();
        expect(console.log).toHaveBeenCalledWith('Executing service with value mocked_value');
    });

    it('should log the correct message with another_mocked_value', () => {
        service.getValue.mockReturnValue('another_mocked_value');
        console.log = jest.fn();
        run();
        expect(console.log).toHaveBeenCalledWith('Executing service with value another_mocked_value');
    });
});
