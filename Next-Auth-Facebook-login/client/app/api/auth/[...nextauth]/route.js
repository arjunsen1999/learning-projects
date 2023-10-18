import NextAuth from "next-auth";
import FacebookProvider from "next-auth/providers/facebook"
export const authOptions = {
    providers : [
        FacebookProvider({
            clientId : "669505088471550",
            clientSecret : "0955b1f42c1a5dc08f0cdb94883b9ed8"
        })
    ]
}
export default NextAuth(authOptions);