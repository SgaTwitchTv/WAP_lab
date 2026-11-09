/*TYPE COERCION */
console.log("TYPE COERCION")
console.log(`"55" + 44 = ${"55" + 44}, type:${typeof ("55" + 44)}`);
console.log(`"55" + "44" = ${"55" + "44"}, type:${typeof ("55" + "44")}`);
console.log(`"55" + 44 = ${"55" - 44}, type:${typeof ("55" - 44)}`);
console.log(`"J" + "S" = ${"J" + "S"}, type:${typeof ("J" + "S")}`);
console.log(`"J" - "S" = ${"J" + "S"}, type:${typeof ("J" - "S")}`);
console.log("-------------")

console.log("OPERATORS")
/* OPERATORS*/
let user;
console.log(user) 
user = null;
console.log(user) 
// console.log(user.name) 
console.log(user?.name)
console.log(user ?? "Kate") 
console.log(`55 === "55":${"55" === 55}`);
console.log(`0 === false:${0 === false}`);
console.log(`null === undefined:${null === undefined}`);

console.log(`55 == "55":${"55" == 55}`);
console.log(`0 == false:${0 == false}`);
console.log(`null == undefined:${null == undefined}`);
console.log("-------------")

console.log("FUNCTION DECLARATIONS")
/* FUNCTION DECLARATIONS */

// ----------- Standard Function declaration ----------- 
//  It can be reused and called before its declaration.
console.log(isStudentStandardDeclaration(17))
function isStudentStandardDeclaration(age) {
    return age > 18;
}


/* ----------- Function expression ----------- 
 A function assigned to a variable with const (prevents reassigment) or let. 
Can be called after initialization. Can be anonymous or named. Named one (checkAge) can be called only inside itself.
 */

const isStudentAnonymous = function(age) {
    return age > 18
}

const isStudentNamed = function checkAge(age) {
    return age > 18
}

/* ----------- Arrow function => ----------- 
Good for callbacks and simple operations. A function assigned to a variable with 
const (prevents reassigment) or let. Shortend version (without {}) allows implicit return (without return keyword, which 
is otherwise always neceserry). Cannot be called before initialization.*/

const isStudentArrow = (age) => {
    return age > 18;
}
// for one parameter, () are optional, for 0 or multiple, they are required
const isStudentArrowImplicit = age => age > 18;
console.log("-------------")
console.log("FIRST-CLASS FUNCTIONS")
// -------------------------------------------------
/* FIRST-CLASS FUNCTIONS*/ 
function isStudent(age) {
    return age > 18;
}

function hasRequiredAccess(level) {
    return level > 3;
}

// ----------- ASSIGNING TO A VARIABLE ----------- 
// Copy of a function reference
const checkAge = isStudent;
// Calling a function and assigning its result to a variable
const resultCheckAge = isStudent(20);

console.log("1.Function asigned to variable")
console.log(`Copy of function reference (checkAge(20)): ${checkAge(20)}`)
console.log(`Calling a function and assigning its results to a variable (resultCheckAge): ${resultCheckAge}`)

// ----------- FUNCTION AS AN ARGUMENT (CALLBACK) ----------- 

function securityCheck(value, callback) {
    return callback(value);
} 
console.log("2.Function passed as an argument")
console.log(`securityCheck(20, isStudent): ${securityCheck(20, isStudent)}`)
console.log(`securityCheck(5, hasRequiredAccess): ${securityCheck(5, hasRequiredAccess)}`)

// ----------- FUNCTION AS RETURN ----------- 

function accessChecker(requiredLevel) {
    return function(level) {
        return level >= requiredLevel
    };
}

const instructorLevelAccessCheck = accessChecker(3)
console.log("3.Function as return from other function")
console.log(`instructorLevelAccessCheck(2): ${instructorLevelAccessCheck(2)}`)
console.log(`instructorLevelAccessCheck(4): ${instructorLevelAccessCheck(4)}`)
console.log("-------------")
console.log("LET vs CONST (PRIMITIVE vs OBJECT")
/*
let vs const for primitive type and plain object
 */
let cityObjectLet = {name: "Warsaw"}
let cityObjectLetCopy = cityObjectLet
const cityObjectConst = {name: "Warsaw"}
const cityObjectConstCopy = cityObjectConst

// (Objects) For let-let modification and reassignment is possible, for const-const only modification.
// With let-const mix, modification would be possible for both
console.log(`cityObjectLet (name: Warsaw): ${cityObjectLet}`)
console.log(`cityObjectLet.name (name: Warsaw): ${cityObjectLet.name}`)

console.log(`cityObjectConst(name: Warsaw): ${cityObjectConst}`)
console.log(`cityObjectConst.name (name: Warsaw): ${cityObjectConst.name}`)

console.log(`cityObjectLet === cityObjectLetCopy: ${cityObjectLet === cityObjectLetCopy}`)
console.log(`cityObjectConst === cityObjectConstCopy: ${cityObjectConst === cityObjectConstCopy}`)
cityObjectLetCopy.name = "Barcelona"

console.log(`cityObjectLetCopy.name modification (name: "Barcelona"): ${cityObjectLetCopy.name}`)
console.log(`cityObjectLet === cityObjectLetCopy (modification): ${cityObjectLet === cityObjectLetCopy}`)
cityObjectLet = {name: "Cracow", capitolCity: true}
console.log(`cityObjectLet.name cityObjectLet.capitolCity reassingment (name: "Cracow", capitolCity: true): ${cityObjectLet.name}, ${cityObjectLet.capitolCity}`)
console.log(`cityObjectLet === cityObjectLetCopy (reassingment): ${cityObjectLet === cityObjectLetCopy}`)

cityObjectConstCopy.name = "Barcelona"
console.log(`cityObjectConstCopy.name modification (name: "Barcelona"): ${cityObjectConstCopy.name}`)
console.log(`cityObjectConst === cityObjectConstCopy (modification): ${cityObjectConst === cityObjectConstCopy}`)

// As expected, TypeError
// cityObjectConst = {name: "Cracow", capitolCity: true}
// console.log(`cityObjectConst.name cityObjectConst.capitolCity reassingment (name: "Cracow", capitolCity: true): ${cityObjectConst.name}, ${cityObjectConst.capitolCity}`)
// console.log(`cityObjectConst === cityObjectConstCopy (reassingment): ${cityObjectConst === cityObjectConstCopy}`)


// Primitive values are immutable (no modification). Reassignment possible for let
let cityPrimitiveLet = "Warsaw"
console.log(`cityPrimitiveLet:${cityPrimitiveLet}`)

let cityPrimitiveLetCopy = cityPrimitiveLet
console.log(`cityPrimitiveLetCopy:${cityPrimitiveLetCopy}`)
cityPrimitiveLet = "Cracow"
console.log(`cityPrimitiveLet (reassignment of cityPrimitiveLet):${cityPrimitiveLet}`)
console.log(`cityPrimitiveCopy (reassignment of cityPrimitiveLet):${cityPrimitiveLetCopy}`)
