import service from './service';

export function run() {
    const value = service.getValue();
    console.log('Executing service with value ' + value);
}
