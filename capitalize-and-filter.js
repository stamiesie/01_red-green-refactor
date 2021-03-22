const capitalizeAndFilter = (array) => {
    const upperCase = array.map(word => word.toUpperCase()).filter(word => word.charAt(0) !== 'F');
    return upperCase;

};

// const capitalizeAndFilter = (array) => {
//     for (let i = 0; i < array.length; i++) {
//         array[i] = array[i].toUpperCase();
//         if (array[i][0] === 'F') {
//             array.splice([i]);
//         }
//     }
//     return array;
// };

module.exports = capitalizeAndFilter;
