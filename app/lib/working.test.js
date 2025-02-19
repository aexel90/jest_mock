import { jest } from '@jest/globals';

jest.unstable_mockModule('./service', async () => {
    class MockedService {
        getValue() {
            return 'mocked_value';
        }
    }
    return {
        default: new MockedService(),
    };
});

describe('test run', () => {
    it('should log the correct message', async () => {
        const { run } = await import('./main');
        console.log = jest.fn();
        run();
        expect(console.log).toHaveBeenCalledWith('Executing service with value mocked_value');
    });
});
