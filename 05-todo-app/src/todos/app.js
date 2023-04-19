import html from "./app.html?raw";

/**
 *
 * @param {String} elementId
 */
export const App = ( elementId) => {
    // when the function is call it
    (() => {
        const app = document.createElement('div');
        app.innerHTML = html;
        document.querySelector(elementId).append( app );
    })();

}