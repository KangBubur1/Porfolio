const validateString = (value: unknown, maxLength: number) => {
    if (!value || typeof value !== "string" || value.length > maxLength) {
        return {
            error: false
        };
    }
    
    return true;

}

export default validateString;