const AccessControl =  require("accesscontrol");
const ac = new AccessControl();

exports.defineProductRoles = (function (){
    ac.grant("basic")
        .readAny("product")

    ac.grant("supervisor")
        .extend("basic")
        .createAny("product")

    ac.grant("admin")
        .extend(['basic', 'supervisor'])
        .updateAny("product")
        .deleteAny("product")

    return ac;
})();