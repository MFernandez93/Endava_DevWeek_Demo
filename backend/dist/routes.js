"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const faker_1 = require("@faker-js/faker");
const router = (0, express_1.Router)();
router.get('/', (_req, res) => {
    res.status(200).send({ message: faker_1.faker.hacker.phrase() });
});
exports.default = router;
