// write a function that check if the current environment is local or not

export const isLocalEnvironment = () => {
    if (process.env.NODE_ENV === 'development') {
        return true
    } else {
        return false
    }
}