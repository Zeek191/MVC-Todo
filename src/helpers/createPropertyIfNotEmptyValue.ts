export function createPropertyIfNotEmptyValue(
    propName: string,
    value?: string | number | boolean
) {
    if (!value) return null
    return {
        [propName]: value,
    }
}
