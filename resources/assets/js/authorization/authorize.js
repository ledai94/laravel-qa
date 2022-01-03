import policies from "./policies";

export default {
    install(Vue, options) {
        Vue.prototype.authorize = function(policy, model) {
            // Hàm nhận vào 2 tham số 1 là policies:modify, accept hoặc deleteQuestion 2 là model
            // Hàm trả về true false, false nếu chưa đăng nhập
            if (!window.Auth.signedIn) return false;
            // Còn true thì: kiểm tra xem user login hiện tại có phải user đăng câu hỏi hay câu trả lời hay không
            if (typeof policy === "string" && typeof model === "object") {
                const user = window.Auth.user;
                return policies[policy](user, model);
            }
        };

        Vue.prototype.signedIn = window.Auth.signedIn;
    }
};
