let infoFn: Function = () => { throw new Error(`
        No toast implementation has been specified. To fix this:
        A) call useDefaultImplementations
        or
        B) call setInfo to specify a toast function.
        `); }

export function info(message: string) {
    infoFn(message);
}

export function setInfo(fn: (m: string) => void) {
    infoFn = fn;
}