let q = id('q');
let w = id('w');
let e = id('e');
let r = id('r');
let t = id('t');
let y = id('y');
let u = id('u');
let i = id('i');
let o = id('o');
let p = id('p');
let a = id('a');
let s = id('s');
let d = id('d');
let f = id('f');
let g = id('g');
let h = id('h');
let j = id('j');
let k = id('k');
let l = id('l');
let z = id('z');
let x = id('x');
let c = id('c');
let v = id('v');
let b = id('b');
let n = id('n');
let m = id('m');
let del = id('del');
let one = id('1');
let two = id('2');
let three = id('3');
let four = id('4');
let five = id('5');
let six = id('6');
let seven = id('7');
let eight = id('8');
let nine = id('9');
let zero = id('0');
let space = id('space');
let copyBtn = id('copy');


function id(id){
    return document.getElementById(id);
}
function addLetter(letter){
    let input = id('target');
    input = Array.from(input.textContent);
    input.push(letter);
    let word = '';
    for(let lett of input){
        word += lett;
    }
    
    id('target').textContent = word;
}
  
function deleteLetter(){
    let input = id('target');
    let word = '';
    input = Array.from(input.textContent);
    input.pop();
    for(let lett of input){
       word += lett; 
    }
    id('target').textContent = word;
}


q.addEventListener('click', addLetter.bind(this,'q'));
w.addEventListener('click', addLetter.bind(this,'w'));
e.addEventListener('click', addLetter.bind(this,'e'));
r.addEventListener('click', addLetter.bind(this,'r'));
t.addEventListener('click', addLetter.bind(this, 't'));
y.addEventListener('click', addLetter.bind(this, 'y'));
u.addEventListener('click', addLetter.bind(this, 'u'));
i.addEventListener('click', addLetter.bind(this, 'i'));
o.addEventListener('click', addLetter.bind(this, 'o'));
p.addEventListener('click', addLetter.bind(this, 'p'));
a.addEventListener('click', addLetter.bind(this, 'a'));
s.addEventListener('click', addLetter.bind(this, 's'));
d.addEventListener('click', addLetter.bind(this, 'd'));
f.addEventListener('click', addLetter.bind(this, 'f'));
g.addEventListener('click', addLetter.bind(this, 'g'));
h.addEventListener('click', addLetter.bind(this, 'h'));
j.addEventListener('click', addLetter.bind(this, 'j'));
k.addEventListener('click', addLetter.bind(this, 'k'));
l.addEventListener('click', addLetter.bind(this, 'l'));
z.addEventListener('click', addLetter.bind(this, 'z'));
x.addEventListener('click', addLetter.bind(this, 'x'));
c.addEventListener('click', addLetter.bind(this, 'c'));
v.addEventListener('click', addLetter.bind(this, 'v'));
b.addEventListener('click', addLetter.bind(this, 'b'));
n.addEventListener('click', addLetter.bind(this, 'n'));
m.addEventListener('click', addLetter.bind(this, 'm'));
del.addEventListener('click', deleteLetter);
one.addEventListener('click', addLetter.bind(this, '1'));
two.addEventListener('click', addLetter.bind(this, '2'));
three.addEventListener('click', addLetter.bind(this,'3'));
four.addEventListener('click', addLetter.bind(this, '4'));
five.addEventListener('click', addLetter.bind(this, '5'));
six.addEventListener('click', addLetter.bind(this, '6'));
seven.addEventListener('click', addLetter.bind(this, '7'));
eight.addEventListener('click', addLetter.bind(this, '8'));
nine.addEventListener('click', addLetter.bind(this, '9'));
zero.addEventListener('click',addLetter.bind(this,'0'));
space.addEventListener('click', addLetter.bind(this, ' '));