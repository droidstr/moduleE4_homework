// из задания не ясно, проверять собственное свойство или нет

// 1 вариат - собственное

function myHasOwnProperty (prop, obj) {
    return obj.hasOwnProperty(prop)
}

// 2 вариант - в объекте и его прототипах

function myIn (prop, obj) {
    return prop in obj
}