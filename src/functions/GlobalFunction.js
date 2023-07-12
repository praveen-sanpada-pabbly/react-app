

function mean(arr) {
    let total = 0;

    for (let i = 0; i < arr.length; i++) {
        total += Number(arr[i]);
    }

    return Number((total / arr.length).toFixed(3));
};


function median(arr) {
    const { length } = arr;

    arr.sort((a, b) => a - b);

    if (length % 2 === 0) {
        return (Number(arr[length / 2 - 1]) + Number(arr[length / 2])) / 2;
    }

    return Number(arr[(length - 1) / 2].toFixed(3));
};


function mode(arr) {
    const mode = {};
    let max = 0, count = 0;

    for (let i = 0; i < arr.length; i++) {
        const item = arr[i];

        if (mode[item]) {
            mode[item]++;
        } else {
            mode[item] = 1;
        }

        if (count < mode[item]) {
            max = item;
            count = mode[item];
        }
    }

    var resObj = {
        max: max.toFixed(3),
        count: count
    }

    return resObj;
};

export {
    mean,
    median,
    mode
}