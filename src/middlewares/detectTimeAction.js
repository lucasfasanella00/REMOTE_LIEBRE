module.exports = (req, res, next) => {
    const createdAt = new Date();

    req.createdAt = createdAt;

    next()
}