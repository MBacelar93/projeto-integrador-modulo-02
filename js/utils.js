export function debounce(funcao, delay) {
    let timerId;

    return function (...args) {
        clearTimeout(timerId);
        timerId = setTimeout(() => {
            funcao(...args);
        }, delay);
    };
}