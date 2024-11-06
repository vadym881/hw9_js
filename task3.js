const data = [
    { type: 'food', name: 'Pizza' },
    { type: 'drink', name: 'Coffee' },
    { type: 'food', name: 'Hot Dog' }
];

console.log(group(data, (item) => item.type));

function group(array, func) {
    // return Object.groupBy(array, func)

    const result = {};
    for (const el of array) {
        const key = func(el);
        if (!result[key]) {
            result[key] = [];
        }
        result[key].push(el);
    }
    return result;
}
