export function setItem(key, value) {
    // json 转化为 json字符串
    localStorage.setItem(key, JSON.stringify(value))
}

export function getItem(key) {
    return  JSON.parse(localStorage.getItem(key))
}

export function removeItem(key) {
    localStorage.removeItem(key)
}

export function clearAll() {
    localStorage.clear();
}