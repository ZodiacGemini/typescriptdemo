const GetQuestionMarks = (amount: number) => {
    let questionMarks = '';

    for(var i = 0; i < amount; i++){
        questionMarks += '?';
    }

    return questionMarks;
}

export default GetQuestionMarks;