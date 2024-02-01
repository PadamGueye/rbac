const grantAccess = function(accessControlList, action, resource){
    return async (req, res, next) => {
        try {
            const {userId} = req.params;
            const isResourceOwner = req.user.id === userId;

            const permission = isResourceOwner
                ? accessControlList.can("owner")[action](resource)
                : accessControlList.can(req.user.role)[action](resource);

            if(!permission.granted){
                return res.status(401).json({
                    error: "You don't have enough permission to perform this action"
                });
            }
            next()
        } catch (e) {
            next(e);
        }
    }
}

module.exports = grantAccess;