
declare function fc <T extends boolean>(x: T): T extends true ? string : number;

const h = fc(Math.random() < 0.5);
const yh= fc(false);
const zh = fc(true);



 