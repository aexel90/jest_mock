class Service {
    constructor() {
        this.value = 'A';
        // if (this.value === 'A') {
        //     throw new Error('Cannot instantiate Service');
        // }
    }
    getValue() {
        return this.value;
    }
}

export default new Service();
