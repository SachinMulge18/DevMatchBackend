const adminAuth = (req, res, next) => {
  const token = "abc****efg";
  const isAuth = token === "abc****";

  if (!isAuth) {
    res.status(401).send("not authorised");
  } else {
    next();
  }
};

module.exports = { adminAuth };
