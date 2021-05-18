
const fetch = require('node-fetch')
async function getZhihuColumn(id) {
    const url = `https://zhuanlan.zhihu.com/api/columns/${id}`;
    const response = await fetch(url);
    return await response.json();
}


const showColumnInfo = async () => {
    const [feweekly, toolingtips]  = await Promise.all([
        getZhihuColumn('feweekly'),
        getZhihuColumn('toolingtips')
    ]);
    // const feweekly = await ;
    // const toolingtips = await ;
    console.log(feweekly.title);
    console.log(feweekly.description);
    console.log(toolingtips.title);
    console.log(toolingtips.description);
}

showColumnInfo();

const test = async () => {
    console.log('1');
    let a = await returnNum();
    console.log(a)
    console.log('2');
}

function returnNum (){
    console.log('3');
    return '3';
}

test();



