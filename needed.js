// Here, I'm gonna set up what i need to build a language.

export let stack = []

export const tbTypes = {
    Push: 0,
    Plus:  1,
    Write: 2,
    Drop: 3,
    OpCount: 4
}

if (tbTypes.OpCount != 4) {
    console.error("oops, you mishandled the ops");
}

export function lexPls(code) {
    // console.log(code)

    // Count the code
    var ip = 0
    for (; ip < code.len;) {
        console.log(code)
        ip += 1
    }
}

