"use strict";
const user2 = {
    username: 'Jessica Lee',
    id: 460000201904141743,
    token: '460000201904141743',
    avatar: 'http://dummyimage.com/200x200',
    role: 'vip'
};
// function pick(o: Obj, name: string[]) {
//     return name.map(n => o[n]);
// }
class Images {
    constructor() {
        this.src = 'https://www.google.com.hk/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png';
        this.alt = '谷歌';
        this.width = 500;
    }
}
function Pick(o, name) {
    return name.map(n => o[n]);
}
const res = Pick(user2, ['token', 'id', 'role']);
