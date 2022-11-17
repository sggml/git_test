// ESNext에서 추가되거나, 변경된 문법 7
// 자바스크립트는 비동기처리가 기본
// 비동기 처리를 위해서 -> 콜백함수를 활용하여 순서를 맞춘다 -> 자꾸 진행이 되면 -> 코드가 아주 깊어진다 -> 콜백헬이 발생
// 해결방안
/**
 * - promise ~ then
 * - generator ~ yield
 * - async ~ await => 비동기적 코드를 동기적 코드로 변환 처리해서 사용(가장많이 사용됨)
 *       -통신,디비 등등 엑세스 할때
 */
// 파일 3개를 준비하여 순차적으로 읽어서 출력하는 코드 작성

//js => FS을 처리하는 모듈 => node에서 제공, npmjs.org 가면 전세게에서 제공
const fs = require('fs')

class Test {
    constructor() {
        this.FILE1 = './basic/a.txt'
        this.FILE2 = './basic/b.txt'
        this.FILE3 = './basic/c.txt'
    }
    toStr = (src) => new String(src).toString
    normal() {
        //비동기 함수 => 처리 결과는 등록된 콜백함수를 호출하면서 전달된다
        // 콜백함수의 1번인자는 무조건 에러
        console.log('1. 파일을 읽는다')
        fs.readFile(this.FILE1, (err, data) => {
            console.log(`2. ${this.FILE1}파일을 다 읽었습니다.`, err, this.toStr(data))
            fs.readFile(this.FILE1, (err, data) => {
                console.log(`4. ${this.FILE2}파일을 다 읽었습니다.`, err, this.toStr(data))

            })
            fs.readFile(this.FILE1, (err, data) => {
                console.log(`5. ${this.FILE3}파일을 다 읽었습니다.`, err, this.toStr(data))

            })
        })
        console.log('3. 작업 종료')
    }
}
let t = new Test()
t.normal()
//Promise 패턴
myPromise(filename){
    //비동기 함수를 Promise로 감싸서ㅡ 콜백을 통헤 외부로 전달하겠금 구성
    return new Promise((cb)=>{
        fs.readFile(filename, (err, data)=>{
            cb(data)
        })
    })
    test_myPromise (){
        // Promise 패턴으로 만들어진 객체 사용
        this.myPromise(this.FILE1)
        .then((data)=>{
            console.log('a.txt 읽었다 =>',this. toStr(data))
            return this.myPromise(this.FILE2)
        })
        .then((data)=>{ console.log('b.txt 읽었다 =>',this. Str(data))
        return this.myPromise(this.FILE2)})
        .then((data)=>{ console.log('c.txt 읽었다 =>',data)
        return this.myPromise(this.FILE2)})
    }
}

//ansync ~ await 패턴(핵심)
t_myPromise2(){
    // Promise 패턴으로 만들어진 객체 사용
    this.myPromise(this.FILE1)
    .then((data)=>{
        console.log('a.txt 읽었다 =>',this. toStr(data))
        return this.myPromise(this.FILE2)
    })
    .then((data)=>{ console.log('b.txt 읽었다 =>',this. Str(data))
    return this.myPromise(this.FILE2)})
    .then((data)=>{ console.log('c.txt 읽었다 =>',data)
    return this.myPromise(this.FILE2)})
}
// 비동기 함수 앞에는 await를 붙이고 이를 감싸는 바깥쪽 함수는 async 를 붙인다
ansync test (){
    console.log(this.toStr(await this.t_myPromise2(this.FILE1)))
(this.toStr(await this.t_myPromise2(this.FILE2)))onsole.log(this.toStr(await this.t_myPromise2(this.FILE1)))
onsole.log(this.toStr(await this.t_myPromise2(this.FILE3)))