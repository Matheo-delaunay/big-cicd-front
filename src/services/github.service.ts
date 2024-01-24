import axios from "axios";

interface AccessTokenRes {
    access_token: string
}

interface UserInfoRes {
    id: number
}

export async function getAccessToken(code: string): Promise<AccessTokenRes> {
    return axios.post(`${import.meta.env.VITE_GITHUB}/login/oauth/access_token`, null, {
        params: {
            code: code
        },
        auth: {
          username: import.meta.env.VITE_GITHUB_CLIENT_ID,
            password: import.meta.env.VITE_GITHUB_CLIENT_SECRET
        },
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE",
            "Access-Control-Expose-Headers": "ETag, Link, X-GitHub-OTP, x-ratelimit-limit, x-ratelimit-remaining, x-ratelimit-reset, X-OAuth-Scopes, X-Accepted-OAuth-Scopes, X-Poll-Interval",
            "Access-Control-Max-Age": "86400",
            "Access-Control-Allow-Headers": "Authorization, Content-Type, If-Match, If-Modified-Since, If-None-Match, If-Unmodified-Since, X-GitHub-OTP, X-Requested-With"
        }
    })
        .then(res => res.data)
}

export async function getUserInfo(accessToken: string): Promise<UserInfoRes> {
    return axios.get(`${import.meta.env.VITE_GITHUB}/user`, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    })
        .then(res => res.data)
}