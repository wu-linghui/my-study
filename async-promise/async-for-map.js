const fetch = require('node-fetch')
const bluebird = require('bluebird');
async function getZhihuColumn(id) {
    await bluebird.delay(1000);
    const url = `https://zhuanlan.zhihu.com/api/columns/${id}`;
    const response = await fetch(url);
    // console.log(response.json())
    return await response.json();
}


const showColumnInfo = async () => {
    const names = ['feweekly', 'toolingtips'];
    const promises = names.map(item => {
        getZhihuColumn(item);
    });
    for (let promise of promises) {
        const column = await promise;
        console.log(column)
        // console.log(column.title);
        // console.log(column.description);
    }
}


showColumnInfo();
