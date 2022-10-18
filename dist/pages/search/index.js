"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const navbar_1 = __importDefault(require("../../components/navbar/navbar"));
const departureHTML = document.querySelector('#root');
const navbar = new navbar_1.default('Home', '/home', 'meals', '/meals', 'meal', '/meal');
departureHTML.innerHTML = `
    ${navbar}
`;
