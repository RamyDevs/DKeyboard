let ذ = id('ذ');
ذ.textContent = 'ذ';
let one1 = id('١');
one1.textContent = '١';
let two2 = id('٢');
two2.textContent = '٢';
let three3 = id('٣');
three3.textContent = '٣';
let four4 = id('٤');
four4.textContent = '٤';
let five5 = id('٥');
five5.textContent = '٥';
let six6 = id('٦');
six6.textContent = '٦';
let seven7 = id('٧');
seven7.textContent = '٧';
let eight8 = id('٨');
eight8.textContent = '٨';
let nine9 = id('٩');
nine9.textContent = '٩';
let zero0 = id('٠');
zero0.textContent = '٠';
let ض = id('ض');
ض.textContent = 'ض';
let ص = id('ص');
ص.textContent = 'ص';
let ث = id('ث');
ث.textContent = 'ث';
let ق = id('ق');
ق.textContent = 'ق';
let ف = id('ف');
ف.textContent = 'ف';
let غ = id('غ');
غ.textContent = 'غ';
let ع = id('ع');
ع.textContent = 'ع';
let ه = id('ه');
ه.textContent = 'ه';
let خ = id('خ');
خ.textContent = 'خ';
let ح = id('ح');
ح.textContent = 'ح';
let ج = id('ج');
ج.textContent = 'ج';
let د = id('د');
د.textContent = 'د';
let ش = id('ش');
ش.textContent = 'ش';
let س = id('س');
س.textContent = 'س';
let ي = id('ي');
ي.textContent = 'ي';
let ب = id('ب');
ب.textContent = 'ب';
let ل = id('ل');
ل.textContent = 'ل';
let ا = id('ا');
ا.textContent = 'ا';
let ت = id('ت');
ت.textContent = 'ت';
let ن = id('ن');
ن.textContent = 'ن';
let م = id('م');
م.textContent = 'م';
let ك = id('ك');
ك.textContent = 'ك';
let ط = id('ط');
ط.textContent = 'ط';
let ئ = id('ئ');
ئ.textContent = 'ئ';
let ء = id('ء');
ء.textContent = 'ء';
let ؤ = id('ؤ');
ؤ.textContent = 'ؤ';
let ر = id('ر');
ر.textContent = 'ر';
let لا = id('لا');
لا.textContent = 'لا';
let ى = id('ى');
ى.textContent = 'ى';
let ة = id('ة');
ة.textContent = 'ة';
let و = id('و');
و.textContent = 'و';
let ز = id('ز');
ز.textContent = 'ز';
let ظ = id('ظ');
ظ.textContent = 'ظ';
let space1 = id('space1');
let del1 = id('del1');

ذ.addEventListener('click', addLetter.bind(this, 'ذ'));
one1.addEventListener('click', addLetter.bind(this, one1.textContent));
two2.addEventListener('click', addLetter.bind(this, two2.textContent));
three3.addEventListener('click', addLetter.bind(this, three3.textContent));
four4.addEventListener('click', addLetter.bind(this, four4.textContent));
five5.addEventListener('click', addLetter.bind(this, five5.textContent));
six6.addEventListener('click', addLetter.bind(this, six6.textContent));
seven7.addEventListener('click', addLetter.bind(this, seven7.textContent));
eight8.addEventListener('click', addLetter.bind(this, eight8.textContent));
nine9.addEventListener('click', addLetter.bind(this, nine9.textContent));
zero0.addEventListener('click', addLetter.bind(this, zero0.textContent));
ض.addEventListener('click', addLetter.bind(this, 'ض'));
ص.addEventListener('click', addLetter.bind(this, 'ص'));
ث.addEventListener('click', addLetter.bind(this, 'ث'));
ق.addEventListener('click', addLetter.bind(this, 'ق'));
ف.addEventListener('click', addLetter.bind(this, 'ف'));
غ.addEventListener('click', addLetter.bind(this, 'غ'));
ع.addEventListener('click', addLetter.bind(this, 'ع'));
ه.addEventListener('click', addLetter.bind(this, 'ه'));
خ.addEventListener('click', addLetter.bind(this, 'خ'));
ح.addEventListener('click', addLetter.bind(this, 'ح'));
ج.addEventListener('click', addLetter.bind(this, 'ج'));
د.addEventListener('click', addLetter.bind(this, 'د'));
ش.addEventListener('click', addLetter.bind(this, 'ش'));
س.addEventListener('click', addLetter.bind(this, 'س'));
ي.addEventListener('click', addLetter.bind(this, 'ي'));
ب.addEventListener('click', addLetter.bind(this, 'ب'));
ل.addEventListener('click', addLetter.bind(this, 'ل'));
ا.addEventListener('click', addLetter.bind(this, 'ا'));
ت.addEventListener('click', addLetter.bind(this, 'ت'));
ن.addEventListener('click', addLetter.bind(this, 'ن'));
م.addEventListener('click', addLetter.bind(this, 'م'));
ك.addEventListener('click', addLetter.bind(this, 'ك'));
ط.addEventListener('click', addLetter.bind(this, 'ط'));
ئ.addEventListener('click', addLetter.bind(this, 'ئ'));
ء.addEventListener('click', addLetter.bind(this, 'ء'));
ؤ.addEventListener('click', addLetter.bind(this, 'ؤ'));
ر.addEventListener('click', addLetter.bind(this, 'ر'));
لا.addEventListener('click', addLetter.bind(this, 'لا'));
ى.addEventListener('click', addLetter.bind(this, 'ى'));
ة.addEventListener('click', addLetter.bind(this, 'ة'));
و.addEventListener('click', addLetter.bind(this, 'و'));
ز.addEventListener('click', addLetter.bind(this, 'ز'));
ظ.addEventListener('click', addLetter.bind(this, 'ظ'));
space1.addEventListener('click', addLetter.bind(this, ' '));
del1.addEventListener('click', deleteLetter);