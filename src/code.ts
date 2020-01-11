import { Observable } from 'rxjs';

const addItmem = (val: any) => {
    const node = document.createElement('li')
    const textnode = document.createTextNode(val)
    node.appendChild(textnode)
    document.getElementById('output').appendChild(node)
}

const observable = Observable.create((observer: any) => {
    try {
        observer.next('Hey guys!')
        observer.next('How are you?!')
        setInterval(() => {

            observer.next('FineI am fine')
            console.log('interval test')
        }, 2000)


    } catch (err) {
        observer.error(err)
    }
});

const observer = observable.subscribe((x: any) => {
    addItmem(x)
},
    (error: any) => { addItmem(error) }
    ,
    () => { addItmem('completed') });

 

   

setTimeout(() => {
    const observer2 = observable.subscribe((x: any) => {
        addItmem('Subsriber 2: ' + x)
    });
}, 1000)
