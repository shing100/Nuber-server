const privateResolver = (resolverFunction) => async (prarent, args, context, info) => {
    if(context.req.user) {
        throw new Error("No JWT.")
    }
    const resolved = await resolverFunction(prarent, args, context, info);
    return resolved
}

export default privateResolver

