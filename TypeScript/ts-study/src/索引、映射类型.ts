const user2 = {
    username: 'Jessica Lee',
    id: 460000201904141743,
    token: '460000201904141743',
    avatar: 'http://dummyimage.com/200x200',
    role: 'vip'
}

interface Obj {
    [key: string]: any
}

// function pick(o: Obj, name: string[]) {
//     return name.map(n => o[n]);
// }

class Images {
    public src: string = 'https://www.google.com.hk/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'
    public alt: string = '谷歌'
    public width: number = 500
}

type propsNames = keyof Images

type propsType = Images[propsNames];


function Pick<T, K extends keyof T>(o: T, name: K[]): T[K][] {
    return name.map(n => o[n]);
}

const res = Pick(user2, ['token', 'id', 'role']);


interface PUser {
    username: string
    id: number
    token: string
    avatar: string
    role: string
}

type partial<T> = { [K in keyof T]?: T[K] };

type partialUser = partial<PUser>;



