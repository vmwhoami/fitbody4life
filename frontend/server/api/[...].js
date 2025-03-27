export default defineCachedEventHandler((event) => {
    return $fetch(`https://api.coinlore.net${event.node.req.url}`)
})