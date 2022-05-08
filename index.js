// Import stylesheets
import './style.css';

// logical OR operator (||) to specify a default value:
// ****************************************************

function createAlbum(title, artist) {
  return {
    title: title || '(Untitled)',
    artist: artist || '(Unknown)',
  };
}

console.log(createAlbum('', 'Amrit'));
// {title: "(Untitled)", artist: "Amrit"}

console.log(createAlbum());
//{title: "(Untitled)", artist: "(Unknown)"}

console.log(createAlbum('Talko Pani'));
//{title: "Talko Pani", artist: "(Unknown)"}

// ES2020 The Nullish Coalesceing Operator(??) to create default values
// *******************************************************

function createSong(title, artist) {
  return {
    title: title ?? '(Untitled)',
    artist: artist ?? '(Unknown)',
  };
}

console.log(createSong('', 'Amrit'));
// {title: "", artist: "Amrit"}

console.log(createSong());
// {title: "(Untitled)", artist: "(Unknown)"}

console.log(createSong('Talko Pani'));
//{title: "Talko Pani", artist: "(Unknown)"}

// ************* Differences between || and ?? *************
// *********************************************************

// Logical OR operator returns the left operand if it's truthy and the right operand otherwise.
console.log('********** true/false ***********');
console.log('foo' || false); //foo
console.log(false || 'foo'); //foo

console.log(true || 'foo'); //true
console.log('foo' || true); //foo

console.log('********** null ***********');
console.log('foo' || null); //foo
console.log(null || 'foo'); //foo

console.log('********** undefined ***********');
console.log(undefined || 'foo'); //foo
console.log('foo' || undefined); //foo

console.log('********** null ***********');
console.log('foo' || NaN); //foo
console.log(NaN || 'foo'); //foo

console.log('********** 0 ***********');
console.log(0 || 'foo'); //foo
console.log('foo' || 0); //foo

console.log('********** true/false/null/undefined/null/0 ***********');
console.log(true || false); //true
console.log(false || true); //true

console.log(null || undefined); //undefined
console.log(undefined || null); //null

console.log(0 || undefined); //undefined
console.log(undefined || 0); //0

console.log(0 || null); //null
console.log(NaN || 0); //0

console.log('********** empty ***********');
console.log('' || 'foo'); //foo
console.log('foo' || ''); //foo

// BUT BUT BUT ..........................
// ********************************************
console.log('BUT BUT BUT ..........................');

//Logical OR operator can have unexpected results if we use a falsy left operand that should be considered value

const boo = 0; //0 is our intended value and is falsy

const bar = boo || 100;
console.log(bar); //100

//This is where the nullish coalescing operating can help us out. The nullish coalescing operator is similar to the logical OR, but is more strict: it returns the right operand only if the left is null or undefined:

console.log('********** ?? ***********');

console.log(null ?? 'hoo'); //hoo
console.log('hoo' ?? null); //hoo

console.log(undefined ?? 'hoo'); //hoo

console.log(null ?? true); //true
console.log(undefined ?? true); //true

console.log(null ?? false); //false
console.log(undefined ?? false); //false
console.log(null ?? undefined); //undefined
console.log(undefined ?? null); //null

console.log('********** true/false/0/NaN/empty ***********');
//The other falsy values will be returned if they’re used as the left operand:

console.log(false ?? 'hoo'); // false
console.log('hoo' ?? false); //hoo

console.log('hoo' ?? true); //hoo
console.log(true ?? 'hoo'); //true

console.log(true ?? false); //true
console.log(false ?? true); //false

console.log(NaN ?? 'hoo'); //null   --??
console.log(0 ?? 'hoo'); //0   --?

console.log('' ?? 'hoo'); //  (empty)  --??

console.log(
  ' ********** Using a falsy left operand that should be considered value: ***********'
);
// *************************************************

const hoo = 0; // 0 is our intended value and is falsy

const hat = hoo ?? 100;

console.log(hat); //0
// Do you remember? While using logical OR (||) it was 100 ...
