const DELIMITER = ', ';
const START_POS = 0;
const NO_OF_TRAIL_CHARACTERS = 2;

class ObjectFormatter {
    static format(obj) {
        let formattedMessage = '';

        if(obj) {
            for (let property in obj) {
                var validation = obj[property] && typeof obj[property] !== 'function';

                if(validation) {
                    formattedMessage += `${obj[property]}${DELIMITER}`;
                }
            }

            formattedMessage = formattedMessage.substr(START_POS, formattedMessage.length - NO_OF_TRAIL_CHARACTERS);
        }

        return formattedMessage;
    }
}

export { ObjectFormatter };