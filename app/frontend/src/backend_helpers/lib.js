export const IsTimemarkValid = (timemark) => {
    const expirationTime = new Date(timemark * 1000);
    const currentTime = new Date();
    return currentTime < expirationTime
}