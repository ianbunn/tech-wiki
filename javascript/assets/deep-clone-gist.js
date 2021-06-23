const object = {}

const deepCloneTrick = (object) => {
    return JSON.parse(JSON.stringify(object))
}

deepCloneTrick({ a: 'a', b: 'b', c: 'c' })
