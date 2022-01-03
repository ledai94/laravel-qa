export default {
    modify(user, model) {
        // console.log(user, model);
        // console.log(user.id, model.user_id);
        return user.id === model.user_id;
    },

    accept(user, answer) {
        // console.log(user, answer);
        console.log(user.id, answer.question.user_id);
        // gốc
        // return user.id === answer.question.user_id;
        // sửa
        return user.id !== answer.question.user_id;
    },

    deleteQuestion(user, question) {
        // console.log(user, question);
        return user.id === question.user_id && question.answers_count < 1;
    }
};
