db.createUser(
    {
        user: "admin",
        pwd: "admin",
        roles:[
            "readWrite",
            {
                role: "readWrite",
                db: "graphql"
            }
        ]
    }
)