export const bookValidator = {
    title: {
        isString: {
            errorMessage: 'Only string accepted'
        }, 
        notEmpty: {
            errorMessage: 'Title cannot be empty'
        }
    }, 
    author: {
        isString: {
            errorMessage: 'Only string accepted'
        }, 
        notEmpty: {
            errorMessage: 'Author cannot be empty'
        }
    }, 
    publishYear: {
        isNumeric: {
            errorMessage: 'Only number accepted'
        }, 
        notEmpty: {
            errorMessage: 'Publication year cannot be empty'
        }
    }, 
};
