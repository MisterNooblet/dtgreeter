`use strict`;
function greet(name) {
    const currentHour = new Date().getHours();
    if (currentHour >= 5 && currentHour < 12) {
        if (name) {
            return `Good morning, ${name}`;
        } else {
            return 'Good morning';
        }
    } else if (currentHour >= 12 && currentHour < 17) {
        if (name) {
            return `Good afternoon, ${name}`;
        } else {
            return 'Good afternoon';
        }
    } else if (currentHour >= 17 && currentHour < 21) {
        if (name) {
            return `Good evening, ${name}`;
        } else {
            return 'Good evening';
        }
    } else {
        if (name) {
            return `Good night, ${name}`;
        } else {
            return 'Good night';
        }
    }
};

module.exports = greet