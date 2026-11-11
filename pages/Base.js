import { expect } from "@playwright/test";

class Base {
    constructor(page) {
        this.page = page;
    }

    async pageOpen() {
        await this.page.goto(process.env.BASE_URL);
    }
}

export default Base