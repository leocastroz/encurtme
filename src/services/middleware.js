import Cookie from "js-cookie"

export default {
  auth(to, from, next) {
    const token = Cookie.get("token")
    // criar ajax para checkar validade do token -- (futuramente)
    if (!token) {
      next({ path: "/login" });
    }
    next();
  }
}