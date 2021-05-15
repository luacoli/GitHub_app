export interface UserSearchResult {
     users: Users[];
 }

export interface Users{
     login: string,
     id: string,
     avatar_url: string,
     url: string,
     html_url: string,
     repos_url: string,
     name: string,
     location: string,
     bio: string,
     public_repos: number,
     followers: number,
     following: number,

}