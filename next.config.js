/** @type {import('next').NextConfig} */
const nextConfig = {
    redirects: async () => {
        return [
            {
                source: "/todolist",
                destination: "/",
                permanent: false
            },
            {
                source: "/todolist/:todo",
                destination: "/",
                permanent: false
            },
        ]
    }
}

module.exports = nextConfig
