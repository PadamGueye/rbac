const AccessControl =  require("accesscontrol");
const ac = new AccessControl();

exports.defineUserRoles = (function(){
    ac.grant("basic")
        .readOwn("profile")
        .updateOwn("profile")

    ac.grant("supervisor")
        .extend("basic")
        .readAny("profile")

    ac.grant("admin")
        .extend("basic")
        .extend("supervisor")
        .updateAny("profile")
        .deleteAny("profile")

    ac.grant("owner")
        .extend("basic")
        .readOwn("product")
        .updateOwn("product")

    return ac;
})();