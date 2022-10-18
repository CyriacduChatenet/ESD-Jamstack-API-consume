"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Navbar {
    constructor(firstLink, firstLabel, secondLink, secondLabel, thirdLink, thirdLabel) {
        () => {
            return `
                <div>
                    <ul>
                        <li>
                            <a href=${firstLink}>${firstLabel}</a>
                        </li>
                        <li>
                            <a href=${secondLink}>${secondLabel}</a>
                        </li>
                        <li>
                            <a href=${thirdLink}>${thirdLabel}</a>
                        </li>
                    </ul>
                </div>
            `;
        };
    }
}
;
exports.default = Navbar;
