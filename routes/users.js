const router = require('express').Router();

//Bring in the User Registration function
const {
    userAuth,
    userLogin,
    checkRole,
    userRegister,
    serializeUser
} = require('../utils/Auth')

// all the Registration routes

//super admin Registration Route
router.post("/register-super-admin", async (req, res) => {
    await userRegister(req.body, "superadmin", res);
});

//admin Registration Route
router.post("/register-admin", async (req, res) => {
    await userRegister(req.body, "admin", res);
});

//employee Registration Route
router.post("/register-employee", async (req, res) => {
    await userRegister(req.body, "employee", res);
});

//company Registration Route
router.post("/register-company", async (req, res) => {
    await userRegister(req.body, "company", res);
});

//vehical Registration Route
router.post("/register-vehical", async (req, res) => {
    await userRegister(req.body, "vehical", res);
});

//All the login Routes

//super admin Login Route
router.post("/login-super-admin", async (req, res) => {
    await userLogin(req.body, "superadmin", res);
});

//admin Login Route
router.post("/login-admin", async (req, res) => {
    await userLogin(req.body, "admin", res);
});

//employee Login Route
router.post("/login-employee", async (req, res) => {
    await userLogin(req.body, "employee", res);
});

//company Login Route
router.post("/login-company", async (req, res) => {
    await userLogin(req.body, "company", res);
});

//vehical Login Route
router.post("/login-vehical", async (req, res) => {
    await userLogin(req.body, "vehical", res);
});

// profile Route
router.get("/profile", checkRole, async (req, res) => {
    return res.json(serializeUser(req.user));
});

// All the Protected Routes

// super admin Protected Route
router.get(
    "/super-admin-protected",
    userAuth,
    checkRole(["superadmin"]),
    async (req, res) => {
        return res.json("Hello Super Admin");
    }
);

// admin Protected Route
router.get(
    "/admin-protected",
    userAuth,
    checkRole(["admin"]),
    async (req, res) => {
        return res.json("Hello Admin");
    }
);

// employee Protected Route
router.get(
    "/employee-protected",
    userAuth,
    checkRole(["employee"]),
    async (req, res) => {
        return res.json("Hello Employee");
    }
);

// company Protected Route
router.get(
    "/company-protected",
    userAuth,
    checkRole(["company"]),
    async (req, res) => {
        return res.json("Hello Company");
    }
);

// vehical Protected Route
router.get(
    "/vehical-protected",
    userAuth,
    checkRole(["vehical"]),
    async (req, res) => {
        return res.json("Hello Vehical");
    }
);

module.exports = router;
