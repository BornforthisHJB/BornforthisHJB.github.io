import { logger } from "../utils.js";
export const deprecatedLogger = ({ options, deprecatedOption, newOption, msg = "", scope = "", }) => {
    if (deprecatedOption in options) {
        logger.warn(`"${deprecatedOption}" is deprecated${scope ? ` in ${scope}` : ""}, please use "${newOption}" instead.${msg ? `\n${msg}` : ""}`);
        if (newOption.includes(".")) {
            const keys = newOption.split(".");
            let temp = options;
            keys.forEach((key, index) => {
                if (index !== keys.length - 1) {
                    // ensure level exists
                    temp[key] = temp[key] || {};
                    temp = temp[key];
                }
                else
                    temp[key] = options[deprecatedOption];
            });
        }
        else
            options[newOption] = options[deprecatedOption];
        delete options[deprecatedOption];
    }
};
export const droppedLogger = (options, droppedOption, hint = "", newOption = "") => {
    if (droppedOption in options) {
        logger.error(`"${droppedOption}" is removed${newOption
            ? `, please use ${newOption} instead.`
            : " and no longer supported"}${hint ? `\n${hint}` : ""}`);
        if (!newOption)
            delete options[droppedOption];
    }
};
//# sourceMappingURL=utils.js.map