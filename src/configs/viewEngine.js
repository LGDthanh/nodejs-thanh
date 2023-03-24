import expess from "express"

const configViewEngine = (app) => {
    app.set("view engine", "ejs");
    app.set("views", "./src/views")
    app.use(expess.static('./src/public'))
}
export default configViewEngine;