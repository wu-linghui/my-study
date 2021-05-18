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
    const promises = names.map(item => 
        {return getZhihuColumn(item)} // 按照设计的步骤走
        // getZhihuColumn(item) // 按照设计的步骤走
        // {getZhihuColumn(item)} // 没有结果返回——undefined
    );
    for (const promise of promises) {
        const column = await promise;
        // console.log(column);
        console.log(column && column.title ? column.title : '1');
        console.log(column && column.description ? column.description : '2');
    }
}


showColumnInfo();
