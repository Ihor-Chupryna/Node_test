
const path = require('path');
const os = require('os');
const fs = require('fs');

const joinedPath = path.join('test', 'files', 'public', 'text.txt');
//path.join - добавляет '/': test/files/public/text.txt

const normalizedPath = path.normalize('test////files////public//text.txt');
//path.normalize = убирает лишние '/': test/files/public/text.txt

const resolvedPath = path.resolve('test////files////public//text.txt')
//path.resolve = убирает лишние '/' и возвращает абсолютный путь:
//home/ihor/WebstormProjects/Node_test/lesson1/test/files/public/text.txt

/*__________________________________________________________________________*/
// console.log(os.cpus()) - информация о процессоре
// console.log(os.cpus().length) - количество ядер процессора
// console.log(os.arch())- архитектура OS
/*__________________________________________________________________________*/

// fs.writeFileSync(path.join(__dirname, 'files', 'file.txt'), 'some data');
// /*writeFileSync - создает файл (синхронный метод)*/

// fs.writeFile(path.join(__dirname, 'files', 'file2.txt'), 'SOME DATA', (err) => {
//     if (err) {
//         console.log(err);
//         throw err
//     }
// })
/*writeFile - создает файл (асинхронный метод)*/

// fs.readFile(path.join(__dirname, 'files', 'file2.txt'), (err, data)=> {
//     if (err) {
//         console.log(err);
//         throw err
//     }
//     console.log(data.toString())
// });
/*readFile - читает файл, возвращает buffer, toString - стринга.*/

// fs.appendFile(path.join(__dirname,'files', 'file2.txt' ), '\nNEW DATA', (err)=> {
//     if (err) {
//         console.log(err)
//         throw err
//     }
// })
//appendFile - записывает в файл (n\ - с новой строки).

// fs.appendFile(path.join(__dirname,'files', 'file2.txt' ), '\nNEW DATA', {flag: 'a'},(err)=> {
//     if (err) {
//         console.log(err)
//         throw err
//     }
// })
//appendFile - записывает в файл,
// options: flag: 'a' - дописывает в файл,
//          flag: 'w' - перезаписывает файле.

// fs.truncate(path.join(__dirname, 'files', 'file2.txt'), (err)=> {
//     if (err) {
//         console.log(err)
//         throw err
//     }
// })
//truncate - очищает файл.

// fs.unlink(path.join(__dirname, 'files', 'file2.txt'), (err) => {
//    if (err) {
//        console.log(err)
//    }
// })
// unlink - удаляет файл.

// fs.mkdir(path.join(__dirname, 'public'), (err)=> {
//     if (err) {
//         console.log(err)
//     }
// })
// mkdir - создает папку(вложенные не создает).

// fs.mkdir(path.join(__dirname, 'public', 'tests', 'test'), {recursive: true},(err)=> {
//     if (err) {
//         console.log(err)
//     }
// })
// mkdir - создает папку(вложенные не создает),
// options: {recursive: true} - создает папки рекурсивно (создает вложенные).

// fs.rmdir(path.join(__dirname, 'test2'),(err)=> {
//    if (err) {
//        console.log(err)
//    }
// })
//rmdir - удаляет директорию(вложенные папки не удаляет).

// fs.readdir(path.join(__dirname, 'test3.txt'), (err, data) => {
//     if (err) {
//         console.log(err)
//         throw err
//     }
//     console.log(data)
// })
//readdir - читает папку.

// fs.rename(path.join(__dirname, 'test', 'test3.txt'), path.join(__dirname, 'test', 'test2.txt'), (err)=> {
//     if (err) {
//         console.log(err)
//     }
// })
// rename - переименовывает файлы(директории указываются одинаковые, а файлы разные)
//
// fs.rename(path.join(__dirname, 'test', 'test2.txt'), path.join(__dirname, 'public', 'test2.txt'), (err)=> {
//     if (err) {
//         console.log(err)
//     }
// })

// rename - перемещает файлы(файл указывают один и тот-же, а директории разные).
